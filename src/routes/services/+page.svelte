<script>
	import SiteShell from '$lib/components/layout/SiteShell.svelte';
	import ContactSection from '$lib/components/sections/ContactSection.svelte';

	const categories = [
		{
			label: 'Renovation & Turns',
			services: [
				{ href: '/services/turnkey',   icon: 'bi-house-gear-fill',  title: 'Turnkey Services',        desc: 'Complete unit turns from move-out to move-in ready. We coordinate every trade so you don\'t have to.' },
				{ href: '/services/painting',  icon: 'bi-brush-fill',       title: 'Painting',                 desc: 'Interior and exterior painting with premium paints and professional technique. Fast, clean, consistent.' },
				{ href: '/services/sheetrock', icon: 'bi-bricks',           title: 'Sheetrock Repair',         desc: 'Holes, cracks, water damage — we patch, texture-match, and prime walls to perfection.' },
				{ href: '/services/millwork',  icon: 'bi-door-closed-fill', title: 'Millwork',                 desc: 'Baseboards, door frames, crown molding, and trim work that gives units a polished, finished look.' },
			]
		},
		{
			label: 'Cleaning & Remediation',
			services: [
				{ href: '/services/cleaning',          icon: 'bi-droplet-fill',          title: 'Cleaning',              desc: 'Deep move-in/move-out cleans and recurring service. Every surface, every corner, done right.' },
				{ href: '/services/water-remediation', icon: 'bi-droplet-fill',       title: 'Water Remediation',     desc: 'Emergency water damage response. We dry, treat, and restore before mold becomes a problem.' },
				{ href: '/services/pressure-washing',  icon: 'bi-water',              title: 'Pressure Washing',      desc: 'Exterior surfaces, walkways, driveways, and parking areas. Restore curb appeal and safety.' },
			]
		},
		{
			label: 'Resurfacing & Finishing',
			services: [
				{ href: '/services/tub-resurfacing',      icon: 'bi-bucket-fill',           title: 'Tub & Shower Resurfacing', desc: 'Refinish worn tubs and showers to like-new condition. Durable, professional, and far cheaper than replacement.' },
				{ href: '/services/counter-resurfacing',  icon: 'bi-square-fill',           title: 'Counter Resurfacing',       desc: 'Restore countertops without full replacement. A cost-effective upgrade tenants immediately notice.' },
				{ href: '/services/cabinet-painting',     icon: 'bi-palette-fill',           title: 'Cabinet Painting',          desc: 'Spray-painted cabinets at a fraction of replacement cost. Fresh kitchens. Happy tenants.' },
			]
		},
		{
			label: 'Repairs & Installations',
			services: [
				{ href: '/services/repairs',       icon: 'bi-tools',             title: 'Repairs',                   desc: 'From leaky faucets to broken fixtures — fast, reliable repairs that keep your units compliant and comfortable.' },
				{ href: '/services/installations', icon: 'bi-wrench-adjustable', title: 'Installation Services',     desc: 'Appliances, flooring, lighting, hardware — installed correctly by experienced, licensed technicians.' },
			]
		}
	];
</script>

<svelte:head>
	<title>Apartment Maintenance Services | Cordova Property Services — Pensacola FL</title>
	<meta name="description" content="12 specialized maintenance services for rental properties — painting, cleaning, repairs, resurfacing, turnkey turns and more." />
</svelte:head>

<SiteShell>
<main class="main">

	<!-- Page Hero -->
	<section class="page-hero dark-background">
		<img src="/assets/img/services.jpg" alt="Our Services" class="page-hero-bg" />
		<div class="page-hero-overlay"></div>
		<div class="container page-hero-content">
			<nav class="breadcrumb-nav" aria-label="breadcrumb">
				<a href="/">Home</a> <i class="bi bi-chevron-right"></i> <span>Services</span>
			</nav>
			<h1>Complete Property Maintenance Services</h1>
			<p>12 specialized services — one team, one invoice, zero coordination headaches</p>
		</div>
	</section>

	<!-- Intro -->
	<section class="services-intro section light-background">
		<div class="container">
			<div class="row align-items-center gy-4">
				<div class="col-lg-7" data-aos="fade-right">
					<h2>Everything Your Rental Property Needs, Under One Roof</h2>
					<p>Stop managing 6 different vendors to turn one unit. Cordova Property Services handles every aspect of rental property maintenance — from the first broom to the final coat of paint — with a single team, a single call, and a single invoice.</p>
					<p>Whether you need a quick refresh or a complete unit turn, we tailor our services to fit your timeline and budget.</p>
				</div>
				<div class="col-lg-5" data-aos="fade-left">
					<div class="intro-badges">
						<div class="badge-row">
							<span class="trust-badge"><i class="bi bi-shield-fill-check"></i> Licensed & Insured</span>
							<span class="trust-badge"><i class="bi bi-clock-fill"></i> 24h Response</span>
						</div>
						<div class="badge-row">
							<span class="trust-badge"><i class="bi bi-star-fill"></i> 500+ Services</span>
							<span class="trust-badge"><i class="bi bi-receipt"></i> No Hidden Fees</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Services by Category -->
	{#each categories as cat, ci}
		<section class="services-cat section {ci % 2 === 1 ? 'light-background' : ''}">
			<div class="container">
				<div class="cat-header" data-aos="fade-up">
					<h3>{cat.label}</h3>
					<div class="cat-divider"></div>
				</div>
				<div class="row gy-4">
					{#each cat.services as s, i}
						<div class="col-lg-{cat.services.length === 2 ? 6 : 4} col-md-6" data-aos="fade-up" data-aos-delay={(i + 1) * 100}>
							<a href={s.href} class="service-card">
								<div class="service-icon"><i class="bi {s.icon}"></i></div>
								<h4>{s.title}</h4>
								<p>{s.desc}</p>
								<span class="service-link">Learn more <i class="bi bi-arrow-right"></i></span>
							</a>
						</div>
					{/each}
				</div>
			</div>
		</section>
	{/each}

	<!-- Bottom CTA -->
	<section class="services-cta section dark-background">
		<img src="/assets/img/cta-bg.jpg" alt="" class="page-hero-bg" />
		<div class="page-hero-overlay" style="background:rgba(0,0,0,0.6)"></div>
		<div class="container" style="position:relative;z-index:3;text-align:center;">
			<h2 style="color:#fff;font-size:clamp(1.6rem,3vw,2.4rem);font-weight:700;margin-bottom:14px;">Not Sure Which Service You Need?</h2>
			<p style="color:rgba(255,255,255,0.85);font-size:1rem;max-width:550px;margin:0 auto 28px;">We offer free on-site walkthroughs to assess your property and recommend exactly what's needed — no obligation, no pressure.</p>
			<a href="/contact" class="btn-white">Schedule a Free Walkthrough <i class="bi bi-arrow-right ms-2"></i></a>
		</div>
	</section>

	<ContactSection />
</main>
</SiteShell>

<style>
.page-hero{position:relative;min-height:300px;display:flex;align-items:center;overflow:hidden;}
.page-hero-bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:1;}
.page-hero-overlay{position:absolute;inset:0;background:linear-gradient(120deg,rgba(0,0,0,0.65) 60%,rgba(0,0,0,0.35));z-index:2;}
.page-hero-content{position:relative;z-index:3;padding:80px 0 60px;}
.page-hero-content h1{color:#fff;font-size:clamp(2rem,4vw,3.2rem);font-weight:700;margin-bottom:12px;}
.page-hero-content p{color:rgba(255,255,255,0.85);font-size:1.05rem;margin:0;}
.breadcrumb-nav{display:flex;align-items:center;gap:8px;color:rgba(255,255,255,0.7);font-size:13px;margin-bottom:16px;}
.breadcrumb-nav a{color:rgba(255,255,255,0.7);text-decoration:none;}
.breadcrumb-nav a:hover{color:#fff;}
.breadcrumb-nav i{font-size:10px;}
.breadcrumb-nav span{color:#ef4e47;}

.services-intro h2{font-size:clamp(1.5rem,2.8vw,2.2rem);font-weight:700;color:#1a1a1a;margin-bottom:14px;}
.services-intro p{color:#555;line-height:1.75;margin-bottom:12px;}
.intro-badges{display:flex;flex-direction:column;gap:12px;}
.badge-row{display:flex;gap:12px;flex-wrap:wrap;}
.trust-badge{display:flex;align-items:center;gap:8px;padding:10px 16px;background:#fff;border:1px solid rgba(0,0,0,0.08);border-radius:8px;font-size:13px;font-weight:500;color:#333;flex:1;min-width:140px;}
.trust-badge i{color:#ef4e47;font-size:14px;}

.cat-header{margin-bottom:28px;}
.cat-header h3{font-size:1.3rem;font-weight:700;color:#1a1a1a;display:inline-block;}
.cat-divider{height:3px;width:60px;background:#ef4e47;border-radius:2px;margin-top:8px;}

.service-card{display:block;height:100%;padding:26px 22px;border:1px solid rgba(0,0,0,0.08);border-radius:12px;background:#fff;text-decoration:none;transition:transform .25s,box-shadow .25s,border-color .25s;}
.service-card:hover{transform:translateY(-5px);box-shadow:0 12px 40px rgba(0,0,0,0.1);border-color:#ef4e47;}
.service-icon{width:50px;height:50px;background:#fef2f2;border-radius:10px;display:flex;align-items:center;justify-content:center;margin-bottom:14px;}
.service-icon i{font-size:22px;color:#ef4e47;}
.service-card h4{font-size:16px;font-weight:600;color:#1a1a1a;margin-bottom:8px;}
.service-card p{font-size:14px;color:#666;line-height:1.65;margin-bottom:14px;}
.service-link{font-size:13px;font-weight:600;color:#ef4e47;display:flex;align-items:center;gap:6px;}
.service-link i{transition:transform .2s;}
.service-card:hover .service-link i{transform:translateX(4px);}

.services-cta{position:relative;min-height:280px;display:flex;align-items:center;padding:70px 0;}
.btn-white{display:inline-flex;align-items:center;padding:14px 30px;background:#fff;color:#ef4e47;border-radius:8px;font-weight:700;text-decoration:none;transition:.25s;}
.btn-white:hover{background:#fef2f2;transform:translateY(-2px);}
</style>