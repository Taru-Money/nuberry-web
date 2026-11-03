// Runs after the build on Netlify production deploys only. Compares the text of
// each new page with what is live on nuberry.in right now, and writes the URLs
// that are new or changed to dist/indexnow-urls.json. The deploy-succeeded
// function then submits just those URLs to IndexNow, so unchanged pages are
// never resubmitted on every deploy.
import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs'
import { join, relative } from 'node:path'
import { INDEXNOW_SITE, INDEXNOW_LIST } from './indexnow-key.mjs'

const dist = new URL('../dist/', import.meta.url).pathname
const out = join(dist, INDEXNOW_LIST)

if (process.env.CONTEXT !== 'production') {
  writeFileSync(out, '[]')
  console.log('IndexNow: not a production deploy, nothing to submit')
  process.exit(0)
}

const pages = []
const walk = (dir) => {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f)
    if (statSync(p).isDirectory()) walk(p)
    else if (f === 'index.html') pages.push(p)
  }
}
walk(dist)

// The visible text of <main>, plus title and description. Asset hashes and
// script changes don't count as a content change.
const fingerprint = (html) => {
  const head = (/<title>([^<]*)<\/title>/.exec(html)?.[1] ?? '') +
    (/<meta name="description" content="([^"]*)"/.exec(html)?.[1] ?? '')
  const main = /<main[\s\S]*?<\/main>/.exec(html)?.[0] ?? html
  const text = main
    .replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
  return head + '|' + text
}

const changed = []
let failures = 0
await Promise.all(pages.map(async (file) => {
  const path = '/' + relative(dist, file).replace(/index\.html$/, '')
  const url = INDEXNOW_SITE + path
  const html = readFileSync(file, 'utf8')
  if (html.includes('name="robots" content="noindex"')) return
  try {
    const res = await fetch(url, { redirect: 'manual', signal: AbortSignal.timeout(10000) })
    if (res.status !== 200 || fingerprint(await res.text()) !== fingerprint(html)) changed.push(url)
  } catch {
    failures++
    changed.push(url)
  }
}))

writeFileSync(out, JSON.stringify(changed.sort(), null, 1))
console.log(`IndexNow: ${changed.length} new or changed page(s) queued${failures ? ` (${failures} live fetches failed, included to be safe)` : ''}`)
