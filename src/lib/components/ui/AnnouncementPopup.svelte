<script>
	import { onMount } from 'svelte';

	let {
		image = '/assets/img/announcements/biloxi-service-area.jpg',
		alt = 'Cordova Property Services is now serving Biloxi, Mississippi',
		// Un anuncio se muestra siempre: cada vez que se carga la home.
		// Si algún día molesta a los visitantes frecuentes, aquí se le pone un
		// número de días de descanso (por ejemplo 7) y solo se lo repite pasado
		// ese tiempo a quien ya lo cerró.
		repeatAfterDays = 0,
		// Si se pone en true, dentro de una misma visita no reaparece al ir a
		// otra página y volver a la home. Por defecto reaparece.
		oncePerVisit = false,
		// Identificador del anuncio. Cámbialo al publicar uno nuevo para que
		// vuelva a aparecer aunque la persona ya hubiera cerrado el anterior.
		id = 'biloxi-2026'
	} = $props();

	let open = $state(false);
	let closeButton = $state(null);

	const storageKey = $derived(`cps_announcement_${id}`);

	/* Por defecto el anuncio sale siempre. Los dos frenos son opcionales y
	   responden a preguntas distintas:
	   - oncePerVisit    → ¿ya lo vio en ESTA visita? (sessionStorage)
	   - repeatAfterDays → ¿ya lo CERRÓ hace poco?    (localStorage) */
	function shouldShow() {
		if (oncePerVisit) {
			try {
				if (sessionStorage.getItem(storageKey)) return false;
			} catch {
				/* sin sessionStorage seguimos evaluando lo demás */
			}
		}
		if (repeatAfterDays === 0) return true;
		try {
			const dismissedAt = Number(localStorage.getItem(storageKey));
			if (!dismissedAt) return true;
			const days = (Date.now() - dismissedAt) / 86400000;
			return days >= repeatAfterDays;
		} catch {
			// Navegación privada o almacenamiento bloqueado: se muestra igual.
			return true;
		}
	}

	function marcarVisto() {
		try {
			sessionStorage.setItem(storageKey, '1');
		} catch {
			/* sin almacenamiento el anuncio igual se ve y se cierra */
		}
	}

	function close() {
		open = false;
		document.body.style.overflow = '';
		marcarVisto();
		try {
			localStorage.setItem(storageKey, String(Date.now()));
		} catch {
			/* sin almacenamiento no se recuerda, pero el cierre funciona */
		}
	}

	// Solo se cierra con la X o con Escape. Un clic fuera no hace nada:
	// es un anuncio, no un aviso descartable de pasada.
	function onKeydown(event) {
		if (event.key === 'Escape') close();
	}

	onMount(() => {
		if (!shouldShow()) return;

		// Pequeña espera para no competir con el render inicial de la página.
		const timer = setTimeout(() => {
			open = true;
			marcarVisto();   // se marca al mostrarlo, no al cerrarlo
			document.body.style.overflow = 'hidden';
			// El foco va al botón de cerrar: quien navega con teclado sabe cómo salir.
			requestAnimationFrame(() => closeButton?.focus());
		}, 700);

		return () => {
			clearTimeout(timer);
			document.body.style.overflow = '';
		};
	});
</script>

<svelte:window onkeydown={onKeydown} />

{#if open}
	<div class="cps-announcement" role="dialog" aria-modal="true" aria-label={alt}>
		<div class="cps-announcement__card">
			<button
				bind:this={closeButton}
				type="button"
				class="cps-announcement__close"
				onclick={close}
				aria-label="Close announcement"
			>
				<i class="bi bi-x-lg" aria-hidden="true"></i>
			</button>

			<img src={image} {alt} width="900" height="900" />
		</div>
	</div>
{/if}

<style>
	.cps-announcement {
		position: fixed;
		inset: 0;
		z-index: 1080;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 1.25rem;
		background: rgba(12, 18, 14, 0.72);
		animation: cps-fade 0.25s ease-out;
	}

	.cps-announcement__card {
		position: relative;
		width: 100%;
		max-width: 520px;
		max-height: 92vh;
		border-radius: 12px;
		overflow: hidden;
		box-shadow: 0 24px 60px -12px rgba(0, 0, 0, 0.55);
		animation: cps-rise 0.3s cubic-bezier(0.2, 0.9, 0.3, 1);
	}

	.cps-announcement__card img {
		display: block;
		width: 100%;
		height: auto;
		max-height: 92vh;
		object-fit: contain;
	}

	.cps-announcement__close {
		position: absolute;
		top: 10px;
		right: 10px;
		z-index: 2;
		width: 38px;
		height: 38px;
		display: flex;
		align-items: center;
		justify-content: center;
		border: none;
		border-radius: 50%;
		background: rgba(0, 0, 0, 0.55);
		color: #fff;
		font-size: 1rem;
		line-height: 1;
		cursor: pointer;
		transition: background 0.15s ease, transform 0.15s ease;
	}

	.cps-announcement__close:hover,
	.cps-announcement__close:focus-visible {
		background: rgba(0, 0, 0, 0.8);
		transform: scale(1.06);
	}

	.cps-announcement__close:focus-visible {
		outline: 2px solid #fff;
		outline-offset: 2px;
	}

	@keyframes cps-fade {
		from { opacity: 0; }
		to   { opacity: 1; }
	}

	@keyframes cps-rise {
		from { opacity: 0; transform: translateY(14px) scale(0.98); }
		to   { opacity: 1; transform: none; }
	}

	@media (prefers-reduced-motion: reduce) {
		.cps-announcement,
		.cps-announcement__card {
			animation: none;
		}
	}

	@media (max-width: 575px) {
		.cps-announcement { padding: 0.75rem; }
		.cps-announcement__close { width: 34px; height: 34px; top: 8px; right: 8px; }
	}
</style>
