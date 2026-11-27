# Atlas update 33

Added 8 source-verified discoveries with original diagrams. Production publication date is 2026-11-27 UTC.

The batch audit, importer dry run and local production build passed. Each article includes primary evidence. Original-image rights records are in `docs/discovery-image-rights/atlas-2026-11-27-33.csv` and the matching JSON file.

The local preview for batches 33–35 had 422 discovery articles and 940 unique sitemap URLs. All 940 returned HTTP 200, preserving all 873 destinations live during the test and including the preceding 24 articles. Canonicals, indexability and original images passed for all 22 new articles. The Kerguelen proxy hub stayed noindex and outside the sitemap.

Chrome at 390 × 844 showed no horizontal overflow on the homepage, map and timeline. The Cerro Tololo flat-map marker opened a popup linking to its article. Against the 376-article production baseline, compressed HTML changed from 67,691 to 72,315 bytes on the homepage, 31,214 to 33,768 on the map and 427,191 to 471,264 on the timeline. Several pins needed panning or zooming at this width.
