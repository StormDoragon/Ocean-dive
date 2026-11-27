import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during October 1991.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const october1991Discoveries: Discovery[] = [
  {
    slug: "lausanne-dye-sensitized-nanoporous-titanium-dioxide-cell",
    "datePublished": "2026-11-27",
    title: "A Porous Titanium Dioxide Film Boosts a Dye-Sensitized Solar Cell",
    categorySlug: "technology",
    subtopic: "Materials science",
    year: 1991,
    dateDiscovered: "1991-10-24",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "EPFL, Lausanne (research-team proxy)",
      lat: 46.519,
      lng: 6.566,
      country: "Switzerland",
    },
    discoveringOrg: "Brian O'Regan and Michael Grätzel",
    heroImage: "/images/discoveries/1991/lausanne-dye-sensitized-nanoporous-titanium-dioxide-cell.webp",
    imageAlt: "Original editorial diagram for A coated porous oxide harvests light. 7.1–7.9%: under simulated solar light. Porous TiO₂: carries the light-absorbing dye.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/1991/lausanne-dye-sensitized-nanoporous-titanium-dioxide-cell.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "O’Regan and Grätzel reported 7.1 to 7.9 percent conversion under simulated solar light with a porous film that carried a light-absorbing dye.",
    story: {
      whyThere: "A fine-grained titanium dioxide film gave the dye a large surface to coat. The dye captured light and transferred excited electrons to the oxide.",
      howFound: "The researchers reported electricity conversion in both simulated sunlight and diffuse daylight. The values differ with the illumination and the way the cell was tested.",
      whatMakesUnique: "The design demonstrated that light absorption and charge collection could be handled by different materials in one cell.",
    },
    gallery: [
      "/images/discoveries/1991/lausanne-dye-sensitized-nanoporous-titanium-dioxide-cell.webp",
    ],
    primarySourceUrl: "https://infoscience.epfl.ch/entities/publication/fc2a155b-9ddd-40b7-bbb7-530a3ed0737e",
    videoUrls: [],
    relatedSlugs: ["rochester-organic-two-layer-photovoltaic-cell"],
    tags: ["dye-sensitized solar cells", "titanium dioxide", "photovoltaics"],
  },
];
