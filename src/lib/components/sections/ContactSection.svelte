<script>
	let firstName = $state('');
	let lastName = $state('');
	let email = $state('');
	let phone = $state('');
	let service = $state('');
	let propertyAddress = $state('');
	let message = $state('');
	let status = $state('');
	let errorMessage = $state('');

	const services = [
		'Turnkey Services','Painting','General Repairs','Cleaning',
		'Tub & Shower Resurfacing','Counter Resurfacing',
		'Installation Services','Cabinet Painting',
		'Millwork','Sheetrock Repair','Other / Multiple Services'
	];

	function isValidEmail(value) {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
	}

	function validateForm() {
		if (!service) return 'Please select the service you need.';
		if (firstName.trim().length < 2) return 'Please enter your first name.';
		if (lastName.trim().length < 2) return 'Please enter your last name.';
		if (!isValidEmail(email)) return 'Please enter a valid email address.';
		if (phone.trim() && phone.replace(/\D/g, '').length < 7) return 'Please enter a valid phone number or leave it blank.';
		if (message.trim().length < 10) return 'Please tell us a little more about your property.';
		return '';
	}

	async function handleSubmit(e) {
		e.preventDefault();
		if (status === 'sending') return;

		const validationError = validateForm();
		if (validationError) {
			errorMessage = validationError;
			status = 'error';
			return;
		}

		status = 'sending';
		errorMessage = '';

		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					serviceNeeded: service,
					firstName,
					lastName,
					email,
					phone,
					propertyAddress,
					message,
					sourcePage: typeof window !== 'undefined' ? window.location.pathname : 'website'
				})
			});

			const result = await response.json().catch(() => ({}));

			if (!response.ok || !result.ok) {
				throw new Error(result.message || 'Could not send your request.');
			}

			if (!result.requestId) {
				throw new Error('The request was not saved. Please try again or call us directly.');
			}

			status = 'sent';
			firstName = lastName = email = phone = service = propertyAddress = message = '';
		} catch(err) {
			console.error(err);
			errorMessage = err?.message || 'Something went wrong. Please try again or call us directly.';
			status = 'error';
		}
	}
</script>

<section id="contact" class="contact section">
	<div class="container section-title" data-aos="fade-up">
		<h2>Need a Unit Move-In Ready Fast?</h2>
		<p>Tell us what your property needs. One Cordova team handles painting, cleaning, repairs, turnovers and more — and gets back to you within 24 hours.</p>
	</div>

	<div class="container" data-aos="fade-up" data-aos-delay="100">
		<div class="row gy-4">

			<div class="col-lg-5">
				<div class="row gy-4">
					<div class="col-md-6">
						<div class="contact-card" data-aos="fade" data-aos-delay="200">
							<div class="contact-card-head">
								<div class="contact-card-icon"><i class="bi bi-telephone-fill"></i></div>
								<h3>Call Us</h3>
							</div>
							<p><a href="tel:+14482196669">+1 (448) 219-6669</a></p>
							<p><a href="tel:+18504852385">+1 (850) 485-2385</a></p>
							<p><a href="tel:+18503238103">+1 (850) 323-8103</a></p>
						</div>
					</div>
					<div class="col-md-6">
						<div class="contact-card" data-aos="fade" data-aos-delay="300">
							<div class="contact-card-head">
								<div class="contact-card-icon"><i class="bi bi-envelope-fill"></i></div>
								<h3>Email Us</h3>
							</div>
							<p><a href="mailto:customer@cordovaps.com">customer@cordovaps.com</a></p>
							<p><a href="mailto:scheduling@cordovaps.com">scheduling@cordovaps.com</a></p>
						</div>
					</div>
					<div class="col-md-6">
						<div class="contact-card" data-aos="fade" data-aos-delay="400">
							<div class="contact-card-head">
								<div class="contact-card-icon"><i class="bi bi-clock-fill"></i></div>
								<h3>Open Hours</h3>
							</div>
							<p>Monday – Friday</p>
							<p>8:00 AM – 5:00 PM</p>
						</div>
					</div>
					<div class="col-md-6">
						<div class="contact-card" data-aos="fade" data-aos-delay="500">
							<div class="contact-card-head">
								<div class="contact-card-icon"><i class="bi bi-geo-alt-fill"></i></div>
								<h3>Location</h3>
							</div>
							<p>Pensacola, Florida</p>
						</div>
					</div>
				</div>
			</div>

			<div class="col-lg-7">
				{#if status === 'sent'}
					<div class="sent-success">
						<div class="sent-icon-wrap"><i class="bi bi-check-circle-fill"></i></div>
						<h4>Request Sent!</h4>
						<p>Thank you! We'll get back to you within 24 hours.</p>
					</div>
				{:else}
					<form onsubmit={handleSubmit} class="contact-form-premium" data-aos="fade-up" data-aos-delay="200">
						<div class="row gy-3">
							<div class="col-12">
								<div class="field-wrap select-wrap">
									<label for="c-service">Service Needed</label>
									<select bind:value={service} id="c-service" required>
										<option value="">Select a service...</option>
										{#each services as s}<option value={s}>{s}</option>{/each}
									</select>
								</div>
							</div>

							<div class="col-md-6">
								<div class="field-wrap">
									<label for="c-first">First Name</label>
									<input type="text" bind:value={firstName} id="c-first" placeholder="John" minlength="2" maxlength="100" required />
								</div>
							</div>
							<div class="col-md-6">
								<div class="field-wrap">
									<label for="c-last">Last Name</label>
									<input type="text" bind:value={lastName} id="c-last" placeholder="Doe" minlength="2" maxlength="100" required />
								</div>
							</div>

							<div class="col-md-6">
								<div class="field-wrap">
									<label for="c-email">Email</label>
									<input type="email" bind:value={email} id="c-email" placeholder="you@example.com" maxlength="180" required />
								</div>
							</div>
							<div class="col-md-6">
								<div class="field-wrap">
									<label for="c-phone">Phone</label>
									<input type="tel" bind:value={phone} id="c-phone" placeholder="(555) 000-0000" maxlength="80" />
								</div>
							</div>

							<div class="col-12">
								<div class="field-wrap">
									<label for="c-address">Property Address</label>
									<input type="text" bind:value={propertyAddress} id="c-address" placeholder="123 Main St, Pensacola, FL 32501" maxlength="300" />
								</div>
							</div>

							<div class="col-12">
								<div class="field-wrap">
									<label for="c-msg">Tell Us About Your Property</label>
									<textarea bind:value={message} id="c-msg" rows="5" placeholder="Describe your property, the services you need, urgency, number of units, and anything else helpful." minlength="10" maxlength="4000" required></textarea>
								</div>
							</div>

							<div class="col-12 text-center">
								{#if status === 'error'}
									<div class="error-message mb-2">{errorMessage || 'Something went wrong. Please try again or call us directly.'}</div>
								{/if}
								<button type="submit" class="btn-submit-premium" disabled={status === 'sending'}>
									<span>{status === 'sending' ? 'Sending...' : 'Request Free Quote'}</span>
									{#if status !== 'sending'}<i class="bi bi-arrow-right"></i>{/if}
								</button>
								<p class="form-call-note">Prefer to talk now? <a href="tel:+14482196669">Call (448) 219-6669</a></p>
							</div>
						</div>
					</form>
				{/if}
			</div>
		</div>
	</div>
</section>

<style>
.hp-field{position:absolute!important;left:-9999px!important;width:1px!important;height:1px!important;overflow:hidden!important;opacity:0!important;pointer-events:none!important;}
.contact-card{
	background:#fff;border:1.5px solid rgba(107,107,40,0.1);
	border-radius:14px;padding:24px 20px;height:100%;min-height:170px;
	display:flex;flex-direction:column;align-items:center;text-align:center;
	transition:all .3s ease;box-shadow:0 4px 16px rgba(0,0,0,0.04);
}
.contact-card:hover{
	transform:translateY(-4px);border-color:rgba(107,107,40,0.3);
	box-shadow:0 12px 30px rgba(107,107,40,0.12);
}
.contact-card-head{display:flex;align-items:center;justify-content:center;gap:12px;margin-bottom:14px;}
.contact-card-icon{
	width:48px;height:48px;border-radius:12px;
	background:linear-gradient(135deg,#fffcd9 0%,#f5f0c0 100%);
	display:flex;align-items:center;justify-content:center;transition:all .3s ease;
}
.contact-card:hover .contact-card-icon{transform:scale(1.08);background:linear-gradient(135deg,#6b6b28 0%,#4a4a1c 100%);}
.contact-card:hover .contact-card-icon i{color:#fffcd9;}
.contact-card-icon i{font-size:22px;color:#6b6b28;transition:color .3s;}
.contact-card h3{font-size:16px;font-weight:800;color:#1a1a1a;margin:0;}
.contact-card p{font-size:13px;color:#555;margin:0 0 6px;line-height:1.5;}
.contact-card a{color:inherit;text-decoration:none;transition:color .2s;}
.contact-card a:hover{color:#6b6b28;}

.contact-form-premium{
	background:#fff;border-radius:18px;padding:32px 28px;
	box-shadow:0 8px 32px rgba(0,0,0,0.06);
	border:1px solid rgba(0,0,0,0.04);
}
.field-wrap label{
	display:block;font-size:11px;font-weight:800;text-transform:uppercase;
	letter-spacing:1.6px;color:#4a4a1c;margin-bottom:8px;
}
.field-wrap input,
.field-wrap textarea,
.field-wrap select{
	width:100%;border:1.5px solid #e5e5e5;border-radius:12px;
	padding:15px 14px;font-size:14px;background:#fff;transition:all .25s ease;
	font-family:inherit;color:#1a1a1a;
}
.field-wrap textarea{resize:vertical;min-height:125px;}
.field-wrap select{appearance:none;cursor:pointer;padding-right:40px;}
.field-wrap input::placeholder,.field-wrap textarea::placeholder{color:#9ca3af;}
.select-wrap{position:relative;}
.select-wrap::after{
	content:'▾';position:absolute;right:16px;bottom:16px;color:#6b6b28;
	font-size:12px;pointer-events:none;
}
.field-wrap input:focus,
.field-wrap textarea:focus,
.field-wrap select:focus{
	border-color:#6b6b28;outline:none;box-shadow:0 0 0 4px rgba(107,107,40,0.1);
}
.btn-submit-premium{
	background:linear-gradient(135deg,#6b6b28 0%,#4a4a1c 100%);
	color:#fff;border:none;padding:15px 42px;border-radius:999px;
	font-weight:800;font-size:15px;cursor:pointer;
	transition:all .3s ease;display:inline-flex;align-items:center;gap:10px;
	box-shadow:0 10px 24px rgba(107,107,40,0.3);margin-top:10px;
}
.btn-submit-premium:hover{transform:translateY(-3px);box-shadow:0 15px 32px rgba(107,107,40,0.45);}
.btn-submit-premium:disabled{opacity:0.7;cursor:not-allowed;transform:none;}
.form-call-note{font-size:13px;color:#777;margin:14px 0 0;}
.form-call-note a{color:#6b6b28;font-weight:800;text-decoration:none;}
.form-call-note a:hover{text-decoration:underline;}
.sent-success{text-align:center;padding:60px 30px;background:#fff;border-radius:16px;box-shadow:0 8px 32px rgba(0,0,0,0.06);}
.sent-icon-wrap{width:80px;height:80px;border-radius:50%;background:linear-gradient(135deg,#d1fae5 0%,#a7f3d0 100%);display:flex;align-items:center;justify-content:center;margin:0 auto 20px;}
.sent-icon-wrap i{font-size:40px;color:#059669;}
.sent-success h4{font-size:22px;font-weight:700;margin-bottom:8px;color:#1a1a1a;}
.sent-success p{color:#666;margin:0;}
.error-message{color:#dc2626;font-size:14px;margin-bottom:10px;}
</style>
