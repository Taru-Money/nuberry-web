// Netlify calls this after every successful deploy. On production deploys it
// submits the pages that scripts/indexnow-diff.mjs found new or changed to
// IndexNow. Every path logs one line, so the function log always says what
// happened. Any failure is logged and ignored: it must never affect the site.
import { INDEXNOW_KEY, INDEXNOW_SITE, INDEXNOW_LIST } from '../../scripts/indexnow-key.mjs'

export default async (req) => {
  try {
    const body = await req.json()
    const deploy = body?.payload ?? body?.deploy ?? {}
    const context = deploy.context ?? deploy.deploy?.context
    if (context !== 'production') {
      console.log(`IndexNow: skipped, deploy context is "${context}"`)
      return new Response('skipped')
    }

    const listRes = await fetch(INDEXNOW_SITE + INDEXNOW_LIST, { cache: 'no-store' })
    const urlList = listRes.ok ? await listRes.json() : []
    if (!urlList.length) {
      console.log(`IndexNow: nothing to submit (list status ${listRes.status})`)
      return new Response('nothing to submit')
    }

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
    const detail = res.ok ? '' : ` ${(await res.text()).slice(0, 300)}`
    console.log(`IndexNow: submitted ${urlList.length} URL(s), status ${res.status}${detail}`, urlList)
    return new Response(`submitted ${urlList.length}, status ${res.status}`)
  } catch (err) {
    console.error('IndexNow: submission failed', err)
    return new Response('failed', { status: 200 })
  }
}
