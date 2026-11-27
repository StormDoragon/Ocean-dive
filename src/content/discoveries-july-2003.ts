import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during July 2003.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const july2003Discoveries: Discovery[] = [
  {
    slug: "nintoku-emperor-seamounts-hawaiian-hotspot-motion",
    "datePublished": "2026-11-27",
    title: "Seamount Lavas Record Motion of the Hawaiian Hotspot",
    categorySlug: "earth-science",
    subtopic: "Volcanoes",
    year: 2003,
    dateDiscovered: "2003-07-24",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Nintoku Seamount, ODP Site 1205 (one of the drilling sites)",
      lat: 41.3333,
      lng: 170.3783,
      country: "North Pacific Ocean",
      depthMeters: 1310,
    },
    discoveringOrg: "John A. Tarduno, Robert A. Duncan and the Ocean Drilling Program Leg 197 team",
    heroImage: "/images/discoveries/2003/nintoku-emperor-seamounts-hawaiian-hotspot-motion.webp",
    imageAlt: "Original editorial diagram for Ancient lavas record the changing latitude of a hotspot. 81–47 million years: interval considered in the mobility estimate. Magnetized rock: preserved evidence of past latitude.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2003/nintoku-emperor-seamounts-hawaiian-hotspot-motion.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Magnetic directions locked in seamount lavas suggested that the volcanic source itself moved south as part of the Hawaiian–Emperor chain formed.",
    story: {
      whyThere: "The Emperor Seamounts preserve successive volcanoes formed over tens of millions of years. Their lava samples retain magnetic directions from the time when the rock cooled.",
      howFound: "Comparing those directions with rock ages allowed the researchers to estimate latitude at the time of formation. Their analysis indicated substantial southward movement of the hotspot from about 81 to 47 million years ago.",
      whatMakesUnique: "The result adds motion of the deep source to explanations for the shape of the volcanic chain. Different reconstructions can weigh hotspot motion and plate motion differently.",
    },
    gallery: ["/images/discoveries/2003/nintoku-emperor-seamounts-hawaiian-hotspot-motion.webp"],
    primarySourceUrl: "https://pubmed.ncbi.nlm.nih.gov/12881572/",
    supportingSources: [
      {
        title: "ODP Leg 197 Site 1205 field report",
        url: "https://www.iodp.tamu.edu/publications/197_IR/chap_05/c5_.htm",
        publisher: "Ocean Drilling Program",
        tier: "Tier 1",
        sourceType: "reference",
        accessedAt: "2026-11-27",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["luzon-pinatubo-sage-ii-stratospheric-aerosol-layer"],
    tags: ["palaeomagnetism", "mantle plumes", "seamounts"],
  },
];
