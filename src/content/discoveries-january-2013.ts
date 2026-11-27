import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during January 2013.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const january2013Discoveries: Discovery[] = [
  {
    slug: "northwest-greenland-neem-folded-ice-eemian-warmth-reconstruction",
    "datePublished": "2026-11-27",
    title: "Folded Greenland Ice Preserved a Record of Eemian Warmth",
    categorySlug: "earth-science",
    subtopic: "Ice cores",
    year: 2013,
    dateDiscovered: "2013-01-23",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "North Greenland Eemian Ice Drilling site",
      lat: 77.45,
      lng: -51.06,
      country: "Greenland",
    },
    discoveringOrg: "North Greenland Eemian Ice Drilling collaboration",
    heroImage: "/images/discoveries/2013/northwest-greenland-neem-folded-ice-eemian-warmth-reconstruction.webp",
    imageAlt: "Original editorial diagram for Reassembling folded ice. 8 ± 4 °C: Estimated local warmth above baseline. ~126 ka: Early Eemian peak.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2013/northwest-greenland-neem-folded-ice-eemian-warmth-reconstruction.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Researchers reordered folded sections of a Greenland core to reconstruct the last interglacial. The inferred local peak was 8 ± 4 °C above the mean of the previous millennium.",
    story: {
      whyThere: "Ice near the base of a deep core can fold and lose chronological order. The NEEM collaboration used matching signals in other dated polar cores to place sections of Eemian ice in sequence.",
      howFound: "Water isotopes indicated strong local warmth near the beginning of the interglacial. Layers affected by surface melting were common in that part of the record.",
      whatMakesUnique: "The temperature estimate is for the NEEM site and has a substantial uncertainty range. The map identifies the northwestern Greenland drill location.",
    },
    gallery: [
      "/images/discoveries/2013/northwest-greenland-neem-folded-ice-eemian-warmth-reconstruction.webp",
    ],
    primarySourceUrl: "https://www.nature.com/articles/nature11789",
    videoUrls: [],
    relatedSlugs: ["chukotka-lake-elgygytgyn-arctic-super-interglacials-sediment-core"],
    tags: ["NEEM ice core", "Eemian interglacial", "Greenland ice", "Paleotemperature"],
  },
];
