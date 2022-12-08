<script>
	import { quintOut } from 'svelte/easing';
	import { slide } from 'svelte/transition';
	import Saos from 'saos';

	let positions = ['Full-stack Web Developer', 'Designer', 'Dreamer', 'Enthusiast'];
	let activeIndex = 0;

	setInterval(function () {
		activeIndex < positions.length - 1 ? activeIndex++ : (activeIndex = 0);
	}, 2000);
</script>

<section
	id="hero"
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

<section id="about" class="py-32 bg-secondary-light">
	<Saos animation={'slide-right 2s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
		<div class="flex flex-col items-center gap-10 text-center">
			<h2 class="text-5xl text-center font-semibold delay-100">about me</h2>
			<img class="w-1/5 rounded-full delay-300" src="../../images/me.jpg" alt="" />
			<div class="w-1/2 flex flex-col gap-10 text-lg delay-500">
				<p>
					Hi! I'm Jeric. I graduated Bachelor of Science in Computer Science on Pamantasan ng
					Lungsod ng Maynila.
				</p>
				<p>
					To be honest, I do a lot of things. Programming, sports, music. You name it. But my
					passion is in Web Development. I do have a plenty of experiences as I become a
					professional programmer. I do a lot of freelancing since my college days and made some
					websites for them.
				</p>
				<p>I am currently 22 years old and residing at Manila.</p>
			</div>
		</div>
	</Saos>
</section>

<section id="projects" class="flex flex-col gap-5 py-32">
	<h2 class="text-5xl text-center font-semibold">my projects</h2>
	<p class="text-center text-lg">
		Here are some of my projects as I continue my journey as a Web Developer.
	</p>
</section>

<style>
	@keyframes -global-slide-right {
		0% {
			transform: rotateX(50deg) translateX(-200vw) skewX(-50deg);
			opacity: 0;
		}
		100% {
			transform: rotateX(0deg) translateX(0) skewX(0deg);
			opacity: 1;
		}
	}
</style>
