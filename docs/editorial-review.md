# Editorial review operations (Workstream 0)

The public review fields exist. This workstream fills them **honestly**: an entry
is only labeled "editor reviewed" once a person has checked it against its
sources and recorded a dated reviewer.

## Honest status, always

Every discovery shows a status. When `reviewStatus` is not set on the entry,
`getReviewPresentation()` derives an honest default:

- **Source verified** — the entry has a traceable primary or institutional
  source, but no editorial review has been recorded. (This is the default for
  entries that carry a source.)
- **Preliminary** — no traceable source yet; published for source development.
- **Editor reviewed** — set **only** by an editor, and only with both
  `dateReviewed` and `reviewedBy`. The validator rejects an `editor-reviewed`
  entry that is missing either field, so the label can never overclaim.

Deriving `source-verified` from the presence of a source is a mechanical,
checkable fact — it never asserts a review that did not happen.

## The review queue

Work the catalog in batches (see the Phase 4 operating sequence). For each entry:

1. Open the linked primary/institutional source and confirm the **title, date,
   location, organisation, and scientific name** match the entry.
2. Confirm the image credit and licence, or leave the honest placeholder label.
3. When — and only when — the entry is verified, record on the entry:
   - `reviewStatus: "editor-reviewed"`
   - `dateReviewed: "YYYY-MM-DD"` and `reviewedBy: "<name or team>"`
   - `sourceTier` and `sourceAccessedAt` if confirmed
   - any `correctionHistory` entries for substantive changes
4. Run `npm run validate` — the review invariant and date checks must pass.

Do **not** batch-stamp `editor-reviewed`. An unreviewed entry stays
`source-verified` or `preliminary`; that is the honest state, and it is fine to
publish.

## Checking coverage

`npm run validate` prints a review-coverage summary — a count of entries by
status and how many `editor-reviewed` entries carry a complete dated reviewer
record. Use it to track how much of the catalog has been through real review.
