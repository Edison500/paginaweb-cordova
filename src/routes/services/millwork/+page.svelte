<script>
	import ServicePage from '$lib/components/pages/ServicePage.svelte';

	const includes = [
		"Baseboard and trim installation — new or replacement",
		"Interior door replacement and repair",
		"Window and door casing repairs and upgrades",
		"Decorative molding — crown, chair rail, and more",
		"Quarter-round and shoe molding",
		"Closet rod and shelf systems",
		"Caulking and finish work for clean, tight seams",
		"Paint-ready delivery or painted in the same visit",
	];

	const process = [
		{ title: "Scope Assessment", desc: "We walk the unit, document all trim and millwork needs, and take measurements — so nothing is missed." },
		{ title: "Material Preparation", desc: "Materials pre-cut and staged for efficient installation. No wasted time on-site." },
		{ title: "Precision Installation", desc: "Trim installed level, nailed, and finished with caulk for clean, sharp seams throughout the unit." },
		{ title: "Paint Ready or Painted", desc: "All millwork sanded and primed for handoff — or painted in the same visit to keep your timeline on track." }
	];

	const related = [
		{ href: "/services/painting", icon: "bi-brush-fill", title: "Painting", desc: "Paint all millwork and trim freshly after installation for a perfect, polished finish.", img: "/assets/img/services/Painting/img.png" },
		{ href: "/services/sheetrock", icon: "bi-bricks", title: "Sheetrock Repair", desc: "Repair walls before installing new trim for a truly flawless result.", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=75" },
		{ href: "/services/installations", icon: "bi-wrench-adjustable", title: "Installation Services", desc: "Hardware, fixtures, and structural installations completed in the same visit.", img: "/assets/img/services/Installations/img.png" }
	];

	const faqs = [
		{ q: "What millwork services do you provide?", a: "We install and repair baseboards, door casings, window trim, crown molding, chair rails, and closet systems. We also match existing profiles for seamless repairs." },
		{ q: "Can you match existing trim styles in older properties?", a: "Yes. We carry a wide range of standard profiles and can source custom trim to match existing millwork — important for keeping units consistent across your property." },
		{ q: "How long does millwork installation take per unit?", a: "A standard baseboard and trim install for a 2-bedroom unit typically takes 1 day. We confirm scope and timeline during the walkthrough." },
		{ q: "Do you paint or finish the millwork after installation?", a: "Yes. We sand, prime, and paint all installed trim as part of the service — delivered finished and ready for the next tenant." },
	];
</script>

<ServicePage
	title="Millwork & Trim"
	tagline="Millwork & Trim Services for Apartment Communities"
	heroImg="/assets/img/features-light-1.jpg"
	description="At Cordova Property Services, we provide professional millwork and trim services designed to enhance the appearance, durability, and overall value of your units. Whether during unit turns, renovations, or ongoing maintenance, our team delivers clean, precise, and reliable results — because details matter."
	why="Well-installed trim and finishes make a significant difference in the final presentation of any unit. Clean baseboards, crisp door frames, and properly installed molding give units a finished, cared-for quality that stands out to every prospective tenant."
	{includes}
	{process}
	{related}
	{faqs}
/>