import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during January 1938.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const january1938Discoveries: Discovery[] = [
  {
    slug: "moscow-kapitza-helium-superfluid-flow",
    "datePublished": "2026-11-27",
    title: "Cold Liquid Helium Flowed With an Extremely Low Apparent Viscosity",
    categorySlug: "physics",
    subtopic: "Quantum research",
    year: 1938,
    dateDiscovered: "1938-01-08",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Institute for Physical Problems, Moscow (research-team proxy)",
      lat: 55.703,
      lng: 37.576,
      country: "Russia",
    },
    discoveringOrg: "Pyotr L. Kapitza",
    heroImage: "/images/discoveries/1938/moscow-kapitza-helium-superfluid-flow.webp",
    imageAlt: "Original editorial diagram for A narrow opening barely impedes cold helium flow. Below the lambda transition: helium enters a different liquid phase. Flow tests: found extremely little resistance.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/1938/moscow-kapitza-helium-superfluid-flow.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Flow tests below helium’s lambda transition showed that the liquid could pass through a narrow opening much more readily than an ordinary viscous fluid.",
    story: {
      whyThere: "Cooling helium through the lambda transition produces a new liquid phase.",
      howFound: "Kapitza compared flow through a small opening under different conditions. The observed resistance put a very low upper bound on effective viscosity.",
      whatMakesUnique: "A companion report in the same issue documented unusually easy flow with a different setup.",
    },
    gallery: ["/images/discoveries/1938/moscow-kapitza-helium-superfluid-flow.webp"],
    primarySourceUrl: "https://www.nature.com/articles/141074a0",
    videoUrls: [],
    relatedSlugs: ["cambridge-shapiro-microwave-voltage-steps"],
    tags: ["liquid helium", "superfluidity", "viscosity"],
  },
];
