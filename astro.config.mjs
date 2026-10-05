import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Pages that exist for review only and must never be indexed or listed.
const INTERNAL = ['/styleguide/', '/concepts/'];

export default defineConfig({
  site: 'https://goodword.tech',
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'always' },
  compressHTML: true,
  devToolbar: { enabled: false },
  integrations: [
    sitemap({ filter: (page) => !INTERNAL.some((p) => page.endsWith(p)) }),
  ],
});
