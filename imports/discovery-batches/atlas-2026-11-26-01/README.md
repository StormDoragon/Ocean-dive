# Atlas update 01

- Baseline was production commit 541438827f715e518bd92329257b1871725cdd3d with 157 discovery articles and 530 distinct sitemap URLs.
- 12 source-checked records passed the existing importer audit and dry-run. 11 are marked source-verified. The LHCb decay entry is marked preliminary because the combined evidence is 3.2 sigma.
- The permanent audit JSON and CSV record every original WebP diagram and its provenance. No image from a source publication was reused.
- The discovery date identifies the result, formal description or agency confirmation described in the article. For space entries the Earth marker is labelled as a mission or observatory proxy.
- The Antarctic titanosaur and AT 2016blu were omitted because they already appear in the production catalog.
- Production publication date will be stamped in UTC for the actual first release.
## Release validation

- Preview commit 659441ce9554372d316bbf2f4eaec4fd4a8e61c6 built successfully. The production-equivalent local server returned HTTP 200 for all 554 sitemap URLs, including all 530 baseline routes.
- All 12 new articles and image files returned HTTP 200. Article canonicals used thenucleon.com. A sample single-entry location hub remained noindex and outside the sitemap.
- Checked the hosted preview homepage, map and timeline at 375 px content width with no horizontal overflow. The flat map opened the Trinidad and Tobago discovery from its marker.
- Mobile-user-agent compressed HTML grew from 36,353 to 36,847 bytes on the home page, from 15,956 to 16,292 on the map and from 185,203 to 194,203 on the timeline. Network timings across localhost and production are not comparable.
- The exact release scope is stamped 2026-11-26 UTC. Keep deployment within this UTC date or update the stamp before merging.
