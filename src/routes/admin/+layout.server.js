import { redirect } from '@sveltejs/kit';
import { readAdminSession } from '$lib/server/adminAuth';

export function load({ cookies, url }) {
	const session = readAdminSession(cookies);
	const isLoginPage = url.pathname === '/admin/login';

	if (!session && !isLoginPage) {
		const redirectTo = `${url.pathname}${url.search}`;
		throw redirect(303, `/admin/login?redirectTo=${encodeURIComponent(redirectTo)}`);
	}

	if (session && isLoginPage) {
		throw redirect(303, '/admin/dashboard');
	}

	return { admin: session };
}
