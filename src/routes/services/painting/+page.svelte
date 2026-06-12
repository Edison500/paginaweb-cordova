<script>
	import ServicePage from '$lib/components/pages/ServicePage.svelte';

	const includes = [
		"Full unit repaints — same color or color change",
		"Touch-up painting for occupied or vacant units",
		"Ceiling painting and stain coverage",
		"Wall repairs, patching, and texture matching",
		"Priming for stains, odors, or heavy wear",
		"Trim, doors, and baseboard painting",
		"Detailed prep work for a smooth, long-lasting finish",
		"Floor and fixture protection during the entire process",
	];

	const process = [
		{ title: "Property Walkthrough",     desc: "We assess the full scope, note repairs needed, and recommend the right paint finishes for your property standards." },
		{ title: "Surface Prep",             desc: "Holes filled, surfaces sanded, trim taped, and primer applied where needed — prep is what makes the difference." },
		{ title: "Professional Application", desc: "Walls, ceilings, trim, and doors painted with consistent technique, protecting all floors and fixtures throughout." },
		{ title: "Final Walkthrough",        desc: "Every surface inspected before we leave. We don't call a job done until it meets your standards." },
	];

	const faqs = [
		{ q: "How long does a full unit repaint take?",        a: "A standard apartment unit typically takes 1–2 days depending on size and condition. We can schedule multi-unit projects to minimize vacancy time." },
		{ q: "Do you work with occupied units?",               a: "Yes. We offer touch-up painting and occupied-unit service with minimal disruption to tenants. We coordinate access times directly with your team." },
		{ q: "What paint brands and finishes do you use?",     a: "We use commercial-grade paints suitable for rental properties — durable, washable finishes that hold up to tenant wear. We match your property standards or recommend options." },
		{ q: "Can you match existing colors?",                 a: "Absolutely. We can color-match existing walls or switch to a new color. We document all paint specs per unit for future reference." },
	];

	const related = [
		{ href: '/services/sheetrock',  icon: 'bi-bricks',          title: 'Sheetrock Repair',  desc: 'Patch and prep walls before painting for a flawless finish.', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=75' },
		{ href: '/services/cleaning',   icon: 'bi-droplet-fill',    title: 'Cleaning',           desc: 'Full move-out clean paired with the paint job.', img: '/assets/img/services/Cleaning/img.png' },
		{ href: '/services/turnkey',    icon: 'bi-house-gear-fill', title: 'Turnkey Services',   desc: 'Let us handle the full unit turn — painting included.', img: '/assets/img/services/turnkey services/img.png' },
	];
</script>

<ServicePage
	title="Painting"
	tagline="Professional interior painting for rental properties — fast, clean, and consistent across every unit."
	heroImg="/assets/img/services.jpg"
	description="Cordova Property Services delivers professional-grade interior painting for apartment communities across the Gulf Coast. Our painting crews are trained specifically for multifamily work — fast turnaround, consistent results, and minimal downtime between residents. Whether it's a full unit repaint, spot touch-ups, or a complete color change, we deliver results that look great and hold up through multiple tenancy cycles."
	why="Fresh paint is the single highest-impact improvement you can make to a vacant unit — and the fastest way to raise perceived value before a new tenant moves in. Properly primed and painted walls also reduce turnover costs in future cycles."
	{includes}
	{process}
	{faqs}
	{related}
/>