<script>
	import ServicePage from '$lib/components/pages/ServicePage.svelte';

	const includes = [
		"Hot water extraction (steam cleaning) — deep removes embedded dirt and allergens",
		"Pre-treatment of stains: pet urine, food, beverage, and traffic-lane buildup",
		"Odor neutralization treatment — eliminates odors at the fiber level",
		"Carpet deodorizing and conditioning after cleaning",
		"Spot treatment for high-wear entry areas and hallways",
		"Common area and hallway carpet cleaning",
		"Upholstery cleaning available as add-on",
		"Volume pricing for multi-unit communities",
	];

	const process = [
		{ title: "Inspection & Pre-Treatment", desc: "We inspect each carpet for stains, pet damage, and high-traffic wear — then pre-treat problem areas before cleaning begins." },
		{ title: "Deep Extraction Clean", desc: "Hot water extraction lifts embedded dirt, allergens, and residues from fibers — the most effective method for rental-grade carpets." },
		{ title: "Stain & Odor Treatment", desc: "Stubborn stains and pet odors treated with professional-grade neutralizers that eliminate the source, not just the smell." },
		{ title: "Dry & Deliver", desc: "Carpets dry within a few hours. We confirm the unit is clean and move-in ready before leaving the property." }
	];

	const related = [
		{ href: "/services/turnkey", icon: "bi-house-gear-fill", title: "Turnkey Services", desc: "Bundle carpet cleaning with all other turn services — one call, one invoice.", img: '/assets/img/services/turnkey services/img2.jpeg' },
		{ href: "/services/installations", icon: "bi-wrench-adjustable", title: "Installation Services", desc: "Replace fixtures, appliances, or hardware while the unit is being cleaned and turned.", img: "/assets/img/services/Installations/img.png" },
		{ href: "/services/cleaning", icon: "bi-droplet-fill", title: "Cleaning", desc: "Pair carpet cleaning with a full unit deep clean for a completely move-in ready apartment.", img: '/assets/img/services/Cleaning/img.png' }
	];

	const faqs = [
		{ q: "What cleaning method do you use?", a: "We use hot water extraction (HWE), also called steam cleaning — the industry standard for rental properties. It removes deep-embedded dirt, allergens, pet dander, and bacteria that surface-level cleaning misses. It's the most thorough method for high-turnover environments." },
		{ q: "How long does carpet cleaning take and when can the unit be shown?", a: "Most units take 1–2 hours. Carpets are dry and ready to walk on within 2–4 hours depending on airflow and humidity. We coordinate timing with your turn schedule so the unit is ready for showings the same day." },
		{ q: "Can you remove pet urine odors and stains?", a: "Yes. We apply enzyme-based pre-treatment that breaks down urine at the molecular level — eliminating odor at the source. For severe pet damage, we assess during inspection and give you an honest recommendation on whether cleaning or replacement is the better call." },
		{ q: "Do you offer volume pricing for multiple units?", a: "Yes. We work with property management companies on volume schedules and offer preferred pricing for recurring or multi-unit work. Contact us to discuss a service plan for your community." },
		{ q: "Can you clean carpets in common areas and hallways?", a: "Absolutely. Common areas, lobbies, and hallways are high-traffic and benefit most from regular professional cleaning. We schedule common area work to minimize disruption to residents." },
	];
</script>

<ServicePage
	title="Carpet Cleaning"
	tagline="Professional Carpet Cleaning for Apartment Turnovers & Communities"
	heroImg="/assets/img/services/Carpet Cleaning/img2.png"
	heroPosition="center center"
	heroFlip={true}
	description="Stained, worn, or odor-affected carpets are one of the top reasons prospective tenants reject a unit. Cordova's professional carpet cleaning service uses hot water extraction to deep-clean rental carpets — removing embedded dirt, allergens, pet odors, and stains that surface cleaning can't reach. We work on the timeline property managers need: fast turnaround, reliable results, and volume pricing for communities."
	why="Carpet condition is one of the first things a prospective tenant notices. A professionally cleaned carpet signals a well-maintained property — and for many units, it's the difference between a fast lease and a vacancy that lingers. Professional extraction also extends carpet life, saving on replacement costs."
	{includes}
	{process}
	{related}
	{faqs}
/>