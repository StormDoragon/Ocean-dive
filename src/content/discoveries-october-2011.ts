import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during October 2011.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const october2011Discoveries: Discovery[] = [
  {
    slug: "sirena-deep-xenophyophores-10641-meter-imaging",
    "datePublished": "2026-11-27",
    title: "A Lander Images Large Single-Celled Organisms More Than 10 Kilometers Deep",
    categorySlug: "ocean",
    subtopic: "Deep-sea expeditions",
    year: 2011,
    dateDiscovered: "2011-10-21",
    reviewStatus: "source-verified",
    sourceTier: "Tier 2",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Sirena Deep, Mariana Trench (study-region proxy)",
      lat: 12.07,
      lng: 144.58,
      country: "Pacific Ocean",
      depthMeters: 10641,
    },
    discoveringOrg: "Scripps Institution of Oceanography and National Geographic expedition team",
    heroImage: "/images/discoveries/2011/sirena-deep-xenophyophores-10641-meter-imaging.webp",
    imageAlt: "Original editorial diagram for Single-celled life recorded in the hadal trench. 10,641 m: deepest sighting reported by the expedition. Camera landers: documented structures on the seafloor.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2011/sirena-deep-xenophyophores-10641-meter-imaging.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Cameras deployed in the Mariana Trench recorded xenophyophore structures as deep as 10,641 meters.",
    story: {
      whyThere: "The expedition sent free-falling camera landers to the seafloor. Their recordings revealed structures attributed to xenophyophores, large single-celled organisms that build cases from particles around them.",
      howFound: "The finding extended the documented depth of such forms. Their cases can also provide small habitats that other organisms use.",
      whatMakesUnique: "The reported depth describes an expedition sighting. The images document the group at the site without identifying every recorded structure to species.",
    },
    gallery: ["/images/discoveries/2011/sirena-deep-xenophyophores-10641-meter-imaging.webp"],
    primarySourceUrl: "https://scripps.ucsd.edu/news/researchers-identify-mysterious-life-forms-extreme-deep-sea",
    videoUrls: [],
    relatedSlugs: ["mona-canyon-east-wall-rare-six-armed-sea-star"],
    tags: ["xenophyophores", "mariana trench", "hadal life"],
  },
];
