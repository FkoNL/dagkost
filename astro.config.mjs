import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Custom domain hosted on GitHub Pages.
export default defineConfig({
  site: 'https://dagkost.nl',
  base: '/',
  integrations: [sitemap()],
  output: 'static'
});
