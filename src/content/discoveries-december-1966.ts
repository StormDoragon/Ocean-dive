import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during December 1966.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const december1966Discoveries: Discovery[] = [
  {
    slug: "southern-pacific-eltanin-ridge-magnetic-stripes",
    "datePublished": "2026-11-27",
    title: "A Ship’s Magnetic Profile Found Matching Stripes on Opposite Sides of a Ridge",
    categorySlug: "ocean",
    subtopic: "Deep-sea expeditions",
    year: 1966,
    dateDiscovered: "1966-12-02",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Pacific–Antarctic Ridge, southern Pacific (transect-region proxy)",
      lat: -56.5,
      lng: -130,
      country: "Pacific Ocean",
    },
    discoveringOrg: "Walter C. Pitman III and James R. Heirtzler",
    heroImage: "/images/discoveries/1966/southern-pacific-eltanin-ridge-magnetic-stripes.webp",
    imageAlt: "Original editorial diagram for Opposite sides of a ridge carry matching patterns. Magnetic stripes: signatures of differently magnetized rocks. Mirrored profile: fits outward growth from the ridge.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/1966/southern-pacific-eltanin-ridge-magnetic-stripes.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "A detailed pass across the Pacific–Antarctic Ridge found an approximately mirrored pattern of magnetic anomalies, consistent with new seafloor recording reversals of Earth’s field as it spreads away.",
    story: {
      whyThere: "Magnetic minerals in cooling rock can preserve the direction of the field. A shipboard magnetometer recorded how the field changed across a ridge.",
      howFound: "A long profile showed corresponding positive and negative features on opposite sides. The symmetry made it possible to compare measured stripes with a sequence expected from seafloor spreading.",
      whatMakesUnique: "The profile provided a direct check on a prediction of spreading and magnetic reversals. Other lines of evidence were needed to map the rates and history of whole plates.",
    },
    gallery: ["/images/discoveries/1966/southern-pacific-eltanin-ridge-magnetic-stripes.webp"],
    primarySourceUrl: "https://pubmed.ncbi.nlm.nih.gov/17780036/",
    videoUrls: [],
    relatedSlugs: ["mid-atlantic-ridge-tag-black-smoker-vent-biota"],
    tags: ["seafloor spreading", "magnetic reversals", "ocean ridges"],
  },
];
