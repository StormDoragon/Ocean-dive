import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during March 2007.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const march2007Discoveries: Discovery[] = [
  {
    slug: "casma-chankillo-thirteen-towers-solar-horizon",
    "datePublished": "2026-11-27",
    title: "Chankillo’s towers tracked the Sun along the horizon",
    categorySlug: "archaeology",
    subtopic: "Ancient civilizations",
    year: 2007,
    dateDiscovered: "2007-03-02",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Chankillo, Casma Valley, Peru (archaeological site map proxy)",
      lat: -9.563,
      lng: -78.232,
      country: "Peru",
    },
    discoveringOrg: "Iván Ghezzi and Clive Ruggles",
    heroImage: "/images/discoveries/2007/casma-chankillo-thirteen-towers-solar-horizon.webp",
    imageAlt: "Original editorial diagram for Thirteen towers and the annual Sun. Two viewing areas: on opposite sides of the ridge. Solstice positions: bounded the towers’ horizon span.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2007/casma-chankillo-thirteen-towers-solar-horizon.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Measurements at Chankillo showed that a row of ancient towers marked changing sunrise and sunset positions across the year.",
    story: {
      whyThere: "A line of thirteen stone towers crosses a ridge at Chankillo on Peru’s coast. The researchers examined the spacing of the towers and the view from structures on either side.",
      howFound: "Seen from those vantage points, the towers span the range between the Sun’s positions near the solstices. The changing point where the Sun appeared or disappeared could mark the progression of the year.",
      whatMakesUnique: "The tower alignment supports a solar calendar used long before the Inca period. The activities and rituals visitors performed at particular dates remain more difficult to establish.",
    },
    gallery: ["/images/discoveries/2007/casma-chankillo-thirteen-towers-solar-horizon.webp"],
    paperUrl: "https://doi.org/10.1126/science.1136415",
    primarySourceUrl: "https://pubmed.ncbi.nlm.nih.gov/17332405/",
    supportingSources: [
      {
        title: "Earlier field interpretation by the authors",
        url: "https://revistas.pucp.edu.pe/index.php/boletindearqueologia/en/article/view/1654",
        publisher: "Pontificia Universidad Católica del Perú",
        tier: "Tier 1",
        sourceType: "reference",
        accessedAt: "2026-11-27",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["upper-upano-ecuador-earthen-platforms-road-network"],
    tags: ["solar calendars", "Chankillo", "archaeoastronomy"],
  },
];
