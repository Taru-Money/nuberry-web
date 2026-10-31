// One place for brand, company and endpoint facts used across the site.
// Change a value here, not in a page.

export const SITE_URL = 'https://nuberry.in'
export const BRAND = 'Nuberry'
export const TAGLINE = 'Paisa bhi. Samajh bhi.'

export const COMPANY = {
  legalName: 'NextGenOS Financial Services Private Limited',
  arn: '367667',
  cin: 'U66190MH2026PTC472911',
  address: 'Malad West, Mumbai 400064, Maharashtra',
  shortAddress: 'Malad West, Mumbai 400064',
}

// Still the live inbox. Switch to an @nuberry.in address once its mailbox
// (with SPF, DKIM and DMARC) is set up, and update src/legal/*.md with it.
export const CONTACT_EMAIL = 'taru@taru.money'

// Waitlist API (the existing Render backend). Its CORS allow-list must
// include https://nuberry.in and https://www.nuberry.in, or every form fails.
export const BACKEND_URL = import.meta.env.PUBLIC_BACKEND_URL || 'https://taru-mvp-dr4o.onrender.com'

export const FOUNDER = {
  name: 'Akshay Kumar',
  role: 'Founder & CEO',
  linkedin: 'https://www.linkedin.com/in/akshaykumar91/',
  photo: '/brand/akshay-kumar.jpg',
}

// Null renders as a placeholder with no href. Fill in, never guess.
export const AMFI_REGISTRATION_URL = null
export const DISCLOSURES_URL = null
export const SOCIAL_LINKS = [
  { label: 'Instagram', icon: 'instagram', url: 'https://www.instagram.com/nuberry.in' },
  { label: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/company/nuberry-in' },
  { label: 'Facebook', icon: 'facebook', url: 'https://www.facebook.com/nuberry.in' },
]

// Ads and pixel IDs carried over from taru.money. They only load on the
// production host, so previews and local builds never fire events.
export const ANALYTICS = {
  productionHosts: ['nuberry.in', 'www.nuberry.in'],
  googleAdsId: 'AW-18172166013',
  googleAdsLeadConversion: 'AW-18172166013/aC8FCKyqn7YcEP3-lNlD',
  metaPixelId: '3145039679024176',
}

export const RISK_DISCLAIMER =
  'Mutual fund investments are subject to market risks. Read all scheme related documents carefully.'
