Nuberry 18-year SIP study: data files
=====================================

Published 12 November 2026 by Nuberry (nuberry.in), a brand of NextGenOS Financial
Services Private Limited, AMFI-registered mutual fund distributor, ARN 367667.
Article: https://nuberry.in/blog/sip-from-birth-to-18-what-the-data-shows/

You are free to use and quote these files with credit to "Nuberry (nuberry.in)" and a
link to the article.

Mutual fund investments are subject to market risks. Read all scheme related documents
carefully. Past performance of an index is not an indication of future returns. Nothing
here is investment advice or a recommendation of any scheme.


Files
-----

nuberry-18-year-sip-windows.csv
  One row per 18-year window (113 windows, SIP start July 1999 to November 2008).
  Rs 1,000 invested on the first trading day of each month for 216 months. Values are
  in rupees in the value month (the month after the 216th instalment).

nuberry-15-year-sip-windows.csv, nuberry-10-year-sip-windows.csv
  The same method over 15 years (149 windows) and 10 years (209 windows).

rbi-five-major-banks-1-3y-deposit-rates.csv
  The fixed deposit rates used: RBI, Handbook of Statistics on the Indian Economy,
  "Structure of Interest Rates", five major banks, term deposits of 1 to 3 years.
  Low, high and midpoint of the published range, as at end March of each year.

rbi-cpi-combined-general-and-education-chained.csv
  RBI CPI (Rural + Urban combined), General index and Education, January 2011 to
  September 2026. The 2012=100 series is chained to the 2024=100 series at January 2025.


Method
------

Equity
  Nifty 50 Total Return Index (dividends reinvested), official daily values from
  niftyindices.com, 30 June 1999 to 11 November 2026. Units bought at the first trading
  day's index value each month. "After 1% cost" deducts 1% a year, monthly, as a stand-in
  for fund expenses and tracking. "After LTCG" applies today's rule at withdrawal:
  12.5% on long-term gains above Rs 1.25 lakh. This is conservative: after 18 the gain is
  the child's own income and may attract less tax.
  The raw index series is not included; it is published by NSE Indices.

PPF
  Rates from Government of India notifications for each quarter or year, interest
  calculated monthly and credited each March. Tax-free.

Fixed deposit
  RBI rate for the financial year applied to every month in it (April to March), compounded
  quarterly. Months before April 2000 use the 2000-01 rate (the table starts there).
  "After tax" deducts tax on interest each year at the stated slab. Interest on a minor's
  FD is clubbed with the parent's income, so the parent's slab applies.

Inflation
  Labour Bureau CPI for Industrial Workers (annual, financial-year), chained to 2016=100
  with the Labour Bureau's linking factors (1982 to 2001: 4.63, 2001 to 2016: 2.88). Each
  year's value is placed at 1 October and interpolated monthly; months after October 2025
  follow RBI's monthly CPI. "Contributions in value-month rupees" restates each Rs 1,000
  instalment in the money of the value month.


Limits
------

- 113 windows overlap heavily and all come from one 27-year stretch of Indian market
  history. They describe what happened, not what will happen.
- The Nifty 50 is one index. Real funds differ in cost, holdings and timing.
- FD rates are end-March snapshots of the five major banks' published range.
- CPI-IW tracks industrial worker households. It is the only official CPI that goes back
  to 1999.
- CPI education is a broad basket of household education spending. It does not
  isolate private higher education.

Questions or corrections: akshay@nuberry.in
