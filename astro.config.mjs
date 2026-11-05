import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import { blogs } from './src/data/blogs.js'

// lastmod for articles comes from their real publish or update date. Other
// pages carry no lastmod rather than a made-up one.
const articleDates = Object.fromEntries(
  blogs.map((b) => [`https://nuberry.in/blog/${b.slug}/`, b.dateModified || b.datePublished]),
)
const latestArticle = blogs.map((b) => b.dateModified || b.datePublished).sort().at(-1)

export default defineConfig({
  site: 'https://nuberry.in',
  // Every page is /path/ with a trailing slash, matching its canonical URL.
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    react(),
    sitemap({
      filter: (page) => !page.includes('/404'),
      serialize(item) {
        const date = articleDates[item.url] || (item.url === 'https://nuberry.in/blog/' ? latestArticle : null)
        if (date) item.lastmod = new Date(date).toISOString()
        return item
      },
    }),
  ],
})
