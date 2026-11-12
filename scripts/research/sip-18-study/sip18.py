"""Rolling SIP study: Rs 1,000 on the first trading day of each month.

Equity = Nifty 50 TRI (official, niftyindices.com). Optional annual cost drag.
PPF and FD use year-wise rate schedules (see RATE NOTES; FD is an approximation
to be replaced with RBI data before publication).
"""
import csv, sys, statistics as st
from datetime import date

DATA = sys.argv[1]
SIP = 1000

# ---- load TRI, first trading day of each month ----
tri = [(date.fromisoformat(r['date']), float(r['tri'])) for r in csv.DictReader(open(DATA))]
first = {}
for d, v in tri:
    first.setdefault((d.year, d.month), (d, v))
months = sorted(first)  # (y, m) keys
# 1999-06 only has 30 Jun, start from 1999-07
months = [k for k in months if k >= (1999, 7)]
last_d, last_v = tri[-1]

def add_months(k, n):
    y, m = k; t = y * 12 + (m - 1) + n
    return (t // 12, t % 12 + 1)

# ---- rate schedules (annual %, effective from (y, m)) ----
# PPF: Govt notifications. Tax-free.
PPF = [((1999,1),12.0),((2000,1),11.0),((2001,3),9.5),((2002,3),9.0),((2003,3),8.0),
       ((2011,12),8.6),((2012,4),8.8),((2013,4),8.7),((2016,4),8.1),((2016,10),8.0),
       ((2017,1),7.9),((2017,7),7.8),((2018,1),7.6),((2018,10),8.0),((2019,7),7.9),
       ((2020,4),7.1)]
# FD: RBI Handbook "Structure of Interest Rates", five major banks, term deposits
# 1-3 years, midpoint of range. Value labelled FY Y-(Y+1) is applied Apr Y to Mar Y+1.
# Months before Apr 2000 use the FY2000-01 value (table starts there).
import os
_fd = {int(r['fy_start']): float(r['mid']) for r in csv.DictReader(open(os.path.join(os.path.dirname(DATA), 'fd_rates.csv')))}
FD = [((fy, 4), v) for fy, v in sorted(_fd.items())]
FD[0] = ((1990, 1), FD[0][1])

def rate(sched, k):
    r = sched[0][1]
    for start, v in sched:
        if k >= start: r = v
    return r

def equity_value(start, n, drag=0.0):
    """Value at end of n months. drag = annual cost (e.g. 0.01)."""
    units = 0.0
    md = (1 - drag) ** (1 / 12)
    for i in range(n):
        k = add_months(start, i)
        _, px = first[k]
        units = units * md + SIP / px
    end_k = add_months(start, n)
    _, end_px = first[end_k]
    units *= md
    return units * end_px

def deposit_value(start, n, sched, tax=0.0, annual_comp=False):
    bal = 0.0; accrued = 0.0
    for i in range(n):
        k = add_months(start, i)
        bal += SIP
        r = rate(sched, k) / 100 * (1 - tax)
        if annual_comp:
            accrued += bal * r / 12
            if k[1] == 3:  # PPF FY ends March
                bal += accrued; accrued = 0
        else:
            bal *= (1 + r / 4) ** (1 / 3)  # quarterly compounding, monthly step
    return bal + accrued

def irr(n, fv):
    lo, hi = -0.5, 1.0
    for _ in range(200):
        mid = (lo + hi) / 2
        mr = (1 + mid) ** (1 / 12) - 1
        v = sum(SIP * (1 + mr) ** (n - i) for i in range(n))
        lo, hi = (mid, hi) if v < fv else (lo, mid)
    return mid

def run(years):
    n = years * 12
    starts = [k for k in months if add_months(k, n) in first]
    res = []
    for s in starts:
        eq = equity_value(s, n)
        eq1 = equity_value(s, n, 0.01)
        ppf = deposit_value(s, n, PPF, annual_comp=True)
        fd = deposit_value(s, n, FD)
        fdt = deposit_value(s, n, FD, tax=0.30)
        # Equity tax at withdrawal under current rules: 12.5% LTCG on gains above Rs 1.25 lakh
        eq1t = eq1 - 0.125 * max(0.0, eq1 - n * SIP - 125000)
        res.append(dict(start=f'{s[0]}-{s[1]:02d}', eq=eq, eq_cost1=eq1, eq_cost1_posttax=eq1t, ppf=ppf, fd=fd, fd_post30=fdt,
                        irr=irr(n, eq), irr_cost1=irr(n, eq1)))
    return n, res

if __name__ == '__main__':
    out = sys.argv[2]
    for yrs in (18, 15, 10):
        n, res = run(yrs)
        with open(f'{out}/sip_{yrs}y.csv', 'w', newline='') as f:
            w = csv.DictWriter(f, fieldnames=list(res[0])); w.writeheader()
            for r in res: w.writerow({k: (round(v, 4) if isinstance(v, float) else v) for k, v in r.items()})
        eq = [r['eq'] for r in res]; eq1 = [r['eq_cost1'] for r in res]
        def q(xs, p): xs = sorted(xs); return xs[int(p * (len(xs) - 1))]
        best = max(res, key=lambda r: r['eq']); worst = min(res, key=lambda r: r['eq'])
        print(f'\n=== {yrs}-year SIP, Rs {SIP}/month, invested Rs {n*SIP:,} | {len(res)} windows ({res[0]["start"]} to {res[-1]["start"]}) ===')
        print(f'Equity (TRI, no cost):  median {st.median(eq):>12,.0f}  p10 {q(eq,.1):>12,.0f}  p90 {q(eq,.9):>12,.0f}')
        print(f'   best  {best["eq"]:>12,.0f} start {best["start"]} IRR {best["irr"]*100:.1f}%')
        print(f'   worst {worst["eq"]:>12,.0f} start {worst["start"]} IRR {worst["irr"]*100:.1f}%')
        print(f'   IRR range {min(r["irr"] for r in res)*100:.1f}% to {max(r["irr"] for r in res)*100:.1f}%, median {st.median(r["irr"] for r in res)*100:.1f}%')
        print(f'Equity (1% cost):       median {st.median(eq1):>12,.0f}  min {min(eq1):>12,.0f}  max {max(eq1):>12,.0f}')
        eqt = [r['eq_cost1_posttax'] for r in res]
        print(f'Equity (1% cost, LTCG):  median {st.median(eqt):>12,.0f}  min {min(eqt):>12,.0f}  max {max(eqt):>12,.0f}')
        for key, lab in (('ppf','PPF (tax-free)'),('fd','FD pre-tax'),('fd_post30','FD after 30% tax')):
            xs = [r[key] for r in res]
            beat = sum(r['eq_cost1_posttax'] > r[key] for r in res)
            print(f'{lab:<22} median {st.median(xs):>12,.0f}  min {min(xs):>12,.0f}  max {max(xs):>12,.0f} | post-tax equity beat it in {beat}/{len(res)}')
        print(f'Equity never below invested amount: {all(e > n*SIP for e in eq1)}; min multiple {min(eq1)/(n*SIP):.2f}x')
