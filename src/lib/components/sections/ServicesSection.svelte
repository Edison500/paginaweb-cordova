<script>
	const services = [
		// Row 1: 1 3 7 9
		{ img: '/assets/img/services/turnkey services/img2.jpeg',    href: '/services/turnkey',             title: 'Turnkey Services',         desc: 'Full unit turnovers handled end-to-end. Move-in ready, faster.' },
		{ img: '/assets/img/services/Repairs/img.png',             href: '/services/repairs',             title: 'Repairs',                  desc: 'Fast repairs for plumbing, drywall, fixtures and more.' },
		{ img: '/assets/img/services/Installations/img.png',       href: '/services/installations',       title: 'Installation Services',    desc: 'Appliances, flooring, fixtures — installed correctly, first time.' },
		{ img: '/assets/img/services/Millwork/img.png',            href: '/services/millwork',            title: 'Millwork',                 desc: 'Baseboards, door frames, molding — the finishing details.' },
		// Row 2: 2 8 5 6
		{ img: '/assets/img/services/Painting/img3.jpeg',            href: '/services/painting',            title: 'Painting',                 desc: 'Clean lines, consistent color, lasting results every time.' },
		{ img: '/assets/img/services/Cabinet painting/img.png',    href: '/services/cabinet-painting',    title: 'Cabinet Painting',         desc: 'Professional spray painting — fresh look without replacement.' },
		{ img: '/assets/img/services/tub resurface/img.png',       href: '/services/tub-resurfacing',     title: 'Tub & Shower Resurfacing', desc: 'Like-new finish at a fraction of replacement cost.' },
		{ img: '/assets/img/services/Countertop resurface/img.png',href: '/services/counter-resurfacing', title: 'Counter Resurfacing',      desc: 'Refinish worn countertops without full replacement cost.' },
		// Row 3: 4 11 10
		{ img: '/assets/img/services/Cleaning/img.png',            href: '/services/cleaning',            title: 'Cleaning',                 desc: 'Move-in/out deep cleans. Every corner spotless, every time.' },
		{ img: '/assets/img/services/Carpet Cleaning/img.png',     href: '/services/carpet-cleaning',     title: 'Carpet Cleaning',          desc: 'Deep extraction cleaning — removes stains, odors, and allergens.' },

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

/* Solo en escritorio centramos los 2 ultimos cards.
   En pantallas pequenas esto antes rompia el grid y dejaba huecos. */
@media (min-width: 1201px) {
	.svc-grid > :nth-last-child(2) {
		grid-column: 2;
	}
	.svc-grid > :nth-last-child(1) {
		grid-column: 3;
	}
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
	.svc-grid > * { grid-column: auto !important; }
	/* Con 10 servicios, en 3 columnas dejamos el ultimo centrado. */
	.svc-grid > :last-child { grid-column: 2 !important; }
}
@media (max-width: 768px) {
	.svc-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
	.svc-grid > * { grid-column: auto !important; }
	.svc-img-wrap { height: 170px; }
}
@media (max-width: 480px) {
	.svc-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; }
	.svc-grid > * { grid-column: auto !important; }
	.svc-img-wrap { height: 145px; }
	.svc-overlay { padding: 12px; }
	.svc-overlay h4 { font-size: 12px; }
}
</style>