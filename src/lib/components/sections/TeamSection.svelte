<script>
	import { onMount } from 'svelte';

	const team = [
		{
			id: 1,
			img: '/assets/img/team/team-boss.jpg',
			name: 'Sarah Cordova',
			role: 'CEO & Founder',
			icon: 'bi-star-fill',
			desc: 'Founded Cordova Property Services with a vision to deliver reliable, high-quality maintenance solutions for multifamily communities across the region.',
			tags: ['Founder', 'Multifamily', 'Strategic Vision'],
			linkedin: '#',
			instagram: '#',
			boss: true
		},
		{
			id: 2,
			img: '/assets/img/team/team-1.jpg',
			name: 'Marcus Reed',
			role: 'Operations Manager',
			icon: 'bi-diagram-3-fill',
			desc: 'Oversees day-to-day field operations, ensuring every unit turn runs on schedule and meets our quality standards.',
			tags: ['10+ Years', 'Operations', 'Field Logistics'],
			linkedin: '#',
			instagram: '#',
			boss: false
		},
		{
			id: 3,
			img: '/assets/img/team/team-3.jpg',
			name: 'James Patterson',
			role: 'Maintenance Technician',
			icon: 'bi-tools',
			desc: 'Handles repairs, installations, and sheetrock work — a key part of our turnkey unit turn process.',
			tags: ['HVAC Certified', 'Plumbing', 'Sheetrock'],
			linkedin: '#',
			instagram: '#',
			boss: false
		},
		{
			id: 4,
			img: '/assets/img/team/team-7.jpeg',
			name: 'Gustavo A. Chirinos',
			role: 'Operations Supervisor',
			icon: 'bi-clipboard-check-fill',
			desc: 'Coordinates field crews and quality control across active jobs, making sure every turn meets spec and is delivered on time.',
			tags: ['Quality Control', 'Bilingual', 'Crew Lead'],
			linkedin: '#',
			instagram: '#',
			boss: false
		}
	];

	let centerIdx = $state(0);
	let stageEl;

	const PLAY_MS = 6000;
	let progress = $state(0);
	let inView = $state(false);
	let isPaused = $state(false);
	let rafId = null;
	let lastT = 0;

	let activelyPlaying = $derived(inView && !isPaused);

	function tick(now) {
		if (!activelyPlaying) {
			rafId = null;
			return;
		}
		const delta = now - lastT;
		lastT = now;
		progress += delta;
		if (progress >= PLAY_MS) {
			progress = 0;
			centerIdx = (centerIdx + 1) % team.length;
		}
		rafId = requestAnimationFrame(tick);
	}

	$effect(() => {
		if (activelyPlaying && rafId === null) {
			lastT = performance.now();
			rafId = requestAnimationFrame(tick);
		} else if (!activelyPlaying && rafId !== null) {
			cancelAnimationFrame(rafId);
			rafId = null;
		}
	});

	function setCenter(i) {
		centerIdx = ((i % team.length) + team.length) % team.length;
		progress = 0;
	}
	function next() {
		setCenter(centerIdx + 1);
	}
	function prev() {
		setCenter(centerIdx - 1);
	}

	function relativePos(i, c, n) {
		let d = i - c;
		if (d > n / 2) d -= n;
		if (d < -n / 2) d += n;
		return d;
	}

	function onStageEnter() {
		isPaused = true;
	}
	function onStageLeave() {
		isPaused = false;
	}

	let touchStartX = 0;
	let touchStartY = 0;
	function onTouchStart(e) {
		isPaused = true;
		touchStartX = e.touches[0].clientX;
		touchStartY = e.touches[0].clientY;
	}
	function onTouchEnd(e) {
		const dx = touchStartX - e.changedTouches[0].clientX;
		const dy = touchStartY - e.changedTouches[0].clientY;
		if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
			if (dx > 0) next();
			else prev();
		}
		setTimeout(() => (isPaused = false), 1500);
	}

	function onKeyDown(e) {
		if (e.key === 'ArrowRight') {
			next();
			e.preventDefault();
		} else if (e.key === 'ArrowLeft') {
			prev();
			e.preventDefault();
		}
	}

	onMount(() => {
		const io = new IntersectionObserver(
			([entry]) => {
				inView = entry.isIntersecting;
			},
			{ threshold: 0.25 }
		);
		if (stageEl) io.observe(stageEl);

		stageEl?.addEventListener('keydown', onKeyDown);
		return () => {
			io.disconnect();
			stageEl?.removeEventListener('keydown', onKeyDown);
			if (rafId !== null) cancelAnimationFrame(rafId);
		};
	});
</script>

<section id="team" class="team section light-background">
	<div class="container section-title" data-aos="fade-up">
		<h2>Our Team</h2>
		<p>The people behind every unit turn — experienced, reliable, and built for multifamily</p>
	</div>

	<div class="container">
		<div
			bind:this={stageEl}
			class="team-stage"
			role="region"
			aria-label="Team members carousel"
			aria-roledescription="carousel"
			tabindex="0"
			on:mouseenter={onStageEnter}
			on:mouseleave={onStageLeave}
			on:focusin={() => (isPaused = true)}
			on:focusout={() => (isPaused = false)}
			on:touchstart={onTouchStart}
			on:touchend={onTouchEnd}
		>
			<button type="button" class="nav-btn nav-prev" on:click={prev} aria-label="Previous team member">
				<i class="bi bi-chevron-left"></i>
			</button>

			<div class="team-track">
				{#each team as member, i (member.id)}
					{@const rel = relativePos(i, centerIdx, team.length)}
					{@const isCenter = rel === 0}
					{@const isVisible = Math.abs(rel) <= 1}

					<div
						class="card-wrapper"
						class:is-center={rel === 0}
						class:is-prev={rel === -1}
						class:is-next={rel === 1}
						class:is-far={!isVisible}
						aria-hidden={!isCenter}
					>
						<div class="role-badge" class:is-boss={member.boss} class:is-visible={isCenter}>
							<i class="bi {member.icon}"></i>
							<span>{member.role}</span>
						</div>

						{#if !isCenter && isVisible}
							<div class="side-tooltip" class:is-boss={member.boss} aria-hidden="true">
								<i class="bi {member.icon}"></i>
								<span>{member.role}</span>
							</div>
						{/if}

						<div class="card-parallax">
							<button
								type="button"
								class="team-card"
								class:team-card-featured={member.boss}
								on:click={() => setCenter(i)}
								tabindex={isVisible ? 0 : -1}
								aria-label="Show {member.name}"
							>
								<div class="team-photo-wrap">
									<div class="team-photo" class:team-photo-boss={member.boss}>
										<img src={member.img} alt={member.name} />
									</div>
									<div class="team-photo-ring"></div>
								</div>

								<div class="team-info">
									<h4>{member.name}</h4>
									<span class="team-role">{member.role}</span>
									<p>{member.desc}</p>

									<div class="tags" class:is-visible={isCenter}>
										{#each member.tags as tag}
											<span class="tag">{tag}</span>
										{/each}
									</div>

									<div class="team-socials">
										<a href={member.instagram} aria-label="Instagram" on:click|stopPropagation>
											<i class="bi bi-instagram"></i>
										</a>
										<a href={member.linkedin} aria-label="LinkedIn" on:click|stopPropagation>
											<i class="bi bi-linkedin"></i>
										</a>
									</div>
								</div>
							</button>
						</div>
					</div>
				{/each}
			</div>

			<button type="button" class="nav-btn nav-next" on:click={next} aria-label="Next team member">
				<i class="bi bi-chevron-right"></i>
			</button>
		</div>

		<div class="team-dots" role="tablist" aria-label="Select team member">
			{#each team as member, i}
				<button
					type="button"
					class="dot"
					class:active={i === centerIdx}
					on:click={() => setCenter(i)}
					aria-label="Show {member.name}"
					aria-selected={i === centerIdx}
				>
					{#if i === centerIdx && activelyPlaying}
						<span class="dot-progress" style="--p: {(progress / PLAY_MS) * 100}%"></span>
					{/if}
				</button>
			{/each}
		</div>

		<div class="team-note" data-aos="fade-up">
			<i class="bi bi-people-fill"></i>
			<p>
				Our full team of <strong>15+ field professionals</strong> serves Pensacola, Gulf
				Breeze, Navarre, Fort Walton, Crestview, Milton, Mobile, and surrounding areas.
			</p>
		</div>
	</div>
</section>

<style>
	#team {
		position: relative;
	}
	.team-stage {
		position: relative;
		max-width: 1100px;
		margin: 0 auto;
		padding: 32px 0 8px;
		outline: none;
		overflow: visible;
	}
	.team-track {
		position: relative;
		min-height: 580px;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: visible;
	}
	.card-wrapper {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 320px;
		transform: translate(-50%, -50%) scale(1);
		transition:
			transform 0.22s ease-out,
			opacity 0.16s ease-out,
			filter 0.16s ease-out;
		will-change: transform, opacity;
	}
	.card-wrapper.is-center {
		z-index: 8;
		transform: translate(-50%, -50%) scale(1);
		opacity: 1;
		filter: none;
		pointer-events: auto;
	}
	.card-wrapper.is-prev {
		z-index: 5;
		transform: translate(calc(-50% - 300px), -50%) scale(0.92);
		pointer-events: auto;
	}
	.card-wrapper.is-next {
		z-index: 5;
		transform: translate(calc(-50% + 300px), -50%) scale(0.92);
		pointer-events: auto;
	}
	.card-wrapper.is-far {
		z-index: 1;
		opacity: 0;
		pointer-events: none;
		transform: translate(-50%, -50%) scale(0.85);
	}

	.card-wrapper.is-prev .team-card,
	.card-wrapper.is-next .team-card {
		opacity: 0.58;
		filter: blur(0.25px) brightness(0.96);
	}

	.card-wrapper.is-prev:hover .team-card,
	.card-wrapper.is-next:hover .team-card {
		opacity: 0.92;
		filter: blur(0.2px) grayscale(0.05) saturate(1);
	}

	.card-parallax {
		transform: none !important;
	}
	.side-tooltip {
		position: absolute;
		top: -22px;
		left: 50%;
		transform: translate(-50%, 6px);
		display: inline-flex;
		align-items: center;
		gap: 6px;
		padding: 6px 14px;
		background: #1a2418;
		color: #fffcd9;
		font-size: 10.5px;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 1.4px;
		border-radius: 20px;
		white-space: nowrap;
		box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
		opacity: 0;
		pointer-events: none;
		transition: opacity 0.25s ease, transform 0.25s ease;
		z-index: 7;
	}
	.side-tooltip i {
		font-size: 10px;
		color: #c9b765;
	}
	.side-tooltip.is-boss {
		background: linear-gradient(135deg, #b8923a 0%, #8a6e22 100%);
		color: #fffcd9;
		box-shadow: 0 10px 28px rgba(184, 146, 58, 0.4);
	}
	.side-tooltip.is-boss i {
		color: #fffcd9;
	}
	.card-wrapper.is-prev:hover .side-tooltip,
	.card-wrapper.is-next:hover .side-tooltip {
		opacity: 1;
		transform: translate(-50%, 0);
	}
	.role-badge {
		position: absolute;
		top: -22px;
		left: 50%;
		transform: translateX(-50%);
		display: inline-flex;
		align-items: center;
		gap: 7px;
		padding: 8px 18px;
		background: linear-gradient(135deg, #5a5f2c 0%, #3d4220 100%);
		color: #fffcd9;
		font-size: 11px;
		font-weight: 800;
		text-transform: uppercase;
		letter-spacing: 1.6px;
		border-radius: 24px;
		white-space: nowrap;
		box-shadow: 0 8px 22px rgba(58, 65, 30, 0.32);
		z-index: 10;
		opacity: 0;
		pointer-events: none;
		transition: opacity 0.12s ease;
	}
	.role-badge.is-visible {
		opacity: 1;
	}
	.role-badge.is-boss {
		background: linear-gradient(135deg, #b8923a 0%, #8a6e22 100%);
		box-shadow: 0 10px 28px rgba(184, 146, 58, 0.4);
	}
	.team-card {
	display: block;
	width: 100%;
	background: #fff;
	border-radius: 20px;
	padding: 32px 24px;
	text-align: center;
	position: relative;
	box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
	border: 1px solid rgba(0, 0, 0, 0.04);
	cursor: pointer;
	transition:
		transform 0.35s ease,
		box-shadow 0.45s cubic-bezier(0.22, 1, 0.36, 1),
		opacity 0.16s ease,
		filter 0.16s ease;
}
	.card-wrapper.is-center .team-card {
	transform: translateY(-10px);
	box-shadow: 0 24px 60px rgba(0, 0, 0, 0.16);
}
	.team-card-featured {
		background: linear-gradient(180deg, #fff 0%, #fefdf2 100%);
		border: 1.5px solid rgba(184, 146, 58, 0.28);
		box-shadow: 0 18px 50px rgba(184, 146, 58, 0.18);
	}
	.card-wrapper.is-center .team-card.team-card-featured {
		box-shadow:
			0 22px 55px rgba(184, 146, 58, 0.32),
			0 0 0 1px rgba(184, 146, 58, 0.15);
	}
	.team-photo-wrap {
		position: relative;
		width: 160px;
		height: 160px;
		margin: 0 auto 20px;
	}
	.team-photo {
		width: 100%;
		height: 100%;
		border-radius: 50%;
		overflow: hidden;
		position: relative;
		z-index: 2;
		border: 4px solid #fff;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
	}
	.team-photo img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
		transition: transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);
	}
	.card-wrapper.is-center .team-card:hover .team-photo img {
		transform: scale(1.08);
	}
	.team-photo-boss img {
		object-position: center 20%;
	}
	.team-photo-ring {
		position: absolute;
		inset: -8px;
		border-radius: 50%;
		border: 2px dashed rgba(107, 107, 40, 0.3);
		z-index: 1;
		animation: rotate 20s linear infinite;
	}
	.team-card-featured .team-photo-ring {
		border: 2px solid rgba(184, 146, 58, 0.4);
		border-top-color: transparent;
		border-right-color: transparent;
	}
	@keyframes rotate {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
	.team-info h4 {
		font-size: 20px;
		font-weight: 800;
		color: #1a1a1a;
		margin-bottom: 4px;
		letter-spacing: -0.01em;
	}
	.team-card-featured .team-info h4 {
		color: #4a4a1c;
	}
	.team-role {
		display: inline-block;
		font-size: 12px;
		color: #6b6b28;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 1.5px;
		margin-bottom: 14px;
		padding: 4px 12px;
		border-radius: 20px;
		background: rgba(107, 107, 40, 0.08);
	}
	.team-card-featured .team-role {
		color: #8a6e22;
		background: rgba(184, 146, 58, 0.14);
	}
	.team-info p {
		font-size: 13.5px;
		color: #666;
		line-height: 1.65;
		margin-bottom: 16px;
	}
	.tags {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 6px;
		margin-bottom: 18px;
		min-height: 62px;
		opacity: 0;
		pointer-events: none;
		transition: opacity 0.12s ease;
	}
	.tags.is-visible {
		opacity: 1;
	}
	.tag {
		font-size: 10.5px;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.8px;
		padding: 5px 11px;
		border-radius: 16px;
		background: rgba(107, 107, 40, 0.1);
		color: #5a5f2c;
		border: 1px solid rgba(107, 107, 40, 0.15);
	}
	.team-card-featured .tag {
		background: rgba(184, 146, 58, 0.12);
		color: #7a6020;
		border-color: rgba(184, 146, 58, 0.25);
	}
	.team-socials {
		display: flex;
		justify-content: center;
		gap: 10px;
	}
	.team-socials a {
		width: 36px;
		height: 36px;
		border-radius: 50%;
		background: #f5f0c0;
		color: #6b6b28;
		display: flex;
		align-items: center;
		justify-content: center;
		text-decoration: none;
		transition: all 0.25s;
		font-size: 15px;
	}
	.team-socials a:hover {
		background: linear-gradient(135deg, #6b6b28 0%, #4a4a1c 100%);
		color: #fffcd9;
		transform: translateY(-3px);
	}
	.nav-btn {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		z-index: 20;
		width: 48px;
		height: 48px;
		border-radius: 50%;
		border: none;
		background: #fff;
		color: #4a4a1c;
		font-size: 20px;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		box-shadow: 0 8px 22px rgba(0, 0, 0, 0.08);
		transition: all 0.25s ease;
	}
	.nav-btn:hover {
		background: linear-gradient(135deg, #6b6b28 0%, #4a4a1c 100%);
		color: #fffcd9;
		transform: translateY(-50%) scale(1.08);
		box-shadow: 0 14px 32px rgba(107, 107, 40, 0.3);
	}
	.nav-prev {
		left: -8px;
	}
	.nav-next {
		right: -8px;
	}
	.team-dots {
		display: flex;
		justify-content: center;
		gap: 8px;
		margin-top: 24px;
		flex-wrap: wrap;
	}
	.dot {
		width: 10px;
		height: 10px;
		border-radius: 50%;
		border: none;
		background: rgba(107, 107, 40, 0.25);
		cursor: pointer;
		padding: 0;
		transition:
			width 0.35s ease,
			background 0.25s ease,
			border-radius 0.35s ease;
		position: relative;
		overflow: hidden;
	}
	.dot:hover {
		background: rgba(107, 107, 40, 0.5);
	}
	.dot.active {
		width: 36px;
		border-radius: 5px;
		background: rgba(107, 107, 40, 0.18);
	}
	.dot.active::before {
		content: '';
		position: absolute;
		inset: 0;
		background: linear-gradient(135deg, #6b6b28 0%, #4a4a1c 100%);
	}
	.dot.active:has(.dot-progress)::before {
		display: none;
	}
	.dot-progress {
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		width: var(--p, 0%);
		background: linear-gradient(135deg, #6b6b28 0%, #4a4a1c 100%);
		pointer-events: none;
	}
	.team-note {
		display: flex;
		align-items: center;
		gap: 14px;
		margin: 56px auto 0;
		padding: 20px 28px;
		background: #fff;
		border: 1px solid rgba(107, 107, 40, 0.2);
		border-radius: 12px;
		max-width: 640px;
		box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
	}
	.team-note i {
		font-size: 28px;
		color: #6b6b28;
		flex-shrink: 0;
	}
	.team-note p {
		margin: 0;
		font-size: 14px;
		color: #555;
		line-height: 1.6;
	}
	.team-note strong {
		color: #4a4a1c;
	}
	@media (max-width: 991px) {
	.team-track {
		min-height: 600px;
	}
	.card-wrapper {
		width: 280px;
	}
	.card-wrapper.is-prev {
		transform: translate(calc(-50% - 220px), -50%) scale(0.9);
	}
	.card-wrapper.is-next {
		transform: translate(calc(-50% + 220px), -50%) scale(0.9);
	}
	.card-wrapper.is-prev .team-card,
	.card-wrapper.is-next .team-card {
		opacity: 0.48;
		filter: blur(0.25px) brightness(0.96);
	}

	.card-wrapper.is-center .team-card {
		transform: translateY(-8px);
	}

	.nav-prev {
		left: -4px;
	}
	.nav-next {
		right: -4px;
	}
}

@media (max-width: 640px) {
	.team-stage {
		padding: 28px 0 4px;
	}
	.team-track {
		min-height: 620px;
	}
	.card-wrapper {
		width: calc(100vw - 88px);
		max-width: 340px;
	}
	.card-wrapper.is-prev,
	.card-wrapper.is-next {
		opacity: 0;
		pointer-events: none;
	}
	.nav-btn {
		width: 40px;
		height: 40px;
		font-size: 16px;
	}
	.nav-prev {
		left: 0;
	}
	.nav-next {
		right: 0;
	}
	.team-card {
		padding: 32px 22px;
	}

	.card-wrapper.is-center .team-card {
		transform: translateY(-6px);
	}

	.team-photo-wrap {
		width: 150px;
		height: 150px;
	}
	.team-info h4 {
		font-size: 19px;
	}
	.team-info p {
		font-size: 13px;
	}
	.role-badge {
		top: -18px;
		padding: 7px 14px;
		font-size: 10px;
		letter-spacing: 1.3px;
	}
	.tag {
		font-size: 10px;
		padding: 4px 9px;
	}
	.side-tooltip {
		display: none;
	}
}
</style>