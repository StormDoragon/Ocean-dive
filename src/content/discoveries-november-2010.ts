import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during November 2010.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const november2010Discoveries: Discovery[] = [
  {
    slug: "mohns-knipovich-lokis-castle-black-smoker-vent-field",
    "datePublished": "2026-11-27",
    title: "Loki’s Castle Shows That a Slowly Spreading Ridge Can Host Large Vents",
    categorySlug: "ocean",
    subtopic: "Hydrothermal vents",
    year: 2010,
    dateDiscovered: "2010-11-23",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Loki’s Castle, Arctic Mid-Ocean Ridge (field location)",
      lat: 73.5,
      lng: 8,
      country: "Norwegian Sea",
      depthMeters: 2300,
    },
    discoveringOrg: "Rolf B. Pedersen, Hans Tore Rapp and colleagues",
    heroImage: "/images/discoveries/2010/mohns-knipovich-lokis-castle-black-smoker-vent-field.webp",
    imageAlt: "Original editorial diagram for A large deposit under Arctic black smokers. Around 2,300 m: depth reported by the Bergen team. Up to 13 m: chimney height in the 2010 paper.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2010/mohns-knipovich-lokis-castle-black-smoker-vent-field.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Mapping and dives revealed tall mineral chimneys on a large sulfide deposit where two Arctic ridge sections meet.",
    story: {
      whyThere: "An expedition located the field in 2008 after working back from signs of vent fluid in the water. Later visits recorded several active black smokers at the crest of a submarine ridge.",
      howFound: "Some of the chimneys reached 13 metres high, and the study reported fluid temperatures between 310 and 320°C at two sites. The chimneys stand on substantial accumulations of sulfide minerals.",
      whatMakesUnique: "The field showed that an ultraslow-spreading ridge can maintain vigorous hydrothermal activity. Its animal communities also differed from those observed farther south along the Mid-Atlantic Ridge.",
    },
    gallery: ["/images/discoveries/2010/mohns-knipovich-lokis-castle-black-smoker-vent-field.webp"],
    primarySourceUrl: "https://www.nature.com/articles/ncomms1124",
    supportingSources: [
      {
        title: "Loki’s Castle discovery and seafloor depth",
        url: "https://www.uib.no/en/research/research-centres/centre-for-deep-sea-research/about-the-deep-sea",
        publisher: "University of Bergen",
        tier: "Tier 1",
        sourceType: "reference",
        accessedAt: "2026-11-27",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["aurora-polaris-gakkel-ridge-persistent-hydrothermal-plumes"],
    tags: ["black smokers", "Arctic Mid-Ocean Ridge", "hydrothermal deposits"],
  },
];
