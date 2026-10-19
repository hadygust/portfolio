import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Set SITE_URL to your domain in the hosting dashboard; used for canonical URLs, OG tags and the sitemap.
  site: process.env.SITE_URL ?? 'https://hadygust.vercel.app',
  integrations: [mdx(), sitemap()],
  vite: { plugins: [tailwindcss()] },
  devToolbar: { enabled: false },
});
