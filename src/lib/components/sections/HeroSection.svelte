<script>
	import { onMount } from 'svelte';
	let count1 = $state(0), count2 = $state(0), count3 = $state(0);
	let scrollY = $state(0);

	onMount(() => {
		const animate = (target, setter, duration = 2000) => {
			let start = null;
			const step = (ts) => {
				if (!start) start = ts;
				const progress = Math.min((ts - start) / duration, 1);
				const eased = progress < 0.5 ? 4 * progress * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2;
				setter(Math.floor(eased * target));
				if (progress < 1) requestAnimationFrame(step);
				else setter(target);
			};
			requestAnimationFrame(step);
		};
		setTimeout(() => {
			animate(5008, v => count1 = v);
			animate(120, v => count2 = v, 1500);
			animate(24, v => count3 = v, 1400);
		}, 400);

		const handleScroll = () => { scrollY = window.scrollY; };
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<section id="hero" class="hero section dark-background">
	<div class="hero-bg-wrap" style="transform:translateY({scrollY * 0.25}px);">
		<img
			src="/assets/img/services/Home/img.png"
			alt="Cordova Property Services"
			class="hero-bg"
			fetchpriority="high"
			decoding="async"
		/>
	</div>


	<div class="container hero-content">
		<div class="row align-items-center">
			<div class="col-xl-7 col-lg-8 content hero-copy" data-aos="fade-up" data-aos-delay="100">
				<div class="eyebrow">
					<span class="eyebrow-line"></span>
					<h3>Welcome to Cordova Property Services</h3>
				</div>
				<h2>Professional Apartment Turnover & Property Maintenance Solutions</h2>
				<p>
					Delivering Reliable, High-Quality Services That Keep Your Units Move-In Ready and Your Residents Satisfied.
				</p>
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

	/* === FOUNDATION === */
	#hero {
		position: relative;
		height: 480px;
		min-height: 460px;
		padding: 0;
		display: flex;
		align-items: center;
		overflow: hidden;
		font-family: 'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont,
			'Segoe UI', system-ui, sans-serif;
		font-feature-settings: 'cv02', 'cv03', 'cv04', 'cv11', 'ss01';
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-rendering: optimizeLegibility;
	}

	#hero :global(.hero-bg) {
  filter: none !important;
  opacity: 1 !important;
}

#hero::before,
#hero::after {
  display: none !important;
  content: none !important;
}

#hero :global(.hero-overlay),
#hero :global(.hero-pattern),
#hero :global(.hero-fade-bottom) {
  display: none !important;
}
	/* === BANNER IMG (sizing y framing optimizados) === */
	#hero :global(.hero-bg-wrap) {
		position: absolute;
		inset: 0;
		z-index: 1;
		will-change: transform;
		height: 100%;
	}
	#hero :global(.hero-bg) {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center center;
		transform: none;
	}



	#hero :global(.hero-content) {
		position: relative;
		z-index: 4;
		padding: 40px 0;
	}

	/* === EYEBROW === */
	#hero :global(.eyebrow) {
		display: flex;
		align-items: center;
		gap: 14px;
		margin-bottom: 22px;
	}
	#hero :global(.eyebrow-line) {
		width: 44px;
		height: 2px;
		background: linear-gradient(90deg, #fffcd9, transparent);
		border-radius: 2px;
	}
	#hero :global(.hero-copy h3) {
		color: #fffcd9;
		font-size: 12px;
		font-weight: 800;
		text-transform: uppercase;
		letter-spacing: 2.4px;
		margin: 0;
		font-feature-settings: 'cv11';
	}

	/* === HEADLINE H2 === */
	#hero :global(.hero-copy h2) {
		color: #fff;
		font-family: 'Fraunces', 'Times New Roman', Georgia, serif;
		font-size: clamp(2.1rem, 4.2vw, 3.8rem);
		font-weight: 700;
		font-variation-settings: 'opsz' 144;
		font-feature-settings: 'ss01', 'ss02', 'kern';
		line-height: 0.97;
		letter-spacing: -0.04em;
		margin-bottom: 24px;
		max-width: 780px;
		text-wrap: balance;
		text-shadow:
			0 10px 40px rgba(0, 0, 0, 0.55),
			0 2px 8px rgba(0, 0, 0, 0.3);
	}

	/* === DESCRIPTION === */
	#hero :global(.hero-copy p) {
		color: rgba(255, 255, 255, 0.93);
		font-size: clamp(1.05rem, 1.3vw, 1.18rem);
		line-height: 1.75;
		margin-bottom: 36px;
		max-width: 620px;
		font-weight: 400;
		letter-spacing: -0.005em;
	}

	#hero :global(.hero-actions) {
		display: flex;
		gap: 16px;
		flex-wrap: wrap;
		margin-bottom: 56px;
	}

	/* === PRIMARY CTA === */
	#hero :global(.btn-hero-primary) {
		display: inline-flex;
		align-items: center;
		gap: 10px;
		padding: 17px 34px;
		background: linear-gradient(135deg, #7c8a2e 0%, #5a5f2c 100%);
		color: #fff;
		border-radius: 10px;
		font-weight: 700;
		font-size: 14.5px;
		letter-spacing: 0.01em;
		text-decoration: none;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		box-shadow:
			0 10px 30px rgba(107, 107, 40, 0.4),
			inset 0 1px 0 rgba(255, 255, 255, 0.1);
		position: relative;
		overflow: hidden;
	}
	#hero :global(.btn-hero-primary::before) {
		content: '';
		position: absolute;
		inset: 0;
		background: linear-gradient(135deg, #8a8a3a 0%, #6b6b28 100%);
		opacity: 0;
		transition: opacity 0.3s;
	}
	#hero :global(.btn-hero-primary:hover) {
		transform: translateY(-3px);
		box-shadow:
			0 15px 40px rgba(107, 107, 40, 0.55),
			inset 0 1px 0 rgba(255, 255, 255, 0.15);
	}
	#hero :global(.btn-hero-primary:hover::before) {
		opacity: 1;
	}
	#hero :global(.btn-hero-primary span),
	#hero :global(.btn-hero-primary i) {
		position: relative;
		z-index: 1;
	}
	#hero :global(.btn-hero-primary i) {
		transition: transform 0.3s;
	}
	#hero :global(.btn-hero-primary:hover i) {
		transform: translateX(5px);
	}

	/* === SECONDARY CTA === */
	#hero :global(.btn-hero-secondary) {
		display: inline-flex;
		align-items: center;
		gap: 10px;
		padding: 17px 34px;
		border: 2px solid rgba(255, 255, 255, 0.3);
		color: #fff;
		border-radius: 10px;
		font-weight: 600;
		font-size: 14.5px;
		letter-spacing: 0.01em;
		text-decoration: none;
		transition: all 0.3s;
		background: rgba(255, 255, 255, 0.05);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
	}
	#hero :global(.btn-hero-secondary:hover) {
		border-color: #fffcd9;
		background: rgba(255, 255, 255, 0.12);
		transform: translateY(-3px);
	}
	#hero :global(.btn-hero-secondary i) {
		font-size: 18px;
		color: #fffcd9;
	}

	/* === STATS === */
	#hero :global(.hero-stats) {
		display: flex;
		align-items: center;
		gap: 26px;
		flex-wrap: wrap;
		padding-top: 26px;
		border-top: 1px solid rgba(255, 255, 255, 0.15);
	}
	#hero :global(.stat) {
		display: flex;
		flex-direction: column;
	}
	#hero :global(.stat-num) {
		font-size: 2.5rem;
		font-weight: 800;
		color: #fff;
		line-height: 1;
		background: linear-gradient(135deg, #fff 0%, #fffcd9 100%);
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
		letter-spacing: -0.025em;
		font-variant-numeric: tabular-nums lining-nums;
		font-feature-settings: 'tnum' 1, 'lnum' 1;
	}
	#hero :global(.stat-label) {
		font-size: 11.5px;
		color: rgba(255, 255, 255, 0.72);
		margin-top: 8px;
		text-transform: uppercase;
		letter-spacing: 1.8px;
		font-weight: 700;
	}
	#hero :global(.stat-divider) {
		width: 1px;
		height: 44px;
		background: linear-gradient(180deg, transparent, rgba(255, 255, 255, 0.3), transparent);
	}

	/* === SCROLL INDICATOR === */
	.scroll-indicator {
		position: absolute;
		bottom: 30px;
		left: 50%;
		transform: translateX(-50%);
		z-index: 4;
		animation: fadeBounce 2.5s ease-in-out infinite;
	}
	.scroll-mouse {
		width: 26px;
		height: 42px;
		border: 2px solid rgba(255, 255, 255, 0.5);
		border-radius: 14px;
		display: flex;
		justify-content: center;
		padding-top: 8px;
	}
	.scroll-wheel {
		width: 3px;
		height: 8px;
		background: #fffcd9;
		border-radius: 2px;
		animation: scrollWheel 1.5s ease-in-out infinite;
	}
	@keyframes scrollWheel {
		0% { transform: translateY(0); opacity: 1; }
		100% { transform: translateY(10px); opacity: 0; }
	}
	@keyframes fadeBounce {
		0%, 100% { opacity: 0.6; transform: translateX(-50%) translateY(0); }
		50% { opacity: 1; transform: translateX(-50%) translateY(-8px); }
	}

	/* === RESPONSIVE: tablet === */
	@media (max-width: 1024px) {
		#hero {
			height: 420px;
			min-height: 420px;
		}
	}

	/* === RESPONSIVE: mobile === */
	@media (max-width: 768px) {
		#hero {
			height: 390px;
			min-height: 390px;
			padding: 0;
		}
		#hero :global(.hero-bg) {
			object-position: center center;
		}
		#hero :global(.hero-stats) {
			gap: 16px;
		}
		#hero :global(.stat-num) {
			font-size: 1.9rem;
		}
		#hero :global(.stat-label) {
			font-size: 10.5px;
			letter-spacing: 1.4px;
		}
		#hero :global(.stat-divider) {
			display: none;
		}
		#hero :global(.btn-hero-primary),
		#hero :global(.btn-hero-secondary) {
			padding: 15px 28px;
			font-size: 13.5px;
		}
		.scroll-indicator {
			display: none;
		}
	}

	/* === RESPONSIVE: mobile pequeño === */
	@media (max-width: 480px) {
		#hero {
			height: 390px;
			min-height: 390px;
		}
		#hero :global(.hero-content) {
			padding: 32px 0;
		}
	}

	/* === Accesibilidad === */
	@media (prefers-reduced-motion: reduce) {
		#hero :global(.hero-bg-wrap) {
			transform: none !important;
		}
		.scroll-wheel,
		.scroll-indicator {
			animation: none;
		}
	}
</style>