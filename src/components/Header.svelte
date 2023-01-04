<script>
	let showBar = false;
	let y = 0;
	$: scroll = y > 20 ? 'bg-white text-primary py-5' : 'bg-transparent text-light py-10';
</script>

<header
	class="flex justify-between px-20 fixed z-50 w-full transition-all {scroll}"
>
	<div>
		<a href="#hero" class="text-xl font-bold">Jeric June Logan</a>
	</div>

	<nav>
		<ul class="flex justify-center gap-x-10">
			<li><a href="#about">About</a></li>
			<li><a href="#projects">Projects</a></li>
			<li><a href="#contact">Contact</a></li>
		</ul>
	</nav>
</header>

<svelte:window bind:scrollY={y} />
