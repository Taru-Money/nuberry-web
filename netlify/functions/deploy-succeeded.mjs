// Netlify calls this after every successful deploy. On production deploys it
// submits the pages that scripts/indexnow-diff.mjs found new or changed to
// IndexNow. Any failure is logged and ignored: it must never affect the site.
import { INDEXNOW_KEY, INDEXNOW_SITE, INDEXNOW_LIST } from '../../scripts/indexnow-key.mjs'

export default async (req) => {
  try {
    const { payload } = await req.json()
    if (payload?.context !== 'production') return new Response('skipped: not production')

    const listRes = await fetch(INDEXNOW_SITE + INDEXNOW_LIST, { cache: 'no-store' })
    const urlList = listRes.ok ? await listRes.json() : []
    if (!urlList.length) return new Response('nothing to submit')

    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        host: new URL(INDEXNOW_SITE).host,
        key: INDEXNOW_KEY,
        keyLocation: `${INDEXNOW_SITE}/${INDEXNOW_KEY}.txt`,
        urlList,
      }),
    })
    console.log(`IndexNow: submitted ${urlList.length} URL(s), status ${res.status}`, urlList)
    return new Response(`submitted ${urlList.length}, status ${res.status}`)
  } catch (err) {
    console.error('IndexNow submission failed', err)
    return new Response('failed', { status: 200 })
  }
}
