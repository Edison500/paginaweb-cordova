<script>
	const services = [
		{ img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80', href: '/services/turnkey',             title: 'Turnkey Services',         desc: 'Full unit turnovers handled end-to-end. Move-in ready, faster.' },
		{ img: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&q=80', href: '/services/painting',            title: 'Painting',                  desc: 'Clean lines, consistent color, lasting results every time.' },
		{ img: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80', href: '/services/repairs',          title: 'Repairs',                   desc: 'Fast repairs for plumbing, drywall, fixtures and more.' },
		{ img: 'https://images.unsplash.com/photo-1527515545081-5db817172677?w=600&q=80', href: '/services/cleaning',         title: 'Cleaning',                  desc: 'Move-in/out deep cleans. Every corner spotless, every time.' },
		{ img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', href: '/services/water-remediation',   title: 'Water Remediation',         desc: 'Fast response to water damage — assess, dry, restore.' },
		{ img: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80', href: '/services/tub-resurfacing',     title: 'Tub & Shower Resurfacing',  desc: 'Like-new finish at a fraction of replacement cost.' },
		{ img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80', href: '/services/counter-resurfacing', title: 'Counter Resurfacing',       desc: 'Refinish worn countertops without full replacement cost.' },
		{ img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80', href: '/services/installations',   title: 'Installation Services',     desc: 'Appliances, flooring, fixtures — installed correctly, first time.' },
		{ img: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=600&q=80', href: '/services/cabinet-painting',    title: 'Cabinet Painting',          desc: 'Professional spray painting — fresh look without replacement.' },
		{ img: 'https://images.unsplash.com/photo-1501084817091-a4f3d1d19e07?w=600&q=80', href: '/services/pressure-washing', title: 'Pressure Washing',          desc: 'Remove grime from exteriors and common areas. Curb appeal.' },
		{ img: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=600&q=80', href: '/services/millwork',         title: 'Millwork',                  desc: 'Baseboards, door frames, molding — the finishing details.' },
		{ img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80', href: '/services/sheetrock',        title: 'Sheetrock Repair',          desc: 'Patch, texture, prime — walls flawless before painting.' },
	];
</script>

<section id="services" class="services section">
	<div class="container section-title" data-aos="fade-up">
		<h2>Our Services</h2>
		<p>Everything your rental property needs — handled by one trusted team</p>
	</div>
	<div class="container">
		<div class="row gy-4">
			{#each services as s, i}
				<div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={(i % 3 + 1) * 80}>
					<a href={s.href} class="svc-card">
						<div class="svc-img-wrap">
							<div class="svc-img" style="background-image:url('{s.img}')"></div>
							<div class="svc-num">{String(i + 1).padStart(2, '0')}</div>
						</div>
						<div class="svc-body">
							<div class="svc-body-top">
								<h4>{s.title}</h4>
								<p>{s.desc}</p>
							</div>
							<div class="svc-footer">
								<span class="svc-link">Learn more</span>
								<span class="svc-arrow"><i class="bi bi-arrow-right"></i></span>
							</div>
						</div>
					</a>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
.svc-card{
	display:flex;flex-direction:column;
	border-radius:18px;overflow:hidden;
	text-decoration:none;
	background:#fff;
	border:1px solid rgba(0,0,0,0.06);
	box-shadow:0 4px 16px rgba(0,0,0,0.05);
	transition:all .4s cubic-bezier(0.4,0,0.2,1);
	height:100%;
}
.svc-card:hover{
	transform:translateY(-6px);
	box-shadow:0 20px 48px rgba(107,107,40,0.18);
	border-color:rgba(107,107,40,0.2);
}

/* Image area */
.svc-img-wrap{
	position:relative;height:200px;overflow:hidden;
}
.svc-img{
	position:absolute;inset:0;
	background-size:cover;background-position:center;
	transition:transform .6s cubic-bezier(0.4,0,0.2,1);
}
.svc-card:hover .svc-img{transform:scale(1.08);}

/* Gradient overlay always visible */
.svc-img-wrap::after{
	content:'';position:absolute;inset:0;
	background:linear-gradient(180deg,transparent 40%,rgba(0,0,0,0.45) 100%);
	z-index:1;
}

/* Service number badge */
.svc-num{
	position:absolute;top:14px;left:16px;z-index:2;
	font-size:12px;font-weight:800;
	color:#fffcd9;letter-spacing:1px;
	background:rgba(107,107,40,0.85);
	backdrop-filter:blur(6px);
	padding:4px 10px;border-radius:20px;
	border:1px solid rgba(255,252,217,0.3);
}

/* Text body */
.svc-body{
	padding:22px 24px 20px;
	display:flex;flex-direction:column;flex:1;
	justify-content:space-between;
}
.svc-body-top{margin-bottom:16px;}

.svc-body h4{
	font-size:17px;font-weight:800;
	color:#1a1a1a;margin-bottom:8px;
	letter-spacing:-0.02em;line-height:1.3;
	transition:color .3s;
}
.svc-card:hover .svc-body h4{color:#4a4a1c;}

.svc-body p{
	font-size:14px;color:#555;
	line-height:1.7;margin:0;
}


:global(#services .section-title h2) {
  font-size: clamp(1.8rem, 3vw, 2.6rem);
  font-weight: 800;
  color: #1a1a1a;
  letter-spacing: -0.02em;
}



/* Footer */
.svc-footer{
	display:flex;align-items:center;
	justify-content:space-between;
	padding-top:14px;
	border-top:1px solid rgba(0,0,0,0.07);
}
.svc-link{
	font-size:13px;font-weight:700;
	color:#5a5a1f;letter-spacing:0.3px;
}
.svc-arrow{
	width:32px;height:32px;border-radius:50%;
	background:rgba(107,107,40,0.1);
	display:flex;align-items:center;justify-content:center;
	transition:all .3s ease;
}
.svc-arrow i{font-size:14px;color:#6b6b28;transition:transform .3s;}
.svc-card:hover .svc-arrow{
	background:linear-gradient(135deg,#6b6b28 0%,#4a4a1c 100%);
}
.svc-card:hover .svc-arrow i{
	color:#fffcd9;transform:translateX(2px);
}

#services {
  background: #f4f3ee;
}

@media(max-width:768px){
	.svc-img-wrap{height:180px;}
	.svc-body{padding:18px 20px 16px;}
}
</style>