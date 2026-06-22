<script>
	import ServicePage from '$lib/components/pages/ServicePage.svelte';

	const includes = [
		"Bathtub resurfacing — stains, discoloration, chips, and wear",
		"Shower basin and wall refinishing",
		"Countertop resurfacing for kitchens and bathrooms",
		"Chip, crack, and stain repair prior to coating",
		"Durable, updated finish that enhances unit appearance",
		"Cost-effective alternative to full replacement",
		"Faster turnaround with minimal unit downtime",
		"Single and multi-unit pricing available",
	];

	const process = [
		{ title: "Surface Assessment", desc: "We inspect tubs and countertops for damage and identify any repairs needed before resurfacing begins." },
		{ title: "Preparation", desc: "Chips, cracks, and stains repaired first. All surfaces cleaned, etched, and properly prepped for maximum adhesion." },
		{ title: "Professional Application", desc: "High-quality coating applied in multiple layers for a smooth, durable, like-new finish." },
		{ title: "Cure & Delivery", desc: "Surface inspected after curing. Unit delivered clean and ready — with results that last." }
	];

	const related = [
		{ href: "/services/turnkey", icon: "bi-house-gear-fill", title: "Turnkey Services", desc: "Combine resurfacing with all other turn services in one coordinated visit.", img: "/assets/img/services/turnkey services/img.png" },
		{ href: "/services/cabinet-painting", icon: "bi-palette-fill", title: "Cabinet Painting", desc: "Complete the bathroom or kitchen refresh with professionally painted cabinets.", img: "/assets/img/services/Cabinet painting/img.png" },
		{ href: "/services/painting", icon: "bi-brush-fill", title: "Painting", desc: "A fresh coat of paint completes the full unit transformation.", img: "/assets/img/services/Painting/img.png" }
	];

	const faqs = [
		{ q: "What surfaces can you resurface?", a: "We resurface porcelain, fiberglass, and acrylic tubs, showers, and surrounds. We also handle counter and vanity resurfacing in the same visit when needed." },
		{ q: "How long does the resurfacing finish last?", a: "A professionally applied resurface lasts 5-10 years with normal rental use. We use commercial-grade coatings rated for high-turnover environments." },
		{ q: "When can the tub be used after resurfacing?", a: "The surface needs 24-48 hours to cure before water contact. We coordinate timing with your unit turn schedule to avoid delays." },
		{ q: "Is resurfacing worth it vs. replacement?", a: "For structurally sound tubs, resurfacing costs 70-80% less than replacement and delivers a like-new appearance. It's the standard choice for cost-conscious property managers." },
	];
</script>

<ServicePage
	title="Tub & Countertop Resurface"
	tagline="Restore Surfaces to Like-New — Without the Cost of Replacement"
	heroImg="/assets/img/services.jpg"
	description="At Cordova Property Services, we offer professional tub and countertop resurfacing services designed to restore the appearance of your units quickly and cost-effectively. Our resurfacing solutions are ideal for apartment communities looking to refresh worn, stained, or outdated surfaces — extending the life of existing fixtures while maintaining a clean, updated look."
	why="Replacing a bathtub or countertop is expensive and disruptive. Resurfacing achieves a visually identical result in a fraction of the time — saving hundreds per unit while delivering the clean appearance tenants expect."
	{includes}
	{process}
	{related}
	{faqs}
/>