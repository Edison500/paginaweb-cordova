<script>
	const clients = [
		'Greystar',
		'Camden Property Trust',
		'MAA',
		'National Apartment Mgmt',
		'RPM Living',
		'Bainbridge Companies',
		'Cornerstone Properties',
		'First Communities',
	];
</script>

<section class="clients-strip">
	<div class="container">
		<p class="clients-label">Trusted by property managers across the Gulf Coast</p>
		<div class="clients-track-wrap">
			<div class="clients-track">
				{#each [...clients, ...clients] as c}
					<span class="client-name">{c}</span>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
.clients-strip{
	background:#fff;
	border-top:1px solid rgba(0,0,0,0.06);
	border-bottom:1px solid rgba(0,0,0,0.06);
	padding:18px 0;
	overflow:hidden;
}
.clients-label{
	text-align:center;
	font-size:11px;font-weight:700;
	color:#aaa;text-transform:uppercase;
	letter-spacing:2px;margin-bottom:14px;
}
.clients-track-wrap{
	overflow:hidden;
	-webkit-mask:linear-gradient(90deg,transparent 0%,#fff 10%,#fff 90%,transparent 100%);
	mask:linear-gradient(90deg,transparent 0%,#fff 10%,#fff 90%,transparent 100%);
}
.clients-track{
	display:flex;align-items:center;gap:0;
	width:max-content;
	animation:scroll-clients 30s linear infinite;
}
.clients-track:hover{animation-play-state:paused;}

.client-name{
	font-size:14px;font-weight:700;
	color:#bbb;letter-spacing:0.5px;
	padding:0 32px;
	white-space:nowrap;
	position:relative;
	transition:color .3s;
}
.client-name::after{
	content:'·';
	position:absolute;right:0;top:50%;transform:translateY(-50%);
	color:#ddd;font-size:18px;
}
.clients-track:hover .client-name{color:#999;}

@keyframes scroll-clients{
	0%{transform:translateX(0);}
	100%{transform:translateX(-50%);}
}

@media(max-width:768px){
	.client-name{font-size:13px;padding:0 24px;}
}
</style>
