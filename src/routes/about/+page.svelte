<script>
	import SiteShell from '$lib/components/layout/SiteShell.svelte';
	import ContactSection from '$lib/components/sections/ContactSection.svelte';
	import TeamSection from '$lib/components/sections/TeamSection.svelte';

	const values = [
		{ icon: 'bi-shield-fill-check',     title: 'Accountability',  desc: 'We own every job from start to finish. If something isn\'t right, we come back and make it right — no excuses.' },
		{ icon: 'bi-trophy-fill',           title: 'Excellence',      desc: 'We don\'t just finish jobs — we finish them right. Our standard is move-in ready, every single time.' },
		{ icon: 'bi-lightning-charge-fill', title: 'Speed',           desc: 'Every vacant day costs you money. We prioritize fast scheduling and efficient execution without cutting corners.' },
		{ icon: 'bi-people-fill',           title: 'Teamwork',        desc: 'Our crews operate as one coordinated team, not a collection of subcontractors. That\'s how we deliver consistency.' },
		{ icon: 'bi-chat-dots-fill',        title: 'Communication',   desc: 'You\'ll always know where your job stands. Clear updates, honest timelines, no surprises.' },
		{ icon: 'bi-hand-thumbs-up-fill',   title: 'Solutions First', desc: 'We say yes and figure out how. Property managers come to us with problems — we leave with solutions.' },
	];

	const stats = [
		{ num: '4,008+', label: 'Projects Completed',    icon: 'bi-hammer' },
		{ num: '60+',    label: 'Clients Served',         icon: 'bi-buildings-fill' },
		{ num: '15+',    label: 'Field Professionals',    icon: 'bi-people-fill' },
		{ num: '11',     label: 'Cities Covered',         icon: 'bi-geo-alt-fill' },
		{ num: '12',     label: 'Specialized Services',   icon: 'bi-tools' },
		{ num: '24h',    label: 'Response Guarantee',     icon: 'bi-clock-fill' },
	];

	const differentiators = [
		{ num: '01', title: 'One vendor, everything covered', desc: 'Painting, cleaning, repairs, sheetrock, resurfacing, trash-outs — all under one invoice. No juggling multiple contractors.' },
		{ num: '02', title: 'Bilingual team', desc: 'Our bilingual (English/Spanish) crew eliminates communication barriers on-site — important when working across diverse communities.' },
		{ num: '03', title: 'Platform-ready from day one', desc: 'We\'re already set up in RealPage, Yardi/VendorCafe, AppFolio and more. Zero onboarding friction for your team.' },
		{ num: '04', title: 'Photo documentation on every job', desc: 'Before, during, and after photos uploaded with every completed work order — for your records and yours only.' },
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
<main class="main">

	<!-- Hero -->
	<section class="about-hero dark-background">
		<img src="/assets/img/img1.png" alt="About Cordova" class="about-hero-bg" />
		<div class="about-hero-overlay"></div>
		<div class="container about-hero-content">
			<nav class="breadcrumb-nav">
				<a href="/">Home</a>
				<i class="bi bi-chevron-right"></i>
				<span>About</span>
			</nav>
			<div class="about-hero-text">
				<span class="hero-eyebrow">Our Story</span>
				<h1>Built by people who understand<br />what property managers actually need</h1>
				<p>From a single crew to a full-service maintenance company — serving the Gulf Coast one unit turn at a time.</p>
				<div class="about-hero-tagline">
					<i class="bi bi-quote"></i>
					<span>We say yes. We deliver solutions.</span>
				</div>
			</div>
		</div>
	</section>

	<!-- Stats Impact — al estilo Lessen -->
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

	<!-- Story — al estilo Edwards: personal, auténtico -->
	<section class="about-story section">
		<div class="container">
			<div class="row gy-5 align-items-center">
				<div class="col-lg-6" data-aos="fade-right">
					<div class="story-img-wrap">
						<img src="/assets/img/features-light-2.jpg" alt="Our team at work" class="img-fluid" />
						<div class="story-badge">
							<i class="bi bi-quote"></i>
							<p>"We say yes.<br />We deliver solutions."</p>
						</div>
					</div>
				</div>
				<div class="col-lg-6" data-aos="fade-left">
					<span class="section-eyebrow">Who We Are</span>
					<h2>Your All-in-One Partner for Apartment Services</h2>
					<p class="story-lead">Property managers shouldn't have to juggle multiple vendors to turn one unit.</p>
					<p>Cordova Property Services is a full-service maintenance company specializing in apartment communities, proudly serving properties across Pensacola, Gulf Breeze, Navarre, Fort Walton, Crestview, Milton, Daphne, Mobile, Gulf Shores, Orange Beach, and Foley.</p>
					<p>We partner with property management companies and owners to deliver fast, dependable, and high-quality solutions tailored to the day-to-day needs of multifamily operations. Our reputation is built on reliability — we show up, we follow through, and we get the job done right.</p>
					<div class="story-promise">
						<i class="bi bi-award-fill"></i>
						<p>Our mission: service should be <strong>simple, responsive, and solution-driven.</strong> We understand the urgency of unit turns and maintenance timelines — that's why we prioritize clear communication, quick turnaround times, and consistent results.</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- What makes us different — lo que falta en la competencia -->
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
	</section>

	<!-- Values -->
	<section class="values-section section">
		<div class="container section-title" data-aos="fade-up">
			<h2>Our Core Values</h2>
			<p>The principles that guide every job we take on</p>
		</div>
		<div class="container">
			<div class="row gy-4">
				{#each values as v, i}
					<div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={(i % 3 + 1) * 100}>
						<div class="value-card">
							<div class="value-icon"><i class="bi {v.icon}"></i></div>
							<h4>{v.title}</h4>
							<p>{v.desc}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Service Areas — mapa visual de texto como Edwards/Lessen -->
	<section class="areas-section section light-background">
		<div class="container">
			<div class="row gy-5 align-items-center">
				<div class="col-lg-5" data-aos="fade-right">
					<span class="section-eyebrow">Where We Work</span>
					<h2>Serving the Gulf Coast Region</h2>
					<p>We operate across 11 cities in Florida and Alabama — built to serve the multifamily communities where property managers need us most.</p>
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
/* Hero */
.about-hero{position:relative;min-height:420px;display:flex;align-items:center;overflow:hidden;}
.about-hero-bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:1;}
.about-hero-overlay{position:absolute;inset:0;background:linear-gradient(120deg,rgba(10,18,8,0.85) 55%,rgba(107,107,40,0.5) 100%);z-index:2;}
.about-hero-content{position:relative;z-index:3;padding:100px 0 80px;}
.breadcrumb-nav{display:flex;align-items:center;gap:8px;color:rgba(255,255,255,0.6);font-size:13px;margin-bottom:20px;}
.breadcrumb-nav a{color:rgba(255,255,255,0.6);text-decoration:none;transition:color .2s;}
.breadcrumb-nav a:hover{color:#fffcd9;}
.breadcrumb-nav i{font-size:10px;}
.breadcrumb-nav span{color:#fffcd9;}
.hero-eyebrow{display:inline-block;font-size:12px;font-weight:700;color:#fffcd9;text-transform:uppercase;letter-spacing:2.5px;margin-bottom:16px;}
.about-hero-text h1{color:#fff;font-size:clamp(1.9rem,4vw,3.2rem);font-weight:800;line-height:1.15;margin-bottom:16px;letter-spacing:-.02em;max-width:700px;}
.about-hero-text p{color:rgba(255,255,255,0.85);font-size:1.1rem;margin:0 0 24px;max-width:520px;}
.about-hero-tagline{display:inline-flex;align-items:center;gap:10px;background:rgba(255,252,217,.1);border:1px solid rgba(255,252,217,.25);border-radius:30px;padding:10px 20px;}
.about-hero-tagline i{font-size:18px;color:#fffcd9;opacity:.8;}
.about-hero-tagline span{font-size:15px;font-weight:700;color:#fffcd9;font-style:italic;letter-spacing:.01em;}

/* Impact stats */
.impact-stats{background:linear-gradient(135deg,#1a2018 0%,#0d120c 100%);padding:50px 0;}
.impact-grid{display:grid;grid-template-columns:repeat(6,1fr);gap:0;}
.impact-item{
	text-align:center;padding:20px 16px;position:relative;
	border-right:1px solid rgba(255,255,255,0.08);
}
.impact-item:last-child{border-right:none;}
.impact-item i{font-size:22px;color:#fffcd9;opacity:0.7;display:block;margin-bottom:10px;}
.impact-num{display:block;font-size:1.9rem;font-weight:800;color:#fff;letter-spacing:-.03em;line-height:1;margin-bottom:6px;}
.impact-label{font-size:11px;color:rgba(255,255,255,0.6);text-transform:uppercase;letter-spacing:1.5px;}

/* Story */
.section-eyebrow{display:inline-block;color:#6b6b28;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:2px;margin-bottom:12px;}
.about-story h2{font-size:clamp(1.7rem,3vw,2.4rem);font-weight:800;color:#1a1a1a;margin-bottom:16px;letter-spacing:-.02em;line-height:1.2;}
.story-lead{font-size:1.1rem;font-weight:600;color:#333;margin-bottom:14px;}
.about-story p{color:#555;line-height:1.75;margin-bottom:14px;}

.story-img-wrap{position:relative;}
.story-img-wrap img{width:100%;border-radius:16px;box-shadow:0 20px 50px rgba(0,0,0,0.12);}
.story-badge{
	position:absolute;bottom:28px;left:-24px;
	background:linear-gradient(135deg,#6b6b28 0%,#4a4a1c 100%);
	padding:18px 22px;border-radius:12px;
	box-shadow:0 12px 32px rgba(107,107,40,0.4);
	max-width:200px;
}
.story-badge i{font-size:20px;color:#fffcd9;opacity:0.7;display:block;margin-bottom:8px;}
.story-badge p{font-size:14px;color:#fff;margin:0;font-weight:600;font-style:italic;line-height:1.4;}

.story-promise{
	background:#fafaf7;border:1px solid rgba(107,107,40,0.15);
	border-left:4px solid #6b6b28;
	padding:20px 24px;border-radius:0 12px 12px 0;
	margin-top:24px;display:flex;gap:14px;align-items:flex-start;
}
.story-promise i{font-size:22px;color:#6b6b28;flex-shrink:0;margin-top:2px;}
.story-promise p{font-size:14px;color:#444;margin:0;line-height:1.7;}
.story-promise strong{color:#4a4a1c;}

/* Differentiators */
.diff-card{
	display:flex;gap:20px;align-items:flex-start;
	background:#fff;border:1px solid rgba(107,107,40,0.1);
	border-radius:14px;padding:24px;
	height:100%;transition:all .3s ease;
	box-shadow:0 2px 10px rgba(0,0,0,0.03);
}
.diff-card:hover{border-color:rgba(107,107,40,0.3);box-shadow:0 8px 24px rgba(107,107,40,0.1);transform:translateY(-3px);}
.diff-num{
	font-size:2rem;font-weight:900;
	background:linear-gradient(135deg,#fffcd9 0%,#e8e0a0 100%);
	-webkit-background-clip:text;background-clip:text;
	-webkit-text-fill-color:transparent;
	line-height:1;flex-shrink:0;letter-spacing:-.03em;
}
.diff-body h4{font-size:16px;font-weight:700;color:#1a1a1a;margin-bottom:8px;letter-spacing:-.01em;}
.diff-body p{font-size:14px;color:#666;margin:0;line-height:1.65;}

/* Values */
.value-card{
	height:100%;padding:26px 22px;
	border:1px solid rgba(0,0,0,0.07);border-radius:14px;
	background:#fff;transition:all .3s ease;
}
.value-card:hover{transform:translateY(-4px);box-shadow:0 12px 32px rgba(0,0,0,0.08);border-color:rgba(107,107,40,0.25);}
.value-icon{
	width:50px;height:50px;
	background:linear-gradient(135deg,#fffcd9 0%,#f5f0c0 100%);
	border-radius:12px;display:flex;align-items:center;justify-content:center;
	margin-bottom:16px;
}
.value-icon i{font-size:22px;color:#6b6b28;}
.value-card h4{font-size:16px;font-weight:700;color:#1a1a1a;margin-bottom:8px;}
.value-card p{font-size:13.5px;color:#666;line-height:1.65;margin:0;}

/* Areas */
.areas-grid{display:flex;flex-wrap:wrap;gap:10px;}
.area-tag{
	display:inline-flex;align-items:center;gap:7px;
	background:#fff;border:1px solid rgba(107,107,40,0.15);
	border-radius:30px;padding:9px 18px;
	font-size:14px;font-weight:600;color:#333;
	transition:all .25s;
}
.area-tag:hover{background:#fffcd9;border-color:#6b6b28;color:#4a4a1c;}
.area-tag i{font-size:13px;color:#6b6b28;}

.btn-about-cta{
	display:inline-flex;align-items:center;gap:10px;
	padding:14px 28px;
	background:linear-gradient(135deg,#6b6b28 0%,#4a4a1c 100%);
	color:#fff;border-radius:10px;font-weight:700;font-size:14px;
	text-decoration:none;transition:all .3s ease;
	box-shadow:0 8px 20px rgba(107,107,40,0.3);
}
.btn-about-cta:hover{transform:translateY(-3px);box-shadow:0 12px 28px rgba(107,107,40,0.45);color:#fff;}

@media(max-width:991px){
	.impact-grid{grid-template-columns:repeat(3,1fr);}
	.impact-item:nth-child(3){border-right:none;}
	.story-badge{left:0;bottom:-14px;}
}
@media(max-width:576px){
	.impact-grid{grid-template-columns:repeat(2,1fr);}
	.impact-item:nth-child(2){border-right:none;}
	.impact-item{border-bottom:1px solid rgba(255,255,255,0.08);}
}
</style>