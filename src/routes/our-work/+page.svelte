<script>
import SiteShell from '$lib/components/layout/SiteShell.svelte';

	let activeFilter = $state('todos');
	let activeTab = $state('resumen');
	let sortBy = $state('recientes');

	const filters = [
		{ id: 'todos',         label: 'Todos los proyectos', icon: 'bi-grid-3x3-gap-fill' },
		{ id: 'renovaciones',  label: 'Renovaciones',        icon: 'bi-house-gear-fill' },
		{ id: 'mantenimiento', label: 'Mantenimiento',       icon: 'bi-tools' },
		{ id: 'turnovers',     label: 'Turnovers',           icon: 'bi-arrow-repeat' },
		{ id: 'construccion',  label: 'Construcción',        icon: 'bi-bricks' },
		{ id: 'acabados',      label: 'Acabados',            icon: 'bi-palette-fill' }
	];

	const projects = [
		{
			id: 1,
			featured: true,
			title: '1. Instalación XYZ',
			description: 'Renovación completa de unidades: cocina, pisos, pintura y acabados.',
			category: 'renovaciones',
			before: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80',
			after:  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80',
			video: true,
			duration: '00:45',
			meta: [
				{ icon: 'bi-clock-history', value: '48h',  label: 'Turnover' },
				{ icon: 'bi-buildings',     value: '120',  label: 'Unidades' },
				{ icon: 'bi-calendar-week', value: '5 días', label: 'Duración' }
			]
		},
		{
			id: 2,
			title: '2. Remodelación',
			description: 'Remodelación de áreas comunes y amenidades.',
			category: 'renovaciones',
			before: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80',
			after:  'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&q=80',
			photos: 12,
			video: true
		},
		{
			id: 3,
			title: '3. Mantenimiento',
			description: 'Mantenimiento preventivo y correctivo en instalaciones.',
			category: 'mantenimiento',
			before: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&q=80',
			after:  'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=600&q=80',
			photos: 6,
			video: true
		},
		{
			id: 4,
			title: '4. Construcción',
			description: 'Construcción desde cimientos hasta entrega final.',
			category: 'construccion',
			before: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80',
			after:  'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80',
			photos: 18,
			video: true
		},
		{
			id: 5,
			title: '5. Ampliación',
			description: 'Ampliación de área existente con acabados premium.',
			category: 'construccion',
			before: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80',
			after:  'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80',
			photos: 9,
			video: true
		},
		{
			id: 6,
			title: '6. Acabados',
			description: 'Acabados interiores y exteriores completados.',
			category: 'acabados',
			before: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
			after:  'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80',
			photos: 14,
			video: true
		}
	];

	const detailTabs = [
		{ id: 'resumen',  label: 'Resumen' },
		{ id: 'video',    label: 'Video' },
		{ id: 'antes',    label: 'Antes y Después' },
		{ id: 'galeria',  label: 'Galería (12)' },
		{ id: 'detalles', label: 'Detalles del proyecto' },
		{ id: 'docs',     label: 'Documentos' }
	];

	const keyInfo = [
		'Planificación y logística',
		'Demolición y preparación',
		'Instalaciones nuevas',
		'Acabados y detalles',
		'Limpieza final y entrega'
	];

	const galleryThumbs = [
		'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80',
		'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80',
		'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&q=80',
		'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&q=80'
	];

	let filteredProjects = $derived(
		activeFilter === 'todos'
			? projects
			: projects.filter(p => p.category === activeFilter)
	);

	let featuredProject = $derived(projects.find(p => p.featured));
	let smallProjects  = $derived(projects.filter(p => !p.featured));
</script>

<svelte:head>
	<title>Our Work | Cordova Property Services</title>
	<meta name="description" content="Explore Cordova Property Services projects, transformations, photos, videos, and completed work for multifamily properties." />
</svelte:head>

<SiteShell>
	<main class="main our-work-page">
		<section class="our-work">

	<!-- ============== HERO ============== -->
	<header class="ow-hero">
		<div class="ow-hero-bg"></div>
		<div class="ow-hero-overlay"></div>

		<div class="ow-hero-inner">
			<div class="ow-hero-text">
				<span class="ow-pill">Our Work</span>
				<h1>
					Proyectos que transforman<br/>
					propiedades y elevan estándares.
				</h1>
				<p class="ow-hero-sub">
					Conoce una selección de nuestros trabajos más recientes.<br/>
					Antes y después de cada transformación.
				</p>

				<div class="ow-trust-row">
					<span><i class="bi bi-shield-check"></i> Calidad garantizada</span>
					<span><i class="bi bi-people-fill"></i> Equipos especializados</span>
					<span><i class="bi bi-clock-history"></i> Entregas a tiempo</span>
				</div>
			</div>

			<div class="ow-stats">
				<div class="stat-cell">
					<strong>6</strong>
					<span>Proyectos<br/>completados</span>
				</div>
				<div class="stat-cell">
					<strong>100%</strong>
					<span>Entregas<br/>a tiempo</span>
				</div>
				<div class="stat-cell">
					<strong>25+</strong>
					<span>Propiedades<br/>atendidas</span>
				</div>
				<div class="stat-cell">
					<strong>5<i class="bi bi-star-fill"></i></strong>
					<span>Calificación<br/>promedio</span>
				</div>
			</div>
		</div>
	</header>

	<!-- ============== FILTRO ============== -->
	<div class="ow-filter-bar">
		<div class="ow-filter-tabs">
			{#each filters as f}
				<button
					class="ow-tab"
					class:active={activeFilter === f.id}
					onclick={() => activeFilter = f.id}>
					<i class="bi {f.icon}"></i>
					{f.label}
				</button>
			{/each}
		</div>

		<div class="ow-sort">
			<select bind:value={sortBy}>
				<option value="recientes">Más recientes</option>
				<option value="antiguos">Más antiguos</option>
				<option value="nombre">Por nombre</option>
			</select>
			<i class="bi bi-chevron-down"></i>
		</div>
	</div>

	<!-- ============== GRID ============== -->
	<div class="ow-grid">
		<!-- Featured -->
		{#if featuredProject}
			<article class="ow-card featured">
				<div class="ow-card-media split">
					<div class="ow-img-wrap">
						<img src={featuredProject.before} alt="Antes" />
						<span class="badge dark">Destacado</span>
					</div>
					<div class="ow-img-wrap">
						<img src={featuredProject.after} alt="Después" />
						<span class="badge green right">Después</span>
					</div>
					<button class="play-btn lg" aria-label="Reproducir video">
						<i class="bi bi-play-fill"></i>
					</button>
					<span class="video-info">
						<i class="bi bi-camera-video-fill"></i>
						Video {featuredProject.duration}
					</span>
				</div>

				<div class="ow-card-body featured-body">
					<div class="featured-text">
						<h3>{featuredProject.title}</h3>
						<p>{featuredProject.description}</p>
					</div>

					<div class="featured-meta">
						{#each featuredProject.meta as m}
							<div class="meta-cell">
								<i class="bi {m.icon}"></i>
								<strong>{m.value}</strong>
								<span>{m.label}</span>
							</div>
						{/each}
					</div>

					<button class="ow-arrow-btn" aria-label="Ver proyecto">
						<i class="bi bi-arrow-right"></i>
					</button>
				</div>
			</article>
		{/if}

		<!-- Small cards -->
		{#each smallProjects as p}
			<article class="ow-card small">
				<div class="ow-card-media split sm">
					<div class="ow-img-wrap">
						<img src={p.before} alt="Antes" />
						<span class="badge green tl">Antes</span>
					</div>
					<div class="ow-img-wrap">
						<img src={p.after} alt="Después" />
						<span class="badge green tr">Después</span>
					</div>
					{#if p.video}
						<button class="play-btn" aria-label="Reproducir">
							<i class="bi bi-play-fill"></i>
						</button>
					{/if}
				</div>

				<div class="ow-card-body small-body">
					<div>
						<h4>{p.title}</h4>
						<p>{p.description}</p>
						{#if p.photos}
							<span class="photos-tag">
								<i class="bi bi-images"></i> {p.photos} fotos
							</span>
						{/if}
					</div>
					<button class="ow-arrow-btn sm" aria-label="Ver proyecto">
						<i class="bi bi-arrow-right"></i>
					</button>
				</div>
			</article>
		{/each}
	</div>

	<!-- ============== DETAIL ============== -->
	<section class="ow-detail">
		<aside class="ow-detail-tabs">
			{#each detailTabs as t}
				<button
					class="dtab"
					class:active={activeTab === t.id}
					onclick={() => activeTab = t.id}>
					{t.label}
				</button>
			{/each}
		</aside>

		<div class="ow-detail-video">
			<div class="video-frame">
				<img src={featuredProject?.after} alt="Video preview"/>
				<button class="play-btn lg light" aria-label="Reproducir">
					<i class="bi bi-play-fill"></i>
				</button>
			</div>
			<div class="video-controls">
				<button aria-label="Play"><i class="bi bi-play-fill"></i></button>
				<div class="progress"><div class="bar"></div></div>
				<span class="time">00:00 / 00:45</span>
				<button aria-label="Volume"><i class="bi bi-volume-up-fill"></i></button>
				<button aria-label="Settings"><i class="bi bi-gear-fill"></i></button>
				<button aria-label="Fullscreen"><i class="bi bi-arrows-fullscreen"></i></button>
			</div>
		</div>

		<div class="ow-detail-content">
			<span class="ow-mini-pill">Proyecto 1</span>
			<h3>Instalación XYZ</h3>
			<p>
				Renovación completa de unidades que incluyó demolición, nuevas
				instalaciones, acabados, pintura y detalles finalizados con materiales
				de primera calidad.
			</p>

			<div class="detail-meta">
				<div>
					<i class="bi bi-tag-fill"></i>
					<span>Tipo de proyecto</span>
					<strong>Renovación</strong>
				</div>
				<div>
					<i class="bi bi-building"></i>
					<span>Propiedad</span>
					<strong>XYZ Apartments</strong>
				</div>
				<div>
					<i class="bi bi-calendar-week"></i>
					<span>Duración</span>
					<strong>5 días</strong>
				</div>
				<div>
					<i class="bi bi-grid-fill"></i>
					<span>Unidades</span>
					<strong>120</strong>
				</div>
				<div>
					<i class="bi bi-clock-history"></i>
					<span>Turnover</span>
					<strong>48h</strong>
				</div>
			</div>

			<div class="ow-gallery">
				<div class="gallery-head">Antes y Después</div>
				<div class="gallery-grid">
					{#each galleryThumbs as g}
						<div class="g-cell">
							<img src={g} alt="thumb" />
							<button class="g-zoom" aria-label="Ampliar">
								<i class="bi bi-zoom-in"></i>
							</button>
						</div>
					{/each}
				</div>
			</div>
		</div>

		<aside class="ow-key-info">
			<span class="ow-mini-pill">Información Clave</span>
			<ul>
				{#each keyInfo as k}
					<li><i class="bi bi-check-circle-fill"></i> {k}</li>
				{/each}
			</ul>
			<button class="docs-btn">
				<i class="bi bi-file-earmark-text-fill"></i> Ver documentos
			</button>
		</aside>
	</section>

		</section>
	</main>
</SiteShell>

<style>

    :global(main.our-work-page){
	padding-top: 0 !important;
	margin-top: 0 !important;
}

.our-work{
	margin-top: 0 !important;
	padding-top: 0 !important;
}
	.our-work{
	--ow-dark:#1f2620;
	--ow-darker:#161c17;
	--ow-cream:#f6f7f2;
	--ow-text:#e8ebe3;
	--ow-mute:#8a9382;
	--ow-accent:#5f7f45;
	--ow-accent-2:#8aab63;

	margin-top: 0 !important;
	padding-top: 0 !important;
	font-family:'Inter','Helvetica Neue',Arial,sans-serif;
	color:var(--ow-text);
	background:var(--ow-cream);
}

	/* ============== HERO ============== */
    
	.ow-hero{
		position:relative;
		background:var(--ow-dark);
		overflow:hidden;
		isolation:isolate;
        margin-top: 0 !important;
	}
	.ow-hero-bg{
		position:absolute;
		inset:0;
		background:
			linear-gradient(90deg, rgba(31,38,32,1) 0%, rgba(31,38,32,.45) 60%, rgba(31,38,32,.6) 100%),
			url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600&q=80') center/cover;
		z-index:-2;
	}
	.ow-hero-overlay{
		position:absolute;
		inset:0;
		background:radial-gradient(circle at 20% 50%, rgba(95,127,69,.18), transparent 60%);
		z-index:-1;
	}
	.ow-hero-inner{
		max-width:1320px;
		margin:0 auto;
		padding:62px 32px 64px;
		display:grid;
		grid-template-columns:1.6fr 1fr;
		gap:48px;
		align-items:center;
	}
	.ow-pill{
		display:inline-block;
		font-size:13px;
		font-weight:800;
		letter-spacing:2px;
		text-transform:uppercase;
		color:var(--ow-accent-2);
		margin-bottom:18px;
	}
	.ow-hero h1{
		font-size:clamp(2.2rem,3.4vw,3.4rem);
		font-weight:800;
		line-height:1.12;
		letter-spacing:-.03em;
		margin:0 0 18px;
		color:#fff;
	}
	.ow-hero-sub{
		font-size:15.5px;
		line-height:1.6;
		color:#cfd5c8;
		margin:0 0 28px;
		max-width:560px;
	}
	.ow-trust-row{
		display:flex;
		flex-wrap:wrap;
		gap:28px;
		font-size:14.5px;
		color:#d6dccd;
	}
	.ow-trust-row span{
		display:inline-flex;
		align-items:center;
		gap:8px;
	}
	.ow-trust-row i{
		color:var(--ow-accent-2);
		font-size:18px;
	}
	.ow-stats{
		display:grid;
		grid-template-columns:repeat(2,1fr);
		gap:18px 30px;
		background:rgba(0,0,0,.18);
		border:1px solid rgba(255,255,255,.06);
		border-radius:14px;
		padding:24px 28px;
	}
	.stat-cell strong{
		display:block;
		font-size:34px;
		font-weight:900;
		color:#fff;
		margin-bottom:4px;
	}
	.stat-cell strong i{
		color:var(--ow-accent-2);
		font-size:24px;
		margin-left:2px;
	}
	.stat-cell span{
		font-size:13px;
		line-height:1.3;
		color:var(--ow-mute);
	}

	/* ============== FILTROS ============== */
	.ow-filter-bar{
		max-width:1320px;
		margin:0 auto;
		padding:24px 32px 8px;
		display:flex;
		justify-content:space-between;
		align-items:center;
		gap:16px;
		flex-wrap:wrap;
	}
	.ow-filter-tabs{
		display:flex;
		flex-wrap:wrap;
		gap:8px;
	}
	.ow-tab{
		display:inline-flex;
		align-items:center;
		gap:8px;
		padding:9px 14px;
		border-radius:8px;
		border:1px solid rgba(31,38,32,.08);
		background:#fff;
		color:#3a4438;
		font-size:13.5px;
		font-weight:600;
		cursor:pointer;
		transition:all .2s ease;
	}
	.ow-tab:hover{
		border-color:var(--ow-accent);
		color:var(--ow-accent);
	}
	.ow-tab.active{
		background:var(--ow-accent);
		color:#fff;
		border-color:var(--ow-accent);
	}
	.ow-tab i{font-size:14px;}

	.ow-sort{
		position:relative;
		display:inline-flex;
		align-items:center;
	}
	.ow-sort select{
		appearance:none;
		padding:9px 36px 9px 14px;
		border-radius:8px;
		border:1px solid rgba(31,38,32,.12);
		background:#fff;
		font-size:13.5px;
		color:#3a4438;
		font-weight:600;
		cursor:pointer;
	}
	.ow-sort i{
		position:absolute;
		right:12px;
		pointer-events:none;
		color:#3a4438;
	}

	/* ============== GRID ============== */
	.ow-grid{
		max-width:1320px;
		margin:0 auto;
		padding:14px 32px 28px;
		display:grid;
		grid-template-columns:1.45fr 1fr 1fr;
		grid-template-rows:auto auto;
		gap:20px;
	}
	.ow-card{
		background:var(--ow-darker);
		border-radius:16px;
		overflow:hidden;
		display:flex;
		flex-direction:column;
		box-shadow:0 14px 40px rgba(0,0,0,.18);
	}
	.ow-card.featured{
		grid-row:span 2;
	}

	.ow-card-media{
		position:relative;
		aspect-ratio:16/9;
		background:#0e1410;
	}
	.ow-card-media.split{
		display:grid;
		grid-template-columns:1fr 1fr;
		gap:1px;
	}
	.ow-card.featured .ow-card-media{aspect-ratio:16/8;}
	.ow-card.small .ow-card-media{aspect-ratio:16/9;}

	.ow-img-wrap{
		position:relative;
		overflow:hidden;
	}
	.ow-img-wrap img{
		width:100%;
		height:100%;
		object-fit:cover;
		display:block;
	}

	.badge{
		position:absolute;
		top:12px;
		left:12px;
		padding:5px 11px;
		border-radius:8px;
		font-size:11.5px;
		font-weight:700;
		text-transform:uppercase;
		letter-spacing:.5px;
		color:#fff;
	}
	.badge.dark{background:rgba(0,0,0,.65);}
	.badge.green{background:var(--ow-accent);}
	.badge.right{left:auto;right:12px;}
	.badge.tl{top:10px;left:10px;}
	.badge.tr{top:10px;right:10px;left:auto;}

	.play-btn{
		position:absolute;
		top:50%;
		left:50%;
		transform:translate(-50%,-50%);
		width:46px;
		height:46px;
		border-radius:50%;
		background:rgba(0,0,0,.55);
		border:1.5px solid rgba(255,255,255,.6);
		color:#fff;
		display:flex;
		align-items:center;
		justify-content:center;
		cursor:pointer;
		font-size:18px;
		transition:all .25s ease;
	}
	.play-btn:hover{background:var(--ow-accent);border-color:var(--ow-accent);}
	.play-btn.lg{width:64px;height:64px;font-size:26px;}
	.play-btn.light{background:rgba(255,255,255,.18);}

	.video-info{
		position:absolute;
		bottom:12px;
		left:12px;
		display:inline-flex;
		align-items:center;
		gap:6px;
		font-size:12px;
		color:#fff;
		background:rgba(0,0,0,.55);
		padding:5px 10px;
		border-radius:6px;
	}

	.ow-card-body{
		padding:20px 22px 22px;
		flex:1;
		color:#dfe3d8;
	}
	.featured-body{
		display:grid;
		grid-template-columns:1.1fr 1.4fr auto;
		align-items:center;
		gap:24px;
	}
	.featured-text h3{
		font-size:22px;
		font-weight:800;
		color:#fff;
		margin:0 0 6px;
	}
	.featured-text p{
		margin:0;
		font-size:14px;
		color:#a9b0a2;
		line-height:1.45;
	}

	.featured-meta{
		display:grid;
		grid-template-columns:repeat(3,1fr);
		gap:14px;
	}
	.meta-cell{
		display:flex;
		flex-direction:column;
		align-items:center;
		text-align:center;
		padding:10px 6px;
	}
	.meta-cell i{
		color:var(--ow-accent-2);
		font-size:18px;
		margin-bottom:6px;
	}
	.meta-cell strong{
		font-size:15px;
		font-weight:800;
		color:#fff;
	}
	.meta-cell span{
		font-size:11.5px;
		color:#8a9382;
		text-transform:uppercase;
		letter-spacing:.5px;
		margin-top:2px;
	}

	.small-body{
		display:flex;
		justify-content:space-between;
		align-items:flex-start;
		gap:14px;
		padding:16px 18px;
	}
	.small-body h4{
		font-size:15px;
		font-weight:800;
		color:#fff;
		margin:0 0 4px;
	}
	.small-body p{
		font-size:12.5px;
		color:#a9b0a2;
		margin:0 0 8px;
		line-height:1.4;
	}
	.photos-tag{
		display:inline-flex;
		align-items:center;
		gap:6px;
		font-size:11.5px;
		color:#cfd5c8;
		background:rgba(255,255,255,.05);
		padding:3px 8px;
		border-radius:6px;
	}

	.ow-arrow-btn{
		width:42px;
		height:42px;
		border-radius:10px;
		background:var(--ow-accent);
		color:#fff;
		border:none;
		cursor:pointer;
		display:flex;
		align-items:center;
		justify-content:center;
		font-size:18px;
		flex-shrink:0;
		transition:transform .2s ease,background .2s ease;
	}
	.ow-arrow-btn:hover{background:var(--ow-accent-2);transform:translateX(2px);}
	.ow-arrow-btn.sm{width:36px;height:36px;font-size:16px;}

	/* ============== DETAIL ============== */
	.ow-detail{
		max-width:1320px;
		margin:8px auto 32px;
		padding:0 32px;
		display:grid;
		grid-template-columns:170px 1.1fr 1.3fr 240px;
		gap:18px;
		background:var(--ow-darker);
		border-radius:18px;
		padding:26px 28px;
	}
	.ow-detail-tabs{
		display:flex;
		flex-direction:column;
		gap:4px;
	}
	.dtab{
		text-align:left;
		padding:10px 14px;
		background:transparent;
		border:none;
		color:#a9b0a2;
		font-size:13.5px;
		border-radius:8px;
		cursor:pointer;
		transition:all .2s ease;
	}
	.dtab:hover{background:rgba(255,255,255,.04);color:#fff;}
	.dtab.active{background:rgba(95,127,69,.16);color:#fff;font-weight:600;}

	.ow-detail-video{
		display:flex;
		flex-direction:column;
	}
	.video-frame{
		position:relative;
		flex:1;
		border-radius:12px;
		overflow:hidden;
		background:#0e1410;
	}
	.video-frame img{
		width:100%;
		height:100%;
		object-fit:cover;
	}
	.video-controls{
		display:flex;
		align-items:center;
		gap:10px;
		padding:8px 6px 0;
		color:#cfd5c8;
		font-size:12px;
	}
	.video-controls button{
		background:transparent;
		border:none;
		color:#cfd5c8;
		cursor:pointer;
		font-size:14px;
	}
	.video-controls .progress{
		flex:1;
		height:4px;
		background:rgba(255,255,255,.08);
		border-radius:99px;
		overflow:hidden;
	}
	.video-controls .bar{
		width:30%;
		height:100%;
		background:var(--ow-accent-2);
	}
	.time{font-variant-numeric:tabular-nums;}

	.ow-detail-content{
		color:#dfe3d8;
	}
	.ow-mini-pill{
		display:inline-block;
		font-size:11.5px;
		font-weight:800;
		letter-spacing:1.5px;
		text-transform:uppercase;
		color:var(--ow-accent-2);
		margin-bottom:6px;
	}
	.ow-detail-content h3{
		font-size:24px;
		font-weight:800;
		color:#fff;
		margin:2px 0 8px;
	}
	.ow-detail-content > p{
		font-size:13.5px;
		line-height:1.55;
		color:#a9b0a2;
		margin:0 0 16px;
	}
	.detail-meta{
		display:grid;
		grid-template-columns:repeat(5,auto);
		gap:18px;
		margin-bottom:18px;
	}
	.detail-meta > div{
		display:flex;
		flex-direction:column;
		font-size:11.5px;
		color:#8a9382;
		text-transform:uppercase;
		letter-spacing:.5px;
	}
	.detail-meta i{
		color:var(--ow-accent-2);
		font-size:14px;
		margin-bottom:4px;
	}
	.detail-meta strong{
		color:#fff;
		font-size:13px;
		font-weight:700;
		text-transform:none;
		letter-spacing:0;
		margin-top:2px;
	}

	.ow-gallery{
		border-top:1px solid rgba(95,127,69,.18);
		padding-top:14px;
	}
	.gallery-head{
		font-size:11.5px;
		font-weight:800;
		text-transform:uppercase;
		letter-spacing:1.5px;
		color:var(--ow-accent-2);
		margin-bottom:10px;
	}
	.gallery-grid{
		display:grid;
		grid-template-columns:repeat(4,1fr);
		gap:8px;
	}
	.g-cell{
		position:relative;
		aspect-ratio:1.2;
		border-radius:8px;
		overflow:hidden;
	}
	.g-cell img{
		width:100%;
		height:100%;
		object-fit:cover;
	}
	.g-zoom{
		position:absolute;
		bottom:6px;
		right:6px;
		width:26px;
		height:26px;
		border-radius:50%;
		background:rgba(0,0,0,.55);
		color:#fff;
		border:none;
		cursor:pointer;
		font-size:12px;
		display:flex;
		align-items:center;
		justify-content:center;
	}

	.ow-key-info{
		background:rgba(255,255,255,.03);
		border:1px solid rgba(95,127,69,.18);
		border-radius:12px;
		padding:18px;
		display:flex;
		flex-direction:column;
		gap:12px;
		height:fit-content;
	}
	.ow-key-info ul{
		list-style:none;
		margin:0;
		padding:0;
		display:flex;
		flex-direction:column;
		gap:10px;
	}
	.ow-key-info li{
		font-size:13px;
		color:#cfd5c8;
		display:flex;
		align-items:center;
		gap:8px;
	}
	.ow-key-info li i{color:var(--ow-accent-2);}
	.docs-btn{
		margin-top:8px;
		background:var(--ow-accent);
		color:#fff;
		border:none;
		padding:10px 14px;
		border-radius:10px;
		font-size:13px;
		font-weight:700;
		cursor:pointer;
		display:inline-flex;
		align-items:center;
		justify-content:center;
		gap:8px;
		transition:background .2s ease;
	}
	.docs-btn:hover{background:var(--ow-accent-2);}

	/* ============== RESPONSIVE ============== */
	@media (max-width:1180px){
		.ow-hero-inner{grid-template-columns:1fr;gap:32px;}
		.ow-grid{grid-template-columns:1fr 1fr;}
		.ow-card.featured{grid-column:span 2;grid-row:auto;}
		.ow-detail{grid-template-columns:160px 1fr;gap:18px;}
		.ow-detail-video{grid-column:span 2;}
		.ow-detail-content{grid-column:span 2;}
		.ow-key-info{grid-column:span 2;}
		.detail-meta{grid-template-columns:repeat(3,1fr);}
	}
	@media (max-width:760px){
		.ow-hero-inner{padding:48px 22px;}
		.ow-stats{grid-template-columns:1fr 1fr;padding:18px;}
		.ow-grid{grid-template-columns:1fr;padding:14px 22px 24px;}
		.ow-card.featured{grid-column:auto;}
		.featured-body{grid-template-columns:1fr;text-align:center;gap:14px;}
		.featured-meta{grid-template-columns:repeat(3,1fr);}
		.ow-detail{grid-template-columns:1fr;padding:20px;}
		.ow-detail-tabs{flex-direction:row;overflow-x:auto;}
		.dtab{white-space:nowrap;}
		.detail-meta{grid-template-columns:repeat(2,1fr);}
		.gallery-grid{grid-template-columns:repeat(2,1fr);}
	}
</style>