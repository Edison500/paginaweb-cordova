<script>
	import SiteShell from '$lib/components/layout/SiteShell.svelte';
	import FaqSection from '$lib/components/sections/FaqSection.svelte';

	let firstName = $state('');
	let lastName = $state('');
	let email = $state('');
	let phone = $state('');
	let propertyAddress = $state('');
	let service = $state('');
	let message = $state('');
	let status = $state('');
	let errorMessage = $state('');

	const services = [
		'Turnkey Services','Painting','General Repairs','Cleaning',
		'Tub & Shower Resurfacing','Counter Resurfacing',
		'Installation Services','Cabinet Painting',
		'Millwork & Trim','Sheetrock Repair','Other / Multiple Services'
	];

	function isValidEmail(value) {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
	}

	function validateForm() {
		if (!service) return 'Please select the service you need.';
		if (firstName.trim().length < 2) return 'Please enter your first name.';
		if (lastName.trim().length < 2) return 'Please enter your last name.';
		if (!isValidEmail(email)) return 'Please enter a valid email address.';
		if (phone.trim() && phone.replace(/\D/g, '').length < 7) return 'Please enter a valid phone number or leave it blank.';
		if (message.trim().length < 10) return 'Please tell us a little more about your property.';
		return '';
	}

	async function handleSubmit(e) {
		e.preventDefault();
		if (status === 'sending') return;

		const validationError = validateForm();
		if (validationError) {
			errorMessage = validationError;
			status = 'error';
			return;
		}

		status = 'sending';
		errorMessage = '';

		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					serviceNeeded: service,
					firstName,
					lastName,
					email,
					phone,
					propertyAddress,
					message,
					sourcePage: typeof window !== 'undefined' ? window.location.pathname : 'website'
				})
			});

			const result = await response.json().catch(() => ({}));

			if (!response.ok || !result.ok) {
				throw new Error(result.message || 'Could not send your request.');
			}

			if (!result.requestId) {
				throw new Error('The request was not saved. Please try again or call us directly.');
			}

			status = 'sent';
			firstName = lastName = email = phone = propertyAddress = service = message = '';
		} catch(err) {
			console.error(err);
			errorMessage = err?.message || 'Something went wrong. Please try again or call us directly.';
			status = 'error';
		}
	}
</script>

<svelte:head>
	<title>Contact Us | Cordova Property Services — Pensacola & Gulf Coast</title>
	<meta name="description" content="Contact Cordova Property Services for apartment maintenance, unit turns, and property services across Pensacola and the Gulf Coast. Free estimates, 24h response." />
</svelte:head>

<SiteShell>
<main class="main">

	<!-- HERO -->
	<section class="ct-hero dark-background">
		<img src="/assets/img/services.jpg" alt="Contact Cordova" class="ct-hero-bg" />
		<div class="ct-hero-overlay"></div>
		<div class="container ct-hero-content">
			<nav class="ct-breadcrumb">
				<a href="/">Home</a>
				<i class="bi bi-chevron-right"></i>
				<span>Contact</span>
			</nav>
			<div class="ct-hero-text">
				<span class="ct-eyebrow">
					<span class="ct-dot"></span>
					Free Quote • 24h Response
				</span>
				<h1>Ready to Get Your Units<br/>Move-In Ready?</h1>
				<p>Send one request and our team will help coordinate painting, cleaning, repairs, turnovers and more — no pressure, no obligation.</p>
			</div>
			<div class="ct-quick-strip">
				<a href="tel:+14482196669" class="ct-quick-item">
					<i class="bi bi-telephone-fill"></i>
					<div>
						<span class="ct-quick-label">Call Now</span>
						<span class="ct-quick-value">(448) 219-6669</span>
					</div>
				</a>
				<div class="ct-quick-div"></div>
				<a href="mailto:scheduling@cordovaps.com" class="ct-quick-item">
					<i class="bi bi-envelope-fill"></i>
					<div>
						<span class="ct-quick-label">Email Scheduling</span>
						<span class="ct-quick-value">scheduling@cordovaps.com</span>
					</div>
				</a>
				<div class="ct-quick-div"></div>
				<div class="ct-quick-item">
					<i class="bi bi-clock-fill"></i>
					<div>
						<span class="ct-quick-label">Office Hours</span>
						<span class="ct-quick-value">Mon–Fri 8AM–6PM</span>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- MAIN: Form + Sidebar -->
	<section class="ct-main section">
		<div class="container">
			<div class="ct-layout">

				<!-- FORM -->
				<div class="ct-form-col">
					{#if status === 'sent'}
						<div class="ct-success">
							<div class="ct-success-icon">
								<i class="bi bi-check-lg"></i>
							</div>
							<h3>Request Sent!</h3>
							<p>Thank you for reaching out. Our team will review your request and respond within 24 hours — often same day.</p>
							<div class="ct-success-next">
								<p class="ct-next-label">While you wait, you can also reach us directly:</p>
								<a href="tel:+14482196669" class="ct-btn-call">
									<i class="bi bi-telephone-fill"></i>
									(448) 219-6669
								</a>
							</div>
							<a href="/" class="ct-back-link">← Back to Home</a>
						</div>
					{:else}
						<div class="ct-form-card">
							<form onsubmit={handleSubmit}>
								<div class="ct-field ct-field-full">
									<label>Service Needed</label>
									<div class="ct-select-wrap">
										<select bind:value={service} required>
											<option value="">Select a service...</option>
											{#each services as s}<option value={s}>{s}</option>{/each}
										</select>
									</div>
								</div>

								<div class="ct-form-row">
									<div class="ct-field">
										<label>First Name</label>
										<input type="text" bind:value={firstName} placeholder="John" minlength="2" maxlength="100" required />
									</div>
									<div class="ct-field">
										<label>Last Name</label>
										<input type="text" bind:value={lastName} placeholder="Doe" minlength="2" maxlength="100" required />
									</div>
								</div>
								<div class="ct-form-row">
									<div class="ct-field">
										<label>Email</label>
										<input type="email" bind:value={email} placeholder="you@example.com" maxlength="180" required />
									</div>
									<div class="ct-field">
										<label>Phone</label>
										<input type="tel" bind:value={phone} placeholder="(555) 000-0000" maxlength="80" />
									</div>
								</div>
								<div class="ct-field ct-field-full">
									<label>Property Address</label>
									<input type="text" bind:value={propertyAddress} placeholder="123 Main St, Pensacola, FL 32501" maxlength="300" />
								</div>
								<div class="ct-field ct-field-full">
									<label>Tell Us About Your Property</label>
									<textarea bind:value={message} rows="5" placeholder="Describe your property, the services you need, urgency, number of units, and anything else helpful." minlength="10" maxlength="4000" required></textarea>
								</div>

								{#if status === 'error'}
									<div class="ct-error-msg">
										<i class="bi bi-exclamation-circle-fill"></i>
										{errorMessage || 'Something went wrong. Please try again or call us directly.'}
									</div>
								{/if}

								<button type="submit" class="ct-submit" disabled={status === 'sending'}>
									{#if status === 'sending'}
										<span class="ct-spinner"></span>
										Sending...
									{:else}
										Request Free Quote
										<i class="bi bi-arrow-right"></i>
									{/if}
								</button>
								<p class="ct-form-note ct-form-note-quote">Prefer to talk now? <a href="tel:+14482196669">Call (448) 219-6669</a></p>
							</form>
						</div>
					{/if}
				</div>

				<!-- SIDEBAR -->
				<aside class="ct-sidebar">

					<div class="ct-sidebar-photo">
						<img src="/assets/img/logo.png" alt="Cordova Property Services" style="object-fit:contain;background:#f4f3ee;padding:24px;" />
					</div>

					<div class="ct-why-card">
						<h4>Why property managers choose us</h4>
						<ul class="ct-why-list">
							<li><i class="bi bi-check-circle-fill"></i> 24h response, 24h start on approvals</li>
							<li><i class="bi bi-check-circle-fill"></i> Free, itemized estimate — no surprises</li>
							<li><i class="bi bi-check-circle-fill"></i> One team, one invoice, 12 services</li>
							<li><i class="bi bi-check-circle-fill"></i> Already in your PM platform</li>
							<li><i class="bi bi-check-circle-fill"></i> Before/after photos every job</li>
						</ul>
					</div>

					<div class="ct-direct-card">
						<h4>Reach us directly</h4>
						<a href="tel:+14482196669" class="ct-direct-item">
							<div class="ct-direct-icon"><i class="bi bi-telephone-fill"></i></div>
							<div>
								<span class="ct-direct-label">Office Number</span>
								<span class="ct-direct-val">+1 (448) 219-6669</span>
							</div>
						</a>
						<a href="tel:+18504852385" class="ct-direct-item">
							<div class="ct-direct-icon"><i class="bi bi-telephone-fill"></i></div>
							<div>
								<span class="ct-direct-label">Scheduling</span>
								<span class="ct-direct-val">+1 (850) 485-2385</span>
							</div>
						</a>
						<a href="mailto:customer@cordovaps.com" class="ct-direct-item">
							<div class="ct-direct-icon"><i class="bi bi-envelope-fill"></i></div>
							<div>
								<span class="ct-direct-label">General Inquiries</span>
								<span class="ct-direct-val">customer@cordovaps.com</span>
							</div>
						</a>
						<a href="mailto:scheduling@cordovaps.com" class="ct-direct-item">
							<div class="ct-direct-icon"><i class="bi bi-calendar-check-fill"></i></div>
							<div>
								<span class="ct-direct-label">Scheduling</span>
								<span class="ct-direct-val">scheduling@cordovaps.com</span>
							</div>
						</a>
					</div>

				</aside>
			</div>
		</div>
	</section>

	<FaqSection />

	<section class="ct-areas-final">
		<div class="container">
			<p class="ct-areas-label"><i class="bi bi-geo-alt-fill"></i> Serving 11 cities across Florida &amp; Alabama</p>
			<div class="ct-areas-list">
				{#each ['Pensacola','Gulf Breeze','Navarre','Fort Walton','Crestview','Milton','Daphne','Mobile','Gulf Shores','Orange Beach','Foley'] as city}
					<span>{city}</span>
				{/each}
			</div>
		</div>
	</section>

</main>
</SiteShell>

<style>
.hp-field{position:absolute!important;left:-9999px!important;width:1px!important;height:1px!important;overflow:hidden!important;opacity:0!important;pointer-events:none!important;}
.ct-areas-final{background:linear-gradient(135deg,#1a2018 0%,#0d120c 100%);padding:28px 0;}
.ct-areas-label{font-size:12px;font-weight:700;color:rgba(255,252,217,.7);text-transform:uppercase;letter-spacing:2px;margin-bottom:14px;display:flex;align-items:center;gap:8px;}
.ct-areas-label i{color:#fffcd9;}
.ct-areas-list{display:flex;flex-wrap:wrap;gap:8px;}
.ct-areas-list span{font-size:13px;font-weight:600;color:rgba(255,255,255,.8);background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.1);border-radius:20px;padding:6px 14px;}
.ct-hero{position:relative;min-height:480px;display:flex;align-items:center;overflow:hidden;}
.ct-hero-bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:1;}
.ct-hero-overlay{position:absolute;inset:0;background:linear-gradient(120deg,rgba(10,18,8,.9) 55%,rgba(107,107,40,.55) 100%);z-index:2;}
.ct-hero-content{position:relative;z-index:3;padding:90px 0 0;}
.ct-breadcrumb{display:flex;align-items:center;gap:8px;color:rgba(255,255,255,.6);font-size:13px;margin-bottom:20px;}
.ct-breadcrumb a{color:rgba(255,255,255,.6);text-decoration:none;}
.ct-breadcrumb a:hover{color:#fffcd9;}
.ct-breadcrumb i{font-size:10px;}
.ct-breadcrumb span{color:#fffcd9;}
.ct-eyebrow{display:inline-flex;align-items:center;gap:8px;font-size:12px;font-weight:700;color:#fffcd9;text-transform:uppercase;letter-spacing:2px;margin-bottom:14px;}
.ct-dot{width:7px;height:7px;border-radius:50%;background:#fffcd9;animation:ctpulse 2s ease-in-out infinite;}
@keyframes ctpulse{0%,100%{opacity:1;}50%{opacity:.4;}}
.ct-hero-text h1{color:#fff;font-size:clamp(2rem,4vw,3.2rem);font-weight:800;line-height:1.15;margin-bottom:14px;letter-spacing:-.02em;}
.ct-hero-text p{color:rgba(255,255,255,.82);font-size:16px;line-height:1.65;max-width:520px;margin-bottom:32px;}
.ct-quick-strip{display:flex;align-items:center;gap:0;background:rgba(0,0,0,.45);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,.08);border-radius:14px;padding:20px 32px;margin-top:40px;}
.ct-quick-item{display:flex;align-items:center;gap:14px;color:#fff;text-decoration:none;flex:1;transition:opacity .2s;}
.ct-quick-item:hover{opacity:.8;}
.ct-quick-item > i{font-size:22px;color:#fffcd9;}
.ct-quick-label{display:block;font-size:11px;font-weight:700;color:rgba(255,252,217,.7);text-transform:uppercase;letter-spacing:1.5px;}
.ct-quick-value{display:block;font-size:14px;font-weight:700;color:#fff;margin-top:2px;}
.ct-quick-div{width:1px;height:40px;background:rgba(255,255,255,.15);margin:0 28px;}
.ct-layout{display:grid;grid-template-columns:1fr 340px;gap:48px;align-items:start;}
.ct-form-card{background:#fff;border:1px solid rgba(107,107,40,.1);border-radius:20px;padding:40px;box-shadow:0 8px 40px rgba(0,0,0,.07);}
.ct-form-row{display:grid;grid-template-columns:1fr 1fr;gap:18px;margin-bottom:0;}
.ct-field{margin-bottom:18px;}
.ct-field label{display:block;font-size:12px;font-weight:800;letter-spacing:2px;text-transform:uppercase;color:#4b5563;margin-bottom:8px;}
.ct-field input,.ct-field select,.ct-field textarea{width:100%;padding:16px 18px;font-size:15px;color:#1f2937;background:#fbfbfd;border:1.5px solid #e6e8ef;border-radius:16px;font-family:inherit;transition:border-color .25s,box-shadow .25s,background .25s;outline:none;}
.ct-field input:focus,.ct-field select:focus,.ct-field textarea:focus{border-color:#6b6b28;box-shadow:0 0 0 4px rgba(107,107,40,.10);background:#fff;}
.ct-field textarea{resize:vertical;min-height:130px;}
.ct-field-full{margin-top:0;}
.ct-select-wrap{position:relative;}
.ct-select-wrap::after{content:"▾";position:absolute;right:18px;top:50%;transform:translateY(-50%);color:#4a4a1c;font-size:15px;pointer-events:none;}
.ct-field select{appearance:none;padding-right:46px;cursor:pointer;}
.ct-submit{width:100%;padding:18px;background:linear-gradient(135deg,#6b6b28 0%,#4a4a1c 100%);color:#fff;border:none;border-radius:999px;font-size:18px;font-weight:800;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:10px;transition:all .3s;margin-top:8px;box-shadow:0 12px 24px rgba(107,107,40,.28);}
.ct-submit:hover:not(:disabled){transform:translateY(-2px);box-shadow:0 10px 30px rgba(107,107,40,.35);}
.ct-submit:disabled{opacity:.7;cursor:not-allowed;}
.ct-form-note{font-size:12px;color:#aaa;text-align:center;margin-top:10px;display:flex;align-items:center;justify-content:center;gap:5px;}
.ct-form-note-quote{display:block;font-size:15px;color:#7a7f87;margin-top:16px;}
.ct-form-note-quote a{color:#6b6b28;font-weight:800;text-decoration:none;}
.ct-form-note-quote a:hover{text-decoration:underline;}
.ct-error-msg{background:#fef2f2;border:1px solid #fecaca;color:#dc2626;padding:12px 16px;border-radius:10px;font-size:13px;margin-bottom:12px;display:flex;align-items:center;gap:8px;}
.ct-success{background:#fff;border:1px solid rgba(107,107,40,.1);border-radius:20px;padding:60px 40px;text-align:center;box-shadow:0 8px 40px rgba(0,0,0,.07);}
.ct-success-icon{width:64px;height:64px;border-radius:50%;background:linear-gradient(135deg,#6b6b28,#4a4a1c);color:#fff;display:flex;align-items:center;justify-content:center;font-size:28px;margin:0 auto 20px;}
.ct-success h3{font-size:1.5rem;font-weight:800;margin-bottom:10px;}
.ct-success-next{background:#fafaf7;border:1px solid rgba(107,107,40,.1);border-radius:12px;padding:20px;margin-bottom:20px;}
.ct-next-label{font-size:13px;color:#666;margin-bottom:12px;}
.ct-btn-call{display:inline-flex;align-items:center;gap:8px;padding:12px 24px;background:linear-gradient(135deg,#6b6b28 0%,#4a4a1c 100%);color:#fff;border-radius:10px;font-weight:700;text-decoration:none;font-size:14px;}
.ct-back-link{display:inline-block;margin-top:16px;color:#6b6b28;font-size:14px;text-decoration:none;}
.ct-spinner{width:18px;height:18px;border:2px solid rgba(255,255,255,.3);border-top-color:#fff;border-radius:50%;animation:spin .7s linear infinite;}
@keyframes spin{to{transform:rotate(360deg);}}
.ct-sidebar{display:flex;flex-direction:column;gap:20px;position:sticky;top:100px;}
.ct-sidebar-photo{position:relative;border-radius:16px;overflow:hidden;height:200px;}
.ct-sidebar-photo img{width:100%;height:100%;object-fit:cover;}
.ct-why-card{background:#fff;border:1px solid rgba(107,107,40,.12);border-radius:16px;padding:22px 24px;}
.ct-why-card h4{font-size:14px;font-weight:800;color:#1a1a1a;margin-bottom:14px;}
.ct-why-list{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:9px;}
.ct-why-list li{display:flex;align-items:center;gap:8px;font-size:13px;color:#444;}
.ct-why-list i{color:#6b6b28;font-size:14px;flex-shrink:0;}
.ct-direct-card{background:#fff;border:1px solid rgba(107,107,40,.12);border-radius:16px;padding:22px 24px;}
.ct-direct-card h4{font-size:14px;font-weight:800;color:#1a1a1a;margin-bottom:16px;}
.ct-direct-item{display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid rgba(0,0,0,.06);text-decoration:none;transition:opacity .2s;}
.ct-direct-item:last-child{border-bottom:none;}
.ct-direct-item:hover{opacity:.75;}
.ct-direct-icon{width:36px;height:36px;border-radius:10px;background:#f4f3ee;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
.ct-direct-icon i{color:#6b6b28;font-size:15px;}
.ct-direct-label{display:block;font-size:10.5px;font-weight:700;color:#999;text-transform:uppercase;letter-spacing:1px;}
.ct-direct-val{display:block;font-size:13px;font-weight:700;color:#1a1a1a;margin-top:1px;}
@media(max-width:1100px){
	.ct-layout{grid-template-columns:1fr;gap:32px;}
	.ct-sidebar{position:static;}
}
@media(max-width:768px){
	.ct-quick-strip{flex-direction:column;align-items:flex-start;gap:16px;border-radius:12px;}
	.ct-quick-div{display:none;}
	.ct-form-row{grid-template-columns:1fr;}
	.ct-form-card{padding:28px 22px;}
}
</style>