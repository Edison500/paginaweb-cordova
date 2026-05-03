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

	let inView = $state(false);
	let sectionRef;

	let sortedPartners = $derived([...partners].sort());

	function getInitials(name) {
		const stop = new Set([
			'LLC', 'INC', 'CORP', 'CORPORATION', 'CO', 'COMPANY',
			'GROUP', 'AND', 'THE', 'OF', 'A'
		]);

		const words = name
			.replace(/[-,.&/]/g, ' ')
			.replace(/[^a-zA-Z\s]/g, '')
			.split(/\s+/)
			.filter(Boolean)
			.filter((w) => !stop.has(w.toUpperCase()));

		const brandAcronym = words.find(
			(w) => w.length >= 2 && w.length <= 4 && w === w.toUpperCase()
		);

		if (brandAcronym) return brandAcronym;

		return words
			.slice(0, 2)
			.map((w) => w[0])
			.join('')
			.toUpperCase();
	}

	function colorFor(name) {
		const colors = [
			{ bg: '#e9f4e4' },
			{ bg: '#eef2ff' },
			{ bg: '#fff4df' },
			{ bg: '#fceaea' },
			{ bg: '#e8f7f2' }
		];

		let total = 0;
		for (const letter of name) total += letter.charCodeAt(0);

		return colors[total % colors.length];
	}

	onMount(() => {
		const io = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					inView = true;
					io.disconnect();
				}
			},
			{ threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
		);

		if (sectionRef) io.observe(sectionRef);

		return () => io.disconnect();
	});

	function handleCardMove(e) {
		const card = e.currentTarget;
		const rect = card.getBoundingClientRect();

		const x = (e.clientX - rect.left) / rect.width;
		const y = (e.clientY - rect.top) / rect.height;

		card.style.setProperty('--tx', `${(y - 0.5) * -4}deg`);
		card.style.setProperty('--ty', `${(x - 0.5) * 5}deg`);
		card.style.setProperty('--mx', `${x * 100}%`);
		card.style.setProperty('--my', `${y * 100}%`);
	}

	function handleCardLeave(e) {
		const card = e.currentTarget;

		card.style.setProperty('--tx', '0deg');
		card.style.setProperty('--ty', '0deg');
	}
</script>

<section
	bind:this={sectionRef}
	class="clients-section"
	class:in-view={inView}
	aria-labelledby="partners-title"
>
	<div class="container">
		<header class="header">
			<span class="eyebrow">Our Client Network</span>

			<h2 id="partners-title" class="title">
				Trusted by leading <span class="title-accent">property management teams</span>
			</h2>

			<p class="meta">
				<span class="meta-count">{partners.length}</span>
				<span class="meta-label">partners across the Gulf Coast</span>
			</p>
		</header>

		<div class="wall" role="list">
			{#each sortedPartners as p, i (p)}
				{@const c = colorFor(p)}

				<div
					role="listitem"
					class="card"
					style="--i: {i};"
					on:mousemove={handleCardMove}
					on:mouseleave={handleCardLeave}
				>
					<span class="card-mark" style="background:{c.bg};">{getInitials(p)}</span>
					<span class="card-name">{p}</span>
					<span class="card-spotlight" aria-hidden="true"></span>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.clients-section {
		background: linear-gradient(180deg, #ffffff 0%, #f7f8f4 100%);
		padding: 80px 0;
		overflow: visible;
		border-top: 1px solid rgba(39, 64, 38, 0.1);
		border-bottom: 1px solid rgba(39, 64, 38, 0.1);
		font-family: 'Plus Jakarta Sans', 'Inter', 'Segoe UI', sans-serif;
		opacity: 0;
		transform: translateY(24px);
		transition:
			opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1),
			transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
	}

	.clients-section.in-view {
		opacity: 1;
		transform: translateY(0);
	}

	.container {
		width: min(1180px, calc(100% - 32px));
		margin: 0 auto;
	}

	.header {
		text-align: center;
		max-width: 720px;
		margin: 0 auto 44px;
	}

	.eyebrow {
		display: inline-block;
		margin-bottom: 10px;
		font-size: 11px;
		font-weight: 800;
		letter-spacing: 2.4px;
		text-transform: uppercase;
		color: #6b7c6b;
	}

	.title {
		margin: 0 0 14px;
		font-size: clamp(20px, 2.4vw, 28px);
		line-height: 1.25;
		letter-spacing: -0.02em;
		color: #0f1f0c;
		font-weight: 700;
	}

	.title-accent {
		color: #4f7f45;
	}

	.meta {
		display: inline-flex;
		align-items: baseline;
		gap: 8px;
		margin: 0;
		padding: 6px 14px;
		background: #f3f5f3;
		border-radius: 999px;
		font-size: 13px;
		color: #4f7f45;
	}

	.meta-count {
		font-weight: 800;
		font-size: 14px;
		color: #0f1f0c; 
	}

	.meta-label {
		font-weight: 600;
		letter-spacing: 0.01em;
		color: #6b7068;
	}

	.wall {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 14px;
		perspective: 1000px;
	}

	.card {
		position: relative;
		display: inline-flex;
		align-items: center;
		gap: 12px;
		padding: 16px 20px;
		background: #ffffff;
		border: 1px solid rgba(39, 64, 38, 0.1);
		border-radius: 18px;
		text-align: left;
		overflow: hidden;
		box-shadow: 0 6px 18px rgba(15, 31, 12, 0.04);
		transform-style: preserve-3d;
		will-change: transform;
		opacity: 0;
		animation: card-in 0.55s cubic-bezier(0.22, 1, 0.36, 1) forwards;
		animation-play-state: paused;
		animation-delay: calc(var(--i, 0) * 35ms);
		transition:
			transform 0.28s ease,
			border-color 0.25s ease,
			box-shadow 0.28s ease,
			background 0.25s ease;
		--tx: 0deg;
		--ty: 0deg;
		--mx: 50%;
		--my: 50%;
	}

	.in-view .card {
		animation-play-state: running;
	}

	@keyframes card-in {
		from {
			opacity: 0;
		}

		to {
			opacity: 1;
		}
	}

	.card:hover {
		transform: translateY(-8px) rotateX(var(--tx)) rotateY(var(--ty)) scale(1.015);
		border-color: rgba(79, 127, 69, 0.4);
		box-shadow:
			0 18px 38px rgba(15, 31, 12, 0.1),
			0 6px 16px rgba(15, 31, 12, 0.06);
		background: #ffffff;
		z-index: 5;
	}

	.card-mark {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 42px;
		height: 42px;
		border-radius: 12px;
		color: #284323;
		font-weight: 900;
		font-size: 13px;
		letter-spacing: -0.03em;
		flex-shrink: 0;
		position: relative;
		z-index: 1;
	}

	.card-name {
		font-size: 14.5px;
		font-weight: 800;
		color: #243221;
		line-height: 1.3;
		letter-spacing: -0.005em;
		position: relative;
		z-index: 1;
	}

	.card-spotlight {
		pointer-events: none;
		position: absolute;
		inset: 0;
		border-radius: inherit;
		background: radial-gradient(
			320px circle at var(--mx) var(--my),
			rgba(79, 127, 69, 0.15),
			transparent 55%
		);
		opacity: 0;
		transition: opacity 0.25s ease;
	}

	.card:hover .card-spotlight {
		opacity: 1;
	}

	@media (max-width: 900px) {
		.wall {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 560px) {
		.clients-section {
			padding: 56px 0;
		}

		.wall {
			grid-template-columns: 1fr;
			gap: 10px;
		}

		.card {
			padding: 14px 16px;
		}

		.card-name {
			font-size: 14px;
		}
	}
</style>