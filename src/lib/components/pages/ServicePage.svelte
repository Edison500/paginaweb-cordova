<script>
	import SiteShell from '$lib/components/layout/SiteShell.svelte';
	import ContactSection from '$lib/components/sections/ContactSection.svelte';

	import { slide } from 'svelte/transition';

	let {
		title      = '',
		tagline    = '',
		heroImg    = '/assets/img/services.jpg',
		heroPosition = 'center top',
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

	<!-- HERO -->
	<section class="sp-hero dark-background" style={`--sp-hero-image: url("${heroImg}"); --sp-hero-position: ${heroPosition};`}>
		<img src={heroImg} alt={title} class="sp-hero-bg" />
		<div class="sp-hero-overlay"></div>
		<div class="container sp-hero-content">
			<nav class="sp-breadcrumb">
				<a href="/">Home</a>
				<i class="bi bi-chevron-right"></i>
				<a href="/services">Services</a>
				<i class="bi bi-chevron-right"></i>
				<span>{title}</span>
			</nav>
			<div class="sp-hero-text">
				<div class="sp-hero-eyebrow">
					<i class="bi bi-geo-alt-fill"></i>
					Pensacola & Gulf Coast
				</div>
				<h1>{title}</h1>
				<p>{tagline}</p>
				<div class="sp-hero-actions">
					<a href="/contact" class="sp-btn-primary">
						<i class="bi bi-calendar-check-fill"></i>
						Schedule Service
					</a>
					<a href="tel:+14482196669" class="sp-btn-outline">
						<i class="bi bi-telephone-fill"></i>
						(448) 219-6669
					</a>
				</div>
				<div class="sp-hero-badges">
					<span><i class="bi bi-shield-fill-check"></i> Licensed & Insured</span>
					<span><i class="bi bi-clock-fill"></i> 24h Response</span>
					<span><i class="bi bi-camera-fill"></i> Photo Documentation</span>
				</div>
			</div>
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
						<a href="/contact" class="sp-sidebar-btn-primary">Schedule Now</a>
						<a href="tel:+14482196669" class="sp-sidebar-btn-call">
							<i class="bi bi-telephone-fill"></i>
							(448) 219-6669
						</a>
						<a href="mailto:scheduling@cordovaps.com" class="sp-sidebar-btn-email">
							<i class="bi bi-envelope-fill"></i>
							scheduling@cordovaps.com
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
/* SERVICE HERO FIX V3 - cover full width, no side columns */
/* ─── HERO ─────────────────────────────────── */
.sp-hero{
	position:relative;
	width:100%;
	min-height:clamp(660px,86vh,920px);
	display:flex;
	align-items:center;
	overflow:hidden;
	isolation:isolate;
	background:#10130e;
}
.sp-hero-bg{
	position:absolute;
	inset:0;
	width:100%;
	height:100%;
	object-fit:cover;
	object-position:var(--sp-hero-position,center center);
	z-index:1;
	transform:scale(1.01);
}
.sp-hero-overlay{
	position:absolute;
	inset:0;
	background:
		linear-gradient(90deg,rgba(0,0,0,.48) 0%,rgba(0,0,0,.25) 34%,rgba(0,0,0,.06) 66%,rgba(0,0,0,.03) 100%),
		linear-gradient(180deg,rgba(0,0,0,.10) 0%,rgba(0,0,0,.02) 45%,rgba(0,0,0,.18) 100%);
	z-index:2;
	pointer-events:none;
}
.sp-hero-content{
	position:relative;
	z-index:3;
	padding:clamp(130px,17vh,180px) 0 clamp(95px,13vh,145px);
}

.sp-breadcrumb{display:flex;align-items:center;gap:8px;color:rgba(255,255,255,.72);font-size:13px;margin-bottom:18px;}
.sp-breadcrumb a{color:rgba(255,255,255,.72);text-decoration:none;transition:color .2s;}
.sp-breadcrumb a:hover{color:#fffcd9;}
.sp-breadcrumb i{font-size:10px;}
.sp-breadcrumb span{color:#fffcd9;}

.sp-hero-eyebrow{display:inline-flex;align-items:center;gap:7px;font-size:12px;font-weight:800;color:#fffcd9;text-transform:uppercase;letter-spacing:2px;margin-bottom:14px;}
.sp-hero-eyebrow i{font-size:12px;}
.sp-hero-text{
	width:min(720px,calc(100vw - 32px));
	padding:30px 34px 32px;
	border-radius:24px;
	background:linear-gradient(90deg,rgba(0,0,0,.42) 0%,rgba(0,0,0,.25) 70%,rgba(0,0,0,.14) 100%);
	border:1px solid rgba(255,255,255,.12);
	box-shadow:0 24px 70px rgba(0,0,0,.25);
	text-shadow:0 3px 18px rgba(0,0,0,.65);
	backdrop-filter:blur(2px);
}
.sp-hero-text h1{color:#fff;font-size:clamp(2.5rem,5vw,4.45rem);font-weight:850;line-height:1.04;margin-bottom:14px;letter-spacing:-.04em;max-width:690px;}
.sp-hero-text p{color:rgba(255,255,255,.90);font-size:clamp(1rem,1.55vw,1.22rem);line-height:1.55;margin-bottom:30px;max-width:620px;}

.sp-hero-actions{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:24px;}
.sp-btn-primary{display:inline-flex;align-items:center;gap:8px;padding:13px 26px;background:linear-gradient(135deg,#6b6b28 0%,#4a4a1c 100%);color:#fff;border-radius:10px;font-weight:700;font-size:14px;text-decoration:none;transition:all .3s;box-shadow:0 6px 20px rgba(107,107,40,.4);}
.sp-btn-primary:hover{transform:translateY(-3px);box-shadow:0 10px 28px rgba(107,107,40,.55);color:#fff;}
.sp-btn-outline{display:inline-flex;align-items:center;gap:8px;padding:13px 22px;border:2px solid rgba(255,255,255,.45);color:#fff;border-radius:10px;font-weight:600;font-size:14px;text-decoration:none;transition:all .3s;background:rgba(0,0,0,.10);}
.sp-btn-outline:hover{border-color:#fffcd9;background:rgba(255,255,255,.08);color:#fff;}

.sp-hero-badges{display:flex;gap:16px;flex-wrap:wrap;}
.sp-hero-badges span{display:inline-flex;align-items:center;gap:6px;font-size:12px;color:rgba(255,255,255,.84);font-weight:600;}
.sp-hero-badges i{color:#fffcd9;font-size:13px;}

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
.sp-related-img{position:relative;height:220px;overflow:hidden;}
.sp-related-img img{width:100%;height:100%;object-fit:cover;object-position:center top;transition:transform .4s ease;}
.sp-related-card:hover .sp-related-img img{transform:scale(1.06);}
.sp-related-overlay{position:absolute;inset:0;background:linear-gradient(to top,rgba(26,32,24,.7) 0%,transparent 60%);display:flex;align-items:flex-end;padding:12px;}
.sp-related-overlay i{font-size:20px;color:#fffcd9;}
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
	.sp-hero{min-height:620px;}
	.sp-hero-bg{object-position:var(--sp-hero-position,center center);}
	.sp-hero-overlay{background:linear-gradient(90deg,rgba(0,0,0,.50) 0%,rgba(0,0,0,.25) 75%,rgba(0,0,0,.10) 100%);}
	.sp-hero-content{padding:92px 0 64px;}
	.sp-hero-text{width:100%;padding:24px 20px;border-radius:20px;}
	.sp-includes-grid{grid-template-columns:1fr;}
	.sp-sidebar-card{display:block;}
	.sp-mid-cta-inner{flex-direction:column;text-align:center;}
	.sp-final-cta-inner{flex-direction:column;text-align:center;}
	.sp-final-cta-actions{justify-content:center;}
}
</style>