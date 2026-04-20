<script>
	import ServicePage from '$lib/components/pages/ServicePage.svelte';

	const includes = [
		"Emergency moisture assessment",
		"Industrial drying equipment deployment",
		"Mold prevention treatment",
		"Damaged drywall removal and replacement",
		"Subfloor drying and repair",
		"Affected area sanitization",
		"Post-drying inspection and documentation",
		"Insurance documentation support",
	];

	const process = [
		{ title: "Emergency Call", desc: "Call us any time — water damage is our top priority" },
		{ title: "Rapid Assessment", desc: "We arrive within hours to assess moisture extent and source" },
		{ title: "Drying & Containment", desc: "Industrial dehumidifiers and air movers deployed immediately" },
		{ title: "Repair & Restoration", desc: "Once dry, drywall, flooring, and surfaces are fully restored" }
	];

	const related = [
		{ href: "/services/repairs", icon: "bi-tools", title: "Repairs", desc: "Repair damaged flooring and fixtures after remediation.", img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=75" },
		{ href: "/services/cleaning", icon: "bi-droplet-fill", title: "Cleaning", desc: "Deep sanitizing clean after water damage restoration.", img: "https://images.unsplash.com/photo-1527515545081-5db817172677?w=600&q=75" },
		{ href: "/services/sheetrock", icon: "bi-bricks", title: "Sheetrock Repair", desc: "Replace water-damaged drywall with clean sheetrock.", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=75" }
	];

	const faqs = [
		{ q: "How quickly can you respond to water damage?", a: "We prioritize water damage calls and aim to respond within 24 hours. Fast response is critical — every hour of delay increases mold risk and structural damage." },
		{ q: "What does water remediation include?", a: "Our service includes water extraction, drying with commercial dehumidifiers, mold treatment, removal of damaged materials, and documentation for insurance purposes." },
		{ q: "Do you work with insurance claims?", a: "Yes. We document everything — photos, moisture readings, scope of work — to support your insurance claim. We're experienced working alongside adjusters on multifamily claims." },
		{ q: "Can you handle the repairs after remediation is complete?", a: "Yes. Once remediation is done, we can handle all restoration work — sheetrock replacement, painting, flooring, and finishing — under one invoice." },
	];
</script>

<ServicePage
	title="Water Remediation"
	tagline="Emergency Water Damage Response — Fast, Professional, Complete"
	heroImg="/assets/img/features-light-3.jpg"
	description="Water damage is a race against time. The longer moisture sits, the more structural damage and mold risk you face. Our water remediation team responds fast — assessing, drying, and restoring your property before the problem compounds."
	why="Water damage unaddressed for 24–48 hours leads to mold, structural weakening, and tenant health complaints. Fast remediation protects your liability and your investment."
	{includes}
	{process}
	{related}
	{faqs}
/>