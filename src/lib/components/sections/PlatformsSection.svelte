<div class="billing-card-v2" data-aos="fade-up" data-aos-delay="120">
	<div class="billing-inner-v2">

		<span class="billing-pill-v2">Invoicing & Payments</span>

		<h3>Seamless invoicing. Stronger partnerships.</h3>

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
	background:
		radial-gradient(circle at 50% 20%, rgba(95,111,69,.055), transparent 30%),
		linear-gradient(180deg,#fbfbf8 0%,#f6f7f2 100%);
	border-top:1px solid rgba(74,86,55,.08);
	border-bottom:1px solid rgba(74,86,55,.08);
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
	display:inline-block;
	font-size:12px;
	font-weight:900;
	letter-spacing:1.7px;
	text-transform:uppercase;
	color:#5f7f45;
	margin-bottom:14px;
}

.billing-card-v2 h3{
	font-size:clamp(2rem,3vw,3rem);
	line-height:1.12;
	font-weight:900;
	letter-spacing:-.04em;
	color:#202723;
	margin:0 0 18px;
}

.billing-card-v2 h3::after{
	content:"";
	display:block;
	width:72px;
	height:3px;
	background:#5f7f45;
	border-radius:999px;
	margin:16px auto 0;
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


.platform-logo-v2 img{
	width:260px;
	height:auto;
	max-height:none;
	object-fit:contain;
	display:block;
	opacity:.98;
	mix-blend-mode:multiply;
	transform:scale(2.1);
	transform-origin:center;
}

.platform-logo-v2:hover{
	transform:translateY(-2px);
}

.platform-logo-v2:hover img{
	opacity:1;
}

/* Bottom trust row */
.billing-trust-v2{
	background:linear-gradient(180deg,#f2f3ee 0%,#eef0e9 100%);
	border-top:1px solid rgba(74,86,55,.08);
	padding:22px 24px;
	display:flex;
	align-items:center;
	justify-content:center;
	gap:18px;
}

.trust-icon-v2{
	width:44px;
	height:44px;
	border-radius:50%;
	background:#fff;
	display:flex;
	align-items:center;
	justify-content:center;
	color:#5f7f45;
	font-size:22px;
	box-shadow:0 8px 22px rgba(34,45,31,.08);
	border:1px solid rgba(74,86,55,.08);
	flex-shrink:0;
}

.billing-trust-v2 p{
	margin:0;
	font-size:14.5px;
	line-height:1.5;
	color:#5f665d;
}

.billing-trust-v2 strong{
	color:#202723;
	font-weight:900;
	margin-right:8px;
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
	transform:scale(1.9);
}
}

@media(max-width:576px){
	.billing-inner-v2{
		padding:38px 18px 32px;
	}

	.billing-card-v2 h3{
		font-size:2rem;
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
	transform:scale(1.75);
}

	.billing-trust-v2{
		align-items:flex-start;
		text-align:left;
		padding:20px 18px;
	}

	.billing-trust-v2 p{
		font-size:13.5px;
	}

	.billing-trust-v2 strong,
	.billing-trust-v2 span{
		display:block;
		margin:0;
	}
}
</style>