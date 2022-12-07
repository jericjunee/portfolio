<script>
	let showBar = false;
	let y = 0;
	$: scroll = y > 20 ? 'bg-white text-primary py-5' : 'py-10';
</script>

<header
	class="flex justify-between px-20 bg-transparent text-light fixed z-50 w-full transition-all {scroll}"
>
	<div>
		<h1 class="text-xl font-bold">Jeric June Logan</h1>
	</div>

	<nav>
		<ul class="flex justify-center gap-x-10">
			<li><a href="#about">about me</a></li>
			<li><a href="#projects">my projects</a></li>
			<li><a href="#contact">contact me</a></li>
		</ul>
	</nav>
</header>

<svelte:window bind:scrollY={y} />
