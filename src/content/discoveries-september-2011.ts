import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during September 2011.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const september2011Discoveries: Discovery[] = [
  {
    slug: "cambridge-wireless-artificial-leaf-solar-water-splitting",
    "datePublished": "2026-11-27",
    title: "A Solar Device Splits Water Without External Connecting Wires",
    categorySlug: "technology",
    subtopic: "Materials science",
    year: 2011,
    dateDiscovered: "2011-09-29",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "MIT and Sun Catalytix, Cambridge, Massachusetts (research-team proxy)",
      lat: 42.36,
      lng: -71.094,
      country: "United States",
    },
    discoveringOrg: "Steven Y. Reece, Daniel G. Nocera and collaborators",
    heroImage: "/images/discoveries/2011/cambridge-wireless-artificial-leaf-solar-water-splitting.webp",
    imageAlt: "Original editorial diagram for A photovoltaic device makes fuel directly. 2.5%: wireless solar-to-fuel efficiency. 4.7%: wired comparison in the same study.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2011/cambridge-wireless-artificial-leaf-solar-water-splitting.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "A silicon device with catalysts used simulated sunlight to turn water into hydrogen and oxygen at 2.5 percent efficiency in its wireless configuration.",
    story: {
      whyThere: "The team coupled a silicon photovoltaic device directly to catalysts for the two gas-producing reactions. The assembly operated in water under near-neutral conditions during the test.",
      howFound: "The wireless prototype reached 2.5 percent solar-to-fuel efficiency under simulated sunlight. A similar wired configuration reached 4.7 percent in the same study.",
      whatMakesUnique: "The demonstration measured individual laboratory devices and showed how a light collector and fuel-producing catalysts can share one system.",
    },
    gallery: [
      "/images/discoveries/2011/cambridge-wireless-artificial-leaf-solar-water-splitting.webp",
    ],
    primarySourceUrl: "https://pubmed.ncbi.nlm.nih.gov/21960528/",
    videoUrls: [],
    relatedSlugs: ["lausanne-dye-sensitized-nanoporous-titanium-dioxide-cell"],
    tags: ["solar fuels", "water splitting", "artificial photosynthesis"],
  },
];
