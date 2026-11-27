import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during March 2015.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const march2015Discoveries: Discovery[] = [
  {
    slug: "boulder-cassini-enceladus-nanosilica-hydrothermal-evidence",
    "datePublished": "2026-11-27",
    title: "Silica Grains Give Cassini Evidence of Hot Water Reactions Inside Enceladus",
    categorySlug: "space",
    subtopic: "Space missions",
    year: 2015,
    dateDiscovered: "2015-03-11",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "University of Colorado Boulder (research-team proxy)",
      lat: 40.008,
      lng: -105.263,
      country: "United States",
    },
    discoveringOrg: "Hsiang-Wen Hsu, Frank Postberg and the Cassini dust-analysis team",
    heroImage: "/images/discoveries/2015/boulder-cassini-enceladus-nanosilica-hydrothermal-evidence.webp",
    imageAlt: "Original editorial diagram for Dust carries evidence from inside an icy moon. 2–8 nm: estimated particle radii. Above 90 °C: inferred reaction temperatures.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2015/boulder-cassini-enceladus-nanosilica-hydrothermal-evidence.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Cassini detected nanometer-scale particles in the Saturn system whose inferred composition and size supported the existence of hot water–rock reactions within Enceladus.",
    story: {
      whyThere: "A Cassini instrument measured fast dust particles near Saturn. Their composition was consistent with silica, which the researchers traced to grains released from ice supplied by Enceladus.",
      howFound: "Laboratory comparisons and calculations helped connect the grains with water that had reacted with rock and later cooled. The study inferred reaction temperatures above about 90 degrees Celsius.",
      whatMakesUnique: "Cassini measured dust outside the moon. The hydrothermal interpretation links those measurements to an otherwise inaccessible environment, distinct from later observations of phosphates.",
    },
    gallery: [
      "/images/discoveries/2015/boulder-cassini-enceladus-nanosilica-hydrothermal-evidence.webp",
    ],
    primarySourceUrl: "https://pubmed.ncbi.nlm.nih.gov/25762281/",
    supportingSources: [
      {
        title: "Cassini mission team explanation",
        url: "https://www.jpl.nasa.gov/news/spacecraft-data-suggest-saturn-moons-ocean-may-harbor-hydrothermal-activity/",
        publisher: "NASA Jet Propulsion Laboratory",
        tier: "Tier 1",
        sourceType: "reference",
        accessedAt: "2026-11-27",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["enceladus-ocean-phosphates"],
    tags: ["enceladus", "cassini", "hydrothermal activity"],
  },
];
