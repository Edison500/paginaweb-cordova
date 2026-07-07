<script>
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import { page } from '$app/state';

	let { data, form } = $props();

	const statusLabels = {
		new: 'Nuevo',
		viewed: 'Visto',
		contacted: 'Contactado',
		closed: 'Cerrado'
	};

	let activeTab = $state('messages');
	let showMoreFilters = $state(false);
	let selectedRequestId = $state(null);
	let dialogEl = $state(null);
	let replyFormEl = $state(null);
	let modalVisible = $state(false);

	let selectedRequest = $derived(data.requests.find((r) => r.id === selectedRequestId) ?? null);

	$effect(() => {
		if (selectedRequestId && dialogEl && !dialogEl.open) {
			dialogEl.showModal();
			requestAnimationFrame(() => { modalVisible = true; });
		}
		if (!selectedRequestId) {
			modalVisible = false;
		}
	});

	function formatDate(value) {
		if (!value) return '—';
		return new Intl.DateTimeFormat('es-PE', {
			month: 'short',
			day: '2-digit',
			year: 'numeric',
			hour: '2-digit',
			minute: '2-digit'
		}).format(new Date(value));
	}

	function fullName(request) {
		return `${request.first_name || ''} ${request.last_name || ''}`.trim() || 'Sin nombre';
	}

	function preview(message, len = 140) {
		const text = String(message || '').replace(/\s+/g, ' ').trim();
		return text.length > len ? `${text.slice(0, len)}…` : text;
	}

	function formatPageName(path) {
		const value = String(path || '/').split('?')[0].split('#')[0];

		const fixedNames = {
			'/': 'Home',
			'/about': 'About',
			'/contact': 'Contact',
			'/our-work': 'Our Work',
			'/services': 'Services'
		};

		if (fixedNames[value]) return fixedNames[value];

		if (value.startsWith('/services/')) {
			const slug = value.replace('/services/', '').replace(/\/$/, '');
			return slug
				.split('-')
				.filter(Boolean)
				.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
				.join(' ');
		}

		const lastPart = value.split('/').filter(Boolean).pop();
		if (!lastPart) return 'Home';

		return lastPart
			.split('-')
			.filter(Boolean)
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
			.join(' ');
	}

	function buildFilterUrl(overrides = {}) {
		const merged = { ...data.filters, ...overrides };
		const params = new URLSearchParams();
		if (merged.q) params.set('q', merged.q);
		if (merged.status && merged.status !== 'all') params.set('status', merged.status);
		if (merged.service && merged.service !== 'all') params.set('service', merged.service);
		if (merged.emailSent && merged.emailSent !== 'all') params.set('emailSent', merged.emailSent);
		if (merged.from) params.set('from', merged.from);
		if (merged.to) params.set('to', merged.to);
		const qs = params.toString();
		return `/admin/dashboard${qs ? `?${qs}` : ''}`;
	}

	function buildExportUrl() {
		const url = buildFilterUrl();
		const [path, qs] = url.split('?');
		return `${path}/export${qs ? `?${qs}` : ''}`;
	}

	const STALE_HOURS = 24;

	function isStale(request) {
		if (request.status !== 'new') return false;
		const created = new Date(request.created_at).getTime();
		if (Number.isNaN(created)) return false;
		return Date.now() - created > STALE_HOURS * 60 * 60 * 1000;
	}

	function formatReferrer(referrer) {
		if (!referrer) return 'Directo / desconocido';
		try {
			return new URL(referrer).host;
		} catch {
			return referrer;
		}
	}

	function formatUserAgent(ua) {
		if (!ua) return 'Desconocido';
		const isMobile = /Mobile|Android|iPhone/i.test(ua);
		let browser = 'Navegador';
		if (/Edg\//.test(ua)) browser = 'Edge';
		else if (/Chrome\//.test(ua) && !/Chromium/.test(ua)) browser = 'Chrome';
		else if (/Firefox\//.test(ua)) browser = 'Firefox';
		else if (/Safari\//.test(ua) && !/Chrome/.test(ua)) browser = 'Safari';
		return `${isMobile ? 'Móvil' : 'Escritorio'} · ${browser}`;
	}

	function currentMonthValue() {
		const now = new Date();
		return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
	}

	function updatePagesQuery(overrides) {
		const params = new URLSearchParams(page.url.searchParams);
		for (const [key, value] of Object.entries(overrides)) {
			if (value === null || value === undefined || value === '') params.delete(key);
			else params.set(key, value);
		}
		goto(`/admin/dashboard?${params.toString()}`, { noScroll: true, keepFocus: true });
	}

	function setPagesPeriod(period) {
		if (period === 'month') {
			updatePagesQuery({ pagesPeriod: 'month', pagesMonth: data.topPagesRange.monthValue || currentMonthValue() });
		} else {
			updatePagesQuery({ pagesPeriod: period, pagesMonth: null });
		}
	}

	function setPagesMonth(monthValue) {
		updatePagesQuery({ pagesPeriod: 'month', pagesMonth: monthValue });
	}

	function buildMailto(request) {
		const subject = `Re: Your ${request.service_needed} Request - Cordova Property Services`;
		const rawMessage = String(request.message || '');
		const trimmedMessage = rawMessage.length > 400 ? `${rawMessage.slice(0, 400)}...` : rawMessage;
		const body =
			`Hi ${request.first_name || ''},\n\n` +
			`Thanks for reaching out to Cordova Property Services about ${request.service_needed}. We received your request and wanted to follow up personally.\n\n` +
			`[Add details here: next steps, estimate, or availability]\n\n` +
			`If it's easier to talk it through, feel free to call us directly at (448) 219-6669, or reach our scheduling team at (850) 323-8103.\n\n` +
			`Looking forward to helping you get this done right.\n\n` +
			`Best,\n` +
			`Cordova Property Services\n` +
			`customer@cordovaps.com | cordovaps.com\n\n` +
			`— Your original message —\n${trimmedMessage}`;
		return `mailto:${request.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
	}

	function openRequest(request) {
		selectedRequestId = request.id;
	}

	function closeModal() {
		dialogEl?.close();
	}

	let awaitingReplyConfirm = $state(false);

	function handleReply(request) {
		window.location.href = buildMailto(request);
		awaitingReplyConfirm = true;
	}

	function confirmReplySent() {
		replyFormEl?.requestSubmit();
		awaitingReplyConfirm = false;
		closeModal();
	}

	function cancelReplyConfirm() {
		awaitingReplyConfirm = false;
	}
</script>

<svelte:head>
	<title>Panel Admin | Cordova Property Services</title>
</svelte:head>

<main class="admin-page">
	<header class="admin-header">
		<div>
			<a href="/" class="brand"><img src="/assets/img/logo.png" alt="Cordova" /></a>
			<p class="eyebrow">Cordova Admin</p>
			<h1>Panel de Mensajes</h1>
			<p class="subtitle">Gestiona las solicitudes recibidas y responde sin salir de aquí.</p>
		</div>
		<form method="POST" action="/admin/logout">
			<button class="logout" type="submit">Cerrar sesión</button>
		</form>
	</header>

	{#if form?.message}
		<div class="notice success">{form.message}</div>
	{/if}
	{#if data.error}
		<div class="notice error">{data.error}</div>
	{/if}

	<nav class="tabs">
		<button type="button" class="tab" class:active={activeTab === 'messages'} onclick={() => (activeTab = 'messages')}>
			Mensajes
		</button>
		<button type="button" class="tab" class:active={activeTab === 'analytics'} onclick={() => (activeTab = 'analytics')}>
			Analítica
		</button>
	</nav>

	{#if activeTab === 'messages'}
		<section class="stats-grid">
			<div class="stat-card highlight">
				<span>Nuevos</span>
				<strong>{data.stats.newLeads}</strong>
				<p>Esperando revisión</p>
			</div>
			<div class="stat-card">
				<span>Hoy</span>
				<strong>{data.stats.today}</strong>
				<p>Solicitudes de hoy</p>
			</div>
			<div class="stat-card">
				<span>Este mes</span>
				<strong>{data.stats.month}</strong>
				<p>Total del mes</p>
			</div>
			<div class="stat-card">
				<span>Contactados</span>
				<strong>{data.stats.contacted}</strong>
				<p>Ya se les respondió</p>
			</div>
			<div class="stat-card">
				<span>Cerrados</span>
				<strong>{data.stats.closed}</strong>
				<p>Casos finalizados</p>
			</div>
		</section>

		{#if data.stats.emailFailed > 0}
			<div class="notice error">
				⚠️ {data.stats.emailFailed} correo(s) de notificación fallaron al enviarse.
				<a href={buildFilterUrl({ status: 'all', emailSent: 'failed' })} data-sveltekit-noscroll>Ver cuáles</a>
			</div>
		{/if}

		{#if data.stats.staleNew > 0}
			<div class="notice warning">
				⏰ {data.stats.staleNew} solicitud(es) llevan más de 24 horas como "Nuevo" sin atenderse.
				<a href={buildFilterUrl({ status: 'new' })} data-sveltekit-noscroll>Ver cuáles</a>
			</div>
		{/if}

		<section class="panel">
			<form class="filters" method="GET" data-sveltekit-noscroll data-sveltekit-keepfocus>
				<input type="hidden" name="status" value={data.filters.status} />
				<label class="search-field">
					<span>Buscar</span>
					<input type="search" name="q" value={data.filters.q} placeholder="Nombre, correo, teléfono, dirección..." />
				</label>
				<button type="submit" class="search-btn">Buscar</button>
				<button type="button" class="toggle-filters" onclick={() => (showMoreFilters = !showMoreFilters)}>
					{showMoreFilters ? 'Ocultar filtros' : 'Más filtros'}
				</button>

				{#if showMoreFilters}
					<div class="advanced-filters">
						<label>
							<span>Servicio</span>
							<select name="service">
								<option value="all" selected={data.filters.service === 'all'}>Todos los servicios</option>
								{#each data.services as service}
									<option value={service} selected={data.filters.service === service}>{service}</option>
								{/each}
							</select>
						</label>
						<label>
							<span>Correo</span>
							<select name="emailSent">
								<option value="all" selected={data.filters.emailSent === 'all'}>Todos</option>
								<option value="sent" selected={data.filters.emailSent === 'sent'}>Enviado</option>
								<option value="failed" selected={data.filters.emailSent === 'failed'}>Falló</option>
							</select>
						</label>
						<label>
							<span>Desde</span>
							<input type="date" name="from" value={data.filters.from} />
						</label>
						<label>
							<span>Hasta</span>
							<input type="date" name="to" value={data.filters.to} />
						</label>
						<div class="filter-actions">
							<button type="submit">Aplicar</button>
							<a href="/admin/dashboard">Limpiar todo</a>
						</div>
					</div>
				{/if}
			</form>

			<div class="status-pills">
				<a href={buildFilterUrl({ status: 'all' })} data-sveltekit-noscroll class="pill" class:active={data.filters.status === 'all'}>Todos</a>
				{#each data.statuses as status}
					<a href={buildFilterUrl({ status })} data-sveltekit-noscroll class="pill" class:active={data.filters.status === status}>
						{statusLabels[status]}
					</a>
				{/each}
			</div>
			<p class="pill-legend">
				<b>Nuevo:</b> sin revisar · <b>Visto:</b> ya abierto · <b>Contactado:</b> ya se le respondió · <b>Cerrado:</b> finalizado
			</p>

			<div class="result-row">
				<p class="result-count">{data.filteredTotal} resultado(s). Mostrando los últimos 75.</p>
				<a href={buildExportUrl()} class="export-btn" data-sveltekit-reload>Exportar CSV</a>
			</div>

			<div class="inbox-list">
				{#if data.requests.length === 0}
					<p class="empty">No se encontraron solicitudes con estos filtros.</p>
				{:else}
					{#each data.requests as request}
						<div
							class="inbox-row status-{request.status}"
							role="button"
							tabindex="0"
							onclick={() => openRequest(request)}
							onkeydown={(e) => {
								if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openRequest(request); }
							}}
						>
							<span class="unread-dot" class:show={request.status === 'new'}></span>
							<div class="inbox-main">
								<div class="inbox-line1">
									<strong>{fullName(request)}</strong>
									<span class="service-pill">{request.service_needed}</span>
								</div>
								<p class="inbox-snippet">{preview(request.message, 110)}</p>
							</div>
							<div class="inbox-side">
								{#if isStale(request)}
									<span class="stale-badge" title="Sin atender hace más de 24 horas">⏰ Sin atender</span>
								{/if}
								<span class="status-badge status-{request.status}">{statusLabels[request.status]}</span>
								<span class="date-cell">{formatDate(request.created_at)}</span>
								{#if request.email_error}
									<span class="email-fail" title={request.email_error}>Correo falló</span>
								{:else if !request.email_sent}
									<span class="muted">Pendiente</span>
								{/if}
							</div>
						</div>
					{/each}
				{/if}
			</div>
		</section>
	{:else}
		<section class="panel-grid">
			<div class="panel">
				<p class="eyebrow small">Tráfico</p>
				<h2>Resumen de visitas</h2>
				<div class="stats-grid analytics-grid">
					<div class="stat-card visitors-card">
						<span>Visitantes hoy</span>
						<strong>{data.visitStats.todayVisitors}</strong>
						<p>Aprox. visitantes únicos</p>
					</div>
					<div class="stat-card visitors-card">
						<span>Vistas hoy</span>
						<strong>{data.visitStats.todayViews}</strong>
						<p>Páginas vistas hoy</p>
					</div>
					<div class="stat-card visitors-card">
						<span>Vistas del mes</span>
						<strong>{data.visitStats.monthViews}</strong>
						<p>Páginas vistas este mes</p>
					</div>
				</div>
			</div>

			<div class="panel">
				<p class="eyebrow small">Insights</p>
				<h2>Servicios más pedidos</h2>
				<p class="side-copy">Últimos 90 días.</p>
				{#if data.topServices.length === 0}
					<p class="empty-side">Sin datos todavía.</p>
				{:else}
					<div class="service-list">
						{#each data.topServices as item}
							<div class="service-row">
								<span>{item.service}</span>
								<strong>{item.count}</strong>
							</div>
						{/each}
					</div>
				{/if}
			</div>

			<div class="panel">
				<p class="eyebrow small">Páginas</p>
				<h2>Páginas más vistas</h2>
				<div class="pages-period-picker">
					<select value={data.topPagesRange.period} onchange={(e) => setPagesPeriod(e.target.value)}>
						<option value="30d">Últimos 30 días</option>
						<option value="month">Un mes específico</option>
						<option value="total">Total histórico</option>
					</select>
					{#if data.topPagesRange.period === 'month'}
						<input
							type="month"
							value={data.topPagesRange.monthValue}
							max={currentMonthValue()}
							onchange={(e) => setPagesMonth(e.target.value)}
						/>
					{/if}
				</div>
				<p class="side-copy">{data.topPagesRange.label}</p>
				{#if data.topPages.length === 0}
					<p class="empty-side">Sin datos de visitas todavía.</p>
				{:else}
					<div class="service-list">
						{#each data.topPages as item}
							<div class="service-row page-row">
								<span>{formatPageName(item.path)}</span>
								<strong>{item.count}</strong>
							</div>
						{/each}
					</div>
				{/if}
			</div>

			<div class="panel">
				<p class="eyebrow small">Tráfico</p>
				<h2>Dispositivos</h2>
				<p class="side-copy">{data.topPagesRange.label} · aproximado por ancho de pantalla.</p>
				{#if data.deviceBreakdown.length === 0}
					<p class="empty-side">Sin datos todavía.</p>
				{:else}
					<div class="service-list">
						{#each data.deviceBreakdown as item}
							<div class="service-row">
								<span>{item.device}</span>
								<strong>{item.count}</strong>
							</div>
						{/each}
					</div>
				{/if}
			</div>

			<div class="panel">
				<p class="eyebrow small">Insights</p>
				<h2>Conversión visita → solicitud</h2>
				<p class="side-copy">{data.topPagesRange.label} · % de visitas a esa página que terminaron en una solicitud.</p>
				{#if data.conversionByPage.length === 0}
					<p class="empty-side">Sin datos todavía.</p>
				{:else}
					<div class="service-list">
						{#each data.conversionByPage as item}
							<div class="service-row conversion-row">
								<span>{formatPageName(item.path)}</span>
								<span class="conversion-detail">{item.leads} de {item.visits} visitas</span>
								<strong>{item.rate.toFixed(1)}%</strong>
							</div>
						{/each}
					</div>
				{/if}
			</div>
		</section>
	{/if}
</main>

<dialog
	bind:this={dialogEl}
	class="detail-modal"
	class:is-open={modalVisible}
	onclose={() => { selectedRequestId = null; awaitingReplyConfirm = false; }}
	onclick={(e) => { if (e.target === dialogEl) dialogEl.close(); }}
>
	{#if selectedRequest}
		<div class="modal-inner">
			<button type="button" class="modal-close" onclick={closeModal} aria-label="Cerrar">✕</button>

			<p class="eyebrow small">Solicitud</p>
			<h2>{fullName(selectedRequest)}</h2>
			<span class="service-pill">{selectedRequest.service_needed}</span>

			<dl class="detail-grid">
				<div>
					<dt>Correo</dt>
					<dd><a href={`mailto:${selectedRequest.email}`}>{selectedRequest.email}</a></dd>
				</div>
				<div>
					<dt>Teléfono</dt>
					<dd>
						{#if selectedRequest.phone}
							<a href={`tel:${selectedRequest.phone}`}>{selectedRequest.phone}</a>
						{:else}
							—
						{/if}
					</dd>
				</div>
				<div>
					<dt>Dirección</dt>
					<dd>{selectedRequest.property_address || 'No especificada'}</dd>
				</div>
				<div>
					<dt>Origen</dt>
					<dd>{formatPageName(selectedRequest.source_page || 'website')}</dd>
				</div>
				<div>
					<dt>Llegó desde</dt>
					<dd>{formatReferrer(selectedRequest.referrer)}</dd>
				</div>
				<div>
					<dt>Dispositivo</dt>
					<dd>{formatUserAgent(selectedRequest.user_agent)}</dd>
				</div>
				<div>
					<dt>Recibido</dt>
					<dd>{formatDate(selectedRequest.created_at)}</dd>
				</div>
				<div>
					<dt>Notificación por correo</dt>
					<dd>
						{#if selectedRequest.email_sent}
							<span class="email-ok">Enviado</span>
						{:else if selectedRequest.email_error}
							<span class="email-fail">Falló</span>
						{:else}
							<span class="muted">Pendiente</span>
						{/if}
					</dd>
				</div>
			</dl>

			{#if selectedRequest.email_error}
				<div class="email-error-box">{selectedRequest.email_error}</div>
				<form
					method="POST"
					action="?/retryEmail"
					use:enhance={() => async ({ update }) => update({ reset: false })}
					class="retry-form"
				>
					<input type="hidden" name="id" value={selectedRequest.id} />
					<button type="submit">Reintentar envío de correo</button>
				</form>
			{/if}

			<div class="modal-message">
				<p class="eyebrow small">Mensaje</p>
				<p>{selectedRequest.message}</p>
			</div>

			<form
				method="POST"
				action="?/saveNotes"
				use:enhance={() => async ({ update }) => update({ reset: false })}
				class="notes-form"
			>
				<label class="notes-label" for="internal-notes-{selectedRequest.id}">
					<span class="eyebrow small">Nota interna</span>
				</label>
				<input type="hidden" name="id" value={selectedRequest.id} />
				<textarea
					id="internal-notes-{selectedRequest.id}"
					name="internal_notes"
					rows="3"
					placeholder="Ej. Llamar después de las 5pm, ya se le envió cotización..."
				>{selectedRequest.internal_notes || ''}</textarea>
				<button type="submit" class="notes-save-btn">Guardar nota</button>
			</form>

			<div class="modal-actions">
				<form
					method="POST"
					action="?/updateStatus"
					use:enhance={() => async ({ update }) => update({ reset: false })}
					class="status-form-modal"
				>
					<input type="hidden" name="id" value={selectedRequest.id} />
					<select name="status">
						{#each data.statuses as status}
							<option value={status} selected={selectedRequest.status === status}>{statusLabels[status]}</option>
						{/each}
					</select>
					<button type="submit">Guardar estado</button>
				</form>

				{#if !awaitingReplyConfirm}
					<button type="button" class="reply-btn" onclick={() => handleReply(selectedRequest)}>
						Responder por correo
					</button>
				{:else}
					<div class="confirm-reply">
						<span>¿Enviaste el correo?</span>
						<button type="button" class="confirm-yes" onclick={confirmReplySent}>Sí, marcar Contactado</button>
						<button type="button" class="confirm-no" onclick={cancelReplyConfirm}>Aún no</button>
					</div>
				{/if}
			</div>
		</div>
	{/if}

	<form
		method="POST"
		action="?/updateStatus"
		bind:this={replyFormEl}
		use:enhance={() => async ({ update }) => update({ reset: false })}
		class="hidden-form"
	>
		<input type="hidden" name="id" value={selectedRequest?.id ?? ''} />
		<input type="hidden" name="status" value="contacted" />
	</form>
</dialog>

<style>
	:global(body){background:#f4f3ed;color:var(--default-color,#172015);}
	.admin-page{min-height:100vh;padding:28px clamp(18px,3vw,42px) 46px;background:linear-gradient(180deg,#f8f7f1 0%,#f1efe6 100%);font-family:var(--default-font,Arial,sans-serif);}
	.admin-header{display:flex;align-items:flex-start;justify-content:space-between;gap:20px;margin-bottom:20px;}
	.brand{display:inline-flex;margin-bottom:14px;}
	.brand img{height:48px;width:auto;object-fit:contain;}
	.eyebrow{margin:0 0 7px;color:var(--accent-color,#6b6b28);font-size:12px;font-weight:900;letter-spacing:2px;text-transform:uppercase;}
	.eyebrow.small{font-size:11px;margin-bottom:6px;}
	h1{margin:0;color:var(--heading-color,#172015);font-size:clamp(1.7rem,3.2vw,2.5rem);font-weight:900;letter-spacing:-.04em;}
	h2{margin:0 0 5px;color:var(--heading-color,#172015);font-size:1.2rem;font-weight:900;}
	.subtitle{margin:8px 0 0;color:#65705f;max-width:700px;line-height:1.6;}

	button{font-family:inherit;}
	.logout{border:1px solid rgba(107,107,40,.18);background:#fff;color:#4a4a1c;border-radius:12px;padding:11px 18px;font-weight:800;font-size:13px;cursor:pointer;transition:transform .12s ease,box-shadow .12s ease;}
	.logout:hover{transform:translateY(-1px);box-shadow:0 8px 18px rgba(26,32,24,.1);}

	.notice{border-radius:14px;padding:13px 16px;margin-bottom:16px;font-weight:700;font-size:13.5px;}
	.notice a{margin-left:8px;text-decoration:underline;}
	.success{background:#eef7e9;border:1px solid #c9e7be;color:#275317;}
	.error{background:#fff1f1;border:1px solid #ffd5d5;color:#b42318;}
	.warning{background:#fff9e8;border:1px solid #f3e4b0;color:#7a5b0a;}

	.tabs{display:flex;gap:6px;margin-bottom:18px;background:#eceae0;border-radius:14px;padding:5px;width:fit-content;}
	.tab{border:none;background:transparent;color:#5c6152;border-radius:10px;padding:10px 20px;font-weight:800;cursor:pointer;font-size:13.5px;transition:background .15s ease,color .15s ease;}
	.tab:hover{color:#172015;}
	.tab.active{background:#fff;color:var(--heading-color,#172015);box-shadow:0 4px 14px rgba(26,32,24,.08);}

	.stats-grid{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:12px;margin-bottom:16px;}
	.analytics-grid{grid-template-columns:repeat(3,minmax(0,1fr));margin-top:14px;margin-bottom:0;}
	.stat-card{background:var(--surface-color,#fff);border:1px solid #ecebe1;border-radius:16px;padding:18px;transition:box-shadow .15s ease,transform .15s ease;}
	.stat-card:hover{box-shadow:0 10px 24px rgba(26,32,24,.07);transform:translateY(-1px);}
	.stat-card span{display:block;color:#8a8f7f;font-size:10.5px;font-weight:800;text-transform:uppercase;letter-spacing:1.3px;margin-bottom:8px;}
	.stat-card strong{display:block;font-size:1.85rem;line-height:1;color:var(--heading-color,#172015);font-weight:900;}
	.stat-card p{margin:7px 0 0;color:#8a9083;font-size:12.5px;line-height:1.4;}
	.stat-card.highlight{background:linear-gradient(135deg,#6b6b28,#4a4a1c);border-color:transparent;}
	.stat-card.highlight span,.stat-card.highlight strong,.stat-card.highlight p{color:#fff;}
	.stat-card.highlight span{color:rgba(255,255,255,.75);}
	.visitors-card strong{color:#355314;}

	.panel{background:var(--surface-color,#fff);border:1px solid #ecebe1;border-radius:20px;padding:22px;margin-bottom:16px;}
	.panel-grid{display:grid;gap:16px;}

	.filters{display:flex;flex-wrap:wrap;gap:10px;align-items:center;background:#f7f6f0;border-radius:14px;padding:10px;margin-bottom:12px;}
	.search-field{flex:1;min-width:200px;display:flex;align-items:center;}
	.search-field span{display:none;}
	.filters input,.filters select,.status-form-modal select{border:1.5px solid #e4e5db;background:#fff;border-radius:10px;padding:10px 12px;color:#172015;font-size:13px;outline:none;transition:border-color .12s ease,box-shadow .12s ease;}
	.filters input{width:100%;}
	.filters input:focus,.filters select:focus,.status-form-modal select:focus{border-color:var(--accent-color,#6b6b28);box-shadow:0 0 0 3px rgba(107,107,40,.1);}
	.search-btn,.toggle-filters{border:none;border-radius:10px;padding:10px 16px;font-weight:800;font-size:13px;cursor:pointer;white-space:nowrap;transition:transform .12s ease,filter .12s ease;}
	.search-btn{background:var(--accent-color,#6b6b28);color:#fff;}
	.search-btn:hover,.toggle-filters:hover{transform:translateY(-1px);filter:brightness(1.04);}
	.toggle-filters{background:#fff;color:#4a4a1c;border:1.5px solid #e4e5db;}
	.advanced-filters{display:grid;grid-template-columns:repeat(4,minmax(120px,1fr)) auto;gap:10px;align-items:end;width:100%;margin-top:4px;}
	.advanced-filters label span{display:block;font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:1.2px;color:#8a8f7f;margin-bottom:5px;}
	.filter-actions{display:flex;gap:8px;align-items:center;}
	.filter-actions button{border:none;background:#172015;color:#fff;border-radius:10px;padding:10px 16px;font-weight:800;cursor:pointer;white-space:nowrap;font-size:13px;}
	.filter-actions a{color:var(--accent-color,#6b6b28);text-decoration:none;font-weight:800;font-size:13px;}

	.status-pills{display:flex;flex-wrap:wrap;gap:7px;margin-bottom:6px;}
	.pill{display:inline-flex;border:1.5px solid #e4e5db;background:#fff;color:#5c6152;border-radius:999px;padding:7px 15px;font-weight:800;font-size:12.5px;text-decoration:none;transition:background .12s ease,color .12s ease,border-color .12s ease;}
	.pill:hover{border-color:var(--accent-color,#6b6b28);color:var(--accent-color,#6b6b28);text-decoration:none;}
	.pill.active{background:var(--accent-color,#6b6b28);border-color:var(--accent-color,#6b6b28);color:#fff;}
	.pill-legend{margin:0 0 14px;color:#9a9e8f;font-size:11.5px;}
	.result-row{display:flex;align-items:center;justify-content:space-between;gap:10px;margin:0 0 12px;flex-wrap:wrap;}
	.result-count{margin:0;color:#8a9083;font-size:12.5px;}
	.export-btn{border:1.5px solid #e4e5db;background:#fff;color:#4a4a1c;border-radius:10px;padding:8px 14px;font-weight:800;font-size:12.5px;white-space:nowrap;}
	.export-btn:hover{background:#f7f6f0;text-decoration:none;}

	/* Inbox-style list */
	.inbox-list{display:flex;flex-direction:column;border:1px solid #ecebe1;border-radius:16px;overflow:hidden;}
	.inbox-row{display:flex;align-items:center;gap:14px;padding:14px 16px;background:#fff;border-bottom:1px solid #f1f0e8;cursor:pointer;transition:background .12s ease;}
	.inbox-row:last-child{border-bottom:none;}
	.inbox-row:hover{background:#f8f8f3;}
	.inbox-row:focus-visible{outline:2px solid var(--accent-color,#6b6b28);outline-offset:-2px;}
	.inbox-row.status-new{background:#fffdf8;}
	.unread-dot{width:8px;height:8px;border-radius:999px;background:transparent;flex-shrink:0;}
	.unread-dot.show{background:#b45309;}
	.inbox-main{flex:1;min-width:0;}
	.inbox-line1{display:flex;align-items:center;gap:9px;margin-bottom:4px;flex-wrap:wrap;}
	.inbox-line1 strong{color:#172015;font-size:13.5px;font-weight:700;}
	.inbox-row.status-new .inbox-line1 strong{font-weight:900;}
	.inbox-snippet{margin:0;color:#8a9083;font-size:12px;line-height:1.4;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
	.inbox-side{display:flex;align-items:center;gap:10px;flex-shrink:0;}
	.empty{padding:34px;text-align:center;color:#8a9083;font-weight:700;}

	a{color:#4a4a1c;text-decoration:none;font-weight:700;}
	a:hover{text-decoration:underline;}
	.muted{display:inline-flex;color:#8a9083;font-size:12px;line-height:1.45;}
	.date-cell{white-space:nowrap;color:#8a9083;font-size:12px;}
	.service-pill{display:inline-flex;background:#fff9cf;color:#5c5c1f;border:1px solid #ece5a4;border-radius:999px;padding:4px 10px;font-weight:800;font-size:11px;white-space:nowrap;}
	.status-badge{display:inline-flex;white-space:nowrap;border-radius:999px;padding:4px 9px;font-size:11px;font-weight:800;background:#f1f2eb;color:#66705f;}
	.status-badge.status-new{background:#fff4e5;color:#b45309;}
	.status-badge.status-contacted{background:#eaf7ee;color:#116329;}
	.status-badge.status-closed{background:#f1f2eb;color:#66705f;}
	.email-ok{display:inline-flex;color:#116329;background:#eaf7ee;border-radius:999px;padding:4px 9px;font-weight:800;font-size:11.5px;}
	.email-fail{display:inline-flex;color:#b42318;background:#fff1f1;border-radius:999px;padding:4px 9px;font-weight:800;font-size:11.5px;}
	.stale-badge{display:inline-flex;white-space:nowrap;color:#7a5b0a;background:#fff9e8;border:1px solid #f3e4b0;border-radius:999px;padding:4px 9px;font-weight:800;font-size:11px;}
	.email-error-box{margin:14px 0;padding:12px;border-radius:12px;background:#fff1f1;color:#b42318;font-size:12px;line-height:1.5;}
	.retry-form{margin:-6px 0 14px;}
	.retry-form button{border:1.5px solid #ffd5d5;background:#fff;color:#b42318;border-radius:10px;padding:8px 13px;font-weight:800;font-size:12px;cursor:pointer;}
	.retry-form button:hover{background:#fff1f1;}

	.side-copy{margin:0 0 10px;color:#8a9083;font-size:13px;line-height:1.5;}
	.pages-period-picker{display:flex;flex-wrap:wrap;gap:8px;margin:6px 0 4px;}
	.pages-period-picker select,.pages-period-picker input{border:1.5px solid #e4e5db;background:#fff;border-radius:10px;padding:8px 10px;color:#172015;font-size:12.5px;font-weight:700;outline:none;}
	.pages-period-picker select:focus,.pages-period-picker input:focus{border-color:var(--accent-color,#6b6b28);box-shadow:0 0 0 3px rgba(107,107,40,.1);}
	.service-list{display:grid;gap:9px;}
	.service-row{display:flex;align-items:center;justify-content:space-between;gap:14px;background:#f7f6f0;border-radius:12px;padding:12px 14px;}
	.service-row span{font-weight:700;color:#333b2f;font-size:13px;line-height:1.3;}
	.service-row strong{background:var(--accent-color,#6b6b28);color:#fff;border-radius:999px;min-width:32px;height:26px;display:grid;place-items:center;font-size:12.5px;}
	.empty-side{color:#8a9083;font-weight:700;}
	.page-row span{font-size:13px;word-break:break-word;}
	.conversion-row{flex-wrap:wrap;}
	.conversion-detail{color:#8a9083;font-size:11.5px;font-weight:600;}

	/* Modal */
	.detail-modal{padding:0;border:none;border-radius:20px;max-width:620px;width:calc(100vw - 32px);box-shadow:0 30px 70px rgba(0,0,0,.28);opacity:0;transform:translateY(10px) scale(.98);transition:opacity .16s ease,transform .16s ease;}
	.detail-modal.is-open{opacity:1;transform:translateY(0) scale(1);}
	.detail-modal::backdrop{background:rgba(23,32,21,0);transition:background .16s ease;}
	.detail-modal.is-open::backdrop{background:rgba(23,32,21,.5);}
	.modal-inner{position:relative;padding:26px;max-height:85vh;overflow:auto;}
	.modal-close{position:absolute;top:14px;right:14px;border:none;background:#f1f2eb;color:#4a4a1c;width:30px;height:30px;border-radius:999px;font-weight:800;cursor:pointer;transition:background .12s ease;}
	.modal-close:hover{background:#e6e7dc;}
	.detail-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px;margin:16px 0;}
	.detail-grid dt{margin:0 0 3px;font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:1.1px;color:#9a9e8f;}
	.detail-grid dd{margin:0;font-size:13px;color:#172015;font-weight:700;}
	.modal-message{background:#f7f6f0;border-radius:14px;padding:14px;margin-bottom:18px;}
	.modal-message p:last-child{margin:0;color:#343a31;line-height:1.6;white-space:pre-wrap;}
	.notes-form{margin-bottom:18px;}
	.notes-label{display:block;margin-bottom:6px;}
	.notes-form textarea{width:100%;resize:vertical;border:1.5px solid #e4e5db;border-radius:12px;padding:10px 12px;font-family:inherit;font-size:13px;color:#172015;outline:none;box-sizing:border-box;}
	.notes-form textarea:focus{border-color:var(--accent-color,#6b6b28);box-shadow:0 0 0 3px rgba(107,107,40,.1);}
	.notes-save-btn{margin-top:8px;border:1.5px solid #e4e5db;background:#fff;color:#4a4a1c;border-radius:10px;padding:8px 13px;font-weight:800;font-size:12px;cursor:pointer;}
	.notes-save-btn:hover{background:#f7f6f0;}
	.modal-actions{display:flex;flex-wrap:wrap;gap:12px;align-items:center;justify-content:space-between;}
	.status-form-modal{display:flex;gap:8px;align-items:center;}
	.status-form-modal select{min-width:130px;font-weight:800;}
	.status-form-modal button{border:none;background:#172015;color:#fff;border-radius:10px;padding:10px 14px;font-size:12px;font-weight:800;cursor:pointer;}
	.reply-btn{border:none;background:var(--accent-color,#6b6b28);color:#fff;border-radius:10px;padding:12px 18px;font-weight:800;cursor:pointer;font-size:13.5px;transition:transform .12s ease,filter .12s ease;}
	.reply-btn:hover{transform:translateY(-1px);filter:brightness(1.06);}
	.confirm-reply{display:flex;flex-wrap:wrap;align-items:center;gap:8px;background:#fff9e8;border:1px solid #f3e4b0;border-radius:12px;padding:9px 12px;}
	.confirm-reply span{font-size:12.5px;font-weight:800;color:#7a5b0a;}
	.confirm-yes{border:none;background:#116329;color:#fff;border-radius:9px;padding:9px 13px;font-weight:800;font-size:12.5px;cursor:pointer;}
	.confirm-no{border:1.5px solid #e4e5db;background:#fff;color:#5c6152;border-radius:9px;padding:9px 13px;font-weight:800;font-size:12.5px;cursor:pointer;}
	.hidden-form{display:none;}

	@media(max-width:900px){.stats-grid{grid-template-columns:repeat(2,1fr);}.analytics-grid{grid-template-columns:1fr;}.advanced-filters{grid-template-columns:1fr 1fr;}}
	@media(max-width:768px){.admin-header{flex-direction:column;}.admin-page{padding:22px 14px 36px;}.panel{padding:16px;}.advanced-filters{grid-template-columns:1fr;}.detail-grid{grid-template-columns:1fr;}.inbox-row{flex-wrap:wrap;}.inbox-side{width:100%;justify-content:space-between;}}
	@media(max-width:520px){.stats-grid{grid-template-columns:1fr;}}
</style>
