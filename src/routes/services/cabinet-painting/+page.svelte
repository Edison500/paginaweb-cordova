<script>
	import ServicePage from '$lib/components/pages/ServicePage.svelte';

	const includes = [
		"Proper cleaning and degreasing of all surfaces",
		"Sanding and surface preparation for strong adhesion",
		"High-quality primer application when needed",
		"Professional-grade paint for a smooth, durable finish",
		"Detailed attention to edges, corners, and hardware areas",
		"Surrounding areas fully protected during the process",
		"Cost-effective alternative to full cabinet replacement",
		"Fast turnaround — typically 1–2 days per unit",
	];

	const process = [
		{ title: "Cleaning & Degreasing", desc: "All cabinet surfaces thoroughly cleaned and degreased to ensure proper adhesion and a lasting finish." },
		{ title: "Sanding & Priming", desc: "Surfaces sanded smooth, high-quality primer applied where needed to seal and prepare for paint." },
		{ title: "Professional Application", desc: "Professional-grade paint applied for a smooth, durable finish — detailed attention to every edge, corner, and hardware area." },
		{ title: "Final Inspection", desc: "Every cabinet inspected and surrounding areas cleaned up. Unit delivered ready for move-in." }
	];

	const related = [
		{ href: "/services/counter-resurfacing", icon: "bi-square-fill", title: "Counter Resurfacing", desc: "Complete the kitchen transformation with refinished countertops in the same visit.", img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=75" },
		{ href: "/services/painting", icon: "bi-brush-fill", title: "Painting", desc: "Full interior painting to complement the fresh new cabinets.", img: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&q=75" },
		{ href: "/services/tub-resurfacing", icon: "bi-bucket-fill", title: "Tub & Shower Resurfacing", desc: "Extend the refresh to bathrooms and maximize the unit's appeal.", img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=75" }
	];

	const faqs = [
		{ q: "Do you paint cabinets in place or remove them?", a: "We paint cabinets in place using professional spray equipment with full surface protection. Doors are removed, sprayed separately for the best finish, and reinstalled." },
		{ q: "What kind of finish do you use on cabinets?", a: "We use commercial-grade lacquer or conversion varnish finishes — harder and more durable than standard latex, designed to withstand rental kitchen use." },
		{ q: "How long does cabinet painting take?", a: "Most kitchen cabinet jobs take 1-2 days. We set up containment to protect the rest of the unit throughout the process." },
		{ q: "Is cabinet painting a good alternative to replacement?", a: "Absolutely. Cabinet painting costs 80% less than full replacement and can completely transform a kitchen. It's one of the highest-ROI upgrades for rental units." },
	];
</script>

<ServicePage
	title="Cabinet Painting"
	tagline="Professional Cabinet Painting for Apartment Communities"
	heroImg="/assets/img/features-light-3.jpg"
	description="At Cordova Property Services, we provide professional cabinet painting services designed to transform kitchens and bathrooms without the cost of full cabinet replacement. Our process is ideal for apartment communities looking to update the look of their units quickly, efficiently, and cost-effectively — while maintaining a clean, modern appearance."
	why="Cabinet painting is a great solution for refreshing outdated finishes, covering wear and tear, and improving the overall presentation of a unit before move-in. We focus on quality, efficiency, and consistency so your units stand out and stay move-in ready."
	{includes}
	{process}
	{related}
	{faqs}
/>
