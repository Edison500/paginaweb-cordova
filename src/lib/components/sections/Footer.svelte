<script>
	import { onMount } from 'svelte';
	let year = $state(2026);
	onMount(() => { year = new Date().getFullYear(); });
</script>

<footer id="footer" class="footer-premium">
	<div class="footer-decoration"></div>

	<div class="container footer-top">
		<div class="row gy-4">

			<div class="col-lg-4 col-md-12 footer-about">
				<a href="/" class="footer-logo">
					<img src="/assets/img/logo.png" alt="Cordova Property Services" />
				</a>
				<p class="footer-tagline">
					Your trusted partner for apartment maintenance across multifamily communities. One call, one team, done right.
				</p>

				<div class="footer-contact-quick">
					<a href="tel:+14482196669" class="footer-contact-item">
						<i class="bi bi-telephone-fill"></i>
						<span>+1 (448) 219-6669</span>
					</a>
					<a href="mailto:customer@cordovaps.com" class="footer-contact-item">
						<i class="bi bi-envelope-fill"></i>
						<span>customer@cordovaps.com</span>
					</a>
					<div class="footer-contact-item">
						<i class="bi bi-geo-alt-fill"></i>
						<span>Pensacola, Florida</span>
					</div>
				</div>

				<div class="social-links">
					<a href="/" aria-label="Facebook"><i class="bi bi-facebook"></i></a>
					<a href="/" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
					<a href="/" aria-label="LinkedIn"><i class="bi bi-linkedin"></i></a>
				</div>
			</div>

			<div class="col-lg-2 col-6 footer-links">
				<h4>Company</h4>
				<ul>
					<li><a href="/">Home</a></li>
					<li><a href="/about">About Us</a></li>
					<li><a href="/services">All Services</a></li>
					<li><a href="/contact">Contact</a></li>
				</ul>
			</div>

			<div class="col-lg-3 col-6 footer-links">
				<h4>Popular Services</h4>
				<ul>
					<li><a href="/services/turnkey">Turnkey Services</a></li>
					<li><a href="/services/painting">Painting</a></li>
					<li><a href="/services/repairs">Repairs</a></li>
					<li><a href="/services/cleaning">Cleaning</a></li>
					<li><a href="/services/sheetrock">Sheetrock Repair</a></li>
					<li><a href="/services/pressure-washing">Pressure Washing</a></li>
				</ul>
			</div>

			<div class="col-lg-3 col-md-12 footer-areas">
				<h4>Service Areas</h4>
				<ul class="areas-list">
					<li>Pensacola</li>
					<li>Gulf Breeze</li>
					<li>Navarre</li>
					<li>Fort Walton</li>
					<li>Crestview</li>
					<li>Milton</li>
					<li>Mobile</li>
					<li>Gulf Shores</li>
					<li>Orange Beach</li>
				</ul>
			</div>

		</div>
	</div>

	<div class="footer-bottom">
		<div class="container">
			<div class="footer-bottom-inner">
				<p>© {year} <strong>Cordova Property Services</strong>. All Rights Reserved.</p>
				<p class="footer-badges">
					<span><i class="bi bi-shield-fill-check"></i> Licensed & Insured</span>
					<span><i class="bi bi-translate"></i> Bilingual Team</span>
				</p>
			</div>
		</div>
	</div>
</footer>

<style>
.footer-premium{
	background:linear-gradient(180deg,#1a2018 0%,#0d120c 100%);
	color:#c5c5b8;position:relative;overflow:hidden;
	padding-top:70px;
}

.footer-decoration{
	position:absolute;top:0;right:0;width:400px;height:400px;
	background:radial-gradient(circle,rgba(107,107,40,0.15) 0%,transparent 70%);
	pointer-events:none;
}

.footer-top{position:relative;z-index:2;padding-bottom:50px;}

.footer-logo img{max-height:55px;width:auto;filter:brightness(1.1);}
.footer-tagline{
	font-size:14px;line-height:1.7;color:#a8a898;
	margin:18px 0 24px;max-width:340px;
}

.footer-contact-quick{
	display:flex;flex-direction:column;gap:12px;margin-bottom:24px;
}
.footer-contact-item{
	display:flex;align-items:center;gap:12px;
	font-size:13.5px;color:#c5c5b8;text-decoration:none;
	transition:color .25s ease;
}
.footer-contact-item:hover{color:#fffcd9;}
.footer-contact-item i{
	font-size:14px;color:#6b6b28;width:32px;height:32px;
	background:rgba(107,107,40,0.15);border-radius:8px;
	display:flex;align-items:center;justify-content:center;
	flex-shrink:0;
}

.social-links{display:flex;gap:10px;}
.social-links a{
	width:38px;height:38px;border-radius:50%;
	background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);
	display:flex;align-items:center;justify-content:center;
	color:#c5c5b8;text-decoration:none;font-size:15px;
	transition:all .3s ease;
}
.social-links a:hover{
	background:linear-gradient(135deg,#6b6b28 0%,#4a4a1c 100%);
	border-color:transparent;color:#fffcd9;
	transform:translateY(-3px);
}

.footer-links h4,
.footer-areas h4{
	font-size:14px;font-weight:700;color:#fff;
	text-transform:uppercase;letter-spacing:1.5px;
	margin-bottom:20px;position:relative;padding-bottom:10px;
}
.footer-links h4::after,
.footer-areas h4::after{
	content:'';position:absolute;bottom:0;left:0;
	width:30px;height:2px;
	background:linear-gradient(90deg,#6b6b28,#fffcd9);
}

.footer-links ul,
.areas-list{list-style:none;padding:0;margin:0;}

.footer-links ul li{margin-bottom:10px;}
.footer-links ul li a{
	color:#a8a898;text-decoration:none;font-size:13.5px;
	transition:all .25s ease;display:inline-flex;align-items:center;gap:8px;
}
.footer-links ul li a::before{
	content:'›';color:#6b6b28;font-size:16px;
	transition:transform .25s;
}
.footer-links ul li a:hover{color:#fffcd9;}
.footer-links ul li a:hover::before{transform:translateX(3px);}

.areas-list{
	display:grid;grid-template-columns:1fr 1fr;gap:8px 16px;
}
.areas-list li{
	font-size:13px;color:#a8a898;
	display:flex;align-items:center;gap:6px;
}
.areas-list li::before{
	content:'●';color:#6b6b28;font-size:8px;
}

.footer-bottom{
	border-top:1px solid rgba(255,255,255,0.08);
	padding:20px 0;
	background:rgba(0,0,0,0.2);
}

.footer-bottom-inner{
	display:flex;justify-content:space-between;align-items:center;
	gap:20px;flex-wrap:wrap;
}
.footer-bottom p{margin:0;font-size:12.5px;color:#a8a898;}
.footer-bottom strong{color:#fffcd9;font-weight:700;}

.footer-badges{display:flex;gap:16px;flex-wrap:wrap;}
.footer-badges span{
	display:inline-flex;align-items:center;gap:6px;
	font-size:12px;color:#a8a898;
}
.footer-badges i{color:#6b6b28;font-size:13px;}

@media(max-width:768px){
	.footer-premium{padding-top:50px;}
	.footer-top{padding-bottom:30px;}
	.footer-bottom-inner{justify-content:center;text-align:center;}
}
</style>
