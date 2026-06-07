<script>
	const services = [
		{ img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80', href: '/services/turnkey',             title: 'Turnkey Services',         desc: 'Full unit turnovers handled end-to-end. Move-in ready, faster.' },
		{ img: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&q=80', href: '/services/painting',            title: 'Painting',                  desc: 'Clean lines, consistent color, lasting results every time.' },
		{ img: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80', href: '/services/repairs',          title: 'Repairs',                   desc: 'Fast repairs for plumbing, drywall, fixtures and more.' },
		{ img: 'https://images.unsplash.com/photo-1527515545081-5db817172677?w=600&q=80', href: '/services/cleaning',         title: 'Cleaning',                  desc: 'Move-in/out deep cleans. Every corner spotless, every time.' },
		// { img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', href: '/services/water-remediation', title: 'Water Remediation',         desc: 'Fast response to water damage — assess, dry, restore.' },
		// { img: 'https://images.unsplash.com/photo-1501084817091-a4f3d1d19e07?w=600&q=80', href: '/services/pressure-washing', title: 'Pressure Washing',         desc: 'Remove grime from exteriors and common areas. Curb appeal.' },
		{ img: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80', href: '/services/tub-resurfacing',     title: 'Tub & Shower Resurfacing',  desc: 'Like-new finish at a fraction of replacement cost.' },
		{ img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80', href: '/services/counter-resurfacing', title: 'Counter Resurfacing',       desc: 'Refinish worn countertops without full replacement cost.' },
		{ img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80', href: '/services/installations',   title: 'Installation Services',     desc: 'Appliances, flooring, fixtures — installed correctly, first time.' },
		{ img: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=600&q=80', href: '/services/cabinet-painting',    title: 'Cabinet Painting',          desc: 'Professional spray painting — fresh look without replacement.' },
		{ img: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=600&q=80', href: '/services/millwork',         title: 'Millwork',                  desc: 'Baseboards, door frames, molding — the finishing details.' },
		{ img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80', href: '/services/sheetrock',        title: 'Sheetrock Repair',          desc: 'Patch, texture, prime — walls flawless before painting.' },
		{ img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', href: '/services/carpet-cleaning',     title: 'Carpet Cleaning',           desc: 'Deep extraction cleaning — removes stains, odors, and allergens.' },
	];
</script>

<section id="services" class="services section">
	<div class="container section-title" data-aos="fade-up">
		<h2>Our Services</h2>
		<p>Everything your rental property needs — handled by one trusted team</p>
	</div>
	<div class="container">
		<div class="svc-grid">
			{#each services as s, i}
				<a href={s.href} class="svc-card" data-aos="fade-up" data-aos-delay={(i % 4 + 1) * 50}>
					<div class="svc-img-wrap">
						<div class="svc-img" style="background-image:url('{s.img}')"></div>
						<div class="svc-num">{String(i + 1).padStart(2, '0')}</div>
						<div class="svc-overlay">
							<h4>{s.title}</h4>
							<p>{s.desc}</p>
							<span class="svc-cta">Learn more <i class="bi bi-arrow-right"></i></span>
						</div>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>

<style>
#services { background: #f4f3ee; }

:global(#services .section-title h2) {
	font-size: clamp(1.8rem, 3vw, 2.6rem);
	font-weight: 800;
	color: #1a1a1a;
	letter-spacing: -0.02em;
}

.svc-grid {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 12px;
}

.svc-card {
	display: block;
	text-decoration: none;
	border-radius: 12px;
	overflow: hidden;
	position: relative;
}

.svc-img-wrap {
	position: relative;
	height: 200px;
	overflow: hidden;
}

.svc-img {
	position: absolute;
	inset: 0;
	background-size: cover;
	background-position: center;
	transition: transform .5s cubic-bezier(0.4,0,0.2,1);
}
.svc-card:hover .svc-img { transform: scale(1.08); }

/* Overlay siempre visible abajo, se expande en hover */
.svc-overlay {
	position: absolute;
	inset: 0;
	background: linear-gradient(180deg, transparent 30%, rgba(20,25,10,0.88) 100%);
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	padding: 14px;
	transition: background .4s;
}
.svc-card:hover .svc-overlay {
	background: linear-gradient(180deg, rgba(20,25,10,0.45) 0%, rgba(20,25,10,0.92) 100%);
}

.svc-num {
	position: absolute;
	top: 10px; left: 12px;
	font-size: 11px; font-weight: 800;
	color: #fffcd9; letter-spacing: 1px;
	background: rgba(107,107,40,0.85);
	backdrop-filter: blur(6px);
	padding: 3px 9px; border-radius: 20px;
	border: 1px solid rgba(255,252,217,0.3);
}

.svc-overlay h4 {
	font-size: 13px;
	font-weight: 800;
	color: #fff;
	margin: 0 0 4px;
	letter-spacing: -0.01em;
	line-height: 1.2;
}

.svc-overlay p {
	font-size: 11.5px;
	color: rgba(255,255,255,0.75);
	margin: 0 0 8px;
	line-height: 1.5;
	max-height: 0;
	overflow: hidden;
	opacity: 0;
	transition: max-height .4s ease, opacity .4s ease;
}
.svc-card:hover .svc-overlay p {
	max-height: 60px;
	opacity: 1;
}

.svc-cta {
	font-size: 11px;
	font-weight: 700;
	color: #fffcd9;
	letter-spacing: 0.5px;
	opacity: 0;
	transform: translateY(4px);
	transition: opacity .3s, transform .3s;
	display: flex;
	align-items: center;
	gap: 4px;
}
.svc-card:hover .svc-cta {
	opacity: 1;
	transform: translateY(0);
}

@media (max-width: 1200px) {
	.svc-grid { grid-template-columns: repeat(3, 1fr); }
}
@media (max-width: 768px) {
	.svc-grid { grid-template-columns: repeat(2, 1fr); }
	.svc-img-wrap { height: 170px; }
}
@media (max-width: 480px) {
	.svc-grid { grid-template-columns: repeat(2, 1fr); gap: 8px; }
	.svc-img-wrap { height: 140px; }
}
</style>