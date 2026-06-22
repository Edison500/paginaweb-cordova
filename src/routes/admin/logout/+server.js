import { redirect } from '@sveltejs/kit';
import { clearAdminSession } from '$lib/server/adminAuth';

export function POST({ cookies }) {
	clearAdminSession(cookies);
	throw redirect(303, '/admin/login');
}

export function GET({ cookies }) {
	clearAdminSession(cookies);
	throw redirect(303, '/admin/login');
}
