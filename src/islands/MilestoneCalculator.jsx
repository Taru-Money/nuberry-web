import { useMemo, useState } from 'react'
import { BACKEND_URL } from '../lib/site.js'
import { Icon } from './icons.jsx'

/* Math carried over unchanged from taru.money's /calculator. Monthly
   compounding, contribution at the start of each month, step-up applied once
   every twelve months (annuity-due). */
function futureValue(monthly, years, ratePct, stepUpPct) {
  const r = ratePct / 100 / 12
  let total = 0
  let amt = monthly
  const n = Math.round(years * 12)
  for (let i = 0; i < n; i++) {
    if (i > 0 && i % 12 === 0) amt *= 1 + (stepUpPct || 0) / 100
    total = (total + amt) * (1 + r)
  }
  return total
}

function totalInvested(monthly, years, stepUpPct) {
  let total = 0
  let amt = monthly
  const n = Math.round(years * 12)
  for (let i = 0; i < n; i++) {
    if (i > 0 && i % 12 === 0) amt *= 1 + (stepUpPct || 0) / 100
    total += amt
  }
  return total
}

// Monthly SIP needed to reach `target`: bisection, robust with step-up.
function solveSip(target, years, ratePct, stepUpPct) {
  if (years <= 0) return 0
  let lo = 0
  let hi = target
  for (let i = 0; i < 80; i++) {
    const mid = (lo + hi) / 2
    if (futureValue(mid, years, ratePct, stepUpPct) < target) lo = mid
    else hi = mid
  }
  return hi
}

function inr(n) {
  n = Math.round(n)
  if (n >= 10000000) return '₹' + (n / 10000000).toFixed(2).replace(/\.00$/, '') + ' cr'
  if (n >= 100000) return '₹' + (n / 100000).toFixed(2).replace(/\.00$/, '') + ' lakh'
  return '₹' + n.toLocaleString('en-IN')
}
const inrExact = (n) => '₹' + Math.round(n).toLocaleString('en-IN')
const parseMoney = (v) => {
  const n = parseFloat(String(v).replace(/[^0-9.]/g, ''))
  return isNaN(n) ? 0 : n
}
const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v))
const isValidEmail = (value) => {
  const parts = value.trim().split('@')
  return parts.length === 2 && parts[0].length > 0 && parts[1].includes('.') && parts[1].length > 3
}
const fill = (v, lo, hi) => `${((clamp(v, lo, hi) - lo) / (hi - lo)) * 100}%`

const AGE_MIN = 0, AGE_MAX = 17
const AMOUNT_MIN = 500, AMOUNT_MAX = 200000
const TARGET_MIN = 100000, TARGET_MAX = 200000000
const TARGET_SLIDER_MIN = 100000, TARGET_SLIDER_MAX = 10000000
const RETURN_MIN = 4, RETURN_MAX = 18
const STEPUP_MIN = 0, STEPUP_MAX = 20

function Range({ min, max, step, value, onChange, label }) {
  return (
    <input
      type="range" className="calc-range" min={min} max={max} step={step}
      value={clamp(value, min, max)} onChange={(e) => onChange(Number(e.target.value))}
      aria-label={label} style={{ '--fill': fill(value, min, max) }}
    />
  )
}

export default function MilestoneCalculator() {
  const [mode, setMode] = useState('fv')
  const [age, setAge] = useState(4)
  const [amount, setAmount] = useState(5000)
  const [target, setTarget] = useState(2500000)
  const [returnRate, setReturnRate] = useState(12)
  const [stepUpPct, setStepUpPct] = useState(0)

  const [email, setEmail] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formError, setFormError] = useState('')

  const years = 18 - age
  const months = Math.round(years * 12)

  const result = useMemo(() => {
    if (mode === 'fv') {
      const value = futureValue(amount, years, returnRate, stepUpPct)
      const invested = totalInvested(amount, years, stepUpPct)
      return {
        label: 'Value when they turn 18',
        big: inr(value),
        sub: inrExact(amount) + ' a month for ' + years + (years === 1 ? ' year' : ' years') +
          (stepUpPct ? ', rising ' + stepUpPct + '% a year' : ''),
        invested,
        gains: Math.max(0, value - invested),
      }
    }
    const need = solveSip(target, years, returnRate, stepUpPct)
    const invested = totalInvested(need, years, stepUpPct)
    return {
      label: 'You need to invest',
      big: years > 0 ? inrExact(Math.ceil(need / 100) * 100) + ' a month' : 'Not applicable',
      sub: years > 0 ? 'to reach ' + inr(target) + ' by the time they turn 18' : 'Your child is already 18.',
      invested,
      gains: Math.max(0, target - invested),
    }
  }, [mode, amount, target, years, returnRate, stepUpPct])

  const delay = useMemo(() => {
    const base = mode === 'fv' ? amount : solveSip(target, years, returnRate, stepUpPct)
    const goal = mode === 'fv' ? futureValue(base, years, returnRate, stepUpPct) : target
    const rows = []
    for (const d of [2, 5]) {
      const y = years - d
      if (y <= 0) continue
      const need = solveSip(goal, y, returnRate, stepUpPct)
      rows.push({ inYears: d, atAge: age + d, need: Math.ceil(need / 100) * 100, extra: Math.ceil((need - base) / 100) * 100 })
    }
    return { rows, goal }
  }, [mode, amount, target, years, age, returnRate, stepUpPct])

  async function handleSubmit(e) {
    e.preventDefault()
    const trimmed = email.trim().toLowerCase()
    if (!isValidEmail(trimmed)) return setFormError('Enter a valid email address.')
    setSubmitting(true)
    setFormError('')
    try {
      const res = await fetch(`${BACKEND_URL}/api/waitlist`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: trimmed, source: 'calculator' }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        setFormError(data.error || 'Something went wrong. Please try again.')
      } else {
        window.nbTrackLead?.('calculator')
        setSubmitted(true)
        setEmail('')
      }
    } catch {
      setFormError('Could not connect. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="calc">
      <div className="calc__fields">
        <div className="ask">
          <span className="ask__n">1</span>
          <div className="ask__body">
            <h2 className="ask__q">What do you want to work out?</h2>
            <div className="seg" role="group" aria-label="Choose what to calculate">
              <button type="button" aria-pressed={mode === 'fv'} onClick={() => setMode('fv')}>What will it be worth?</button>
              <button type="button" aria-pressed={mode === 'sip'} onClick={() => setMode('sip')}>How much should I invest?</button>
            </div>
          </div>
        </div>

        <div className="ask">
          <span className="ask__n">2</span>
          <div className="ask__body">
            <div className="ask__top">
              <label className="ask__q" htmlFor="m-age">How old is your child?</label>
              <span className="value-box"><input id="m-age" type="number" min={AGE_MIN} max={AGE_MAX} step={1} value={age} onChange={(e) => setAge(clamp(Number(e.target.value), AGE_MIN, AGE_MAX))} /><span>yrs</span></span>
            </div>
            <Range min={AGE_MIN} max={AGE_MAX} step={1} value={age} onChange={setAge} label="Child's age" />
            <div className="scale"><span>Newborn</span><span>{years > 0 ? `${years} year${years === 1 ? '' : 's'} to invest` : 'Already 18'}</span><span>17</span></div>
          </div>
        </div>

        {mode === 'fv' ? (
          <div className="ask">
            <span className="ask__n">3</span>
            <div className="ask__body">
              <div className="ask__top">
                <label className="ask__q" htmlFor="m-amount">How much can you invest a month?</label>
                <span className="value-box"><span>₹</span><input id="m-amount" type="text" inputMode="numeric" value={amount.toLocaleString('en-IN')} onChange={(e) => setAmount(parseMoney(e.target.value))} onBlur={() => setAmount((v) => clamp(v, AMOUNT_MIN, AMOUNT_MAX))} /></span>
              </div>
              <Range min={AMOUNT_MIN} max={AMOUNT_MAX} step={500} value={amount} onChange={setAmount} label="Monthly investment" />
              <div className="scale"><span>₹500</span><span></span><span>₹2 lakh</span></div>
            </div>
          </div>
        ) : (
          <div className="ask">
            <span className="ask__n">3</span>
            <div className="ask__body">
              <div className="ask__top">
                <label className="ask__q" htmlFor="m-target">How much should they have at 18?</label>
                <span className="value-box"><span>₹</span><input id="m-target" type="text" inputMode="numeric" value={target.toLocaleString('en-IN')} onChange={(e) => setTarget(parseMoney(e.target.value))} onBlur={() => setTarget((v) => clamp(v, TARGET_MIN, TARGET_MAX))} /></span>
              </div>
              <Range min={TARGET_SLIDER_MIN} max={TARGET_SLIDER_MAX} step={100000} value={Math.min(target, TARGET_SLIDER_MAX)} onChange={setTarget} label="Target amount" />
              <div className="scale"><span>₹1 lakh</span><span>{inr(target)}</span><span>₹1 crore</span></div>
            </div>
          </div>
        )}

        <div className="ask">
          <span className="ask__n">4</span>
          <div className="ask__body">
            <div className="ask__top">
              <label className="ask__q" htmlFor="m-return">Assuming returns of</label>
              <span className="value-box"><input id="m-return" type="number" min={RETURN_MIN} max={RETURN_MAX} step={0.5} value={returnRate} onChange={(e) => setReturnRate(clamp(Number(e.target.value), RETURN_MIN, RETURN_MAX))} /><span>% a year</span></span>
            </div>
            <Range min={RETURN_MIN} max={RETURN_MAX} step={0.5} value={returnRate} onChange={setReturnRate} label="Assumed return" />
            <div className="scale"><span>4%</span><span>An assumption, not a promise</span><span>18%</span></div>
          </div>
        </div>

        <div className="ask">
          <span className="ask__n">5</span>
          <div className="ask__body">
            <div className="ask__top">
              <label className="ask__q" htmlFor="m-stepup">Raising it each year by</label>
              <span className="value-box"><input id="m-stepup" type="number" min={STEPUP_MIN} max={STEPUP_MAX} step={1} value={stepUpPct} onChange={(e) => setStepUpPct(clamp(Number(e.target.value), STEPUP_MIN, STEPUP_MAX))} /><span>%</span></span>
            </div>
            <Range min={STEPUP_MIN} max={STEPUP_MAX} step={1} value={stepUpPct} onChange={setStepUpPct} label="Annual increase" />
            <div className="scale"><span>Leave at 0 if unsure</span><span></span><span>20%</span></div>
          </div>
        </div>
      </div>

      <div className="calc__result" aria-live="polite">
        <span className="calc__label">{result.label}</span>
        <div className="calc__big">{result.big}</div>
        <p className="calc__sub">{result.sub}</p>
        <dl className="calc__stats">
          <div><dt>You invest</dt><dd>{inrExact(result.invested)}</dd></div>
          <div><dt>Gains at the assumed rate</dt><dd>{inrExact(result.gains)}</dd></div>
          <div><dt>Months of investing</dt><dd>{months}</dd></div>
        </dl>
        <div className="delay">
          <span className="delay__head">{delay.rows.length ? `To still reach ${inr(delay.goal)}, starting later` : 'If you start later instead'}</span>
          {delay.rows.length ? delay.rows.map((row) => (
            <div className="delay__row" key={row.inYears}>
              <span>Start in {row.inYears} years<small>when they're {row.atAge}</small></span>
              <span className="delay__vals"><b>{inrExact(row.need)} a month</b><small>{inrExact(row.extra)} more a month</small></span>
            </div>
          )) : (
            <div className="delay__row"><span>Not enough years left to compare</span></div>
          )}
        </div>
        <div className="calc__cta">
          {submitted ? (
            <p className="calc__msg" role="status">You're on the list. We'll email you the day it opens.</p>
          ) : (
            <form className="calc__form" onSubmit={handleSubmit} noValidate>
              <label className="nb-sr" htmlFor="m-email">Email address</label>
              <input id="m-email" className="nb-input" type="email" placeholder="Email me when Nuberry opens" autoComplete="email" value={email} onChange={(e) => { setEmail(e.target.value); setFormError('') }} disabled={submitting} />
              <button type="submit" className="nb-btn nb-btn--action" aria-label="Join the waitlist" disabled={submitting} aria-busy={submitting || undefined}><Icon name="arrow-right" /></button>
            </form>
          )}
          {formError && <p className="calc__msg" role="status">{formError}</p>}
        </div>
      </div>
    </div>
  )
}
