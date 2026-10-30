# Nuberry website (nuberry.in)

Read this before changing anything. It is the source of truth for how this repo works.

## What this is

The public marketing site for Nuberry, a brand of NextGenOS Financial Services Private Limited (AMFI-registered mutual fund distributor, ARN 367667). It replaced the marketing pages of taru.money in October 2026.

It is **not** the app. The logged-in parent and child web app (login, signup, `/parent/*`, `/child/*`) still lives in the `taru-mvp` repo on taru.money. Don't add auth, Supabase or app screens here.

## Stack

- Astro 5, static output (`dist/`), deployed on Netlify. No server.
- React only for the two calculators, as islands (`src/islands/`, `client:load`). Everything else is plain Astro and HTML, so every page ships real HTML for search engines. Do not turn this into a SPA.
- `trailingSlash: 'always'`: every page URL ends in `/` and its canonical matches.
- Fonts are self-hosted from `@fontsource` (Baloo 2, Figtree). No Google Fonts request.

## Commands

```
npm install
npm run dev        # http://localhost:4321
npm run build      # builds, then runs scripts/check-build.mjs
npm run preview
node scripts/build-brand-images.mjs   # only after a logo change
```

`npm run build` fails if any page is missing a title, description, canonical, og:image, exactly one h1, the ARN, or the market-risk disclaimer, if any internal link is broken, or if the word "Taru" or "taru.money" appears (the contact inbox taru@taru.money is the one exception). Fix the page, never the check.

## Design system: never hard-code a value

The Nuberry design system lives as a claude.ai artifact ("Nuberry", type Design System). This repo holds a copy of its exports in `design/`:

- `design/tokens.json`: colours (light and dark), type, spacing, radius. `scripts/build-tokens.mjs` turns it into `src/styles/tokens.css` on every dev and build. Never edit `tokens.css`.
- `design/components.css`: the system's component CSS (`nb-btn`, `nb-card`, `nb-acc`, `nb-portfolio`, `nb-goal`, `nb-garden`, `nb-task`, `nb-note`, `nb-input` and the rest). Copied to `src/styles/components.css`. Use these classes before writing new CSS.
- The full brand book and logo rules live in the design system artifact, not in this repo (it is public). The rules that matter for the website are summarised below.

When the design system changes, re-export `tokens.json` and `components.css` into `design/`, copy the CSS to `src/styles/`, and rebuild. Change the system and this repo together, never one without the other.

`src/styles/site.css` is the website layer. It may only use `var(--token)` values, except the few site-level variables at its top (page width, marketing type scale above 32px, phone frame colour). If you need a new colour, it belongs in the design system first.

### Brand rules that bite most often

- Raspberry (`--brand`) is the hero surface. Jamun (`--secondary`) frames it. Sunshine (`--highlight`) only ever sits on jamun or raspberry, never on paper or white, and never as text on raspberry.
- Never raspberry text on jamun or jamun text on raspberry.
- On a raspberry surface the button is `nb-btn--action` (jamun, sunshine label). Elsewhere the main button is `nb-btn--primary`.
- Borders, not shadows. Touch targets at least 44px. Focus ring is `--focus`, or `--focus-on-brand` on raspberry and jamun.
- Logos come from `public/brand/*.svg` via `src/components/Logo.astro`. Never live text, never redrawn. Primary on light grounds, reversed on dark grounds and in dark mode. The lockup (with "Paisa bhi. Samajh bhi.") is the website header logo; minimum 180px wide.
- Icons are Lucide (`lucide-static`, via `src/components/Icon.astro`), 1.8px stroke, 2.25px for kids. No emoji, no other icon set.
- Both themes must work. Check every change with the moon/sun toggle in the header.

## Copy and compliance

- Sentence case. No emoji. No em dashes in new copy.
- Money as ₹ with Indian grouping: ₹1,24,500.
- Never promise returns. Never put "grow", "grew", "guaranteed" or "ripen" next to a figure. Returns in calculators are always "assumed", with the assumptions spelled out on the page.
- No referral rewards, cashback, gifts or vouchers for investing or inviting (AMFI code for distributors).
- Every page keeps the footer: brand of NextGenOS, ARN, CIN, registered office, market-risk disclaimer, "app screens are illustrative".
- The product is not live yet. Every CTA goes to the waitlist (`/#waitlist`), never to a signup page.
- Legal pages render `src/legal/*.md`. Don't edit legal text without sign-off.

## Where things live

| What | Where |
| --- | --- |
| Company facts, contact email, backend URL, analytics IDs | `src/lib/site.js` |
| Page shell, meta tags, JSON-LD, theme script, analytics | `src/layouts/Base.astro` |
| Header, footer, logo, icon, waitlist form | `src/components/` |
| Illustrative phone screens | `src/components/mock/` |
| Blog posts (block format) | `src/data/blogs.js`, rendered by `src/components/BlogBody.astro` |
| Home FAQs | `src/data/faqs.js` |
| Calculators | `src/islands/MilestoneCalculator.jsx`, `src/islands/TaxCalculator.jsx` |
| Client behaviour (theme, menu, waitlist, share, reveal) | `src/lib/client.js` |

## Waitlist

Forms post `{ email, source }` to `${BACKEND_URL}/api/waitlist` (the existing Render backend in `taru-mvp`). That backend's CORS allow-list must include `https://nuberry.in` and `https://www.nuberry.in`. If forms fail with "Could not connect", check CORS first.

## Analytics

Google Ads and the Meta pixel load only when `location.hostname` is `nuberry.in`, so local builds and Netlify previews never fire events. A successful waitlist sign-up calls `window.nbTrackLead()`.

## Adding a blog post

Add an object to `src/data/blogs.js` with a unique `slug`, `datePublished`, `title`, `subtitle`, `topic`, `readingTime`, `metaDescription` (under 170 characters) and `body` blocks (`paragraph`, `heading`, `pull_quote`, `bullet_list`, `table`, `assume`, `callout`, `step`). The page, sitemap entry and JSON-LD are generated.
