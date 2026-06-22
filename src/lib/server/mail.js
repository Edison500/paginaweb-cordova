import nodemailer from 'nodemailer';
import { env } from '$env/dynamic/private';

function escapeHtml(value = '') {
	return String(value ?? '')
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;')
		.replaceAll("'", '&#039;');
}

function requiredEnv(name) {
	const value = env[name];
	if (!value) throw new Error(`Missing environment variable: ${name}`);
	return value;
}

export async function sendContactEmail(data) {
	const smtpHost = env.SMTP_HOST || 'smtp.gmail.com';
	const smtpPort = Number(env.SMTP_PORT || 465);
	const smtpUser = requiredEnv('SMTP_USER');
	const smtpPass = requiredEnv('SMTP_PASS');
	const mailTo = requiredEnv('MAIL_TO');

	const transporter = nodemailer.createTransport({
		host: smtpHost,
		port: smtpPort,
		secure: smtpPort === 465,
		auth: {
			user: smtpUser,
			pass: smtpPass
		}
	});

	const fullName = `${data.first_name} ${data.last_name}`.trim();
	const service = data.service_needed || 'Website request';
	const submittedAt = new Date().toLocaleString('en-US', {
		timeZone: 'America/Chicago',
		dateStyle: 'medium',
		timeStyle: 'short'
	});

	const html = `
		<div style="font-family:Arial,sans-serif;background:#f6f6f0;padding:24px;color:#1f2933;">
			<div style="max-width:720px;margin:0 auto;background:#ffffff;border-radius:18px;overflow:hidden;border:1px solid #e8e5d6;box-shadow:0 10px 32px rgba(0,0,0,.08);">
				<div style="background:linear-gradient(135deg,#6b6b28 0%,#4a4a1c 100%);padding:26px 30px;color:#ffffff;">
					<p style="margin:0 0 8px;font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#fffcd9;">Cordova Property Services</p>
					<h1 style="margin:0;font-size:26px;line-height:1.2;">New Quote Request</h1>
					<p style="margin:10px 0 0;color:rgba(255,255,255,.86);font-size:14px;">A new request was submitted from the website.</p>
				</div>

				<div style="padding:28px 30px;">
					<table style="width:100%;border-collapse:collapse;font-size:14px;">
						${row('Service Needed', service)}
						${row('Name', fullName)}
						${row('Email', data.email)}
						${row('Phone', data.phone || 'Not provided')}
						${row('Property Address', data.property_address || 'Not provided')}
						${row('Source Page', data.source_page || 'website')}
						${row('Submitted At', submittedAt)}
					</table>

					<h2 style="font-size:16px;margin:26px 0 10px;color:#1a2018;">Property Details</h2>
					<div style="background:#f7f7f2;border:1px solid #ebe8da;border-radius:14px;padding:16px;color:#333;line-height:1.7;font-size:14px;">
						${escapeHtml(data.message).replaceAll('\n', '<br>')}
					</div>

					<div style="margin-top:26px;padding:16px;border-radius:14px;background:#fbfaf2;border:1px solid #ebe8da;">
						<p style="margin:0;color:#6b6b28;font-weight:700;">Tip:</p>
						<p style="margin:6px 0 0;color:#555;font-size:13px;line-height:1.6;">Reply directly to this email to contact ${escapeHtml(fullName || 'the customer')}.</p>
					</div>
				</div>
			</div>
		</div>
	`;

	await transporter.sendMail({
		from: env.MAIL_FROM || `Cordova Property Services <${smtpUser}>`,
		to: mailTo,
		replyTo: data.email,
		subject: `New Quote Request - ${service}`,
		html,
		text: [
			'New Quote Request',
			'',
			`Service Needed: ${service}`,
			`Name: ${fullName}`,
			`Email: ${data.email}`,
			`Phone: ${data.phone || 'Not provided'}`,
			`Property Address: ${data.property_address || 'Not provided'}`,
			`Source Page: ${data.source_page || 'website'}`,
			`Submitted At: ${submittedAt}`,
			'',
			'Property Details:',
			data.message
		].join('\n')
	});
}

function row(label, value) {
	return `
		<tr>
			<td style="width:34%;padding:12px 10px;border-bottom:1px solid #eee;font-weight:700;color:#6b6b28;vertical-align:top;">${escapeHtml(label)}</td>
			<td style="padding:12px 10px;border-bottom:1px solid #eee;color:#1f2933;vertical-align:top;">${escapeHtml(value)}</td>
		</tr>
	`;
}
