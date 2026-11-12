"""Step 5: write src/data/sip18.json and public/data/sip-18-study/*.csv.
Usage: python3 export.py <work dir with sip18.py, data/, out/> <repo root>"""
import csv, sys, json, shutil, importlib.util
S, R = sys.argv[1:3]
spec = importlib.util.spec_from_file_location('m', f'{S}/sip18.py'); sys.argv = ['x', f'{S}/data/nifty50_tri_daily.csv']
m = importlib.util.module_from_spec(spec); spec.loader.exec_module(m)
real = {r['start']: r for r in csv.DictReader(open(f'{S}/out/sip_18y_real.csv'))}
rows = []
for r in csv.DictReader(open(f'{S}/out/sip_18y.csv')):
    s = tuple(map(int, r['start'].split('-'))); x = real[r['start']]
    fd = {t: m.deposit_value(s, 216, m.FD, tax=t / 100) for t in (0, 10, 20, 30)}
    rows.append(dict(start=r['start'], end=x['end'], eq_tri=float(r['eq']), eq=float(r['eq_cost1']), ppf=float(r['ppf']),
                     fd0=fd[0], fd10=fd[10], fd20=fd[20], fd30=fd[30], cr=float(x['contrib_in_end_rupees']), infl=float(x['infl_pa'])))
cols = ['start', 'end', 'eq', 'ppf', 'fd0', 'fd10', 'fd20', 'fd30', 'cr']
json.dump({'cols': cols, 'rows': [[r[c] if isinstance(r[c], str) else round(r[c]) for c in cols] for r in rows]},
          open(f'{R}/src/data/sip18.json', 'w'), separators=(',', ':'))
out = f'{R}/public/data/sip-18-study'
with open(f'{out}/nuberry-18-year-sip-windows.csv', 'w', newline='') as f:
    w = csv.writer(f)
    w.writerow(['sip_start_month', 'value_month', 'invested_rs', 'nifty50_tri_no_cost_rs', 'nifty50_after_1pct_cost_rs',
                'nifty50_after_1pct_cost_and_ltcg_rs', 'ppf_rs', 'fd_pretax_rs', 'fd_after_10pct_tax_rs', 'fd_after_20pct_tax_rs',
                'fd_after_30pct_tax_rs', 'contributions_in_value_month_rupees_cpi_iw', 'cpi_iw_inflation_pa_pct'])
    for r in rows:
        ltcg = r['eq'] - 0.125 * max(0, r['eq'] - 216000 - 125000)
        w.writerow([r['start'], r['end'], 216000, round(r['eq_tri']), round(r['eq']), round(ltcg), round(r['ppf']), round(r['fd0']),
                    round(r['fd10']), round(r['fd20']), round(r['fd30']), round(r['cr']), round(r['infl'] * 100, 2)])
for y in (15, 10):
    with open(f'{out}/nuberry-{y}-year-sip-windows.csv', 'w', newline='') as f:
        w = csv.writer(f)
        w.writerow(['sip_start_month', 'invested_rs', 'nifty50_tri_no_cost_rs', 'nifty50_after_1pct_cost_rs', 'nifty50_after_1pct_cost_and_ltcg_rs',
                    'ppf_rs', 'fd_pretax_rs', 'fd_after_30pct_tax_rs', 'nifty50_irr_no_cost_pct', 'nifty50_irr_after_1pct_cost_pct'])
        for r in csv.DictReader(open(f'{S}/out/sip_{y}y.csv')):
            w.writerow([r['start'], y * 12000] + [round(float(r[k])) for k in ('eq', 'eq_cost1', 'eq_cost1_posttax', 'ppf', 'fd', 'fd_post30')]
                       + [round(float(r['irr']) * 100, 2), round(float(r['irr_cost1']) * 100, 2)])
shutil.copy(f'{S}/data/fd_rates.csv', f'{out}/rbi-five-major-banks-1-3y-deposit-rates.csv')
shutil.copy(f'{S}/data/cpi_monthly.csv', f'{out}/rbi-cpi-combined-general-and-education-chained.csv')
