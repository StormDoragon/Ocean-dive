import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during February 2021.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const february2021Discoveries: Discovery[] = [
  {
    slug: "chatham-rise-kitefin-shark-first-luminescence-measurements",
    "datePublished": "2026-11-27",
    title: "Researchers measured light produced by kitefin sharks",
    categorySlug: "ocean",
    subtopic: "Ocean mysteries",
    year: 2021,
    dateDiscovered: "2021-02-26",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Chatham Rise, offshore New Zealand (regional map proxy for the sampling area)",
      lat: -43.8,
      lng: 177.5,
      country: "New Zealand",
    },
    discoveringOrg: "Jérôme Mallefet, Laurent Duchatelet and the deep-water shark research team",
    scientificName: "Dalatias licha",
    heroImage: "/images/discoveries/2021/chatham-rise-kitefin-shark-first-luminescence-measurements.webp",
    imageAlt: "Original editorial diagram for Measuring light from deep-water sharks. Three species: compared from Chatham Rise. Photophores: light-producing structures.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2021/chatham-rise-kitefin-shark-first-luminescence-measurements.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Sharks collected from the Chatham Rise gave researchers the first direct record of light production by three deep-water shark species.",
    story: {
      whyThere: "The team examined kitefin and two species of lanternshark from the Chatham Rise. Observations in dark conditions showed light coming from the animals, often most clearly on their undersides.",
      howFound: "Small light-producing structures called photophores were distributed in characteristic patterns. Comparing the species revealed similarities and differences in where the light organs occurred.",
      whatMakesUnique: "Light from the underside can make a silhouette less apparent against faint illumination from above. How the light serves kitefin sharks in different settings remains open.",
    },
    gallery: [
      "/images/discoveries/2021/chatham-rise-kitefin-shark-first-luminescence-measurements.webp",
    ],
    primarySourceUrl: "https://www.frontiersin.org/journals/marine-science/articles/10.3389/fmars.2021.633582/full",
    videoUrls: [],
    relatedSlugs: ["paris-museum-african-coelacanth-scale-rings-lifespan"],
    tags: ["bioluminescence", "sharks", "photophores"],
  },
];
