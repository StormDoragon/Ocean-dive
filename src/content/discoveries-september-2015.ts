import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during September 2015.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const september2015Discoveries: Discovery[] = [
  {
    slug: "lagoa-santa-lapa-do-santo-burial-26-early-holocene-ritual",
    "datePublished": "2026-11-27",
    title: "A 9,000-Year-Old Burial Revealed an Unusual Mortuary Practice",
    categorySlug: "archaeology",
    subtopic: "Tomb discoveries",
    year: 2015,
    dateDiscovered: "2015-09-23",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Lagoa Santa karst, regional proxy for Lapa do Santo",
      lat: -19.6,
      lng: -43.95,
      country: "Brazil",
    },
    discoveringOrg: "André Strauss and the Lapa do Santo burial research team",
    heroImage: "/images/discoveries/2015/lagoa-santa-lapa-do-santo-burial-26-early-holocene-ritual.webp",
    imageAlt: "Original editorial diagram for Lapa do Santo Burial 26. 9.1–9.4 ka: Calibrated age range. 2007: Burial excavated.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2015/lagoa-santa-lapa-do-santo-burial-26-early-holocene-ritual.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Radiocarbon analysis placed Lapa do Santo Burial 26 between about 9,100 and 9,400 years ago. The arrangement of the remains provided evidence for an unusual early Holocene funerary practice.",
    story: {
      whyThere: "Archaeologists recorded Burial 26 in the Lapa do Santo rock shelter in 2007. The arrangement included a skull with hands deliberately positioned over it.",
      howFound: "A radiocarbon measurement on bone established a calibrated age range. The placement and condition of the remains gave the excavators evidence to study how the burial was prepared.",
      whatMakesUnique: "The authors proposed a mortuary ritual as an explanation. The motives of the people who prepared the burial are unknown. The pin identifies the Lagoa Santa karst region.",
    },
    gallery: [
      "/images/discoveries/2015/lagoa-santa-lapa-do-santo-burial-26-early-holocene-ritual.webp",
    ],
    primarySourceUrl: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0137456",
    videoUrls: [],
    relatedSlugs: ["olorgesailie-basin-middle-stone-age-long-distance-stone-pigments"],
    tags: ["Lapa do Santo", "Lagoa Santa", "mortuary archaeology", "radiocarbon dating"],
  },
];
