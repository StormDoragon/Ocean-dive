import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during November 2025.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const november2025Discoveries: Discovery[] = [
  {
    slug: "batanta-papuanatula-mayfly-collection",
    title: "A Long-Running Batanta Survey Uncovers Six New Mayfly Species",
    categorySlug: "biology",
    subtopic: "New species",
    year: 2025,
    dateDiscovered: "2025-11-10",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-26",
    location: {
      name: "Batanta Island, Raja Ampat (regional collection marker)",
      lat: -0.85,
      lng: 130.64,
      country: "Indonesia",
    },
    discoveringOrg: "T. Kaltenbach, T. Kovács and J.-L. Gattolliat",
    heroImage: "/images/discoveries/2025/batanta-papuanatula-mayfly-collection.webp",
    imageAlt: "Original editorial diagram for Mayflies on Batanta. 2014–2025: window of field collections. Six island species: newly named from Batanta.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2025/batanta-papuanatula-mayfly-collection.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "A study of mayflies collected on Batanta Island between 2014 and 2025 identified six previously unnamed Papuanatula species from the island.",
    story: {
      whyThere: "Batanta’s running waters were surveyed as part of a long biodiversity project. Collections included mayflies in several stages of development.",
      howFound: "The study documented larval anatomy and described adult stages for some species. Genetic comparisons also supported the delimitation of most of the species reported.",
      whatMakesUnique: "Identifying the larvae makes it possible to recognise the species during surveys even when adults are unavailable. The paper supplies keys for the mayflies relevant to Batanta.",
    },
    gallery: ["/images/discoveries/2025/batanta-papuanatula-mayfly-collection.webp"],
    primarySourceUrl: "https://doi.org/10.3897/zookeys.1259.168419",
    videoUrls: [],
    relatedSlugs: ["lanonia-eclipsata-tuyen-quang-palm"],
    tags: ["mayflies", "taxonomy", "island biodiversity"],
  },
];
