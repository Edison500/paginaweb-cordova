<script>
	let { data, form } = $props();
</script>

<svelte:head>
	<title>Admin Login | Cordova Property Services</title>
</svelte:head>

<main class="admin-login-page">
	<section class="login-card">
		<a href="/" class="brand-link">
			<img src="/assets/img/logo.png" alt="Cordova Property Services" />
		</a>
		<p class="eyebrow">Private Access</p>
		<h1>Admin Panel</h1>
		<p class="subtitle">Sign in to review quote requests and manage lead status.</p>

		{#if !data.configured}
			<div class="alert warning">
				ADMIN_PASSWORD is missing in your .env file.
			</div>
		{/if}

		{#if form?.message}
			<div class="alert error">{form.message}</div>
		{/if}

		<form method="POST" class="login-form">
			<label>
				<span>Username</span>
				<input name="username" type="text" value={form?.username || data.expectedUser || ''} autocomplete="username" required />
			</label>

			<label>
				<span>Password</span>
				<input name="password" type="password" autocomplete="current-password" required />
			</label>

			<button type="submit">Sign In</button>
		</form>
	</section>
</main>

<style>
	:global(body){background:#f5f4ee;}
	.admin-login-page{min-height:100vh;display:grid;place-items:center;padding:30px 18px;background:radial-gradient(circle at top left,rgba(107,107,40,.16),transparent 34%),linear-gradient(135deg,#f8f7f1 0%,#eeece2 100%);font-family:var(--default-font,Arial,sans-serif);}
	.login-card{width:min(100%,430px);background:#fff;border:1px solid rgba(107,107,40,.12);border-radius:26px;padding:34px 30px;box-shadow:0 24px 70px rgba(26,32,24,.12);}
	.brand-link{display:inline-flex;margin-bottom:22px;}
	.brand-link img{height:58px;width:auto;object-fit:contain;}
	.eyebrow{margin:0 0 8px;color:#6b6b28;font-weight:800;letter-spacing:2px;text-transform:uppercase;font-size:12px;}
	h1{margin:0;color:#172015;font-size:2rem;font-weight:900;letter-spacing:-.04em;}
	.subtitle{margin:10px 0 24px;color:#687064;line-height:1.6;font-size:14px;}
	.login-form{display:grid;gap:16px;}
	label span{display:block;font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:1.4px;color:#4b5446;margin-bottom:8px;}
	input{width:100%;border:1.5px solid #e1e3d8;border-radius:14px;padding:14px 16px;background:#fbfbf7;color:#172015;font-size:15px;outline:none;transition:.2s;}
	input:focus{border-color:#6b6b28;box-shadow:0 0 0 4px rgba(107,107,40,.1);background:#fff;}
	button{border:none;border-radius:999px;background:linear-gradient(135deg,#6b6b28 0%,#4a4a1c 100%);color:#fff;font-weight:900;font-size:15px;padding:15px 22px;cursor:pointer;box-shadow:0 12px 28px rgba(107,107,40,.26);transition:.25s;margin-top:4px;}
	button:hover{transform:translateY(-2px);box-shadow:0 18px 34px rgba(107,107,40,.34);}
	.alert{border-radius:14px;padding:12px 14px;margin:0 0 18px;font-size:13px;font-weight:700;}
	.error{background:#fff1f1;color:#b42318;border:1px solid #ffd5d5;}
	.warning{background:#fff8e7;color:#8a5a00;border:1px solid #ffe4a4;}
</style>
