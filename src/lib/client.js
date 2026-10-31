import { BACKEND_URL } from './site.js'

// Theme toggle: flips light/dark and remembers the choice on this device.
for (const btn of document.querySelectorAll('[data-theme-toggle]')) {
  btn.addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = next
    try { localStorage.setItem('nb-theme', next) } catch {}
  })
}

// Header gets a hairline once the page scrolls.
const header = document.querySelector('.site-header')
if (header) {
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 8)
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
}

// Close the mobile menu after a link inside it is used.
for (const menu of document.querySelectorAll('.site-menu')) {
  menu.addEventListener('click', (e) => {
    if (e.target.closest('a')) menu.removeAttribute('open')
  })
}

// Exclusive accordions: opening one <details name="x"> closes its siblings.
// Modern browsers do this natively from the name attribute; this covers
// the ones that don't.
for (const item of document.querySelectorAll('details[name]')) {
  item.addEventListener('toggle', () => {
    if (!item.open) return
    for (const other of document.querySelectorAll(`details[name="${item.getAttribute('name')}"]`)) {
      if (other !== item && other.open) other.removeAttribute('open')
    }
  })
}

// Waitlist forms. Any <form data-waitlist="source"> posts to the backend.
const isValidEmail = (v) => {
  const parts = v.trim().split('@')
  return parts.length === 2 && parts[0].length > 0 && parts[1].includes('.') && parts[1].length > 3
}

for (const form of document.querySelectorAll('form[data-waitlist]')) {
  const input = form.querySelector('input[type="email"]')
  const button = form.querySelector('button[type="submit"]')
  const msg = form.parentElement.querySelector('[data-waitlist-msg]')
  const idleLabel = button.innerHTML
  const say = (text, state) => {
    if (!msg) return
    msg.textContent = text
    msg.dataset.state = state
    msg.hidden = !text
  }
  input.addEventListener('input', () => say('', ''))
  form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const email = input.value.trim().toLowerCase()
    if (!isValidEmail(email)) return say('Enter a valid email address.', 'error')
    button.disabled = true
    button.setAttribute('aria-busy', 'true')
    button.textContent = 'Adding you'
    try {
      const res = await fetch(`${BACKEND_URL}/api/waitlist`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: form.dataset.waitlist }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        say(data.error || 'Something went wrong. Please try again.', 'error')
      } else {
        window.nbTrackLead?.(form.dataset.waitlist)
        form.hidden = true
        say("You're on the list. We'll email you the day it opens.", 'ok')
      }
    } catch {
      say('Could not connect. Please try again.', 'error')
    } finally {
      button.disabled = false
      button.removeAttribute('aria-busy')
      button.innerHTML = idleLabel
    }
  })
}

// Share button on articles.
for (const btn of document.querySelectorAll('[data-share]')) {
  btn.addEventListener('click', async () => {
    const url = window.location.href
    window.nbTrack?.('share', { content_type: 'article', item_id: location.pathname, method: navigator.share ? 'native' : 'copy_link' })
    if (navigator.share) {
      navigator.share({ title: document.title, url }).catch(() => {})
    } else if (navigator.clipboard) {
      await navigator.clipboard.writeText(url).catch(() => {})
      const label = btn.querySelector('span')
      if (label) {
        label.textContent = 'Link copied'
        setTimeout(() => { label.textContent = 'Share' }, 2000)
      }
    }
  })
}

// Gentle reveal on scroll, skipped for people who prefer reduced motion.
const reveal = document.querySelectorAll('.reveal')
if (reveal.length && 'IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target) }
    }
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' })
  // Only hide what is still below the fold, so nothing already on screen flickers.
  reveal.forEach((el) => {
    if (el.getBoundingClientRect().top > window.innerHeight) {
      el.classList.add('is-pending')
      io.observe(el)
    }
  })
}

// GA4: one calculator_used event per page view, on the first real interaction.
const calcName = { '/calculator/': 'milestone', '/tax-calculator/': 'tax' }[location.pathname]
if (calcName) {
  let sent = false
  const onUse = (e) => {
    if (sent || !e.target.closest('.calc__fields, .tc-left-panel')) return
    sent = true
    window.nbTrack?.('calculator_used', { calculator: calcName })
  }
  document.addEventListener('input', onUse)
  document.addEventListener('click', onUse)
}
