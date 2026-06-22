<script>
	let { data, form } = $props();

	const statusLabels = {
		new: 'New',
		viewed: 'Viewed',
		contacted: 'Contacted',
		closed: 'Closed'
	};

	function formatDate(value) {
		if (!value) return '—';
		return new Intl.DateTimeFormat('en-US', {
			month: 'short',
			day: '2-digit',
			year: 'numeric',
			hour: '2-digit',
			minute: '2-digit'
		}).format(new Date(value));
	}

	function fullName(request) {
		return `${request.first_name || ''} ${request.last_name || ''}`.trim() || 'Unknown';
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
</script>

<svelte:head>
	<title>Admin Dashboard | Cordova Property Services</title>
</svelte:head>

<main class="admin-page">
	<header class="admin-header">
		<div>
			<a href="/" class="brand"><img src="/assets/img/logo.png" alt="Cordova" /></a>
			<p class="eyebrow">Cordova Admin</p>
			<h1>Quote Requests Dashboard</h1>
			<p class="subtitle">Review real form submissions, filter leads, and manage request status.</p>
		</div>
		<form method="POST" action="/admin/logout">
			<button class="logout" type="submit">Sign Out</button>
		</form>
	</header>

	{#if form?.message}
		<div class="notice success">{form.message}</div>
	{/if}
	{#if data.error}
		<div class="notice error">{data.error}</div>
	{/if}

	<section class="stats-grid">
		<div class="stat-card highlight">
			<span>Today</span>
			<strong>{data.stats.today}</strong>
			<p>Requests received today</p>
		</div>
		<div class="stat-card">
			<span>This Month</span>
			<strong>{data.stats.month}</strong>
			<p>Total monthly requests</p>
		</div>
		<div class="stat-card visitors-card">
			<span>Visitors Today</span>
			<strong>{data.visitStats.todayVisitors}</strong>
			<p>Approx. unique visitors</p>
		</div>
		<div class="stat-card visitors-card">
			<span>Page Views Today</span>
			<strong>{data.visitStats.todayViews}</strong>
			<p>Tracked public page views</p>
		</div>
		<div class="stat-card visitors-card">
			<span>Monthly Views</span>
			<strong>{data.visitStats.monthViews}</strong>
			<p>Public page views this month</p>
		</div>
		<div class="stat-card">
			<span>New Leads</span>
			<strong>{data.stats.newLeads}</strong>
			<p>Waiting for review</p>
		</div>
		<div class="stat-card">
			<span>Contacted</span>
			<strong>{data.stats.contacted}</strong>
			<p>Already followed up</p>
		</div>
		<div class="stat-card">
			<span>Closed</span>
			<strong>{data.stats.closed}</strong>
			<p>Completed opportunities</p>
		</div>
		<div class="stat-card warning-card">
			<span>Email Errors</span>
			<strong>{data.stats.emailFailed}</strong>
			<p>Failed email notifications</p>
		</div>
	</section>

	<section class="panel-grid">
		<div class="panel main-panel">
			<div class="panel-title-row">
				<div>
					<p class="eyebrow small">Leads</p>
					<h2>Form Requests</h2>
					<p>{data.filteredTotal} result(s) found. Showing latest 75.</p>
				</div>
			</div>

			<form class="filters" method="GET">
				<label>
					<span>Search</span>
					<input type="search" name="q" value={data.filters.q} placeholder="Name, email, phone, address..." />
				</label>

				<label>
					<span>Status</span>
					<select name="status">
						<option value="all" selected={data.filters.status === 'all'}>All statuses</option>
						{#each data.statuses as status}
							<option value={status} selected={data.filters.status === status}>{statusLabels[status]}</option>
						{/each}
					</select>
				</label>

				<label>
					<span>Service</span>
					<select name="service">
						<option value="all" selected={data.filters.service === 'all'}>All services</option>
						{#each data.services as service}
							<option value={service} selected={data.filters.service === service}>{service}</option>
						{/each}
					</select>
				</label>

				<label>
					<span>Email</span>
					<select name="emailSent">
						<option value="all" selected={data.filters.emailSent === 'all'}>All</option>
						<option value="sent" selected={data.filters.emailSent === 'sent'}>Sent</option>
						<option value="failed" selected={data.filters.emailSent === 'failed'}>Failed</option>
					</select>
				</label>

				<label>
					<span>From</span>
					<input type="date" name="from" value={data.filters.from} />
				</label>

				<label>
					<span>To</span>
					<input type="date" name="to" value={data.filters.to} />
				</label>

				<div class="filter-actions">
					<button type="submit">Apply Filters</button>
					<a href="/admin/dashboard">Reset</a>
				</div>
			</form>

			<div class="table-wrap">
				<table>
					<thead>
						<tr>
							<th>Date</th>
							<th>Customer</th>
							<th>Service</th>
							<th>Contact</th>
							<th>Status</th>
							<th>Email</th>
							<th>Message</th>
						</tr>
					</thead>
					<tbody>
						{#if data.requests.length === 0}
							<tr>
								<td colspan="7" class="empty">No requests found with these filters.</td>
							</tr>
						{:else}
							{#each data.requests as request}
								<tr>
									<td class="date-cell">{formatDate(request.created_at)}</td>
									<td>
										<strong>{fullName(request)}</strong>
										<span class="muted">{request.property_address || 'No address'}</span>
										<span class="source">{formatPageName(request.source_page || 'website')}</span>
									</td>
									<td><span class="service-pill">{request.service_needed}</span></td>
									<td>
										<a href={`mailto:${request.email}`}>{request.email}</a>
										{#if request.phone}<a href={`tel:${request.phone}`} class="muted">{request.phone}</a>{/if}
									</td>
									<td>
										<form method="POST" action="?/updateStatus" class="status-form">
											<input type="hidden" name="id" value={request.id} />
											<select name="status">
												{#each data.statuses as status}
													<option value={status} selected={request.status === status}>{statusLabels[status]}</option>
												{/each}
											</select>
											<button type="submit" title="Update status">Save</button>
										</form>
									</td>
									<td>
										{#if request.email_sent}
											<span class="email-ok">Sent</span>
										{:else if request.email_error}
											<span class="email-fail" title={request.email_error}>Failed</span>
										{:else}
											<span class="muted">Pending</span>
										{/if}
									</td>
									<td class="message-cell">
										<details>
											<summary>View</summary>
											<p>{request.message}</p>
											{#if request.email_error}
												<div class="email-error-box">{request.email_error}</div>
											{/if}
										</details>
									</td>
								</tr>
							{/each}
						{/if}
					</tbody>
				</table>
			</div>
		</div>

		<aside class="panel side-panel">
			<p class="eyebrow small">Insights</p>
			<h2>Top Services</h2>
			<p class="side-copy">Most requested services in the last 90 days.</p>

			{#if data.topServices.length === 0}
				<p class="empty-side">No service data yet.</p>
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

			<div class="divider"></div>

			<p class="eyebrow small">Traffic</p>
			<h2>Top Pages</h2>
			<p class="side-copy">Most viewed pages in the last 30 days.</p>

			{#if data.topPages.length === 0}
				<p class="empty-side">No visit data yet. Run the SQL and browse the public site.</p>
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

			<div class="traffic-note">
				<strong>Visitor tracking</strong>
				<p>Counts are anonymous and approximate. Admin pages are not tracked.</p>
			</div>

			<div class="help-box">
				<strong>Status guide</strong>
				<p><b>New:</b> not reviewed yet.</p>
				<p><b>Viewed:</b> seen by admin.</p>
				<p><b>Contacted:</b> customer was contacted.</p>
				<p><b>Closed:</b> done or no longer active.</p>
			</div>
		</aside>
	</section>
</main>

<style>
	:global(body){background:#f5f4ee;color:#172015;}
	.admin-page{min-height:100vh;padding:28px clamp(18px,3vw,42px) 46px;background:linear-gradient(135deg,#f8f7f1 0%,#eeece2 100%);font-family:var(--default-font,Arial,sans-serif);}
	.admin-header{display:flex;align-items:flex-start;justify-content:space-between;gap:20px;margin-bottom:24px;}
	.brand{display:inline-flex;margin-bottom:14px;}
	.brand img{height:52px;width:auto;object-fit:contain;}
	.eyebrow{margin:0 0 7px;color:#6b6b28;font-size:12px;font-weight:900;letter-spacing:2px;text-transform:uppercase;}
	.eyebrow.small{font-size:11px;margin-bottom:6px;}
	h1{margin:0;color:#172015;font-size:clamp(2rem,4vw,3.2rem);font-weight:950;letter-spacing:-.05em;}
	h2{margin:0 0 5px;color:#172015;font-size:1.3rem;font-weight:900;}
	.subtitle{margin:10px 0 0;color:#65705f;max-width:700px;line-height:1.6;}
	.logout{border:1px solid rgba(107,107,40,.18);background:#fff;color:#4a4a1c;border-radius:999px;padding:12px 20px;font-weight:900;cursor:pointer;box-shadow:0 10px 25px rgba(26,32,24,.07);}
	.notice{border-radius:16px;padding:13px 16px;margin-bottom:18px;font-weight:800;font-size:14px;}
	.success{background:#eef7e9;border:1px solid #c9e7be;color:#275317;}
	.error{background:#fff1f1;border:1px solid #ffd5d5;color:#b42318;}
	.stats-grid{display:grid;grid-template-columns:repeat(9,minmax(0,1fr));gap:14px;margin-bottom:18px;}
	.stat-card{background:#fff;border:1px solid rgba(107,107,40,.1);border-radius:22px;padding:20px;box-shadow:0 14px 38px rgba(26,32,24,.06);}
	.stat-card span{display:block;color:#6b6b28;font-size:11px;font-weight:900;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:8px;}
	.stat-card strong{display:block;font-size:2.05rem;line-height:1;color:#172015;font-weight:950;}
	.stat-card p{margin:8px 0 0;color:#747a70;font-size:13px;line-height:1.45;}
	.stat-card.highlight{background:linear-gradient(135deg,#6b6b28,#4a4a1c);}
	.stat-card.highlight span,.stat-card.highlight strong,.stat-card.highlight p{color:#fff;}
	.warning-card strong{color:#b45309;}
	.visitors-card strong{color:#355314;}
	.panel-grid{display:grid;grid-template-columns:minmax(0,1fr) 330px;gap:18px;align-items:start;}
	.panel{background:#fff;border:1px solid rgba(107,107,40,.1);border-radius:24px;padding:24px;box-shadow:0 16px 42px rgba(26,32,24,.07);}
	.panel-title-row{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:18px;}
	.panel-title-row p,.side-copy{margin:0;color:#72786d;font-size:13px;line-height:1.5;}
	.filters{display:grid;grid-template-columns:1.4fr repeat(5,minmax(130px,1fr)) auto;gap:12px;align-items:end;background:#f8f8f3;border:1px solid rgba(107,107,40,.09);border-radius:18px;padding:14px;margin-bottom:18px;}
	.filters label span{display:block;font-size:10px;font-weight:900;text-transform:uppercase;letter-spacing:1.5px;color:#697062;margin-bottom:6px;}
	.filters input,.filters select,.status-form select{width:100%;border:1.5px solid #e0e2d8;background:#fff;border-radius:12px;padding:11px 12px;color:#172015;font-size:13px;outline:none;}
	.filters input:focus,.filters select:focus,.status-form select:focus{border-color:#6b6b28;box-shadow:0 0 0 3px rgba(107,107,40,.1);}
	.filter-actions{display:flex;gap:8px;align-items:center;}
	.filter-actions button{border:none;background:#6b6b28;color:#fff;border-radius:12px;padding:12px 16px;font-weight:900;cursor:pointer;white-space:nowrap;}
	.filter-actions a{color:#6b6b28;text-decoration:none;font-weight:900;font-size:13px;}
	.table-wrap{overflow:auto;border:1px solid #eee;border-radius:18px;}
	table{width:100%;border-collapse:collapse;min-width:980px;}
	th{background:#fafaf7;color:#555f4d;font-size:11px;text-transform:uppercase;letter-spacing:1.2px;text-align:left;padding:14px;font-weight:950;border-bottom:1px solid #eee;}
	td{padding:14px;border-bottom:1px solid #f0f0e9;vertical-align:top;font-size:13px;}
	tr:last-child td{border-bottom:none;}
	td strong{display:block;color:#172015;margin-bottom:4px;}
	a{color:#4a4a1c;text-decoration:none;font-weight:800;}
	a:hover{text-decoration:underline;}
	.muted{display:block;color:#777f73;font-size:12px;line-height:1.45;}
	.source{display:inline-block;margin-top:6px;background:#f1f2eb;color:#66705f;border-radius:999px;padding:3px 8px;font-size:11px;font-weight:800;}
	.date-cell{white-space:nowrap;color:#5e675a;}
	.service-pill{display:inline-flex;background:#fff9cf;color:#5c5c1f;border:1px solid #ece5a4;border-radius:999px;padding:6px 10px;font-weight:900;font-size:12px;white-space:nowrap;}
	.status-form{display:flex;gap:7px;align-items:center;}
	.status-form select{font-weight:900;min-width:120px;}
	.status-form button{border:none;background:#172015;color:#fff;border-radius:10px;padding:10px 11px;font-size:12px;font-weight:900;cursor:pointer;}
	.email-ok{display:inline-flex;color:#116329;background:#eaf7ee;border-radius:999px;padding:5px 9px;font-weight:900;font-size:12px;}
	.email-fail{display:inline-flex;color:#b42318;background:#fff1f1;border-radius:999px;padding:5px 9px;font-weight:900;font-size:12px;}
	.message-cell summary{color:#6b6b28;font-weight:900;cursor:pointer;}
	.message-cell p{margin:10px 0 0;line-height:1.6;color:#343a31;white-space:pre-wrap;min-width:260px;}
	.email-error-box{margin-top:10px;padding:10px;border-radius:10px;background:#fff1f1;color:#b42318;font-size:12px;line-height:1.5;}
	.empty{padding:34px;text-align:center;color:#777f73;font-weight:800;}
	.service-list{display:grid;gap:10px;margin-top:16px;}
	.service-row{display:flex;align-items:center;justify-content:space-between;gap:14px;background:#f8f8f3;border:1px solid #ecede4;border-radius:14px;padding:13px 14px;}
	.service-row span{font-weight:800;color:#333b2f;font-size:13px;line-height:1.3;}
	.service-row strong{background:#6b6b28;color:#fff;border-radius:999px;min-width:34px;height:28px;display:grid;place-items:center;font-size:13px;}
	.help-box{margin-top:22px;padding:16px;border-radius:18px;background:#172015;color:#fff;}
	.help-box strong{display:block;margin-bottom:10px;}
	.help-box p{margin:5px 0;color:rgba(255,255,255,.78);font-size:12px;line-height:1.45;}
	.empty-side{color:#777f73;font-weight:800;margin-top:16px;}
	.divider{height:1px;background:#eceee4;margin:24px 0;}
	.page-row span{font-size:13px;word-break:break-word;}
	.traffic-note{margin-top:18px;padding:14px;border-radius:16px;background:#f8f8f3;border:1px solid #ecede4;}
	.traffic-note strong{display:block;color:#172015;margin-bottom:6px;}
	.traffic-note p{margin:0;color:#72786d;font-size:12px;line-height:1.5;}
	@media(max-width:1250px){.stats-grid{grid-template-columns:repeat(3,1fr);}.panel-grid{grid-template-columns:1fr;}.filters{grid-template-columns:repeat(3,1fr);}.filter-actions{grid-column:1/-1;}}
	@media(max-width:768px){.admin-header{flex-direction:column;}.stats-grid{grid-template-columns:repeat(2,1fr);}.filters{grid-template-columns:1fr;}.panel{padding:18px;}.admin-page{padding:22px 14px 36px;}}
	@media(max-width:520px){.stats-grid{grid-template-columns:1fr;}}
</style>
