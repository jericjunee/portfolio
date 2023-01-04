<script>
	import { quintOut } from 'svelte/easing';
	import { slide } from 'svelte/transition';
	import Card from '../components/Card.svelte';

	let positions = ['Developer', 'Designer', 'Dreamer'];
	let activeIndex = 0;

	let mainSkills = [
		{
			type: 'Backend',
			title: 'Laravel',
			image: '../../images/logos/laravel.png',
			level: 8,
		},
		{
			type: 'Frontend',
			title: 'Vue.js',
			image: '../../images/logos/vue.png',
			level: 7,
		},
	];

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

<section id="about" class="flex flex-col gap-10 items-center py-32 bg-secondary-light text-center">
	<h2 class="text-5xl text-center font-semibold">About Me</h2>
	<img class="w-1/5 rounded-full" src="../../images/me.jpg" alt="" />
	<div class="w-1/2 flex flex-col gap-10 text-lg">
		<p>
			Hi! I'm Jeric. I graduated Bachelor of Science in Computer Science on Pamantasan ng Lungsod ng
			Maynila.
		</p>
		<p>
			To be honest, I do a lot of things. Programming, sports, music. You name it. But my passion is
			in Web Development. I do have a plenty of experiences as I become a professional programmer. I
			do a lot of freelancing since my college days and made some websites for them.
		</p>
		<p>I am currently 22 years old and residing at Manila.</p>
	</div>
</section>

<section id="skills" class="flex flex-col gap-5 py-32 px-20 text-center w-full">
	<h2 class="text-5xl font-semibold">My Tech Stack</h2>
	<p class="text-lg mb-10">
		These are the technologies I have worked on and still learning about.
	</p>

	<div>
		<h3 class="font-extrabold text-2xl mb-10">MAIN</h3>
		<div class="flex justify-center gap-5">
			{#each mainSkills as mainSkill}
				<Card content="{mainSkill}" />
			{/each}
		</div>
	</div>
</section>

<section id="projects" class="flex flex-col gap-5 bg-secondary-light py-32 px-20 text-center">
	<h2 class="text-5xl font-semibold">My Projects</h2>
	<p class="text-lg">
		Here are some of my projects as I continue my journey as a Web Developer.
	</p>
	
</section>
