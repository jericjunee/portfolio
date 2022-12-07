<script>
	import { quintOut } from 'svelte/easing';
	import { slide } from 'svelte/transition';

	let positions = ['Full-stack Web Developer', 'Designer', 'Dreamer', 'Enthusiast'];
	let activeIndex = 0;

	setInterval(function () {
		activeIndex < positions.length - 1 ? activeIndex++ : (activeIndex = 0);
	}, 2000);
</script>

<section
	class="flex flex-col justify-center bg-header-hero h-screen bg-no-repeat bg-cover pt-20 px-64 gap-5 text-light relative"
>
	<h1 class="text-6xl font-extrabold">Jeric June Logan</h1>
	{#each positions as position, index}
		{#if activeIndex === index}
			<p
				class="text-slider text-xl absolute mt-24"
				transition:slide={{ delay: 250, duration: 500, easing: quintOut }}
			>
				{position}
			</p>
		{/if}
	{/each}
</section>

<section class="py-64 bg-secondary-light">
	<h2 class="text-5xl text-center">About Me</h2>
</section>
