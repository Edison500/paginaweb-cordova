<script>
	import { onMount } from 'svelte';

	const partners = [
		'Westdale Asset Management',
		'RAM Partners, LLC',
		'Willow Bridge Management',
		'Integrity Rise Management',
		'Arlington Properties',
		'Vergence Multifamily Management',
		'HomeCorp Property Management',
		'Southeast Management',
		'Olympus Property Management',
		'Hamilton Point Property Management LLC',
		'FWB Housing Authority',
		'Multifamily Management Inc.',
		'Stratford Management',
		'Allegiant-Carter Management',
		'Henssler Property Management',
		'LMS - Real Estate',
		'DEL Development Corporation',
		'Sunchase Construction'
	];

	// Dividimos partners en 2 filas. Cada fila se duplica para loop seamless.
	const half = Math.ceil(partners.length / 2);
	const rows = [
		{
			items: [...partners.slice(0, half), ...partners.slice(0, half)],
			baseSpeed: -0.4 // negativo = scroll a la izquierda
		},
		{
			items: [...partners.slice(half), ...partners.slice(half)],
			baseSpeed: 0.4 // positivo = scroll a la derecha
		}
	];

	// Solo isDragging es reactivo (controla la clase CSS).
	// El resto se maneja por DOM directo para máximo performance (60fps sin overhead).
	let isDragging = $state([false, false]);

	const positions = [0, 0];
	const velocities = [0, 0];
	const trackWidths = [0, 0];
	let trackEls = [null, null];
	const dragData = [
		{ startX: 0, startPos: 0, lastX: 0, lastT: 0 },
		{ startX: 0, startPos: 0, lastX: 0, lastT: 0 }
	];
	let activeIdx = -1;
	let rafId;

	function wrap(pos, w) {
		if (w <= 0) return pos;
		while (pos <= -w) pos += w;
		while (pos > 0) pos -= w;
		return pos;
	}

	function applyTransform(i) {
		if (trackEls[i]) {
			trackEls[i].style.transform = `translate3d(${positions[i]}px, 0, 0)`;
		}
	}

	function tick() {
		for (let i = 0; i < 2; i++) {
			if (isDragging[i]) continue;
			const w = trackWidths[i];
			if (w <= 0) continue;

			// Decae la velocidad hacia la velocidad base (efecto momentum natural)
			const target = rows[i].baseSpeed;
			velocities[i] = velocities[i] * 0.92 + target * 0.08;

			positions[i] = wrap(positions[i] + velocities[i], w);
			applyTransform(i);
		}
		rafId = requestAnimationFrame(tick);
	}

	function startDrag(idx, x) {
		activeIdx = idx;
		isDragging[idx] = true;
		velocities[idx] = 0;
		dragData[idx] = {
			startX: x,
			startPos: positions[idx],
			lastX: x,
			lastT: performance.now()
		};
	}

	function moveDrag(x) {
		const idx = activeIdx;
		if (idx < 0 || !isDragging[idx]) return;
		const w = trackWidths[idx];
		const totalDx = x - dragData[idx].startX;
		positions[idx] = wrap(dragData[idx].startPos + totalDx, w);
		applyTransform(idx);

		// Calcula velocidad instantánea para el momentum al soltar
		const now = performance.now();
		const dx = x - dragData[idx].lastX;
		const dt = now - dragData[idx].lastT;
		if (dt > 0) {
			const v = (dx / dt) * 16; // px por frame (~16ms)
			velocities[idx] = velocities[idx] * 0.5 + v * 0.5;
		}
		dragData[idx].lastX = x;
		dragData[idx].lastT = now;
	}

	function endDrag() {
		if (activeIdx >= 0) {
			isDragging[activeIdx] = false;
		}
		activeIdx = -1;
	}

	onMount(() => {
		const measure = () => {
			for (let i = 0; i < 2; i++) {
				if (trackEls[i]) {
					trackWidths[i] = trackEls[i].scrollWidth / 2;
				}
			}
		};
		measure();

		// Arrancan a velocidad base
		velocities[0] = rows[0].baseSpeed;
		velocities[1] = rows[1].baseSpeed;

		applyTransform(0);
		applyTransform(1);

		rafId = requestAnimationFrame(tick);

		// Listeners globales — el drag sigue funcionando aunque el cursor salga del marquee
		const onWinMove = (e) => moveDrag(e.clientX);
		const onWinTouchMove = (e) => {
			if (activeIdx >= 0) {
				e.preventDefault();
				moveDrag(e.touches[0].clientX);
			}
		};
		const onWinUp = () => endDrag();

		window.addEventListener('mousemove', onWinMove);
		window.addEventListener('mouseup', onWinUp);
		window.addEventListener('touchmove', onWinTouchMove, { passive: false });
		window.addEventListener('touchend', onWinUp);
		window.addEventListener('touchcancel', onWinUp);
		window.addEventListener('resize', measure);

		return () => {
			cancelAnimationFrame(rafId);
			window.removeEventListener('mousemove', onWinMove);
			window.removeEventListener('mouseup', onWinUp);
			window.removeEventListener('touchmove', onWinTouchMove);
			window.removeEventListener('touchend', onWinUp);
			window.removeEventListener('touchcancel', onWinUp);
			window.removeEventListener('resize', measure);
		};
	});

	function onMouseDown(idx, e) {
		e.preventDefault();
		startDrag(idx, e.clientX);
	}

	function onTouchStart(idx, e) {
		startDrag(idx, e.touches[0].clientX);
	}
</script>

<section class="clients" aria-label="Trusted property management partners">
	<div class="container">
		<p class="kicker">Supporting property managers with reliable maintenance solutions</p>

		{#each rows as row, idx}
			<div
				class="marquee"
				class:dragging={isDragging[idx]}
				on:mousedown={(e) => onMouseDown(idx, e)}
				on:touchstart={(e) => onTouchStart(idx, e)}
				role="region"
				aria-label="Partner row {idx + 1}"
			>
				<div class="track" bind:this={trackEls[idx]}>
					{#each row.items as p, i}
						<span class="item">{p}</span>
						<span class="sep" aria-hidden="true">·</span>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	.clients {
		padding: 24px 0 28px;
		background: #fbfbf7;
		border-top: 1px solid rgba(39, 64, 38, 0.08);
		border-bottom: 1px solid rgba(39, 64, 38, 0.08);
		font-family: 'Plus Jakarta Sans', 'Inter', 'Segoe UI', sans-serif;
	}

	.container {
		width: min(1200px, calc(100% - 32px));
		margin: 0 auto;
	}

	.kicker {
		text-align: center;
		margin: 0 0 16px;
		font-size: 11px;
		font-weight: 700;
		letter-spacing: 2.4px;
		text-transform: uppercase;
		color: #6b7068;
	}

	.marquee {
		overflow: hidden;
		cursor: grab;
		user-select: none;
		-webkit-user-select: none;
		touch-action: pan-y;
		mask-image: linear-gradient(
			90deg,
			transparent 0,
			#000 8%,
			#000 92%,
			transparent 100%
		);
		-webkit-mask-image: linear-gradient(
			90deg,
			transparent 0,
			#000 8%,
			#000 92%,
			transparent 100%
		);
		padding: 5px 0;
	}

	.marquee.dragging {
		cursor: grabbing;
	}

	.marquee + .marquee {
		margin-top: 2px;
	}

	.track {
		display: inline-flex;
		align-items: center;
		gap: 22px;
		white-space: nowrap;
		will-change: transform;
		pointer-events: none; /* permite que el drag pase a través al marquee */
	}

	.item {
		font-size: 15px;
		font-weight: 600;
		color: #5a6358;
		letter-spacing: -0.005em;
	}

	.marquee:hover .item {
		color: #4a534a;
	}

	.marquee.dragging .item {
		color: #274026;
	}

	.sep {
		color: #b8bcb3;
		font-weight: 700;
		font-size: 14px;
	}

	@media (max-width: 640px) {
		.clients {
			padding: 20px 0 24px;
		}

		.kicker {
			font-size: 10px;
			letter-spacing: 2px;
			margin-bottom: 12px;
		}

		.item {
			font-size: 13.5px;
		}

		.track {
			gap: 18px;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.marquee {
			mask-image: none;
			-webkit-mask-image: none;
			overflow-x: auto;
			cursor: auto;
		}
		.track {
			transform: none !important;
		}
	}
</style>