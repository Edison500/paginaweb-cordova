<script>
	import SiteShell from '$lib/components/layout/SiteShell.svelte';
	import ContactSection from '$lib/components/sections/ContactSection.svelte';
	import TeamSection from '$lib/components/sections/TeamSection.svelte';
	import PlatformsSection from '$lib/components/sections/PlatformsSection.svelte';

	const values = [
		{ icon: 'bi-shield-fill-check', title: 'Accountability', desc: 'We own every job from start to finish. If something isn’t right, we come back and make it right — no excuses.' },
		{ icon: 'bi-trophy-fill', title: 'Excellence', desc: 'We don’t just finish jobs — we finish them right. Our standard is move-in ready, every single time.' },
		{ icon: 'bi-lightning-charge-fill', title: 'Speed', desc: 'Every vacant day costs you money. We prioritize fast scheduling and efficient execution without cutting corners.' },
		{ icon: 'bi-people-fill', title: 'Teamwork', desc: 'Our crews operate as one coordinated team, not a collection of subcontractors. That’s how we deliver consistency.' },
		{ icon: 'bi-chat-dots-fill', title: 'Communication', desc: 'You’ll always know where your job stands. Clear updates, honest timelines, no surprises.' },
		{ icon: 'bi-hand-thumbs-up-fill', title: 'Solutions First', desc: 'We say yes and figure out how. Property managers come to us with problems — we leave with solutions.' }
	];

	const stats = [
		{ num: '4,008+', label: 'Projects Completed', icon: 'bi-hammer' },
		{ num: '60+', label: 'Clients Served', icon: 'bi-buildings-fill' },
		{ num: '11', label: 'Cities Covered', icon: 'bi-geo-alt-fill' },
		{ num: '12', label: 'Specialized Services', icon: 'bi-tools' },
		{ num: '24h', label: 'Response Guarantee', icon: 'bi-clock-fill' }
	];

const differentiators = [
	{ 
		num: '01',
		title: 'One vendor, everything covered',
		desc: 'Painting, cleaning, repairs, sheetrock, resurfacing, trash-outs — all under one invoice. No juggling multiple contractors.'
	},

	{ 
		num: '02',
		title: 'Fast 5-day turnaround',
		desc: 'Most standard turns and service requests are completed in under 5 days, helping your team reduce vacancy time and keep units move-in ready without delays.'
	},

	{ 
		num: '03',
		title: 'Certified & qualified technicians',
		desc: 'Our technicians are trained, experienced, and qualified in their trade, following professional standards across painting, maintenance, repairs, resurfacing, and property services.'
	},

	{ 
		num: '04',
		title: 'Photo documentation on every job',
		desc: 'Before, during, and after photos uploaded with every completed work order — for your records and operational transparency.'
	}
];

const platforms = [
	{ src: '/assets/img/invoice-logo/realpage1.png', alt: 'RealPage' },
	{ src: '/assets/img/invoice-logo/yardi1.png', alt: 'Yardi' },
	{ src: '/assets/img/invoice-logo/netvendor1.png', alt: 'NetVendor' },
	{ src: '/assets/img/invoice-logo/vendorcafe.png', alt: 'VendorCafe' },
	{ src: '/assets/img/invoice-logo/opsmerchant.png', alt: 'OpsMerchant' },
];

	const areas = [
		'Pensacola', 'Gulf Breeze', 'Navarre', 'Fort Walton',
		'Crestview', 'Milton', 'Daphne', 'Mobile',
		'Gulf Shores', 'Orange Beach', 'Foley'
	];
</script>

<svelte:head>
	<title>About Us | Cordova Property Services — Pensacola & Gulf Coast</title>
	<meta name="description" content="Learn about Cordova Property Services — our story, mission, values, and the team behind every successful unit turn across Pensacola and the Gulf Coast." />
</svelte:head>

<SiteShell>
	<main class="main about-page">

		<section class="about-hero dark-background">
			<img
				src="/assets/img/img1.png"
				alt="About Cordova"
				class="about-hero-bg"
				fetchpriority="high"
				decoding="async"
			/>

			<div class="about-hero-overlay"></div>
			<div class="about-hero-pattern"></div>
			<div class="about-hero-fade-bottom"></div>

			<div class="container about-hero-content">
				<nav class="breadcrumb-nav">
					<a href="/">Home</a>
					<i class="bi bi-chevron-right"></i>
					<span>About</span>
				</nav>

				<div class="about-hero-text">
					<span class="hero-eyebrow">Our Story</span>

					<h1>Built for property managers who need results — not excuses</h1>

					<p>
						From a single crew to a full-service maintenance company —
						serving the Gulf Coast one unit turn at a time.
					</p>

					<div class="about-hero-tagline">
						<i class="bi bi-quote"></i>
						<span>We say yes. We deliver solutions.</span>
					</div>
				</div>
			</div>
		</section>

		<section class="impact-stats">
			<div class="container">
				<div class="impact-grid">
					{#each stats as s, i}
						<div class="impact-item" data-aos="fade-up" data-aos-delay={i * 60}>
							<i class="bi {s.icon}"></i>
							<span class="impact-num">{s.num}</span>
							<span class="impact-label">{s.label}</span>
						</div>
					{/each}
				</div>
			</div>
		</section>

		<section class="about-story section">
			<div class="container">
				<div class="row gy-5 align-items-center">
					<div class="col-lg-6" data-aos="fade-right">
						<div class="story-img-wrap">
							<img src="/assets/img/features-light-2.jpg" alt="Our team at work" class="img-fluid" />
							<div class="story-badge">
								<i class="bi bi-quote"></i>
								<p>“We say yes.<br />We deliver solutions.”</p>
							</div>
						</div>
					</div>

					<div class="col-lg-6" data-aos="fade-left">
						<span class="section-eyebrow">Who We Are</span>
						<h2>Your All-in-One Partner for Apartment Services</h2>

						<p class="story-lead">
							Property managers shouldn’t have to juggle multiple vendors to turn one unit.
						</p>

						<p>
							Cordova Property Services is a full-service maintenance company specializing in apartment communities,
							proudly serving properties across Pensacola, Gulf Breeze, Navarre, Fort Walton, Crestview, Milton,
							Daphne, Mobile, Gulf Shores, Orange Beach, and Foley.
						</p>

						<p>
							We partner with property management companies and owners to deliver fast, dependable, and high-quality
							solutions tailored to the day-to-day needs of multifamily operations.
						</p>

						<div class="story-promise">
							<i class="bi bi-award-fill"></i>
							<p>
								Our mission: service should be <strong>simple, responsive, and solution-driven.</strong>
								We understand the urgency of unit turns and maintenance timelines.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="differentiators section light-background">
			<div class="container section-title" data-aos="fade-up">
				<h2>What Makes Us Different</h2>
				<p>Not just another maintenance vendor — a partner built for multifamily operations</p>
			</div>

			<div class="container">
				<div class="row gy-4">
					{#each differentiators as d, i}
						<div class="col-lg-6" data-aos="fade-up" data-aos-delay={i * 100}>
							<div class="diff-card">
								<div class="diff-num">{d.num}</div>
								<div class="diff-body">
									<h4>{d.title}</h4>
									<p>{d.desc}</p>
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>

			<div class="container" style="margin-top:24px; padding-bottom:60px;">
				<div class="row gy-4">
					<div class="col-12" data-aos="fade-up" data-aos-delay="400">
						<div class="diff-card">
							<div class="diff-num">05</div>
							<div class="diff-body" style="width:100%;">
								<h4 style="text-align:center;width:100%;">Portals &amp; Compliance Platforms</h4>
								<div class="platforms-logos">
									<div class="plat-logo-card"><img src="/assets/img/invoice-logo/realpage1.png" alt="RealPage" /></div>
									<div class="plat-logo-card"><img src="/assets/img/invoice-logo/yardi1.png" alt="Yardi" /></div>
									<div class="plat-logo-card"><img src="/assets/img/invoice-logo/netvendor1.png" alt="NetVendor" /></div>
									<div class="plat-logo-card"><img src="/assets/img/invoice-logo/vendorcafe.png" alt="VendorCafe" /></div>
									<div class="plat-logo-card"><img src="/assets/img/invoice-logo/opsmerchant.png" alt="OpsMerchant" /></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="areas-section section light-background">
			<div class="container">
				<div class="row gy-5 align-items-center">
					<div class="col-lg-5" data-aos="fade-right">
						<span class="section-eyebrow">Where We Work</span>
						<h2>Serving the Gulf Coast Region</h2>
						<p>
							We operate across 11 cities in Florida and Alabama — built to serve the multifamily communities
							where property managers need us most.
						</p>
						<a href="/contact" class="btn-about-cta mt-4">Check Your Area</a>
					</div>

					<div class="col-lg-7" data-aos="fade-left">
						<div class="areas-grid">
							{#each areas as a, i}
								<div class="area-tag" data-aos="fade-up" data-aos-delay={i * 40}>
									<i class="bi bi-geo-alt-fill"></i>
									<span>{a}</span>
								</div>
							{/each}
						</div>
					</div>
				</div>
			</div>
		</section>

		<TeamSection />
		<ContactSection />

	</main>
</SiteShell>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500..800&display=swap');

	.about-page {
		font-family: 'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont,
			'Segoe UI', system-ui, sans-serif;
		font-feature-settings: 'cv02', 'cv03', 'cv04', 'cv11', 'ss01';
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-rendering: optimizeLegibility;
	}

	.about-hero {
		position: relative;
		min-height: 92vh;
		display: flex;
		align-items: center;
		overflow: hidden;
	}

	.about-hero-bg {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 110%;
		object-fit: cover;
		object-position: center 38%;
		z-index: 1;
		transform: scale(1.05);
		transition: transform 6s ease;
	}

	.about-hero-overlay {
	position: absolute;
	inset: 0;
	z-index: 2;
	background:
		linear-gradient(
			90deg,
			rgba(0, 0, 0, 0.78) 0%,
			rgba(0, 0, 0, 0.55) 28%,
			rgba(0, 0, 0, 0.25) 55%,
			rgba(0, 0, 0, 0.08) 75%,
			transparent 100%
		),
		linear-gradient(
			180deg,
			rgba(0,0,0,0.15) 0%,
			rgba(0,0,0,0.35) 100%
		);
}

	.about-hero-pattern {
		position: absolute;
		inset: 0;
		z-index: 3;
		pointer-events: none;
		opacity: 0.06;
		background-image: radial-gradient(
			circle at 1px 1px,
			rgba(255, 255, 255, 0.45) 1px,
			transparent 0
		);
		background-size: 30px 30px;
	}

	.about-hero-fade-bottom {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		height: 90px;
		z-index: 3;
		pointer-events: none;
		background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.32) 100%);
	}

	.about-hero-content {
		position: relative;
		z-index: 4;
		padding: 40px 0;
	}

	.breadcrumb-nav {
		display: flex;
		align-items: center;
		gap: 8px;
		color: rgba(255, 255, 255, 0.68);
		font-size: 12.5px;
		font-weight: 500;
		margin-bottom: 22px;
		letter-spacing: 0.01em;
	}

	.breadcrumb-nav a {
		color: rgba(255, 255, 255, 0.68);
		text-decoration: none;
		transition: color 0.2s ease;
	}

	.breadcrumb-nav a:hover {
		color: #fffcd9;
	}

	.breadcrumb-nav i {
		font-size: 9px;
		opacity: 0.7;
	}

	.breadcrumb-nav span {
		color: #fffcd9;
		font-weight: 700;
	}

	.hero-eyebrow {
		display: inline-block;
		font-size: 11.5px;
		font-weight: 800;
		color: #fffcd9;
		text-transform: uppercase;
		letter-spacing: 2.8px;
		margin-bottom: 18px;
	}

	.about-hero-text h1 {
		color: #fff;
		font-family: 'Fraunces', 'Times New Roman', Georgia, serif;
		font-size: clamp(2.6rem, 5.2vw, 4.8rem);
		font-weight: 700;
		font-variation-settings: 'opsz' 144;
		font-feature-settings: 'ss01', 'kern';
		line-height: 0.95;
		letter-spacing: -0.04em;
		margin-bottom: 22px;
		max-width: 780px;
		text-wrap: balance;
		text-shadow:
			0 12px 45px rgba(0,0,0,0.65),
		0 4px 15px rgba(0,0,0,0.45);
	}

	.about-hero-text p {
		color: rgba(255, 255, 255, 0.92);
		font-size: 1.15rem;
		line-height: 1.7;
		margin-bottom: 34px;
		max-width: 620px;
		font-weight: 400;
		text-shadow: 0 4px 18px rgba(0, 0, 0, 0.45);
	}

	.about-hero-tagline {
		display: inline-flex;
		align-items: center;
		gap: 10px;
		background: rgba(255, 252, 217, 0.11);
		border: 1px solid rgba(255, 252, 217, 0.28);
		border-radius: 999px;
		padding: 11px 22px;
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08);
	}

	.about-hero-tagline i {
		font-size: 18px;
		color: #fffcd9;
		opacity: 0.85;
	}

	.about-hero-tagline span {
		font-size: 14px;
		font-weight: 700;
		color: #fffcd9;
		font-style: italic;
		letter-spacing: 0.01em;
	}

	.impact-stats {
		background: linear-gradient(135deg, #1a2018 0%, #0d120c 100%);
		padding: 64px 0;
	}

	.impact-grid {
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		gap: 0;
	}

	.impact-item {
		text-align: center;
		padding: 22px 18px;
		position: relative;
		border-right: 1px solid rgba(255, 255, 255, 0.08);
	}

	.impact-item:last-child {
		border-right: none;
	}

	.impact-item i {
		font-size: 22px;
		color: #fffcd9;
		opacity: 0.72;
		display: block;
		margin-bottom: 12px;
	}

	.impact-num {
		display: block;
		font-size: clamp(1.6rem, 2vw, 2rem);
		font-weight: 800;
		color: #fff;
		letter-spacing: -0.028em;
		line-height: 1;
		margin-bottom: 8px;
		font-variant-numeric: tabular-nums lining-nums;
		font-feature-settings: 'tnum' 1, 'lnum' 1;
	}

	.impact-label {
		font-size: 10.5px;
		color: rgba(255, 255, 255, 0.62);
		text-transform: uppercase;
		letter-spacing: 1.6px;
		font-weight: 700;
	}

	.section-eyebrow {
		display: inline-block;
		color: #6b6b28;
		font-size: 11px;
		font-weight: 800;
		text-transform: uppercase;
		letter-spacing: 2.2px;
		margin-bottom: 14px;
	}

	.about-story h2 {
		font-size: clamp(1.7rem, 2.8vw, 2.4rem);
		font-weight: 700;
		color: #181d18;
		margin-bottom: 18px;
		letter-spacing: -0.025em;
		line-height: 1.18;
	}

	.story-lead {
		font-size: 1.12rem;
		font-weight: 600;
		color: #2a2f29;
		margin-bottom: 16px;
		line-height: 1.5;
		letter-spacing: -0.005em;
	}

	.about-story p {
		color: #5a605a;
		line-height: 1.75;
		margin-bottom: 14px;
		font-size: 14.5px;
		font-weight: 500;
		letter-spacing: -0.005em;
	}

	.story-img-wrap {
		position: relative;
	}

	.story-img-wrap img {
		width: 100%;
		border-radius: 18px;
		box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);
	}

	.story-badge {
		position: absolute;
		bottom: 28px;
		left: -24px;
		background: linear-gradient(135deg, #6b6b28 0%, #4a4a1c 100%);
		padding: 18px 22px;
		border-radius: 14px;
		box-shadow: 0 12px 32px rgba(107, 107, 40, 0.4);
		max-width: 210px;
	}

	.story-badge i {
		font-size: 20px;
		color: #fffcd9;
		opacity: 0.75;
		display: block;
		margin-bottom: 8px;
	}

	.story-badge p {
		font-size: 13.5px;
		color: #fff;
		margin: 0;
		font-weight: 600;
		font-style: italic;
		line-height: 1.45;
		letter-spacing: -0.005em;
	}

	.story-promise {
		background: #fafaf7;
		border: 1px solid rgba(107, 107, 40, 0.15);
		border-left: 4px solid #6b6b28;
		padding: 22px 26px;
		border-radius: 0 14px 14px 0;
		margin-top: 26px;
		display: flex;
		gap: 14px;
		align-items: flex-start;
	}

	.story-promise i {
		font-size: 22px;
		color: #6b6b28;
		flex-shrink: 0;
		margin-top: 2px;
	}

	.story-promise p {
		font-size: 13.5px;
		color: #444;
		margin: 0;
		line-height: 1.7;
		font-weight: 500;
	}

	.story-promise strong {
		color: #3d3712;
		font-weight: 700;
	}

	.differentiators :global(.section-title h2),
	.values-section :global(.section-title h2) {
		font-size: clamp(1.8rem, 2.8vw, 2.3rem);
		font-weight: 700;
		letter-spacing: -0.025em;
		color: #181d18;
		line-height: 1.2;
	}

	.differentiators :global(.section-title p),
	.values-section :global(.section-title p) {
		font-size: 15px;
		color: #5a605a;
		font-weight: 500;
		line-height: 1.6;
	}

	.diff-card {
		display: flex;
		gap: 22px;
		align-items: flex-start;
		background: #fff;
		border: 1px solid rgba(107, 107, 40, 0.12);
		border-radius: 16px;
		padding: 26px;
		height: 100%;
		transition: all 0.3s ease;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);
	}

	.diff-card:hover {
		border-color: rgba(107, 107, 40, 0.32);
		box-shadow: 0 18px 40px rgba(107, 107, 40, 0.15);
		transform: translateY(-6px);
	}

	.diff-num {
		font-size: 2.2rem;
		font-weight: 800;
		color: #6b6b28;
		background: linear-gradient(135deg, #8a8a3a 0%, #4a4a1c 100%);
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
		line-height: 1;
		flex-shrink: 0;
		letter-spacing: -0.04em;
		font-variant-numeric: tabular-nums lining-nums;
		font-feature-settings: 'tnum' 1, 'lnum' 1;
		min-width: 50px;
	}

	.diff-body h4 {
		font-size: 16.5px;
		font-weight: 700;
		color: #181d18;
		margin-bottom: 10px;
		letter-spacing: -0.015em;
		line-height: 1.3;
	}

	.diff-body p {
		font-size: 13.5px;
		color: #5a605a;
		margin: 0;
		line-height: 1.7;
		font-weight: 500;
		letter-spacing: -0.005em;
	}

	.value-card {
		height: 100%;
		padding: 28px 24px;
		border: 1px solid rgba(0, 0, 0, 0.07);
		border-radius: 16px;
		background: #fff;
		transition: all 0.3s ease;
	}

	.value-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 16px 36px rgba(0, 0, 0, 0.09);
		border-color: rgba(107, 107, 40, 0.25);
	}

	.value-icon {
		width: 52px;
		height: 52px;
		background: linear-gradient(135deg, #fffcd9 0%, #e8e2a8 100%);
		border-radius: 13px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 18px;
	}

	.value-icon i {
		font-size: 22px;
		color: #6b6b28;
	}

	.value-card h4 {
		font-size: 16.5px;
		font-weight: 700;
		color: #181d18;
		margin-bottom: 10px;
		letter-spacing: -0.015em;
		line-height: 1.3;
	}

	.value-card p {
		font-size: 13.5px;
		color: #5a605a;
		line-height: 1.7;
		margin: 0;
		font-weight: 500;
		letter-spacing: -0.005em;
	}

	.areas-section h2 {
		font-size: clamp(1.7rem, 2.6vw, 2.2rem);
		font-weight: 700;
		color: #181d18;
		letter-spacing: -0.025em;
		line-height: 1.2;
		margin-bottom: 16px;
	}

	.areas-section p {
		color: #5a605a;
		font-size: 14.5px;
		line-height: 1.7;
		font-weight: 500;
		margin-bottom: 18px;
		letter-spacing: -0.005em;
	}

	.areas-grid {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
	}

	.area-tag {
		display: inline-flex;
		align-items: center;
		gap: 7px;
		background: #fff;
		border: 1px solid rgba(107, 107, 40, 0.18);
		border-radius: 30px;
		padding: 10px 18px;
		font-size: 13.5px;
		font-weight: 600;
		color: #2a2f29;
		letter-spacing: -0.005em;
		transition: all 0.25s ease;
	}

	.area-tag:hover {
		background: #fffcd9;
		border-color: #6b6b28;
		color: #4a4a1c;
		transform: translateY(-2px);
	}

	.area-tag i {
		font-size: 13px;
		color: #6b6b28;
	}

	.btn-about-cta {
		display: inline-flex;
		align-items: center;
		gap: 10px;
		padding: 15px 30px;
		background: linear-gradient(135deg, #6b6b28 0%, #4a4a1c 100%);
		color: #fff;
		border-radius: 10px;
		font-weight: 700;
		font-size: 14px;
		letter-spacing: 0.01em;
		text-decoration: none;
		transition: all 0.3s ease;
		box-shadow:
			0 8px 20px rgba(107, 107, 40, 0.3),
			inset 0 1px 0 rgba(255, 255, 255, 0.1);
	}

	.invoicing-card-wrap {
		padding-bottom: 0;
		margin-bottom: 0;
	}

	.diff-card-full {
		align-items: center;
	}

	.platforms-logos {
		display: flex;
		flex-wrap: wrap;
		gap: 14px;
		margin-top: 18px;
	}

	.plat-logo-card {
		display: flex;
		align-items: center;
		justify-content: center;
		background: #fff;
		border: 1px solid rgba(0,0,0,0.08);
		border-radius: 10px;
		padding: 14px 24px;
		min-width: 160px;
		height: 90px;
		box-shadow: 0 2px 8px rgba(0,0,0,0.04);
		transition: box-shadow 0.3s, border-color 0.3s;
	}

	.plat-logo-card:hover {
		box-shadow: 0 6px 20px rgba(107,107,40,0.15);
		border-color: rgba(107,107,40,0.25);
	}

	.plat-logo-card img {
		width: 100%;
		height: auto;
		max-width: 160px;
		max-height: 80px;
		object-fit: contain;
	}

	.plat-logo-card img[alt="VendorCafe"] {
		max-width: 80px;
		max-height: 80px;
	}

	.btn-about-cta:hover {
		transform: translateY(-3px);
		box-shadow:
			0 14px 30px rgba(107, 107, 40, 0.45),
			inset 0 1px 0 rgba(255, 255, 255, 0.15);
		color: #fff;
	}

	@media (max-width: 1199px) {
		.impact-grid {
			grid-template-columns: repeat(3, 1fr);
			gap: 8px 0;
		}

		.impact-item:nth-child(3) {
			border-right: none;
		}

		.impact-item:nth-child(n+4) {
			border-top: 1px solid rgba(255, 255, 255, 0.08);
			padding-top: 26px;
		}
	}

	@media (max-width: 991px) {
		.about-hero {
			min-height: 82vh;
		}

		.about-hero-content {
			padding: 80px 0 70px;
		}

		.about-hero-overlay {
			background: linear-gradient(
				90deg,
				rgba(0, 0, 0, 0.72) 0%,
				rgba(0, 0, 0, 0.48) 50%,
				rgba(0, 0, 0, 0.2) 100%
			);
		}

		.story-badge {
			left: 0;
			bottom: -14px;
		}
	}

	@media (max-width: 640px) {
		.about-hero {
			min-height: 80vh;
		}

		.about-hero-bg {
			object-position: center 40%;
			transform: scale(1.08);
		}

		.about-hero-content {
			padding: 74px 0 64px;
		}

		.breadcrumb-nav {
			font-size: 12px;
			margin-bottom: 18px;
		}

		.hero-eyebrow {
			font-size: 10.5px;
			letter-spacing: 2.2px;
			margin-bottom: 14px;
		}

		.about-hero-text h1 {
			font-size: clamp(2rem, 9vw, 3rem);
			letter-spacing: -0.035em;
			line-height: 1;
			max-width: 95%;
		}

		.about-hero-text p {
			font-size: 0.98rem;
			max-width: 92%;
		}

		.about-hero-tagline {
			padding: 10px 18px;
		}

		.about-hero-tagline span {
			font-size: 13px;
		}

		.impact-grid {
			grid-template-columns: repeat(2, 1fr);
		}

		.impact-item {
			border-right: 1px solid rgba(255, 255, 255, 0.08);
			border-bottom: 1px solid rgba(255, 255, 255, 0.08);
		}

		.impact-item:nth-child(2n) {
			border-right: none;
		}

		.impact-item:nth-last-child(-n+2) {
			border-bottom: none;
		}

		.impact-item:nth-child(n+4) {
			border-top: none;
			padding-top: 22px;
		}

		.impact-num {
			font-size: 1.6rem;
		}

		.diff-card {
			padding: 22px 20px;
			gap: 16px;
		}

		.diff-num {
			font-size: 1.9rem;
			min-width: 42px;
		}

		.value-card {
			padding: 24px 20px;
		}

		.area-tag {
			font-size: 13px;
			padding: 9px 16px;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.about-hero-bg,
		.diff-card,
		.value-card,
		.area-tag,
		.btn-about-cta {
			transition: none !important;
		}
	}
</style>