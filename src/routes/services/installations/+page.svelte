<script>
	import ServicePage from '$lib/components/pages/ServicePage.svelte';

	const includes = [
		"Toilets and plumbing fixtures",
		"Sinks and faucets",
		"Refrigerators and appliances",
		"Interior doors and hardware",
		"Baseboards, trim, and millwork",
		"Shower glass and shower enclosures (mamparas)",
		"Cabinets and countertops",
		"A/C units and HVAC components",
	];

	const process = [
		{ title: "Scope Confirmation", desc: "We confirm the full installation scope and identify any materials or components needed in advance." },
		{ title: "Pre-Install Assessment", desc: "Technician verifies measurements, connections, and compatibility before work begins — no surprises." },
		{ title: "Professional Installation", desc: "Every item installed correctly, efficiently, and safely — up to industry standards and manufacturer specs." },
		{ title: "Testing & Sign-off", desc: "Everything tested and functioning before we leave. Work documented with photos for your records." }
	];

	const related = [
		{ href: "/services/repairs", icon: "bi-tools", title: "Repairs", desc: "Address related repair needs during the same on-site visit.", img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=75" },
		{ href: "/services/millwork", icon: "bi-door-closed-fill", title: "Millwork & Trim", desc: "Trim and finish carpentry to complete the look after installations.", img: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=600&q=75" },
		{ href: "/services/turnkey", icon: "bi-house-gear-fill", title: "Turnkey Services", desc: "Roll all installations into a complete, coordinated unit turnover.", img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=75" }
	];

	const faqs = [
		{ q: "What types of installations do you handle?", a: "We install appliances, flooring, lighting fixtures, ceiling fans, cabinet hardware, door hardware, bathroom fixtures, and more — all common rental property needs." },
		{ q: "Do you supply the materials or do we provide them?", a: "Both options work. We can source materials at competitive rates, or you can provide materials and we handle installation only. We confirm the approach before starting." },
		{ q: "Are your technicians licensed for electrical and plumbing installs?", a: "Our technicians handle standard rental-level installations. For work requiring licensed electrician or plumber sign-off, we coordinate with our licensed partners at no extra complexity to you." },
		{ q: "Can you do multiple unit installations at the same time?", a: "Yes. We're built for multi-unit property work and can run parallel crews across multiple units to minimize vacancy time across your portfolio." },
	];
</script>

<ServicePage
	title="Installation Services"
	tagline="Professional Installation & Replacement Services for Rental Properties"
	heroImg="/assets/img/features-light-2.jpg"
	description="At Cordova Property Services, we specialize in professional installation and replacement of essential fixtures and components for apartment communities. No matter the size of the job, our experienced, bilingual team ensures every installation is completed efficiently, safely, and up to industry standards — the first time."
	why="Incorrect installations void warranties and generate maintenance callbacks. One vendor who does it right saves you time, protects your investment, and keeps your tenants satisfied."
	{includes}
	{process}
	{related}
	{faqs}
/>
