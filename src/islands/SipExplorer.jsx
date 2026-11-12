import { useMemo, useRef, useState } from 'react'
import data from '../data/sip18.json'

/* The 18-year SIP study, one window at a time. Every figure comes from
   src/data/sip18.json (per Rs 1,000 a month, built from the study's
   scripts) and is scaled to the amount chosen. Nothing here is projected:
   these are values that past windows actually reached. */

const COLS = Object.fromEntries(data.cols.map((c, i) => [c, i]))
const ROWS = data.rows.map((r) => Object.fromEntries(data.cols.map((c) => [c, r[COLS[c]]])))
const N = 216
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const LONG = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const YEARS = [...new Set(ROWS.map((r) => +r.start.slice(0, 4)))]
const SLABS = [0, 10, 20, 30]
const AMOUNT_MIN = 500, AMOUNT_MAX = 100000

const label = (ym) => { const [y, m] = ym.split('-'); return `${LONG[+m - 1]} ${y}` }
const inrExact = (n) => '₹' + Math.round(n).toLocaleString('en-IN')
const inr = (n) => {
  n = Math.round(n)
  if (n >= 10000000) return '₹' + (n / 10000000).toFixed(2).replace(/\.00$/, '') + ' cr'
  if (n >= 100000) return '₹' + (n / 100000).toFixed(2).replace(/\.00$/, '') + ' lakh'
  return '₹' + n.toLocaleString('en-IN')
}
const parseMoney = (v) => { const n = parseFloat(String(v).replace(/[^0-9.]/g, '')); return isNaN(n) ? 0 : n }
const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v))

const byEquity = [...ROWS].sort((a, b) => a.eq - b.eq)
const WORST = byEquity[0].start
const BEST = byEquity[byEquity.length - 1].start

export default function SipExplorer() {
  const [start, setStart] = useState('2002-04')
  const [amount, setAmount] = useState(1000)
  const [slab, setSlab] = useState(30)
  const used = useRef(false)
  const touch = () => {
    if (used.current) return
    used.current = true
    window.nbTrack?.('calculator_used', { calculator: 'sip18' })
  }

  const year = +start.slice(0, 4)
  const month = +start.slice(5, 7)
  const monthsForYear = ROWS.filter((r) => +r.start.slice(0, 4) === year).map((r) => +r.start.slice(5, 7))
  const pick = (y, m) => {
    touch()
    const options = ROWS.filter((r) => +r.start.slice(0, 4) === y).map((r) => +r.start.slice(5, 7))
    const mm = options.includes(m) ? m : options.reduce((a, b) => (Math.abs(b - m) < Math.abs(a - m) ? b : a))
    setStart(`${y}-${String(mm).padStart(2, '0')}`)
  }

  const r = useMemo(() => {
    const row = ROWS.find((x) => x.start === start)
    const k = amount / 1000
    const invested = N * amount
    const eqPre = row.eq * k
    const eq = eqPre - 0.125 * Math.max(0, eqPre - invested - 125000)
    const ppf = row.ppf * k
    const fd = row[`fd${slab}`] * k
    const real = row.cr * k // contributions restated in the money of the value month
    const options = [
      { key: 'eq', name: 'Nifty 50 SIP', note: 'after 1% yearly cost and tax at withdrawal', value: eq },
      { key: 'ppf', name: 'PPF', note: 'tax-free', value: ppf },
      { key: 'fd', name: 'Fixed deposit', note: slab ? `after tax at ${slab}%` : 'before tax', value: fd },
    ]
    const max = Math.max(...options.map((o) => o.value))
    const rank = byEquity.findIndex((x) => x.start === start) + 1
    return { row, invested, real, options, max, rank }
  }, [start, amount, slab])

  return (
    <div className="sipx">
      <div className="sipx__fields">
        <div className="ask">
          <span className="ask__n">1</span>
          <div className="ask__body">
            <span className="ask__q" id="sipx-when">When did the SIP start?</span>
            <div className="sipx__when" role="group" aria-labelledby="sipx-when">
              <label className="nb-sr" htmlFor="sipx-month">Month</label>
              <select id="sipx-month" className="nb-input" value={month} onChange={(e) => pick(year, +e.target.value)}>
                {monthsForYear.map((m) => <option key={m} value={m}>{LONG[m - 1]}</option>)}
              </select>
              <label className="nb-sr" htmlFor="sipx-year">Year</label>
              <select id="sipx-year" className="nb-input" value={year} onChange={(e) => pick(+e.target.value, month)}>
                {YEARS.map((y) => <option key={y} value={y}>{y}</option>)}
              </select>
            </div>
            <div className="sipx__jump">
              <button type="button" className="nb-btn nb-btn--text" onClick={() => { touch(); setStart(BEST) }}>Luckiest month</button>
              <button type="button" className="nb-btn nb-btn--text" onClick={() => { touch(); setStart(WORST) }}>Unluckiest month</button>
            </div>
          </div>
        </div>

        <div className="ask">
          <span className="ask__n">2</span>
          <div className="ask__body">
            <div className="ask__top">
              <label className="ask__q" htmlFor="sipx-amount">Invested every month</label>
              <span className="value-box"><span>₹</span>
                <input id="sipx-amount" type="text" inputMode="numeric" value={amount.toLocaleString('en-IN')}
                  onChange={(e) => { touch(); setAmount(parseMoney(e.target.value)) }}
                  onBlur={() => setAmount((v) => clamp(v || AMOUNT_MIN, AMOUNT_MIN, AMOUNT_MAX))} />
              </span>
            </div>
            <p className="sipx__hint">Between ₹500 and ₹1 lakh. Figures scale with the amount; tax does not, so it changes a little.</p>
          </div>
        </div>

        <div className="ask">
          <span className="ask__n">3</span>
          <div className="ask__body">
            <span className="ask__q" id="sipx-slab">Parent's tax slab on FD interest</span>
            <div className="seg" role="group" aria-labelledby="sipx-slab">
              {SLABS.map((s) => (
                <button type="button" key={s} aria-pressed={slab === s} onClick={() => { touch(); setSlab(s) }}>{s}%</button>
              ))}
            </div>
            <p className="sipx__hint">Interest on an FD in a child's name is added to a parent's income, so the parent's slab applies.</p>
          </div>
        </div>
      </div>

      <div className="sipx__result" aria-live="polite">
        <span className="sipx__label">Started {label(start)}, valued {label(r.row.end)}</span>
        <p className="sipx__sub">
          {inrExact(amount)} a month for 18 years: {inrExact(r.invested)} put in. Prices rose over those years, so in{' '}
          {label(r.row.end)} money that was worth <b>{inr(r.real)}</b>. That is the figure to beat.
        </p>
        <ul className="sipx__bars">
          {r.options.map((o) => (
            <li key={o.key} className={`sipx__bar sipx__bar--${o.key}`}>
              <div className="sipx__bar-top">
                <span><b>{o.name}</b> <small>{o.note}</small></span>
                <b className="sipx__val">{inr(o.value)}</b>
              </div>
              <span className="sipx__track"><i style={{ width: `${(o.value / r.max) * 100}%` }} /></span>
              <small className="sipx__real">
                {o.value >= r.real
                  ? `After inflation: ${(o.value / r.real).toFixed(2)} times what was put in`
                  : `After inflation: ${Math.round((1 - o.value / r.real) * 100)}% less than was put in`}
              </small>
            </li>
          ))}
        </ul>
        <p className="sipx__foot">
          Amounts are in rupees of {label(r.row.end)}, not adjusted for inflation.
          {r.rank === 1
            ? ` For the Nifty 50 SIP, this was the lowest of all ${ROWS.length} start months.`
            : r.rank === ROWS.length
              ? ` For the Nifty 50 SIP, this was the highest of all ${ROWS.length} start months.`
              : ` For the Nifty 50 SIP, this start month did better than ${r.rank - 1} of the other ${ROWS.length - 1}.`}
        </p>
      </div>
    </div>
  )
}
