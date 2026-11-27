import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during August 2014.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const august2014Discoveries: Discovery[] = [
  {
    slug: "coastal-peru-fossil-shells-holocene-enso-variability",
    "datePublished": "2026-11-27",
    title: "Fossil Shells Record a Quieter Period of El Niño Variability off Peru",
    categorySlug: "earth-science",
    subtopic: "Climate records",
    year: 2014,
    dateDiscovered: "2014-08-07",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Coastal Peru (sampling-region proxy)",
      lat: -14.35,
      lng: -76.1,
      country: "Peru",
    },
    discoveringOrg: "Matthieu Carré, Julian P. Sachs, Sara Purca and colleagues",
    heroImage: "/images/discoveries/2014/coastal-peru-fossil-shells-holocene-enso-variability.webp",
    imageAlt: "Original editorial diagram for Shells record past Pacific climate variability. 4,000–5,000 years ago: interval of weaker variability in this reconstruction. Coastal Peru: where the fossil shells were collected.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2014/coastal-peru-fossil-shells-holocene-enso-variability.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "Oxygen isotopes in fossil shells indicated that eastern tropical Pacific temperature variability was weaker around 4,000 to 5,000 years ago than in the modern reference period.",
    story: {
      whyThere: "As mollusks grow, their shells record aspects of the seawater around them. The study used isotope measurements from different times to reconstruct changes in temperature along the Peruvian coast.",
      howFound: "The authors inferred intervals of both strong and weak variability over roughly 10,000 years. The differences suggest that El Niño–Southern Oscillation patterns responded to long-term changes in climate.",
      whatMakesUnique: "The shells reflect seawater conditions near the eastern edge of the Pacific. Reconstructing what happened across the entire ocean requires evidence from other places.",
    },
    gallery: ["/images/discoveries/2014/coastal-peru-fossil-shells-holocene-enso-variability.webp"],
    primarySourceUrl: "https://pubmed.ncbi.nlm.nih.gov/25103408/",
    videoUrls: [],
    relatedSlugs: ["mulu-borneo-stalagmites-west-pacific-hydrology"],
    tags: ["El Niño–Southern Oscillation", "fossil shells", "oxygen isotopes"],
  },
];
