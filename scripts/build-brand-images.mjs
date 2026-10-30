// Renders the favicon PNGs and the social share image from the logo masters
// in public/brand. Run once after a logo change: node scripts/build-brand-images.mjs
import { readFileSync, writeFileSync, copyFileSync } from 'node:fs'
import { Resvg } from '@resvg/resvg-js'

const pub = new URL('../public/', import.meta.url)
const read = (p) => readFileSync(new URL(p, pub), 'utf8')
const png = (svg, width, out) => {
  const data = new Resvg(svg, { fitTo: { mode: 'width', value: width } }).render().asPng()
  writeFileSync(new URL(out, pub), data)
}

const icon = read('brand/nuberry-icon-dark.svg')
copyFileSync(new URL('brand/nuberry-icon-dark.svg', pub), new URL('favicon.svg', pub))
png(icon, 32, 'favicon-32.png')
png(icon, 512, 'brand/nuberry-icon-dark.png')
// Apple applies its own mask: full-bleed square, no transparent corners.
png(icon.replace(/rx="[^"]*" ry="[^"]*"/, 'rx="0" ry="0"'), 180, 'apple-touch-icon.png')

// 1200x630 share card: the reversed lockup on jamun.
const lockup = read('brand/nuberry-lockup-reversed.svg')
const inner = lockup.replace(/^[\s\S]*?<svg[^>]*>/, '').replace(/<\/svg>\s*$/, '').replace(/<title>[\s\S]*?<\/title>/, '')
const vb = /viewBox="([^"]+)"/.exec(lockup)[1]
const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#3A1A4D"/>
  <circle cx="1090" cy="560" r="190" fill="#D6336C"/>
  <svg x="200" y="200" width="800" height="250" viewBox="${vb}" preserveAspectRatio="xMidYMid meet">${inner}</svg>
</svg>`
png(og, 1200, 'og-image.png')
console.log('brand images written')
