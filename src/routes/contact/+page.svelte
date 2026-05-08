

<script>
	import SiteShell from '$lib/components/layout/SiteShell.svelte';

	let name = $state('');
	let email = $state('');
	let phone = $state('');
	let company = $state('');
	let units = $state('');
	let service = $state('');
	let message = $state('');
	let status = $state('');

	const services = [
		'Turnkey Services','Painting','Repairs','Cleaning',
		'Water Remediation','Tub & Shower Resurfacing','Counter Resurfacing',
		'Installation Services','Cabinet Painting','Pressure Washing',
		'Millwork & Trim','Sheetrock Repair','Other / Multiple Services'
	];

	const unitRanges = [
		'1–10 units','11–50 units','51–100 units','100+ units'
	];

	async function handleSubmit(e) {
		e.preventDefault();
		status = 'sending';
		try {
			await new Promise(r => setTimeout(r, 1200));
			status = 'sent';
			name = email = phone = company = units = service = message = '';
		} catch(err) {
			status = 'error';
		}
	}

	const faqs = [
		{ q: 'How quickly do you respond to inquiries?',       a: 'We respond to all inquiries within 24 business hours — often same day. For urgent requests, call us directly.' },
		{ q: 'Is the estimate really free?',                   a: 'Yes, completely free and no obligation. We provide a detailed, itemized estimate so you know exactly what you\'re getting.' },
		{ q: 'Do you work with property management software?', a: 'Yes — we\'re set up in RealPage, Yardi/VendorCafe, AppFolio, NetVendor, and more. Zero onboarding needed from your side.' },
		{ q: 'What areas do you serve?',                       a: 'We serve 11 cities: Pensacola, Gulf Breeze, Navarre, Fort Walton, Crestview, Milton, Daphne, Mobile, Gulf Shores, Orange Beach, and Foley.' },
	];

	import { slide } from 'svelte/transition';
	let openFaq = $state(null);
	function toggleFaq(i) { openFaq = openFaq === i ? null : i; }
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
					Ready within 24 hours
				</span>
				<h1>Let's Get Your Units<br/>Move-In Ready</h1>
				<p>Tell us about your property and we'll put together a free, detailed estimate — no obligation, no runaround.</p>
			</div>
			<!-- Quick contact strip -->
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
							<h3>Message Sent!</h3>
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
							<div class="ct-form-header">
								<h2>Request a Free Estimate</h2>
								<p>The more detail you share, the faster we can put together your quote.</p>
							</div>

							<form onsubmit={handleSubmit}>
								<div class="ct-form-section">
									<p class="ct-form-section-label">Your Contact Info</p>
									<div class="ct-form-row">
										<div class="ct-field">
											<label>Full Name *</label>
											<input type="text" bind:value={name} placeholder="Sarah Johnson" required />
										</div>
										<div class="ct-field">
											<label>Company / Property</label>
											<input type="text" bind:value={company} placeholder="Gulf Coast Properties LLC" />
										</div>
									</div>
									<div class="ct-form-row">
										<div class="ct-field">
											<label>Email Address *</label>
											<input type="email" bind:value={email} placeholder="sarah@example.com" required />
										</div>
										<div class="ct-field">
											<label>Phone Number</label>
											<input type="tel" bind:value={phone} placeholder="(850) 000-0000" />
										</div>
									</div>
								</div>

								<div class="ct-form-section">
									<p class="ct-form-section-label">About Your Property</p>
									<div class="ct-form-row">
										<div class="ct-field">
											<label>Service Needed</label>
											<select bind:value={service}>
												<option value="">Select a service...</option>
												{#each services as s}<option value={s}>{s}</option>{/each}
											</select>
										</div>
										<div class="ct-field">
											<label>Number of Units</label>
											<select bind:value={units}>
												<option value="">Select range...</option>
												{#each unitRanges as u}<option value={u}>{u}</option>{/each}
											</select>
										</div>
									</div>
									<div class="ct-field ct-field-full">
										<label>Tell Us More *</label>
										<textarea bind:value={message} rows="5"
											placeholder="Describe your property and what you need — location, condition, urgency, number of units to turn, etc." required></textarea>
									</div>
								</div>

								{#if status === 'error'}
									<div class="ct-error-msg">
										<i class="bi bi-exclamation-circle-fill"></i>
										Something went wrong. Please try again or call us directly.
									</div>
								{/if}

								<button type="submit" class="ct-submit" disabled={status === 'sending'}>
									{#if status === 'sending'}
										<span class="ct-spinner"></span>
										Sending...
									{:else}
										<i class="bi bi-send-fill"></i>
										Send Message & Request Quote
									{/if}
								</button>
								<p class="ct-form-note">
									<i class="bi bi-lock-fill"></i>
									Your information is private. No spam, ever.
								</p>
							</form>
						</div>
					{/if}
				</div>

				<!-- SIDEBAR -->
				<aside class="ct-sidebar">

					<!-- Team photo -->
					<div class="ct-sidebar-photo">
						<img src="/assets/img/contact-team.jpg" alt="Cordova Team" />
						<div class="ct-photo-badge">
							<i class="bi bi-patch-check-fill"></i>
							<span>Licensed & Insured</span>
						</div>
					</div>

					<!-- Why us -->
					<div class="ct-why-card">
						<h4>Why property managers choose us</h4>
						<ul class="ct-why-list">
							<li><i class="bi bi-check-circle-fill"></i> 24h response, 24h start on approvals</li>
							<li><i class="bi bi-check-circle-fill"></i> Free, itemized estimate — no surprises</li>
							<li><i class="bi bi-check-circle-fill"></i> One team, one invoice, 12 services</li>
							<li><i class="bi bi-check-circle-fill"></i> Already in your PM platform</li>
							<li><i class="bi bi-check-circle-fill"></i> Before/after photos every job</li>
							<li><i class="bi bi-check-circle-fill"></i> Bilingual team — English & Spanish</li>
						</ul>
					</div>

					<!-- Direct contacts -->
					<div class="ct-direct-card">
						<h4>Reach us directly</h4>
						<a href="tel:+14482196669" class="ct-direct-item">
							<div class="ct-direct-icon"><i class="bi bi-telephone-fill"></i></div>
							<div>
								<span class="ct-direct-label">Main Line</span>
								<span class="ct-direct-val">+1 (448) 219-6669</span>
							</div>
						</a>
						<a href="tel:+18504852385" class="ct-direct-item">
							<div class="ct-direct-icon"><i class="bi bi-telephone-fill"></i></div>
							<div>
								<span class="ct-direct-label">Secondary Line</span>
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

	<!-- FAQ -->
	<section class="ct-faq section light-background">
		<div class="container">
			<div class="ct-faq-layout">
				<div class="ct-faq-left" data-aos="fade-right">
					<span class="ct-faq-eyebrow">Quick Answers</span>
					<h2>Common Questions</h2>
					<p>Can't find what you need? Call us at <a href="tel:+14482196669">(448) 219-6669</a> and we'll answer right away.</p>
				</div>
				<div class="ct-faq-right" data-aos="fade-left">
					{#each faqs as faq, i}
						<div class="ct-faq-item" class:ct-faq-open={openFaq === i}>
							<button class="ct-faq-q" onclick={() => toggleFaq(i)}>
								<span>{faq.q}</span>
								<i class="bi bi-plus-lg ct-faq-icon"></i>
							</button>
							{#if openFaq === i}
								<div transition:slide={{ duration: 300 }}>
									<p class="ct-faq-a">{faq.a}</p>
								</div>
							{/if}
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<!-- SERVICE AREAS STRIP -->
	<section class="ct-areas">
		<div class="container">
			<p class="ct-areas-label">
				<i class="bi bi-geo-alt-fill"></i>
				Serving 11 cities across Florida & Alabama
			</p>
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
/* ─── HERO ─────────────────────── */
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
.ct-hero-text p{color:rgba(255,255,255,.85);font-size:1.05rem;margin-bottom:40px;max-width:500px;}

.ct-quick-strip{
	display:flex;align-items:center;gap:0;
	background:rgba(255,255,255,.07);
	backdrop-filter:blur(8px);
	border:1px solid rgba(255,255,255,.12);
	border-radius:16px 16px 0 0;
	padding:20px 32px;
	margin-top:40px;
}
.ct-quick-item{display:flex;align-items:center;gap:12px;flex:1;text-decoration:none;}
.ct-quick-item i{font-size:20px;color:#fffcd9;}
.ct-quick-label{display:block;font-size:11px;color:rgba(255,255,255,.6);text-transform:uppercase;letter-spacing:1.5px;}
.ct-quick-value{display:block;font-size:14px;font-weight:600;color:#fff;}
.ct-quick-div{width:1px;height:40px;background:rgba(255,255,255,.15);flex-shrink:0;margin:0 32px;}

/* ─── MAIN LAYOUT ──────────────── */
.ct-layout{display:grid;grid-template-columns:1fr 340px;gap:48px;align-items:start;}
.ct-form-col{min-width:0;}

/* Form card */
.ct-form-card{background:#fff;border:1px solid rgba(107,107,40,.1);border-radius:20px;padding:40px;box-shadow:0 8px 40px rgba(0,0,0,.07);}
.ct-form-header{margin-bottom:32px;}
.ct-form-header h2{font-size:1.6rem;font-weight:800;color:#1a1a1a;margin-bottom:8px;letter-spacing:-.02em;}
.ct-form-header p{font-size:14px;color:#666;margin:0;}

.ct-form-section{margin-bottom:28px;}
.ct-form-section-label{font-size:11px;font-weight:700;color:#6b6b28;text-transform:uppercase;letter-spacing:2px;margin-bottom:16px;}
.ct-form-row{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:16px;}
.ct-field{display:flex;flex-direction:column;gap:6px;}
.ct-field-full{margin-top:0;}
.ct-field label{font-size:13px;font-weight:600;color:#333;}
.ct-field input,.ct-field select,.ct-field textarea{
	border:1.5px solid #e5e5e5;border-radius:10px;
	padding:11px 14px;font-size:14px;color:#1a1a1a;
	transition:border-color .2s,box-shadow .2s;
	background:#fff;font-family:inherit;
	width:100%;
}
.ct-field input:focus,.ct-field select:focus,.ct-field textarea:focus{
	border-color:#6b6b28;
	box-shadow:0 0 0 3px rgba(107,107,40,.12);
	outline:none;
}
.ct-field textarea{resize:vertical;min-height:120px;}

.ct-submit{
	width:100%;padding:15px;
	background:linear-gradient(135deg,#6b6b28 0%,#4a4a1c 100%);
	color:#fff;border:none;border-radius:12px;
	font-weight:700;font-size:15px;cursor:pointer;
	display:flex;align-items:center;justify-content:center;gap:10px;
	transition:all .3s;box-shadow:0 6px 20px rgba(107,107,40,.35);
	margin-top:8px;
}
.ct-submit:hover:not(:disabled){transform:translateY(-2px);box-shadow:0 10px 28px rgba(107,107,40,.5);}
.ct-submit:disabled{opacity:.7;cursor:not-allowed;}
.ct-spinner{width:16px;height:16px;border:2px solid rgba(255,255,255,.4);border-top-color:#fff;border-radius:50%;animation:spin .7s linear infinite;}
@keyframes spin{to{transform:rotate(360deg);}}

.ct-form-note{font-size:12px;color:#aaa;text-align:center;margin-top:10px;display:flex;align-items:center;justify-content:center;gap:5px;}
.ct-form-note i{font-size:11px;}
.ct-error-msg{background:#fef2f2;border:1px solid #fecaca;color:#dc2626;padding:12px 16px;border-radius:10px;font-size:13px;margin-bottom:12px;display:flex;align-items:center;gap:8px;}

/* Success state */
.ct-success{background:#fff;border:1px solid rgba(107,107,40,.1);border-radius:20px;padding:60px 40px;text-align:center;box-shadow:0 8px 40px rgba(0,0,0,.07);}
.ct-success-icon{width:72px;height:72px;background:linear-gradient(135deg,#fffcd9 0%,#f5f0c0 100%);border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 24px;}
.ct-success-icon i{font-size:32px;color:#4a4a1c;}
.ct-success h3{font-size:1.6rem;font-weight:800;color:#1a1a1a;margin-bottom:10px;}
.ct-success p{font-size:15px;color:#666;margin-bottom:28px;max-width:400px;margin-left:auto;margin-right:auto;}
.ct-success-next{background:#fafaf7;border:1px solid rgba(107,107,40,.1);border-radius:12px;padding:20px;margin-bottom:20px;}
.ct-next-label{font-size:12px;color:#888;margin-bottom:12px;display:block;}
.ct-btn-call{display:inline-flex;align-items:center;gap:8px;padding:12px 24px;background:linear-gradient(135deg,#6b6b28 0%,#4a4a1c 100%);color:#fff;border-radius:10px;font-weight:700;text-decoration:none;font-size:14px;}
.ct-back-link{font-size:13px;color:#888;text-decoration:none;}
.ct-back-link:hover{color:#4a4a1c;}

/* ─── SIDEBAR ──────────────────── */
.ct-sidebar{position:sticky;top:100px;display:flex;flex-direction:column;gap:16px;}

.ct-sidebar-photo{position:relative;border-radius:16px;overflow:hidden;box-shadow:0 8px 32px rgba(0,0,0,.12);}
.ct-sidebar-photo img{width:100%;height:240px;object-fit:cover;object-position:center 20%;display:block;}
.ct-photo-badge{
	position:absolute;bottom:16px;left:16px;
	background:linear-gradient(135deg,#6b6b28 0%,#4a4a1c 100%);
	color:#fff;padding:8px 14px;border-radius:8px;
	display:flex;align-items:center;gap:7px;
	font-size:13px;font-weight:700;
}
.ct-photo-badge i{font-size:14px;color:#fffcd9;}

.ct-why-card{background:#fff;border:1px solid rgba(107,107,40,.12);border-radius:16px;padding:22px 24px;}
.ct-why-card h4{font-size:15px;font-weight:700;color:#1a1a1a;margin-bottom:16px;}
.ct-why-list{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:10px;}
.ct-why-list li{display:flex;align-items:flex-start;gap:9px;font-size:13px;color:#444;}
.ct-why-list i{font-size:14px;color:#6b6b28;flex-shrink:0;margin-top:1px;}

.ct-direct-card{background:#fafaf7;border:1px solid rgba(107,107,40,.1);border-radius:16px;padding:22px 24px;}
.ct-direct-card h4{font-size:15px;font-weight:700;color:#1a1a1a;margin-bottom:16px;}
.ct-direct-item{display:flex;align-items:center;gap:12px;text-decoration:none;padding:10px 0;border-bottom:1px solid rgba(0,0,0,.06);transition:color .2s;}
.ct-direct-item:last-child{border-bottom:none;}
.ct-direct-item:hover .ct-direct-val{color:#6b6b28;}
.ct-direct-icon{width:36px;height:36px;background:#fff;border:1px solid rgba(107,107,40,.15);border-radius:9px;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
.ct-direct-icon i{font-size:15px;color:#6b6b28;}
.ct-direct-label{display:block;font-size:11px;color:#aaa;text-transform:uppercase;letter-spacing:1px;}
.ct-direct-val{display:block;font-size:13px;font-weight:600;color:#333;transition:color .2s;}

/* ─── FAQ ──────────────────────── */
.ct-faq-layout{display:grid;grid-template-columns:1fr 1.6fr;gap:60px;align-items:start;}
.ct-faq-eyebrow{display:inline-block;font-size:11px;font-weight:700;color:#6b6b28;text-transform:uppercase;letter-spacing:2px;margin-bottom:10px;}
.ct-faq-left h2{font-size:1.8rem;font-weight:800;color:#1a1a1a;margin-bottom:12px;letter-spacing:-.02em;}
.ct-faq-left p{font-size:14px;color:#666;line-height:1.7;}
.ct-faq-left a{color:#6b6b28;font-weight:600;text-decoration:none;}
.ct-faq-right{display:flex;flex-direction:column;gap:8px;}
.ct-faq-item{border:1px solid rgba(107,107,40,.12);border-radius:12px;overflow:hidden;background:#fff;transition:border-color .25s;}
.ct-faq-open{border-color:rgba(107,107,40,.3);}
.ct-faq-q{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:16px 20px;cursor:pointer;width:100%;background:none;border:none;text-align:left;font-size:14px;font-weight:600;color:#1a1a1a;font-family:inherit;}
.ct-faq-q:hover{background:#fafaf7;}
.ct-faq-icon{font-size:14px;color:#6b6b28;flex-shrink:0;transition:transform .3s ease;}
.ct-faq-open .ct-faq-icon{transform:rotate(45deg);}
.ct-faq-a{font-size:13.5px;color:#555;line-height:1.7;padding:0 20px 18px;margin:0;}

/* ─── AREAS STRIP ──────────────── */
.ct-areas{background:linear-gradient(135deg,#1a2018 0%,#0d120c 100%);padding:28px 0;}
.ct-areas-label{font-size:12px;font-weight:700;color:rgba(255,252,217,.7);text-transform:uppercase;letter-spacing:2px;margin-bottom:14px;display:flex;align-items:center;gap:8px;}
.ct-areas-label i{color:#fffcd9;}
.ct-areas-list{display:flex;flex-wrap:wrap;gap:8px;}
.ct-areas-list span{font-size:13px;font-weight:600;color:rgba(255,255,255,.8);background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.1);border-radius:20px;padding:6px 14px;}

/* ─── RESPONSIVE ─────────────────── */
@media(max-width:1100px){
	.ct-layout{grid-template-columns:1fr;gap:32px;}
	.ct-sidebar{position:static;}
	.ct-faq-layout{grid-template-columns:1fr;gap:32px;}
}
@media(max-width:768px){
	.ct-quick-strip{flex-direction:column;align-items:flex-start;gap:16px;border-radius:12px;}
	.ct-quick-div{display:none;}
	.ct-form-row{grid-template-columns:1fr;}
	.ct-form-card{padding:24px 20px;}
	.ct-hero-content{padding:70px 0 0;}
}
</style>