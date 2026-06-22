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

function startOfToday() {
	const now = new Date();
	now.setHours(0, 0, 0, 0);
	return now.toISOString();
}

function startOfMonth() {
	const now = new Date();
	return new Date(now.getFullYear(), now.getMonth(), 1).toISOString();
}

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

async function countQuery(builder) {
	const { count, error } = await builder;
	if (error) {
		console.error('Supabase count error:', error);
		return 0;
	}
	return count || 0;
}

async function getDashboardStats() {
	const [total, today, month, newLeads, contacted, closed, emailFailed] = await Promise.all([
		countQuery(supabaseAdmin.from('contact_requests').select('id', { count: 'exact', head: true })),
		countQuery(supabaseAdmin.from('contact_requests').select('id', { count: 'exact', head: true }).gte('created_at', startOfToday())),
		countQuery(supabaseAdmin.from('contact_requests').select('id', { count: 'exact', head: true }).gte('created_at', startOfMonth())),
		countQuery(supabaseAdmin.from('contact_requests').select('id', { count: 'exact', head: true }).eq('status', 'new')),
		countQuery(supabaseAdmin.from('contact_requests').select('id', { count: 'exact', head: true }).eq('status', 'contacted')),
		countQuery(supabaseAdmin.from('contact_requests').select('id', { count: 'exact', head: true }).eq('status', 'closed')),
		countQuery(supabaseAdmin.from('contact_requests').select('id', { count: 'exact', head: true }).eq('email_sent', false).not('email_error', 'is', null))
	]);

	return { total, today, month, newLeads, contacted, closed, emailFailed };
}

async function getTopServices() {
	const since = new Date(Date.now() - 1000 * 60 * 60 * 24 * 90).toISOString();
	const { data, error } = await supabaseAdmin
		.from('contact_requests')
		.select('service_needed')
		.gte('created_at', since)
		.limit(1000);

	if (error) {
		console.error('Supabase top services error:', error);
		return [];
	}

	const counts = new Map();
	for (const row of data || []) {
		const service = row.service_needed || 'Unknown';
		counts.set(service, (counts.get(service) || 0) + 1);
	}

	return [...counts.entries()]
		.map(([service, count]) => ({ service, count }))
		.sort((a, b) => b.count - a.count)
		.slice(0, 6);
}


async function safeVisitCount(builder) {
	const { count, error } = await builder;
	if (error) {
		console.error('Supabase page visit count error:', error);
		return 0;
	}
	return count || 0;
}

async function getUniqueVisitors(sinceIso) {
	let query = supabaseAdmin
		.from('page_visits')
		.select('visitor_id, ip_hash')
		.limit(5000);

	if (sinceIso) query = query.gte('created_at', sinceIso);

	const { data, error } = await query;
	if (error) {
		console.error('Supabase unique visitors error:', error);
		return 0;
	}

	const unique = new Set();
	for (const row of data || []) {
		const key = row.visitor_id || row.ip_hash;
		if (key) unique.add(key);
	}
	return unique.size;
}

async function getVisitStats() {
	const todayIso = startOfToday();
	const monthIso = startOfMonth();

	const [totalViews, todayViews, monthViews, todayVisitors, monthVisitors] = await Promise.all([
		safeVisitCount(supabaseAdmin.from('page_visits').select('id', { count: 'exact', head: true })),
		safeVisitCount(supabaseAdmin.from('page_visits').select('id', { count: 'exact', head: true }).gte('created_at', todayIso)),
		safeVisitCount(supabaseAdmin.from('page_visits').select('id', { count: 'exact', head: true }).gte('created_at', monthIso)),
		getUniqueVisitors(todayIso),
		getUniqueVisitors(monthIso)
	]);

	return { totalViews, todayViews, monthViews, todayVisitors, monthVisitors };
}

async function getTopPages() {
	const since = new Date(Date.now() - 1000 * 60 * 60 * 24 * 30).toISOString();
	const { data, error } = await supabaseAdmin
		.from('page_visits')
		.select('path, title')
		.gte('created_at', since)
		.limit(2000);

	if (error) {
		console.error('Supabase top pages error:', error);
		return [];
	}

	const counts = new Map();
	for (const row of data || []) {
		const path = row.path || '/';
		const current = counts.get(path) || { path, title: row.title || path, count: 0 };
		current.count += 1;
		if (!current.title && row.title) current.title = row.title;
		counts.set(path, current);
	}

	return [...counts.values()]
		.sort((a, b) => b.count - a.count)
		.slice(0, 8);
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

	const [{ data: requests, count, error }, stats, topServices, visitStats, topPages] = await Promise.all([
		query,
		getDashboardStats(),
		getTopServices(),
		getVisitStats(),
		getTopPages()
	]);

	if (error) {
		console.error('Supabase admin list error:', error);
		return {
			filters,
			requests: [],
			filteredTotal: 0,
			stats,
			topServices,
			visitStats,
			topPages,
			services: SERVICES,
			statuses: [...STATUSES],
			error: error.message
		};
	}

	return {
		filters,
		requests: requests || [],
		filteredTotal: count || 0,
		stats,
		topServices,
		visitStats,
		topPages,
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
