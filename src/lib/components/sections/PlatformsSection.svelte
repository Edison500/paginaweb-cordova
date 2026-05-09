<div class="billing-card-v2" data-aos="fade-up" data-aos-delay="120">
	<div class="billing-inner-v2">

		<h2 class="billing-pill-v2">Invoicing & Payments</h2>

<p class="billing-main-copy-v2">
	Seamless invoicing. Stronger partnerships.
</p>

		<p class="billing-subtitle-v2">
			Cordova integrates with leading systems to keep your projects moving.
		</p>

		<div class="billing-platforms-v2">

			<div class="platform-logo-v2">
				<img src="/assets/img/invoice-logo/realpage.png" alt="RealPage" />
			</div>

			<div class="platform-divider-v2"></div>

			<div class="platform-logo-v2">
				<img src="/assets/img/invoice-logo/yardi.png" alt="Yardi" />
			</div>

			<div class="platform-divider-v2"></div>

			<div class="platform-logo-v2">
				<img src="/assets/img/invoice-logo/netvendor.png" alt="NetVendor" />
			</div>

		</div>
	</div>

	<div class="billing-trust-v2">
		<div class="trust-icon-v2">
			<i class="bi bi-shield-check"></i>
		</div>

		<p>
			<strong>Secure. Compliant. Built for multifamily.</strong>
			<span>Your data is protected and your workflows stay compliant.</span>
		</p>
	</div>
</div>

<style>
.billing-card-v2{
	width:100%;
	margin:0 auto 28px;
	background:transparent;
	position:relative;
	overflow:hidden;
}

.billing-inner-v2{
	max-width:1180px;
	margin:0 auto;
	padding:56px 24px 48px;
	text-align:center;
}

.billing-pill-v2{
	font-size: clamp(1.8rem, 3vw, 2.6rem);
	font-weight:800;
	letter-spacing:0.01em;
	color:#1a1a1a;

	display:flex;
	align-items:center;
	justify-content:center;
	gap:18px;

	margin:0 0 18px;
}

/* === TITULO con tipografía global (igual que "Our Services") === */
.billing-card-v2 h3{
	font-size: clamp(1.8rem, 3vw, 2.6rem);
	line-height:1.2;
	font-weight:800;

	letter-spacing:0.01em;

	color:#1a1a1a;

	display:flex;
	align-items:center;
	justify-content:center;
	gap:18px;

	margin:0 0 18px;
}
.billing-main-copy-v2{
	margin:10px auto 18px;
}

.billing-pill-v2::before,
.billing-pill-v2::after{
	content:"";
	width:50px;
	height:2px;
	background:#e84545;
	display:block;
	border-radius:999px;
}
.billing-subtitle-v2{
	font-size:15.5px;
	line-height:1.6;
	color:#5f665d;
	margin:0 auto 42px;
	max-width:620px;
}

.billing-platforms-v2{
	display:flex;
	align-items:center;
	justify-content:center;
	gap:48px;
	flex-wrap:wrap;
}

.platform-divider-v2{
	width:1px;
	height:60px;
	background:rgba(74,86,55,.18);
}

.platform-logo-v2{
	display:flex;
	align-items:center;
	justify-content:center;
	min-width:230px;
	height:95px;
	padding:0;
	overflow:visible;
	transition:transform .28s ease, opacity .28s ease;
}

/* === LOGOS más pequeños (scale reducido) === */
.platform-logo-v2 img{
	width:260px;
	height:auto;
	max-height:none;
	object-fit:contain;
	display:block;

	/* MONOCHROME DARK */
	filter:brightness(0) contrast(1);
	opacity:.72;

	transform:scale(1.45); /* antes 2.1 */
	transform-origin:center;

	transition:
		filter .35s ease,
		opacity .35s ease,
		transform .35s ease;
}

.platform-logo-v2:hover{
	transform:translateY(-2px);
}

.platform-logo-v2:hover img{
	filter:none;
	opacity:1;
	transform:scale(1.5); /* antes 2.16 */
}

/* Bottom trust row */
.billing-trust-v2{
	background:transparent;
	padding:14px 24px;
	display:flex;
	align-items:center;
	justify-content:center;
	gap:12px;
}

.trust-icon-v2{
	width:32px;
	height:32px;
	border-radius:50%;
	background:#fff;
	display:flex;
	align-items:center;
	justify-content:center;
	color:#5f7f45;
	font-size:15px;
	box-shadow:0 6px 14px rgba(34,45,31,.07);
	border:1px solid rgba(74,86,55,.08);
	flex-shrink:0;
}

.billing-trust-v2 p{
	margin:0;
	font-size:12.5px;
	line-height:1.45;
	color:#5f665d;
}

.billing-trust-v2 strong{
	color:#202723;
	font-weight:900;
	margin-right:6px;
	font-size:12.5px;
}

.billing-trust-v2 span{
	color:#5f665d;
}


/* Responsive */
@media(max-width:991px){
	.billing-inner-v2{
		padding:46px 22px 38px;
	}

	.billing-platforms-v2{
		gap:32px;
	}

	.platform-divider-v2{
		display:none;
	}

	.platform-logo-v2{
		min-width:190px;
		height:82px;
	}

	.platform-logo-v2 img{
		width:230px;
		transform:scale(1.3); /* antes 1.9 */
	}

	.platform-logo-v2:hover img{
		transform:scale(1.35); /* antes 1.96 */
	}
}

@media(max-width:576px){
	.billing-inner-v2{
		padding:38px 18px 32px;
	}

	.billing-card-v2 h3{
		font-size:1.8rem;
	}

	.billing-subtitle-v2{
		font-size:14px;
		margin-bottom:30px;
	}

	.billing-platforms-v2{
		display:grid;
		grid-template-columns:1fr;
		gap:14px;
	}

	.platform-logo-v2{
		width:100%;
		min-width:0;
		height:78px;
		overflow:hidden;
		background:rgba(255,255,255,.62);
		border:1px solid rgba(74,86,55,.08);
		border-radius:14px;
	}

	.platform-logo-v2 img{
		width:240px;
		height:62px;
		transform:scale(1.2); /* antes 1.75 */
	}

	.platform-logo-v2:hover img{
		transform:scale(1.25); /* antes 1.81 */
	}

	.billing-trust-v2{
		align-items:flex-start;
		text-align:left;
		padding:14px 18px;
	}

	.billing-trust-v2 p{
		font-size:12px;
	}

	.billing-trust-v2 strong{
		font-size:12px;
	}

	.billing-trust-v2 strong,
	.billing-trust-v2 span{
		display:block;
		margin:0;
	}
}
</style>