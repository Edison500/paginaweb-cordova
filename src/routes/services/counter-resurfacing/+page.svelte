<script>
	import ServicePage from '$lib/components/pages/ServicePage.svelte';

	const includes = [
		"Countertop resurfacing for kitchens and bathrooms",
		"Stain, scratch, and damage repair prior to coating",
		"Edge repair and restoration",
		"Seamless color and durable finish application",
		"Multiple finish options — stone look, solid color",
		"Cost-effective alternative to full replacement",
		"Minimal downtime — ready for use quickly",
		"Multi-unit volume pricing available",
	];

	const process = [
		{ title: "Surface Assessment", desc: "We inspect countertops for damage, note repairs needed, and confirm the best finish for your units." },
		{ title: "Preparation", desc: "Edges repaired, surfaces thoroughly cleaned and prepped — the right prep is what makes the finish last." },
		{ title: "Professional Application", desc: "High-quality resurfacing material applied evenly for a smooth, sealed, updated finish." },
		{ title: "Curing & Delivery", desc: "Surface inspected after curing. Unit confirmed ready — countertops that look updated without the replacement cost." }
	];

	const related = [
		{ href: "/services/tub-resurfacing", icon: "bi-bucket-fill", title: "Tub & Shower Resurfacing", desc: "Combine kitchen and bath resurfacing in one efficient visit.", img: "/assets/img/services/tub resurface/img.png" },
		{ href: "/services/cabinet-painting", icon: "bi-palette-fill", title: "Cabinet Painting", desc: "Complete the kitchen refresh with professionally painted cabinets.", img: "/assets/img/services/Cabinet painting/img.png" },
		{ href: "/services/painting", icon: "bi-brush-fill", title: "Painting", desc: "A fresh coat of paint completes the full unit transformation.", img: "/assets/img/services/Painting/img.png" }
	];

	const faqs = [
		{ q: "What countertop materials can you resurface?", a: "We resurface laminate, Formica, and solid-surface countertops. Resurfacing works best on structurally sound surfaces — we assess condition before quoting." },
		{ q: "How long does resurfaced countertop last?", a: "With proper care, a professional resurface lasts 5-10 years in rental units. It's a durable, cost-effective alternative to full replacement." },
		{ q: "How long does the process take and when can the unit be used?", a: "The resurfacing process typically takes 1 day. Surfaces need 24-48 hours of cure time before regular use — we coordinate timing with your turn schedule." },
		{ q: "Is resurfacing really cheaper than replacement?", a: "Significantly. Resurfacing typically costs 60-80% less than full countertop replacement and delivers a like-new appearance that tenants immediately notice." },
	];
</script>

<ServicePage
	title="Countertop Resurface"
	tagline="Countertop Resurfacing for Apartment Communities"
	heroImg="/assets/img/features-light-1.jpg"
	description="At Cordova Property Services, our countertop resurfacing service revitalizes surfaces that show signs of age, damage, or heavy use — providing a durable, updated finish that enhances the overall look of kitchens and bathrooms. A cost-effective solution that delivers real visual impact without the disruption or expense of full replacement."
	why="Kitchen condition drives leasing decisions. Resurfacing delivers a fresh, clean surface that signals a well-maintained property — at a fraction of the cost of replacement and with faster turnaround."
	{includes}
	{process}
	{related}
	{faqs}
/>