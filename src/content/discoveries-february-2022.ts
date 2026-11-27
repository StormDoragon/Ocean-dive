import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during February 2022.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const february2022Discoveries: Discovery[] = [
  {
    slug: "boulder-jila-millimetre-gravitational-redshift-atomic-clock",
    "datePublished": "2026-11-27",
    title: "A strontium clock resolved gravity’s effect across a millimetre",
    categorySlug: "physics",
    subtopic: "Quantum research",
    year: 2022,
    dateDiscovered: "2022-02-16",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "JILA, University of Colorado Boulder (laboratory map proxy)",
      lat: 40.007,
      lng: -105.265,
      country: "United States",
    },
    discoveringOrg: "Tobias Bothwell, Jun Ye and the JILA optical clock team",
    heroImage: "/images/discoveries/2022/boulder-jila-millimetre-gravitational-redshift-atomic-clock.webp",
    imageAlt: "Original editorial diagram for Resolving the effect of height on clock frequency. Millimetre-scale: height of the atomic sample. Frequency gradient: matched the gravity prediction.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2022/boulder-jila-millimetre-gravitational-redshift-atomic-clock.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Clock spectroscopy measured a frequency gradient across a single millimetre-scale sample that agreed with gravitational redshift.",
    story: {
      whyThere: "Under general relativity, clocks at different heights in Earth's gravity have slightly different frequencies. The researchers used positions within one vertically extended sample of trapped strontium atoms as parts of the same clock experiment.",
      howFound: "They compared the clock transition at different positions in the sample and resolved a tiny systematic gradient. Its sign and size were consistent with the gravitational prediction.",
      whatMakesUnique: "The result made an effect familiar from clocks separated over larger heights observable across a millimetre-scale sample. It illustrates how sensitive optical frequency comparisons can become.",
    },
    gallery: [
      "/images/discoveries/2022/boulder-jila-millimetre-gravitational-redshift-atomic-clock.webp",
    ],
    primarySourceUrl: "https://www.nist.gov/publications/resolving-gravitational-redshift-across-millimetre-scale-atomic-sample",
    videoUrls: [],
    relatedSlugs: ["delft-bell-inequality-electron-spins-1-3-km"],
    tags: ["optical clocks", "gravitational redshift", "strontium"],
  },
];
