# Going live on nuberry.in

Do these in order. Steps 1 to 3 can happen today. Steps 5 and 6 only once the site is live and checked.

## 1. Netlify site

1. Netlify → Add new site → Import from Git → GitHub → `Taru-Money/nuberry-web`.
2. Build settings come from `netlify.toml` (`npm run build`, publish `dist`, Node 22). Nothing to fill in.
3. Deploy. Open the `*.netlify.app` URL and click through every page in light and dark mode.

## 2. Domain (GoDaddy → Netlify)

1. Netlify → Domain management → Add domain → `nuberry.in`. Also add `www.nuberry.in`.
2. Netlify shows the DNS records it wants. At GoDaddy → nuberry.in → DNS:
   - Apex `@`: an `A` record to Netlify's load balancer IP (Netlify shows it, usually `75.2.60.5`). Delete GoDaddy's default "Parked" A record.
   - `www`: a `CNAME` to your `<site>.netlify.app`.
   - Or move nameservers to Netlify DNS instead. Simpler long term, but only do it once email records (step 3) are copied over.
3. Wait for DNS, then Netlify → HTTPS → Verify DNS → Provision certificate.
4. `netlify.toml` already redirects `www` to the apex.

## 3. Email on nuberry.in

The site still shows `taru@taru.money` (in `src/lib/site.js` and the privacy policy) because it is the inbox that works today.

1. Set up a mailbox on nuberry.in (Google Workspace or Zoho).
2. Add its MX, SPF, DKIM and DMARC records at GoDaddy. Without SPF, DKIM and DMARC, mail from the new domain lands in spam.
3. Change `CONTACT_EMAIL` in `src/lib/site.js` and the email in `src/legal/privacy-policy.md`. Get the legal text signed off.

## 4. Waitlist backend (before launch, or every form fails)

Apply `docs/taru-mvp-redirects-and-cors.patch` to the `taru-mvp` repo, or by hand: add `https://nuberry.in` and `https://www.nuberry.in` to `allowedOrigins` in `backend/src/index.js`, and redeploy the Render backend. Then submit a test email on the live site and check it lands in the `waitlist_emails` table with the right `source`.

## 5. Redirect taru.money's marketing pages

The same patch adds 301 redirects to `taru-mvp/netlify.toml` for `/`, `/about`, `/calculator`, `/tax-calculator`, `/blog`, `/blog/*`, `/privacy`, `/terms` and `/eula`. App routes (`/login`, `/signup`, `/parent/*`, `/child/*`, `/app/*`) are deliberately left alone so pilot families keep working.

After it deploys, check with `curl -I https://taru.money/blog/` (expect `301` to `https://nuberry.in/blog/`) and `curl -I https://taru.money/login` (expect `200`).

Keep taru.money renewed for at least two years.

## 6. Search Console and ads

1. Search Console → add `https://nuberry.in` as a Domain property (verify with the TXT record at GoDaddy).
2. Submit `https://nuberry.in/sitemap-index.xml`.
3. Once the taru.money redirects are live: old property → Settings → Change of address → nuberry.in.
4. Update Google Ads and Meta ad final URLs to nuberry.in. The Ads tag and Meta pixel IDs are unchanged; add nuberry.in to the pixel's allowed domains in Meta Events Manager.

## 7. Still to fill in

- Company social profile URLs (`SOCIAL_LINKS` in `src/lib/site.js`). The icons show but do nothing until then.
- AMFI registration and disclosures links on the About page (`AMFI_REGISTRATION_URL`, `DISCLOSURES_URL`).
- Legal pages carry the rebrand (domain and name) but keep their "Last updated 3 September 2026" date. Have them reviewed and re-dated.
