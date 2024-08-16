import sveltePreprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: sveltePreprocess({
		scss: {
			includePaths: ['src/styles'],
		},
	}),

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null,
			strict: false,
		}),
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/svelte-blobby-test' : ''
		}
	},

	vite: {
		preprocess: vitePreprocess(),
	},
};

export default config;
