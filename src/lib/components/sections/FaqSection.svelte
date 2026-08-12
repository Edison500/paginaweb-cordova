<script>
	import { slide } from 'svelte/transition';

	const faqs = [
		{ q: 'How quickly do you respond to inquiries?',       a: 'We respond to all inquiries within 24 business hours — often same day. For urgent requests, call us directly.',                                                                                     icon: 'bi-clock-fill',           category: 'Response' },
		{ q: 'Is the estimate really free?',                   a: 'Yes, completely free and no obligation. We provide a detailed, itemized estimate so you know exactly what you\'re getting.',                                                                             icon: 'bi-tag-fill',             category: 'Pricing' },
		{ q: 'Do you work with property management software?', a: 'Yes — we\'re set up in RealPage, Yardi/VendorCafe, AppFolio, NetVendor, and more. Zero onboarding needed from your side.',                                                                              icon: 'bi-laptop-fill',          category: 'Integrations' },
		{ q: 'What areas do you serve?',                       a: 'We serve 12 cities: Pensacola, Gulf Breeze, Navarre, Fort Walton, Crestview, Milton, Orange Beach, Gulf Shores, Foley, Daphne, Mobile, and Biloxi, Mississippi.',                                                             icon: 'bi-geo-alt-fill',         category: 'Service Areas' },
		{ q: 'What types of properties do you service?',       a: 'We specialize in multifamily apartment communities, including garden-style, townhomes, and large-scale residential properties.',                                                                          icon: 'bi-buildings-fill',       category: 'Services' },
		{ q: 'Do you handle large-scale projects?',            a: 'Yes. We handle everything from single-unit services to full property projects, including breezeways, staircases, pressure washing, and renovations.',                                                    icon: 'bi-arrows-angle-expand',  category: 'Scope' },
		{ q: 'Are you insured and able to work with POs?',     a: 'Yes. We are fully insured and experienced working with property management systems, including PO-based workflows and invoicing platforms.',                                                              icon: 'bi-shield-fill-check',    category: 'Billing' },
	];

	let active = $state(0);
</script>

<section id="faq" class="faq section">
	<div class="container">
		<div class="container section-title" data-aos="fade-up">
			<h2>Frequently Asked Questions</h2>
			<p>Answers to common questions about our apartment services, processes, and project capabilities.</p>
		</div>
		<div class="row justify-content-center">
			<div class="col-lg-11" data-aos="fade-up" data-aos-delay="100">
				<div class="faq-two-col">
					<div class="faq-col">
						{#each faqs.filter((_, i) => i % 2 === 0) as faq, i}
							{@const realIndex = i * 2}
							<button
								class="faq-item-premium"
								class:is-active={active === realIndex}
								onclick={() => active = active === realIndex ? -1 : realIndex}
								aria-expanded={active === realIndex}
							>
								<div class="faq-header">
									<div class="faq-icon"><i class="bi {faq.icon}"></i></div>
									<div class="faq-heading">
										<span class="faq-category">{faq.category}</span>
										<h3>{faq.q}</h3>
									</div>
									<div class="faq-toggle-icon"><i class="bi bi-plus-lg"></i></div>
								</div>
								{#if active === realIndex}
									<div class="faq-answer" transition:slide={{ duration: 300 }}>
										<p>{faq.a}</p>
									</div>
								{/if}
							</button>
						{/each}
					</div>
					<div class="faq-col">
						{#each faqs.filter((_, i) => i % 2 !== 0) as faq, i}
							{@const realIndex = i * 2 + 1}
							<button
								class="faq-item-premium"
								class:is-active={active === realIndex}
								onclick={() => active = active === realIndex ? -1 : realIndex}
								aria-expanded={active === realIndex}
							>
								<div class="faq-header">
									<div class="faq-icon"><i class="bi {faq.icon}"></i></div>
									<div class="faq-heading">
										<span class="faq-category">{faq.category}</span>
										<h3>{faq.q}</h3>
									</div>
									<div class="faq-toggle-icon"><i class="bi bi-plus-lg"></i></div>
								</div>
								{#if active === realIndex}
									<div class="faq-answer" transition:slide={{ duration: 300 }}>
										<p>{faq.a}</p>
									</div>
								{/if}
							</button>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
.faq-container-premium{margin-top:30px;display:flex;flex-direction:column;gap:8px;}

.faq-item-premium{
	width:100%;text-align:left;
	background:#fff;
	border:1.5px solid #eee;
	border-radius:12px;
	padding:0;
	cursor:pointer;
	transition:all .3s cubic-bezier(0.4,0,0.2,1);
	overflow:hidden;
	font-family:inherit;
}
.faq-item-premium:hover{
	border-color:rgba(107,107,40,0.3);
	box-shadow:0 4px 14px rgba(107,107,40,0.08);
}
.faq-item-premium.is-active{
	border-color:#6b6b28;
	box-shadow:0 6px 20px rgba(107,107,40,0.12);
	background:linear-gradient(135deg,#fff 0%,#fefdf2 100%);
}

.faq-header{
	display:flex;align-items:center;gap:14px;
	padding:14px 18px;
}

.faq-icon{
	width:36px;height:36px;flex-shrink:0;
	border-radius:9px;
	background:linear-gradient(135deg,#fffcd9 0%,#f5f0c0 100%);
	display:flex;align-items:center;justify-content:center;
	transition:all .3s ease;
}
.faq-icon i{font-size:16px;color:#6b6b28;}
.faq-item-premium.is-active .faq-icon{
	background:linear-gradient(135deg,#6b6b28 0%,#4a4a1c 100%);
	transform:rotate(-6deg);
}
.faq-item-premium.is-active .faq-icon i{color:#fffcd9;}

.faq-heading{flex:1;min-width:0;text-align:left;}
.faq-category{
	display:inline-block;font-size:10px;
	color:#6b6b28;font-weight:700;
	text-transform:uppercase;letter-spacing:1.5px;
	margin-bottom:2px;
}
.faq-heading h3{
	font-size:14px;font-weight:700;margin:0;
	color:#1a1a1a;line-height:1.35;
	transition:color .3s;letter-spacing:-0.01em;
}
.faq-item-premium.is-active .faq-heading h3{color:#4a4a1c;}

.faq-toggle-icon{
	width:28px;height:28px;flex-shrink:0;
	border-radius:50%;
	background:#f5f0c0;
	display:flex;align-items:center;justify-content:center;
	transition:all .4s cubic-bezier(0.4,0,0.2,1);
}
.faq-toggle-icon i{font-size:13px;color:#6b6b28;transition:transform .4s;}
.faq-item-premium.is-active .faq-toggle-icon{
	background:linear-gradient(135deg,#6b6b28 0%,#4a4a1c 100%);
	transform:rotate(135deg);
}
.faq-item-premium.is-active .faq-toggle-icon i{color:#fffcd9;}

.faq-answer{
	padding:0 18px 14px 68px;
	overflow:hidden;
}
.faq-answer p{
	margin:0;font-size:13px;line-height:1.65;
	color:#555;
}

@media(max-width:640px){
	.faq-header{padding:12px 14px;gap:10px;}
	.faq-icon{width:30px;height:30px;}
	.faq-icon i{font-size:14px;}
	.faq-heading h3{font-size:13px;}
	.faq-toggle-icon{width:24px;height:24px;}
	.faq-answer{padding:0 14px 12px 54px;}
}

.faq-two-col{
	display:grid;
	grid-template-columns:1fr 1fr;
	gap:8px;
	align-items:start;
}
.faq-col{
	display:flex;
	flex-direction:column;
	gap:8px;
}
@media(max-width:768px){
	.faq-two-col{grid-template-columns:1fr;}
}
</style>