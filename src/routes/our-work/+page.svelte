<script>
	import SiteShell from '$lib/components/layout/SiteShell.svelte';

	let activeFilter = $state('all');
	let selectedId   = $state(1);

	let hoveredPhoto = $state(null);
	let zoomVisible  = $state(false);
	let hoverTimer;

	function showZoom(photo) {
		clearTimeout(hoverTimer);
		if (zoomVisible) {
			hoveredPhoto = photo;
		} else {
			hoverTimer = setTimeout(() => {
				hoveredPhoto = photo;
				zoomVisible  = true;
			}, 90);
		}
	}

	function hideZoom() {
		clearTimeout(hoverTimer);
		zoomVisible = false;
	}

	let galleryEl;
	let isDragging  = $state(false);
	let startX      = 0;
	let startScroll = 0;

	function dragStart(e) {
		isDragging  = true;
		startX      = e.pageX - galleryEl.offsetLeft;
		startScroll = galleryEl.scrollLeft;
	}

	function dragEnd() { isDragging = false; }

	function dragMove(e) {
		if (!isDragging) return;
		e.preventDefault();
		const x    = e.pageX - galleryEl.offsetLeft;
		const walk = (x - startX) * 1.4;
		galleryEl.scrollLeft = startScroll - walk;
	}

	function scrollGallery(dir) {
		if (!galleryEl) return;
		const card = galleryEl.querySelector('.gallery-item');
		const step = card ? card.offsetWidth + 14 : 220;
		galleryEl.scrollBy({ left: dir * step * 2, behavior: 'smooth' });
	}

	function selectProject(id) {
		selectedId = id;
	}

	const filters = [
		{ id: 'all',          label: 'ALL PROJECTS', icon: 'bi-grid-3x3-gap'     },
		{ id: 'renovation',   label: 'RENOVATIONS',  icon: 'bi-house-door'        },
		{ id: 'maintenance',  label: 'MAINTENANCE',  icon: 'bi-tools'             },
		{ id: 'construction', label: 'CONSTRUCTION', icon: 'bi-wrench-adjustable' },
		{ id: 'finishes',     label: 'FINISHES',     icon: 'bi-paint-bucket'      }
	];

	const projects = [
		{
			id: 1,
			title: 'Pool Restroom Drywall Replacement & Fixture Installation',
			category: 'renovation',
			area: 'Restroom',
			video: { src: '/assets/img/projects/project1/video-1.mp4', poster: '' },
			gallery: [
				{ src: '/assets/img/projects/project1/img1.png'  },
				{ src: '/assets/img/projects/project1/img-2.png' },
				{ src: '/assets/img/projects/project1/img-3.png' },
				{ src: '/assets/img/projects/project1/img-4.png' }
			],
			description: [
				'Full drywall installation and finishing was completed throughout the restroom, including taping, mudding, sanding, and surface smoothing. All fixtures were installed from scratch: toilet, sink, two exhaust fans, fire safety device, and light fixtures.',
				'Accessories including mirror, soap dispenser, and paper dispenser were mounted and secured. The project concluded with a full paint application, covering all walls after drywall completion with proper preparation and finishing for a clean, uniform result.'
			]
		},
		{
			id: 2,
			title: 'Bathroom Ceiling Drywall Repair & Restoration',
			category: 'renovation',
			area: 'Bathroom',
			video: { src: '/assets/img/projects/project2/video-2.mp4', poster: '' },
			gallery: [
				{ src: '/assets/img/projects/project2/1.jpg' },
				{ src: '/assets/img/projects/project2/2.jpg' },
				{ src: '/assets/img/projects/project2/3.jpg' },
				{ src: '/assets/img/projects/project2/5.jpg' },
				{ src: '/assets/img/projects/project2/6.jpg' }
			],
			description: [
				'The bathroom ceiling was fully restored following moisture damage and mold presence. All existing ceiling texture was removed to properly address the affected areas before any repair work began.',
				'Drywall repairs were performed including patching, smoothing, and surface preparation to achieve a uniform and consistent finish. A high-quality primer was applied to seal the surface and prevent future moisture issues. The project was completed with a professional paint finish across the ceiling and surrounding areas.'
			]
		},
		{
			id: 3,
			title: 'Concrete Pad & Vacuum Installation',
			category: 'construction',
			area: 'Exterior',
			video: { src: '/assets/img/projects/project3/video-3.mp4', poster: '' },
			gallery: [],
			description: [
				'A concrete pad was built from the ground up: area layout and preparation, light excavation, gravel base compaction, form setting, and a broom-finish concrete pour with proper curing time.',
				'The vacuum unit was mounted and secured to the finished pad. Electrical work included extending an existing line approximately 12 feet, running conduit, making proper connections, and securing the electrical box. The installation was tested upon completion.'
			]
		},
		{
			id: 4,
			title: 'Exterior Wood Louver Doors',
			category: 'finishes',
			area: 'Exterior',
			video: { src: '/assets/img/projects/project4/video-4.mp4', poster: '' },
			gallery: [],
			description: [
				'All door surfaces were deep-cleaned with an exterior-grade cleaner to remove dirt, mildew, and contaminants. Full sanding followed — covering the louvers, frames, and all panels — with detailed hand sanding in the louvered areas to ensure proper adhesion. Minor wood repairs were made using exterior-grade filler where needed.',
				'Two to three coats of exterior spar urethane in gloss finish were applied, with light sanding between coats. The final result restores the natural wood appearance and delivers UV protection, moisture resistance, and a durable like-new look. Door edges and bottoms were sealed to protect against moisture intrusion.'
			]
		},
		{
			id: 5,
			title: 'Staircase Pressure Washing, Metal Preparation & Painting',
			category: 'maintenance',
			area: 'Staircase',
			video: { src: '/assets/img/projects/project5/video-5.mp4', poster: '' },
			gallery: [],
			description: [
				'All staircase surfaces were pressure washed before any metal work began. Mechanical sanding was then applied to every component showing rust or deterioration — handrails, guardrails, stair edges, and metal sections at the base of each staircase — removing loose paint, rust, and oxidation down to a clean surface.',
				'A primer coat was applied to all prepared metal surfaces, followed by the finish painting. The completed work delivers a significantly improved appearance across all staircases, with enhanced curb appeal and a refreshed, well-maintained look throughout the property.'
			]
		}
	];

	let filteredProjects = $derived(
		activeFilter === 'all' ? projects : projects.filter(p => p.category === activeFilter)
	);

	let selectedProject = $derived(projects.find(p => p.id === selectedId) ?? projects[0]);

	function selectFilter(id) { activeFilter = id; }
</script>

<svelte:head>
	<title>Our Work | Cordova Property Services</title>
</svelte:head>

<SiteShell>
	<main class="work-page">

		<section class="work-hero">
			<div class="hero-copy">
				<span>OUR WORK</span>
				<h1>Real Projects.<br />Real Results.</h1>
				<div class="hero-line"></div>
				<p>Explore a selection of transformations we've completed for multifamily properties.</p>
			</div>
			<div class="hero-img"></div>
		</section>

		<section class="work-wrap">

			<div class="filter-row">
				{#each filters as filter}
					<button
						class="filter-btn"
						class:active={activeFilter === filter.id}
						onclick={() => selectFilter(filter.id)}
					>
						<i class="bi {filter.icon}"></i>
						{filter.label}
					</button>
				{/each}
			</div>

			<div class="project-layout">

				<aside class="project-list">
					{#each filteredProjects as project}
						<button
							class="project-card"
							class:active={selectedId === project.id}
							onclick={() => selectProject(project.id)}
						>
							<div class="card-info">
								<span class="num">{String(project.id).padStart(2, '0')}</span>
								<h3>{project.title}</h3>
								<div class="tags">
									<span><i class="bi bi-flower1"></i> {project.category}</span>
									<span><i class="bi bi-diagram-3"></i> {project.area}</span>
								</div>
							</div>
							<i class="bi bi-chevron-right arrow"></i>
						</button>
					{/each}
				</aside>

				<section class="project-detail">

					<div class="detail-title">
						<span>{String(selectedProject.id).padStart(2, '00')}</span>
						<h2>{selectedProject.title}</h2>
					</div>

					<div class="project-video">
						{#if selectedProject.video}
							{#key selectedProject.id}
								<div class="project-video-stage">
									<video controls poster={selectedProject.video.poster || undefined}>
										<source src={selectedProject.video.src} type="video/mp4" />
									</video>
								</div>
							{/key}
						{:else}
							<div class="empty-state">No video available</div>
						{/if}
					</div>

					{#if selectedProject.gallery.length > 0}
						<div class="gallery-section">
							<div class="section-head">
								<div>
									<h3>Project Gallery</h3>
									<p>Hover a photo to enlarge · Drag or scroll to explore</p>
								</div>
								<div class="gallery-nav">
									<button class="gallery-nav-btn" onclick={() => scrollGallery(-1)} aria-label="Scroll left">
										<i class="bi bi-chevron-left"></i>
									</button>
									<button class="gallery-nav-btn" onclick={() => scrollGallery(1)} aria-label="Scroll right">
										<i class="bi bi-chevron-right"></i>
									</button>
								</div>
							</div>

							<div
								class="gallery-track"
								class:dragging={isDragging}
								bind:this={galleryEl}
								onmousedown={dragStart}
								onmousemove={dragMove}
								onmouseup={dragEnd}
								onmouseleave={dragEnd}
								role="region"
								aria-label="Project photo gallery"
							>
								{#each selectedProject.gallery as photo}
									<figure
										class="gallery-item"
										onmouseenter={() => showZoom(photo)}
										onmouseleave={hideZoom}
									>
										<img src={photo.src} alt={photo.tag ?? 'Project photo'} draggable="false" />
										{#if photo.tag}
											<figcaption class="gallery-tag">{photo.tag}</figcaption>
										{/if}
									</figure>
								{/each}
							</div>
						</div>
					{/if}

					<div class="process-section">
						<div class="process-header">
							<h3>Project Description</h3>
						</div>
						<div class="desc-body">
							{#each selectedProject.description as para}
								<p>{para}</p>
							{/each}
						</div>
					</div>

				</section>
			</div>

			<section class="cta-box">
				<div class="cta-icon"><i class="bi bi-calendar-check"></i></div>
				<div>
					<h3>Have a project in mind?</h3>
					<p>Let's build something great together.</p>
				</div>
				<a href="/contact" class="cta-btn">
					GET A FREE QUOTE <i class="bi bi-arrow-right"></i>
				</a>
			</section>

		</section>
	</main>

	<div class="zoom-overlay" class:visible={zoomVisible} aria-hidden={!zoomVisible}>
		{#if hoveredPhoto}
			{#key hoveredPhoto.src}
				<div class="zoom-card">
					<img src={hoveredPhoto.src} alt={hoveredPhoto.tag ?? 'Photo'} />
					{#if hoveredPhoto.tag}
						<span class="zoom-tag">{hoveredPhoto.tag}</span>
					{/if}
				</div>
			{/key}
		{/if}
	</div>

</SiteShell>

<style>
	:global(main.work-page) {
		padding-top: 0 !important;
		background: #fafaf7;
		color: #172015;
		font-family: Inter, system-ui, sans-serif;
	}

	.work-hero {
		position: relative;
		min-height: 420px;
		display: block;
		background: #f6f3ed;
		overflow: hidden;
		border-bottom: 1px solid rgba(30, 36, 28, 0.08);
	}

	.hero-copy {
		position: relative;
		z-index: 2;
		max-width: 520px;
		padding: 92px 48px 70px;
	}

	.hero-copy span {
		font-size: 13px;
		font-weight: 800;
		color: #7b8b32;
		letter-spacing: 0.04em;
	}

	.hero-copy h1 {
		margin: 18px 0 14px;
		font-size: clamp(42px, 4.4vw, 62px);
		line-height: 0.98;
		font-weight: 900;
		letter-spacing: -0.055em;
		color: #1c271a;
	}

	.hero-line {
		width: 48px;
		height: 2px;
		background: #7b8b32;
		margin: 22px 0;
	}

	.hero-copy p {
		max-width: 390px;
		margin: 0;
		font-size: 15px;
		line-height: 1.65;
		color: #4e574a;
	}

	.hero-img {
		position: absolute;
		inset: 0;
		background:
			linear-gradient(
				90deg,
				rgba(250, 249, 244, 0.72) 0%,
				rgba(250, 249, 244, 0.42) 24%,
				rgba(250, 249, 244, 0.10) 43%,
				rgba(250, 249, 244, 0.00) 62%
			),
			url('/assets/img/projects.png') 38% center / cover no-repeat;
		z-index: 1;
	}

	.work-wrap {
		max-width: 1480px;
		margin: 0 auto;
		padding: 24px 36px 46px;
	}

	.filter-row {
		display: flex;
		gap: 12px;
		flex-wrap: wrap;
		margin-bottom: 28px;
	}

	.filter-btn {
		height: 56px;
		padding: 0 24px;
		border: 1px solid rgba(40, 45, 38, 0.12);
		background: #fff;
		border-radius: 10px;
		font-size: 12px;
		font-weight: 800;
		color: #31372f;
		display: inline-flex;
		align-items: center;
		gap: 12px;
		cursor: pointer;
		box-shadow: 0 8px 22px rgba(20, 24, 18, 0.04);
		transition: 0.2s ease;
	}

	.filter-btn i { font-size: 20px; color: #7d873f; }

	.filter-btn.active,
	.filter-btn:hover {
		background: #7a8539;
		color: #fff;
		border-color: #7a8539;
	}

	.filter-btn.active i,
	.filter-btn:hover i { color: #fff; }

	.project-layout {
		display: grid;
		grid-template-columns: 420px 1fr;
		gap: 24px;
		align-items: start;
	}

	.project-list {
		display: flex;
		flex-direction: column;
		gap: 16px;
		position: sticky;
		top: 24px;
	}

	.project-card {
		position: relative;
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 18px;
		padding: 18px 20px;
		background: #fff;
		border: 1.5px solid rgba(36, 44, 31, 0.12);
		border-radius: 10px;
		text-align: left;
		cursor: pointer;
		box-shadow: 0 10px 26px rgba(24, 28, 22, 0.04);
		transition: 0.2s ease;
		width: 100%;
		overflow: hidden;
	}

	.project-card::before {
		content: '';
		position: absolute;
		left: 0; top: 0;
		width: 4px; height: 100%;
		background: #7a8539;
		opacity: 0;
		transition: 0.2s ease;
	}

	.project-card.active,
	.project-card:hover {
		border-color: #7a8539;
		box-shadow: 0 16px 34px rgba(34, 43, 29, 0.09);
	}

	.project-card.active::before,
	.project-card:hover::before { opacity: 1; }

	.project-card.active { background: #fbfaf2; }

	.card-info { flex: 1; min-width: 0; }

	.card-info .num,
	.detail-title span {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		min-width: 38px;
		height: 28px;
		border-radius: 6px;
		background: #7a8539;
		color: #fff;
		font-weight: 900;
		font-size: 14px;
	}

	.card-info h3 {
		margin: 12px 0 10px;
		font-size: 14px;
		line-height: 1.3;
		font-weight: 800;
		color: #0e130d;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.tags {
		display: flex;
		gap: 14px;
		flex-wrap: wrap;
		color: #64704f;
		font-size: 12px;
		font-weight: 600;
	}

	.tags span { display: inline-flex; align-items: center; gap: 5px; }

	.arrow {
		color: #6d7633;
		font-size: 20px;
		flex-shrink: 0;
		transition: 0.2s ease;
	}

	.project-card:hover .arrow,
	.project-card.active .arrow { color: #7a8539; transform: translateX(2px); }

	.project-detail {
		background: #fff;
		border: 1px solid rgba(35, 41, 31, 0.08);
		border-radius: 18px;
		box-shadow: 0 18px 45px rgba(27, 31, 24, 0.08);
		overflow: hidden;
	}

	.detail-title {
		display: flex;
		gap: 22px;
		align-items: flex-start;
		padding: 28px 28px 18px;
	}

	.detail-title h2 {
		max-width: 720px;
		margin: 0;
		font-size: 28px;
		line-height: 1.12;
		font-weight: 900;
		letter-spacing: -0.035em;
		color: #0c100b;
	}

	.project-video { padding: 8px 28px 28px; }

	.project-video-stage {
		width: 100%;
		border-radius: 14px;
		overflow: hidden;
		background: #000;
		box-shadow: 0 14px 34px rgba(20, 24, 18, 0.14);
	}

	.project-video-stage video {
		width: 100%;
		aspect-ratio: 16 / 9;
		max-height: 540px;
		object-fit: cover;
		display: block;
		background: #000;
	}

	.empty-state {
		padding: 40px 20px;
		text-align: center;
		color: #6b7363;
		font-size: 13px;
		background: #f7f6ee;
		border-radius: 10px;
	}

	.gallery-section { padding: 0 28px 32px; }

	.section-head {
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		gap: 18px;
		margin-bottom: 16px;
	}

	.section-head h3 { margin: 0 0 4px; font-size: 18px; font-weight: 900; color: #232820; }
	.section-head p  { margin: 0; font-size: 13px; color: #5d6457; }

	.gallery-nav { display: flex; gap: 8px; }

	.gallery-nav-btn {
		width: 40px; height: 40px;
		border-radius: 50%;
		background: #fff;
		border: 1px solid rgba(36, 44, 31, 0.14);
		display: grid; place-items: center;
		font-size: 16px; color: #2b3128;
		cursor: pointer;
		box-shadow: 0 6px 14px rgba(20, 24, 18, 0.06);
		transition: 0.2s ease;
	}

	.gallery-nav-btn:hover {
		background: #7a8539;
		color: #fff;
		border-color: #7a8539;
		transform: translateY(-1px);
	}

	.gallery-track {
		display: flex;
		gap: 14px;
		overflow-x: auto;
		overflow-y: hidden;
		padding: 14px 4px 22px;
		cursor: grab;
		user-select: none;
		-webkit-overflow-scrolling: touch;
		scroll-behavior: smooth;
		scrollbar-width: thin;
		scrollbar-color: rgba(122, 133, 57, 0.45) transparent;
	}

	.gallery-track.dragging { cursor: grabbing; scroll-behavior: auto; }

	.gallery-track::-webkit-scrollbar       { height: 6px; }
	.gallery-track::-webkit-scrollbar-track { background: transparent; }
	.gallery-track::-webkit-scrollbar-thumb { background: rgba(122,133,57,.4); border-radius: 8px; }
	.gallery-track::-webkit-scrollbar-thumb:hover { background: rgba(122,133,57,.7); }

	.gallery-item {
		flex: 0 0 auto;
		position: relative;
		width: 210px;
		height: 380px;
		margin: 0;
		border-radius: 22px;
		overflow: hidden;
		background: #eee;
		box-shadow: 0 10px 24px rgba(20, 24, 18, 0.10);
		transition: transform 0.3s ease, box-shadow 0.3s ease;
		cursor: pointer;
	}

	.gallery-track:not(.dragging) .gallery-item:hover {
		transform: translateY(-4px) scale(1.03);
		box-shadow: 0 18px 36px rgba(20, 24, 18, 0.18);
	}

	.gallery-item img {
		width: 100%; height: 100%;
		object-fit: cover;
		display: block;
		pointer-events: none;
		-webkit-user-drag: none;
	}

	.gallery-tag {
		position: absolute;
		top: 12px; left: 12px;
		padding: 5px 10px;
		font-size: 10px;
		font-weight: 900;
		letter-spacing: 0.06em;
		color: #fff;
		background: rgba(20, 24, 18, 0.82);
		border-radius: 5px;
		text-transform: uppercase;
		backdrop-filter: blur(4px);
	}

	/* PROJECT DESCRIPTION */
	.process-section {
		padding: 30px 28px 36px;
		border-top: 1px solid rgba(34, 38, 30, 0.09);
		background: #fff;
	}

	.process-header {
		margin-bottom: 18px;
	}

	.process-header h3 {
		margin: 0;
		font-size: 22px;
		font-weight: 900;
		color: #232820;
	}

	.desc-body {
		display: flex;
		flex-direction: column;
		gap: 14px;
	}

	.desc-body p {
		margin: 0;
		font-size: 15px;
		line-height: 1.75;
		color: #3a4138;
	}

	/* CTA */
	.cta-box {
		margin-top: 46px;
		padding: 34px 40px;
		background: linear-gradient(90deg, #efeee7, #f7f6ef);
		border-radius: 12px;
		display: grid;
		grid-template-columns: auto 1fr auto;
		gap: 24px;
		align-items: center;
	}

	.cta-icon {
		width: 72px; height: 72px;
		border-radius: 50%;
		background: #7a8539;
		color: #fff;
		display: grid; place-items: center;
		font-size: 32px;
	}

	.cta-box h3 { margin: 0 0 4px; font-size: 26px; font-weight: 900; color: #30362d; }
	.cta-box p  { margin: 0; color: #555d50; font-size: 16px; }

	.cta-btn {
		height: 50px;
		padding: 0 28px;
		border-radius: 6px;
		background: #7a8539;
		color: #fff;
		text-decoration: none;
		display: inline-flex;
		align-items: center;
		gap: 14px;
		font-size: 12px;
		font-weight: 900;
	}

	/* ZOOM OVERLAY */
	.zoom-overlay {
		position: fixed;
		inset: 0;
		z-index: 900;
		display: flex;
		align-items: center;
		justify-content: center;
		background: rgba(14, 18, 12, 0);
		backdrop-filter: blur(0px);
		-webkit-backdrop-filter: blur(0px);
		pointer-events: none;
		opacity: 0;
		transition:
			opacity 0.34s cubic-bezier(0.22, 1, 0.36, 1),
			background 0.34s cubic-bezier(0.22, 1, 0.36, 1),
			backdrop-filter 0.34s cubic-bezier(0.22, 1, 0.36, 1),
			-webkit-backdrop-filter 0.34s cubic-bezier(0.22, 1, 0.36, 1);
	}

	.zoom-overlay.visible {
		opacity: 1;
		background: rgba(14, 18, 12, 0.6);
		backdrop-filter: blur(8px);
		-webkit-backdrop-filter: blur(8px);
	}

	.zoom-card {
		position: relative;
		width: clamp(240px, 36vw, 520px);
		border-radius: 22px;
		overflow: hidden;
		box-shadow: 0 40px 80px rgba(0, 0, 0, 0.38);
		pointer-events: none;
		transform: scale(0.94) translateY(18px);
		opacity: 0;
		transition:
			transform 0.46s cubic-bezier(0.22, 1, 0.36, 1),
			opacity 0.34s cubic-bezier(0.22, 1, 0.36, 1);
		animation: cardSwapIn 0.42s cubic-bezier(0.22, 1, 0.36, 1);
	}

	.zoom-overlay.visible .zoom-card {
		transform: scale(1) translateY(0);
		opacity: 1;
	}

	@keyframes cardSwapIn {
		0%   { opacity: 0; transform: scale(0.97) translateY(0); filter: blur(6px); }
		60%  { opacity: 1; filter: blur(0); }
		100% { opacity: 1; transform: scale(1) translateY(0); filter: blur(0); }
	}

	.zoom-card img {
		width: 100%;
		height: auto;
		aspect-ratio: 9 / 16;
		object-fit: cover;
		display: block;
	}

	.zoom-tag {
		position: absolute;
		top: 14px; left: 14px;
		padding: 5px 12px;
		font-size: 11px;
		font-weight: 900;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: #fff;
		background: rgba(20, 24, 18, 0.82);
		border-radius: 6px;
		backdrop-filter: blur(4px);
	}

	/* RESPONSIVE */
	@media (max-width: 1200px) {
		.project-layout      { grid-template-columns: 1fr; }
		.project-list        { position: static; display: grid; grid-template-columns: repeat(2, 1fr); }
		.project-card .arrow { display: none; }
	}

	@media (max-width: 820px) {
		.work-hero       { min-height: 390px; }
		.hero-copy       { padding: 80px 24px 58px; max-width: 420px; }
		.hero-copy h1    { font-size: 42px; }
		.hero-img {
			background:
				linear-gradient(90deg, rgba(250,249,244,.86) 0%, rgba(250,249,244,.62) 45%, rgba(250,249,244,.22) 100%),
				url('/assets/img/projects.png') center / cover no-repeat;
		}
		.work-wrap       { padding: 20px 18px 36px; }
		.project-list    { grid-template-columns: 1fr; }
		.project-card    { flex-direction: row; }
		.gallery-item    { width: 170px; height: 310px; }
		.detail-title    { padding: 24px 22px 16px; }
		.detail-title h2 { font-size: 22px; }
		.project-video   { padding: 8px 22px 22px; }
		.gallery-section { padding: 0 22px 22px; }
		.process-section { padding: 24px 22px; }
		.cta-box         { grid-template-columns: 1fr; text-align: center; justify-items: center; }
	}
</style>