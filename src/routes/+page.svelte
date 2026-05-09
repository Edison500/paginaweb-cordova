<script>
	import SiteShell          from '$lib/components/layout/SiteShell.svelte';
	import HeroSection        from '$lib/components/sections/HeroSection.svelte';
	import TrustBar           from '$lib/components/sections/TrustBar.svelte';
	import ClientsStrip       from '$lib/components/sections/ClientsStrip.svelte';
	import ServicesSection    from '$lib/components/sections/ServicesSection.svelte';
	import FeaturesSection    from '$lib/components/sections/FeaturesSection.svelte';
	import PlatformsSection   from '$lib/components/sections/PlatformsSection.svelte';
	import TestimonialsSection from '$lib/components/sections/TestimonialsSection.svelte';
	import FaqSection         from '$lib/components/sections/FaqSection.svelte';
	import CtaSection         from '$lib/components/sections/CtaSection.svelte';
	import ContactSection     from '$lib/components/sections/ContactSection.svelte';
</script>

<svelte:head>
	<title>Cordova Property Services | Apartment Maintenance Pensacola FL</title>
	<meta name="description" content="One-stop maintenance for rental properties — painting, repairs, cleaning, turnkey unit turns and more. Fast, reliable, built for property managers." />
</svelte:head>

<SiteShell pageClass="index-page">
	<main class="main">
		<HeroSection />
		<TrustBar />
		<ClientsStrip />
		<ServicesSection />
		<PlatformsSection />
		<FeaturesSection />
		<TestimonialsSection />
		<FaqSection />
		<CtaSection />
		<ContactSection />
	</main>
</SiteShell>