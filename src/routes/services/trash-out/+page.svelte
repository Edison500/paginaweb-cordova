<script>
	import ServicePage from '$lib/components/pages/ServicePage.svelte';

	const includes = [
		"Complete removal of furniture, mattresses, and bulky items left behind",
		"Appliance haul-away — refrigerators, washers, dryers, microwaves",
		"Bag and remove all loose trash, food waste, and debris",
		"Abandoned clothing, personal items, and miscellaneous belongings",
		"Electronics and TV disposal",
		"Post-cleanout sweep — unit left broom-clean and ready for the next step",
		"Before-and-after photo documentation provided",
		"Responsible disposal — items sorted for donation, recycling, or disposal",
	];

	const process = [
		{ title: "Scope Confirmation", desc: "We assess the unit — in person or via photos — and confirm pricing before any work begins. No surprises on the invoice." },
		{ title: "Full Clear-Out", desc: "Our crew removes everything: furniture, appliances, trash, and debris. We handle all the heavy lifting so your maintenance team doesn't have to." },
		{ title: "Sweep & Document", desc: "Unit is swept clean after removal. Before-and-after photos provided so you have documentation for your records." },
		{ title: "Ready for Next Step", desc: "Unit is clear and ready for cleaning, repairs, or turnover work to begin immediately — minimizing your vacancy time." }
	];

	const related = [
		{ href: "/services/cleaning", icon: "bi-droplet-fill", title: "Cleaning", desc: "Once the unit is cleared, our cleaning team comes in for a full move-out deep clean.", img: "https://images.unsplash.com/photo-1527515545081-5db817172677?w=600&q=75" },
		{ href: "/services/carpet-cleaning", icon: "bi-water", title: "Carpet Cleaning", desc: "After trash out, bring carpets back to life with professional extraction cleaning.", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=75" },
		{ href: "/services/turnkey", icon: "bi-house-gear-fill", title: "Turnkey Services", desc: "Combine trash out with all turn services for a fully coordinated unit flip.", img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=75" }
	];

	const faqs = [
		{ q: "What items do you remove during a trash out?", a: "We remove furniture (sofas, beds, dressers, tables), appliances (refrigerators, washers, dryers), mattresses, electronics, bagged trash, food waste, and any other items left behind by the previous tenant. If you're not sure whether we take it, just ask — we handle most items." },
		{ q: "Do you need someone present on-site?", a: "No. As long as we have key or lockbox access to the unit, we can complete the trash out independently. We'll send you before-and-after photos once the work is done." },
		{ q: "How quickly can you respond to an urgent trash out?", a: "We prioritize trash outs because we know every vacant day costs money. In most cases we can schedule within 24–48 hours. Contact us with your timeline and we'll do everything we can to accommodate it." },
		{ q: "What happens to the items you remove?", a: "We sort for responsible disposal — items in good condition are donated or recycled where possible. We follow local disposal regulations and don't just dump everything in a landfill." },
		{ q: "Can you handle eviction cleanouts?", a: "Yes. We work with property managers on post-eviction cleanouts regularly. We're professional, discreet, and experienced handling these situations without adding stress to an already difficult process." },
	];
</script>

<ServicePage
	title="Trash Out"
	tagline="Fast Unit Clear-Outs for Property Managers — We Handle Everything"
	heroImg="/assets/img/features-light-3.jpg"
	description="When a tenant leaves — or is removed — the unit often can't be cleaned, repaired, or shown until everything is cleared out. Cordova's trash out service removes furniture, appliances, trash, and abandoned belongings fast, so your turnover process can start immediately. We're built for property managers: reliable scheduling, no-hassle access requirements, before-and-after documentation, and responsible disposal."
	why="Every day a unit sits full of junk is a day it can't be cleaned, repaired, or leased. A fast, professional trash out is the first step in getting a vacant unit back on the market — and your maintenance team shouldn't be wasting time moving mattresses and hauling refrigerators."
	{includes}
	{process}
	{related}
	{faqs}
/>