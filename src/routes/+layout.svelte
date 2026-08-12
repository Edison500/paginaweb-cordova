<script>
	import { onMount } from 'svelte';
	import { afterNavigate } from '$app/navigation';
	import PageTracker from '$lib/components/analytics/PageTracker.svelte';


	let { children } = $props();

	const loadScript = (src) =>
		new Promise((resolve, reject) => {
			if (document.querySelector(`script[src="${src}"]`)) {
				resolve();
				return;
			}
			const script = document.createElement('script');
			script.src = src;
			script.defer = true;
			script.onload = () => resolve();
			script.onerror = () => reject(new Error(`Failed to load ${src}`));
			document.body.appendChild(script);
		});

	async function initVendors() {
		try {
			await loadScript('/assets/vendor/aos/aos.js');
			await loadScript('/assets/vendor/purecounter/purecounter_vanilla.js');

			window.AOS?.init({
				duration: 600,
				easing: 'ease-in-out',
				once: true,
				mirror: false
			});

			if (window.PureCounter) new window.PureCounter();
		} catch (error) {
			console.error(error);
		}
	}

	onMount(() => {
		initVendors();

		const unlisten = afterNavigate(() => {
			requestAnimationFrame(() => {
				window.AOS?.refreshHard?.();
				if (window.PureCounter) new window.PureCounter();
			});
		});

		return () => unlisten?.();
	});
</script>

<svelte:head>
	<title>Cordova Property Services</title>
	<link rel="icon" href="/assets/img/favicon.ico" sizes="any" />
	<link rel="icon" type="image/png" sizes="16x16" href="/assets/img/favicon-16x16.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="/assets/img/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="180x180" href="/assets/img/apple-touch-icon.png" />
	<link rel="apple-touch-icon" href="/assets/img/apple-touch-icon.png" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
		rel="stylesheet"
	/>
	<link rel="stylesheet" href="/assets/vendor/bootstrap/css/bootstrap.min.css" />
	<link rel="stylesheet" href="/assets/vendor/bootstrap-icons/bootstrap-icons.css" />
	<link rel="stylesheet" href="/assets/vendor/aos/aos.css" />
	<link rel="stylesheet" href="/assets/vendor/glightbox/css/glightbox.min.css" />
	<link rel="stylesheet" href="/assets/vendor/swiper/swiper-bundle.min.css" />
	<link rel="stylesheet" href="/assets/css/main.css" />

	{@html `<script type="application/ld+json">${JSON.stringify({
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Organization',
				'@id': 'https://www.cordovapropertyservices.com/#organization',
				name: 'Cordova Property Services',
				url: 'https://www.cordovapropertyservices.com/',
				logo: 'https://www.cordovapropertyservices.com/assets/img/logo.png',
				telephone: '+14482196669',
				email: 'customer@cordovaps.com',
				sameAs: [
					'https://www.facebook.com/profile.php?id=61575846174811',
					'https://www.instagram.com/cordovapropertyservices/',
					'https://www.linkedin.com/in/cordova-property-services-472b4836b/'
				],
				areaServed: [
					'Pensacola, FL', 'Gulf Breeze, FL', 'Navarre, FL', 'Fort Walton Beach, FL',
					'Crestview, FL', 'Milton, FL', 'Orange Beach, AL', 'Gulf Shores, AL',
					'Foley, AL', 'Daphne, AL', 'Mobile, AL', 'Biloxi, MS'
				]
			},
			{
				'@type': 'WebSite',
				'@id': 'https://www.cordovapropertyservices.com/#website',
				name: 'Cordova Property Services',
				url: 'https://www.cordovapropertyservices.com/',
				publisher: { '@id': 'https://www.cordovapropertyservices.com/#organization' }
			}
		]
	})}<\/script>`}
</svelte:head>


<PageTracker />

{@render children()}

