<script>
	import SiteShell from '$lib/components/layout/SiteShell.svelte';

	let activeFilter = $state('all');
	let selectedId   = $state(1);

	// Zoom de galería
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

	// Galería: drag-to-scroll
	let galleryEl;
	let isDragging = $state(false);
	let startX     = 0;
	let startScroll = 0;

	function dragStart(e) {
		isDragging  = true;
		startX      = e.pageX - galleryEl.offsetLeft;
		startScroll = galleryEl.scrollLeft;
	}

	function dragEnd() {
		isDragging = false;
	}

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

	// Project Process: step activo por proyecto
	let activeStep = $state(1);

	function toggleStep(id) {
		activeStep = activeStep === id ? 0 : id;
	}

	// Resetear step al cambiar proyecto
	function selectProject(id) {
		selectedId  = id;
		activeStep  = 1;
	}

	const filters = [
		{ id: 'all',          label: 'ALL PROJECTS', icon: 'bi-grid-3x3-gap'      },
		{ id: 'renovation',   label: 'RENOVATIONS',  icon: 'bi-house-door'         },
		{ id: 'maintenance',  label: 'MAINTENANCE',  icon: 'bi-tools'              },
		{ id: 'construction', label: 'CONSTRUCTION', icon: 'bi-wrench-adjustable'  },
		{ id: 'finishes',     label: 'FINISHES',     icon: 'bi-paint-bucket'       }
	];

	const projects = [
		{
			id: 1,
			title: 'Pool Restroom Drywall Replacement & Fixture Installation',
			category: 'renovation',
			area: 'Restroom',
			coverImg: '/assets/img/projects/project-1-after.jpg',
			video: {
				src:    '/assets/img/projects/video-1.mp4',
				poster: '/assets/img/projects/project-1-after.jpg'
			},
			gallery: [
				{ src: '/assets/img/projects/img-2.png' },
				{ src: '/assets/img/projects/img-3.png' },
				{ src: '/assets/img/projects/img-4.png' },
				{ src: '/assets/img/projects/img1.png'  }
			],
			scope: [
				{
					title: 'Drywall Installation & Replacement',
					items: ['Complete full finishing process including taping, mudding, sanding, and smoothing all areas']
				},
				{
					title: 'Fixture & Equipment Installation',
					items: ['Install toilet', 'Install sink', 'Install exhaust/vent fans', 'Install fire safety device', 'Install light fixtures']
				},
				{
					title: 'Accessories Installation',
					items: ['Install mirror', 'Install soap dispenser', 'Install paper dispenser']
				},
				{
					title: 'Painting',
					items: ['Full restroom paint after drywall completion', 'Clean and uniform final result']
				}
			],
			details: {
				type: 'Renovation', property: 'Pool Restroom',
				duration: '3 Days',  completed: 'May 2024',
				team: '3 Crews',     location: 'Florida'
			}
		},
		{
			id: 2,
			title: 'Concrete Pad & Vacuum Installation',
			category: 'construction',
			area: 'Exterior',
			coverImg: '/assets/img/projects/project-2-after.jpg',
			video: {
				src:    '/assets/img/projects/video-2.mp4',
				poster: '/assets/img/projects/project-2-after.jpg'
			},
			gallery: [
				{ src: '/assets/img/projects/project-2-pad-before.jpg',    tag: 'Before'    },
				{ src: '/assets/img/projects/project-2-vacuum-before.jpg', tag: 'Progress'  },
				{ src: '/assets/img/projects/project-2-pad-after.jpg',     tag: 'After'     },
				{ src: '/assets/img/projects/project-2-vacuum-after.jpg',  tag: 'Completed' }
			],
			scope: [
				{
					title: 'Concrete Pad Installation',
					items: [
						'Layout and preparation of installation area',
						'Light excavation as needed',
						'Gravel base preparation and compaction',
						'Form setting',
						'Pouring and finishing of concrete pad (broom finish)',
						'Allow proper curing time'
					]
				},
				{
					title: 'Vacuum Installation',
					items: [
						'Mounting and securing of vacuum equipment'
					]
				},
				{
					title: 'Electrical Adjustment',
					items: [
						'Extension/relocation of existing electrical line approximately 12 feet to reach new equipment location',
						'Installation of conduit and proper connections',
						'Mounting and securing electrical box as needed'
					]
				},
				{
					title: 'Finalization',
					items: [
						'Testing of installation (excluding internal equipment functionality)'
					]
				}
			],
			details: {
				type: 'Construction', property: 'Exterior Area',
				duration: '2 Days',   completed: 'May 2024',
				team: '2 Crews',      location: 'Florida'
			}
		},
		{
			id: 3,
			title: 'Exterior Wood Louver Doors',
			category: 'finishes',
			area: 'Exterior',
			coverImg: '/assets/img/projects/project-3-after.jpg',
			video: {
				src:    '/assets/img/projects/video-3.mp4',
				poster: '/assets/img/projects/project-3-after.jpg'
			},
			gallery: [
				{ src: '/assets/img/projects/project-3-prep-before.jpg',   tag: 'Before'    },
				{ src: '/assets/img/projects/project-3-finish-before.jpg', tag: 'Progress'  },
				{ src: '/assets/img/projects/project-3-prep-after.jpg',    tag: 'After'     },
				{ src: '/assets/img/projects/project-3-finish-after.jpg',  tag: 'Completed' }
			],
			scope: [
				{
					title: 'Surface Preparation',
					items: [
						'Deep cleaning of doors using an exterior-grade cleaner to remove dirt, mildew, and surface contaminants',
						'Full sanding of all door surfaces, including louvers and frames, to remove worn finish and prepare the wood for refinishing',
						'Detailed hand sanding in louvered areas to ensure proper adhesion'
					]
				},
				{
					title: 'Wood Repairs',
					items: [
						'Minor wood repairs using exterior-grade wood filler as needed',
						'Sanding of repaired areas to achieve a smooth, uniform surface'
					]
				},
				{
					title: 'Finishing & Protection',
					items: [
						'Application of two to three (2–3) coats of exterior spar urethane (gloss finish) to restore the natural wood appearance',
						'Finish provides UV protection, moisture resistance, and a durable glossy "like-new" appearance',
						'Light sanding between coats for a smooth professional finish'
					]
				},
				{
					title: 'Final Detailing',
					items: [
						'Sealing of door edges and bottom to protect against moisture intrusion'
					]
				}
			],
			details: {
				type: 'Finishes', property: 'Exterior Doors',
				duration: '1 Day', completed: 'May 2024',
				team: '1 Crew',    location: 'Florida'
			}
		},
		{
			id: 4,
			title: 'Staircase Pressure Washing, Metal Preparation & Painting',
			category: 'maintenance',
			area: 'Staircase',
			coverImg: '/assets/img/projects/project-4-after.jpg',
			video: {
				src:    '/assets/img/projects/video-5.mp4',
				poster: '/assets/img/projects/project-4-after.jpg'
			},
			gallery: [
				{ src: '/assets/img/projects/project-4-washing-before.jpg', tag: 'Before'    },
				{ src: '/assets/img/projects/project-4-metal-before.jpg',   tag: 'Progress'  },
				{ src: '/assets/img/projects/project-4-paint-after.jpg',    tag: 'After'     },
				{ src: '/assets/img/projects/project-4-washing-after.jpg',  tag: 'Completed' }
			],
			scope: [
				{
					title: 'Pressure Washing',
					items: [
						'Full pressure washing of all staircase surfaces'
					]
				},
				{
					title: 'Metal Surface Preparation',
					items: [
						'Mechanical sanding of all metal components affected by rust and surface deterioration, including handrails and guardrails, interior and exterior metal stair edges, and metal sections at the base and start of each staircase',
						'Removal of loose paint, rust, and oxidation to properly prepare surfaces for coating'
					]
				},
				{
					title: 'Priming',
					items: [
						'Application of primer coat to all prepared metal surfaces'
					]
				},
				{
					title: 'Painting',
					items: [
						'Application of finish coating to all metal components'
					]
				},
				{
					title: 'Final Result',
					items: [
						'Significantly improved overall appearance of the staircases',
						'Enhanced curb appeal and a refreshed, well-maintained look throughout the property'
					]
				}
			],
			details: {
				type: 'Maintenance', property: 'Staircase',
				duration: '3 Days',  completed: 'May 2024',
				team: '2 Crews',     location: 'Florida'
			}
		},
		{
			id: 5,
			title: 'Bathroom Ceiling Drywall Repair & Restoration',
			category: 'renovation',
			area: 'Bathroom',
			coverImg: '/assets/img/projects/project-5-after.jpg',
			video: {
				src:    '/assets/img/projects/video-7.mp4',
				poster: '/assets/img/projects/project-5-after.jpg'
			},
			gallery: [
				{ src: '/assets/img/projects/project-5-ceiling-before.jpg',     tag: 'Before'    },
				{ src: '/assets/img/projects/project-5-restoration-before.jpg', tag: 'Progress'  },
				{ src: '/assets/img/projects/project-5-ceiling-after.jpg',      tag: 'After'     },
				{ src: '/assets/img/projects/project-5-restoration-after.jpg',  tag: 'Completed' }
			],
			scope: [
				{
					title: 'Ceiling Removal & Assessment',
					items: [
						'Complete removal of all existing ceiling texture due to moisture damage and mold presence'
					]
				},
				{
					title: 'Drywall Repair',
					items: [
						'Patching, smoothing, and preparing the surface to ensure a uniform and consistent finish'
					]
				},
				{
					title: 'Priming',
					items: [
						'Application of high-quality primer to seal the surface and prevent future moisture issues'
					]
				},
				{
					title: 'Painting',
					items: [
						'Painting of bathroom ceiling and surrounding areas to achieve a clean, even, and professional appearance'
					]
				}
			],
			details: {
				type: 'Renovation', property: 'Bathroom',
				duration: '2 Days', completed: 'May 2024',
				team: '1 Crew',     location: 'Florida'
			}
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

		<!-- ═══════════════ HERO ═══════════════ -->
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

			<!-- ═══════════════ FILTROS ═══════════════ -->
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

			<!-- ═══════════════ LAYOUT PRINCIPAL ═══════════════ -->
			<div class="project-layout">

				<!-- Lista izquierda -->
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

				<!-- Panel de detalle -->
				<section class="project-detail">

					<!-- Título -->
					<div class="detail-title">
						<span>{String(selectedProject.id).padStart(2, '0')}</span>
						<h2>{selectedProject.title}</h2>
					</div>

					<!-- Video del proyecto -->
					<div class="project-video">
						{#if selectedProject.video}
							{#key selectedProject.id}
								<div class="project-video-stage">
									<video controls poster={selectedProject.video.poster}>
										<source src={selectedProject.video.src} type="video/mp4" />
									</video>
								</div>
							{/key}
						{:else}
							<div class="empty-state">No video available</div>
						{/if}
					</div>

					<!-- Galería arrastrable -->
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

					<!-- ═══ PROJECT PROCESS (reemplaza Scope of Work) ═══ -->
					<div class="process-section">
						<div class="process-header">
							<h3>Project Process</h3>
							<p>A clear breakdown of every stage involved in completing this project</p>
						</div>

						<div class="process-timeline">
							{#each selectedProject.scope as group, i}
								{@const stepId   = i + 1}
								{@const isActive = activeStep === stepId}
								{@const isDone   = stepId < activeStep}
								{@const isLast   = i === selectedProject.scope.length - 1}

								<div class="timeline-row">
									{#if !isLast}
										<div class="tl-vline" class:tl-vline-done={isDone}></div>
									{/if}

									<div class="tl-indicator">
										<button
											class="tl-dot"
											class:tl-dot-active={isActive}
											class:tl-dot-done={isDone}
											onclick={() => toggleStep(stepId)}
											aria-label="Toggle step {stepId}"
										>
											{#if isDone}
												<i class="bi bi-check-lg"></i>
											{:else}
												{String(stepId).padStart(2, '0')}
											{/if}
										</button>
									</div>

									<div class="tl-body">
										<button class="tl-head" onclick={() => toggleStep(stepId)}>
											<span class="tl-name" class:tl-name-muted={!isActive && !isDone}>
												{group.title}
											</span>
											<i class="bi {isActive ? 'bi-chevron-up' : 'bi-chevron-down'} tl-chevron"></i>
										</button>

										{#if isActive}
											<div class="tl-content">
												<ul class="tl-list">
													{#each group.items as item}
														<li>
															<i class="bi bi-check-circle-fill tl-check"></i>
															{item}
														</li>
													{/each}
												</ul>
											</div>
										{/if}
									</div>
								</div>
							{/each}
						</div>
					</div>

				</section>
			</div>

			<!-- ═══════════════ CTA ═══════════════ -->
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

	<!-- ═══════════════ ZOOM OVERLAY ═══════════════ -->
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

	/* ══ HERO ══ */
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

	/* ══ WRAP ══ */
	.work-wrap {
		max-width: 1480px;
		margin: 0 auto;
		padding: 24px 36px 46px;
	}

	/* ══ FILTROS ══ */
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

	/* ══ LAYOUT ══ */
	.project-layout {
		display: grid;
		grid-template-columns: 420px 1fr;
		gap: 24px;
		align-items: start;
	}

	/* ══ LISTA ══ */
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

	/* ══ DETALLE ══ */
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

	/* ══ VIDEO PRINCIPAL ══ */
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

	/* ══ GALERÍA ══ */
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

	/* ══ PROJECT PROCESS ══ */
	.process-section {
		padding: 28px;
		border-top: 1px solid rgba(34, 38, 30, 0.09);
	}

	.process-header {
		margin-bottom: 24px;
	}

	.process-header h3 {
		margin: 0 0 4px;
		font-size: 18px;
		font-weight: 900;
		color: #232820;
	}

	.process-header p {
		margin: 0;
		font-size: 13px;
		color: #5d6457;
	}

	.process-timeline {
		display: flex;
		flex-direction: column;
	}

	/* cada fila */
	.timeline-row {
		display: grid;
		grid-template-columns: 44px 1fr;
		gap: 0 14px;
		position: relative;
	}

	/* línea vertical entre dots */
	.tl-vline {
		position: absolute;
		left: 21px;
		top: 40px;
		bottom: 0;
		width: 1.5px;
		background: #e5e5e5;
		transition: background .3s;
		z-index: 0;
	}

	.tl-vline-done { background: rgba(107, 107, 40, 0.3); }

	/* dot */
	.tl-indicator {
		display: flex;
		align-items: flex-start;
		justify-content: center;
		padding-top: 8px;
		position: relative;
		z-index: 1;
	}

	.tl-dot {
		width: 38px;
		height: 38px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 12px;
		font-weight: 700;
		cursor: pointer;
		transition: all .25s ease;
		border: 1.5px solid #e5e5e5;
		background: #fff;
		color: #999;
		font-family: inherit;
		flex-shrink: 0;
	}

	.tl-dot:hover {
		border-color: rgba(107, 107, 40, 0.4);
		color: #6b6b28;
		box-shadow: 0 0 0 4px rgba(107, 107, 40, 0.08);
	}

	.tl-dot-active {
		background: linear-gradient(135deg, #6b6b28 0%, #4a4a1c 100%);
		border-color: #6b6b28;
		color: #fff;
		box-shadow: 0 6px 18px rgba(107, 107, 40, 0.35);
	}

	.tl-dot-done {
		background: linear-gradient(135deg, #fffcd9 0%, #f5f0c0 100%);
		border-color: rgba(107, 107, 40, 0.3);
		color: #6b6b28;
	}

	/* body del step */
	.tl-body { padding: 0 0 18px; }

	.tl-head {
		display: flex;
		align-items: center;
		gap: 10px;
		padding: 8px 0;
		cursor: pointer;
		background: none;
		border: none;
		width: 100%;
		text-align: left;
		font-family: inherit;
	}

	.tl-head:hover .tl-name { color: #6b6b28; }

	.tl-name {
		font-size: 14px;
		font-weight: 700;
		color: #1a1a1a;
		transition: color .2s;
	}

	.tl-name-muted {
		font-weight: 500;
		color: #888;
	}

	.tl-chevron {
		margin-left: auto;
		font-size: 13px;
		color: #aaa;
		transition: color .2s;
	}

	.tl-head:hover .tl-chevron { color: #6b6b28; }

	/* contenido expandido */
	.tl-content {
		background: #fafaf2;
		border: 1.5px solid rgba(107, 107, 40, 0.1);
		border-radius: 10px;
		padding: 16px 18px;
		margin-bottom: 4px;
		animation: slideDown .25s ease;
	}

	@keyframes slideDown {
		from { opacity: 0; transform: translateY(-6px); }
		to   { opacity: 1; transform: translateY(0);    }
	}

	.tl-list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.tl-list li {
		display: flex;
		align-items: flex-start;
		gap: 9px;
		font-size: 13.5px;
		color: #2e342d;
		line-height: 1.45;
	}

	.tl-check {
		color: #6b6b28;
		font-size: 13px;
		flex-shrink: 0;
		margin-top: 2px;
	}

	/* ══ CTA ══ */
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

	/* ══ ZOOM OVERLAY ══ */
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

	/* ══ RESPONSIVE ══ */
	@media (max-width: 1200px) {
		.project-layout        { grid-template-columns: 1fr; }
		.project-list          { position: static; display: grid; grid-template-columns: repeat(2, 1fr); }
		.project-card .arrow   { display: none; }
	}

	@media (max-width: 820px) {
		.work-hero             { min-height: 390px; }
		.hero-copy             { padding: 80px 24px 58px; max-width: 420px; }
		.hero-copy h1          { font-size: 42px; }
		.hero-img {
			background:
				linear-gradient(90deg, rgba(250,249,244,.86) 0%, rgba(250,249,244,.62) 45%, rgba(250,249,244,.22) 100%),
				url('/assets/img/projects.png') center / cover no-repeat;
		}
		.work-wrap             { padding: 20px 18px 36px; }
		.project-list          { grid-template-columns: 1fr; }
		.project-card          { flex-direction: row; }
		.gallery-item          { width: 170px; height: 310px; }
		.detail-title          { padding: 24px 22px 16px; }
		.detail-title h2       { font-size: 22px; }
		.project-video         { padding: 8px 22px 22px; }
		.gallery-section       { padding: 0 22px 22px; }
		.process-section       { padding: 24px 22px; }
		.cta-box               { grid-template-columns: 1fr; text-align: center; justify-items: center; }
	}
</style>