<div class="billing-card-v2" data-aos="fade-up" data-aos-delay="120">
	<div class="billing-inner-v2">

		<h2 class="billing-pill-v2">Invoicing & Payments</h2>

		<!-- <p class="billing-main-copy-v2">Seamless invoicing. Stronger partnerships.</p>
		<div class="billing-benefits-v2">
			<span><i class="bi bi-check-circle"></i> Real-time invoice sync</span>
			<span><i class="bi bi-check-circle"></i> No double entry</span>
			<span><i class="bi bi-check-circle"></i> Auto-reconciled payments</span>
		</div>
		<div class="billing-turnaround-v2">
			<i class="bi bi-lightning-charge-fill"></i>
			<span>Invoice turnaround in under 5 days</span>
		</div>
		<p class="billing-subtitle-v2">Cordova integrates with leading systems to keep your projects moving.</p> -->

		<div class="billing-platforms-v2">

			<div class="platform-card-v2">
				<img src="/assets/img/invoice-logo/realpage1.png" alt="RealPage" />
			</div>

			<div class="platform-card-v2">
				<img src="/assets/img/invoice-logo/yardi1.png" alt="Yardi" />
			</div>

			<div class="platform-card-v2">
				<img src="/assets/img/invoice-logo/netvendor1.png" alt="NetVendor" />
			</div>

			<div class="platform-card-v2">
				<img src="/assets/img/invoice-logo/vendorcafe.png" alt="VendorCafe" />
			</div>

			<div class="platform-card-v2">
				<img src="/assets/img/invoice-logo/opsmerchant.png" alt="OpsMerchant" />
			</div>

		</div>
	</div>
</div>

<style>
.billing-card-v2 {
	width: 100%;
	background: transparent;
	position: relative;
}
.billing-inner-v2 {
	max-width: 1180px;
	margin: 0 auto;
	padding: 56px 24px 48px;
	text-align: center;
}
.billing-pill-v2 {
	font-size: clamp(1.8rem, 3vw, 2.6rem);
	font-weight: 800;
	letter-spacing: 0.01em;
	color: #1a1a1a;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 18px;
	margin: 0 0 36px;
}
.billing-pill-v2::before,
.billing-pill-v2::after {
	content: "";
	width: 50px;
	height: 2px;
	background: #6b6b28;
	display: block;
	border-radius: 999px;
}

/* Grid de logos */
.billing-platforms-v2 {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 16px;
}

.platform-card-v2 {
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 18px 28px;
	border-radius: 12px;
	border: 1px solid rgba(0,0,0,0.08);
	box-shadow: 0 2px 8px rgba(0,0,0,0.05);
	min-width: 180px;
	height: 110px;
	transition: box-shadow 0.3s, border-color 0.3s;
}
.platform-card-v2:hover {
	box-shadow: 0 6px 20px rgba(107,107,40,0.15);
	border-color: rgba(107,107,40,0.25);
}

.platform-card-v2 img {
	width: 100%;
	height: auto;
	max-width: 160px;
	max-height: 70px;
	object-fit: contain;
}

@media (max-width: 768px) {
	.billing-platforms-v2 { gap: 12px; }
	.platform-card-v2 { min-width: 130px; height: 70px; padding: 14px 20px; }
	.platform-card-v2 img { height: 28px; }
}
</style>