<section id="platforms" class="platforms-section section">
	<div class="container">

		<div class="plat-header" data-aos="fade-up">
			<div class="plat-eyebrow">
				<span class="plat-dot"></span>
				Zero vendor friction
			</div>
			<h2>We already work<br />inside your system</h2>
			<p>Property managers using any of these platforms can assign us work orders, track progress, and receive invoices — without any onboarding, paperwork, or back-and-forth from your side.</p>
		</div>

		<div class="plat-main-card" data-aos="fade-up" data-aos-delay="100">
			<div class="plat-main-left">
				<h3>How it works for your team</h3>
				<p>You send a work order through your existing platform. We receive it, execute the job, upload before/after photos, and submit the invoice — all inside the tool you already use. Your AP team never chases us. Your compliance team never flags us. You just get the unit back, ready to lease.</p>
			</div>
			<div class="plat-main-right">
				<div class="plat-step">
					<span class="plat-step-num">1</span>
					<span class="plat-step-txt">Send work order via platform</span>
					<span class="plat-step-arrow">→</span>
				</div>
				<div class="plat-step">
					<span class="plat-step-num">2</span>
					<span class="plat-step-txt">Cordova executes + documents</span>
					<span class="plat-step-arrow">→</span>
				</div>
				<div class="plat-step">
					<span class="plat-step-num">3</span>
					<span class="plat-step-txt">Photos + invoice uploaded</span>
					<span class="plat-step-arrow">→</span>
				</div>
				<div class="plat-step">
					<span class="plat-step-num">4</span>
					<span class="plat-step-txt">Unit move-in ready</span>
					<span class="plat-step-check"><i class="bi bi-check-lg"></i></span>
				</div>
			</div>
		</div>

		<div class="row g-3 mb-3">
			{#each platforms as p, i}
				<div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={i * 60}>
					<div class="plat-card">
						<div class="plat-card-top">
							<div class="plat-logo plat-{p.color}">{p.abbr}</div>
							<span class="plat-name">{p.name}</span>
							<div class="plat-verified">
								<i class="bi bi-check-lg"></i>
							</div>
						</div>
						<p class="plat-benefit">{p.benefit}</p>
					</div>
				</div>
			{/each}
		</div>

		<div class="row g-3" data-aos="fade-up">
			{#each stats as s}
				<div class="col-lg-4 col-md-4">
					<div class="plat-stat">
						<div class="plat-stat-num">{s.num}</div>
						<div class="plat-stat-label">{s.label}</div>
					</div>
				</div>
			{/each}
		</div>

	</div>
</section>

<script>
	const platforms = [
		{ abbr: 'RP', name: 'RealPage',         color: 'rp', benefit: 'Assign directly from OneSite — we\'re an approved vendor in your system.' },
		{ abbr: 'Ya', name: 'Yardi + VendorCafe',color: 'ya', benefit: 'Insurance, W-9, and docs already uploaded in VendorCafe.' },
		{ abbr: 'AF', name: 'AppFolio',          color: 'af', benefit: 'Work orders received, closed, and invoiced through your AppFolio workflow.' },
		{ abbr: 'VC', name: 'VendorCafe',        color: 'vc', benefit: 'Invoices submitted directly — your AP team doesn\'t chase us.' },
		{ abbr: 'NV', name: 'NetVendor',         color: 'nv', benefit: 'Always compliant — no alerts, no expired certs, no surprises.' },
		{ abbr: 'OM', name: 'OpsMerchant',       color: 'om', benefit: 'PO approvals handled smoothly — zero friction in your chain.' },
	];

	const stats = [
		{ num: '24h',  label: 'To start after receiving a work order from your platform' },
		{ num: '$0',   label: 'Setup cost or onboarding time required from your team' },
		{ num: '100%', label: 'Photo documentation uploaded per job, every single time' },
	];
</script>

<style>
.platforms-section{padding:80px 0;background: #ffffff;}

/* Header */
.plat-header{margin-bottom:40px;}
.plat-eyebrow{
	display:inline-flex;align-items:center;gap:8px;
	font-size:11px;font-weight:700;color:#6b6b28;
	text-transform:uppercase;letter-spacing:2px;margin-bottom:14px;
}
.plat-dot{
	width:7px;height:7px;border-radius:50%;background:#6b6b28;
	animation:platpulse 2s ease-in-out infinite;
}
@keyframes platpulse{0%,100%{opacity:1;transform:scale(1);}50%{opacity:.4;transform:scale(1.4);}}

.plat-header h2{
	font-size:clamp(1.9rem,3.5vw,2.6rem);font-weight:800;
	color:#1a1a1a;letter-spacing:-.02em;line-height:1.15;
	margin-bottom:12px;
}
.plat-header p{
	font-size:15px;color:#555;line-height:1.7;max-width:540px;
}

/* Main card */
.plat-main-card{
	display:flex;gap:32px;align-items:flex-start;
	background:#fff;border:1px solid rgba(107,107,40,0.1);
	border-radius:16px;padding:28px 32px;margin-bottom:24px;
	box-shadow:0 4px 24px rgba(0,0,0,0.04);
}
.plat-main-left{flex:1;}
.plat-main-left h3{
	font-size:18px;font-weight:700;color:#1a1a1a;
	margin-bottom:12px;letter-spacing:-.01em;
}
.plat-main-left p{
	font-size:14px;color:#555;line-height:1.75;margin:0;
}
.plat-main-right{
	flex-shrink:0;display:flex;flex-direction:column;gap:8px;
	min-width:230px;
}
.plat-step{
	display:flex;align-items:center;gap:10px;
	background:#fafaf7;border:1px solid rgba(107,107,40,0.1);
	border-radius:10px;padding:10px 14px;
}
.plat-step-num{
	width:24px;height:24px;border-radius:50%;flex-shrink:0;
	background:linear-gradient(135deg,#fffcd9 0%,#f5f0c0 100%);
	display:flex;align-items:center;justify-content:center;
	font-size:11px;font-weight:800;color:#4a4a1c;
}
.plat-step-txt{font-size:12px;color:#333;flex:1;font-weight:500;}
.plat-step-arrow{font-size:12px;color:#999;flex-shrink:0;}
.plat-step-check{
	width:22px;height:22px;border-radius:50%;flex-shrink:0;
	background:linear-gradient(135deg,#6b6b28 0%,#4a4a1c 100%);
	display:flex;align-items:center;justify-content:center;
}
.plat-step-check i{font-size:12px;color:#fffcd9;}

/* Platform cards */
.plat-card{
	background:#fff;border:1px solid rgba(0,0,0,0.06);
	border-radius:14px;padding:18px 20px;height:100%;
	transition:all .3s ease;
	box-shadow:0 2px 10px rgba(0,0,0,0.03);
}
.plat-card:hover{
	border-color:rgba(107,107,40,0.25);
	box-shadow:0 8px 24px rgba(107,107,40,0.1);
	transform:translateY(-3px);
}
.plat-card-top{display:flex;align-items:center;gap:10px;margin-bottom:12px;}
.plat-logo{
	width:38px;height:38px;border-radius:9px;
	display:flex;align-items:center;justify-content:center;
	font-size:11px;font-weight:700;flex-shrink:0;
}
.plat-rp{background:#E6F1FB;color:#185FA5;}
.plat-ya{background:#EAF3DE;color:#3B6D11;}
.plat-af{background:#FAEEDA;color:#854F0B;}
.plat-vc{background:#EEEDFE;color:#534AB7;}
.plat-nv{background:#E1F5EE;color:#0F6E56;}
.plat-om{background:#FAECE7;color:#993C1D;}

.plat-name{font-size:13px;font-weight:700;color:#1a1a1a;flex:1;}
.plat-verified{
	width:20px;height:20px;border-radius:50%;flex-shrink:0;
	background:#EAF3DE;
	display:flex;align-items:center;justify-content:center;
}
.plat-verified i{font-size:11px;color:#3B6D11;}

.plat-benefit{
	font-size:12.5px;color:#666;line-height:1.6;margin:0;
	padding-top:12px;border-top:1px solid rgba(0,0,0,0.06);
}

/* Stats */
.plat-stat{
	background:#fff;border:1px solid rgba(107,107,40,0.1);
	border-radius:12px;padding:20px 22px;
	box-shadow:0 2px 10px rgba(0,0,0,0.03);
}
.plat-stat-num{
	font-size:2rem;font-weight:800;color:#4a4a1c;
	letter-spacing:-.03em;margin-bottom:6px;
	background:linear-gradient(135deg,#6b6b28 0%,#4a4a1c 100%);
	-webkit-background-clip:text;background-clip:text;
	-webkit-text-fill-color:transparent;
}
.plat-stat-label{font-size:13px;color:#666;line-height:1.5;}

@media(max-width:991px){
	.plat-main-card{flex-direction:column;gap:20px;}
	.plat-main-right{min-width:auto;width:100%;}
}
@media(max-width:768px){
	.platforms-section{padding:50px 0;}
	.plat-main-card{padding:22px 20px;}
}
</style>