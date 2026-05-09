<script>
	import { page } from '$app/state';
	import { onMount } from 'svelte';

	let mobileOpen = $state(false);
	let servicesOpen = $state(false);
	let scrolled = $state(false);
	let hidden = $state(false);

const services = [
    {
        group: 'Cleaning & Restoration',
        icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
        items: [
            { href: '/services/cleaning',         label: 'Cleaning' },
            { href: '/services/carpet-cleaning',  label: 'Carpet Cleaning' },
            { href: '/services/pressure-washing', label: 'Pressure Washing' },
            { href: '/services/trash-out',        label: 'Trash Out' },
        ]
    },
    {
        group: 'Repairs & Installs',
        icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
        items: [
            { href: '/services/repairs',          label: 'Repairs' },
            { href: '/services/sheetrock',        label: 'Sheetrock Repair' },
            { href: '/services/millwork',         label: 'Millwork' },
            { href: '/services/installations',    label: 'Installation Services' },
            { href: '/services/concrete-repairs', label: 'Concrete Repairs' },
        ]
    },
    {
        group: 'Painting & Resurfacing',
        icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>`,
        items: [
            { href: '/services/painting',            label: 'Painting' },
            { href: '/services/cabinet-painting',    label: 'Cabinet Painting' },
            { href: '/services/tub-resurfacing',     label: 'Tub & Shower Resurface' },
            { href: '/services/counter-resurfacing', label: 'Countertop Resurface' },
        ]
    },
    {
        group: 'Full Package',
        icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>`,
        items: [
            { href: '/services/turnkey', label: 'Turnkey Services' },
        ]
    },
];

	const allServices = services.flatMap(g => g.items);

	function closeMobileMenu() {
		mobileOpen = false;
		servicesOpen = false;
	}

	function toggleMobileMenu() {
		mobileOpen = !mobileOpen;
	}

	function toggleServices(e) {
		e.preventDefault();
		e.stopPropagation();
		servicesOpen = !servicesOpen;
	}

	onMount(() => {
		let lastY = window.scrollY;

		const updateScroll = () => {
			const currentY = window.scrollY;
			const diff = currentY - lastY;

			if (currentY > 120) {
				if (diff > 6) {
					hidden = true;
					servicesOpen = false;
				} else if (diff < -4) {
					hidden = false;
				}
			} else {
				hidden = false;
			}

			scrolled = currentY > 10;
			document.body.classList.toggle('scrolled', currentY > 100);
			lastY = currentY;
		};

		updateScroll();
		window.addEventListener('scroll', updateScroll, { passive: true });

		const closeDropdown = (e) => {
			if (!e.target.closest('.cps-dropdown') && !e.target.closest('.cps-mob-drop')) {
				servicesOpen = false;
			}
		};

		document.addEventListener('click', closeDropdown);

		return () => {
			window.removeEventListener('scroll', updateScroll);
			document.removeEventListener('click', closeDropdown);
		};
	});
</script>

<header class="cps-header" class:cps-hidden={hidden}>
	<div class="cps-topbar">
		<div class="cps-topbar-inner">
			<span>Serving the Greater US &nbsp;·&nbsp; <strong>24h Response Time Guaranteed</strong></span>
			<a href="tel:+18503238103">&#9990; +1(850) 323-8103</a>
		</div>
	</div>

	<div class="cps-nav-bar" class:cps-scrolled={scrolled}>
		<div class="cps-inner">
			<a href="/" class="cps-logo" onclick={closeMobileMenu}>
				<img src="/assets/img/logo.png" alt="Cordova Property Services" />
			</a>

			<nav class="cps-nav">
				<a href="/" class="cps-link" class:cps-active={page.url.pathname === '/'}>Home</a>
				<a href="/about" class="cps-link" class:cps-active={page.url.pathname === '/about'}>About</a>

				<div class="cps-dropdown">
					<button class="cps-link cps-drop-btn" onclick={toggleServices} aria-expanded={servicesOpen}>
						Services
						<svg class="cps-chev" class:open={servicesOpen} width="11" height="11" viewBox="0 0 24 24"
							fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
							<polyline points="6 9 12 15 18 9"/>
						</svg>
					</button>

					{#if servicesOpen}
					<div class="cps-mega" role="menu">
						<div class="cps-mega-grid">
							{#each services as grp}
							<div class="cps-col">
								<div class="cps-col-head">
									<span class="cps-col-icon">{@html grp.icon}</span>
									<span class="cps-col-label">{grp.group}</span>
								</div>
								{#each grp.items as s}
								<a href={s.href} class="cps-item"
								   class:cps-active={page.url.pathname === s.href}
								   onclick={closeMobileMenu} role="menuitem">
									{s.label}
									<svg class="cps-item-arr" width="10" height="10" viewBox="0 0 24 24"
										fill="none" stroke="currentColor" stroke-width="2.5"
										stroke-linecap="round" stroke-linejoin="round">
										<line x1="5" y1="12" x2="19" y2="12"/>
										<polyline points="12 5 19 12 12 19"/>
									</svg>
								</a>
								{/each}
							</div>
							{/each}
						</div>
						<div class="cps-mega-foot">
							<span>Need a complete unit turnover?</span>
							<a href="/services/turnkey" onclick={closeMobileMenu}>View Turnkey Services →</a>
						</div>
					</div>
					{/if}
				</div>
			</nav>

			<a
				href="/our-work"
				class="cps-link"
				class:cps-active={page.url.pathname === '/our-work'}>Our Work</a>

			<a href="/contact" class="cps-cta" onclick={closeMobileMenu}>
				Contact Us
				<svg width="12" height="12" viewBox="0 0 24 24" fill="none"
					stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
					<line x1="5" y1="12" x2="19" y2="12"/>
					<polyline points="12 5 19 12 12 19"/>
				</svg>
			</a>

			<button class="cps-ham" onclick={toggleMobileMenu} aria-label="Toggle menu">
				<span class:open={mobileOpen}></span>
				<span class:open={mobileOpen}></span>
				<span class:open={mobileOpen}></span>
			</button>
		</div>
	</div>
</header>

{#if mobileOpen}
<div class="cps-mob-menu" class:cps-mob-hidden={hidden}>
	<a href="/" onclick={closeMobileMenu} class="cps-mob-link" class:cps-active={page.url.pathname === '/'}>Home</a>
	<a href="/about" onclick={closeMobileMenu} class="cps-mob-link" class:cps-active={page.url.pathname === '/about'}>About</a>

	<div class="cps-mob-drop">
		<button class="cps-mob-drop-btn" onclick={toggleServices}>
			Services
			<svg class="cps-chev" class:open={servicesOpen} width="11" height="11" viewBox="0 0 24 24"
				fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
				<polyline points="6 9 12 15 18 9"/>
			</svg>
		</button>

		{#if servicesOpen}
		<div class="cps-mob-sub">
			{#each allServices as s}
			<a href={s.href} onclick={closeMobileMenu}
			   class="cps-mob-sublink" class:cps-active={page.url.pathname === s.href}>{s.label}</a>
			{/each}
		</div>
		{/if}
	</div>

	<a
		href="/our-work"
		onclick={closeMobileMenu}
		class="cps-mob-link"
		class:cps-active={page.url.pathname === '/our-work'}>Our Work</a>

	<a href="/contact" class="cps-mob-cta" onclick={closeMobileMenu}>Contact Us →</a>
</div>
{/if}

<style>
:root {
	--top-h:   34px;
	--nav-h:   74px;
	--total-h: 108px;
	--red:     #e84545;
	--red-dk:  #c93535;
	--green:   #4a7c3f;
	--olive:   #6b8f3e;
	--dark:    #111111;
	--white:   #ffffff;
	--text:    #1a1a1a;
	--muted:   #606060;
	--border:  rgba(0,0,0,0.07);
}

:global(body) {
	padding-top: var(--total-h);
}

.cps-header {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 9997;
	transform: translateY(0);
	transition: transform .35s cubic-bezier(.4,0,.2,1);
}

.cps-header.cps-hidden {
	transform: translateY(-100%);
}

.cps-topbar {
	background: var(--dark);
	height: var(--top-h);
}

.cps-topbar-inner {
	max-width: 1400px;
	margin: 0 auto;
	padding: 0 32px;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 12px;
	color: rgba(255,255,255,.55);
}

.cps-topbar-inner strong {
	color: rgba(255,255,255,.9);
	font-weight: 600;
}

.cps-topbar-inner a {
	color: rgba(255,255,255,.55);
	text-decoration: none;
	transition: color .15s;
}

.cps-topbar-inner a:hover {
	color: #fff;
}

.cps-nav-bar {
	background: var(--white);
	height: var(--nav-h);
	border-bottom: 3px solid var(--green);
	transition: box-shadow .3s;
}

.cps-nav-bar.cps-scrolled {
	box-shadow: 0 4px 24px rgba(0,0,0,.12);
}

.cps-inner {
	max-width: 1400px;
	margin: 0 auto;
	padding: 0 32px;
	height: var(--nav-h);
	display: flex;
	align-items: center;
	gap: 8px;
}

.cps-logo {
	display: flex;
	align-items: center;
	flex-shrink: 0;
	text-decoration: none;
	margin-right: 12px;
	transition: opacity .2s;
}

.cps-logo:hover {
	opacity: .82;
}

.cps-logo img {
	height: 58px;
	width: auto;
	max-width: 200px;
	object-fit: contain;
	display: block;
}

.cps-nav {
	display: flex;
	align-items: center;
	gap: 0;
	margin-left: auto;
}

.cps-link {
	position: relative;
	display: inline-flex;
	align-items: center;
	gap: 5px;
	padding: 10px 14px 13px;
	font-size: 14.5px;
	font-weight: 600;
	color: var(--text);
	text-decoration: none;
	background: none;
	border: none;
	border-radius: 6px 6px 0 0;
	cursor: pointer;
	font-family: inherit;
	letter-spacing: .01em;
	white-space: nowrap;
	transition: color .18s, background .18s;
}
.cps-drop-btn{
	padding-right: 8px;
}

.cps-link::after {
	content: '';
	position: absolute;
	bottom: 0;
	left: 16px;
	right: 16px;
	height: 3px;
	background: var(--green);
	border-radius: 2px 2px 0 0;
	transform: scaleX(0);
	transform-origin: left;
	transition: transform .24s cubic-bezier(.4,0,.2,1);
}

.cps-link:hover {
	color: var(--green);
	background: #f3f8f0;
}

.cps-link:hover::after,
.cps-link.cps-active::after {
	transform: scaleX(1);
}

.cps-link.cps-active {
	color: var(--green);
}

.cps-chev {
	flex-shrink: 0;
	color: var(--muted);
	transition: transform .22s;
}

.cps-chev.open {
	transform: rotate(180deg);
}

.cps-dropdown {
	position: relative;
}

.cps-mega {
	position: absolute;
	top: calc(100% + 3px);
	left: 50%;
	transform: translateX(-50%);
	background: var(--white);
	border: 1px solid var(--border);
	border-top: 3px solid var(--green);
	border-radius: 0 0 14px 14px;
	box-shadow: 0 20px 56px rgba(0,0,0,.13), 0 4px 14px rgba(0,0,0,.06);
	width: 720px;
	z-index: 9999;
	overflow: hidden;
	animation: megaIn .2s cubic-bezier(.4,0,.2,1);
}

@keyframes megaIn {
	from { opacity:0; transform: translateX(-50%) translateY(-6px); }
	to   { opacity:1; transform: translateX(-50%) translateY(0); }
}

.cps-mega-grid {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	padding: 20px 12px 10px;
	gap: 0;
}

.cps-col {
	padding: 0 12px 8px;
	border-right: 1px solid var(--border);
}

.cps-col:last-child {
	border-right: none;
}

.cps-col-head {
	display: flex;
	align-items: center;
	gap: 7px;
	padding: 3px 6px 10px;
	margin-bottom: 2px;
}

.cps-col-icon {
	display: flex;
	color: var(--green);
	flex-shrink: 0;
}

.cps-col-label {
	font-size: 10.5px;
	font-weight: 700;
	color: var(--green);
	text-transform: uppercase;
	letter-spacing: .08em;
}

.cps-item {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 8px 8px 8px 10px;
	font-size: 13.5px;
	font-weight: 500;
	color: var(--text);
	text-decoration: none;
	border-radius: 7px;
	gap: 4px;
	transition: background .13s, color .13s, padding-left .13s;
}

.cps-item-arr {
	flex-shrink: 0;
	color: var(--red);
	opacity: 0;
	transform: translateX(-3px);
	transition: opacity .13s, transform .13s;
}

.cps-item:hover {
	background: #f1f8ec;
	color: var(--green);
	padding-left: 14px;
}

.cps-item:hover .cps-item-arr {
	opacity: 1;
	transform: translateX(0);
}

.cps-item.cps-active {
	color: var(--red);
	font-weight: 600;
}

.cps-mega-foot {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 12px 24px;
	background: #f6f9f3;
	border-top: 1px solid var(--border);
	font-size: 12.5px;
	gap: 12px;
}

.cps-mega-foot span {
	color: var(--muted);
}

.cps-mega-foot a {
	font-weight: 700;
	color: var(--red);
	text-decoration: none;
	white-space: nowrap;
	transition: color .14s;
}

.cps-mega-foot a:hover {
	color: var(--red-dk);
}

.cps-cta {
	flex-shrink: 0;
	display: inline-flex;
	align-items: center;
	gap: 7px;
	margin-left: 16px;
	padding: 12px 24px;
	background: var(--red);
	color: #fff;
	border-radius: 8px;
	font-size: 14px;
	font-weight: 700;
	text-decoration: none;
	letter-spacing: .01em;
	transition: background .18s, transform .18s, box-shadow .18s;
	white-space: nowrap;
}

.cps-cta:hover {
	background: var(--red-dk);
	transform: translateY(-1px);
	box-shadow: 0 6px 20px rgba(232,69,69,.3);
	color: #fff;
}

.cps-ham {
	display: none;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 5px;
	width: 42px;
	height: 42px;
	background: none;
	border: 1.5px solid rgba(0,0,0,.15);
	border-radius: 8px;
	cursor: pointer;
	flex-shrink: 0;
	padding: 0;
}

.cps-ham span {
	display: block;
	width: 20px;
	height: 2px;
	background: var(--text);
	border-radius: 2px;
	transition: transform .24s, opacity .18s;
	transform-origin: center;
}

.cps-ham span:nth-child(1).open { transform: translateY(7px) rotate(45deg); }
.cps-ham span:nth-child(2).open { opacity: 0; transform: scaleX(0); }
.cps-ham span:nth-child(3).open { transform: translateY(-7px) rotate(-45deg); }

.cps-mob-menu {
	position: fixed;
	top: var(--total-h);
	left: 0;
	right: 0;
	bottom: 0;
	background: var(--white);
	border-top: 3px solid var(--green);
	padding: 12px 16px 24px;
	display: flex;
	flex-direction: column;
	gap: 2px;
	z-index: 9996;
	box-shadow: 0 16px 40px rgba(0,0,0,.12);
	overflow-y: auto;
	-webkit-overflow-scrolling: touch;
	animation: slideDown .22s cubic-bezier(.4,0,.2,1);
	transition: top .35s cubic-bezier(.4,0,.2,1);
}

.cps-mob-menu.cps-mob-hidden {
	top: 0;
}

@keyframes slideDown {
	from { opacity:0; transform: translateY(-8px); }
	to   { opacity:1; transform: translateY(0); }
}

.cps-mob-link {
	padding: 13px 16px;
	font-size: 15px;
	font-weight: 600;
	color: var(--text);
	text-decoration: none;
	border-radius: 8px;
	transition: background .14s, color .14s;
}

.cps-mob-link:hover,
.cps-mob-link.cps-active {
	background: #f1f8ec;
	color: var(--green);
}

.cps-mob-drop-btn {
	width: 100%;
	padding: 13px 16px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 15px;
	font-weight: 600;
	color: var(--text);
	background: none;
	border: none;
	border-radius: 8px;
	cursor: pointer;
	font-family: inherit;
	transition: background .14s, color .14s;
}

.cps-mob-drop-btn:hover {
	background: #f1f8ec;
	color: var(--green);
}

.cps-mob-sub {
	padding: 4px 0 4px 16px;
	display: flex;
	flex-direction: column;
	gap: 1px;
}

.cps-mob-sublink {
	padding: 10px 14px;
	font-size: 13.5px;
	color: var(--muted);
	text-decoration: none;
	border-radius: 6px;
	border-left: 2px solid #dce8d4;
	padding-left: 14px;
	transition: background .13s, color .13s, border-color .13s;
}

.cps-mob-sublink:hover,
.cps-mob-sublink.cps-active {
	background: #f1f8ec;
	color: var(--green);
	border-left-color: var(--green);
}

.cps-mob-cta {
	margin-top: 10px;
	padding: 14px;
	text-align: center;
	background: var(--red);
	color: #fff;
	border-radius: 8px;
	font-size: 15px;
	font-weight: 700;
	text-decoration: none;
	transition: background .18s;
}

.cps-mob-cta:hover {
	background: var(--red-dk);
}

@media (max-width: 1199px) {
	.cps-nav  { display: none; }
	.cps-cta  { display: none; }
	.cps-ham  { display: flex; margin-left: auto; }
}

@media (max-width: 600px) {
	.cps-topbar { display: none; }
	:global(body) { padding-top: var(--nav-h); }
	.cps-mob-menu {
		top: var(--nav-h);
		bottom: 0;
	}
	.cps-logo img { height: 46px; }
	.cps-inner { padding: 0 16px; }
}
</style>