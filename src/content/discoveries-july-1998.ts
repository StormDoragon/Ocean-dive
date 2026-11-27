import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during July 1998.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const july1998Discoveries: Discovery[] = [
  {
    slug: "cambridge-mit-microencapsulated-electrophoretic-ink",
    "datePublished": "2026-11-27",
    title: "A Printable Electronic Ink Keeps Its Appearance After Power Is Removed",
    categorySlug: "technology",
    subtopic: "Materials science",
    year: 1998,
    dateDiscovered: "1998-07-16",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "MIT Media Laboratory, Cambridge (research-team proxy)",
      lat: 42.36,
      lng: -71.087,
      country: "United States",
    },
    discoveringOrg: "Barrett Comiskey, J. D. Albert, Hidekazu Yoshizawa and Joseph Jacobson",
    heroImage: "/images/discoveries/1998/cambridge-mit-microencapsulated-electrophoretic-ink.webp",
    imageAlt: "Original editorial diagram for Moving particles change the look of printed ink. Reflective display: readable by reflected ambient light. Bistable ink: retains its state when the field is removed.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/1998/cambridge-mit-microencapsulated-electrophoretic-ink.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Tiny capsules holding electrically movable particles gave a prototype reflective display the ability to keep an image without continuous power.",
    story: {
      whyThere: "An electric field shifted pigment particles inside microscopic capsules. That motion changed which material was visible from the front.",
      howFound: "Containing the particles in separate capsules made the material easier to handle and print. The display reflected surrounding light and could retain its optical state without a continuous field.",
      whatMakesUnique: "The prototype established a workable ink architecture. Its performance was measured in the designs described in the paper.",
    },
    gallery: ["/images/discoveries/1998/cambridge-mit-microencapsulated-electrophoretic-ink.webp"],
    primarySourceUrl: "https://www.nature.com/articles/28349",
    videoUrls: [],
    relatedSlugs: ["vancouver-cellulose-templated-silica-structural-colour"],
    tags: ["electronic paper", "display materials", "microcapsules"],
  },
];
