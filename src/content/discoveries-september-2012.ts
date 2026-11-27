import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during September 2012.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const september2012Discoveries: Discovery[] = [
  {
    slug: "central-congo-lomami-lesula-species-description",
    "datePublished": "2026-11-27",
    title: "The Lesula of Central Congo Is Described as a Distinct Monkey",
    categorySlug: "biology",
    subtopic: "New species",
    year: 2012,
    dateDiscovered: "2012-09-12",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Central Congo basin (broad regional proxy for the Lomami study)",
      lat: -2.38,
      lng: 24.06,
      country: "Democratic Republic of the Congo",
    },
    discoveringOrg: "John A. Hart, Kate M. Detwiler, Maurice Emetshu and colleagues",
    scientificName: "Cercopithecus lomamiensis",
    heroImage: "/images/discoveries/2012/central-congo-lomami-lesula-species-description.webp",
    imageAlt: "Original editorial diagram for Local knowledge and specimen comparisons identify the lesula. Distinct anatomy: compared with close relatives. Central Congo forests: reported setting of the study.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2012/central-congo-lomami-lesula-species-description.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Field evidence and comparisons with related monkeys supported a separate species name for the animal long known locally as the lesula.",
    story: {
      whyThere: "Field researchers recorded the lesula in central Congo and combined observations with local knowledge of the animal. They compared its appearance and anatomy with the owl-faced monkey and other relatives.",
      howFound: "Several traits and genetic comparisons distinguished the animals. The paper also documented feeding on vegetation near the ground, giving an early account of the species’ ecology.",
      whatMakesUnique: "The study formally named Cercopithecus lomamiensis and retained the local name for common use. Its findings describe the sample and range known to the team at publication.",
    },
    gallery: ["/images/discoveries/2012/central-congo-lomami-lesula-species-description.webp"],
    primarySourceUrl: "https://journals.plos.org/plosone/article?id=10.1371%2Fjournal.pone.0044271",
    videoUrls: [],
    relatedSlugs: ["southern-tanzania-kipunji-rungwecebus-new-primate-genus"],
    tags: ["primate taxonomy", "Congo Basin", "forest mammals"],
  },
];
