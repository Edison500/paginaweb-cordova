<script>
	import { page } from '$app/state';
	import { onMount } from 'svelte';

	let mobileOpen = $state(false);
	let servicesOpen = $state(false);

	const services = [
		{ href: '/services/turnkey',             label: 'Turnkey Services' },
		{ href: '/services/painting',            label: 'Painting' },
		{ href: '/services/repairs',             label: 'Repairs' },
		{ href: '/services/cleaning',            label: 'Cleaning' },
		{ href: '/services/water-remediation',   label: 'Water Remediation' },
		{ href: '/services/tub-resurfacing',     label: 'Tub & Shower Resurfacing' },
		{ href: '/services/counter-resurfacing', label: 'Counter Resurfacing' },
		{ href: '/services/installations',       label: 'Installation Services' },
		{ href: '/services/cabinet-painting',    label: 'Cabinet Painting' },
		{ href: '/services/pressure-washing',    label: 'Pressure Washing' },
		{ href: '/services/millwork',            label: 'Millwork' },
		{ href: '/services/sheetrock',           label: 'Sheetrock Repair' },
	];

	function closeMobileMenu() {
		mobileOpen = false;
		servicesOpen = false;
		document.body.classList.remove('mobile-nav-active');
	}

	function toggleMobileMenu() {
		mobileOpen = !mobileOpen;
		document.body.classList.toggle('mobile-nav-active', mobileOpen);
	}

	function toggleServices(e) {
		e.preventDefault();
		e.stopPropagation();
		servicesOpen = !servicesOpen;
	}

	onMount(() => {
		const updateScroll = () => {
			document.body.classList.toggle('scrolled', window.scrollY > 100);
		};
		updateScroll();
		window.addEventListener('scroll', updateScroll, { passive: true });
		const closeDropdown = (e) => {
			if (!e.target.closest('.services-dropdown-wrap')) servicesOpen = false;
		};
		document.addEventListener('click', closeDropdown);
		return () => {
			window.removeEventListener('scroll', updateScroll);
			document.removeEventListener('click', closeDropdown);
			document.body.classList.remove('mobile-nav-active');
		};
	});
</script>

<header class="cps-header">
	<div class="cps-header-inner">

		<!-- LOGO -->
		<a href="/" class="cps-logo" onclick={closeMobileMenu}>
			<img src="/assets/img/logo.png" alt="Cordova" />
		</a>

		<!-- DESKTOP NAV -->
		<nav class="cps-nav">
			<a href="/" class:cps-active={page.url.pathname === '/'}>Home</a>
			<a href="/about" class:cps-active={page.url.pathname === '/about'}>About</a>
			<div class="cps-dropdown">
				<button class="cps-dropdown-btn" onclick={toggleServices}>
					Services <i class="bi bi-chevron-down cps-chevron" class:cps-rotated={servicesOpen}></i>
				</button>
				{#if servicesOpen}
				<div class="cps-dropdown-menu">
					{#each services as s}
						<a href={s.href} onclick={closeMobileMenu}
						   class:cps-active={page.url.pathname === s.href}>{s.label}</a>
					{/each}
				</div>
				{/if}
			</div>
		</nav>

		<!-- DESKTOP CTA -->
		<a href="/contact" class="cps-cta-btn" onclick={closeMobileMenu}>Contact Us</a>

		<!-- HAMBURGER -->
		<button class="cps-hamburger" onclick={toggleMobileMenu} aria-label="Menu">
			<i class="bi {mobileOpen ? 'bi-x' : 'bi-list'}"></i>
		</button>

	</div>

	<!-- MOBILE MENU -->
	{#if mobileOpen}
	<div class="cps-mobile-menu">
		<a href="/" onclick={closeMobileMenu} class:cps-active={page.url.pathname === '/'}>Home</a>
		<a href="/about" onclick={closeMobileMenu} class:cps-active={page.url.pathname === '/about'}>About</a>

		<div class="cps-mobile-services">
			<button class="cps-mobile-services-btn" onclick={toggleServices}>
				Services
				<i class="bi bi-chevron-down cps-chevron" class:cps-rotated={servicesOpen}></i>
			</button>
			{#if servicesOpen}
			<div class="cps-mobile-submenu">
				{#each services as s}
					<a href={s.href} onclick={closeMobileMenu}
					   class:cps-active={page.url.pathname === s.href}>{s.label}</a>
				{/each}
			</div>
			{/if}
		</div>

		<a href="/contact" class="cps-mobile-cta" onclick={closeMobileMenu}>Contact Us</a>
	</div>
	{/if}
</header>

<style>
/* ── HEADER SHELL ─────────────────────────────── */
:global(body){ padding-top: 70px; }

.cps-header{
	position: fixed; top: 0; left: 0; right: 0;
	height: 70px;
	background: #fff;
	border-bottom: 1px solid rgba(0,0,0,0.08);
	box-shadow: 0 2px 12px rgba(0,0,0,0.06);
	z-index: 9997;
}
.cps-header-inner{
	max-width: 1400px;
	margin: 0 auto;
	padding: 0 24px;
	height: 70px;
	display: flex;
	align-items: center;
	gap: 32px;
}

/* ── LOGO ─────────────────────────────────────── */
.cps-logo{
	display: flex;
	align-items: center;
	flex-shrink: 0;
	text-decoration: none;
}
.cps-logo img{
	height: 46px;
	width: auto;
	max-width: 160px;
	object-fit: contain;
	display: block;
}

/* ── DESKTOP NAV ──────────────────────────────── */
.cps-nav{
	display: flex;
	align-items: center;
	gap: 4px;
	margin-left: auto;
}
.cps-nav a, .cps-dropdown-btn{
	padding: 8px 14px;
	font-size: 14px;
	font-weight: 500;
	color: #3a3939;
	text-decoration: none;
	border-radius: 8px;
	border: none;
	background: none;
	cursor: pointer;
	font-family: inherit;
	transition: color .2s, background .2s;
	white-space: nowrap;
}
.cps-nav a:hover, .cps-dropdown-btn:hover{ color: #e84545; background: #fef2f2; }
.cps-active{ color: #e84545 !important; }

/* Dropdown */
.cps-dropdown{ position: relative; }
.cps-chevron{
	font-size: 11px; margin-left: 4px;
	transition: transform .2s; vertical-align: middle;
}
.cps-rotated{ transform: rotate(180deg); }

.cps-dropdown-menu{
	position: absolute; top: calc(100% + 6px); left: 0;
	background: #fff;
	border: 1px solid rgba(0,0,0,0.08);
	border-radius: 12px;
	box-shadow: 0 8px 32px rgba(0,0,0,0.12);
	min-width: 220px;
	padding: 6px;
	z-index: 9999;
	display: flex; flex-direction: column; gap: 2px;
}
.cps-dropdown-menu a{
	display: block; padding: 8px 14px;
	font-size: 13.5px; color: #3a3939;
	text-decoration: none; border-radius: 8px;
	transition: background .15s, color .15s;
	white-space: nowrap;
}
.cps-dropdown-menu a:hover,
.cps-dropdown-menu a.cps-active{ background: #fef2f2; color: #e84545; }

/* ── DESKTOP CTA ──────────────────────────────── */
.cps-cta-btn{
	flex-shrink: 0;
	padding: 10px 22px;
	background: #e84545;
	color: #fff;
	border-radius: 8px;
	font-size: 14px; font-weight: 600;
	text-decoration: none;
	transition: background .2s, transform .2s;
	white-space: nowrap;
}
.cps-cta-btn:hover{ background: #d03a3a; color: #fff; transform: translateY(-1px); }

/* ── HAMBURGER ────────────────────────────────── */
.cps-hamburger{
	display: none;
	align-items: center; justify-content: center;
	width: 40px; height: 40px;
	background: none; border: 1px solid rgba(0,0,0,0.12);
	border-radius: 8px; cursor: pointer;
	font-size: 22px; color: #333;
	flex-shrink: 0;
}

/* ── MOBILE MENU ──────────────────────────────── */
.cps-mobile-menu{
	background: #fff;
	border-top: 1px solid rgba(0,0,0,0.08);
	padding: 12px 16px 20px;
	display: flex; flex-direction: column; gap: 2px;
	position: fixed; top: 70px; left: 0; right: 0;
	z-index: 9996;
	box-shadow: 0 8px 24px rgba(0,0,0,0.1);
	max-height: calc(100vh - 70px);
	overflow-y: auto;
}
.cps-mobile-menu > a{
	padding: 12px 16px;
	font-size: 15px; font-weight: 500; color: #3a3939;
	text-decoration: none; border-radius: 8px;
	transition: background .15s;
}
.cps-mobile-menu > a:hover,
.cps-mobile-menu > a.cps-active{ background: #fef2f2; color: #e84545; }

/* Mobile services */
.cps-mobile-services-btn{
	width: 100%; padding: 12px 16px;
	display: flex; align-items: center; justify-content: space-between;
	font-size: 15px; font-weight: 500; color: #3a3939;
	background: none; border: none; border-radius: 8px;
	cursor: pointer; font-family: inherit;
	transition: background .15s;
}
.cps-mobile-services-btn:hover{ background: #fef2f2; color: #e84545; }

.cps-mobile-submenu{
	padding: 4px 0 4px 16px;
	display: flex; flex-direction: column; gap: 2px;
}
.cps-mobile-submenu a{
	padding: 10px 14px;
	font-size: 14px; color: #555;
	text-decoration: none; border-radius: 8px;
	transition: background .15s, color .15s;
}
.cps-mobile-submenu a:hover,
.cps-mobile-submenu a.cps-active{ background: #fef2f2; color: #e84545; }

.cps-mobile-cta{
	margin-top: 8px;
	padding: 13px;
	text-align: center;
	background: #e84545; color: #fff;
	border-radius: 8px; font-size: 15px; font-weight: 600;
	text-decoration: none;
}

/* ── RESPONSIVE ───────────────────────────────── */
@media(max-width: 1199px){
	.cps-nav     { display: none; }
	.cps-cta-btn { display: none; }
	.cps-hamburger{ display: flex; }
	.cps-header-inner{ gap: 16px; }
	.cps-logo img{ height: 40px; max-width: 140px; }
}
</style>