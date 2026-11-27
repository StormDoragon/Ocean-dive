import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during August 2002.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const august2002Discoveries: Discovery[] = [
  {
    slug: "oxford-new-caledonian-crow-wire-hook-forming",
    "datePublished": "2026-11-27",
    title: "A New Caledonian Crow Bent Wire to Retrieve Food",
    categorySlug: "biology",
    subtopic: "Neuroscience",
    year: 2002,
    dateDiscovered: "2002-08-09",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "University of Oxford (experiment-site proxy)",
      lat: 51.757,
      lng: -1.257,
      country: "United Kingdom",
    },
    discoveringOrg: "Alex A. S. Weir, Jackie Chappell and Alex Kacelnik",
    scientificName: "Corvus moneduloides",
    heroImage: "/images/discoveries/2002/oxford-new-caledonian-crow-wire-hook-forming.webp",
    imageAlt: "Original editorial diagram for A bent wire turns into a usable hook. Straight wire: was the starting material. Formed hook: lifted the food container.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2002/oxford-new-caledonian-crow-wire-hook-forming.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "A captive crow reshaped a straight piece of wire and used it to lift a small food container out of reach.",
    story: {
      whyThere: "The task offered pieces of material that could be used to reach food. A straight wire did not have the shape needed to catch the container easily.",
      howFound: "The bird bent the wire and retrieved the container. The team observed further cases in which it fashioned a usable hooked tool.",
      whatMakesUnique: "The observation concerns an individual in a laboratory test. It shows flexible tool shaping under those conditions.",
    },
    gallery: ["/images/discoveries/2002/oxford-new-caledonian-crow-wire-hook-forming.webp"],
    primarySourceUrl: "https://ora.ox.ac.uk/objects/uuid%3A00c77ee3-1f4a-41c2-a3b7-3ea692eff0ef",
    videoUrls: [],
    relatedSlugs: ["tai-forest-chimpanzee-nut-cracking-4300-years"],
    tags: ["New Caledonian crows", "tool shaping", "animal cognition"],
  },
];
