// The waitlist email box for React islands (both calculators). Same markup
// and classes as src/components/WaitlistForm.astro, so it looks identical.
// onBrand: on a raspberry surface the button is jamun (nb-btn--action).
import { useState } from 'react'
import { BACKEND_URL } from '../lib/site.js'

const isValidEmail = (v) => {
  const parts = v.trim().split('@')
  return parts.length === 2 && parts[0].length > 0 && parts[1].includes('.') && parts[1].length > 3
}

export function WaitlistInline({ source, id, onBrand = false }) {
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

  return (
    <div className={onBrand ? 'waitlist waitlist--on-brand' : 'waitlist'}>
      {!done && (
        <form className="waitlist__form" onSubmit={handleSubmit} noValidate>
          <label className="nb-sr" htmlFor={id}>Email address</label>
          <input className="nb-input" id={id} type="email" name="email" autoComplete="email" placeholder="you@example.com"
            value={email} onChange={(e) => { setEmail(e.target.value); setError('') }} disabled={submitting} />
          <button type="submit" className={`nb-btn ${onBrand ? 'nb-btn--action' : 'nb-btn--primary'}`} disabled={submitting} aria-busy={submitting || undefined}>
            {submitting ? 'Adding you' : 'Join the waitlist'}
          </button>
        </form>
      )}
      {(done || error) && (
        <p className="waitlist__msg" role="status" aria-live="polite" data-state={done ? 'ok' : 'error'}>
          {done ? "You're on the list. We'll email you the day it opens." : error}
        </p>
      )}
    </div>
  )
}
