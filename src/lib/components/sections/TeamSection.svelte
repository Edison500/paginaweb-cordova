<script>
	const team = [
		{
			img: '/assets/img/team/team-1.jpg',
			name: 'Team Member',
			role: 'Operations Manager',
			desc: 'Oversees day-to-day field operations, ensuring every unit turn runs on schedule and meets our quality standards.',
			linkedin: '#', instagram: '#', boss: false
		},
		{
			img: '/assets/img/team/team-boss.jpg',
			name: 'Sarah Cordova',
			role: 'CEO & Founder',
			desc: 'Founded Cordova Property Services with a vision to deliver reliable, high-quality maintenance solutions for multifamily communities across the region.',
			linkedin: '#', instagram: '#', boss: true
		},
		{
			img: '/assets/img/team/team-3.jpg',
			name: 'Team Member',
			role: 'Maintenance Technician',
			desc: 'Handles repairs, installations, and sheetrock work — a key part of our turnkey unit turn process.',
			linkedin: '#', instagram: '#', boss: false
		},
	];
</script>

<section id="team" class="team section light-background">
	<div class="container section-title" data-aos="fade-up">
		<h2>Our Team</h2>
		<p>The people behind every unit turn — experienced, reliable, and built for multifamily</p>
	</div>
	<div class="container">
		<div class="team-grid">
			{#each team as member, i}
				<div class="team-card" class:team-card-featured={member.boss} data-aos="fade-up" data-aos-delay={i * 100}>
					{#if member.boss}
						<div class="featured-badge">
							<i class="bi bi-star-fill"></i>
							<span>Founder</span>
						</div>
					{/if}

					<div class="team-photo-wrap">
						<div class="team-photo" class:team-photo-boss={member.boss}>
							<img src={member.img} alt={member.name} />
						</div>
						<div class="team-photo-ring"></div>
					</div>

					<div class="team-info">
						<h4>{member.name}</h4>
						<span class="team-role">{member.role}</span>
						<p>{member.desc}</p>
						<div class="team-socials">
							<a href={member.instagram} aria-label="Instagram"><i class="bi bi-instagram"></i></a>
							<a href={member.linkedin} aria-label="LinkedIn"><i class="bi bi-linkedin"></i></a>
						</div>
					</div>
				</div>
			{/each}
		</div>

		<div class="team-note" data-aos="fade-up">
			<i class="bi bi-people-fill"></i>
			<p>Our full team of <strong>15+ field professionals</strong> serves Pensacola, Gulf Breeze, Navarre, Fort Walton, Crestview, Milton, Mobile, and surrounding areas.</p>
		</div>
	</div>
</section>

<style>
.team-grid{
	display:grid;
	grid-template-columns:1fr 1.15fr 1fr;
	gap:28px;
	align-items:center;
	max-width:1100px;margin:0 auto;
}

.team-card{
	background:#fff;border-radius:20px;padding:32px 24px;
	text-align:center;position:relative;
	box-shadow:0 8px 24px rgba(0,0,0,0.06);
	transition:all .4s cubic-bezier(0.4,0,0.2,1);
	border:1px solid rgba(0,0,0,0.04);
}
.team-card:hover{
	transform:translateY(-6px);
	box-shadow:0 16px 40px rgba(0,0,0,0.1);
}

.team-card-featured{
	background:linear-gradient(180deg,#fff 0%,#fefdf2 100%);
	padding:40px 28px;
	border:1.5px solid rgba(107,107,40,0.15);
	box-shadow:0 12px 40px rgba(107,107,40,0.15);
	transform:scale(1.02);
}
.team-card-featured:hover{
	transform:scale(1.02) translateY(-6px);
	box-shadow:0 20px 50px rgba(107,107,40,0.22);
}

.featured-badge{
	position:absolute;top:-12px;left:50%;transform:translateX(-50%);
	background:linear-gradient(135deg,#6b6b28 0%,#4a4a1c 100%);
	color:#fffcd9;font-size:11px;font-weight:700;
	padding:6px 16px;border-radius:20px;
	display:inline-flex;align-items:center;gap:6px;
	text-transform:uppercase;letter-spacing:1.5px;
	box-shadow:0 6px 16px rgba(107,107,40,0.4);
}
.featured-badge i{font-size:10px;}

.team-photo-wrap{
	position:relative;width:150px;height:150px;margin:0 auto 20px;
}
.team-card-featured .team-photo-wrap{width:180px;height:180px;}

.team-photo{
	width:100%;height:100%;border-radius:50%;
	overflow:hidden;position:relative;z-index:2;
	border:4px solid #fff;
	box-shadow:0 10px 30px rgba(0,0,0,0.12);
}
.team-photo img{width:100%;height:100%;object-fit:cover;display:block;}
.team-photo-boss img{object-position:center 20%;}

.team-photo-ring{
	position:absolute;inset:-8px;border-radius:50%;
	border:2px dashed rgba(107,107,40,0.3);
	z-index:1;animation:rotate 20s linear infinite;
}
.team-card-featured .team-photo-ring{
	border:2px solid rgba(107,107,40,0.25);
	border-top-color:transparent;border-right-color:transparent;
}
@keyframes rotate{
	from{transform:rotate(0deg);}
	to{transform:rotate(360deg);}
}

.team-info h4{
	font-size:19px;font-weight:800;color:#1a1a1a;
	margin-bottom:4px;letter-spacing:-0.01em;
}
.team-card-featured .team-info h4{font-size:22px;color:#4a4a1c;}

.team-role{
	display:inline-block;font-size:12px;color:#6b6b28;
	font-weight:700;text-transform:uppercase;letter-spacing:1.5px;
	margin-bottom:14px;
	padding:4px 12px;border-radius:20px;
	background:rgba(107,107,40,0.08);
}

.team-info p{
	font-size:13.5px;color:#666;line-height:1.65;
	margin-bottom:18px;
}

.team-socials{display:flex;justify-content:center;gap:10px;}
.team-socials a{
	width:36px;height:36px;border-radius:50%;
	background:#f5f0c0;color:#6b6b28;
	display:flex;align-items:center;justify-content:center;
	text-decoration:none;transition:all .25s;
	font-size:15px;
}
.team-socials a:hover{
	background:linear-gradient(135deg,#6b6b28 0%,#4a4a1c 100%);
	color:#fffcd9;transform:translateY(-3px);
}

.team-note{
	display:flex;align-items:center;gap:14px;margin-top:60px;
	padding:20px 28px;background:#fff;
	border:1px solid rgba(107,107,40,0.2);border-radius:12px;
	max-width:640px;margin-left:auto;margin-right:auto;
	box-shadow:0 4px 16px rgba(0,0,0,0.04);
}
.team-note i{font-size:28px;color:#6b6b28;flex-shrink:0;}
.team-note p{margin:0;font-size:14px;color:#555;line-height:1.6;}
.team-note strong{color:#4a4a1c;}

@media(max-width:991px){
	.team-grid{grid-template-columns:1fr;gap:24px;max-width:450px;}
	.team-card-featured{transform:none;}
	.team-card-featured:hover{transform:translateY(-6px);}
}
</style>
