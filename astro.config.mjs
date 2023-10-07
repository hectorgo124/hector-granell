import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  assets: true,
  site: 'https://hectorgo124.github.io',
  base: '/hector-granell',
});