"""Inflation view (CPI combined, RBI; chained 2012->2024 base at Jan 2025).
Real IRR: each Rs 1,000 instalment restated in end-month rupees by CPI, vs end value."""
import csv, sys, statistics as st, importlib.util
S = sys.argv[1]
spec = importlib.util.spec_from_file_location('sip18', f'{S}/sip18.py')
sys.argv = ['x', f'{S}/data/nifty50_tri_daily.csv']; m = importlib.util.module_from_spec(spec); spec.loader.exec_module(m)
cpi = {tuple(map(int, r['month'].split('-'))): (float(r['cpi_general']), float(r['cpi_education'])) for r in csv.DictReader(open(f'{S}/data/cpi_monthly.csv'))}

def cagr(a, b, months): return (b / a) ** (12 / months) - 1
k0, k1 = min(cpi), max(cpi); n = (k1[0] - k0[0]) * 12 + k1[1] - k0[1]
g = cagr(cpi[k0][0], cpi[k1][0], n); e = cagr(cpi[k0][1], cpi[k1][1], n)
print(f'CPI {k0}->{k1} ({n} months): general {g*100:.2f}%/yr, education {e*100:.2f}%/yr, '
      f'ratios {cpi[k1][0]/cpi[k0][0]:.3f}x / {cpi[k1][1]/cpi[k0][1]:.3f}x')
for a, b in (((2011,1),(2016,1)),((2016,1),(2021,1)),((2021,1),(2026,1))):
    nn = (b[0]-a[0])*12 + b[1]-a[1]
    print(f'  {a}->{b}: general {cagr(cpi[a][0],cpi[b][0],nn)*100:.2f}%  education {cagr(cpi[a][1],cpi[b][1],nn)*100:.2f}%')

def real_irr(start, n, which):
    end = m.add_months(start, n)
    fv = m.equity_value(start, n, 0.01)
    # solve r such that sum(1000*(1+r)^((n-i)/12) * cpi_end/cpi_i) ... instead deflate cash flows
    flows = [m.SIP * cpi[end][which] / cpi[m.add_months(start, i)][which] for i in range(n)]
    lo, hi = -0.5, 1.0
    for _ in range(200):
        mid = (lo + hi) / 2; mr = (1 + mid) ** (1/12) - 1
        v = sum(f * (1 + mr) ** (n - i) for i, f in enumerate(flows))
        lo, hi = (mid, hi) if v < fv else (lo, mid)
    return mid, fv, m.irr(n, fv)

for yrs in (10, 15):
    n = yrs * 12
    starts = [k for k in m.months if k >= (2011, 1) and m.add_months(k, n) in cpi and m.add_months(k, n) in m.first]
    rows = [(s, *real_irr(s, n, 0), real_irr(s, n, 1)[0]) for s in starts]
    nom = [r[3] for r in rows]; rg = [r[1] for r in rows]; re_ = [r[4] for r in rows]
    print(f'\n{yrs}-yr SIPs starting 2011+ ({len(rows)} windows, {starts[0]} to {starts[-1]}), after 1% cost:')
    print(f'  nominal IRR median {st.median(nom)*100:.1f}% (min {min(nom)*100:.1f}, max {max(nom)*100:.1f})')
    print(f'  real vs general CPI median {st.median(rg)*100:.1f}% (min {min(rg)*100:.1f}, max {max(rg)*100:.1f})')
    print(f'  real vs education CPI median {st.median(re_)*100:.1f}% (min {min(re_)*100:.1f}, max {max(re_)*100:.1f})')
    neg = sum(x < 0 for x in rg); print(f'  windows with negative real return: {neg}/{len(rows)}')
