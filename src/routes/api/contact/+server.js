import { json } from '@sveltejs/kit';
import { supabaseAdmin } from '$lib/server/supabase';
import { sendContactEmail } from '$lib/server/mail';

const SERVICES = new Set([
	'Turnkey Services',
	'Painting',
	'General Repairs',
	'Cleaning',
	'Water Remediation',
	'Tub & Shower Resurfacing',
	'Counter Resurfacing',
	'Installation Services',
	'Cabinet Painting',
	'Pressure Washing',
	'Millwork',
	'Millwork & Trim',
	'Sheetrock Repair',
	'Other / Multiple Services'
]);

const IP_WINDOW_MS = 10 * 60 * 1000;
const IP_MAX_REQUESTS = 3;
const EMAIL_WINDOW_MS = 2 * 60 * 1000;

const rateStore = globalThis.__cordovaContactRateStore || new Map();
globalThis.__cordovaContactRateStore = rateStore;

function cleanText(value, max = 2000) {
	return String(value ?? '').trim().slice(0, max);
}

function isValidEmail(email) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getClientIp(request) {
	const netlifyIp = request.headers.get('x-nf-client-connection-ip');
	const forwarded = request.headers.get('x-forwarded-for');
	return cleanText(netlifyIp || forwarded?.split(',')?.[0] || 'unknown', 120);
}

function tooManyFromIp(ip) {
	if (!ip || ip === 'unknown') return false;

	const now = Date.now();
	const recent = (rateStore.get(ip) || []).filter((timestamp) => now - timestamp < IP_WINDOW_MS);

	if (recent.length >= IP_MAX_REQUESTS) {
		rateStore.set(ip, recent);
		return true;
	}

	recent.push(now);
	rateStore.set(ip, recent);

	for (const [key, timestamps] of rateStore.entries()) {
		const active = timestamps.filter((timestamp) => now - timestamp < IP_WINDOW_MS);
		if (active.length) rateStore.set(key, active);
		else rateStore.delete(key);
	}

	return false;
}

function validatePayload(payload) {
	if (!payload.service_needed) return 'Please select a service.';
	if (!SERVICES.has(payload.service_needed)) return 'Please select a valid service.';
	if (!payload.first_name || payload.first_name.length < 2) return 'Please enter your first name.';
	if (!payload.last_name || payload.last_name.length < 2) return 'Please enter your last name.';
	if (!payload.email || !isValidEmail(payload.email)) return 'Please enter a valid email address.';
	if (payload.phone) {
		const digits = payload.phone.replace(/\D/g, '');
		if (digits.length < 7) return 'Please enter a valid phone number or leave it blank.';
	}
	if (!payload.message || payload.message.length < 10) return 'Please tell us a little more about your property.';
	return '';
}

async function emailWasUsedRecently(email) {
	const cutoff = new Date(Date.now() - EMAIL_WINDOW_MS).toISOString();

	const { data, error } = await supabaseAdmin
		.from('contact_requests')
		.select('id')
		.eq('email', email)
		.gte('created_at', cutoff)
		.limit(1);

	if (error) {
		console.error('Supabase duplicate check error:', error);
		return false;
	}

	return Array.isArray(data) && data.length > 0;
}

export async function POST({ request }) {
	let body;

	try {
		body = await request.json();
	} catch {
		return json({ ok: false, message: 'Invalid request.' }, { status: 400 });
	}

	// Honeypot anti-bot field. Real users do not see or fill this.
	// Important: do not return a fake success here while testing, because it looks like the email was sent.
	if (cleanText(body.companyWebsite || body.website || body.company_website, 250)) {
		console.warn('Contact honeypot triggered. Request blocked before Supabase insert.');
		return json(
			{ ok: false, message: 'Spam protection triggered. Please reload the page and try again.' },
			{ status: 400 }
		);
	}

	const clientIp = getClientIp(request);

	const payload = {
		service_needed: cleanText(body.serviceNeeded || body.service_needed, 180),
		first_name: cleanText(body.firstName || body.first_name, 100),
		last_name: cleanText(body.lastName || body.last_name, 100),
		email: cleanText(body.email, 180).toLowerCase(),
		phone: cleanText(body.phone, 80),
		property_address: cleanText(body.propertyAddress || body.property_address, 300),
		message: cleanText(body.message, 4000),
		source_page: cleanText(body.sourcePage || body.source_page || 'website', 250),
		user_agent: cleanText(request.headers.get('user-agent') || '', 500),
		referrer: cleanText(request.headers.get('referer') || '', 500)
	};

	const validationError = validatePayload(payload);
	if (validationError) {
		return json({ ok: false, message: validationError }, { status: 400 });
	}

	if (tooManyFromIp(clientIp)) {
		return json(
			{ ok: false, message: 'Too many requests. Please wait a few minutes before sending again.' },
			{ status: 429 }
		);
	}

	if (await emailWasUsedRecently(payload.email)) {
		return json(
			{ ok: false, message: 'We already received a request from this email. Please wait a couple of minutes before sending another one.' },
			{ status: 429 }
		);
	}

	const { data: savedRequest, error: insertError } = await supabaseAdmin
		.from('contact_requests')
		.insert(payload)
		.select('id')
		.single();

	if (insertError) {
		console.error('Supabase insert error:', insertError);
		return json(
			{ ok: false, message: 'Could not save the request. Please try again.' },
			{ status: 500 }
		);
	}

	try {
		await sendContactEmail({ ...payload, id: savedRequest.id });

		await supabaseAdmin
			.from('contact_requests')
			.update({
				email_sent: true,
				email_sent_at: new Date().toISOString(),
				email_error: null
			})
			.eq('id', savedRequest.id);

		return json({
			ok: true,
			message: 'Request sent successfully.',
			requestId: savedRequest.id
		});
	} catch (mailError) {
		console.error('Email error:', mailError);

		await supabaseAdmin
			.from('contact_requests')
			.update({
				email_sent: false,
				email_error: mailError?.message || 'Unknown email error'
			})
			.eq('id', savedRequest.id);

		return json(
			{
				ok: false,
				message: 'The request was saved, but the email could not be sent. Please check SMTP settings.',
				requestId: savedRequest.id
			},
			{ status: 500 }
		);
	}
}
