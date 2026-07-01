import { fail } from '@sveltejs/kit';
import { supabaseAdmin } from '$lib/server/supabase';

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

function toStartIso(dateValue) {
	if (!dateValue) return '';
	const date = new Date(`${dateValue}T00:00:00`);
	return Number.isNaN(date.getTime()) ? '' : date.toISOString();
}

function toEndIso(dateValue) {
	if (!dateValue) return '';
	const date = new Date(`${dateValue}T23:59:59.999`);
	return Number.isNaN(date.getTime()) ? '' : date.toISOString();
}

function cleanSearch(value) {
	return String(value || '').trim().replace(/[,%()]/g, '').slice(0, 120);
}

function applyFilters(query, filters) {
	if (filters.status && filters.status !== 'all') query = query.eq('status', filters.status);
	if (filters.service && filters.service !== 'all') query = query.eq('service_needed', filters.service);
	if (filters.emailSent === 'sent') query = query.eq('email_sent', true);
	if (filters.emailSent === 'failed') query = query.eq('email_sent', false).not('email_error', 'is', null);
	if (filters.fromIso) query = query.gte('created_at', filters.fromIso);
	if (filters.toIso) query = query.lte('created_at', filters.toIso);
	if (filters.q) {
		const q = `%${filters.q}%`;
		query = query.or(`first_name.ilike.${q},last_name.ilike.${q},email.ilike.${q},phone.ilike.${q},property_address.ilike.${q},service_needed.ilike.${q}`);
	}
	return query;
}

export async function load({ url }) {
	const filters = {
		status: url.searchParams.get('status') || 'all',
		service: url.searchParams.get('service') || 'all',
		emailSent: url.searchParams.get('emailSent') || 'all',
		from: url.searchParams.get('from') || '',
		to: url.searchParams.get('to') || '',
		q: cleanSearch(url.searchParams.get('q'))
	};

	filters.fromIso = toStartIso(filters.from);
	filters.toIso = toEndIso(filters.to);

	let query = supabaseAdmin
		.from('contact_requests')
		.select('*', { count: 'exact' })
		.order('created_at', { ascending: false })
		.range(0, 74);

	query = applyFilters(query, filters);

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
	}
};
