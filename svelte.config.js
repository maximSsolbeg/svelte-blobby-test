import sveltePreprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: sveltePreprocess({
		scss: {
			includePaths: ['src/styles'],
		},
	}),

	kit: {
		adapter: adapter(),
	},

	vite: {
		preprocess: vitePreprocess(),
	},
};

export default config;
