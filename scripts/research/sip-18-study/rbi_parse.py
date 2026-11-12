"""Parse RBI files into data/fd_rates.csv and data/cpi_monthly.csv."""
import sys, csv, openpyxl, warnings
warnings.filterwarnings('ignore')
ATT, OUT = sys.argv[1], sys.argv[2]
MON = {m: i + 1 for i, m in enumerate(['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'])}

# ---- FD: five major banks, term deposits 1-3 years, midpoint. FY label "2000-01" -> as at end March 2001.
wb = openpyxl.load_workbook(f'{ATT}/96da1fb9-Structure_of_Interest_Rates.xlsx', data_only=True)
rows = []
for row in wb.active.iter_rows(min_row=11, values_only=True):
    r = [c for c in row if c is not None]
    if len(r) > 4 and isinstance(r[0], str) and r[0][:4].isdigit():
        fy = int(r[0][:4]); lo, hi = map(float, str(r[3]).split('-'))
        rows.append((fy, lo, hi, (lo + hi) / 2, r[0].strip()))
rows.sort()
with open(f'{OUT}/fd_rates.csv', 'w', newline='') as f:
    w = csv.writer(f); w.writerow(['fy_start', 'label', 'low', 'high', 'mid'])
    for fy, lo, hi, mid, lab in rows: w.writerow([fy, lab, lo, hi, mid])

# ---- CPI combined: General and Education, chained 2012-base -> 2024-base at Jan 2025
wb = openpyxl.load_workbook(f'{ATT}/fcdde99c-1794466280127_RBIB_Table_No._19___Consumer_Price_Index_Base_2010100.xlsx', data_only=True)
def series(sheet, labels):
    out = {}
    for row in wb[sheet].iter_rows(min_row=8, values_only=True):
        r = [c for c in row if c is not None]
        if len(r) < 5 or not isinstance(r[0], str) or '-' not in r[0]: continue
        mon, desc, status = r[0].strip(), str(r[1]).strip(), r[2]
        for key, lab in labels.items():
            if desc == lab:
                vals = [v for v in r[3:]]
                idx = vals[-2]  # last index column = Combined
                try: idx = float(idx)
                except (TypeError, ValueError): continue
                m, y = mon.split('-'); k = (int(y), MON[m[:3]])
                # prefer Final over Provisional
                if k not in out.get(key, {}) or status == 'Final':
                    out.setdefault(key, {})[k] = idx
    return out
L12 = {'gen': 'A) General Index', 'edu': 'A.6.5) Education'}
L24 = {'gen': 'A) General Index', 'edu': '10 Education services', 'higher': '10.4 Higher education'}
back = series('CPI - 2012=100 (All India) Back', L12)
s12 = series('CPI - 2012=100 (All India)', L12)
s24 = series('CPI - 2024=100 (All India) (1)', L24)
for k in ('gen', 'edu'):
    for kk, v in back[k].items(): s12[k].setdefault(kk, v)
chain = {}
for k in ('gen', 'edu'):
    base = (2025, 1); f = s12[k][base] / s24[k][base]
    ser = {kk: v for kk, v in s12[k].items() if kk < base}
    ser.update({kk: v * f for kk, v in s24[k].items()})
    chain[k] = ser
months = sorted(set(chain['gen']) & set(chain['edu']))
with open(f'{OUT}/cpi_monthly.csv', 'w', newline='') as f:
    w = csv.writer(f); w.writerow(['month', 'cpi_general', 'cpi_education'])
    for y, m in months: w.writerow([f'{y}-{m:02d}', round(chain['gen'][(y, m)], 3), round(chain['edu'][(y, m)], 3)])
print('FD rows', len(rows), rows[0][4], '->', rows[-1][4])
print('CPI months', len(months), months[0], '->', months[-1])
for k in ('gen', 'edu'):
    print(k, 'Dec2012', s12[k].get((2012, 12)), 'Jan2013', s12[k].get((2013, 1)),
          '| Dec2024', s12[k].get((2024, 12)), 'Jan2025 12-base', s12[k].get((2025, 1)), '24-base', s24[k].get((2025, 1)))
