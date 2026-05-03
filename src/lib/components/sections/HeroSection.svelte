<script>
	import { onMount } from 'svelte';
	let count1 = $state(0), count2 = $state(0), count3 = $state(0);
	let scrollY = $state(0);

	onMount(() => {
		const animate = (target, setter, duration=2000) => {
			let start = null;
			const step = (ts) => {
				if (!start) start = ts;
				const progress = Math.min((ts - start) / duration, 1);
				const eased = progress < 0.5 ? 4*progress*progress*progress : 1-Math.pow(-2*progress+2,3)/2;
				setter(Math.floor(eased * target));
				if (progress < 1) requestAnimationFrame(step);
				else setter(target);
			};
			requestAnimationFrame(step);
		};
		setTimeout(() => {
			animate(4008, v => count1 = v);
			animate(60,   v => count2 = v, 1500);
			animate(24,   v => count3 = v, 1400);
		}, 400);

		const handleScroll = () => { scrollY = window.scrollY; };
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<section id="hero" class="hero section dark-background">
	<div class="hero-bg-wrap" style="transform:translateY({scrollY * 0.3}px);">
		<img src="/assets/img/img1.png" alt="Cordova Property Services" class="hero-bg" />
	</div>
	<div class="hero-overlay"></div>
	<div class="hero-pattern"></div>

	<div class="container hero-content">
		<div class="row align-items-center">
			<div class="col-xl-7 col-lg-8 content hero-copy" data-aos="fade-up" data-aos-delay="100">
				<div class="eyebrow">
					<span class="eyebrow-line"></span>
					<h3>Welcome to Cordova Property Services</h3>
				</div>
				<h2>Your Trusted Partner for Apartment Maintenance</h2>
				<p>
					Delivering Reliable, High-Quality Services That Keep Your Units Move-In Ready and Your Residents Satisfied.
				</p>
				<div class="hero-actions">
					<a href="/contact" class="btn-hero-primary">
						<span>Contact Us</span>
						<i class="bi bi-arrow-right"></i>
					</a>
					<a href="/services" class="btn-hero-secondary">
						<i class="bi bi-play-circle"></i>
						<span>View Services</span>
					</a>
				</div>
				<div class="hero-stats">
					<div class="stat">
						<span class="stat-num">{count1.toLocaleString()}+</span>
						<span class="stat-label">Projects Completed</span>
					</div>
					<div class="stat-divider"></div>
					<div class="stat">
						<span class="stat-num">{count2}+</span>
						<span class="stat-label">Happy Clients</span>
					</div>
					<div class="stat-divider"></div>
					<div class="stat">
						<span class="stat-num">{count3}h</span>
						<span class="stat-label">Response Time</span>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="scroll-indicator">
		<div class="scroll-mouse"><div class="scroll-wheel"></div></div>
	</div>
</section>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500..800&display=swap');
#hero{position:relative;min-height:92vh;display:flex;align-items:center;overflow:hidden;}

#hero :global(.hero-bg-wrap){position:absolute;inset:0;z-index:1;will-change:transform;}
#hero :global(.hero-bg){position:absolute;inset:0;width:100%;height:110%;object-fit:cover;}

#hero :global(.hero-overlay){
  position:absolute;
  inset:0;
  z-index:2;

  background: linear-gradient(
    120deg,
    rgba(10, 20, 15, 0.92) 30%,   /* oscuro fuerte */
    rgba(40, 50, 20, 0.75) 65%,   /* verde profundo */
    rgba(107, 107, 40, 0.35) 100% /* tu color marca */
  );
}

#hero :global(.hero-pattern){
	position:absolute;inset:0;z-index:2;opacity:0.08;pointer-events:none;
	background-image:radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0);
	background-size:30px 30px;
}

#hero :global(.hero-content){position:relative;z-index:4;padding:40px 0;}

#hero :global(.eyebrow){display:flex;align-items:center;gap:14px;margin-bottom:20px;}
#hero :global(.eyebrow-line){width:40px;height:2px;background:linear-gradient(90deg,#fffcd9,transparent);border-radius:2px;}
#hero :global(.hero-copy h3){
	color:#fffcd9;font-size:13px;font-weight:700;
	text-transform:uppercase;letter-spacing:3px;margin:0;
}

#hero :global(.hero-copy h2){
	color:#fff;
	font-family: 'Fraunces', 'Times New Roman', Georgia, serif;
	font-size:clamp(2.3rem,5vw,4.2rem);
	font-weight:600;
	font-style:normal;
	font-variation-settings: "opsz" 144, "SOFT" 30;
	line-height:1.05;
	margin-bottom:22px;
	letter-spacing:-0.015em;
	text-shadow: 0 4px 25px rgba(0,0,0,0.5);
}

#hero :global(.hero-copy p){
	color:rgba(255,255,255,0.92);font-size:1.15rem;line-height:1.7;
	margin-bottom:34px;max-width:620px;font-weight:400;
}

#hero :global(.hero-actions){display:flex;gap:16px;flex-wrap:wrap;margin-bottom:56px;}

#hero :global(.btn-hero-primary){
	display:inline-flex;align-items:center;gap:10px;padding:16px 32px;
	background: linear-gradient(135deg, #7c8a2e 0%, #5a5f2c 100%);
	color:#fff;border-radius:10px;font-weight:700;text-decoration:none;
	transition:all .3s cubic-bezier(0.4,0,0.2,1);font-size:15px;
	box-shadow:0 10px 30px rgba(107,107,40,0.4);position:relative;overflow:hidden;
}
#hero :global(.btn-hero-primary::before){
	content:'';position:absolute;inset:0;
	background:linear-gradient(135deg,#8a8a3a 0%,#6b6b28 100%);
	opacity:0;transition:opacity .3s;
}
#hero :global(.btn-hero-primary:hover){transform:translateY(-3px);box-shadow:0 15px 40px rgba(107,107,40,0.55);}
#hero :global(.btn-hero-primary:hover::before){opacity:1;}
#hero :global(.btn-hero-primary span), #hero :global(.btn-hero-primary i){position:relative;z-index:1;}
#hero :global(.btn-hero-primary i){transition:transform .3s;}
#hero :global(.btn-hero-primary:hover i){transform:translateX(5px);}

#hero :global(.btn-hero-secondary){
	display:inline-flex;align-items:center;gap:10px;padding:16px 32px;
	border:2px solid rgba(255,255,255,0.3);color:#fff;border-radius:10px;
	font-weight:600;text-decoration:none;transition:all .3s;font-size:15px;
	background:rgba(255,255,255,0.05);backdrop-filter:blur(10px);
}
#hero :global(.btn-hero-secondary:hover){border-color:#fffcd9;background:rgba(255,255,255,0.12);transform:translateY(-3px);}
#hero :global(.btn-hero-secondary i){font-size:18px;color:#fffcd9;}

#hero :global(.hero-stats){display:flex;align-items:center;gap:24px;flex-wrap:wrap;padding-top:24px;border-top:1px solid rgba(255,255,255,0.15);}
#hero :global(.stat){display:flex;flex-direction:column;}
#hero :global(.stat-num){
	font-size:2.4rem;font-weight:800;color:#fff;line-height:1;
	background:linear-gradient(135deg,#fff 0%,#fffcd9 100%);
	-webkit-background-clip:text;background-clip:text;
	-webkit-text-fill-color:transparent;
	letter-spacing:-0.02em;
}
#hero :global(.stat-label){font-size:12px;color:rgba(255,255,255,0.7);margin-top:6px;text-transform:uppercase;letter-spacing:1.5px;font-weight:500;}
#hero :global(.stat-divider){width:1px;height:40px;background:linear-gradient(180deg,transparent,rgba(255,255,255,0.3),transparent);}

.scroll-indicator{
	position:absolute;bottom:30px;left:50%;transform:translateX(-50%);z-index:4;
	animation:fadeBounce 2.5s ease-in-out infinite;
}
.scroll-mouse{
	width:26px;height:42px;border:2px solid rgba(255,255,255,0.5);
	border-radius:14px;display:flex;justify-content:center;padding-top:8px;
}
.scroll-wheel{
	width:3px;height:8px;background:#fffcd9;border-radius:2px;
	animation:scrollWheel 1.5s ease-in-out infinite;
}
@keyframes scrollWheel{
	0%{transform:translateY(0);opacity:1;}
	100%{transform:translateY(10px);opacity:0;}
}
@keyframes fadeBounce{
	0%,100%{opacity:0.6;transform:translateX(-50%) translateY(0);}
	50%{opacity:1;transform:translateX(-50%) translateY(-8px);}
}

@media(max-width:768px){
	#hero{min-height:80vh;padding:60px 0;}
	#hero :global(.hero-stats){gap:14px;}
	#hero :global(.stat-num){font-size:1.8rem;}
	#hero :global(.stat-divider){display:none;}
	.scroll-indicator{display:none;}
}
</style>
