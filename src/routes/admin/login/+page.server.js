import { fail, redirect } from '@sveltejs/kit';
import { adminPasswordIsConfigured, createAdminSession, getAdminUsername, validateAdminCredentials } from '$lib/server/adminAuth';

export function load() {
	return {
		configured: adminPasswordIsConfigured(),
		expectedUser: getAdminUsername()
	};
}

export const actions = {
	default: async ({ request, cookies, url }) => {
		const formData = await request.formData();
		const username = String(formData.get('username') || '').trim();
		const password = String(formData.get('password') || '');

		if (!adminPasswordIsConfigured()) {
			return fail(500, {
				message: 'Admin password is not configured. Add ADMIN_PASSWORD to your .env file.'
			});
		}

		if (!validateAdminCredentials(username, password)) {
			return fail(400, {
				username,
				message: 'Invalid username or password.'
			});
		}

		createAdminSession(cookies, username);
		throw redirect(303, url.searchParams.get('redirectTo') || '/admin/dashboard');
	}
};
