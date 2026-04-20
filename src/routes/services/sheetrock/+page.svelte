<script>
	import ServicePage from '$lib/components/pages/ServicePage.svelte';

	const includes = [
		"Small holes, dents, and cracks",
		"Medium to large drywall repairs",
		"Water-damaged sheetrock removal and replacement",
		"Tape, seam, and joint repairs",
		"Texture matching — orange peel, knockdown, and flat",
		"Surface preparation and priming for painting",
		"Multi-unit volume service available",
		"Repairs virtually unnoticeable once completed",
	];

	const process = [
		{ title: "Damage Assessment", desc: "We document all damage by room, assess scope, and identify any moisture or structural issues before work begins." },
		{ title: "Preparation", desc: "Damaged areas cut clean and backed properly — the foundation for a repair that blends seamlessly with existing walls." },
		{ title: "Patching & Texture Matching", desc: "Compound applied in layers, sanded smooth, and texture-matched precisely to the existing surface." },
		{ title: "Priming & Handoff", desc: "All repaired areas primed and ready for paint — or painted in the same visit if needed." }
	];

	const related = [
		{ href: "/services/painting", icon: "bi-brush-fill", title: "Painting", desc: "Paint immediately after sheetrock repair — same team, same visit, no delays.", img: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&q=75" },
		{ href: "/services/water-remediation", icon: "bi-droplet-fill", title: "Water Remediation", desc: "Drywall damaged by water may require remediation before repair.", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=75" },
		{ href: "/services/turnkey", icon: "bi-house-gear-fill", title: "Turnkey Services", desc: "Sheetrock repair is always part of our complete unit turn process.", img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=75" }
	];

	const faqs = [
		{ q: "What types of drywall damage can you repair?", a: "We repair holes of all sizes, cracks, water damage, screw pops, impact damage, and full section replacements. We also texture-match to blend repairs seamlessly." },
		{ q: "Can you match the existing wall texture?", a: "Yes. Texture matching is a core part of our sheetrock service — we can replicate smooth, orange peel, knockdown, and other common textures so repairs are invisible." },
		{ q: "How long does sheetrock repair take to dry before painting?", a: "Compound typically takes 24 hours per coat. We coordinate our schedule to ensure walls are fully dry and primed before your painting crew or ours arrives." },
		{ q: "Do you also do the painting after sheetrock repair?", a: "Yes. We can bundle sheetrock repair and painting into one service visit — one crew, one invoice, no handoff delays between trades." },
	];
</script>

<ServicePage
	title="Sheetrock Repair"
	tagline="Professional Sheetrock & Drywall Repair for Apartment Communities"
	heroImg="/assets/img/features-light-2.jpg"
	description="At Cordova Property Services, we provide professional sheetrock and drywall repair services tailored specifically for apartment communities. Our team handles all types of drywall damage — from minor imperfections to larger repairs caused by water damage, wear and tear, or previous work — ensuring walls and ceilings are restored to a clean, seamless finish."
	why="Drywall repairs must blend perfectly with the existing surface. We focus on precision, proper prep, and exact texture matching so repairs are virtually unnoticeable — keeping your units ready for residents without delays."
	{includes}
	{process}
	{related}
	{faqs}
/>
