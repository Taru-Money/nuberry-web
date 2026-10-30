import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://nuberry.in',
  // Every page is /path/ with a trailing slash, matching its canonical URL.
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    react(),
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
})
