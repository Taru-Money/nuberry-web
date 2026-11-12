# 18-year SIP study: analysis scripts

These produce `src/data/sip18.json` and the files in `public/data/sip-18-study/` for
`/blog/sip-from-birth-to-18-what-the-data-shows/`. Python 3, standard library plus `openpyxl`.

Inputs (not committed; download from the source):

- `data/nifty50_tri_daily.csv` (`date,tri`): Nifty 50 Total Return Index, daily, from
  niftyindices.com > Historical data > Total returns index values. NSE's data is not ours
  to redistribute, so it stays out of this public repo.
- RBI Handbook "Structure of Interest Rates" (.xlsx), RBI CPI table 19 (.xlsx) and the
  Labour Bureau CPI-IW by group, year-end (.xlsx).

Order:

1. `rbi_parse.py <xlsx folder> data/`: writes `data/fd_rates.csv` and `data/cpi_monthly.csv`.
2. `sip18.py data/nifty50_tri_daily.csv out/`: 18, 15 and 10-year windows.
3. `real18.py <dir with sip18.py, data/, out/> <CPI-IW xlsx>`: after-inflation results.
4. `inflation.py <same dir>`: CPI general vs education figures used in the article.
5. `export.py <work dir> <repo root>`: writes `src/data/sip18.json` and the download CSVs.

AKSHAY: the PPF rate schedule in `sip18.py` (the `PPF` list) was entered from the
government notifications by hand. Check each line against the National Savings Institute
history before relying on it. The FD rates come straight from RBI's file.
