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

	const half = Math.ceil(partners.length / 2);

	const rows = [
		{
			items: [...partners.slice(0, half), ...partners.slice(0, half), ...partners.slice(0, half)],
			baseSpeed: -0.4
		},
		{
			items: [...partners.slice(half), ...partners.slice(half), ...partners.slice(half)],
			baseSpeed: 0.4
		}
	];

	let isDragging = $state([false, false]);

	const positions = [0, 0];
	const velocities = [0, 0];
	const trackWidths = [0, 0];
	let trackEls = [null, null];

	let activeIdx = -1;
	let rafId;

	const DRAG_THRESHOLD = 7;
	const MAX_MOMENTUM = 5;
	const DECAY_RATE = 0.06;
	const SNAP_EPSILON = 0.004;

	const dragData = [
		{ startX: 0, startPos: 0, lastX: 0, lastT: 0, cursorVel: 0, hasMoved: false },
		{ startX: 0, startPos: 0, lastX: 0, lastT: 0, cursorVel: 0, hasMoved: false }
	];

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
			const w = trackWidths[i];
			if (w <= 0) continue;

			if (!isDragging[i]) {
				const target = rows[i].baseSpeed;
				const diff = target - velocities[i];

				if (Math.abs(diff) < SNAP_EPSILON) {
					velocities[i] = target;
				} else {
					velocities[i] += diff * DECAY_RATE;
				}

				positions[i] = wrap(positions[i] + velocities[i], w);
				applyTransform(i);
			}
		}

		rafId = requestAnimationFrame(tick);
	}

	function startPointer(idx, x) {
		activeIdx = idx;

		dragData[idx] = {
			startX: x,
			startPos: positions[idx],
			lastX: x,
			lastT: performance.now(),
			cursorVel: rows[idx].baseSpeed,
			hasMoved: false
		};
	}

	function movePointer(x) {
		const idx = activeIdx;
		if (idx < 0) return;

		const data = dragData[idx];
		const w = trackWidths[idx];
		const totalDx = x - data.startX;

		if (!data.hasMoved && Math.abs(totalDx) < DRAG_THRESHOLD) {
			return;
		}

		if (!data.hasMoved) {
			data.hasMoved = true;
			isDragging[idx] = true;
		}

		positions[idx] = wrap(data.startPos + totalDx, w);
		applyTransform(idx);

		const now = performance.now();
		const dx = x - data.lastX;
		const dt = now - data.lastT;

		if (dt > 0) {
			const instantV = (dx / dt) * 16;
			data.cursorVel = data.cursorVel * 0.65 + instantV * 0.35;
		}

		data.lastX = x;
		data.lastT = now;
	}

	function endPointer() {
		if (activeIdx >= 0) {
			const idx = activeIdx;
			const data = dragData[idx];

			if (data.hasMoved) {
				let v = data.cursorVel || rows[idx].baseSpeed;

				v = Math.max(-MAX_MOMENTUM, Math.min(MAX_MOMENTUM, v));

				if (Math.abs(v) < Math.abs(rows[idx].baseSpeed)) {
					v = rows[idx].baseSpeed;
				}

				velocities[idx] = v;
				isDragging[idx] = false;
			}
		}

		activeIdx = -1;
	}

	onMount(() => {
		const measure = () => {
			for (let i = 0; i < 2; i++) {
				if (trackEls[i]) {
					trackWidths[i] = trackEls[i].scrollWidth / 3;
				}
			}

			positions[0] = wrap(positions[0], trackWidths[0]);

			if (positions[1] === 0 && trackWidths[1] > 0) {
				positions[1] = -trackWidths[1];
			} else {
				positions[1] = wrap(positions[1], trackWidths[1]);
			}

			applyTransform(0);
			applyTransform(1);
		};

		measure();

		velocities[0] = rows[0].baseSpeed;
		velocities[1] = rows[1].baseSpeed;

		rafId = requestAnimationFrame(tick);

		const onMove = (e) => movePointer(e.clientX);
		const onUp = () => endPointer();

		const onTouchMove = (e) => {
			if (activeIdx >= 0) {
				movePointer(e.touches[0].clientX);
			}
		};

		window.addEventListener('mousemove', onMove);
		window.addEventListener('mouseup', onUp);
		window.addEventListener('touchmove', onTouchMove, { passive: true });
		window.addEventListener('touchend', onUp);
		window.addEventListener('touchcancel', onUp);
		window.addEventListener('resize', measure);

		return () => {
			cancelAnimationFrame(rafId);
			window.removeEventListener('mousemove', onMove);
			window.removeEventListener('mouseup', onUp);
			window.removeEventListener('touchmove', onTouchMove);
			window.removeEventListener('touchend', onUp);
			window.removeEventListener('touchcancel', onUp);
			window.removeEventListener('resize', measure);
		};
	});

	function onMouseDown(idx, e) {
		e.preventDefault();
		startPointer(idx, e.clientX);
	}

	function onTouchStart(idx, e) {
		startPointer(idx, e.touches[0].clientX);
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
					{#each row.items as p}
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
		pointer-events: none;
		transform: translate3d(0, 0, 0);
		backface-visibility: hidden;
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