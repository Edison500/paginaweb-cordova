import { json } from '@sveltejs/kit';
import { createHash } from 'node:crypto';
import { env } from '$env/dynamic/private';
import { supabaseAdmin } from '$lib/server/supabase';

const DUPLICATE_WINDOW_MS = 30 * 1000;

function cleanText(value, max = 500) {
	return String(value ?? '').trim().slice(0, max);
}

function getClientIp(request) {
	const netlifyIp = request.headers.get('x-nf-client-connection-ip');
	const forwarded = request.headers.get('x-forwarded-for');
	return cleanText(netlifyIp || forwarded?.split(',')?.[0] || 'unknown', 120);
}

function hashIp(ip) {
	if (!ip || ip === 'unknown') return '';
	const salt = env.VISIT_HASH_SALT || env.ADMIN_SESSION_SECRET || 'cordova-property-services';
	return createHash('sha256').update(`${salt}:${ip}`).digest('hex');
}

function normalizePath(path) {
	const value = cleanText(path, 300);
	if (!value || !value.startsWith('/')) return '/';
	return value.split('?')[0].split('#')[0] || '/';
}

function shouldSkipPath(path) {
	return path.startsWith('/admin') || path.startsWith('/api');
}

function looksLikeBot(userAgent) {
	return /bot|crawl|spider|slurp|curl|wget|python|postman|preview|facebookexternalhit|whatsapp|telegram/i.test(userAgent || '');
}

async function wasTrackedRecently({ visitorId, path }) {
	if (!visitorId || !path) return false;

	const cutoff = new Date(Date.now() - DUPLICATE_WINDOW_MS).toISOString();
	const { data, error } = await supabaseAdmin
		.from('page_visits')
		.select('id')
		.eq('visitor_id', visitorId)
		.eq('path', path)
		.gte('created_at', cutoff)
		.limit(1);

	if (error) {
		console.error('Page visit duplicate check error:', error);
		return false;
	}

	return Array.isArray(data) && data.length > 0;
}

export async function POST({ request }) {
	let body;

	try {
		body = await request.json();
	} catch {
		return json({ ok: false, message: 'Invalid tracking request.' }, { status: 400 });
	}

	const path = normalizePath(body.path);
	const userAgent = cleanText(request.headers.get('user-agent') || '', 500);

	if (shouldSkipPath(path) || looksLikeBot(userAgent)) {
		return json({ ok: true, skipped: true });
	}

	const payload = {
		path,
		title: cleanText(body.title, 250),
		visitor_id: cleanText(body.visitorId || body.visitor_id, 150),
		referrer: cleanText(body.referrer || request.headers.get('referer') || '', 500),
		user_agent: userAgent,
		ip_hash: hashIp(getClientIp(request)),
		screen_width: Number.isFinite(Number(body.screenWidth || body.screen_width))
			? Number(body.screenWidth || body.screen_width)
			: null,
		language: cleanText(body.language, 80),
		timezone: cleanText(body.timezone, 120)
	};

	if (await wasTrackedRecently({ visitorId: payload.visitor_id, path: payload.path })) {
		return json({ ok: true, duplicate: true });
	}

	const { error } = await supabaseAdmin
		.from('page_visits')
		.insert(payload);

	if (error) {
		console.error('Supabase page visit insert error:', error);
		return json({ ok: false, message: 'Could not save page visit.' }, { status: 500 });
	}

	return json({ ok: true });
}
