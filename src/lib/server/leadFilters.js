export function toStartIso(dateValue) {
	if (!dateValue) return '';
	const date = new Date(`${dateValue}T00:00:00`);
	return Number.isNaN(date.getTime()) ? '' : date.toISOString();
}

export function toEndIso(dateValue) {
	if (!dateValue) return '';
	const date = new Date(`${dateValue}T23:59:59.999`);
	return Number.isNaN(date.getTime()) ? '' : date.toISOString();
}

export function cleanSearch(value) {
	return String(value || '').trim().replace(/[,%()]/g, '').slice(0, 120);
}

export function buildFiltersFromUrl(url) {
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

	return filters;
}

export function applyLeadFilters(query, filters) {
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
