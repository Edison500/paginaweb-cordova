import { env } from '$env/dynamic/private';
import { dev } from '$app/environment';
import { createHmac, randomBytes, timingSafeEqual } from 'node:crypto';

const COOKIE_NAME = 'cordova_admin_session';
const SESSION_MAX_AGE = 60 * 60 * 12; // 12 hours

function getSecret() {
	return env.ADMIN_SESSION_SECRET || 'dev-only-change-this-secret';
}

function base64url(input) {
	return Buffer.from(input).toString('base64url');
}

function sign(value) {
	return createHmac('sha256', getSecret()).update(value).digest('base64url');
}

function safeEqual(a, b) {
	const aBuffer = Buffer.from(String(a));
	const bBuffer = Buffer.from(String(b));

	if (aBuffer.length !== bBuffer.length) return false;
	return timingSafeEqual(aBuffer, bBuffer);
}

export function getAdminUsername() {
	return env.ADMIN_USERNAME || env.ADMIN_EMAIL || 'admin';
}

export function adminPasswordIsConfigured() {
	return Boolean(env.ADMIN_PASSWORD);
}

export function validateAdminCredentials(username, password) {
	if (!adminPasswordIsConfigured()) return false;

	const expectedUser = getAdminUsername();
	const expectedPassword = env.ADMIN_PASSWORD;

	return safeEqual(username, expectedUser) && safeEqual(password, expectedPassword);
}

export function createAdminSession(cookies, username) {
	const payload = {
		username,
		exp: Date.now() + SESSION_MAX_AGE * 1000,
		nonce: randomBytes(12).toString('hex')
	};

	const encodedPayload = base64url(JSON.stringify(payload));
	const token = `${encodedPayload}.${sign(encodedPayload)}`;

	cookies.set(COOKIE_NAME, token, {
		path: '/',
		httpOnly: true,
		sameSite: 'lax',
		secure: !dev,
		maxAge: SESSION_MAX_AGE
	});
}

export function readAdminSession(cookies) {
	const token = cookies.get(COOKIE_NAME);
	if (!token || !token.includes('.')) return null;

	const [encodedPayload, signature] = token.split('.');
	if (!encodedPayload || !signature) return null;

	const expectedSignature = sign(encodedPayload);
	if (!safeEqual(signature, expectedSignature)) return null;

	try {
		const payload = JSON.parse(Buffer.from(encodedPayload, 'base64url').toString('utf8'));
		if (!payload?.username || !payload?.exp) return null;
		if (Date.now() > Number(payload.exp)) return null;
		return { username: payload.username };
	} catch {
		return null;
	}
}

export function clearAdminSession(cookies) {
	cookies.delete(COOKIE_NAME, { path: '/' });
}
