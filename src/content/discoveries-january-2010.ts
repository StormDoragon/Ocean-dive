import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during January 2010.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const january2010Discoveries: Discovery[] = [
  {
    slug: "titanic-wreck-rusticle-halomonas-titanicae-description",
    "datePublished": "2026-11-27",
    title: "Iron-Rich Structures on the Titanic Wreck Yielded a Distinct Microbe",
    categorySlug: "ocean",
    subtopic: "Deep-sea expeditions",
    year: 2010,
    dateDiscovered: "2010-01-08",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Titanic wreck area, northwestern Atlantic (sampling-site proxy)",
      lat: 41.73,
      lng: -49.95,
      country: "Atlantic Ocean",
    },
    discoveringOrg: "Cristina Sánchez-Porro, Bhavleen Kaur, Henrietta Mann and Antonio Ventosa",
    scientificName: "Halomonas titanicae",
    heroImage: "/images/discoveries/2010/titanic-wreck-rusticle-halomonas-titanicae-description.webp",
    imageAlt: "Original editorial diagram for A rust formation yields a new bacterial species. Wreck sample: provided material for the description. Genetic comparisons: supported separation from related species.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2010/titanic-wreck-rusticle-halomonas-titanicae-description.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "A study of material from the wreck’s rust formations identified a previously undescribed salt-tolerant bacterium and named it Halomonas titanicae.",
    story: {
      whyThere: "Rust formations around submerged steel can host many microorganisms. A recovered sample provided one strain for comparison with known species.",
      howFound: "Genetic comparisons and observable traits supported its description as a distinct species within Halomonas.",
      whatMakesUnique: "The identification documents one organism in a complex wreck setting. It does not establish how much of the wreck’s corrosion this organism caused.",
    },
    gallery: ["/images/discoveries/2010/titanic-wreck-rusticle-halomonas-titanicae-description.webp"],
    primarySourceUrl: "https://pubmed.ncbi.nlm.nih.gov/20061494/",
    videoUrls: [],
    relatedSlugs: ["santa-catalina-basin-whale-fall-vent-like-community"],
    tags: ["Titanic wreck", "marine microbes", "microbial taxonomy"],
  },
];
