<script>
	import { onMount } from 'svelte';
	onMount(() => {
		const el = document.getElementById('footer-year');
		if (el) el.textContent = new Date().getFullYear();
	});

	const services = [
		{ href: '/services/turnkey',              label: 'Turnkey Services' },
		{ href: '/services/repairs',              label: 'Repairs' },
		{ href: '/services/installations',        label: 'Installation Services' },
		{ href: '/services/millwork',             label: 'Millwork' },
		{ href: '/services/painting',             label: 'Painting' },
		{ href: '/services/cabinet-painting',     label: 'Cabinet Painting' },
		{ href: '/services/tub-resurfacing',      label: 'Tub & Shower Resurfacing' },
		{ href: '/services/counter-resurfacing',  label: 'Counter Resurfacing' },
		{ href: '/services/cleaning',             label: 'Cleaning' },
		{ href: '/services/carpet-cleaning',      label: 'Carpet Cleaning' }
	];

	const areas = [
		'Pensacola','Gulf Breeze','Navarre','Fort Walton',
		'Crestview','Milton','Daphne','Mobile',
		'Gulf Shores','Orange Beach','Foley'
	];
</script>

<footer class="cps-footer">

	<!-- Top band -->
	<div class="cps-footer-top">
		<div class="container">
			<div class="cps-footer-grid">

				<!-- Col 1: Brand -->
				<div class="cps-footer-brand">
					<a href="/" class="cps-footer-logo">
						<img src="/assets/img/logo.png" alt="Cordova Property Services" />
					</a>
					<p class="cps-footer-tagline">Your trusted partner for rental property maintenance across the Gulf Coast. One call, one team, done right.</p>
					<div class="cps-footer-badges">
						<span><i class="bi bi-shield-fill-check"></i> Licensed & Insured</span>
					</div>
					<div class="cps-footer-social">
						<a href="https://www.facebook.com/profile.php?id=61575846174811" target="_blank" real="noopener noreferrer" aria-label="Facebook"><i class="bi bi-facebook"></i></a>
						<a href="https://www.instagram.com/cordovapropertyservices/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
						<a href="https://www.linkedin.com/in/cordova-property-services-472b4836b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i class="bi bi-linkedin"></i></a>
					</div>
				</div>

				<!-- Col 2: Services -->
				<div class="cps-footer-col cps-footer-services">
					<h4>Our Services</h4>
					<ul class="cps-service-list">
						{#each services as s}
							<li><a href={s.href}>{s.label}</a></li>
						{/each}
					</ul>
				</div>

				<!-- Col 3: Company -->
				<div class="cps-footer-col">
					<h4>Company</h4>
					<ul>
						<li><a href="/">Home</a></li>
						<li><a href="/about">About Us</a></li>
						<li><a href="/services">All Services</a></li>
						<li><a href="/contact">Contact</a></li>
					</ul>
					<h4 class="mt-4">Service Areas</h4>
					<div class="cps-footer-areas">
						{#each areas as a}
							<span>{a}</span>
						{/each}
					</div>
				</div>

				<!-- Col 4: Contact -->
				<div class="cps-footer-col">
					<h4>Get In Touch</h4>
					<div class="cps-footer-contact-list">
						<a href="tel:+14482196669" class="cps-contact-item">
							<i class="bi bi-telephone-fill"></i>
							<div>
								<span class="cps-contact-label">Office</span>
								<span class="cps-contact-val">+1 (448) 219-6669</span>
							</div>
						</a>
						<a href="tel:+1850328103" class="cps-contact-item">
							<i class="bi bi-telephone-fill"></i>
							<div>
								<span class="cps-contact-label">Scheduling</span>
								<span class="cps-contact-val">+1 (850) 323-8103</span>
							</div>
						</a>
						<a href="mailto:customer@cordovaps.com" class="cps-contact-item">
							<i class="bi bi-envelope-fill"></i>
							<div>
								<span class="cps-contact-label">General</span>
								<span class="cps-contact-val">customer@cordovaps.com</span>
							</div>
						</a>
						<a href="mailto:scheduling@cordovaps.com" class="cps-contact-item">
							<i class="bi bi-calendar-check-fill"></i>
							<div>
								<span class="cps-contact-label">Scheduling</span>
								<span class="cps-contact-val">scheduling@cordovaps.com</span>
							</div>
						</a>
						<div class="cps-contact-item">
							<i class="bi bi-clock-fill"></i>
							<div>
								<span class="cps-contact-label">Office Hours</span>
								<span class="cps-contact-val">Mon–Fri 8AM–5PM</span>
							</div>
						</div>
						<div class="cps-contact-item">
							<i class="bi bi-geo-alt-fill"></i>
							<div>
								<span class="cps-contact-label">Based in</span>
								<span class="cps-contact-val">Pensacola, Florida</span>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>

	<!-- Bottom bar -->
	<div class="cps-footer-bottom">
		<div class="container cps-footer-bottom-inner">
			<p>© <span id="footer-year"></span> <strong>Cordova Property Services</strong>. All Rights Reserved.</p>
			<p class="cps-footer-credit">Serving Pensacola & the Gulf Coast</p>
		</div>
	</div>

</footer>

<style>
.cps-footer{background:#1a2018;color:rgba(255,255,255,.75);}

/* TOP */
.cps-footer-top{padding:58px 0 46px;}
.cps-footer-grid{
	display:grid;
	grid-template-columns:minmax(260px,1.15fr) minmax(350px,1.3fr) minmax(230px,1fr) minmax(300px,1.2fr);
	gap:38px;
	align-items:start;
}

/* Brand col */
.cps-footer-logo img{max-height:52px;width:auto;filter:brightness(0) invert(1);opacity:.9;}
.cps-footer-tagline{font-size:13.5px;color:rgba(255,255,255,.6);line-height:1.7;margin:16px 0 18px;max-width:360px;}
.cps-footer-badges{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:20px;}
.cps-footer-badges span{display:inline-flex;align-items:center;gap:6px;font-size:11px;font-weight:600;color:rgba(255,252,217,.85);background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.1);border-radius:20px;padding:5px 12px;}
.cps-footer-badges i{font-size:12px;color:#fffcd9;}
.cps-footer-social{display:flex;gap:10px;}
.cps-footer-social a{width:36px;height:36px;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.1);border-radius:8px;display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,.7);font-size:16px;text-decoration:none;transition:all .25s;}
.cps-footer-social a:hover{background:rgba(107,107,40,.5);border-color:#6b6b28;color:#fff;}

/* Link cols */
.cps-footer-col h4{font-size:13px;font-weight:800;color:#fff;text-transform:uppercase;letter-spacing:1.6px;margin:0 0 16px;}
.cps-footer-col .mt-4{margin-top:28px !important;}
.cps-footer-col ul{list-style:none;padding:0;margin:0;}
.cps-footer-col ul li a{font-size:13.5px;color:rgba(255,255,255,.62);text-decoration:none;transition:color .2s;}
.cps-footer-col ul li a:hover{color:#fffcd9;}

/* Services: compact and clean */
.cps-footer-services{min-width:0;}
.cps-service-list{
	display:grid;
	grid-template-columns:repeat(2,minmax(155px,1fr));
	column-gap:22px;
	row-gap:11px;
	max-width:380px;
}
.cps-service-list li a{
	display:inline-flex;
	align-items:center;
	gap:8px;
	font-size:13px;
	line-height:1.25;
	white-space:nowrap;
	letter-spacing:-.01em;
}
.cps-service-list li a::before{
	content:'';
	width:5px;
	height:5px;
	border-radius:50%;
	background:#c9a63c;
	box-shadow:0 0 0 3px rgba(201,166,60,.08);
	flex:0 0 5px;
}
.cps-service-list li a:hover::before{background:#fffcd9;}

/* Company links */
.cps-footer-col:not(.cps-footer-services) > ul{display:flex;flex-direction:column;gap:9px;}
.cps-footer-col:not(.cps-footer-services) > ul li a{display:inline-flex;align-items:center;gap:7px;}
.cps-footer-col:not(.cps-footer-services) > ul li a::before{content:'→';font-size:11px;color:#6b6b28;opacity:0;transition:opacity .2s;}
.cps-footer-col:not(.cps-footer-services) > ul li a:hover::before{opacity:1;}

/* Areas */
.cps-footer-areas{display:flex;flex-wrap:wrap;gap:6px;max-width:260px;}
.cps-footer-areas span{font-size:11px;color:rgba(255,255,255,.55);background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);border-radius:12px;padding:3px 9px;}

/* Contact col */
.cps-footer-contact-list{display:flex;flex-direction:column;gap:12px;}
.cps-contact-item{display:flex;align-items:flex-start;gap:11px;text-decoration:none;transition:color .2s;}
.cps-contact-item i{font-size:14px;color:#6b6b28;flex-shrink:0;margin-top:2px;}
.cps-contact-label{display:block;font-size:10px;color:rgba(255,255,255,.42);text-transform:uppercase;letter-spacing:1px;margin-bottom:1px;}
.cps-contact-val{display:block;font-size:13px;color:rgba(255,255,255,.78);transition:color .2s;}
a.cps-contact-item:hover .cps-contact-val{color:#fffcd9;}

/* BOTTOM */
.cps-footer-bottom{background:rgba(0,0,0,.25);border-top:1px solid rgba(255,255,255,.06);padding:16px 0;}
.cps-footer-bottom-inner{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px;}
.cps-footer-bottom p{font-size:13px;color:rgba(255,255,255,.4);margin:0;}
.cps-footer-bottom strong{color:rgba(255,255,255,.65);}
.cps-footer-credit{font-size:12px;color:rgba(255,255,255,.3);}

/* RESPONSIVE */
@media(max-width:1200px){
	.cps-footer-grid{grid-template-columns:1.1fr 1fr;gap:36px 44px;}
	.cps-service-list{max-width:none;grid-template-columns:repeat(2,minmax(150px,1fr));}
}
@media(max-width:700px){
	.cps-footer-top{padding:46px 0 36px;}
	.cps-footer-grid{grid-template-columns:1fr;gap:30px;}
	.cps-service-list{grid-template-columns:1fr;row-gap:10px;}
	.cps-service-list li a{white-space:normal;}
	.cps-footer-bottom-inner{justify-content:center;text-align:center;}
}
</style>
