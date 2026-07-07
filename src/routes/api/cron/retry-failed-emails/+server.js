import { json } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import { supabaseAdmin } from '$lib/server/supabase';
import { sendContactEmail } from '$lib/server/mail';

const RETRY_WINDOW_MS = 1000 * 60 * 60 * 24 * 7;
const MAX_PER_RUN = 20;

export async function GET({ request }) {
	// Vercel Cron Jobs firman sus llamadas con este header cuando CRON_SECRET
	// está configurado como variable de entorno del proyecto.
	const authHeader = request.headers.get('authorization');
	if (!env.CRON_SECRET || authHeader !== `Bearer ${env.CRON_SECRET}`) {
		return json({ ok: false, message: 'Unauthorized' }, { status: 401 });
	}

	const since = new Date(Date.now() - RETRY_WINDOW_MS).toISOString();

	const { data: pending, error } = await supabaseAdmin
		.from('contact_requests')
		.select('*')
		.eq('email_sent', false)
		.not('email_error', 'is', null)
		.gte('created_at', since)
		.limit(MAX_PER_RUN);

	if (error) {
		console.error('Cron retry fetch error:', error);
		return json({ ok: false, message: 'Fetch error' }, { status: 500 });
	}

	let retried = 0;
	let failed = 0;

	for (const row of pending || []) {
		try {
			await sendContactEmail(row);
			await supabaseAdmin
				.from('contact_requests')
				.update({ email_sent: true, email_sent_at: new Date().toISOString(), email_error: null })
				.eq('id', row.id);
			retried += 1;
		} catch (mailError) {
			console.error('Cron retry email error:', mailError);
			await supabaseAdmin
				.from('contact_requests')
				.update({ email_error: mailError?.message || 'Unknown email error' })
				.eq('id', row.id);
			failed += 1;
		}
	}

	return json({ ok: true, checked: (pending || []).length, retried, failed });
}
