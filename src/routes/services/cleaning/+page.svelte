<script>
	import ServicePage from '$lib/components/pages/ServicePage.svelte';

	const includes = [
		"Full Clean — complete move-out/move-in preparation",
		"Touch-Up Clean — refresh for lightly used units",
		"Heavy Clean — deep cleaning for units with heavy buildup",
		"Kitchen appliance cleaning (inside and out)",
		"Bathroom scrubbing and sanitizing",
		"Cabinets, floors, and all interior surfaces",
		"Pet hair, grease, and odor removal",
		"Tight turnaround times to support fast unit turns",
	];

	const process = [
		{ title: "Unit Assessment", desc: "We evaluate the condition of the unit to determine the right level of cleaning — Full, Touch-Up, or Heavy Clean." },
		{ title: "Targeted Execution", desc: "Our team works efficiently through every area: kitchen, bathrooms, appliances, floors, and all interior surfaces." },
		{ title: "Attention to Detail", desc: "Every corner, cabinet, and surface is addressed to meet move-in standards — no shortcuts." },
		{ title: "Ready for Handoff", desc: "Unit delivered clean, fresh, and ready for the next phase — inspection, showing, or move-in." }
	];

	const related = [
		{ href: "/services/pressure-washing", icon: "bi-water", title: "Pressure Washing", desc: "Extend the clean to exterior walkways and common areas.", img: "https://images.unsplash.com/photo-1501084817091-a4f3d1d19e07?w=600&q=75" },
		{ href: "/services/water-remediation", icon: "bi-droplet-fill", title: "Water Remediation", desc: "Water-damaged units need remediation before cleaning — we handle both.", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=75" },
		{ href: "/services/turnkey", icon: "bi-house-gear-fill", title: "Turnkey Services", desc: "Cleaning is one piece — bundle into a full turnkey unit turn.", img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=75" }
	];

	const faqs = [
		{ q: "What's included in a move-out clean?", a: "Our move-out clean covers all surfaces — kitchens, bathrooms, floors, baseboards, appliances, cabinets inside and out, windows, and fixtures. Every corner, every time." },
		{ q: "How long does a full unit clean take?", a: "A standard apartment unit typically takes 4-6 hours. Larger or heavily soiled units may require more time — we assess and confirm before starting." },
		{ q: "Do you offer recurring cleaning services?", a: "Yes. We offer scheduled recurring cleaning for common areas, occupied units, and ongoing maintenance programs for property management companies." },
		{ q: "Can you clean while painting or repairs are being done?", a: "We coordinate all services in the right sequence. Cleaning is scheduled to not conflict with active work — typically first and last in the process." },
	];
</script>

<ServicePage
	title="Cleaning"
	tagline="Professional Cleaning Services for Apartment Communities"
	heroImg="/assets/img/cta-bg.jpg"
	description="At Cordova Property Services, we offer professional cleaning solutions tailored to apartment communities, ensuring every unit meets move-in standards. We provide different levels of cleaning based on the condition of each unit — from a quick touch-up to a full move-out deep clean or a heavy clean for units with significant buildup."
	why="We understand that every unit is different. Our goal is to provide the right level of cleaning, every time, with reliable service and consistent results that keep your operations moving."
	{includes}
	{process}
	{related}
	{faqs}
/>
