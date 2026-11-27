import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during March 1994.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const march1994Discoveries: Discovery[] = [
  {
    slug: "anan-nichia-bright-blue-450-nm-led",
    "datePublished": "2026-11-27",
    title: "A Nitride Diode Produces Blue Light Above One Candela",
    categorySlug: "technology",
    subtopic: "Materials science",
    year: 1994,
    dateDiscovered: "1994-03-28",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Nichia research site, Anan, Tokushima (laboratory proxy)",
      lat: 33.914,
      lng: 134.632,
      country: "Japan",
    },
    discoveringOrg: "Shuji Nakamura, Takashi Mukai and Masayuki Senoh",
    heroImage: "/images/discoveries/1994/anan-nichia-bright-blue-450-nm-led.webp",
    imageAlt: "Original editorial diagram for A practical demonstration of bright blue emission. 450 nm: peak wavelength reported. Above 1 cd: measured luminous intensity.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/1994/anan-nichia-bright-blue-450-nm-led.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "A layered semiconductor diode emitted near 450 nanometres and achieved a luminous intensity above one candela in the authors’ tests.",
    story: {
      whyThere: "The researchers combined different nitride semiconductors to form an active blue-emitting layer. The diode was measured at room temperature.",
      howFound: "The peak light wavelength was about 450 nanometres. At the stated current of 20 milliamps, the team reported an external quantum efficiency of up to 2.7 percent.",
      whatMakesUnique: "The published device demonstrated unusually bright blue emission for its era. Luminous intensity, power and quantum efficiency describe different aspects of the prototype’s performance.",
    },
    gallery: ["/images/discoveries/1994/anan-nichia-bright-blue-450-nm-led.webp"],
    primarySourceUrl: "https://doi.org/10.1063/1.111832",
    videoUrls: [],
    relatedSlugs: ["rochester-kodak-organic-thin-film-light-emitting-diode"],
    tags: ["light-emitting diodes", "gallium nitride", "semiconductors"],
  },
];
