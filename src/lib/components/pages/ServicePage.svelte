<script>
	import SiteShell from '$lib/components/layout/SiteShell.svelte';
	import ContactSection from '$lib/components/sections/ContactSection.svelte';

	import { slide } from 'svelte/transition';

	let {
		title      = '',
		tagline    = '',
		heroImg    = '/assets/img/services.jpg',
		heroPosition = 'center center',
		heroFlip = false,
		description = '',
		includes   = [],
		why        = '',
		process    = [],
		related    = [],
		faqs       = [],
	} = $props();

	let openFaq = $state(null);
	function toggleFaq(i) { openFaq = openFaq === i ? null : i; }
</script>

<svelte:head>
	<title>{title} | Cordova Property Services</title>
	<meta name="description" content="{tagline} — Cordova Property Services. Serving Pensacola, Gulf Breeze, Navarre, Fort Walton and the Gulf Coast." />
</svelte:head>

<SiteShell>
<main class="main">

	<!-- HERO: mismo alto y estilo visual que Our Work -->
	<section class="sp-hero" style={`--sp-hero-img: url('${heroImg}'); --sp-hero-position: ${heroPosition};`}>
		<div class="sp-hero-img"></div>

		<div class="sp-hero-copy">
			<span>PENSACOLA & GULF COAST</span>
			<h1>{title}</h1>
			<div class="sp-hero-line"></div>
			<p>{tagline}</p>
		</div>
	</section>

	<!-- MAIN CONTENT + STICKY SIDEBAR -->
	<section class="sp-main section">
		<div class="container">
			<div class="sp-layout">

				<!-- LEFT: main content -->
				<div class="sp-content">

					<!-- Description -->
					<div class="sp-block" data-aos="fade-up">
						<span class="sp-eyebrow">Overview</span>
						<h2>{title} for Rental Properties</h2>
						<p class="sp-desc">{description}</p>
						{#if why}
						<div class="sp-why-box">
							<i class="bi bi-lightbulb-fill"></i>
							<div>
								<h4>Why This Matters</h4>
								<p>{why}</p>
							</div>
						</div>
						{/if}
					</div>

					<!-- What's included -->
					{#if includes.length > 0}
					<div class="sp-block" data-aos="fade-up">
						<span class="sp-eyebrow">What's Included</span>
						<h3>Everything Covered in One Visit</h3>
						<div class="sp-includes-grid">
							{#each includes as item}
								<div class="sp-include-item">
									<i class="bi bi-check-circle-fill"></i>
									<span>{item}</span>
								</div>
							{/each}
						</div>
					</div>
					{/if}

					<!-- Process -->
					{#if process.length > 0}
					<div class="sp-block" data-aos="fade-up">
						<span class="sp-eyebrow">Our Process</span>
						<h3>Simple, Transparent — Start to Finish</h3>
						<div class="sp-process">
							{#each process as step, i}
								<div class="sp-process-step">
									<div class="sp-process-num">{i + 1}</div>
									<div class="sp-process-line"></div>
									<div class="sp-process-body">
										<h4>{step.title}</h4>
										<p>{step.desc}</p>
									</div>
								</div>
							{/each}
						</div>
					</div>
					{/if}

					<!-- FAQ -->
					{#if faqs.length > 0}
					<div class="sp-block" data-aos="fade-up">
						<span class="sp-eyebrow">FAQ</span>
						<h3>Common Questions About {title}</h3>
						<div class="sp-faqs">
							{#each faqs as faq, i}
								<div class="sp-faq-item" class:sp-faq-open={openFaq === i}>
									<button class="sp-faq-q" onclick={() => toggleFaq(i)}>
										<span>{faq.q}</span>
										<i class="bi bi-plus-lg sp-faq-icon"></i>
									</button>
									{#if openFaq === i}
										<div transition:slide={{ duration: 300 }}>
											<p class="sp-faq-a">{faq.a}</p>
										</div>
									{/if}
								</div>
							{/each}
						</div>
					</div>
					{/if}

					<!-- Mid-page CTA — second CTA as best practice -->
					<div class="sp-mid-cta" data-aos="fade-up">
						<div class="sp-mid-cta-inner">
							<div>
								<h4>Ready to schedule {title}?</h4>
								<p>We respond within 24 hours and serve 11 cities across the Gulf Coast.</p>
							</div>
							<a href="/contact" class="sp-btn-primary">Get a Free Quote</a>
						</div>
					</div>

				</div>

				<!-- RIGHT: sticky sidebar -->
				<aside class="sp-sidebar">
					<div class="sp-sidebar-card">
						<div class="sp-sidebar-header">
							<i class="bi bi-calendar-check-fill"></i>
							<span>Request This Service</span>
						</div>
						<p class="sp-sidebar-sub">Free estimate · 24h response · Gulf Coast coverage</p>
						<a href="/contact" class="sp-sidebar-btn-primary">Contact us</a>
						<a href="tel:+14482196669" class="sp-sidebar-btn-call">
							<i class="bi bi-telephone-fill"></i>
							(448) 219-6669
						</a>
						<a href="mailto:customer@cordovaps.com" class="sp-sidebar-btn-email">
							<i class="bi bi-envelope-fill"></i>
							customer@cordovaps.com
						</a>
						<div class="sp-sidebar-divider"></div>
						<ul class="sp-sidebar-trust">
							<li><i class="bi bi-shield-fill-check"></i> Licensed & Insured</li>
							<li><i class="bi bi-translate"></i> Bilingual Team</li>
							<li><i class="bi bi-clock-fill"></i> 24h Response</li>
							<li><i class="bi bi-camera-fill"></i> Before/After Photos</li>
							<li><i class="bi bi-receipt"></i> Single Invoice</li>
						</ul>
					</div>

					<!-- Service areas -->
					<div class="sp-sidebar-areas">
						<p class="sp-areas-title">Service Areas</p>
						<div class="sp-areas-tags">
							{#each ['Pensacola','Gulf Breeze','Navarre','Fort Walton','Crestview','Milton','Daphne','Mobile','Gulf Shores','Orange Beach','Foley'] as city}
								<span>{city}</span>
							{/each}
						</div>
					</div>
				</aside>

			</div>
		</div>
	</section>

	<!-- RELATED SERVICES -->
	{#if related.length > 0}
	<section class="sp-related section light-background">
		<div class="container">
			<div class="sp-related-header" data-aos="fade-up">
				<h2>Commonly Paired With {title}</h2>
				<p>Property managers often bundle these services for a complete unit turn</p>
			</div>
			<div class="row gy-4">
				{#each related as r, i}
					<div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={i * 80}>
						<a href={r.href} class="sp-related-card">
							<div class="sp-related-img">
								<img src={r.img} alt={r.title} loading="lazy" />
								<div class="sp-related-overlay">
									<i class="bi {r.icon}"></i>
								</div>
							</div>
							<div class="sp-related-body">
								<h4>{r.title}</h4>
								<p>{r.desc}</p>
								<span class="sp-related-link">View service <i class="bi bi-arrow-right"></i></span>
							</div>
						</a>
					</div>
				{/each}
			</div>
		</div>
	</section>
	{/if}

	<!-- FINAL CTA BANNER — brand colors -->
	<section class="sp-final-cta">
		<div class="container">
			<div class="sp-final-cta-inner" data-aos="fade-up">
				<div class="sp-final-cta-text">
					<span class="sp-final-eyebrow">Ready when you are</span>
					<h2>Let's Get Your Units Move-In Ready</h2>
					<p>One call. One team. {title}, and everything else handled.</p>
				</div>
				<div class="sp-final-cta-actions">
					<a href="/contact" class="sp-final-btn-primary">Contact Us Today</a>
					<a href="tel:+14482196669" class="sp-final-btn-secondary">
						<i class="bi bi-telephone-fill"></i>
						(448) 219-6669
					</a>
				</div>
			</div>
		</div>
	</section>

	<ContactSection />
</main>
</SiteShell>

<style>
/* ─── HERO ─────────────────────────────────── */
/* SERVICE HERO V18: mismo alto y CSS base del banner Our Work.
   Aplica a todos los servicios porque todos usan ServicePage.svelte. */
.sp-hero {
	position: relative;
	min-height: 520px;
	height: 520px;
	display: flex;
	align-items: center;
	background: #f6f3ed;
	overflow: hidden;
	border-bottom: 1px solid rgba(30, 36, 28, 0.08);
}

.sp-hero-img {
	position: absolute;
	inset: 0;
	z-index: 1;
	background:
		linear-gradient(
			90deg,
			rgba(250, 249, 244, 0.78) 0%,
			rgba(250, 249, 244, 0.62) 22%,
			rgba(250, 249, 244, 0.30) 42%,
			rgba(250, 249, 244, 0.00) 62%
		),
		var(--sp-hero-img) var(--sp-hero-position, center center) / cover no-repeat;
}

.sp-hero-copy {
	position: relative;
	z-index: 2;
	max-width: 520px;
	padding-left: 48px;
	padding-right: 24px;
}

.sp-hero-copy span {
	display: inline-block;
	font-size: 13px;
	font-weight: 800;
	color: #7b8b32;
	letter-spacing: 0.04em;
	text-transform: uppercase;
	margin-bottom: 18px;
}

.sp-hero-copy h1 {
	margin: 0;
	font-size: clamp(42px, 4.4vw, 62px);
	line-height: 0.98;
	font-weight: 900;
	letter-spacing: -0.055em;
	color: #1c271a;
}

.sp-hero-line {
	width: 48px;
	height: 2px;
	background: #7b8b32;
	margin: 24px 0;
}

.sp-hero-copy p {
	max-width: 390px;
	margin: 0;
	font-size: 15px;
	line-height: 1.65;
	color: #4e574a;
}

@media (max-width: 820px) {
	.sp-hero {
		height: 420px;
		min-height: 420px;
	}

	.sp-hero-img {
		background:
			linear-gradient(
				90deg,
				rgba(250, 249, 244, 0.88) 0%,
				rgba(250, 249, 244, 0.68) 48%,
				rgba(250, 249, 244, 0.26) 100%
			),
			var(--sp-hero-img) var(--sp-hero-position, center center) / cover no-repeat;
	}

	.sp-hero-copy {
		padding-left: 24px;
		padding-right: 20px;
		max-width: 420px;
	}

	.sp-hero-copy h1 {
		font-size: 42px;
	}
}

/* ─── MAIN LAYOUT ──────────────────────────── */
.sp-layout{display:grid;grid-template-columns:1fr 320px;gap:48px;align-items:start;}
.sp-content{min-width:0;}
.sp-block{margin-bottom:48px;}

.sp-eyebrow{display:inline-block;font-size:11px;font-weight:700;color:#6b6b28;text-transform:uppercase;letter-spacing:2.5px;margin-bottom:10px;}
.sp-content h2{font-size:clamp(1.5rem,2.8vw,2.2rem);font-weight:800;color:#1a1a1a;margin-bottom:14px;letter-spacing:-.02em;}
.sp-content h3{font-size:1.35rem;font-weight:700;color:#1a1a1a;margin-bottom:20px;letter-spacing:-.01em;}
.sp-desc{font-size:1rem;color:#555;line-height:1.85;margin-bottom:20px;}

.sp-why-box{display:flex;gap:14px;align-items:flex-start;background:#fafaf7;border:1px solid rgba(107,107,40,.15);border-left:4px solid #6b6b28;padding:20px 22px;border-radius:0 12px 12px 0;margin-top:20px;}
.sp-why-box i{font-size:20px;color:#6b6b28;flex-shrink:0;margin-top:2px;}
.sp-why-box h4{font-size:14px;font-weight:700;color:#1a1a1a;margin-bottom:6px;}
.sp-why-box p{font-size:14px;color:#555;margin:0;line-height:1.7;}

/* Includes grid */
.sp-includes-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;}
.sp-include-item{display:flex;align-items:flex-start;gap:10px;background:#fff;border:1px solid rgba(107,107,40,.1);border-radius:10px;padding:12px 14px;}
.sp-include-item i{font-size:15px;color:#6b6b28;flex-shrink:0;margin-top:1px;}
.sp-include-item span{font-size:13.5px;color:#333;line-height:1.5;}

/* Process */
.sp-process{display:flex;flex-direction:column;gap:0;}
.sp-process-step{display:flex;gap:18px;align-items:flex-start;position:relative;}
.sp-process-num{width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#6b6b28 0%,#4a4a1c 100%);color:#fff;display:flex;align-items:center;justify-content:center;font-size:15px;font-weight:800;flex-shrink:0;}
.sp-process-line{position:absolute;left:19px;top:44px;bottom:-20px;width:2px;background:rgba(107,107,40,.15);}
.sp-process-step:last-child .sp-process-line{display:none;}
.sp-process-body{padding-bottom:28px;}
.sp-process-body h4{font-size:15px;font-weight:700;color:#1a1a1a;margin-bottom:6px;}
.sp-process-body p{font-size:13.5px;color:#666;line-height:1.65;margin:0;}

/* FAQ */
.sp-faqs{display:flex;flex-direction:column;gap:8px;}
.sp-faq-item{border:1px solid rgba(107,107,40,.12);border-radius:12px;overflow:hidden;background:#fff;transition:border-color .25s;}
.sp-faq-open{border-color:rgba(107,107,40,.3);}
.sp-faq-q{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:16px 20px;cursor:pointer;width:100%;background:none;border:none;text-align:left;font-size:14px;font-weight:600;color:#1a1a1a;font-family:inherit;}
.sp-faq-q:hover{background:#fafaf7;}
.sp-faq-icon{font-size:14px;color:#6b6b28;flex-shrink:0;transition:transform .3s ease;}
.sp-faq-open .sp-faq-icon{transform:rotate(45deg);}
.sp-faq-a{font-size:13.5px;color:#555;line-height:1.7;padding:0 20px 18px;margin:0;}

/* Mid CTA */
.sp-mid-cta{margin-bottom:48px;}
.sp-mid-cta-inner{display:flex;align-items:center;justify-content:space-between;gap:20px;flex-wrap:wrap;background:linear-gradient(135deg,#1a2018 0%,#0d120c 100%);border-radius:14px;padding:28px 32px;}
.sp-mid-cta-inner h4{font-size:17px;font-weight:700;color:#fff;margin-bottom:6px;}
.sp-mid-cta-inner p{font-size:13px;color:rgba(255,255,255,.7);margin:0;}

/* ─── SIDEBAR ──────────────────────────────── */
.sp-sidebar{position:sticky;top:100px;}
.sp-sidebar-card{background:#fff;border:1px solid rgba(107,107,40,.15);border-radius:16px;padding:24px;box-shadow:0 8px 32px rgba(0,0,0,.07);margin-bottom:16px;}
.sp-sidebar-header{display:flex;align-items:center;gap:10px;margin-bottom:8px;}
.sp-sidebar-header i{font-size:20px;color:#6b6b28;}
.sp-sidebar-header span{font-size:16px;font-weight:700;color:#1a1a1a;}
.sp-sidebar-sub{font-size:12px;color:#888;margin-bottom:18px;line-height:1.5;}
.sp-sidebar-btn-primary{display:block;text-align:center;padding:13px;background:linear-gradient(135deg,#6b6b28 0%,#4a4a1c 100%);color:#fff;border-radius:10px;font-weight:700;font-size:14px;text-decoration:none;margin-bottom:10px;transition:all .3s;box-shadow:0 4px 14px rgba(107,107,40,.3);}
.sp-sidebar-btn-primary:hover{transform:translateY(-2px);box-shadow:0 8px 20px rgba(107,107,40,.45);color:#fff;}
.sp-sidebar-btn-call,.sp-sidebar-btn-email{display:flex;align-items:center;justify-content:center;gap:8px;padding:11px;border:1.5px solid rgba(107,107,40,.25);color:#4a4a1c;border-radius:10px;font-weight:600;font-size:13px;text-decoration:none;margin-bottom:8px;transition:all .25s;}
.sp-sidebar-btn-call:hover,.sp-sidebar-btn-email:hover{background:#fafaf7;border-color:#6b6b28;color:#4a4a1c;}
.sp-sidebar-divider{height:1px;background:rgba(0,0,0,.07);margin:16px 0;}
.sp-sidebar-trust{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:10px;}
.sp-sidebar-trust li{display:flex;align-items:center;gap:9px;font-size:13px;color:#555;}
.sp-sidebar-trust i{font-size:14px;color:#6b6b28;flex-shrink:0;}

.sp-sidebar-areas{background:#fafaf7;border:1px solid rgba(107,107,40,.1);border-radius:12px;padding:18px;}
.sp-areas-title{font-size:11px;font-weight:700;color:#6b6b28;text-transform:uppercase;letter-spacing:2px;margin-bottom:12px;}
.sp-areas-tags{display:flex;flex-wrap:wrap;gap:6px;}
.sp-areas-tags span{font-size:11px;font-weight:600;color:#555;background:#fff;border:1px solid rgba(107,107,40,.15);border-radius:20px;padding:4px 10px;}

/* ─── RELATED ──────────────────────────────── */
.sp-related-header{margin-bottom:32px;}
.sp-related-header h2{font-size:1.8rem;font-weight:800;color:#1a1a1a;margin-bottom:8px;letter-spacing:-.02em;}
.sp-related-header p{font-size:14px;color:#666;}
.sp-related-card{display:block;height:100%;border:1px solid rgba(0,0,0,.07);border-radius:14px;background:#fff;text-decoration:none;transition:all .3s;overflow:hidden;}
.sp-related-card:hover{transform:translateY(-4px);box-shadow:0 12px 32px rgba(107,107,40,.12);border-color:rgba(107,107,40,.3);}
.sp-related-img{position:relative;height:260px;overflow:hidden;background:#f4f0e7;}
.sp-related-img img{width:100%;height:100%;object-fit:cover;object-position:center center;transition:transform .4s ease;}
.sp-related-card:hover .sp-related-img img{transform:scale(1.06);}
.sp-related-overlay{position:absolute;left:12px;bottom:12px;width:36px;height:36px;border-radius:12px;background:rgba(255,255,255,.86);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);display:flex;align-items:center;justify-content:center;box-shadow:0 8px 20px rgba(0,0,0,.12);}
.sp-related-overlay i{font-size:18px;color:#6b6b28;}
.sp-related-body{padding:16px 18px;}
.sp-related-body h4{font-size:15px;font-weight:700;color:#1a1a1a;margin-bottom:6px;}
.sp-related-body p{font-size:13px;color:#666;line-height:1.6;margin-bottom:10px;}
.sp-related-link{font-size:13px;font-weight:700;color:#6b6b28;display:flex;align-items:center;gap:5px;}
.sp-related-link i{transition:transform .2s;}
.sp-related-card:hover .sp-related-link i{transform:translateX(4px);}

/* ─── FINAL CTA ─────────────────────────────── */
.sp-final-cta{background:linear-gradient(135deg,#1a2018 0%,#0d120c 100%);padding:70px 0;}
.sp-final-cta-inner{display:flex;align-items:center;justify-content:space-between;gap:32px;flex-wrap:wrap;}
.sp-final-eyebrow{display:inline-flex;align-items:center;gap:8px;font-size:11px;font-weight:700;color:#fffcd9;text-transform:uppercase;letter-spacing:2px;margin-bottom:12px;}
.sp-final-eyebrow::before{content:'';width:6px;height:6px;border-radius:50%;background:#fffcd9;animation:pulse 2s ease-in-out infinite;}
@keyframes pulse{0%,100%{opacity:1;}50%{opacity:.4;}}
.sp-final-cta-text h2{font-size:clamp(1.6rem,3vw,2.4rem);font-weight:800;color:#fff;margin-bottom:8px;letter-spacing:-.02em;}
.sp-final-cta-text p{font-size:15px;color:rgba(255,255,255,.75);margin:0;}
.sp-final-cta-actions{display:flex;gap:14px;flex-wrap:wrap;flex-shrink:0;}
.sp-final-btn-primary{padding:14px 28px;background:linear-gradient(135deg,#6b6b28 0%,#4a4a1c 100%);color:#fff;border-radius:10px;font-weight:700;font-size:14px;text-decoration:none;transition:all .3s;box-shadow:0 6px 20px rgba(107,107,40,.4);}
.sp-final-btn-primary:hover{transform:translateY(-3px);box-shadow:0 10px 28px rgba(107,107,40,.55);color:#fff;}
.sp-final-btn-secondary{display:flex;align-items:center;gap:8px;padding:14px 22px;border:2px solid rgba(255,252,217,.3);color:#fffcd9;border-radius:10px;font-weight:600;font-size:14px;text-decoration:none;transition:all .3s;}
.sp-final-btn-secondary:hover{border-color:#fffcd9;background:rgba(255,252,217,.08);color:#fffcd9;}

/* ─── RESPONSIVE ────────────────────────────── */
@media(max-width:1100px){
	.sp-layout{grid-template-columns:1fr;gap:32px;}
	.sp-sidebar{position:static;}
	.sp-sidebar-card{display:grid;grid-template-columns:1fr 1fr;gap:12px;}
	.sp-sidebar-header,.sp-sidebar-sub,.sp-sidebar-divider,.sp-sidebar-trust{grid-column:1/-1;}
}
@media(max-width:768px){
	.sp-related-img{height:220px;}
	.sp-includes-grid{grid-template-columns:1fr;}
	.sp-sidebar-card{display:block;}
	.sp-mid-cta-inner{flex-direction:column;text-align:center;}
	.sp-final-cta-inner{flex-direction:column;text-align:center;}
	.sp-final-cta-actions{justify-content:center;}
}
</style>