<script>
	import { onMount } from 'svelte';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import ScrollTop from './ScrollTop.svelte';

	let { pageClass = '', children } = $props();

	onMount(() => {
		const previousClasses = Array.from(document.body.classList);
		document.body.className = pageClass;

		return () => {
			document.body.className = previousClasses.join(' ');
		};
	});
</script>

<Header />
{@render children()}
<Footer />
<ScrollTop />
