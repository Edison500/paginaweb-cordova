<script>
	const testimonials = [
		{
			quote: "Cordova handled our 32-unit turnover in record time. One call, one team, and every unit was move-in ready on schedule. Their communication is exceptional.",
			name: "Testimonial Pending",
			role: "Property Manager",
			company: "Multifamily Community",
			avatar: '/assets/img/team/team-2.jpg'
		},
		{
			quote: "We've tried other vendors for painting and repairs — Cordova is in a league of their own. Bilingual team, professional results, and they work perfectly with our PO system.",
			name: "Testimonial Pending",
			role: "Operations Director",
			company: "Property Management Group",
			avatar: '/assets/img/team/team-4.jpg'
		},
		{
			quote: "Reliable, fast, and the quality is consistent across every unit. They've saved us countless hours of vendor coordination. Highly recommended.",
			name: "Testimonial Pending",
			role: "Regional Manager",
			company: "Apartment Communities",
			avatar: '/assets/img/team/team-5.jpg'
		}
	];
</script>

<section id="testimonials" class="testimonials section">
	<div class="container section-title" data-aos="fade-up">
		<h2>What Property Managers Say</h2>
		<p>Trusted by multifamily communities across the Gulf Coast region</p>
	</div>

	<div class="container">
		<div class="row g-4">
			{#each testimonials as t, i}
				<div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={i * 100}>
					<div class="testimonial-card">
						<div class="testimonial-quote-icon">
							<i class="bi bi-quote"></i>
						</div>
						<div class="testimonial-stars">
							<i class="bi bi-star-fill"></i>
							<i class="bi bi-star-fill"></i>
							<i class="bi bi-star-fill"></i>
							<i class="bi bi-star-fill"></i>
							<i class="bi bi-star-fill"></i>
						</div>
						<p class="testimonial-quote">"{t.quote}"</p>
						<div class="testimonial-author">
							<div class="testimonial-avatar">
								<img src={t.avatar} alt={t.name} />
							</div>
							<div class="testimonial-info">
								<h5>{t.name}</h5>
								<span>{t.role}</span>
								<small>{t.company}</small>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
#testimonials{background:#fafaf7;padding:80px 0;}

.testimonial-card{
	background:#fff;border-radius:16px;padding:32px 28px;
	border:1px solid rgba(0,0,0,0.05);
	box-shadow:0 4px 20px rgba(0,0,0,0.04);
	transition:all .35s ease;
	height:100%;position:relative;overflow:hidden;
	display:flex;flex-direction:column;
}
.testimonial-card::before{
	content:'';position:absolute;top:0;left:0;right:0;height:4px;
	background:linear-gradient(90deg,#6b6b28 0%,#4a4a1c 100%);
	transform:scaleX(0);transform-origin:left;
	transition:transform .4s ease;
}
.testimonial-card:hover{
	transform:translateY(-6px);
	box-shadow:0 16px 40px rgba(107,107,40,0.15);
	border-color:rgba(107,107,40,0.2);
}
.testimonial-card:hover::before{transform:scaleX(1);}

.testimonial-quote-icon{
	position:absolute;top:20px;right:24px;
	font-size:60px;color:rgba(107,107,40,0.12);
	line-height:1;
}

.testimonial-stars{
	display:flex;gap:4px;margin-bottom:16px;
	color:#f59e0b;font-size:15px;
}

.testimonial-quote{
	font-size:15px;line-height:1.75;color:#444;
	margin-bottom:24px;flex:1;font-style:italic;
	position:relative;z-index:2;
}

.testimonial-author{
	display:flex;align-items:center;gap:14px;
	padding-top:20px;border-top:1px solid rgba(0,0,0,0.08);
}

.testimonial-avatar{
	width:50px;height:50px;border-radius:50%;
	overflow:hidden;flex-shrink:0;
	border:2px solid #fffcd9;
	box-shadow:0 4px 12px rgba(0,0,0,0.1);
}
.testimonial-avatar img{width:100%;height:100%;object-fit:cover;display:block;}

.testimonial-info h5{
	font-size:15px;font-weight:700;margin:0 0 2px;color:#1a1a1a;
}
.testimonial-info span{
	display:block;font-size:12px;color:#6b6b28;
	font-weight:600;letter-spacing:0.5px;
}
.testimonial-info small{
	font-size:11px;color:#999;
}

@media(max-width:768px){
	.testimonial-card{padding:26px 22px;}
}
</style>