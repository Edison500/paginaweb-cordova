<section id="why-us" class="why-premium-section">
	<div class="why-premium-container">

		<div class="why-premium-header" data-aos="fade-up">
			<h2 class="why-eyebrow">Why Choose Cordova</h2>

			<p>
				We simplify property turns and maintenance so you can lease faster and focus on what matters.
			</p>
		</div>

		<div class="why-premium-grid">
			<div class="why-benefits" data-aos="fade-right" data-aos-delay="100">

				<article class="why-card">
					<div class="why-number">01</div>

					<div class="why-content">
						<h3>One Team. Every Service.</h3>
						<p>
							All the services you need under one roof. One invoice, one point of contact.
						</p>
					</div>

					<i class="bi bi-chevron-right why-arrow"></i>
				</article>

				<article class="why-card">
					<div class="why-number">02</div>
					<div class="why-content">
						<h3>Built for Speed.</h3>
						<p>
							We respond fast, show up on time, and get the job done right.
						</p>
					</div>

					<i class="bi bi-chevron-right why-arrow"></i>
				</article>

				<article class="why-card">
					<div class="why-number">03</div>

					<div class="why-content">
						<h3>Trusted by Property Managers.</h3>
						<p>
							Fully insured, experienced, and committed to quality communication.
						</p>
					</div>

					<i class="bi bi-chevron-right why-arrow"></i>
				</article>

				<div class="why-actions">
					<a href="/services" class="why-btn why-btn-primary">
						Explore Services <i class="bi bi-arrow-right"></i>
					</a>

					<a href="/contact" class="why-btn why-btn-outline">
						Contact Us <i class="bi bi-arrow-right"></i>
					</a>
				</div>
			</div>

			<div class="why-visual" data-aos="fade-left" data-aos-delay="180">
				<img src="/assets/img/choose.png" alt="Cordova property services team working inside an apartment" />

				<div class="why-promise-card">
					<div class="quote-icon">
						<i class="bi bi-chat-quote"></i>
					</div>

					<p>
						We make the process <strong>simple</strong>, the communication
						<strong>clear</strong>, and the results <strong>consistent — every time.</strong>
					</p>
				</div>
			</div>
		</div>

		<div class="why-bottom-cta" data-aos="fade-up" data-aos-delay="220">
			<div class="why-bottom-icon">
				<i class="bi bi-calendar-check"></i>
			</div>

			<div>
				<h3>Let’s make your next turn your easiest one yet.</h3>
				<p>Reach out today and see the Cordova difference.</p>
			</div>

			<a href="/contact" class="why-btn why-btn-primary">
				Get in Touch <i class="bi bi-arrow-right"></i>
			</a>
		</div>

	</div>
</section>

<style>
	.why-premium-section{
		position:relative;
		background:
			radial-gradient(circle at 50% 8%, rgba(95,127,69,.08), transparent 32%),
			linear-gradient(180deg,#ffffff 0%,#fbfaf6 58%,#f5f4ee 100%);
		padding:86px 0 72px;
		overflow:hidden;
	}

	.why-premium-container{
		width:min(1440px, calc(100% - 72px));
		margin:0 auto;
	}

	.why-premium-header{
		text-align:center;
		max-width:920px;
		margin:0 auto 56px;
	}

	.why-eyebrow{
	font-size: clamp(1.8rem, 3vw, 2.6rem) !important;
	color:#1a1a1a;

	letter-spacing:0.01em;

	display:flex;
	align-items:center;
	justify-content:center;
	gap:18px;

	margin:0 0 16px;
}

.why-eyebrow::before,
.why-eyebrow::after{
	content: "";
	width: 50px;
	height: 2px;
	background: #e84545;
	display: block;
}
	.why-premium-header h2{
		margin:0;
		font-size:clamp(2.7rem,4.2vw,4.4rem);
		line-height:1.03;
		font-weight:950;
		letter-spacing:-.07em;
		color:#121814;
	}

	.why-premium-header h2 span{
		color:#5f7f45;
	}

	.why-premium-header p{
		max-width:640px;
		margin:24px auto 0;
		font-size:18px;
		line-height:1.65;
		color:#555d55;
	}

	.why-premium-grid{
		display:grid;
		grid-template-columns:minmax(480px, 1fr) minmax(540px, 1.15fr);
		gap:38px;
		align-items:stretch;
	}

	.why-benefits{
		display:flex;
		flex-direction:column;
		gap:0;
		background:rgba(255,255,255,.72);
		border:1px solid rgba(34,45,31,.08);
		border-radius:26px;
		box-shadow:0 22px 60px rgba(34,45,31,.06);
		overflow:hidden;
	}

	.why-card{
		position:relative;
		display:grid;
		grid-template-columns:98px 1fr 30px;
		gap:22px;
		align-items:center;
		min-height:158px;
		padding:28px 22px 28px 28px;
		background:rgba(255,255,255,.78);
		border-bottom:1px solid rgba(34,45,31,.08);
		transition:background .28s ease, transform .28s ease;
	}

	.why-card:last-of-type{
		border-bottom:none;
	}

	.why-card:hover{
		background:#fff;
		transform:translateX(4px);
	}

	.why-number{
		font-size:48px;
		line-height:1;
		font-weight:950;
		letter-spacing:-.05em;
		color:#60723a;
	}

	.why-content h3{
		margin:0 0 10px;
		font-size:24px;
		line-height:1.15;
		font-weight:950;
		letter-spacing:-.035em;
		color:#121814;
	}

	.why-content p{
		margin:0;
		max-width:430px;
		font-size:16px;
		line-height:1.6;
		color:#4e574e;
	}

	.why-arrow{
		font-size:26px;
		color:#60723a;
		transition:transform .25s ease;
	}

	.why-card:hover .why-arrow{
		transform:translateX(5px);
	}

	.why-actions{
		display:flex;
		gap:18px;
		padding:28px;
		background:linear-gradient(180deg,rgba(255,255,255,.7),rgba(250,249,244,.95));
	}

	.why-btn{
		min-height:58px;
		padding:0 32px;
		border-radius:10px;
		display:inline-flex;
		align-items:center;
		justify-content:center;
		gap:14px;
		font-size:15px;
		font-weight:900;
		text-decoration:none;
		transition:transform .25s ease, box-shadow .25s ease, background .25s ease, color .25s ease;
	}

	.why-btn-primary{
		background:linear-gradient(135deg,#6f7835 0%,#4f5b22 100%);
		color:#fff;
		box-shadow:0 14px 30px rgba(95,111,69,.22);
	}

	.why-btn-outline{
		background:#fff;
		color:#5f6e33;
		border:1px solid rgba(95,111,69,.35);
	}

	.why-btn:hover{
		transform:translateY(-3px);
	}

	.why-btn-primary:hover{
		color:#fff;
		box-shadow:0 18px 38px rgba(95,111,69,.32);
	}

	.why-btn-outline:hover{
		background:#f7f7f1;
		color:#4f5b22;
	}

	.why-btn i{
		font-size:18px;
		transition:transform .25s ease;
	}

	.why-btn:hover i{
		transform:translateX(4px);
	}

	.why-visual{
		position:relative;
		min-height:620px;
		border-radius:28px;
		overflow:hidden;
		background:#ddd;
		box-shadow:0 30px 80px rgba(24,28,22,.14);
	}

	.why-visual::after{
		content:"";
		position:absolute;
		inset:0;
		background:
			linear-gradient(180deg,rgba(0,0,0,0) 42%,rgba(0,0,0,.35) 100%),
			linear-gradient(90deg,rgba(0,0,0,.08),rgba(0,0,0,0));
		pointer-events:none;
	}

	.why-visual img{
		width:100%;
		height:100%;
		object-fit:cover;
		display:block;
		transition:transform .65s ease;
	}

	.why-visual:hover img{
		transform:scale(1.045);
	}

	.why-promise-card{
	position:absolute;
	left:34px;
	right:34px;
	bottom:34px;
	z-index:2;
	display:grid;
	grid-template-columns:90px 1fr;
	align-items:center;
	gap:26px;
	padding:26px 32px;
	border-radius:20px;

	background:
		linear-gradient(
			135deg,
			rgba(63,74,32,.48) 0%,
			rgba(44,52,22,.42) 100%
		);

	backdrop-filter:blur(16px);
	-webkit-backdrop-filter:blur(16px);

	border:1px solid rgba(255,255,255,.08);

	color:#fff;

	box-shadow:
		0 18px 45px rgba(0,0,0,.16),
		inset 0 1px 0 rgba(255,255,255,.06);
}

	.quote-icon{
	width:62px;
	height:62px;
	border-radius:50%;

	background:rgba(255,255,255,.06);

	border:1px solid rgba(214,226,139,.22);

	display:grid;
	place-items:center;

	color:#dce88f;

	font-size:30px;

	backdrop-filter:blur(8px);
}

	.why-promise-card p{
		margin:0;
		max-width:640px;
		font-size:20px;
		line-height:1.55;
		color:#fff;
	}

	.why-promise-card strong{
		font-weight:950;
		color:#fff;
	}

	.why-bottom-cta{
		margin-top:34px;
		display:grid;
		grid-template-columns:76px 1fr auto;
		gap:24px;
		align-items:center;
		padding:26px 34px;
		border-radius:22px;
		background:rgba(255,255,255,.78);
		border:1px solid rgba(34,45,31,.08);
		box-shadow:0 18px 50px rgba(34,45,31,.06);
	}

	.why-bottom-icon{
		width:64px;
		height:64px;
		border-radius:50%;
		background:#f1f0e8;
		color:#60723a;
		display:grid;
		place-items:center;
		font-size:28px;
	}

	.why-bottom-cta h3{
		margin:0 0 6px;
		font-size:22px;
		line-height:1.2;
		font-weight:950;
		letter-spacing:-.025em;
		color:#121814;
	}

	.why-bottom-cta p{
		margin:0;
		font-size:16px;
		color:#5a6258;
	}

	@media(max-width:1200px){
		.why-premium-grid{
			grid-template-columns:1fr;
		}

		.why-visual{
			min-height:560px;
		}
	}

	@media(max-width:768px){
		.why-premium-section{
			padding:64px 0 52px;
		}

		.why-premium-container{
			width:min(100% - 34px, 1440px);
		}

		.why-premium-header{
			margin-bottom:36px;
		}

		.why-premium-header h2{
			font-size:42px;
			line-height:1.02;
		}

		.why-premium-header p{
			font-size:16px;
		}

		.why-card{
			grid-template-columns:70px 1fr 24px;
			gap:16px;
			padding:24px 18px;
		}

		.why-number{
			font-size:38px;
		}

		.why-icon{
			display:none;
		}

		.why-content h3{
			font-size:21px;
		}

		.why-content p{
			font-size:15px;
		}

		.why-actions{
			flex-direction:column;
			padding:22px;
		}

		.why-btn{
			width:100%;
		}

		.why-visual{
			min-height:430px;
			border-radius:22px;
		}

		.why-promise-card{
			left:18px;
			right:18px;
			bottom:18px;
			grid-template-columns:1fr;
			gap:14px;
			padding:22px;
		}

		.quote-icon{
			width:50px;
			height:50px;
			font-size:26px;
		}

		.why-promise-card p{
			font-size:17px;
		}

		.why-bottom-cta{
			grid-template-columns:1fr;
			text-align:center;
			justify-items:center;
			padding:26px 22px;
		}
		
	}
</style>