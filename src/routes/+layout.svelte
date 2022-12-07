<script>
	import Header from '../components/Header.svelte';
	import '../app.css';
</script>

<svelte:head>
	<title>Jeric June Logan</title>
</svelte:head>

<main class="bg-secondary scroll-smooth">
	<Header />
	<slot />
</main>
