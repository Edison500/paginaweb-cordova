import { fail } from '@sveltejs/kit';
import { supabaseAdmin } from '$lib/server/supabase';
import { sendContactEmail } from '$lib/server/mail';
import { applyLeadFilters, buildFiltersFromUrl } from '$lib/server/leadFilters';

const STATUSES = new Set(['new', 'viewed', 'contacted', 'closed']);

const SERVICES = [
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
];

export async function load({ url }) {
	const filters = buildFiltersFromUrl(url);

	let query = supabaseAdmin
		.from('contact_requests')
		.select('*', { count: 'exact' })
		.order('created_at', { ascending: false })
		.range(0, 74);

	query = applyLeadFilters(query, filters);

	const { data: requests, count, error } = await query;

	if (error) {
		console.error('Supabase admin list error:', error);
		return {
			filters,
			requests: [],
			filteredTotal: 0,
			services: SERVICES,
			statuses: [...STATUSES],
			error: error.message
		};
	}

	return {
		filters,
		requests: requests || [],
		filteredTotal: count || 0,
		services: SERVICES,
		statuses: [...STATUSES],
		error: ''
	};
}

export const actions = {
	updateStatus: async ({ request }) => {
		const formData = await request.formData();
		const id = String(formData.get('id') || '').trim();
		const status = String(formData.get('status') || '').trim();

		if (!id || !STATUSES.has(status)) {
			return fail(400, { message: 'Invalid status update.' });
		}

		const { error } = await supabaseAdmin
			.from('contact_requests')
			.update({ status })
			.eq('id', id);

		if (error) {
			console.error('Supabase status update error:', error);
			return fail(500, { message: 'Could not update the request status.' });
		}

		return { message: 'Status updated successfully.' };
	},

	retryEmail: async ({ request }) => {
		const formData = await request.formData();
		const id = String(formData.get('id') || '').trim();

		if (!id) {
			return fail(400, { message: 'Missing request id.' });
		}

		const { data: leadRow, error: fetchError } = await supabaseAdmin
			.from('contact_requests')
			.select('*')
			.eq('id', id)
			.single();

		if (fetchError || !leadRow) {
			return fail(404, { message: 'Request not found.' });
		}

		try {
			await sendContactEmail(leadRow);

			await supabaseAdmin
				.from('contact_requests')
				.update({
					email_sent: true,
					email_sent_at: new Date().toISOString(),
					email_error: null
				})
				.eq('id', id);

			return { message: 'Email resent successfully.' };
		} catch (mailError) {
			console.error('Retry email error:', mailError);

			await supabaseAdmin
				.from('contact_requests')
				.update({
					email_sent: false,
					email_error: mailError?.message || 'Unknown email error'
				})
				.eq('id', id);

			return fail(500, { message: 'Could not resend the email. Check SMTP settings.' });
		}
	},

	saveNotes: async ({ request }) => {
		const formData = await request.formData();
		const id = String(formData.get('id') || '').trim();
		const notes = String(formData.get('internal_notes') || '').slice(0, 4000);

		if (!id) {
			return fail(400, { message: 'Missing request id.' });
		}

		const { error } = await supabaseAdmin
			.from('contact_requests')
			.update({ internal_notes: notes })
			.eq('id', id);

		if (error) {
			console.error('Supabase save notes error:', error);
			return fail(500, { message: 'Could not save the note.' });
		}

		return { message: 'Note saved.' };
	}
};
