<section id="why-us" class="features section">
	<div class="container section-title" data-aos="fade-up">
		<h2>Why Choose Cordova</h2>
		<p>Built around what property managers actually need — speed, reliability, and one team for everything</p>
	</div>

	<div class="container">

		<!-- Block 1: One Team -->
		<div class="row gy-4 align-items-center features-item">
			<div class="col-lg-5 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
				<div class="feature-number">01</div>
				<h3>One Team. Every Service.</h3>
				<p>Stop juggling multiple vendors for a single unit turn. Cordova handles painting, cleaning, repairs, sheetrock, resurfacing, trash-outs, pressure washing, and more — under one roof, one invoice, one point of contact. Your time is too valuable for coordination headaches.</p>
				<ul class="why-list">
					<li><span class="check-icon"><i class="bi bi-check-lg"></i></span> <span>Single point of contact for all services</span></li>
					<li><span class="check-icon"><i class="bi bi-check-lg"></i></span> <span>Consistent quality across every unit</span></li>
					<li><span class="check-icon"><i class="bi bi-check-lg"></i></span> <span>Faster turnarounds — fewer vacancy days</span></li>
					<li><span class="check-icon"><i class="bi bi-check-lg"></i></span> <span>Bilingual team — English & Spanish</span></li>
				</ul>
				<a href="/services" class="btn btn-feature mt-3">Explore Services <i class="bi bi-arrow-right"></i></a>
			</div>
			<div class="col-lg-7 order-1 order-lg-2 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="100">
				<div class="image-stack-premium">
					<img src="/assets/img/features-light-1.jpg" alt="Apartment maintenance team" class="stack-front" />
					<img src="/assets/img/features-light-2.jpg" alt="Professional repairs" class="stack-back" />
					<div class="stack-accent"></div>
				</div>
			</div>
		</div>

		<!-- Block 2: Speed -->
		<div class="row gy-4 align-items-stretch justify-content-between features-item">
			<div class="col-lg-6 d-flex align-items-center features-img-bg" data-aos="zoom-out">
				<img src="/assets/img/features-light-1.jpg" alt="Move-in ready apartment" />
			</div>
			<div class="col-lg-5 d-flex justify-content-center flex-column" data-aos="fade-up">
				<div class="feature-number">02</div>
				<h3>Trusted by Property Managers, Built for Speed</h3>
				<p>Every vacant day costs you money. Our team responds within 24 hours, shows up on time, and completes every job to spec — so you can lease faster and focus on growing your portfolio. We serve Pensacola, Gulf Breeze, Navarre, Fort Walton, Crestview, Milton, Mobile, and surrounding areas.</p>
				<ul class="why-list">
					<li><span class="check-icon"><i class="bi bi-check-lg"></i></span> <span>Response within 24 hours, guaranteed</span></li>
					<li><span class="check-icon"><i class="bi bi-check-lg"></i></span> <span>Fully insured and experienced with PO workflows</span></li>
					<li><span class="check-icon"><i class="bi bi-check-lg"></i></span> <span>Compatible with RealPage, VendorCafe & more</span></li>
					<li><span class="check-icon"><i class="bi bi-check-lg"></i></span> <span>Transparent pricing — no hidden fees</span></li>
				</ul>
				<a href="/contact" class="btn btn-feature align-self-start mt-3">Contact Us <i class="bi bi-arrow-right"></i></a>
			</div>
		</div>

		<!-- Block 3: Scale -->
		<div class="row gy-4 align-items-center features-item">
			<div class="col-lg-5 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
				<div class="feature-number">03</div>
				<h3>From Single Units to Full Properties</h3>
				<p>Whether you need one unit turned or a full property project — breezeways, staircases, pressure washing, exterior repairs — Cordova scales to meet your needs. We've completed over 4,000 projects serving more than 60 clients across the region.</p>
				<ul class="why-list">
					<li><span class="check-icon"><i class="bi bi-check-lg"></i></span> <span>Single units to large-scale community projects</span></li>
					<li><span class="check-icon"><i class="bi bi-check-lg"></i></span> <span>Exterior & common area services available</span></li>
					<li><span class="check-icon"><i class="bi bi-check-lg"></i></span> <span>Flexible scheduling around your operations</span></li>
					<li><span class="check-icon"><i class="bi bi-check-lg"></i></span> <span>15+ experienced field workers on your team</span></li>
				</ul>
				<a href="/contact" class="btn btn-feature mt-3">Get in Touch <i class="bi bi-arrow-right"></i></a>
			</div>
			<div class="col-lg-7 order-1 order-lg-2 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="100">
				<div class="image-stack-premium">
					<img src="/assets/img/services.jpg" alt="Apartment complex exterior" class="stack-front" />
					<img src="/assets/img/features-light-2.jpg" alt="Pressure washing exterior" class="stack-back" />
					<div class="stack-accent"></div>
				</div>
			</div>
		</div>

	</div>
</section>

<style>
.features-item{padding:60px 0;position:relative;}

:global(.features .features-item .features-img-bg){
	position:relative;
	min-height:400px;
	border-radius:16px;
	overflow:hidden;
	box-shadow:0 20px 50px rgba(0,0,0,0.15);
}
:global(.features .features-item .features-img-bg img){
	position:absolute;
	inset:0;
	width:100%;
	height:100%;
	object-fit:cover;
	border-radius:16px;
	display:block;
}

.feature-number{
	font-size:5rem;font-weight:900;line-height:1;
	background:linear-gradient(135deg,rgba(107,107,40,0.18) 0%,rgba(107,107,40,0.05) 100%);
	-webkit-background-clip:text;background-clip:text;
	-webkit-text-fill-color:transparent;
	letter-spacing:-0.02em;margin-bottom:-20px;position:relative;z-index:1;
}

.features-item {
  border-bottom: 1px solid rgba(0,0,0,0.05);
}

.features-item:last-child {
  border-bottom: none;
}


#why-us {
  background: linear-gradient(180deg, #ffffff 0%, #f0efe8 100%);
}


:global(.features h3){
	font-size:clamp(1.8rem,3vw,2.5rem);font-weight:800;
	color:#1a1a1a;margin-bottom:18px;line-height:1.2;
	letter-spacing:-0.02em;position:relative;z-index:2;
}

:global(.features p){
	color: #4a4a4a;font-size:15px;line-height:1.75;margin-bottom:22px;
}

.why-list{list-style:none;padding:0;margin:20px 0;}
.why-list li{
	display:flex;align-items:flex-start;gap:12px;margin-bottom:12px;
	font-size:14.5px;color:#444;line-height:1.65;
}
.check-icon{
	width:22px;height:22px;border-radius:50%;
	background: #6b6b28;
	display:flex;align-items:center;justify-content:center;
	flex-shrink:0;margin-top:1px;box-shadow: 0 4px 12px rgba(107,107,40,0.35);
}
.check-icon i{font-size:13px;color:#fff;font-weight:700;}

:global(.btn-feature){
	display:inline-flex !important;align-items:center;gap:10px;
	padding:12px 26px !important;
	background:linear-gradient(135deg,#6b6b28 0%,#4a4a1c 100%);
	color:#fff !important;border-radius:8px;font-weight:700;font-size:14px;letter-spacing: 0.5px;
	text-decoration:none;transition:all .3s ease;
	box-shadow:0 8px 20px rgba(107,107,40,0.3);border:none;
}
:global(.btn-feature:hover){transform:translateY(-3px);box-shadow:0 12px 28px rgba(107,107,40,0.45);color:#fff !important;}
:global(.btn-feature i){transition:transform .25s;}
:global(.btn-feature:hover i){transform:translateX(4px);}

/* Image stacks */
.image-stack-premium{
	position:relative;width:100%;max-width:550px;margin:0 auto;
	aspect-ratio:1.2 / 1;
}
.image-stack-premium .stack-front,
.image-stack-premium .stack-back{
	position:absolute;border-radius:16px;overflow:hidden;
	box-shadow:0 15px 40px rgba(0,0,0,0.15);
	transition:transform .5s ease;
}
.image-stack-premium .stack-front{
	width:65%;height:80%;top:0;left:0;z-index:2;
	border:5px solid #fff;
}
.image-stack-premium .stack-back{
	width:55%;height:70%;bottom:0;right:0;z-index:1;
	border:5px solid #fff;
}
.image-stack-premium img{
	width:100%;height:100%;object-fit:cover;display:block;
}
.image-stack-premium:hover .stack-front{transform:translate(-8px,-8px);}
.image-stack-premium:hover .stack-back{transform:translate(8px,8px);}
.stack-accent{
	position:absolute;bottom:-20px;right:-20px;
	width:120px;height:120px;border-radius:16px;
	background:linear-gradient(135deg,#fffcd9 0%,#f5f0c0 100%);
	z-index:0;opacity:0.8;
}

.image-single-premium{
	position:relative;width:100%;max-width:550px;
}
.image-single-premium img{
	width:100%;border-radius:16px;display:block;
	box-shadow:0 20px 50px rgba(0,0,0,0.15);
	position:relative;z-index:2;
}
.image-accent{
	position:absolute;top:-15px;left:-15px;
	width:80px;height:80px;border-radius:16px;
	background:linear-gradient(135deg,#6b6b28 0%,#4a4a1c 100%);
	opacity:0.15;z-index:1;
}



@media(max-width:991px){
	.features-item{padding:40px 0;}
	.feature-number{font-size:3.5rem;margin-bottom:-10px;}
	.image-stack-premium{aspect-ratio:1.4/1;max-width:420px;min-height:240px;}
	.stack-accent{width:80px;height:80px;}
}
@media(max-width:576px){
	.image-stack-premium{
		aspect-ratio:auto;
		height:240px;
		min-height:240px;
		max-width:100%;
	}
	.image-stack-premium .stack-front{width:70%;height:78%;}
	.image-stack-premium .stack-back{width:60%;height:68%;}
	:global(.features .features-item .features-img-bg){min-height:240px;}
}
</style>