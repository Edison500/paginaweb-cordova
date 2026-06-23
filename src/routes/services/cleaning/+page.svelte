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
		{ href: "/services/turnkey", icon: "bi-house-gear-fill", title: "Turnkey Services", desc: "Cleaning is one piece — bundle into a full turnkey unit turn.", img: '/assets/img/services/turnkey services/img2.jpeg' },
		{ href: "/services/installations", icon: "bi-wrench-adjustable", title: "Installation Services", desc: "Replace fixtures, appliances, or hardware while the unit is being cleaned and turned.", img: "/assets/img/services/Installations/img2.png" },
		{ href: "/services/carpet-cleaning", icon: "bi-droplet-fill", title: "Carpet Cleaning", desc: "Deep clean carpets after the unit clean for a fresher, move-in ready finish.", img: "/assets/img/services/Carpet Cleaning/img2.png" }
	];

	const faqs = [
		{ q: "What's included in a move-out clean?", a: "Our move-out clean covers all surfaces — kitchens, bathrooms, floors, baseboards, appliances, cabinets inside and out, windows, and fixtures. Every corner, every time." },
		{ q: "How long does a full unit clean take?", a: "A standard apartment unit typically takes 3-4 hours. Larger or heavily soiled units may require more time — we assess and confirm before starting." },
		{ q: "Do you offer recurring cleaning services?", a: "Yes. We offer scheduled recurring cleaning for common areas, occupied units, and ongoing maintenance programs for property management companies." },
		{ q: "Can you clean while painting or repairs are being done?", a: "We coordinate all services in the right sequence. Cleaning is scheduled to not conflict with active work — typically first and last in the process." },
	];
</script>

<ServicePage
	title="Cleaning"
	tagline="Professional Cleaning Services for Apartment Communities"
	heroImg="/assets/img/services/Cleaning/img2.png"
	heroPosition="center center"
	heroFlip={true}
	description="At Cordova Property Services, we offer professional cleaning solutions tailored to apartment communities, ensuring every unit meets move-in standards. We provide different levels of cleaning based on the condition of each unit — from a quick touch-up to a full move-out deep clean or a heavy clean for units with significant buildup."
	why="We understand that every unit is different. Our goal is to provide the right level of cleaning, every time, with reliable service and consistent results that keep your operations moving."
	{includes}
	{process}
	{related}
	{faqs}
/>