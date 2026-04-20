<script>
	import ServicePage from '$lib/components/pages/ServicePage.svelte';

	const includes = [
		"Trash-out and unit clearing",
		"Deep move-out cleaning",
		"Fresh interior painting",
		"Sheetrock and drywall repairs",
		"Tub and countertop resurfacing",
		"Hardware and fixture replacement",
		"Millwork and trim repairs",
		"Final inspection with photo documentation",
	];

	const process = [
		{ title: "Walkthrough & Assessment", desc: "We inspect the unit within 24 hours and build a complete scope of work — nothing missed, nothing assumed." },
		{ title: "Customized Proposal", desc: "You receive a detailed, itemized proposal. One team, one point of contact, no hidden fees." },
		{ title: "Coordinated Execution", desc: "Our team works through every service in the right sequence — cleaning, repairs, painting, resurfacing — on the agreed schedule." },
		{ title: "Quality Sign-off", desc: "We walk the unit with you before calling it done. Every detail confirmed and photo-documented." }
	];

	const related = [
		{ href: "/services/painting", icon: "bi-brush-fill", title: "Painting", desc: "Interior painting is always part of a complete unit turn.", img: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&q=75" },
		{ href: "/services/cleaning", icon: "bi-droplet-fill", title: "Cleaning", desc: "Move-out deep cleans that leave every surface spotless and tenant-ready.", img: "https://images.unsplash.com/photo-1527515545081-5db817172677?w=600&q=75" },
		{ href: "/services/repairs", icon: "bi-tools", title: "Repairs", desc: "All repairs handled in the same turn — no separate vendors, no delays.", img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=75" }
	];

	const faqs = [
		{ q: "How quickly can you start a unit turn?", a: "We can typically start within 24-48 hours of receiving the work order. We do an initial walkthrough within 24 hours and have a full proposal ready the same day." },
		{ q: "Do you handle the full turn or just parts of it?", a: "We handle everything — trash-out, cleaning, painting, repairs, resurfacing, millwork, and final documentation. One team, one invoice, no coordination on your end." },
		{ q: "How do you handle unexpected repairs found mid-turn?", a: "We contact you immediately with photos and a cost estimate before proceeding. No surprises on the invoice." },
		{ q: "Do you provide photo documentation?", a: "Yes. Before, during, and after photos are uploaded for every job — available on request or submitted through your platform." },
	];
</script>

<ServicePage
	title="Turnkey Services"
	tagline="Full Unit Turns — One Call, One Team, Done Right"
	heroImg="/assets/img/services.jpg"
	description="At Cordova Property Services, our turnkey service handles every aspect of the unit turn — trash-out, cleaning, painting, repairs, resurfacing, and more — coordinated by a single team. Every vacant day costs you money. We move fast, communicate clearly, and get your unit back on the market faster."
	why="Juggling multiple vendors slows everything down. One team that handles the full turn cuts your timeline significantly, reduces back-and-forth, and ensures every service is completed to a consistent standard."
	{includes}
	{process}
	{related}
	{faqs}
/>