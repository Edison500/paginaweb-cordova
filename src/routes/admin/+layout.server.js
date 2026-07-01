import { redirect } from '@sveltejs/kit';
import { readAdminSession } from '$lib/server/adminAuth';
import { supabaseAdmin } from '$lib/server/supabase';

function startOfToday() {
	const now = new Date();
	now.setHours(0, 0, 0, 0);
	return now.toISOString();
}

function startOfMonth() {
	const now = new Date();
	return new Date(now.getFullYear(), now.getMonth(), 1).toISOString();
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
	const [today, month, newLeads, contacted, closed, emailFailed] = await Promise.all([
		countQuery(supabaseAdmin.from('contact_requests').select('id', { count: 'exact', head: true }).gte('created_at', startOfToday())),
		countQuery(supabaseAdmin.from('contact_requests').select('id', { count: 'exact', head: true }).gte('created_at', startOfMonth())),
		countQuery(supabaseAdmin.from('contact_requests').select('id', { count: 'exact', head: true }).eq('status', 'new')),
		countQuery(supabaseAdmin.from('contact_requests').select('id', { count: 'exact', head: true }).eq('status', 'contacted')),
		countQuery(supabaseAdmin.from('contact_requests').select('id', { count: 'exact', head: true }).eq('status', 'closed')),
		countQuery(supabaseAdmin.from('contact_requests').select('id', { count: 'exact', head: true }).eq('email_sent', false).not('email_error', 'is', null))
	]);

	return { today, month, newLeads, contacted, closed, emailFailed };
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
	let query = supabaseAdmin.from('page_visits').select('visitor_id, ip_hash').limit(5000);
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

	const [todayViews, monthViews, todayVisitors] = await Promise.all([
		safeVisitCount(supabaseAdmin.from('page_visits').select('id', { count: 'exact', head: true }).gte('created_at', todayIso)),
		safeVisitCount(supabaseAdmin.from('page_visits').select('id', { count: 'exact', head: true }).gte('created_at', monthIso)),
		getUniqueVisitors(todayIso)
	]);

	return { todayViews, monthViews, todayVisitors };
}

function monthRange(monthParam) {
	const now = new Date();
	let year = now.getFullYear();
	let month = now.getMonth();

	if (monthParam && /^\d{4}-\d{2}$/.test(monthParam)) {
		const [y, m] = monthParam.split('-').map(Number);
		year = y;
		month = m - 1;
	}

	const since = new Date(year, month, 1);
	const until = new Date(year, month + 1, 1);
	const monthValue = `${year}-${String(month + 1).padStart(2, '0')}`;
	const label = since.toLocaleDateString('es-PE', { month: 'long', year: 'numeric' });

	return { since: since.toISOString(), until: until.toISOString(), monthValue, label };
}

function resolveTopPagesRange(url) {
	const period = url.searchParams.get('pagesPeriod') || '30d';

	if (period === 'total') {
		return { period: 'total', since: '1970-01-01T00:00:00.000Z', until: null, monthValue: null, label: 'Total histórico' };
	}

	if (period === 'month') {
		const { since, until, monthValue, label } = monthRange(url.searchParams.get('pagesMonth'));
		return { period: 'month', since, until, monthValue, label: `Mes de ${label}` };
	}

	const since = new Date(Date.now() - 1000 * 60 * 60 * 24 * 30).toISOString();
	return { period: '30d', since, until: null, monthValue: null, label: 'Últimos 30 días' };
}

async function getTopPages(range) {
	const { data, error } = await supabaseAdmin.rpc('get_top_pages', {
		p_since: range.since,
		p_until: range.until
	});

	if (error) {
		console.error('Supabase top pages error:', error);
		return [];
	}

	return data || [];
}

export async function load({ cookies, url, route }) {
	const session = readAdminSession(cookies);
	const isLoginPage = url.pathname === '/admin/login';

	if (!session && !isLoginPage) {
		const redirectTo = `${url.pathname}${url.search}`;
		throw redirect(303, `/admin/login?redirectTo=${encodeURIComponent(redirectTo)}`);
	}

	if (session && isLoginPage) {
		throw redirect(303, '/admin/dashboard');
	}

	// Las analíticas no dependen de los filtros de búsqueda: se cargan aquí (layout)
	// para que no se vuelvan a calcular cada vez que el usuario busca/filtra en el dashboard.
	if (!session || route.id !== '/admin/dashboard') {
		return { admin: session };
	}

	const topPagesRange = resolveTopPagesRange(url);
	const [stats, topServices, visitStats, topPages] = await Promise.all([
		getDashboardStats(),
		getTopServices(),
		getVisitStats(),
		getTopPages(topPagesRange)
	]);

	return { admin: session, stats, topServices, visitStats, topPages, topPagesRange };
}
