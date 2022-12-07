/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: 'hsl(286, 23%, 37%)',
				'primary-light': 'hsl(294, 11%, 50%)',
				secondary: 'hsl(149, 26%, 62%)',
				'secondary-light': 'hsl(133, 42%, 83%)',
				dark: 'hsl(168, 37%, 14%)',
				light: 'hsl(112, 100%, 97%)'
			},
			backgroundImage: {
				'header-hero': "url('./images/header-hero.svg')"
			},
			fontFamily: {
				body: 'Roboto Mono, monospace',
				heading: 'Spline Sans Mono, monospace'
			}
		}
	},
	plugins: []
};
