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

// Public contact inbox shown in the footer and on the editorial policy.
// The privacy policy's grievance contact uses the same inbox.
export const CONTACT_EMAIL = 'akshay@nuberry.in'

// Waitlist API (the existing Render backend). Its CORS allow-list must
// include https://nuberry.in and https://www.nuberry.in, or every form fails.
export const BACKEND_URL = import.meta.env.PUBLIC_BACKEND_URL || 'https://taru-mvp-dr4o.onrender.com'

export const FOUNDER = {
  name: 'Akshay Kumar',
  role: 'Founder & CEO',
  linkedin: 'https://www.linkedin.com/in/akshaykumar91/',
  photo: '/brand/akshay-kumar.jpg',
  // Author page. Every article is written by the founder, so this is the byline.
  path: '/author/akshay-kumar/',
  // Past employers shown on the author page and in Person schema. Keep to
  // what is on his LinkedIn.
  experience: ['HDFC', 'IndusInd', 'InCred', 'Tyke'],
}

// Stable JSON-LD ids, so every page points at the same entities.
export const ORG_ID = `${SITE_URL}/#organization`
export const PERSON_ID = `${SITE_URL}${FOUNDER.path}#person`

export const EDITORIAL_POLICY_PATH = '/editorial-policy/'

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
  metaPixelId: '1139801311872507',
  // GA4 web stream for nuberry.in, e.g. 'G-ABC123XYZ'. Null skips GA4 entirely.
  ga4Id: 'G-T88DBB4RPH',
}

export const RISK_DISCLAIMER =
  'Mutual fund investments are subject to market risks. Read all scheme related documents carefully.'
