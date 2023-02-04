import path from 'path';
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter(),
    alias: {
      '@data': path.resolve('./data'),
      '@components': path.resolve('./components/'),
      '@test': path.resolve('./tests'),
      '@src': path.resolve('./src/'),
	  '@routes': path.resolve('./src/routes')
    }
  }
};

export default config;
