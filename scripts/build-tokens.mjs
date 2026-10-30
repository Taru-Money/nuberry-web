// Generates src/styles/tokens.css from design/tokens.json (the Nuberry design
// system export). Run automatically before dev and build. Never edit
// tokens.css by hand: change design/tokens.json and the design system together.
import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const tokens = JSON.parse(readFileSync(resolve(root, 'design/tokens.json'), 'utf8'))

const themes = tokens.color.themes.map((t) => t.id)
const [primaryTheme] = themes
const byTheme = Object.fromEntries(themes.map((t) => [t, []]))

const resolveColor = (value, theme) => {
  const v = typeof value === 'string' ? value : value[theme] ?? value[primaryTheme]
  const alias = /^\{(.+)\}$/.exec(v)
  return alias ? `var(--${alias[1]})` : v
}

for (const tok of tokens.color.tokens) {
  for (const theme of themes) byTheme[theme].push(`  --${tok.name}: ${resolveColor(tok.value, theme)};`)
}

const base = []
for (const [name, stack] of Object.entries(tokens.type.families)) base.push(`  --font-${name}: ${stack};`)
for (const group of tokens.type.groups) {
  for (const s of group.styles) {
    base.push(`  --${s.name}-family: var(--font-${group.family});`)
    base.push(`  --${s.name}-size: ${s.fontSize};`)
    base.push(`  --${s.name}-line-height: ${s.lineHeight};`)
    base.push(`  --${s.name}-weight: ${s.fontWeight};`)
  }
}
for (const family of ['spacing', 'radius', 'shadow']) {
  for (const tok of tokens[family]?.tokens ?? []) base.push(`  --${tok.name}: ${tok.value};`)
}

const dark = byTheme.dark ?? []
const css = `/* ${tokens.name}: generated from design/tokens.json by scripts/build-tokens.mjs. Do not edit. */
:root {
${base.join('\n')}
${byTheme[primaryTheme].join('\n')}
}
${dark.length ? `[data-theme="dark"] {\n${dark.join('\n')}\n}\n` : ''}`

writeFileSync(resolve(root, 'src/styles/tokens.css'), css)
console.log(`tokens.css: ${tokens.color.tokens.length} colours x ${themes.length} themes`)
