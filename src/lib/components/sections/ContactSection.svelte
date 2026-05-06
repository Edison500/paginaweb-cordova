<script>
	let name = $state(''), email = $state(''), phone = $state(''), service = $state(''), message = $state('');
	let status = $state('');

	const services = [
		'Turnkey Services','Painting','Repairs','Cleaning',
		'Water Remediation','Tub & Shower Resurfacing','Counter Resurfacing',
		'Installation Services','Cabinet Painting','Pressure Washing',
		'Millwork','Sheetrock Repair','Other / Multiple Services'
	];

	async function handleSubmit(e) {
		e.preventDefault();
		status = 'sending';
		try {
			await new Promise(r => setTimeout(r, 1200));
			status = 'sent';
			name = email = phone = service = message = '';
		} catch(err) {
			status = 'error';
		}
	}
</script>

<section id="contact" class="contact section">
	<div class="container section-title" data-aos="fade-up">
		<h2>Contact Us</h2>
		<p>Tell us about your property and we'll get back to you within 24 hours</p>
	</div>

	<div class="container" data-aos="fade-up" data-aos-delay="100">
		<div class="row gy-4">

			<div class="col-lg-5">
				<div class="row gy-4">
					<div class="col-md-6">
						<div class="contact-card" data-aos="fade" data-aos-delay="200">
							<div class="contact-card-icon"><i class="bi bi-telephone-fill"></i></div>
							<h3>Call Us</h3>
							<p><a href="tel:+14482196669">+1 (448) 219-6669</a></p>
							<p><a href="tel:+18504852385">+1 (850) 485-2385</a></p>
							<p><a href="tel:+18503238103">+1 (850) 323-8103</a></p>
						</div>
					</div>
					<div class="col-md-6">
						<div class="contact-card" data-aos="fade" data-aos-delay="300">
							<div class="contact-card-icon"><i class="bi bi-envelope-fill"></i></div>
							<h3>Email Us</h3>
							<p><a href="mailto:customer@cordovaps.com">customer@cordovaps.com</a></p>
							<p><a href="mailto:scheduling@cordovaps.com">scheduling@cordovaps.com</a></p>
						</div>
					</div>
					<div class="col-md-6">
						<div class="contact-card" data-aos="fade" data-aos-delay="400">
							<div class="contact-card-icon"><i class="bi bi-clock-fill"></i></div>
							<h3>Open Hours</h3>
							<p>Monday – Friday</p>
							<p>8:00 AM – 6:00 PM</p>
						</div>
					</div>
					<div class="col-md-6">
						<div class="contact-card" data-aos="fade" data-aos-delay="500">
							<div class="contact-card-icon"><i class="bi bi-geo-alt-fill"></i></div>
							<h3>Location</h3>
							<p>Pensacola, Florida</p>
						</div>
					</div>
				</div>
			</div>

			<div class="col-lg-7">
				{#if status === 'sent'}
					<div class="sent-success">
						<div class="sent-icon-wrap"><i class="bi bi-check-circle-fill"></i></div>
						<h4>Message Sent!</h4>
						<p>Thank you! We'll get back to you within 24 hours.</p>
					</div>
				{:else}
					<form onsubmit={handleSubmit} class="contact-form-premium" data-aos="fade-up" data-aos-delay="200">
						<div class="row gy-3">
							<div class="col-md-6">
								<div class="input-wrap">
									<input type="text" bind:value={name} id="c-name" required />
									<label for="c-name">Your Name *</label>
								</div>
							</div>
							<div class="col-md-6">
								<div class="input-wrap">
									<input type="email" bind:value={email} id="c-email" required />
									<label for="c-email">Email Address *</label>
								</div>
							</div>
							<div class="col-md-6">
								<div class="input-wrap">
									<input type="tel" bind:value={phone} id="c-phone" />
									<label for="c-phone">Phone Number</label>
								</div>
							</div>
							<div class="col-md-6">
								<div class="input-wrap select-wrap">
									<select bind:value={service} id="c-service">
										<option value="">Service of Interest</option>
										{#each services as s}<option value={s}>{s}</option>{/each}
									</select>
								</div>
							</div>
							<div class="col-12">
								<div class="input-wrap">
									<textarea bind:value={message} id="c-msg" rows="5" required></textarea>
									<label for="c-msg">Tell us about your property...</label>
								</div>
							</div>
							<div class="col-12 text-center">
								{#if status === 'error'}
									<div class="error-message mb-2">Something went wrong. Please try again or call us directly.</div>
								{/if}
								<button type="submit" class="btn-submit-premium" disabled={status === 'sending'}>
									<span>{status === 'sending' ? 'Sending...' : 'Send Message'}</span>
									{#if status !== 'sending'}<i class="bi bi-send-fill"></i>{/if}
								</button>
							</div>
						</div>
					</form>
				{/if}
			</div>
		</div>
	</div>
</section>

<style>
.contact-card{
	background:#fff;border:1.5px solid rgba(107,107,40,0.1);
	border-radius:14px;padding:24px 20px;height:100%;min-height:160px;
	display:flex;flex-direction:column;
	transition:all .3s ease;
	box-shadow:0 4px 16px rgba(0,0,0,0.04);
}
.contact-card:hover{
	transform:translateY(-4px);
	border-color:rgba(107,107,40,0.3);
	box-shadow:0 12px 30px rgba(107,107,40,0.12);
}
.contact-card:hover .contact-card-icon{
	transform:scale(1.1) rotate(-5deg);
	background:linear-gradient(135deg,#6b6b28 0%,#4a4a1c 100%);
}
.contact-card:hover .contact-card-icon i{color:#fffcd9;}

.contact-card-icon{
	width:48px;height:48px;border-radius:12px;
	background:linear-gradient(135deg,#fffcd9 0%,#f5f0c0 100%);
	display:flex;align-items:center;justify-content:center;
	margin-bottom:14px;transition:all .3s ease;
}
.contact-card-icon i{font-size:22px;color:#6b6b28;transition:color .3s;}

.contact-card h3{
	font-size:15px;font-weight:700;color:#1a1a1a;margin-bottom:10px;
}
.contact-card p{
	font-size:13px;color:#555;margin:0 0 3px;line-height:1.5;
}
.contact-card a{color:inherit;text-decoration:none;transition:color .2s;}
.contact-card a:hover{color:#6b6b28;}

/* Premium form with floating labels */
.contact-form-premium{
	background:#fff;border-radius:16px;padding:32px 28px;
	box-shadow:0 8px 32px rgba(0,0,0,0.06);
	border:1px solid rgba(0,0,0,0.04);
}

.input-wrap{position:relative;}

.input-wrap input,
.input-wrap textarea,
.input-wrap select{
	width:100%;
	border:1.5px solid #e5e5e5;border-radius:10px;
	padding:16px 14px 14px;font-size:14px;
	background:#fff;transition:all .25s ease;
	font-family:inherit;
}
.input-wrap textarea{resize:vertical;min-height:120px;padding-top:20px;}
.input-wrap select{appearance:none;cursor:pointer;padding-right:40px;}

.select-wrap::after{
	content:'▾';position:absolute;right:16px;top:50%;transform:translateY(-50%);
	color:#6b6b28;font-size:12px;pointer-events:none;
}

.input-wrap label{
	position:absolute;top:16px;left:14px;
	font-size:14px;color:#999;pointer-events:none;
	transition:all .25s ease;background:#fff;padding:0 4px;
}

.input-wrap input:focus,
.input-wrap textarea:focus,
.input-wrap select:focus{
	border-color:#6b6b28;outline:none;
	box-shadow:0 0 0 4px rgba(107,107,40,0.1);
}

.input-wrap input:focus + label,
.input-wrap textarea:focus + label,
.input-wrap input:not(:placeholder-shown) + label,
.input-wrap textarea:not(:placeholder-shown) + label,
.input-wrap input:not(:invalid):not(:placeholder-shown) + label{
	top:-8px;font-size:11px;color:#6b6b28;font-weight:600;
}

/* Make labels float for filled inputs */
.input-wrap input:not(:placeholder-shown) ~ label,
.input-wrap textarea:not(:placeholder-shown) ~ label{
	top:-8px;font-size:11px;color:#6b6b28;font-weight:600;
}

.input-wrap input,
.input-wrap textarea{placeholder-shown: "";}

.btn-submit-premium{
	background:linear-gradient(135deg,#6b6b28 0%,#4a4a1c 100%);
	color:#fff;border:none;padding:15px 40px;border-radius:10px;
	font-weight:700;font-size:15px;cursor:pointer;
	transition:all .3s ease;display:inline-flex;align-items:center;gap:10px;
	box-shadow:0 10px 24px rgba(107,107,40,0.3);
	margin-top:10px;
}
.btn-submit-premium:hover{
	transform:translateY(-3px);
	box-shadow:0 15px 32px rgba(107,107,40,0.45);
}
.btn-submit-premium:disabled{opacity:0.7;cursor:not-allowed;transform:none;}
.btn-submit-premium i{transition:transform .25s;}
.btn-submit-premium:hover i{transform:translateX(4px);}

.sent-success{
	text-align:center;padding:60px 30px;background:#fff;
	border-radius:16px;box-shadow:0 8px 32px rgba(0,0,0,0.06);
}
.sent-icon-wrap{
	width:80px;height:80px;border-radius:50%;
	background:linear-gradient(135deg,#d1fae5 0%,#a7f3d0 100%);
	display:flex;align-items:center;justify-content:center;margin:0 auto 20px;
}
.sent-icon-wrap i{font-size:40px;color:#059669;}
.sent-success h4{font-size:22px;font-weight:700;margin-bottom:8px;color:#1a1a1a;}
.sent-success p{color:#666;margin:0;}

.error-message{color:#dc2626;font-size:14px;margin-bottom:10px;}
</style>
