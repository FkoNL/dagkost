import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GitHub Pages project website.
export default defineConfig({
  site: 'https://fkonl.github.io',
  base: '/dagkost',
  integrations: [sitemap()],
  output: 'static'
});
