import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during January 1995.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const january1995Discoveries: Discovery[] = [
  {
    slug: "la-ciotat-cave-carnivorous-sponge",
    "datePublished": "2026-11-27",
    title: "A Cave Sponge Captured Small Animals Instead of Filter-Feeding",
    categorySlug: "ocean",
    subtopic: "Ocean mysteries",
    year: 1995,
    dateDiscovered: "1995-01-26",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Mediterranean coast near La Ciotat (submarine-cave area proxy)",
      lat: 43.15,
      lng: 5.6,
      country: "France",
    },
    discoveringOrg: "Jean Vacelet and Nicole Boury-Esnault",
    heroImage: "/images/discoveries/1995/la-ciotat-cave-carnivorous-sponge.webp",
    imageAlt: "Original editorial diagram for Hooked structures catch small prey. Small crustaceans: get caught on the sponge’s surfaces. Cave habitat: made live observations possible.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/1995/la-ciotat-cave-carnivorous-sponge.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "A sponge accessible in a Mediterranean cave caught small crustaceans with hooked structures on its branches, revealing an unusual feeding strategy for sponges.",
    story: {
      whyThere: "Most sponges collect small food particles from water pumped through their bodies. The cave sponge lacked some structures that make that feeding system possible.",
      howFound: "Observations showed that small animals got caught on the sponge’s hooked surfaces and were eventually surrounded by sponge tissue.",
      whatMakesUnique: "This species offered direct evidence of predation by a sponge. Related deep-sea species can be harder to observe alive.",
    },
    gallery: ["/images/discoveries/1995/la-ciotat-cave-carnivorous-sponge.webp"],
    primarySourceUrl: "https://www.nature.com/articles/373333a0",
    videoUrls: [],
    relatedSlugs: ["south-pacific-gyre-u1365-ancient-oxic-sediment-microbes"],
    tags: ["carnivorous sponges", "Mediterranean caves", "feeding ecology"],
  },
];
