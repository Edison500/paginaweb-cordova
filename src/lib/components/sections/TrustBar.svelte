<section class="trust-bar">
	<div class="container">
		<div class="trust-inner">
			<div class="trust-item">
				<i class="bi bi-shield-fill-check"></i>
				<span>Licensed & Insured</span>
			</div>
			<div class="trust-divider"></div>
			<div class="trust-item">
				<i class="bi bi-clock-fill"></i>
				<span>24h Response</span>
			</div>
			<div class="trust-divider"></div>
			<div class="trust-item">
				<i class="bi bi-buildings-fill"></i>
				<span>5,008+ Projects</span>
			</div>
			<div class="trust-divider"></div>
			<div class="trust-item">
				<i class="bi bi-people-fill"></i>
				<span>120+ Clients Served</span>
			</div>
			<div class="trust-divider"></div>
			<div class="trust-item">
				<i class="bi bi-geo-alt-fill"></i>
				<span>Pensacola & Gulf Coast</span>
			</div>
		</div>
	</div>
</section>

<style>
.trust-bar{
	background:#1a2018;
	padding:14px 0;
	border-bottom:1px solid rgba(255,255,255,0.06);
}
.trust-inner{
	display:flex;align-items:center;justify-content:center;
	flex-wrap:wrap;gap:0;
}
.trust-item{
	display:flex;align-items:center;gap:8px;
	padding:6px 20px;
	color:rgba(255,252,217,0.9);
	font-size:13px;font-weight:600;
	white-space:nowrap;
}
.trust-item i{
	font-size:15px;color:#fffcd9;
	opacity:0.85;
}
.trust-divider{
	width:1px;height:18px;
	background:rgba(255,255,255,0.15);
	flex-shrink:0;
}
@media(max-width:991px){
	.trust-inner{gap:4px;}
	.trust-divider{display:none;}
	.trust-item{padding:5px 12px;font-size:12px;}
}
@media(max-width:576px){
	.trust-inner{justify-content:center;}
	.trust-item{padding:4px 4px;font-size:10px;gap:6px;}
	.trust-item i{font-size:13px;}
}
</style>
