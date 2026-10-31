// Set hidden: true to take a question off the page (and out of the FAQ
// structured data) without deleting it.
const allFaqs = [
  {
    q: 'Who owns the investment?',
    a: "Your child. The folio is in their name from the first instalment. It isn't held for them or promised to them.",
  },
  {
    q: "Who manages it while they're a minor?",
    a: 'You do, as parent or guardian. Your KYC, your bank mandate. You can pause, increase or stop at any time.',
  },
  {
    q: 'Where is the money invested?',
    a: 'In mutual fund schemes you choose, held by the AMC and its registrar. Nuberry is a distributor, not a fund.',
  },
  {
    q: 'Can grandparents contribute?',
    a: "Yes. Grandparents can contribute directly to your child's folio without needing an account of their own.",
    hidden: true,
  },
  {
    q: 'Can I change or stop the SIP?',
    a: "Yes. You can pause, increase or stop your SIP at any time. Your investment stays in your child's name.",
  },
  {
    q: 'What happens when they turn 18?',
    a: "The folio becomes a regular account in their name after a KYC update. Nothing is transferred or gifted. They've owned it all along.",
  },
  {
    q: 'Does my child need a PAN card?',
    a: "No. Their birth certificate, your PAN and Aadhaar, and your bank account details.",
  },
  {
    q: 'Who pays tax on the returns?',
    a: "While your child is a minor, gains are added to your income and taxed at your slab. After 18, gains are taxed in their hands at their own slab, which for most young adults is lower.",
  },
]

export const homeFaqs = allFaqs.filter((f) => !f.hidden)
