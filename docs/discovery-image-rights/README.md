# Discovery image-rights manifests

Permanent, normalized audit manifests written by the discovery import pipeline
(`npm run import:discoveries`). One `<batch-name>.csv` and one
`<batch-name>.json` are committed here for every imported batch, so the rights
provenance of every hero image is preserved independently of the transient
input bundle (which is git-ignored under `imports/discovery-batches/`).

Each row records: `slug`, `title`, `year`, local image path, image source page,
creator or institution, licence or reuse status, image type, image relation,
source download date, `width`, `height`, file size in bytes, `sha-256`, and
notes. The `.json` variant additionally carries `dois` and `primarySourceUrl`
so a future import can be rejected if it re-claims an already-committed slug,
image path, image hash, DOI, or primary-source URL.

These files are generated — do not edit them by hand. They are created and
removed as part of the import transaction, so a failed import leaves this
directory unchanged.
