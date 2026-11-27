import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during July 2008.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const july2008Discoveries: Discovery[] = [
  {
    slug: "providence-lunar-volcanic-glass-magma-water",
    "datePublished": "2026-11-27",
    title: "Lunar Volcanic Glass Retains Clues to Water in the Moon’s Magma",
    categorySlug: "space",
    subtopic: "Space missions",
    year: 2008,
    dateDiscovered: "2008-07-10",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Brown University, Providence (research-team proxy)",
      lat: 41.826,
      lng: -71.403,
      country: "United States",
    },
    discoveringOrg: "Alberto E. Saal, Erik H. Hauri and colleagues",
    heroImage: "/images/discoveries/2008/providence-lunar-volcanic-glass-magma-water.webp",
    imageAlt: "Original editorial diagram for Ancient volcanic glass preserves a water signal. 745 ppm: modeled pre-eruption water in one magma type. Ion microprobe: measures volatiles in the glass.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2008/providence-lunar-volcanic-glass-magma-water.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Tiny lunar glass beads preserved a pattern of water loss that researchers used to estimate how much water one magma could have contained before eruption.",
    story: {
      whyThere: "An ion microprobe measured traces of volatile compounds in glass produced by ancient lunar volcanic eruptions. A volatile is a material that can readily escape as a gas under the conditions of an eruption.",
      howFound: "The researchers modeled how water could have diffused out of glass as it cooled. For one class of low-titanium glass, their best estimate for the original magma was 745 parts per million of water.",
      whatMakesUnique: "The number depends on the degassing model and the specific glasses studied. The evidence shows that at least some lunar magmas contained indigenous water.",
    },
    gallery: ["/images/discoveries/2008/providence-lunar-volcanic-glass-magma-water.webp"],
    primarySourceUrl: "https://pubmed.ncbi.nlm.nih.gov/18615079/",
    videoUrls: [],
    relatedSlugs: ["west-lafayette-pluto-sputnik-planitia-nitrogen-ice-convection"],
    tags: ["lunar geology", "volcanic glass", "water"],
  },
];
