<script>
	import { onMount } from 'svelte';

	let active = false;

	onMount(() => {
		const onScroll = () => {
			active = window.scrollY > 100;
		};

		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });

		return () => window.removeEventListener('scroll', onScroll);
	});

	function scrollToTop(event) {
		event.preventDefault();
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

<a
	href="#"
	id="scroll-top"
	class={`scroll-top d-flex align-items-center justify-content-center ${active ? 'active' : ''}`}
	onclick={scrollToTop}
>
	<i class="bi bi-arrow-up-short"></i>
</a>
