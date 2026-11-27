# Atlas update 39

Added 9 source-verified discoveries with original diagrams. Production publication date is 2026-11-27 UTC.

The batch audit, importer dry run and local production build passed. Each article includes primary evidence. Original-image rights records are in `docs/discovery-image-rights/atlas-2026-11-27-39.csv` and the matching JSON file.

The local preview for batches 39–41 had 470 discovery articles and 994 unique sitemap URLs. All 994 returned HTTP 200 and preserved the 940 destinations live during the test. Canonicals, indexability and original images passed for all 24 new articles. The Broken Hill regional proxy stayed noindex and outside the sitemap.

Chrome at 390 × 844 showed no horizontal overflow on the homepage, map and timeline. The Isle of Wight marker opened a working article link by click and keyboard. Against the 422-discovery production baseline, compressed HTML changed from 74,697 to 79,723 bytes on the homepage, 34,656 to 37,242 on the map and 481,286 to 525,389 on the timeline. The local build retried one existing organization route and completed successfully.
