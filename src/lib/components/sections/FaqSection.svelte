<script>
	import { slide } from 'svelte/transition';

	const faqs = [
		{
			q: 'What types of properties do you service?',
			a: 'We specialize in multifamily apartment communities, including garden-style, townhomes, and large-scale residential properties.',
			icon: 'bi-buildings-fill',
			category: 'Services'
		},
		{
			q: 'Do you handle large-scale projects?',
			a: 'Yes. We handle everything from single-unit services to full property projects, including breezeways, staircases, pressure washing, and renovations.',
			icon: 'bi-arrows-angle-expand',
			category: 'Scope'
		},
		{
			q: 'Are you insured and able to work with POs?',
			a: 'Yes. We are fully insured and experienced working with property management systems, including PO-based workflows and invoicing platforms.',
			icon: 'bi-shield-fill-check',
			category: 'Billing'
		},
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
			<div class="col-lg-9" data-aos="fade-up" data-aos-delay="100">
				<div class="faq-container-premium">
					{#each faqs as faq, i}
						<button
							class="faq-item-premium"
							class:is-active={active === i}
							onclick={() => active = active === i ? -1 : i}
							aria-expanded={active === i}
						>
							<div class="faq-header">
								<div class="faq-icon">
									<i class="bi {faq.icon}"></i>
								</div>
								<div class="faq-heading">
									<span class="faq-category">{faq.category}</span>
									<h3>{faq.q}</h3>
								</div>
								<div class="faq-toggle-icon">
									<i class="bi bi-plus-lg"></i>
								</div>
							</div>
							{#if active === i}
								<div class="faq-answer" transition:slide={{ duration: 400, easing: t => t < 0.5 ? 4*t*t*t : 1-Math.pow(-2*t+2,3)/2 }}>
									<p>{faq.a}</p>
								</div>
							{/if}
						</button>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<style>
.faq-container-premium{margin-top:30px;display:flex;flex-direction:column;gap:14px;}

.faq-item-premium{
	width:100%;text-align:left;
	background:#fff;
	border:1.5px solid #eee;
	border-radius:16px;
	padding:0;
	cursor:pointer;
	transition:all .3s cubic-bezier(0.4,0,0.2,1);
	overflow:hidden;
	font-family:inherit;
}
.faq-item-premium:hover{
	border-color:rgba(107,107,40,0.3);
	box-shadow:0 6px 20px rgba(107,107,40,0.08);
}
.faq-item-premium.is-active{
	border-color:#6b6b28;
	box-shadow:0 10px 30px rgba(107,107,40,0.15);
	background:linear-gradient(135deg,#fff 0%,#fefdf2 100%);
}

.faq-header{
	display:flex;align-items:flex-start;gap:18px;
	padding:22px 26px;
}

.faq-icon{
	width:48px;height:48px;flex-shrink:0;
	border-radius:12px;
	background:linear-gradient(135deg,#fffcd9 0%,#f5f0c0 100%);
	display:flex;align-items:center;justify-content:center;
	transition:all .3s ease;
}
.faq-icon i{font-size:22px;color:#6b6b28;}
.faq-item-premium.is-active .faq-icon{
	background:linear-gradient(135deg,#6b6b28 0%,#4a4a1c 100%);
	transform:rotate(-6deg);
}
.faq-item-premium.is-active .faq-icon i{color:#fffcd9;}

.faq-heading{flex:1;min-width:0;text-align:left;}
.faq-category{
	display:inline-block;font-size:11px;
	color:#6b6b28;font-weight:700;
	text-transform:uppercase;letter-spacing:1.5px;
	margin-bottom:6px;
}
.faq-heading h3{
	font-size:16px;font-weight:700;margin:0;
	color:#1a1a1a;line-height:1.45;
	transition:color .3s;letter-spacing:-0.01em;
}
.faq-item-premium.is-active .faq-heading h3{color:#4a4a1c;}

.faq-toggle-icon{
	width:36px;height:36px;flex-shrink:0;
	border-radius:50%;
	background:#f5f0c0;
	display:flex;align-items:center;justify-content:center;
	transition:all .4s cubic-bezier(0.4,0,0.2,1);
	margin-top:4px;
}
.faq-toggle-icon i{font-size:16px;color:#6b6b28;transition:transform .4s;}
.faq-item-premium.is-active .faq-toggle-icon{
	background:linear-gradient(135deg,#6b6b28 0%,#4a4a1c 100%);
	transform:rotate(135deg);
}
.faq-item-premium.is-active .faq-toggle-icon i{color:#fffcd9;}

.faq-answer{
	padding:0 26px 24px 92px;
	overflow:hidden;
}
.faq-answer p{
	margin:0;font-size:14.5px;line-height:1.75;
	color:#555;
}

@media(max-width:640px){
	.faq-header{padding:18px 20px;gap:14px;}
	.faq-icon{width:42px;height:42px;}
	.faq-icon i{font-size:19px;}
	.faq-heading h3{font-size:15px;}
	.faq-toggle-icon{width:30px;height:30px;}
	.faq-answer{padding:0 20px 20px 76px;}
}
</style>
