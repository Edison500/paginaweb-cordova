import { readAdminSession } from '$lib/server/adminAuth';
import { supabaseAdmin } from '$lib/server/supabase';
import { applyLeadFilters, buildFiltersFromUrl } from '$lib/server/leadFilters';

const MAX_ROWS = 5000;

const COLUMNS = [
	'created_at',
	'status',
	'service_needed',
	'first_name',
	'last_name',
	'email',
	'phone',
	'property_address',
	'source_page',
	'referrer',
	'email_sent',
	'email_error',
	'internal_notes',
	'message'
];

function csvEscape(value) {
	const str = String(value ?? '');
	if (/[",\n]/.test(str)) {
		return `"${str.replaceAll('"', '""')}"`;
	}
	return str;
}

export async function GET({ cookies, url }) {
	const session = readAdminSession(cookies);
	if (!session) {
		return new Response('Unauthorized', { status: 401 });
	}

	const filters = buildFiltersFromUrl(url);

	let query = supabaseAdmin
		.from('contact_requests')
		.select('*')
		.order('created_at', { ascending: false })
		.limit(MAX_ROWS);

	query = applyLeadFilters(query, filters);

	const { data, error } = await query;

	if (error) {
		console.error('Supabase export error:', error);
		return new Response('Export failed', { status: 500 });
	}

	const lines = [COLUMNS.join(',')];
	for (const row of data || []) {
		lines.push(COLUMNS.map((col) => csvEscape(row[col])).join(','));
	}

	const csv = lines.join('\n');
	const filename = `cordova-leads-${new Date().toISOString().slice(0, 10)}.csv`;

	return new Response(csv, {
		headers: {
			'Content-Type': 'text/csv; charset=utf-8',
			'Content-Disposition': `attachment; filename="${filename}"`
		}
	});
}
