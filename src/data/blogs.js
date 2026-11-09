export const blogs = [
  {
    id: 9,
    slug: 'tax-on-investments-in-childs-name-clubbing',
    datePublished: '2026-11-06T12:00:00+05:30',
    title: "Tax on investments in your child's name: clubbing explained",
    seoTitle: "Tax on your child's investments: clubbing explained | Nuberry",
    subtitle: "Why a folio in your child's name saves no tax before 18, what changes after, and how the gains are reported. Checked against the Income-tax Act, 2025 as of November 2026.",
    topic: 'Tax',
    readingTime: '8 min',
    metaDescription: "How clubbing of a minor's income works under Section 99 of the Income-tax Act, 2025: whose return it goes in, the ₹1,500 exemption, and what changes at 18.",
    waitlist: {
      title: 'Building their corpus in their name?',
      text: "Nuberry opens a minor folio in your child's name and runs the SIP for you, and gives your child their own view of it. Join the waitlist and we'll tell you the day it opens.",
    },
    body: [
      // AKSHAY: rewrite these two paragraphs in your own voice.
      { type: 'paragraph', text: "Investing in your child's name saves no tax while they are a minor. Under Section 99 of the Income-tax Act, 2025, any income from their investments, including mutual fund gains and dividends, is added to the income of the parent who earns more and taxed as that parent's own, after a ₹1,500 a year exemption per child." },
      { type: 'paragraph', text: "The tax difference starts at 18. Gains your child takes after that are their own income, with their own basic exemption and their own ₹1.25 lakh a year exemption on equity gains. This page explains how clubbing works, runs one gain through both sides of the 18th birthday, and covers the cases parents ask about most: gifts, dividends, and the year they turn 18." },
      {
        type: 'key_facts', title: 'Key facts',
        items: [
          "**The rule:** all income of a minor child is clubbed with a parent's income ([Section 99, Income-tax Act, 2025](https://www.incometaxindia.gov.in/w/section-99-63), earlier Section 64(1A)).",
          '**Which parent:** the one whose total income is higher before clubbing. If the parents are separated or divorced, the parent who maintains the child.',
          '**Exemption:** ₹1,500 a year per child, under Schedule II read with Section 11 (earlier Section 10(32)).',
          "**Not clubbed:** income from the child's own work, skill or talent, and all income of a child with a disability specified in Section 154 (earlier 80U).",
          '**Tax rates:** clubbed income keeps its character. Equity fund gains are taxed at 20% or 12.5%, not at your slab, but share your single ₹1.25 lakh equity exemption.',
          "**From 18:** gains are taxed in your child's name. Money you give an adult child is not clubbed back with yours.",
        ],
      },

      { type: 'heading', text: 'What is clubbing of income?' },
      { type: 'paragraph', text: "Clubbing means adding someone else's income to yours for tax. The Income-tax Act does this in a few situations where income could otherwise be shifted to a family member with a lower tax bill. A minor child is the widest of them: almost everything a child under 18 earns is treated as a parent's income." },
      { type: 'paragraph', text: "It doesn't matter where the money came from. Your savings, a grandparent's gift, cash from a naming ceremony: once it is invested in your child's name, the income it produces is clubbed. The child still owns the investment. Only the tax on its income moves to you." },

      { type: 'heading', text: "Whose income is your child's income added to?" },
      { type: 'paragraph', text: 'Section 99 sets the order, and there is no choice in it.' },
      { type: 'table', text: true, headers: ['Situation', "Child's income is added to"], rows: [
        ['Parents married', 'The parent whose total income, before adding the child\'s, is higher'],
        ['Parents separated or divorced', 'The parent who maintains the child during the year'],
        ['In later years', 'The same parent, unless the assessing officer decides otherwise after hearing the other parent'],
      ], caption: 'Source: Section 99(5)(b), Income-tax Act, 2025.' },
      { type: 'paragraph', text: "So if one parent earns ₹18 lakh and the other ₹9 lakh, the child's income goes into the ₹18 lakh parent's return, whoever opened the folio and whoever pays the SIP." },

      { type: 'heading', text: "What isn't clubbed?" },
      { type: 'bullet_list', items: [
        "**₹1,500 a year per child.** That much of each child's clubbed income is exempt. On a mutual fund it covers very little.",
        "**Income from the child's own work or talent.** Money a child earns acting, modelling, performing, coding or from a skill they apply is taxed as their own, in their name.",
        '**A child with a specified disability.** If the child has a disability of the kind listed in Section 154 (earlier 80U), none of their income is clubbed.',
      ]},
      { type: 'paragraph', text: "Investment income from money you or anyone else gave the child doesn't fall under any of these. That is the case for almost every minor folio." },

      { type: 'heading', text: 'How are clubbed mutual fund gains taxed?' },
      { type: 'paragraph', text: "Clubbed income keeps the character it had in the child's hands. A common mistake is to assume it all gets added to your salary and taxed at your slab. For equity funds it doesn't." },
      { type: 'table', text: true, headers: ['Income in the child\'s folio', 'How it is taxed in your return'], rows: [
        ['Equity fund units held 12 months or less', '20% (Section 196, earlier 111A)'],
        ['Equity fund units held longer than 12 months', '12.5% on gains above ₹1.25 lakh a year (Section 198, earlier 112A). The ₹1.25 lakh is shared with your own equity gains'],
        ['Debt fund units bought on or after 1 April 2023', 'Your slab rate, however long they were held'],
        ['Dividends (IDCW option)', 'Your slab rate, in the year they are paid'],
      ], caption: 'Rates for tax year 2026-27, before surcharge and 4% cess. Tax rules change; confirm with a tax professional before acting.' },
      { type: 'paragraph', text: "The cost of clubbing on equity funds isn't a higher rate. It's the exemption. You get one ₹1.25 lakh a year for equity gains, and your child's clubbed gains use it up alongside your own. Most parents with a long-running SIP never redeem before 18, so the bigger day-to-day exposure is dividends: a fund on the IDCW option pays out every year, and every payout is clubbed at your slab. The growth option pays nothing out until you redeem." },

      { type: 'heading', text: 'What does clubbing cost on a real gain?' },
      { type: 'paragraph', text: "Take one gain and move it across the 18th birthday. Your child's equity fund has ₹2 lakh of long-term gains. The higher-earning parent earns ₹18 lakh and has ₹50,000 of their own equity gains in the same year." },
      { type: 'table', headers: ['', 'Redeemed at 14 (clubbed)', 'Redeemed after 18 (child\'s own)'], rows: [
        ['Equity gain from the child\'s folio', '₹2,00,000', '₹2,00,000'],
        ['Less: ₹1,500 minor exemption', '₹1,500', 'Not applicable'],
        ['Equity gains in the return it lands in', '₹2,48,500 (with the parent\'s ₹50,000)', '₹2,00,000'],
        ['Less: ₹1.25 lakh equity exemption', '₹1,25,000 (one, shared)', '₹1,25,000 (the child\'s own)'],
        ['Less: unused basic exemption', 'None (the parent\'s salary uses it)', '₹75,000 (the child has no other income)'],
        ['Taxable at 12.5%', '₹1,23,500', '₹0'],
        ['Tax before cess', '₹15,438', '₹0'],
      ], caption: 'Tax year 2026-27, new tax regime. The same gain, taken on either side of the 18th birthday.' },
      { type: 'assume', title: 'How these are worked out', text: "Equity fund units held longer than 12 months, taxed at 12.5% on gains above ₹1.25 lakh under Section 198. A resident with income below the basic exemption limit (₹4 lakh under the new regime) can set the unused part against these gains, which is why the adult child pays nothing here. The ₹1,500 exemption is applied to the child's clubbed income. Cess of 4% is left out. Figures are illustrative; your own position depends on your income and your other gains." },
      { type: 'paragraph', text: "Before 18, the gain pays ₹15,438. After 18, with no other income, the same gain pays nothing. That gap is the whole tax argument for investing in a child's name, and it only appears if you leave the money alone until they are adults." },
      { type: 'paragraph', text: "It gets bigger with time. An adult child with little other income can take up to ₹5.25 lakh of long-term equity gains a year without tax (₹1.25 lakh exemption plus ₹4 lakh of unused basic exemption), so a large corpus withdrawn over a few years after 18 can pay very little. Try your own numbers in the [tax calculator](/tax-calculator/), which assumes the whole corpus is redeemed after 18." },

      { type: 'heading', text: 'What happens in the year your child turns 18?' },
      { type: 'paragraph', text: "Clubbing covers income of a minor. Income that arises before the 18th birthday is clubbed with the parent's; income that arises after it is the child's own, even in the same tax year. For a mutual fund, the gain arises when units are redeemed, so the date of the redemption decides whose return it goes in, not the date the units were bought." },
      { type: 'paragraph', text: "Two practical points. First, the folio is frozen from the 18th birthday until its status is changed from minor to major, so a redemption after 18 has to wait for that change. Second, your child now files their own return if their income needs one, and needs a PAN and their own KYC anyway for the status change. More on that day in [The day your child turns 18](/blog/the-day-your-child-turns-18/)." },
      { type: 'paragraph', text: 'Money you give your child after they turn 18 is not clubbed back with your income. Gifts from parents and other relatives are not taxed as income in the hands of the person receiving them, and the clubbing rule for children only applies to minors.' },

      { type: 'heading', text: 'How do you report clubbed income?' },
      { type: 'step', number: 1, title: "Work out the child's income for the year", text: "Gains on any redemptions or switches, and any dividends. Your fund house's capital gains statement, issued in the child's name, has the figures." },
      { type: 'step', number: 2, title: 'Decide which parent it goes to', text: 'The parent with the higher total income before clubbing, and the same parent in later years. Do this once and keep it consistent.' },
      { type: 'step', number: 3, title: 'Report it in that parent\'s return', text: "Show it under the schedule for income of specified persons (Schedule SPI in recent ITR forms), and include the capital gains in the capital gains schedule. Capital gains mean an ITR form that allows them, not ITR-1. Claim the ₹1,500 exemption per child." },
      { type: 'step', number: 4, title: 'Keep the records', text: "Keep the capital gains statements and contract notes in the child's name. Your child will need the cost history when they redeem as an adult." },
      { type: 'paragraph', text: 'Return forms for tax years under the Income-tax Act, 2025 may label these schedules differently. Check the current form, or ask a tax professional, before you file.' },

      // AKSHAY: this section is where your own view goes. Rewrite it in your voice.
      { type: 'heading', text: 'What most guides get wrong' },
      { type: 'subheading', text: "\"Invest in your child's name to save tax\"" },
      { type: 'paragraph', text: "Not before 18. Every rupee of income is clubbed back into your return, minus ₹1,500. The saving is real, but it belongs to the years after 18, and only if the money is still invested then. If you plan to redeem for school fees at 15, there is no tax reason to hold it in the child's name." },
      { type: 'subheading', text: '"Clubbed income is taxed at your slab"' },
      { type: 'paragraph', text: "Only some of it. Dividends and post-2023 debt fund gains are. Equity fund gains keep their own rates, 20% and 12.5%. The real cost on equity is that your child's gains share your one ₹1.25 lakh exemption." },
      { type: 'subheading', text: '"Money from grandparents isn\'t clubbed"' },
      { type: 'paragraph', text: "It is. Clubbing follows the child, not the source of the money. A gift from a grandparent isn't taxed when it is given, but the income it earns in the child's name is added to a parent's return like any other." },

      { type: 'heading', text: 'Frequently asked questions' },
      { type: 'faq', items: [
        { q: "Is my child's mutual fund income clubbed with mine?", a: "Yes, while your child is under 18. Under Section 99 of the Income-tax Act, 2025, it is added to the income of the parent whose total income is higher, after a ₹1,500 a year exemption per child. Income from the child's own work or talent, and the income of a child with a specified disability, is not clubbed." },
        { q: "Does investing in my child's name save tax?", a: "Not while they are a minor, because their income is clubbed with yours. It can after 18, when gains are taxed in your child's name with their own basic exemption and their own ₹1.25 lakh a year exemption on equity gains." },
        { q: 'Is clubbed income taxed at my slab rate?', a: 'Dividends and gains on debt funds bought from April 2023 are. Equity fund gains keep their capital gains rates: 20% if held 12 months or less, 12.5% above ₹1.25 lakh a year if held longer. That ₹1.25 lakh is shared with your own equity gains.' },
        { q: 'What is the ₹1,500 exemption for a minor child?', a: "Up to ₹1,500 of each child's clubbed income a year is exempt, under Schedule II read with Section 11 of the Income-tax Act, 2025 (earlier Section 10(32)). It is claimed by the parent whose return the income goes in." },
        { q: "What happens to clubbing when my child turns 18?", a: "It stops for income that arises after their 18th birthday, even in the same tax year. A mutual fund gain arises when units are redeemed, so units bought while they were a minor and redeemed after 18 are taxed in your child's name." },
        { q: 'Are gifts to my child taxed?', a: "Money from parents and other relatives is not taxed as income when it is received. But once it is invested in a minor's name, the income it earns is clubbed with a parent's income until the child turns 18." },
      ]},
      { type: 'paragraph', text: 'For the rest of the picture (documents, bank accounts, fund types and the 18th birthday), read [Mutual funds for your child: the complete guide](/blog/mutual-funds-for-your-child/).' },

      { type: 'heading', text: 'Sources' },
      { type: 'sources', items: [
        { label: 'Income Tax Department: Section 99, Income-tax Act, 2025 (clubbing, including a minor child\'s income)', url: 'https://www.incometaxindia.gov.in/w/section-99-63' },
        { label: 'Clubbing of income under the Income-tax Act, 2025 (Sections 97 to 101), with the old-to-new section map', url: 'https://drspv.in/knowledge-bank/income-tax/ch-17-clubbing-income-sec60-65/' },
        { label: 'Sections 196 and 198, Income-tax Act, 2025: short and long-term capital gains on equity', url: 'https://ebizfiling.com/blog/section-196-and-198-short-term-and-long-term-capital-gains/' },
        { label: 'ClearTax: Section 156 rebate and special-rate income', url: 'https://cleartax.in/s/section-156-income-tax-act-2025' },
        { label: 'ICICI Prudential Mutual Fund: Tax reckoner 2025-26 (specified mutual funds and equity rates)', url: 'https://www.icicipruamc.com/blob/knowledgecentre/tax_reckoner/Tax_Reckoner_2025_26.pdf' },
      ]},
    ],
  },
  {
    id: 7,
    slug: 'mutual-funds-for-your-child',
    datePublished: '2026-11-03T18:00:00+05:30',
    dateModified: '2026-11-06T12:00:00+05:30',
    title: 'Mutual funds for your child: the complete guide for Indian parents',
    seoTitle: 'Mutual funds for your child: the complete guide | Nuberry',
    subtitle: 'Who can open a minor folio, what it needs, who pays, how it is taxed, and what changes at 18. Checked against SEBI, AMFI and income tax rules as of November 2026.',
    topic: 'Complete guide',
    readingTime: '10 min',
    metaDescription: "How a mutual fund for a minor works in India: who can open one, documents, whose bank account pays, tax and clubbing, and what changes when your child turns 18.",
    waitlist: {
      title: 'Want this done for you, in your child\'s name?',
      text: 'Nuberry opens minor folios and runs the SIP for you, and gives your child their own view of it. Join the waitlist and we\'ll tell you the day it opens.',
    },
    body: [
      { type: 'paragraph', text: "Yes, you can invest in a mutual fund in your child's name in India. The child is the only holder of the folio, you run it as their guardian until they turn 18, and since June 2023 you can pay for it from your own bank account." },
      { type: 'paragraph', text: "That's the short answer. The rest of this guide covers what most parents only find out halfway through: the paperwork, where money can come back to, how the tax actually works, and the day the folio freezes on your child's 18th birthday. I went through all of it for my daughter. This is what I wish one page had told me." },
      {
        type: 'key_facts', title: 'Key facts',
        items: [
          '**Sole holder:** the child is the only holder. No joint holders are allowed on a minor folio.',
          '**Guardian:** a parent (natural guardian) or a court-appointed guardian runs the folio until the child turns 18.',
          "**Paying in:** from the child's account, your account, or a joint account of the two ([SEBI, May 2023](https://www.sebi.gov.in/legal/circulars/may-2023/investment-in-units-of-mutual-funds-in-the-name-of-minor-through-guardian_71148.html)).",
          "**Paying out:** redemptions go only to the child's own verified bank account, which can be held jointly with you.",
          "**Tax:** until 18, the child's gains are added to the income of the parent who earns more (Section 99 of the Income-tax Act, 2025, earlier Section 64(1A)).",
          '**At 18:** SIPs stop and the folio is frozen until the status is changed from minor to major.',
        ],
      },

      { type: 'heading', text: 'Can a minor invest in mutual funds in India?' },
      { type: 'paragraph', text: 'Yes. Any child under 18 can hold mutual fund units, from the day they are born. A minor mutual fund account works like any other folio, with one difference: the child owns the units, but a guardian makes every decision and signs every form until the child becomes a major.' },
      { type: 'paragraph', text: "This is not a special product. It's the same equity, hybrid and debt funds adults invest in, registered in a different name. Any fund house will open one, directly or through a distributor." },

      { type: 'heading', text: 'Who can open a minor folio, and who controls it?' },
      { type: 'paragraph', text: "Only a guardian can open it. That's either a natural guardian (the child's mother or father) or a guardian appointed by a court. Grandparents, uncles and family friends can't open a folio in the child's name unless a court has appointed them." },
      { type: 'bullet_list', items: [
        '**The child is the first and only holder.** You cannot add yourself as a joint holder, and you cannot add the child as a joint holder on your folio.',
        '**The guardian operates it.** You choose the funds, start and stop SIPs, and sign redemption requests.',
        "**The money is the child's.** Even though you run it, it is legally their asset. Treat it that way: this is not a savings pot you can borrow from.",
      ]},

      { type: 'heading', text: 'What documents do you need to open one?' },
      { type: 'paragraph', text: 'Less than most parents expect. Your child does not need a PAN or their own KYC to open the folio. You need:' },
      { type: 'bullet_list', items: [
        "**Proof of the child's date of birth:** a birth certificate, passport or school certificate.",
        '**Proof of your relationship to the child:** usually the same birth certificate or passport, since it names the parents. A court-appointed guardian needs the court order.',
        '**Your own KYC:** your PAN and completed mutual fund KYC. If you already invest in mutual funds, this is probably done.',
        '**A bank account for SIP payments:** yours, the child\'s, or a joint one.',
      ]},
      { type: 'paragraph', text: 'Some fund houses ask for slightly different paperwork, so check their form before you start. The step-by-step version, with where people get stuck, is in [How to open a mutual fund in your child\'s name](/blog/how-to-open-minor-mutual-fund/).' },

      { type: 'heading', text: 'Whose bank account pays in, and where does the money come back?' },
      { type: 'paragraph', text: "This is the rule that trips people up, because it isn't symmetrical. Until June 2023, you had to pay from the child's own bank account. SEBI relaxed that, but only for money going in." },
      { type: 'table', text: true, headers: ['Money', 'Which bank account'], rows: [
        ['SIPs and lump sums going in', "The child's account, the parent or guardian's account, or a joint account of the child and the parent"],
        ['Redemptions coming out', "Only the child's own verified bank account (it can be held jointly with the parent)"],
      ], caption: 'Source: SEBI circular SEBI/HO/IMD/POD-II/CIR/P/2023/0069, 12 May 2023, in force from 15 June 2023.' },
      { type: 'paragraph', text: "In practice: you can start today with no account in your child's name. But open one well before you need to take money out, because the fund house must verify it first, and a redemption can't be paid to you." },

      { type: 'heading', text: 'How do you open one?' },
      { type: 'step', number: 1, title: 'Finish your own KYC', text: 'Check your status on any KRA website. If it is not done, online KYC with PAN and Aadhaar takes about fifteen minutes.' },
      { type: 'step', number: 2, title: 'Choose where to invest', text: 'Directly with each fund house (a separate login for each), or through an AMFI-registered distributor or platform that handles minor folios across fund houses.' },
      { type: 'step', number: 3, title: 'Open the folio in the child\'s name', text: "Select the minor option, enter the child's name and date of birth, state your relationship, and upload the date-of-birth and relationship proof." },
      { type: 'step', number: 4, title: 'Set up the SIP', text: 'Pick the amount, the date and the paying bank account, and approve the mandate. It then runs every month on its own.' },
      { type: 'step', number: 5, title: 'Add the child\'s bank account later', text: 'Register and verify an account in the child\'s name (alone or joint with you) before you ever need to redeem.' },

      { type: 'heading', text: 'What kind of fund do parents usually use?' },
      { type: 'paragraph', text: "This guide doesn't recommend schemes. What it can do is explain how fund categories line up with time, because the time to your goal matters more than anything else." },
      { type: 'table', text: true, headers: ['Time to the goal', 'Categories parents commonly look at', 'Why'], rows: [
        ['10 years or more', 'Equity: index funds, flexi cap, large and mid cap', 'Long enough to sit through market falls, which equity funds do have'],
        ['5 to 10 years', 'Hybrid funds, or equity moving gradually towards debt', 'Less swing in value as the date gets closer'],
        ['Under 5 years', 'Debt funds and other lower-risk options', 'Protecting what has been built matters more than adding to it'],
      ]},
      { type: 'paragraph', text: "What about funds with \"children's\" in the name? In February 2026 SEBI discontinued the solution-oriented category, which included children's funds, and introduced life cycle funds with a target year. It later let fund houses keep some children's funds ([Upstox, May 2026](https://upstox.com/learning-center/mutual-funds/your-child-s-mutual-fund-has-changed/article-1629/)). Any fund can be held in a minor folio, so a label isn't required. If you hold one, check its current status with the fund house." },

      { type: 'heading', text: 'What could a monthly SIP add up to?' },
      { type: 'paragraph', text: '₹5,000 a month, started when your child is 2 and kept going until they turn 18. That is 192 instalments and ₹9.6 lakh paid in. Here is the same SIP at three assumed returns, and what starting five years later looks like.' },
      { type: 'table', headers: ['Assumed return a year', 'Age 2 to 18 (₹9.6 lakh paid in)', 'Age 7 to 18 (₹6.6 lakh paid in)'], rows: [
        ['8%', '₹19.5 lakh', '₹10.6 lakh'],
        ['10%', '₹23.7 lakh', '₹12.0 lakh'],
        ['12%', '₹29.1 lakh', '₹13.7 lakh'],
      ], caption: 'Value at 18 of ₹5,000 a month.' },
      { type: 'assume', title: 'How these are worked out', text: 'Monthly SIP paid at the start of each month, returns compounded monthly at the stated annual rate, before tax and fund expenses. These rates are assumptions, not promises. Equity funds have returned more and less than this over long periods, and can lose money. Figures are illustrative only. Try your own numbers in the [SIP calculator](/calculator/).' },
      { type: 'paragraph', text: 'The right-hand column is the one to look at. Five fewer years of the same ₹5,000 means ₹3 lakh less paid in, but between ₹8.9 lakh and ₹15.4 lakh less at 18, depending on the rate. The last years of compounding do the most work, and you only get them by starting early.' },

      { type: 'heading', text: "How is a mutual fund in your child's name taxed?" },
      { type: 'paragraph', text: "Until your child turns 18, their investment income is treated as yours. This is called clubbing, and it's the part most articles get wrong or leave out." },
      { type: 'bullet_list', items: [
        "**Whose return it goes in:** the child's capital gains and dividends are added to the income of the parent whose total income is higher (Section 99 of the Income-tax Act, 2025, which replaced Section 64(1A) from 1 April 2026). They keep their character: equity gains are taxed at the capital gains rates below, and they share that parent's single ₹1.25 lakh equity exemption. Dividends and debt fund gains are taxed at that parent's slab rate.",
        '**A small exemption:** ₹1,500 a year per child is exempt from clubbing.',
        "**Exceptions:** income a child earns from their own work, skill or talent is not clubbed, and nor is the income of a child with a specified disability.",
        '**In the year they turn 18:** income up to their birthday is clubbed; after that it is taxed in their own name.',
      ]},
      { type: 'paragraph', text: 'The capital gains rates themselves are the same as for adults. Budget 2026 did not change them.' },
      { type: 'table', text: true, headers: ['Fund type', 'Held 12 months or less', 'Held longer than 12 months'], rows: [
        ['Equity funds (65% or more in Indian equity)', '20%', '12.5% on gains above ₹1.25 lakh a year'],
        ['Debt funds bought on or after 1 April 2023', 'Your slab rate', 'Your slab rate'],
      ], caption: 'Rates for FY 2026-27, before surcharge and cess. Tax rules change; confirm with a tax professional before acting.' },
      { type: 'paragraph', text: 'Worked examples, the year they turn 18, and how to report clubbed income are in [Tax on investments in your child\'s name: clubbing explained](/blog/tax-on-investments-in-childs-name-clubbing/). To see what redeeming after 18 means with your own numbers, use the [tax calculator](/tax-calculator/).' },

      { type: 'heading', text: 'What happens when your child turns 18?' },
      { type: 'paragraph', text: 'The folio does not quietly carry on. On the 18th birthday:' },
      { type: 'bullet_list', items: [
        'Every SIP, STP and SWP on the folio stops, even if the mandate was set up to run longer.',
        'You can no longer transact on it as guardian, and no new transactions are allowed until the status changes.',
        'Dividend payouts, if any, continue to the registered bank account.',
      ]},
      { type: 'paragraph', text: 'To unfreeze it, your child, now an adult, needs a PAN, their own KYC and a bank account in their own name. They then submit a change of status form (often called the MAM form) with a cancelled cheque, a nomination form and fresh SIP mandates if they want to continue. Fund houses send a notice before the birthday, but start on the PAN and KYC a few months ahead. More on that day in [The day your child turns 18](/blog/the-day-your-child-turns-18/).' },
      { type: 'paragraph', text: 'After this, the money is fully theirs. You no longer have any say in what they do with it. For most parents that is the point, but it is worth deciding early how and when you will talk to your child about it.' },

      { type: 'heading', text: 'What most guides get wrong' },
      { type: 'subheading', text: "\"Invest in your child's name to save tax\"" },
      { type: 'paragraph', text: "Not while they're a minor. Clubbing puts the gains straight back into your return, so there is no tax saving before 18. Worse, if you redeem during those years, the child's gains share your single ₹1.25 lakh equity exemption with your own investments. The tax case only starts at 18, when your child files in their own name with their own exemption every year. A corpus built over 16 years can often be withdrawn gradually after 18 with much less tax than if it sat in your name. That is a real benefit, but it is a reason to plan the exit, not a reason to invest." },
      { type: 'subheading', text: '"First, open a bank account for your child"' },
      { type: 'paragraph', text: "Older guides still say this. Since June 2023 you can start without one and pay from your own account. You only need the child's account for money coming out, so the honest advice is: start now, open the account before you need it." },
      { type: 'subheading', text: '"Earmarking your own fund is the same thing"' },
      { type: 'paragraph', text: "It isn't. Money you've labelled as the child's but kept in your name is money you can, and usually will, dip into. I did, for a car. A folio in the child's name makes every withdrawal a deliberate step paid into their account, which is exactly why it survives 18 years." },

      { type: 'heading', text: 'Frequently asked questions' },
      { type: 'faq', items: [
        { q: 'Does my child need a PAN to invest in mutual funds?', a: "Not to open the folio. The guardian's PAN and KYC are used. Your child needs their own PAN and KYC when they turn 18, to change the folio's status from minor to major." },
        { q: 'Can I invest from my own bank account?', a: "Yes. Since 15 June 2023, investments in a minor's name can be paid from the parent's or guardian's account, the child's account, or a joint account. Redemptions are paid only to the child's verified account." },
        { q: 'Can grandparents invest in a mutual fund for a grandchild?', a: "They can't open a folio in the child's name unless a court has appointed them guardian. A parent opens it as guardian. The payment rules allow money from the parent or guardian's account, the child's account, or their joint account, so check with the fund house before money comes from anyone else's account." },
        { q: 'Can a minor mutual fund account have a joint holder?', a: 'No. The child must be the sole holder. The guardian operates the folio but is not a joint holder.' },
        { q: 'Who pays tax on mutual fund gains in a child\'s name?', a: "Until 18, the parent with the higher income, because the child's income is clubbed with theirs, after a ₹1,500 a year exemption per child. From 18, the child pays tax on their own income." },
        { q: 'What happens to the SIP when my child turns 18?', a: 'It stops on their 18th birthday and the folio is frozen until the status is changed to major with the new adult\'s PAN, KYC and bank account. They can then register fresh SIPs.' },
      ]},

      { type: 'heading', text: 'Sources' },
      { type: 'sources', items: [
        { label: 'SEBI: Investment in units of mutual funds in the name of minor through guardian (12 May 2023)', url: 'https://www.sebi.gov.in/legal/circulars/may-2023/investment-in-units-of-mutual-funds-in-the-name-of-minor-through-guardian_71148.html' },
        { label: 'SEBI: Investment in the name of minor through guardian and transmission of units (24 December 2019)', url: 'https://www.sebi.gov.in/legal/circulars/dec-2019/circular-on-investment-in-units-of-mutual-funds-in-the-name-of-minor-through-guardian-and-ease-of-process-for-transmission-of-units_45457.html' },
        { label: 'AMFI: Minor attaining majority', url: 'https://amfiindia.com/investor-corner/investor-center/Minor_attaining_Majority.html' },
        { label: 'Mutual Funds Sahi Hai (AMFI): Changing investor status from minor to major', url: 'https://www.mutualfundssahihai.com/en/what-process-changing-investor-status-minor-major' },
        { label: 'PPFAS Mutual Fund: Investments made on behalf of minors', url: 'https://amc.ppfas.com/faqs/investments-made-on-behalf-of-minors/index.php' },
        { label: 'Clubbing of income under the Income-tax Act, 2025 (Sections 97 to 101)', url: 'https://drspv.in/knowledge-bank/income-tax/ch-17-clubbing-income-sec60-65/' },
        { label: "Upstox: Your child's mutual fund has changed (May 2026)", url: 'https://upstox.com/learning-center/mutual-funds/your-child-s-mutual-fund-has-changed/article-1629/' },
      ]},
    ],
  },
  {
    id: 8,
    slug: 'sukanya-samriddhi-vs-mutual-funds',
    datePublished: '2026-11-04T16:00:00+05:30',
    title: 'Sukanya Samriddhi vs mutual funds: which is better for your daughter?',
    seoTitle: 'Sukanya Samriddhi vs mutual funds for your daughter | Nuberry',
    subtitle: 'Rates, lock-ins, tax under the new regime, and what each could add up to by the time she is 18 and 21. Checked against the scheme rules and the Oct to Dec 2026 rate.',
    topic: 'Comparison',
    readingTime: '8 min',
    metaDescription: 'Sukanya Samriddhi vs mutual funds for your daughter: 8.2% tax-free vs market-linked returns, lock-ins, new tax regime rules and a worked ₹5,000 a month example.',
    waitlist: {
      title: 'Doing the mutual fund half in her name?',
      text: "Nuberry opens a minor folio in your daughter's name and runs the SIP for you, and gives her a view of it she can follow as she gets older. Join the waitlist and we'll tell you the day it opens.",
    },
    body: [
      // AKSHAY: rewrite these two paragraphs in your own voice.
      { type: 'paragraph', text: 'Neither is better on every count. Sukanya Samriddhi (SSY) pays a government-set, tax-free 8.2% a year right now and locks most of the money until your daughter is 21. An equity mutual fund has no fixed rate, can fall in value, is taxed, and lets you take the money out whenever it is needed.' },
      { type: 'paragraph', text: "So the useful question isn't which one wins. It's what the money is for, and when. This page puts the two side by side with today's rules, runs the same ₹5,000 a month through both, and shows where each one quietly costs you. A disclosure first: Nuberry distributes mutual funds and earns a commission from fund houses on them. We don't offer SSY and earn nothing on it." },
      {
        type: 'key_facts', title: 'Key facts',
        items: [
          '**SSY rate:** 8.2% a year. It has been 8.2% every quarter since January 2024 ([National Savings Institute](https://www.nsiindia.gov.in/InternalPage.aspx?Id_Pk=179)), and the government kept it there for October to December 2026. It is reset every quarter.',
          "**Who can open SSY:** a parent or legal guardian, for a girl under 10. One account per girl, two per family (more only for twins or triplets).",
          '**SSY deposits:** ₹250 to ₹1.5 lakh a financial year, paid for 15 years. The account matures 21 years after it was opened.',
          '**Getting SSY money out:** up to 50% for her education once she turns 18 or passes Class 10. Full closure early only for marriage after 18, or on compassionate grounds.',
          '**SSY tax:** interest and maturity are tax-free. Deposits are deductible under Section 123 of the Income-tax Act, 2025 (earlier 80C), but only in the old tax regime.',
          "**Mutual funds:** any child, no upper limit, no lock-in (except ELSS, 3 years). Returns are market-linked and gains are taxed, clubbed with a parent's income until 18.",
        ],
      },

      { type: 'heading', text: "What's the actual difference between SSY and a mutual fund?" },
      { type: 'paragraph', text: 'SSY is a small savings scheme run by the government through post offices and banks. A mutual fund pools money into shares, bonds or both, and its value moves with those markets. Everything else follows from that.' },
      { type: 'table', text: true, headers: ['', 'Sukanya Samriddhi', 'Equity mutual fund in her name'], rows: [
        ['Return', '8.2% a year (Oct to Dec 2026), reset every quarter', 'Market-linked. No fixed rate, and can be negative'],
        ['Who it is for', 'Girls under 10 at opening', 'Any child, any age'],
        ['How much', '₹250 to ₹1.5 lakh a year', 'From ₹100 to ₹500 a month in most funds, no upper limit'],
        ['How long you pay', '15 years from opening', 'As long as you choose'],
        ['When the money is free', 'At 21 years from opening. 50% earlier for education after 18', 'Any time (ELSS: after 3 years)'],
        ['Tax on deposits', 'Deduction up to ₹1.5 lakh, old regime only, shared with EPF, PPF and others', 'None, except ELSS in the old regime'],
        ['Tax on the return', 'None', 'Capital gains tax. Clubbed with a parent until 18'],
        ['Who runs it', 'Guardian until 18, then her', 'Guardian until 18, then her'],
      ], caption: 'Sources: Sukanya Samriddhi Account Scheme, 2019; National Savings Institute rate history to September 2026; Ministry of Finance announcement of 30 September 2026 for October to December 2026.' },

      { type: 'heading', text: 'What could ₹5,000 a month add up to in each?' },
      { type: 'paragraph', text: 'Say your daughter is 1. You put ₹5,000 a month into each for 15 years, which is ₹9 lakh paid in. SSY then stops taking deposits and keeps earning until it matures when she is 22. To compare fairly, the mutual fund SIP also stops after 15 years and the money stays invested for the same 21 years.' },
      { type: 'table', headers: ['Assumed return a year', 'Around her 18th birthday', 'At 21 years (age 22)'], rows: [
        ['SSY at 7.5%', '₹18.8 lakh', '₹25.2 lakh'],
        ['SSY at 8.2% (current)', '₹20.2 lakh', '₹27.7 lakh'],
        ['Equity fund at 8%', '₹20.4 lakh', '₹28.1 lakh (₹25.9 lakh after tax)'],
        ['Equity fund at 10%', '₹25.5 lakh', '₹38.0 lakh (₹34.5 lakh after tax)'],
        ['Equity fund at 12%', '₹32.0 lakh', '₹51.6 lakh (₹46.5 lakh after tax)'],
      ], caption: 'Value of ₹5,000 a month for 15 years, ₹9 lakh paid in. SSY is tax-free; fund values are before tax except where shown.' },
      { type: 'assume', title: 'How these are worked out', text: 'Deposits at the start of each month. SSY interest worked out monthly and added once a year, as the scheme rules say; 7.5% shows what a lower future rate would do, since the rate changes every quarter. Fund returns compounded monthly at the stated rate, before fund expenses. "After tax" assumes the whole fund is redeemed in her name in one year after she turns 18, at 12.5% on equity gains above ₹1.25 lakh, with no other gains that year. These rates are assumptions, not promises. Equity funds have returned more and less than this over long periods, and can lose money. Try your own numbers in the [SIP calculator](/calculator/).' },
      { type: 'paragraph', text: 'Read the 8% row next to the 8.2% row. If equity only delivers 8%, SSY comes out ahead after tax, with no risk taken. The fund only pulls clearly ahead if it returns around 10% or more over two decades. Nobody can tell you in advance which row you will land in.' },
      { type: 'paragraph', text: 'Now read the middle column again. Around her 18th birthday the SSY balance is about ₹20 lakh, but she can only take out half of it, and only for education. The fund is all available.' },

      { type: 'heading', text: 'When can your daughter actually use the money?' },
      { type: 'paragraph', text: 'This is the difference most parents underestimate. SSY decides the purpose for you.' },
      { type: 'bullet_list', items: [
        "**Before 18:** SSY money can't be touched except on compassionate grounds, such as a life-threatening illness, and not in the first five years. A mutual fund can be redeemed any time, though the money must be paid to her own bank account.",
        '**From 18 or Class 10, whichever is earlier:** SSY allows up to 50% of the last year-end balance for her education, against proof of admission or fees. Anything else waits.',
        '**Marriage after 18:** SSY can be closed fully, from one month before to three months after the wedding.',
        '**At 21 years from opening:** SSY matures and the whole balance is hers.',
      ]},
      { type: 'paragraph', text: 'If she wants the money at 19 for anything other than college or marriage (a business, a laptop for freelance work, a gap year, a deposit on a flat), half of the SSY balance has to wait until the account matures. A mutual fund has no such rule. That flexibility cuts both ways: it is also easier for you to dip into.' },

      { type: 'heading', text: 'How is each one taxed?' },
      { type: 'subheading', text: 'SSY' },
      { type: 'paragraph', text: 'The interest and the maturity amount are fully tax-free. The deposit deduction is the part that has changed. Under the Income-tax Act, 2025, it sits in Section 123 (the old 80C) and only applies if you file under the old regime. The new regime is now the default, and it has no Section 123 deduction. Even in the old regime, the ₹1.5 lakh limit is shared with EPF, PPF, life insurance premiums, ELSS, tuition fees and home loan principal, so many salaried parents have used it up before SSY.' },
      { type: 'subheading', text: 'Mutual funds' },
      { type: 'paragraph', text: "Until she is 18, any gains you take are clubbed with the income of the parent who earns more and taxed at that parent's rates, after a ₹1,500 a year exemption. After 18 the gains are hers. For equity funds that means 20% on units held 12 months or less, and 12.5% above ₹1.25 lakh of gains a year on units held longer. Because she gets that ₹1.25 lakh limit every year, withdrawing gradually after 18 can cut the tax well below the one-year figure in the table. The full picture is in our [mutual funds for your child guide](/blog/mutual-funds-for-your-child/), and you can test numbers in the [tax calculator](/tax-calculator/)." },
      { type: 'paragraph', text: 'Tax rules change. Confirm how they apply to you with a tax professional before acting.' },

      { type: 'heading', text: 'Can you do both?' },
      { type: 'paragraph', text: "Yes, and many parents do. A common pattern is to put a fixed amount into SSY for the part of the goal that has a known date and purpose, usually higher education, and to run a SIP alongside it for the part that needs to stay flexible. The two don't interfere: SSY sits in her account at a post office or bank, the fund sits in a folio in her name. How to split it depends on your own income, tax regime and what else you hold, so this page won't give you a ratio." },
      { type: 'paragraph', text: "A few practical limits to know before you decide: SSY has to be opened before she turns 10, so the option closes early. Missing the ₹250 minimum in a year puts the account in default until you pay ₹50 for each missed year plus the missed deposits. And SSY only works for daughters. If you have a son too, his money has to go somewhere else, which matters if you want to treat both children the same way." },

      // AKSHAY: this section is where your own view goes. Rewrite it in your voice.
      { type: 'heading', text: 'What most guides get wrong' },
      { type: 'subheading', text: '"SSY gives you 8.2% for 21 years"' },
      { type: 'paragraph', text: 'It gives you 8.2% this quarter. The rate is reset every three months and applies to the whole balance, old deposits included. Between April 2020 and March 2023 it was 7.6%. Back in 2015-16 it was 9.2%. Over 21 years you will almost certainly see several different rates, which is why the table above shows 7.5% as well. Sovereign-backed, yes. Fixed, no.' },
      { type: 'subheading', text: '"SSY saves you tax every year"' },
      { type: 'paragraph', text: 'Only in the old regime, and only if the ₹1.5 lakh limit is not already full. A parent on the new regime, which is now the default, gets no deduction at all for SSY deposits. The tax-free interest is still a real advantage. The deduction is the part most guides still treat as automatic.' },
      { type: 'subheading', text: '"Compare 8.2% with the 12% a SIP gives"' },
      { type: 'paragraph', text: "A SIP doesn't give 12%. Some funds have returned that over some long periods, and others haven't. The honest comparison is a tax-free, government-set rate against a range of possible outcomes after tax. At 8% the fund loses. At 12% it wins clearly. The bigger difference between the two isn't the return at all. It's who decides what the money can be used for, and when." },

      { type: 'heading', text: 'Frequently asked questions' },
      { type: 'faq', items: [
        { q: 'Is Sukanya Samriddhi better than a SIP for a girl child?', a: 'Neither is better on every count. SSY pays a tax-free, government-set rate (8.2% for October to December 2026) but locks most of the money until 21 years from opening. An equity SIP can return more or less, is taxed, and has no lock-in. Many parents use both for different parts of the goal.' },
        { q: 'What is the Sukanya Samriddhi interest rate now?', a: '8.2% a year for October to December 2026. It has been 8.2% since January 2024. The government announces the rate every quarter, so check the latest before you invest.' },
        { q: 'Can I claim an SSY deduction under the new tax regime?', a: 'No. The deduction for SSY deposits is under Section 123 of the Income-tax Act, 2025 (earlier 80C), which is available only in the old regime. SSY interest and maturity are tax-free under both.' },
        { q: 'Can I withdraw from SSY before my daughter turns 21?', a: 'Up to 50% of the previous year-end balance for her education, once she turns 18 or passes Class 10. The account can be closed fully for her marriage after 18, or on compassionate grounds after five years. Otherwise the money stays until maturity.' },
        { q: 'What happens to SSY and a mutual fund when she turns 18?', a: "She takes over both. For SSY, she submits her documents at the post office or bank and operates the account herself. For a mutual fund, SIPs stop and the folio is frozen until she changes its status from minor to major with her own PAN, KYC and bank account. More in [The day your child turns 18](/blog/the-day-your-child-turns-18/)." },
        { q: 'Can I open both for the same daughter?', a: 'Yes. There is no rule against holding an SSY account and a mutual fund folio in the same child\'s name. The folio is opened by you as guardian, the same way as for any minor, as described in [How to open a mutual fund in your child\'s name](/blog/how-to-open-minor-mutual-fund/).' },
      ]},

      { type: 'heading', text: 'Sources' },
      { type: 'sources', items: [
        { label: 'India Post: Sukanya Samriddhi Account Scheme, 2019 (scheme text)', url: 'https://www.indiapost.gov.in/VAS/DOP_PDFFiles/Savings%20Bank/Sukanya%20Samriddhi%20Account%20Scheme%202019%20English.pdf' },
        { label: 'National Savings Institute (Ministry of Finance): SSY interest rate since inception, to September 2026', url: 'https://www.nsiindia.gov.in/InternalPage.aspx?Id_Pk=179' },
        { label: 'Upstox: SSY rate kept at 8.2% for October to December 2026 (announced 30 September 2026)', url: 'https://upstox.com/news/personal-finance/investing/sukanya-samriddhi-yojana-ssy-account-interest-rate-october-december-2026/article-201150/' },
        { label: 'Section 123, Income-tax Act, 2025 and Schedule XV (deductions, earlier 80C)', url: 'https://easevalue.com/income-tax-act-2025/section-123' },
        { label: 'ClearTax: Sukanya Samriddhi Yojana rules and tax benefits', url: 'https://cleartax.in/s/sukanya-samriddhi-yojana' },
        { label: 'SEBI: Investment in units of mutual funds in the name of minor through guardian (12 May 2023)', url: 'https://www.sebi.gov.in/legal/circulars/may-2023/investment-in-units-of-mutual-funds-in-the-name-of-minor-through-guardian_71148.html' },
      ]},
    ],
  },
  {
    id: 2,
    slug: 'what-is-minor-mutual-fund',
    datePublished: '2026-06-10T23:41:53+05:30',
    dateModified: '2026-11-06T12:00:00+05:30',
    title: 'What is a minor mutual fund account? (No jargon)',
    subtitle: "Guardian folios, minor PAN, the change of status at 18. What each term means, and why the name on the folio matters more than it sounds.",
    topic: 'How it works',
    readingTime: '6 min',
    metaDescription: "A minor mutual fund account in plain words: who owns it, who runs it, the terms you'll meet, and why your child's name on the folio matters.",
    body: [
      { type: 'paragraph', text: "A minor mutual fund account is a folio where your child is the only holder and you, as their parent or guardian, run it until they turn 18. Your child owns the units. You make every decision. At 18 it becomes a normal account in their name." },
      { type: 'paragraph', text: "That's the whole idea. The rest of this page explains the vocabulary that makes it sound harder than it is, and why holding the money in your child's name changes what happens to it. For documents, tax and fund types in one place, read [Mutual funds for your child: the complete guide](/blog/mutual-funds-for-your-child/)." },
      {
        type: 'key_facts', title: 'Key facts',
        items: [
          '**Owner:** the child, as the sole holder. Joint holders are not allowed on a minor folio.',
          '**Operator:** a parent, or a guardian appointed by a court, until the child turns 18.',
          "**Child's PAN:** not needed to open it. Needed at 18.",
          "**Paying in:** from your account, the child's, or a joint account of the two ([SEBI, May 2023](https://www.sebi.gov.in/legal/circulars/may-2023/investment-in-units-of-mutual-funds-in-the-name-of-minor-through-guardian_71148.html)).",
          '**At 18:** SIPs stop and the folio is frozen until its status is changed from minor to major.',
        ],
      },

      { type: 'heading', text: 'Is a minor mutual fund account allowed in India?' },
      { type: 'paragraph', text: "Yes. Every fund house accepts folios in a minor's name, from the day a child is born. It isn't a special product. It's the same equity, hybrid and debt schemes adults buy, registered in the child's name with a guardian attached." },

      { type: 'heading', text: 'What do the terms mean?' },
      { type: 'table', text: true, headers: ['Term', 'What it means'], rows: [
        ['Minor folio', 'A mutual fund account where the holder is under 18. The child is the first and only holder.'],
        ['Guardian', 'The adult who runs the folio. A natural guardian (mother or father) or a court-appointed guardian. Grandparents and other relatives can only be guardian by court order.'],
        ['Guardian KYC', "The guardian's own mutual fund KYC, done once with PAN and Aadhaar. This is what the fund house checks, not the child's."],
        ['Minor PAN', "A PAN in the child's name. Not needed to open a minor folio. Needed when the child turns 18, along with their own KYC."],
        ['Change of status (minor to major)', "The form your child submits at 18, with their PAN, KYC and bank account, to unfreeze the folio. Some fund houses call it the MAM form."],
        ['Clubbing', "The tax rule that adds a minor's income to a parent's income until 18. See [clubbing explained](/blog/tax-on-investments-in-childs-name-clubbing/)."],
      ]},

      { type: 'heading', text: "Why does the name on the folio matter?" },
      // AKSHAY: this section is your own story, kept from the old "I wish someone had told me" post.
      { type: 'paragraph', text: 'The day my daughter was born, I thought I did everything right. Called the relatives. Handed out sweets. Opened an FD "for her future". What I didn\'t do was open a single account in her name. Not because I decided against it. Because nobody told me I could.' },
      { type: 'paragraph', text: 'For years I kept the money in my own mutual fund and told myself it was earmarked for her. Earmarked is not the same as hers. I dipped into it once, for a car down payment. Temporarily, obviously. That is how earmarked money works: it stays earmarked until something else needs it more.' },
      { type: 'paragraph', text: "When the folio is in your child's name, that changes. Redemptions can only be paid into a bank account in the child's name, so taking money out becomes a deliberate step rather than a transfer to yourself. The money compounds without interruption. And at 18 it isn't a gift you hand over. It's already theirs." },
      { type: 'pull_quote', text: "Not a gift. Not a transfer. Money they've owned since the day you started." },

      { type: 'heading', text: 'What does waiting a few years cost?' },
      { type: 'paragraph', text: "The same SIP started four years later doesn't just lose four years of instalments. It loses four of the years where compounding does the most work." },
      { type: 'table', headers: ['₹1,000 a month, started', 'Paid in by 18', 'Value at 18'], rows: [
        ['At birth', '₹2.16 lakh', '₹7.6 lakh'],
        ['At age 4', '₹1.68 lakh', '₹4.4 lakh'],
      ], caption: 'At an assumed 12% a year.' },
      { type: 'assume', title: 'How these are worked out', text: 'A ₹1,000 monthly SIP paid at the start of each month, compounded monthly at an assumed 12% a year, before tax and fund expenses. 12% is an assumption, not a promise. Equity funds have returned both more and less than this over long periods, and can lose money. Figures are illustrative only. Try other rates in the [SIP calculator](/calculator/).' },
      { type: 'paragraph', text: '₹48,000 less paid in, about ₹3.2 lakh less at 18. Same money every month, same fund. Only the start date is different.' },

      { type: 'heading', text: 'What do you need to open one?' },
      { type: 'bullet_list', items: [
        "Proof of your child's date of birth, usually the birth certificate",
        'Proof that you are the parent or guardian (the same birth certificate usually does this)',
        'Your own PAN and completed mutual fund KYC',
        "A bank account to pay from: yours, your child's, or a joint one",
      ]},
      { type: 'paragraph', text: "The steps, and where people get stuck, are in [How to open a mutual fund in your child's name](/blog/how-to-open-minor-mutual-fund/)." },

      { type: 'heading', text: 'What happens at 18?' },
      { type: 'paragraph', text: "On the 18th birthday every SIP on the folio stops and no new transactions are allowed until the status is changed from minor to major. Your child needs a PAN, their own KYC and a bank account in their own name to do that. After that the folio is a normal adult account, run by them. More in [The day your child turns 18](/blog/the-day-your-child-turns-18/)." },

      { type: 'heading', text: 'Frequently asked questions' },
      { type: 'faq', items: [
        { q: 'What is a minor mutual fund account?', a: 'A mutual fund folio held in the name of a child under 18, with a parent or court-appointed guardian running it. The child is the sole holder and owns the units.' },
        { q: 'Can a minor folio have a joint holder?', a: 'No. The child is the only holder. The guardian operates the folio but is not a joint holder.' },
        { q: 'Is investing in my child\'s name the same as earmarking my own fund?', a: "No. Money in your own folio is legally yours and easy to redeem for something else. In a minor folio the units belong to the child and redemptions are paid only to a bank account in the child's name." },
        { q: 'Does my child need a PAN to open one?', a: "No. The guardian's PAN and KYC are used. Your child needs a PAN and their own KYC at 18." },
      ]},

      { type: 'heading', text: 'Sources' },
      { type: 'sources', items: [
        { label: 'SEBI: Investment in units of mutual funds in the name of minor through guardian (12 May 2023)', url: 'https://www.sebi.gov.in/legal/circulars/may-2023/investment-in-units-of-mutual-funds-in-the-name-of-minor-through-guardian_71148.html' },
        { label: 'SEBI: Investment in the name of minor through guardian and transmission of units (24 December 2019)', url: 'https://www.sebi.gov.in/legal/circulars/dec-2019/circular-on-investment-in-units-of-mutual-funds-in-the-name-of-minor-through-guardian-and-ease-of-process-for-transmission-of-units_45457.html' },
        { label: 'AMFI: Minor attaining majority', url: 'https://amfiindia.com/investor-corner/investor-center/Minor_attaining_Majority.html' },
      ]},
    ],
  },
  {
    id: 3,
    slug: '500-a-month-18-years',
    datePublished: '2026-06-10T23:41:53+05:30',
    dateModified: '2026-11-06T12:00:00+05:30',
    title: "₹500 a Month. 18 Years. Here's What Happens.",
    subtitle: "Less than one dinner out a month. Here's what it becomes, and what starting five years late costs you.",
    topic: 'The numbers',
    readingTime: '2 min',
    metaDescription: 'What does ₹500/month invested for 18 years actually become? The compounding math for Indian parents, with real numbers.',
    body: [
      { type: 'paragraph', text: "₹500 a month is less than one dinner out. It's one streaming subscription. For most urban Indian families it's genuinely affordable — small enough that you wouldn't notice it leaving your account." },
      { type: 'paragraph', text: 'So what does it actually become?' },
      { type: 'heading', text: 'The numbers' },
      { type: 'table', headers: ['Monthly SIP', 'Value at 18 years'], rows: [['₹500', '₹3.8 lakh'], ['₹1,000', '₹7.6 lakh'], ['₹2,000', '₹15.3 lakh'], ['₹5,000', '₹38.3 lakh']] },
      { type: 'assume', title: 'How these are worked out', text: '12% is an assumption, not a promise — equity funds have returned both more and less than this over long periods, and can lose money. These figures are illustrative only.' },
      { type: 'heading', text: 'What ₹38 lakh means for an 18-year-old' },
      { type: 'paragraph', text: 'College without a loan. A first business funded without borrowing from family. Or simply the freedom to take a lower-paying job that leads somewhere, instead of the highest-paying one available.' },
      { type: 'pull_quote', text: "A head start most of their peers won't have." },
      { type: 'heading', text: 'The cost of waiting' },
      { type: 'paragraph', text: "This is the part most parents underestimate. The same ₹1,000 a month, started five years later, doesn't lose five years of contributions — it loses the five years when compounding does the most work." },
      { type: 'table', headers: ['₹1,000 a month, started', 'Value at 18'], rows: [['At birth', '₹7.6 lakh'], ['At age 5', '₹3.8 lakh']] },
      { type: 'paragraph', text: 'Five years of delay costs roughly **₹3.8 lakh** — about half the total. Same monthly amount. Same fund. Only the start date is different.' },
      { type: 'callout', title: "You don't need to start big", text: "₹1,000 a month started at birth is worth about twice the same ₹1,000 started at age 5. You can raise the amount later. You can't get the years back." },
      { type: 'paragraph', text: "How to put it in your child's name, and how it is taxed, is in [Mutual funds for your child: the complete guide](/blog/mutual-funds-for-your-child/). Try other amounts and rates in the [SIP calculator](/calculator/)." },
    ],
  },
  {
    id: 4,
    slug: 'how-to-open-minor-mutual-fund',
    datePublished: '2026-06-10T23:41:53+05:30',
    dateModified: '2026-11-03T15:00:00+05:30',
    title: "How to open a mutual fund in your child's name: documents and steps",
    seoTitle: "How to open a mutual fund in your child's name | Nuberry",
    subtitle: 'The documents you need, the order to do things in, and where people get stuck.',
    topic: 'How it works',
    readingTime: '5 min',
    metaDescription: "Documents required to invest in a mutual fund for a minor in India, guardian KYC, which bank account to use, and the five steps to open the folio.",
    waitlist: {
      title: 'Rather not do the paperwork yourself?',
      text: "Nuberry is building a simpler way to invest in your child's name. Join the waitlist and we'll tell you the day it opens.",
    },
    body: [
      { type: 'paragraph', text: "To open a mutual fund in your child's name you need three things: proof of your child's date of birth, proof that you are their parent or guardian, and your own completed KYC. Your child does not need a PAN, their own KYC or a bank account to start." },
      { type: 'paragraph', text: "This is the guide that would have saved me an afternoon. The documents first, then the steps in order, then the places people get stuck. For the bigger picture (tax, fund types, what happens at 18), read [Mutual funds for your child: the complete guide](/blog/mutual-funds-for-your-child/)." },
      {
        type: 'key_facts', title: 'Key facts',
        items: [
          "**Child's PAN:** not needed to open the folio. It is needed at 18.",
          "**KYC:** only the parent or guardian's. Your child does their own KYC at 18.",
          "**One document can do two jobs:** a birth certificate or passport proves both the date of birth and that you are the parent.",
          "**Paying in:** from your account, the child's account, or a joint account of the two.",
          "**Paying out:** only to a bank account in the child's name (it can be joint with you), so open one before you need to redeem.",
        ],
      },

      { type: 'heading', text: 'What documents are required for a minor mutual fund investment?' },
      { type: 'table', text: true, headers: ['What you need', 'Documents that work', 'Notes'], rows: [
        ["Child's date of birth", 'Birth certificate, passport, school leaving certificate, or a mark sheet that shows the date of birth', 'The birth certificate is the one almost everyone uses'],
        ['Your relationship to the child', 'Birth certificate or passport naming the parents. A court order for a court-appointed guardian', 'Usually the same document as above'],
        ['Your identity and KYC', 'Your PAN, plus completed mutual fund KYC (done once, valid at every fund house)', 'Aadhaar is the quickest route for online KYC'],
        ['A bank account to pay from', "Yours, your child's, or a joint account of the two", 'Allowed since 15 June 2023'],
        ["A bank account for redemptions", "An account in your child's name, alone or joint with you", 'Not needed to start. Needed before any money comes out'],
      ], caption: 'Fund houses and platforms sometimes ask for slightly different documents. Check their form before you start.' },
      { type: 'paragraph', text: "What you don't need: the child's PAN, the child's Aadhaar for KYC, a separate guardian form, or a minor bank account on day one." },

      { type: 'heading', text: 'What does guardian KYC involve?' },
      { type: 'paragraph', text: "Mutual fund KYC is a one-time check of the investor's identity and address, recorded with a KYC registration agency (KRA) and accepted by every fund house. For a minor's folio, it's the guardian's KYC that counts." },
      { type: 'bullet_list', items: [
        "**Already invest in mutual funds?** Your KYC is almost certainly done. Check your status on any KRA website using your PAN.",
        "**Never invested?** Online KYC with your PAN and Aadhaar, a photo and a signature takes about fifteen minutes on most platforms.",
        "**Status anything other than \"validated\"?** Fix it before you apply. An incomplete or on-hold KYC is one of the most common reasons a new folio is rejected.",
      ]},

      { type: 'heading', text: 'How do you open the folio, step by step?' },
      {
        type: 'step', number: 1, title: 'Gather the documents',
        text: "Your child's birth certificate (or passport), your PAN, and the details of the bank account the SIP will be paid from. Scan or photograph them clearly. Most rejections are unreadable uploads.",
      },
      {
        type: 'step', number: 2, title: 'Check your KYC',
        text: "Look up your status on a KRA website. If it isn't done, complete it online before anything else. Nothing moves until it's validated.",
      },
      {
        type: 'step', number: 3, title: 'Choose where to do it',
        text: 'Directly with a fund house, or through an AMFI-registered distributor or platform. Going direct means a separate login for every fund house. A platform puts all of them in one place. Check that it supports minor folios before you sign up, because not all do.',
      },
      {
        type: 'step', number: 4, title: 'Open the minor folio',
        text: "Select the minor option, enter your child's name and date of birth exactly as on the birth certificate, state your relationship as guardian, and upload the proof.",
      },
      {
        type: 'step', number: 5, title: 'Pick a fund and start the SIP',
        text: 'Choose the monthly amount and SIP date, then approve the bank mandate. After that it runs on its own every month. Add your child\'s bank account to the folio whenever you open one.',
      },
      { type: 'pull_quote', text: "Set it up once. Let it run. Check in once a year. That's the whole job." },

      { type: 'heading', text: 'Where do people get stuck?' },
      { type: 'bullet_list', items: [
        "**Name mismatch.** The child's name on the folio must match the birth certificate exactly. A nickname or a missing middle name is the most common reason for a rejected application.",
        "**Birth certificate not ready.** Some municipal certificates take weeks. A passport works too, if your child has one.",
        "**Waiting to open a bank account first.** Older guides say you must. Since June 2023 you don't. Start now and open the account before you need to redeem.",
        "**Stopping the SIP during a market fall.** The most common mistake, and it's the point at which the same money buys the most units.",
      ]},

      { type: 'heading', text: 'Frequently asked questions' },
      { type: 'faq', items: [
        { q: 'Is a PAN card required for a minor to invest in mutual funds?', a: "No. The guardian's PAN and KYC are used to open the folio. Your child needs a PAN and their own KYC when they turn 18 and the folio changes from minor to major." },
        { q: 'Can I use my own bank account for my child\'s SIP?', a: "Yes. Since 15 June 2023, SIPs and lump sums for a minor's folio can be paid from the parent or guardian's account, the child's account, or a joint account. Redemptions are paid only to an account in the child's name." },
        { q: 'Do I need a separate KYC for my child?', a: 'Not until they turn 18. Before that, only the guardian\'s KYC is required.' },
        { q: 'Can both parents be on the folio?', a: 'No. A minor folio has one holder, the child, and one guardian who operates it. Joint holders are not allowed.' },
      ]},

      { type: 'heading', text: 'Sources' },
      { type: 'sources', items: [
        { label: 'SEBI: Investment in units of mutual funds in the name of minor through guardian (12 May 2023)', url: 'https://www.sebi.gov.in/legal/circulars/may-2023/investment-in-units-of-mutual-funds-in-the-name-of-minor-through-guardian_71148.html' },
        { label: 'SEBI: Investment in the name of minor through guardian and transmission of units (24 December 2019)', url: 'https://www.sebi.gov.in/legal/circulars/dec-2019/circular-on-investment-in-units-of-mutual-funds-in-the-name-of-minor-through-guardian-and-ease-of-process-for-transmission-of-units_45457.html' },
        { label: 'PPFAS Mutual Fund: Investments made on behalf of minors', url: 'https://amc.ppfas.com/faqs/investments-made-on-behalf-of-minors/index.php' },
        { label: 'Zerodha Fund House: Invest in your child\'s name without a minor bank account (August 2026)', url: 'https://www.zerodhafundhouse.com/blog/invest-in-your-childs-name-without-a-minor-bank-account/' },
      ]},
    ],
  },
  {
    id: 5,
    slug: 'myths-that-delay-action',
    datePublished: '2026-06-10T23:41:53+05:30',
    title: '"My FD Is Enough." And Other Things We Tell Ourselves.',
    subtitle: 'A few comfortable stories Indian parents tell themselves — and an honest look at what they actually cost.',
    topic: 'Getting started',
    readingTime: '5 min',
    metaDescription: 'Four beliefs that delay Indian parents from investing for their children: FDs, age myths, risk fears and the "I\'ll get it later" trap. With real numbers.',
    body: [
      { type: 'paragraph', text: "Indian parents care deeply about their children's futures. But there are a few comfortable stories we tell ourselves that quietly delay action. Let's look at them honestly." },
      { type: 'heading', text: '"My FD will be enough."' },
      { type: 'paragraph', text: 'FD rates: 6–7%. Inflation: 5–6%. After tax, your real return is close to zero.' },
      { type: 'pull_quote', text: '₹1,000/month SIP for 18 years at 12% → ~₹7.5 lakh. Same in an FD at 6.5% → ~₹3.5 lakh.' },
      { type: 'paragraph', text: "The gap is not small. It's the difference between college with a loan and without one." },
      { type: 'heading', text: '"They\'re too young. I\'ll start when they\'re older."' },
      { type: 'paragraph', text: "This is the most expensive myth. The single biggest variable in long-term investing is **time** — not amount, not fund selection. Time. Every year you delay is compounding you're giving away. There is no such thing as too young to start investing in a child's name." },
      { type: 'heading', text: '"Mutual funds are risky."' },
      { type: 'paragraph', text: 'Risk is time-dependent. With a 15-year horizon, short-term volatility is noise. The Nifty 50 has returned ~12–14% CAGR over 20 years despite crashes in 2008 and 2020. Past performance may or may not be sustained in future, and equity funds can lose money.' },
      { type: 'paragraph', text: "For a goal that's 15 years away, **staying in cash or FDs is the risky choice**." },
      { type: 'heading', text: '"I don\'t understand it well enough."' },
      { type: 'paragraph', text: 'You don\'t need to. A Nifty 50 index fund requires almost no expertise. Start a SIP, let it run, review once a year.' },
      { type: 'pull_quote', text: "Don't let perfect understanding delay imperfect action." },
      { type: 'paragraph', text: 'Starting simply today beats understanding everything in two years.' },
      { type: 'paragraph', text: "If you want the full picture first (documents, tax, and what happens at 18), it's in one place: [Mutual funds for your child: the complete guide](/blog/mutual-funds-for-your-child/)." },
    ],
  },
  {
    id: 6,
    slug: 'the-day-your-child-turns-18',
    datePublished: '2026-06-10T23:41:53+05:30',
    dateModified: '2026-11-09T18:00:00+05:30',
    title: 'The day your child turns 18: changing a mutual fund from minor to major',
    seoTitle: 'Minor to major mutual fund: what happens at 18 | Nuberry',
    subtitle: 'What happens to the folio on the birthday, what your child needs, the form for each fund house, and the online routes. Checked against SEBI and AMFI rules as of November 2026.',
    topic: 'How it works',
    readingTime: '7 min',
    metaDescription: "What happens to a minor's mutual fund at 18: the frozen folio, stopped SIPs, the documents, the minor to major (MAM) form for each fund house and online options.",
    waitlist: {
      title: 'Want a reminder before the birthday?',
      text: "Nuberry is building a simpler way to invest in your child's name, including a heads-up well before they turn 18. Join the waitlist and we'll tell you the day it opens.",
    },
    body: [
      // AKSHAY: rewrite these two paragraphs in your own voice.
      { type: 'paragraph', text: "On your child's 18th birthday, their mutual fund folio is frozen and every SIP on it stops. Nothing can be bought, sold or switched until your child, now an adult, sends the fund house a change of status request with their own PAN, KYC and bank account." },
      { type: 'paragraph', text: "None of that is hard, but it takes a few weeks, and most of it can be done before the birthday. This page covers what changes on the day, what your child needs, the form for each fund house, and the online routes that skip the paperwork. For the bigger picture (opening the folio, tax, what most guides get wrong), read [Mutual funds for your child: the complete guide](/blog/mutual-funds-for-your-child/)." },
      {
        type: 'key_facts', title: 'Key facts',
        items: [
          '**On the 18th birthday:** the guardian can no longer operate the folio, and no new transactions are allowed until the status changes.',
          '**SIPs, STPs and SWPs:** stop from that date. Your child registers fresh ones after the change.',
          '**Dividends:** still paid or reinvested as usual, because they are not a transaction your child asks for.',
          "**What your child needs:** their own PAN, their own KYC, a bank account in their own name, and a nomination choice.",
          '**The form:** a change of status from minor to major (MAM) form, one per fund house, covering up to nine folios. The fund house sends it at least 30 days before the birthday.',
          '**Tax:** income after the 18th birthday is taxed in your child\'s name, not clubbed with yours.',
        ],
      },

      { type: 'heading', text: 'What happens to a mutual fund when a minor turns 18?' },
      { type: 'paragraph', text: "SEBI and AMFI set the same rules for every fund house. At least 30 days before the birthday, the fund house sends a notice to the folio's registered address with the change of status form. From the birthday itself:" },
      { type: 'bullet_list', items: [
        '**The guardian is locked out.** You can no longer redeem, switch or invest on the folio as guardian.',
        '**The folio is frozen.** No purchase, redemption or switch goes through until the status is changed to major.',
        '**Systematic plans stop.** A SIP, STP or SWP on a minor folio only runs until the day before the birthday, even if the mandate was signed for longer.',
        '**Dividends carry on.** A fund on the IDCW option still pays out to the registered bank account, or reinvests.',
      ]},
      { type: 'paragraph', text: "Nothing is lost while the folio is frozen. The units stay invested and keep moving with the market. What you lose is the SIP instalments that don't happen, and the ability to redeem if your child needs the money soon after 18, for example for college fees." },

      { type: 'heading', text: 'What documents does your child need?' },
      { type: 'table', text: true, headers: ['What', 'What works', 'Notes'], rows: [
        ['PAN', "Your child's own PAN card", "If they already have a minor PAN, they keep the same number. Update the photo and signature instead of applying for a new one"],
        ['KYC', "KYC in your child's own name, with a KYC registration agency (KRA)", "Your KYC as guardian does not carry over. Online KYC with PAN and Aadhaar is the quickest route"],
        ['Bank account', "A cancelled cheque with your child's name printed on it, or a recent bank statement or passbook", "Convert the minor account to a regular one, or open a new account in their name"],
        ['Signature attestation', 'Signed by you as the guardian on record, their bank, a notary, or a Judicial Magistrate First Class', "Needed for the paper form. The guardian's signature is usually the easiest"],
        ['Nomination', 'A nomination, or a signed choice not to nominate', 'Part of the form'],
        ['Fresh SIP mandate', 'A new SIP form and bank mandate', 'Only if the SIP should continue'],
      ], caption: 'Based on AMFI guidelines for change of status from minor to major. Fund houses may ask for small additions, so check their form.' },

      { type: 'heading', text: 'How do you change a mutual fund from minor to major?' },
      {
        type: 'step', number: 1, title: 'Sort out the PAN (a few months before)',
        text: "If your child has no PAN, apply for one. If they have a PAN issued as a minor, update their photo and signature on it. The number stays the same.",
      },
      {
        type: 'step', number: 2, title: 'Get the bank account ready',
        text: "Most banks convert a minor account to a regular one when the child turns 18, with fresh KYC and a new signature, and some ask for both of you at the branch. If there is no account in your child's name, open one. You need a cheque book with their name printed on it, or a statement.",
      },
      {
        type: 'step', number: 3, title: "Complete your child's own KYC",
        text: "Your child does KYC as an individual, with their PAN and Aadhaar. Check the name and date of birth match the PAN exactly. A mismatch is the most common reason a request bounces.",
      },
      {
        type: 'step', number: 4, title: 'Submit the change of status',
        text: 'Online through MFCentral or the registrar, where your folio is eligible, or on paper with the MAM form at the fund house or its registrar (CAMS or KFintech). One form per fund house, listing up to nine folios. The links are in the next section.',
      },
      {
        type: 'step', number: 5, title: 'Restart the SIP',
        text: "Once the folio shows your child as the holder, they register a new SIP and bank mandate in their own name. Check the nominee too. From here, every decision on the money is theirs.",
      },
      { type: 'pull_quote', text: 'Start at 17 and a half. The paperwork waits for no one, but the birthday does not wait for the paperwork.' },

      { type: 'heading', text: 'Where do you get the minor to major form for each fund house?' },
      { type: 'paragraph', text: "AMFI prescribes one standard change of status form (the MAM form) for every fund house, and many fund houses publish their own copy of it. Use the fund house's version if it has one; otherwise the AMFI form carries the same fields. Send one form to each fund house your child holds, listing every folio with that fund house." },
      { type: 'table', text: true, headers: ['Fund house', 'Form'], rows: [
        ['Any fund house', '[AMFI standard MAM form](https://www.amfiindia.com/Themes/Theme1/downloads/MAMForm-forchangeinstatusfromMinortoMajor.pdf)'],
        ['Nippon India Mutual Fund', '"Change of Status from Minor to Major", on the [Nippon India forms page](https://mf.nipponindiaim.com/investor-services/downloads/forms) under Update Folio Details'],
        ['HDFC Mutual Fund', '[Request for change in status from Minor to Major](https://files.hdfcfund.com/s3fs-public/2025-06/Request%20for%20change%20in%20status%20from%20Minor%20to%20Major%20100625%20V1%20Editable%20form.pdf)'],
        ['Bajaj Finserv Mutual Fund', '[Request for change in status from Minor to Major](https://www.bajajamc.com/sites/default/files/2025-09/minor_to_major_form.pdf)'],
        ['Mirae Asset Mutual Fund', '[Minor to Major Application Form](https://www.miraeassetmf.co.in/docs/default-source/service-forms/minor-to-major-application-form.pdf?sfvrsn=58a238e_2)'],
        ['SBI Mutual Fund', '[MAM form for change in status from minor to major](https://www.sbimf.com/docs/default-source/pdf/form/existinginvestor/minor-to-major-change-forms/mam-form--for-change-in-status-from-minor-to-major.pdf?sfvrsn=e5f2456f_2)'],
        ['UTI Mutual Fund', '[Form for updation of status minor to major](https://doc.utimf.com/v1/AUTH_5b9dd00b-8132-4a21-a800-711111810cee/UTIContainer/UTI_MaM_Form20180406-152237.pdf). An older format with no FATCA section; if UTI asks for more, use the AMFI form'],
        ['quant Mutual Fund', '[Request for change in status from Minor to Major](https://quantmutual.com/Admin/Pdf/Request_for_change_in_status_from_Minor_to_Major.pdf)'],
        ['Fund houses serviced by CAMS', '[CAMS minor attaining majority request form](https://www.camsonline.com/Investors/Service-requests/Service-Request-Forms/Minor-attains-Major)'],
      ], caption: 'Links checked November 2026. Fund houses update their forms, so if a link breaks, search the fund house site for "minor to major".' },
      { type: 'paragraph', text: "For Kotak, ICICI Prudential or any fund house not listed, use the AMFI form and submit it at the fund house's branch or its registrar's service centre. Your child's account statement names the registrar. The [AMFI page on minors attaining majority](https://amfiindia.com/investor-corner/investor-center/Minor_attaining_Majority.html) has the full checklist." },

      { type: 'heading', text: 'Can you do it online?' },
      { type: 'paragraph', text: "Often, yes. **MFCentral**, the common platform run by the two registrars CAMS and KFintech, lists minor to major as a service request across fund houses. It needs your child's KYC done first and works through the guardian's login. **CAMS** also runs its own online request for the funds it services, with OTP checks and an eSign from the guardian, and needs both of you present." },
      { type: 'paragraph', text: "Online requests depend on the folio's details being complete and matching, so not every folio qualifies. If yours doesn't, the paper form always works." },

      { type: 'heading', text: 'What most guides get wrong' },
      // AKSHAY: this section is where your own view goes. Rewrite it in your voice.
      { type: 'subheading', text: '"It happens automatically at 18"' },
      { type: 'paragraph', text: "It doesn't. The fund house sends a reminder, but nothing changes until your child applies. A folio can sit frozen for years if nobody does. The money is safe, but the SIP isn't running and nobody can take money out." },
      { type: 'subheading', text: '"Do it after the birthday"' },
      { type: 'paragraph', text: "The form can only be processed once your child is 18, but everything it needs can be ready before. PAN updates and bank conversions take weeks. Get them done in the months before, and the form is a ten-minute job on the day." },
      { type: 'subheading', text: '"One form covers all their funds"' },
      { type: 'paragraph', text: "One form covers all the folios at one fund house, up to nine. If your child holds funds from three fund houses, that is three forms, or three requests online." },

      { type: 'heading', text: "What changes for tax?" },
      { type: 'paragraph', text: "Income that arises after the 18th birthday is your child's own, not clubbed with yours. For a mutual fund, the gain arises on the date of redemption, so units bought years ago and redeemed after 18 are taxed in your child's name, with their own basic exemption and their own ₹1.25 lakh a year exemption on equity gains. A redemption after 18 has to wait for the status change, which is one more reason to start early. The full detail is in [Tax on investments in your child's name: clubbing explained](/blog/tax-on-investments-in-childs-name-clubbing/). Tax rules change, so check with a tax professional before you redeem." },

      // AKSHAY: the original story, kept. Trim or rewrite as you like.
      { type: 'heading', text: 'Two versions of that day' },
      { type: 'paragraph', text: "Picture the birthday. You're sitting together, chai or dinner somewhere, and you say: we started investing for you the day you were born. Here's what it looks like now." },
      { type: 'paragraph', text: "**The first version:** a statement in their name. Eighteen years of SIPs that never stopped. A number that can cover college, fund a first attempt at something, or simply mean they don't start adult life owing anyone. It's already theirs. The change of status form is the last thing you sign as their guardian." },
      { type: 'paragraph', text: "**The second version:** the FD you kept renewing, dipped into for a renovation one year and something urgent another. What's left covers some of the fees. You loved them exactly as much. The outcome is just different." },
      { type: 'pull_quote', text: 'The message is worth more than the corpus. The corpus is just the proof.' },

      { type: 'heading', text: 'Frequently asked questions' },
      { type: 'faq', items: [
        { q: 'What happens to a minor\'s mutual fund when they turn 18?', a: "The folio is frozen from the 18th birthday. The guardian can no longer operate it, SIPs, STPs and SWPs stop, and no new transactions are allowed until the status is changed from minor to major. Dividends continue to be paid or reinvested." },
        { q: 'What documents are needed to change a mutual fund from minor to major?', a: "The change of status (MAM) form, a copy of your child's PAN, their KYC acknowledgment, a cancelled cheque with their name printed on it or a recent bank statement, a nomination choice, and the signature attested by the guardian on record, their bank, a notary or a Judicial Magistrate First Class." },
        { q: 'Is the minor to major form different for each fund house?', a: "AMFI prescribes one standard format and many fund houses publish their own copy. You send one form to each fund house your child holds, listing up to nine folios with that fund house." },
        { q: 'Can I change a mutual fund from minor to major online?', a: "Often. MFCentral lists it as a service request across fund houses once your child's KYC is done, and CAMS runs an online request with OTP and the guardian's eSign for the funds it services. If a folio isn't eligible online, the paper form works." },
        { q: 'Does my child need a new PAN at 18?', a: "No. If they were issued a PAN as a minor, the number stays the same. Update the photo and signature on it before the change of status." },
        { q: 'What happens to the SIP after the status changes?', a: 'It does not restart on its own. Your child registers a new SIP and bank mandate in their own name.' },
      ]},

      { type: 'heading', text: 'Sources' },
      { type: 'sources', items: [
        { label: 'AMFI: Updated guidelines on minor accounts and change of status from minor to major (Best Practices Circular 86, 16 July 2020)', url: 'https://www.amfiindia.com/Themes/Theme1/downloads/circulars/SEBI/CU116-AMFI%20BP%20cir%20No.%2086-16-Jul-2020-%20Updated%20Guidelines%20reg.%20Minors%20Account%20and%20change%20of%20status%20from%20Minor%20to%20Major.pdf' },
        { label: 'AMFI: Standard MAM form for change in status from minor to major', url: 'https://www.amfiindia.com/Themes/Theme1/downloads/MAMForm-forchangeinstatusfromMinortoMajor.pdf' },
        { label: 'AMFI: Minor attaining majority', url: 'https://amfiindia.com/investor-corner/investor-center/Minor_attaining_Majority.html' },
        { label: 'SEBI: Investment in the name of minor through guardian and transmission of units (24 December 2019)', url: 'https://www.sebi.gov.in/legal/circulars/dec-2019/circular-on-investment-in-units-of-mutual-funds-in-the-name-of-minor-through-guardian-and-ease-of-process-for-transmission-of-units_45457.html' },
        { label: 'HDFC Mutual Fund: Investments made on behalf of minors', url: 'https://www.hdfcfund.com/investor-services/investments-made-behalf-minors' },
        { label: 'Tata Mutual Fund: How to convert a minor\'s folio to major status', url: 'https://www.tatamutualfund.com/blogs/how-convert-minors-mutual-fund-folio-major-status-step-step-guide' },
        { label: 'Value Research: How to simplify your fund transactions with MFCentral', url: 'https://www.valueresearchonline.com/stories/50100/how-to-simplify-your-fund-transactions-with-mfcentral/' },
      ]},
    ],
  },
]

export function getBlogBySlug(slug) {
  return blogs.find(b => b.slug === slug)
}
