<script>
	let {
		open = false,
		kind = 'error',
		title = '',
		message = '',
		onClose = () => {}
	} = $props();

	function onKeydown(event) {
		if (event.key === 'Escape' && open) onClose();
	}
</script>

<svelte:window onkeydown={onKeydown} />

{#if open}
	<div
		class="fam-backdrop"
		role="dialog"
		aria-modal="true"
		aria-label={title}
		onclick={(e) => { if (e.target === e.currentTarget) onClose(); }}
	>
		<div class="fam-card" class:is-error={kind === 'error'} class:is-success={kind === 'success'}>
			<div class="fam-icon">
				<img src="/assets/img/logo-mark.png" alt="Cordova Property Services" />
				<span class="fam-badge">
					<i class="bi {kind === 'success' ? 'bi-check-lg' : 'bi-exclamation-lg'}"></i>
				</span>
			</div>
			<h3>{title}</h3>
			<p>{message}</p>
			<button type="button" class="fam-btn" onclick={onClose}>Got it</button>
		</div>
	</div>
{/if}

<style>
	.fam-backdrop {
		position: fixed;
		inset: 0;
		z-index: 1090;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 1.25rem;
		background: rgba(12, 18, 14, 0.6);
		animation: fam-fade 0.2s ease-out;
	}

	.fam-card {
		width: 100%;
		max-width: 380px;
		background: #fff;
		border-radius: 16px;
		padding: 32px 28px 28px;
		text-align: center;
		box-shadow: 0 24px 60px -12px rgba(0, 0, 0, 0.5);
		animation: fam-rise 0.25s cubic-bezier(0.2, 0.9, 0.3, 1);
	}

	.fam-icon {
		position: relative;
		width: 76px;
		height: 76px;
		margin: 0 auto 18px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		background: linear-gradient(135deg, #fffcf0 0%, #f3f1e2 100%);
		border: 2px solid rgba(107, 107, 40, 0.18);
		box-shadow: 0 6px 18px rgba(107, 107, 40, 0.12);
	}

	.fam-icon img {
		width: 46px;
		height: 46px;
		object-fit: contain;
	}

	.fam-badge {
		position: absolute;
		right: -4px;
		bottom: -4px;
		width: 26px;
		height: 26px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 13px;
		color: #fff;
		border: 2.5px solid #fff;
		box-shadow: 0 4px 10px rgba(0, 0, 0, 0.18);
	}

	.fam-card.is-error .fam-badge { background: linear-gradient(135deg, #ef4444 0%, #b91c1c 100%); }
	.fam-card.is-success .fam-badge { background: linear-gradient(135deg, #10b981 0%, #047857 100%); }

	.fam-card h3 {
		margin: 0 0 8px;
		font-size: 18px;
		font-weight: 800;
		color: #1a1a1a;
	}

	.fam-card p {
		margin: 0 0 22px;
		font-size: 14px;
		line-height: 1.6;
		color: #555;
	}

	.fam-btn {
		background: linear-gradient(135deg, #6b6b28 0%, #4a4a1c 100%);
		color: #fff;
		border: none;
		padding: 12px 32px;
		border-radius: 999px;
		font-weight: 800;
		font-size: 14px;
		cursor: pointer;
		transition: transform 0.2s ease, box-shadow 0.2s ease;
		box-shadow: 0 10px 24px rgba(107, 107, 40, 0.3);
	}

	.fam-btn:hover {
		transform: translateY(-2px);
		box-shadow: 0 14px 30px rgba(107, 107, 40, 0.4);
	}

	@keyframes fam-fade {
		from { opacity: 0; }
		to   { opacity: 1; }
	}

	@keyframes fam-rise {
		from { opacity: 0; transform: translateY(14px) scale(0.97); }
		to   { opacity: 1; transform: none; }
	}

	@media (prefers-reduced-motion: reduce) {
		.fam-backdrop, .fam-card { animation: none; }
	}
</style>
