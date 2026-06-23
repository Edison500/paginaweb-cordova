<script>
	import ServicePage from '$lib/components/pages/ServicePage.svelte';

	const includes = [
		"Drywall and sheetrock repairs — holes, cracks, water damage",
		"Texture matching and surface restoration",
		"Minor carpentry and trim repairs — baseboards, doors, frames",
		"Subfloor repairs and structural patching",
		"Caulking, sealing, and general maintenance fixes",
		"Preparation work prior to painting or cleaning",
		"Fast response times to minimize vacancy delays",
		"Clear communication with property managers throughout",
	];

	const process = [
		{ title: "Request & Assessment", desc: "Submit a repair request and we'll assess the full scope — documenting everything by room for transparency." },
		{ title: "Rapid Response", desc: "We confirm within 24 hours and arrive on the scheduled date. Repairs are often time-sensitive during unit turns." },
		{ title: "Professional Execution", desc: "Repairs completed to property standards — from minor fixes to full surface restoration, done right the first time." },
		{ title: "Sign-off & Documentation", desc: "Completed work documented with photos. We don't leave until the unit is ready for the next step." }
	];

	const related = [
		{ href: "/services/turnkey", icon: "bi-house-gear-fill", title: "Turnkey Services", desc: "Roll all repairs into a complete, coordinated unit turn.", img: '/assets/img/services/turnkey services/img2.jpeg' },
		{ href: "/services/sheetrock", icon: "bi-bricks", title: "Sheetrock Repair", desc: "Wall and ceiling damage repaired and ready for paint — same visit.", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=75" },
		{ href: "/services/installations", icon: "bi-wrench-adjustable", title: "Installation Services", desc: "Replace fixtures, appliances, or hardware while we're already on-site.", img: "/assets/img/services/Installations/img2.png" }
	];
	const faqs = [
		{ q: "What types of repairs do you handle?", a: "We handle doors, locks, windows, screens, drywall, flooring, plumbing fixtures, appliance hookups, cabinets, closets, and general handyman repairs — everything common in rental properties." },
		{ q: "Can you respond to emergency repair requests?", a: "Yes. We prioritize urgent repairs and can typically respond within 24 hours. For true emergencies affecting habitability, we make every effort to respond same day." },
		{ q: "Do you work directly with tenants for access scheduling?", a: "Yes. We can coordinate access directly with the tenant under your direction — minimizing disruptions to your team while keeping the work moving." },
		{ q: "How are repairs documented and invoiced?", a: "Every repair includes before and after photos uploaded with the completed work order. Invoicing is clean and itemized — submitted through your preferred platform." },
	];
</script>

<ServicePage
	title="Repairs"
	tagline="Reliable Repair Services for Apartment Communities"
	heroImg="/assets/img/services/Repairs/img2.png"
	heroPosition="center center"
	heroFlip={true}
	description="At Cordova Property Services, we provide reliable and efficient repair services tailored to apartment communities. Our team is experienced in handling a wide range of interior repairs — ensuring every issue is addressed quickly and professionally to meet your property standards and timelines."
	why="We don't just fix issues — we help prevent delays, reduce rework, and ensure every unit meets move-in standards. Fast response and quality workmanship keep your operations running smoothly."
	{includes}
	{process}
	{related}
	{faqs}
/>