import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during October 2003.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const october2003Discoveries: Discovery[] = [
  {
    slug: "western-ghats-purple-frog-ancient-lineage",
    "datePublished": "2026-11-27",
    title: "A Burrowing Frog Revealed an Ancient Amphibian Lineage in the Western Ghats",
    categorySlug: "biology",
    subtopic: "New species",
    year: 2003,
    dateDiscovered: "2003-10-16",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Southern Western Ghats, Kerala (regional specimen proxy)",
      lat: 9.86,
      lng: 76.96,
      country: "India",
    },
    discoveringOrg: "Sathyabhama Das Biju and Franky Bossuyt",
    scientificName: "Nasikabatrachus sahyadrensis",
    heroImage: "/images/discoveries/2003/western-ghats-purple-frog-ancient-lineage.webp",
    imageAlt: "Original editorial diagram for A burrowing frog extends the geographic record of an ancient lineage. Western Ghats: the region where the frog was described. Genetic relationship: connects it to frogs in the Seychelles.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2003/western-ghats-purple-frog-ancient-lineage.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Fossorial anatomy and DNA supported describing the purple frog and recognizing a lineage closely related to frogs living in the Seychelles.",
    story: {
      whyThere: "This frog spends much of its life underground, so its presence was easy to miss in ordinary surveys.",
      howFound: "Its highly distinctive body and its genetic relationships separated it from other known frogs in India. The analysis linked it to a lineage in the Seychelles.",
      whatMakesUnique: "The connection informs hypotheses about ancient distributions and geological separation. Estimated divergence times depend on models and the available comparisons.",
    },
    gallery: ["/images/discoveries/2003/western-ghats-purple-frog-ancient-lineage.webp"],
    primarySourceUrl: "https://www.nature.com/articles/nature02019",
    videoUrls: [],
    relatedSlugs: ["khammouane-laonastes-diatomyid-affinity"],
    tags: ["purple frog", "Western Ghats", "amphibian taxonomy"],
  },
];
