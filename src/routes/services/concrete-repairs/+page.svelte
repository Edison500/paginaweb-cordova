<script>
	import ServicePage from '$lib/components/pages/ServicePage.svelte';

	const includes = [
		"Sidewalk and walkway crack repair and resurfacing",
		"Parking lot and driveway crack filling and patching",
		"Pool deck concrete repair and resurfacing",
		"Staircase and step repair — chips, cracks, and broken edges",
		"Curb and gutter repair",
		"Spalling and surface deterioration restoration",
		"Concrete sealing for long-term durability",
		"Before-and-after documentation for property records",
	];

	const process = [
		{ title: "Assessment & Scope", desc: "We inspect all concrete surfaces — walkways, parking areas, steps, pool decks — and document the damage with photos before quoting." },
		{ title: "Surface Preparation", desc: "Damaged sections cleaned, old material removed, and surfaces prepped to ensure proper adhesion and a lasting repair." },
		{ title: "Repair & Resurfacing", desc: "Cracks filled, spalled areas patched, and surfaces resurfaced using commercial-grade materials matched to the existing concrete." },
		{ title: "Sealing & Delivery", desc: "Repaired areas sealed for durability. Property confirmed ready with documentation of all work completed." }
	];

	const related = [
		{ href: "/services/cleaning", icon: "bi-droplet-fill", title: "Cleaning", desc: "Schedule a full property clean alongside concrete repair work.", img: '/assets/img/services/Cleaning/img.png' },
		{ href: "/services/repairs", icon: "bi-tools", title: "Repairs", desc: "Interior repairs and concrete work often go hand-in-hand on full property rehabs.", img: "/assets/img/services/Repairs/img2.png" },
		{ href: "/services/turnkey", icon: "bi-house-gear-fill", title: "Turnkey Services", desc: "Exterior concrete repairs as part of a complete property turn and refresh.", img: '/assets/img/services/turnkey services/img2.jpeg' }
	];

	const faqs = [
		{ q: "What types of concrete damage can you repair?", a: "We handle cracks, spalling (surface flaking), broken edges on steps and curbs, sunken sections, and general surface deterioration. We assess each situation — some damage is repairable, some requires replacement, and we'll give you an honest recommendation." },
		{ q: "How long do concrete repairs last?", a: "Using commercial-grade materials and proper surface prep, repairs typically last 5–10 years or longer with normal use. Sealing after repair significantly extends the life of the patch and the surrounding surface." },
		{ q: "Can you repair concrete in parking lots and driveways?", a: "Yes. Parking lot crack filling and patching is one of our most common requests from multifamily properties. Deteriorated parking areas create liability risk and hurt curb appeal — both directly affect leasing." },
		{ q: "Do you work with HOAs and apartment communities?", a: "Yes. We regularly work with property management companies and HOAs on exterior concrete across the full community — walkways, steps, pool decks, and parking areas — often coordinating with other exterior work." },
		{ q: "How soon after repair can the area be used?", a: "Most concrete repairs are walkable within 24 hours and vehicle-ready within 48–72 hours depending on the repair type and weather conditions. We coordinate timing to minimize disruption to residents." },
	];
</script>

<ServicePage
	title="Concrete Repairs"
	tagline="Concrete Crack Repair, Patching & Resurfacing for Multifamily Properties"
	heroImg="/assets/img/features-light-1.jpg"
	description="Cracked sidewalks, deteriorating walkways, and damaged steps are more than an eyesore — they're a liability. Cordova Property Services handles concrete repairs for apartment communities and rental properties: crack filling, spalling repair, staircase restoration, parking lot patching, and pool deck resurfacing. We keep your exterior surfaces safe, functional, and well-maintained."
	why="Deteriorated concrete creates trip hazards, drives up liability exposure, and signals a poorly maintained property to prospective tenants. Proactive concrete repair costs a fraction of full replacement — and keeps your community looking professional."
	{includes}
	{process}
	{related}
	{faqs}
/>