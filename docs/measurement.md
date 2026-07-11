# Search & performance reporting (Workstream 4)

Goal: a recurring report that identifies pages to improve and records the action
taken and its result.

## One-time setup

1. **Google Search Console** — add the property for `NEXT_PUBLIC_SITE_URL`,
   choose the HTML-tag verification method, and copy the token into
   `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`. The verification `<meta>` tag is
   emitted from `src/app/layout.tsx` on the next deploy.
2. **Bing Webmaster Tools** — add the site, use the meta-tag method, and set
   `NEXT_PUBLIC_BING_SITE_VERIFICATION`. (You can also import from Search Console
   once Google is verified.)
3. **Analytics** — connect a privacy-respecting analytics tool (e.g. Plausible,
   Fathom, or GA4) at the hosting layer, or add a script gated behind an env var.
   The sitemap is at `/sitemap.xml`; submit it in both consoles.
4. **Core Web Vitals** — enable the CrUX/Core Web Vitals report in Search
   Console, and spot-check with Lighthouse/PageSpeed Insights against the
   deployed URL.

## Recurring report (monthly)

Record a baseline the first cycle, then compare each month:

| Metric | Source |
| --- | --- |
| Impressions, clicks, average CTR, average position | Search Console → Performance |
| Top queries and top pages | Search Console → Performance |
| Pages ranking **positions 5–20** | Search Console (filter position ≥ 5 and ≤ 20) |
| Index coverage / excluded pages | Search Console → Pages |
| Core Web Vitals (LCP, INP, CLS) pass rate | Search Console → Core Web Vitals |
| Sessions / engaged sessions | Analytics |

## The improvement loop

1. From the report, pick pages ranking **positions 5–20** with real impressions —
   these are the closest to a first-page win.
2. Choose one action per page: sharpen the title/description, strengthen the
   summary and internal links, add a missing source or image, or expand the
   entry's context.
3. Record the page, the action, and the date.
4. In the next cycle, measure the change in position/CTR for that page and note
   the result.

Keep the running log in this file or a linked sheet so each cycle shows what was
tried and what moved.

### Report template

```
## Report — YYYY-MM
Baseline vs. last cycle: impressions ____, clicks ____, avg position ____
Pages targeted (pos 5–20):
  - /discoveries/<slug> — action: ____ — result next cycle: ____
Core Web Vitals: LCP __ / INP __ / CLS __
Notes:
```
