# batch-01

Placeholder for the first supplied discovery batch bundle. Drop the externally
prepared, verified payload here:

```
imports/discovery-batches/batch-01/
  discoveries.json     # array of Discovery objects
  image-rights.csv     # one row per discovery
  images/<slug>.webp   # one hero image per entry
```

Then audit and import:

```bash
npm run audit:discovery-batch -- imports/discovery-batches/batch-01
npm run import:discoveries -- imports/discovery-batches/batch-01 --dry-run
npm run import:discoveries -- imports/discovery-batches/batch-01
```

See `../README.md` for the full bundle contract and validation rules. The
payload files are git-ignored; only this README and `images/.gitkeep` are
tracked.
