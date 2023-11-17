/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
        fontFamily: {
          'display': ['ABCBingo', 'sans-serif'],
          'body': ['Maria', 'Helvetica', 'sans-serif'],
        },
        colors: {
          black: '#000000',
          background: '#d8d1c6',
        },
	},
	plugins: [],
}
