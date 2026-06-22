<script>
	import { onMount } from 'svelte';
	import { afterNavigate } from '$app/navigation';

	const VISITOR_KEY = 'cordova_visitor_id';
	let lastTrackKey = '';
	let lastTrackAt = 0;

	function getVisitorId() {
		try {
			let visitorId = localStorage.getItem(VISITOR_KEY);
			if (!visitorId) {
				visitorId = crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(36).slice(2)}`;
				localStorage.setItem(VISITOR_KEY, visitorId);
			}
			return visitorId;
		} catch {
			return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
		}
	}

	function shouldSkip(path) {
		return !path || path.startsWith('/admin') || path.startsWith('/api');
	}

	async function trackPage(path) {
		if (shouldSkip(path)) return;

		const now = Date.now();
		const trackKey = `${path}|${document.title}`;
		if (trackKey === lastTrackKey && now - lastTrackAt < 1500) return;

		lastTrackKey = trackKey;
		lastTrackAt = now;

		try {
			await fetch('/api/track', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				keepalive: true,
				body: JSON.stringify({
					path,
					title: document.title,
					visitorId: getVisitorId(),
					referrer: document.referrer || '',
					screenWidth: window.innerWidth,
					language: navigator.language || '',
					timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || ''
				})
			});
		} catch (error) {
			console.debug('Page tracking skipped:', error);
		}
	}

	onMount(() => {
		const unlisten = afterNavigate(({ to }) => {
			trackPage(to?.url?.pathname || window.location.pathname);
		});

		setTimeout(() => trackPage(window.location.pathname), 0);

		return () => unlisten?.();
	});
</script>
