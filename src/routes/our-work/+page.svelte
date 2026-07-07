<script>
	import SiteShell from '$lib/components/layout/SiteShell.svelte';
	// import TestimonialsSection from '$lib/components/sections/TestimonialsSection.svelte';
	import CtaSection from '$lib/components/sections/CtaSection.svelte';

	let activeFilter = $state('all');
	let selectedId   = $state(1);

	function selectProject(id) {
		selectedId = id;
	}

	const filters = [
		{ id: 'all',          label: 'ALL PROJECTS', icon: 'bi-grid-3x3-gap'     },
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
			youtubeId: 'c-tEfUunsHo',
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
			youtubeId: '0DGU5MQpO7Y',
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
			youtubeId: 'ayvL0zxbN8M',
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
			youtubeId: 'syDvF8HyUKE',
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
			youtubeId: 'Fvkffi1AI74',
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
									{#if project.category !== 'renovation'}
										<span><i class="bi bi-flower1"></i> {project.category}</span>
									{/if}
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

					<div class="coming-soon">
						<div class="coming-soon-icon"><i class="bi bi-camera-reels"></i></div>
						<h3>Photos &amp; Video Coming Soon</h3>
						<p>We're updating this project's media. Check back soon to see the full before-and-after gallery.</p>
					</div>

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

	<!-- <TestimonialsSection /> -->
	<CtaSection />

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

	/* COMING SOON */
	.coming-soon {
		margin: 8px 28px 32px;
		padding: 48px 28px;
		background: linear-gradient(135deg, #fbfaf2 0%, #f3f2e9 100%);
		border: 1px dashed rgba(122, 133, 57, 0.35);
		border-radius: 16px;
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 14px;
	}

	.coming-soon-icon {
		width: 64px; height: 64px;
		border-radius: 50%;
		background: #7a8539;
		color: #fff;
		display: grid; place-items: center;
		font-size: 26px;
	}

	.coming-soon h3 {
		margin: 0;
		font-size: 20px;
		font-weight: 900;
		color: #232820;
	}

	.coming-soon p {
		margin: 0;
		max-width: 420px;
		font-size: 14px;
		line-height: 1.6;
		color: #5d6457;
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
		.detail-title    { padding: 24px 22px 16px; }
		.detail-title h2 { font-size: 22px; }
		.coming-soon     { margin: 8px 22px 22px; padding: 36px 20px; }
		.process-section { padding: 24px 22px; }
		.cta-box         { grid-template-columns: 1fr; text-align: center; justify-items: center; }
	}
</style>