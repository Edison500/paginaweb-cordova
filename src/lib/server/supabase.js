import { createClient } from '@supabase/supabase-js';
import { env } from '$env/dynamic/private';
import WebSocket from 'ws';

if (!env.SUPABASE_URL) {
	throw new Error('Missing SUPABASE_URL in .env');
}

if (!env.SUPABASE_SERVICE_ROLE_KEY) {
	throw new Error('Missing SUPABASE_SERVICE_ROLE_KEY in .env');
}

export const supabaseAdmin = createClient(
	env.SUPABASE_URL,
	env.SUPABASE_SERVICE_ROLE_KEY,
	{
		auth: {
			persistSession: false,
			autoRefreshToken: false
		},
		realtime: {
			transport: WebSocket
		}
	}
);
