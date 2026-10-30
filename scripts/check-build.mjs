// Post-build checks. Fails the build (and so the Netlify deploy) when a page
// is missing its SEO basics or compliance text, or links somewhere that
// doesn't exist.
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs'
import { join, relative } from 'node:path'

const dist = new URL('../dist/', import.meta.url).pathname
const SITE = 'https://nuberry.in'
const pages = []
const walk = (dir) => {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f)
    if (statSync(p).isDirectory()) walk(p)
    else if (f.endsWith('.html')) pages.push(p)
  }
}
walk(dist)

const problems = []
const fail = (page, msg) => problems.push(`${page}: ${msg}`)
const one = (html, re) => (html.match(re) || []).length

for (const file of pages) {
  const html = readFileSync(file, 'utf8')
  const rel = '/' + relative(dist, file).replace(/index\.html$/, '')
  const is404 = rel === '/404.html'

  if (one(html, /<h1[\s>]/g) !== 1) fail(rel, `expected one <h1>, found ${one(html, /<h1[\s>]/g)}`)
  if (!/<title>[^<]{10,}<\/title>/.test(html)) fail(rel, 'missing or short <title>')
  const desc = /<meta name="description" content="([^"]*)"/.exec(html)
  if (!desc || desc[1].length < 50) fail(rel, 'missing or short meta description')
  if (desc && desc[1].length > 170) fail(rel, `meta description is ${desc[1].length} chars (keep under 170)`)
  if (!is404) {
    const canon = /<link rel="canonical" href="([^"]+)"/.exec(html)
    if (!canon || canon[1] !== SITE + rel) fail(rel, `canonical should be ${SITE + rel}, is ${canon?.[1]}`)
    if (!html.includes('og:image')) fail(rel, 'missing og:image')
  }
  // Compliance: every page carries the distributor line, ARN and risk disclaimer.
  if (!html.includes('ARN: 367667') && !html.includes('ARN 367667')) fail(rel, 'missing ARN')
  if (!html.includes('subject to market risks')) fail(rel, 'missing market risk disclaimer')
  // Old brand must not leak (the contact inbox is the one allowed exception).
  const leaks = html.replace(/taru@taru\.money/g, '').match(/\bTaru\b|taru\.money/gi)
  if (leaks) fail(rel, `old brand mentioned: ${[...new Set(leaks)].join(', ')}`)

  for (const m of html.matchAll(/href="(\/[^"#?]*)/g)) {
    const path = m[1]
    if (path.startsWith('//')) continue
    const target = path.endsWith('/') ? join(dist, path, 'index.html') : join(dist, path)
    if (!existsSync(target)) fail(rel, `broken internal link ${path}`)
  }
}

if (problems.length) {
  console.error(`\nBuild check failed (${problems.length}):\n- ` + problems.join('\n- '))
  process.exit(1)
}
console.log(`Build check passed: ${pages.length} pages`)
