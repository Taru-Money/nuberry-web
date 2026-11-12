"""Real (after-inflation) returns for 18-year windows using CPI-IW (Labour Bureau).
Annual FY index chained to 2016=100 with official linking factors (1982->2001: 4.63,
2001->2016: 2.88). Each FY value placed at its midpoint (1 Oct), log-linear monthly
interpolation; after Oct 2025 extended with RBI CPI-combined monthly growth."""
import csv, sys, math, statistics as st, importlib.util, openpyxl, warnings
warnings.filterwarnings('ignore')
S, XL = sys.argv[1], sys.argv[2]
spec = importlib.util.spec_from_file_location('sip18', f'{S}/sip18.py')
sys.argv = ['x', f'{S}/data/nifty50_tri_daily.csv']; m = importlib.util.module_from_spec(spec); spec.loader.exec_module(m)

ws = openpyxl.load_workbook(XL, data_only=True).active
annual = {}; base = None; years = None
LINK = {'2016': 1.0, '2001': 2.88, '1982': 2.88 * 4.63}
for row in ws.iter_rows(values_only=True):
    r = [c for c in row if c is not None]
    if not r: continue
    s = str(r[0])
    if s.startswith('Base Year'):
        base = next((b for b in LINK if b in s), None)
    elif s == 'Item Code':
        years = [int(str(y).strip()[:4]) for y in r[2:]]
    elif s == 'A)' and base:
        for fy, v in zip(years, r[2:]):
            annual.setdefault(fy, v / LINK[base])   # newer base wins (listed first)
fys = sorted(k for k in annual if k >= 1995)
print('CPI-IW chained (2016=100):', {k: round(annual[k], 1) for k in fys if k in (1999, 2004, 2005, 2019, 2020, 2025)})
for a, b in ((2004, 2005), (2019, 2020)):
    print(f'  splice check FY{a}->FY{b}: {annual[b]/annual[a]*100-100:.1f}%')

# monthly interpolation, anchor (fy, Oct)
anchors = [((fy, 10), annual[fy]) for fy in fys]
def mi(k): return k[0] * 12 + k[1] - 1
cpi = {}
for (k0, v0), (k1, v1) in zip(anchors, anchors[1:]):
    for t in range(mi(k0), mi(k1) + 1):
        w = (t - mi(k0)) / (mi(k1) - mi(k0))
        cpi[(t // 12, t % 12 + 1)] = math.exp(math.log(v0) * (1 - w) + math.log(v1) * w)
# before first anchor: extend back with first-year growth
g0 = (anchors[1][1] / anchors[0][1]) ** (1 / 12)
for t in range(mi((1999, 1)), mi(anchors[0][0])):
    cpi[(t // 12, t % 12 + 1)] = anchors[0][1] / g0 ** (mi(anchors[0][0]) - t)
# after last anchor: RBI CPI combined monthly growth
rbi = {tuple(map(int, r['month'].split('-'))): float(r['cpi_general']) for r in csv.DictReader(open(f'{S}/data/cpi_monthly.csv'))}
last = anchors[-1][0]; t = mi(last)
while True:
    t += 1; k = (t // 12, t % 12 + 1); prev = ((t - 1) // 12, (t - 1) % 12 + 1)
    if k > (2026, 11): break
    src_k = k if k in rbi else max(rbi); src_p = prev if prev in rbi else max(rbi)
    g = rbi[src_k] / rbi[src_p] if k in rbi else (rbi[max(rbi)] / rbi[(2025, 9)]) ** (1 / 12)
    cpi[k] = cpi[prev] * g

def real_irr(flows, n, fv):
    lo, hi = -0.5, 1.0
    for _ in range(200):
        mid = (lo + hi) / 2; mr = (1 + mid) ** (1 / 12) - 1
        v = sum(f * (1 + mr) ** (n - i) for i, f in enumerate(flows))
        lo, hi = (mid, hi) if v < fv else (lo, mid)
    return mid

n = 216
rows = []
for r in csv.DictReader(open(f'{S}/out/sip_18y.csv')):
    s = tuple(map(int, r['start'].split('-'))); e = m.add_months(s, n)
    flows = [m.SIP * cpi[e] / cpi[m.add_months(s, i)] for i in range(n)]
    contrib_real = sum(flows)
    out = {'start': r['start'], 'end': f'{e[0]}-{e[1]:02d}', 'infl_pa': (cpi[e] / cpi[s]) ** (12 / n) - 1,
           'contrib_in_end_rupees': contrib_real}
    for key in ('eq_cost1_posttax', 'ppf', 'fd_post30', 'fd'):
        fv = float(r[key]); out[f'real_irr_{key}'] = real_irr(flows, n, fv); out[f'real_multiple_{key}'] = fv / contrib_real
    rows.append(out)
with open(f'{S}/out/sip_18y_real.csv', 'w', newline='') as f:
    w = csv.DictWriter(f, fieldnames=list(rows[0])); w.writeheader()
    for r in rows: w.writerow({k: (round(v, 5) if isinstance(v, float) else v) for k, v in r.items()})

print(f'\n18-year windows: {len(rows)}; inflation over window median {st.median(r["infl_pa"] for r in rows)*100:.2f}%/yr '
      f'(range {min(r["infl_pa"] for r in rows)*100:.2f} to {max(r["infl_pa"] for r in rows)*100:.2f})')
print(f'Rs 2.16L contributed, restated in end-year rupees: median Rs {st.median(r["contrib_in_end_rupees"] for r in rows):,.0f}')
for key, lab in (('eq_cost1_posttax', 'Nifty SIP, 1% cost, after LTCG'), ('ppf', 'PPF'), ('fd', 'FD pre-tax'), ('fd_post30', 'FD after 30% tax')):
    xs = [r[f'real_irr_{key}'] for r in rows]; mu = [r[f'real_multiple_{key}'] for r in rows]
    print(f'{lab:<32} real return median {st.median(xs)*100:5.2f}%  min {min(xs)*100:5.2f}%  max {max(xs)*100:5.2f}% | '
          f'real multiple median {st.median(mu):.2f}x  | windows below inflation: {sum(x < 0 for x in xs)}/{len(xs)}')
