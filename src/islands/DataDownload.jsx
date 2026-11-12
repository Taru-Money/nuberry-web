import { useState } from 'react'
import { BACKEND_URL } from '../lib/site.js'

/* Email box for the study's data files. Posts { email, source } to the same
   waitlist API as every other form; source "data:<study>" marks it as a data
   request. The files sit in /public, so this is a light gate for people who
   want them, not access control. */

const isValidEmail = (v) => {
  const parts = v.trim().split('@')
  return parts.length === 2 && parts[0].length > 0 && parts[1].includes('.') && parts[1].length > 3
}

export default function DataDownload({ source, files, privacyPath }) {
  const [email, setEmail] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    const trimmed = email.trim().toLowerCase()
    if (!isValidEmail(trimmed)) return setError('Enter a valid email address.')
    setSubmitting(true)
    setError('')
    try {
      const res = await fetch(`${BACKEND_URL}/api/waitlist`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: trimmed, source }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) setError(data.error || 'Something went wrong. Please try again.')
      else {
        window.nbTrackLead?.(source)
        setDone(true)
      }
    } catch {
      setError('Could not connect. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  if (done) {
    return (
      <div className="data-dl data-dl--open">
        <p className="data-dl__msg" role="status">Thanks. The files are below, free to use with credit to Nuberry and a link to this page.</p>
        <ul className="data-dl__files">
          {files.map((f) => (
            <li key={f.path}>
              <a href={f.path} download>{f.label}</a>
              <small>{f.note}</small>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  return (
    <div className="data-dl">
      <form className="waitlist__form" onSubmit={handleSubmit} noValidate>
        <label className="nb-sr" htmlFor="data-dl-email">Email address</label>
        <input className="nb-input" id="data-dl-email" type="email" name="email" autoComplete="email" placeholder="you@example.com"
          value={email} onChange={(e) => { setEmail(e.target.value); setError('') }} disabled={submitting} />
        <button type="submit" className="nb-btn nb-btn--primary" disabled={submitting} aria-busy={submitting || undefined}>
          {submitting ? 'Getting the files' : 'Get the data'}
        </button>
      </form>
      {error && <p className="waitlist__msg" role="status" aria-live="polite" data-state="error">{error}</p>}
      <p className="data-dl__consent">
        We'll also email you when Nuberry opens, and now and then about new research. Unsubscribe any time.
        See our <a href={privacyPath}>privacy policy</a>.
      </p>
    </div>
  )
}
