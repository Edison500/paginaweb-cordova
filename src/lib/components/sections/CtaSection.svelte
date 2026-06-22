<section id="call-to-action" class="call-to-action section cta-custom">
	<div class="cta-decoration-1"></div>
	<div class="cta-decoration-2"></div>
	<div class="cta-icon-bg"><i class="bi bi-buildings"></i></div>

	<div class="container">
		<div class="row justify-content-center" data-aos="zoom-in" data-aos-delay="100">
			<div class="col-xl-10">
				<div class="cta-inner">
					<div class="cta-text">
						<span class="cta-eyebrow">
							<span class="cta-eyebrow-dot"></span>
							Ready when you are
						</span>
						<h3>Let's Get Your Units Move-In Ready</h3>
						<p>One call. One team. Everything handled — painting, cleaning, repairs, and more.</p>
					</div>
					<div class="cta-actions">
						<a href="tel:+14482196669" class="cta-btn-secondary">
							<i class="bi bi-telephone-fill"></i>
							<span>Call Us</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
#call-to-action.cta-custom{
	background-color:#5a5a21;
	background-image:linear-gradient(135deg,#6b6b28 0%,#4a4a1c 100%);
	padding:70px 0;position:relative;overflow:hidden;
}

#call-to-action.cta-custom::before{
	content:none;display:none;
}

.cta-decoration-1, .cta-decoration-2{
	position:absolute;border-radius:50%;pointer-events:none;
}
.cta-decoration-1{
	top:-80px;right:-80px;width:300px;height:300px;
	background:radial-gradient(circle,rgba(255,252,217,0.08) 0%,transparent 70%);
}
.cta-decoration-2{
	bottom:-100px;left:10%;width:250px;height:250px;
	background:radial-gradient(circle,rgba(255,252,217,0.06) 0%,transparent 70%);
}

.cta-icon-bg{
	position:absolute;right:8%;top:50%;transform:translateY(-50%);
	font-size:14rem;color:rgba(255,252,217,0.07);
	pointer-events:none;line-height:1;
}

.cta-inner{
	display:flex;align-items:center;justify-content:space-between;
	gap:40px;flex-wrap:wrap;position:relative;z-index:2;
}

.cta-eyebrow{
	display:inline-flex;align-items:center;gap:10px;
	font-size:12px;color:rgba(255,252,217,0.9);
	text-transform:uppercase;letter-spacing:2px;font-weight:600;
	margin-bottom:14px;
}
.cta-eyebrow-dot{
	width:8px;height:8px;border-radius:50%;background:#fffcd9;
	box-shadow:0 0 12px rgba(255,252,217,0.6);
	animation:pulse 2s ease-in-out infinite;
}
@keyframes pulse{
	0%,100%{transform:scale(1);opacity:1;}
	50%{transform:scale(1.3);opacity:0.6;}
}

.cta-text h3{
	color:#fff;font-size:clamp(1.7rem,3vw,2.5rem);
	font-weight:800;margin-bottom:10px;line-height:1.2;
	letter-spacing:-0.02em;
}
.cta-text p{
	color:rgba(255,255,255,0.88);font-size:1.05rem;
	margin:0;max-width:600px;line-height:1.6;
}

.cta-actions{display:flex;gap:14px;flex-shrink:0;}

.cta-btn-secondary{
	padding:16px 36px;
	border:2px solid rgba(255,252,217,0.5);
	color:#fff;border-radius:10px;font-weight:700;
	text-decoration:none;display:inline-flex;align-items:center;gap:10px;
	white-space:nowrap;transition:all .3s ease;font-size:15px;
	background:rgba(255,255,255,0.08);backdrop-filter:blur(10px);
}
.cta-btn-secondary:hover{
	border-color:#fffcd9;background:rgba(255,252,217,0.15);
	color:#fff;transform:translateY(-3px);
	box-shadow:0 10px 30px rgba(0,0,0,0.2);
}
.cta-btn-secondary i{font-size:16px;color:#fffcd9;}

@media(max-width:768px){
	.cta-inner{text-align:center;justify-content:center;}
	.cta-actions{justify-content:center;}
	.cta-icon-bg{font-size:9rem;opacity:0.5;}
}
</style>
