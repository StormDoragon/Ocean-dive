import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during June 2012.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const june2012Discoveries: Discovery[] = [
  {
    slug: "cambridge-kepler-36-neighboring-planets-eightfold-density",
    "datePublished": "2026-11-27",
    title: "Kepler-36’s Two Close Neighbours Have Very Different Densities",
    categorySlug: "space",
    subtopic: "Exoplanets",
    year: 2012,
    dateDiscovered: "2012-06-21",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Center for Astrophysics, Cambridge, Massachusetts (research-team proxy)",
      lat: 42.381,
      lng: -71.129,
      country: "United States",
    },
    discoveringOrg: "Joshua A. Carter, Eric Agol and colleagues",
    heroImage: "/images/discoveries/2012/cambridge-kepler-36-neighboring-planets-eightfold-density.webp",
    imageAlt: "Original editorial diagram for Two close orbits conceal a large density contrast. About 10%: difference in orbital distance. About 8×: difference in estimated mean density.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2012/cambridge-kepler-36-neighboring-planets-eightfold-density.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Two planets separated by only about ten percent in orbital distance differ in estimated density by a factor of about eight.",
    story: {
      whyThere: "The two planets cross the same star and pass near one another as they orbit. Their gravitational interaction shifts the timing of the transits, giving a way to estimate their masses.",
      howFound: "The team combined the masses with sizes inferred from the transits. One density was compatible with a rocky world, while the other pointed to a planet with a lighter outer layer.",
      whatMakesUnique: "The neighbouring orbits show that distance from a star alone does not determine a planet’s bulk makeup. Individual composition estimates depend on how mass and radius are interpreted.",
    },
    gallery: [
      "/images/discoveries/2012/cambridge-kepler-36-neighboring-planets-eightfold-density.webp",
    ],
    primarySourceUrl: "https://pubmed.ncbi.nlm.nih.gov/22722249/",
    videoUrls: [],
    relatedSlugs: ["paranal-toi-178-five-planet-resonance-chain"],
    tags: ["orbital spacing", "transit timing", "planetary densities"],
  },
];
