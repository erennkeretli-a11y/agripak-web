// @ts-check
import { defineConfig } from 'astro/config';

const site = process.env.SITE_URL || 'https://agripak.pro';
const base = process.env.SITE_BASE || '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'tr',
    locales: ['tr', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  build: { format: 'directory' },
  compressHTML: true,
});
