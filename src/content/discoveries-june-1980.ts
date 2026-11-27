import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during June 1980.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const june1980Discoveries: Discovery[] = [
  {
    slug: "oxford-layered-lithium-cobalt-oxide-reversible-electrode",
    "datePublished": "2026-11-27",
    title: "Lithium Cobalt Oxide Showed That a Layered Crystal Could Reversibly Store Lithium",
    categorySlug: "technology",
    subtopic: "Materials science",
    year: 1980,
    dateDiscovered: "1980-06-01",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "University of Oxford (research-team proxy)",
      lat: 51.757,
      lng: -1.257,
      country: "United Kingdom",
    },
    discoveringOrg: "Koichi Mizushima, Philip C. Jones, Philip J. Wiseman and John B. Goodenough",
    heroImage: "/images/discoveries/1980/oxford-layered-lithium-cobalt-oxide-reversible-electrode.webp",
    imageAlt: "Original editorial diagram for A layered oxide hosts reversible lithium changes. Interlayer lithium: can leave and re-enter the structure. Positive electrode: one component of a rechargeable cell.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/1980/oxford-layered-lithium-cobalt-oxide-reversible-electrode.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Electrochemical tests identified layered lithium cobalt oxide as a promising high-voltage positive electrode because lithium could leave and re-enter the solid.",
    story: {
      whyThere: "Rechargeable electrodes need to accommodate a changing amount of lithium. In this oxide, lithium occupies layers between sheets containing cobalt and oxygen.",
      howFound: "The team measured changes in electrical behavior and crystal structure as lithium was removed. Over a useful range the layered structure could host the changing lithium content.",
      whatMakesUnique: "This demonstrated an electrode material. The energy, lifetime, and safety of a practical battery also depend on the rest of the cell.",
    },
    gallery: [
      "/images/discoveries/1980/oxford-layered-lithium-cobalt-oxide-reversible-electrode.webp",
    ],
    primarySourceUrl: "https://doi.org/10.1016/0025-5408%2880%2990012-4",
    videoUrls: [],
    relatedSlugs: ["college-park-water-in-salt-aqueous-lithium-ion"],
    tags: ["lithium cobalt oxide", "battery electrodes", "layered crystals"],
  },
];
