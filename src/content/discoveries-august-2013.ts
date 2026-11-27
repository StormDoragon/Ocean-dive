import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during August 2013.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const august2013Discoveries: Discovery[] = [
  {
    slug: "northern-andes-olinguito-bassaricyon-neblina-species",
    "datePublished": "2026-11-27",
    title: "Museum Comparisons and Fieldwork Distinguish the Olinguito",
    categorySlug: "biology",
    subtopic: "New species",
    year: 2013,
    dateDiscovered: "2013-08-15",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Northern Andes, Ecuador and Colombia (cloud-forest regional proxy)",
      lat: 0.52,
      lng: -78.55,
      country: "Ecuador",
    },
    discoveringOrg: "Kristofer M. Helgen, C. Miguel Pinto and colleagues",
    scientificName: "Bassaricyon neblina",
    heroImage: "/images/discoveries/2013/northern-andes-olinguito-bassaricyon-neblina-species.webp",
    imageAlt: "Original editorial diagram for Museum and field records converge on a cloud-forest mammal. Skull and body traits: compared across the olingos. Northern Andes: documented range of the named species.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2013/northern-andes-olinguito-bassaricyon-neblina-species.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "A revision of olingos distinguished the small, thick-furred olinguito as a separate species from the northern Andes.",
    story: {
      whyThere: "The researchers compared museum specimens of tree-dwelling relatives of raccoons. Differences in skull and body measurements prompted a closer look at specimens from Andean cloud forests.",
      howFound: "Genetic comparisons and observations in the wild supported recognizing a separate species. Its dense fur and smaller size are among the visible traits that distinguish it from other olingos.",
      whatMakesUnique: "The study brought multiple strands of evidence together, from archived specimens to living animals. Its reported distribution reflects the material and locations available to the team.",
    },
    gallery: ["/images/discoveries/2013/northern-andes-olinguito-bassaricyon-neblina-species.webp"],
    primarySourceUrl: "https://pubmed.ncbi.nlm.nih.gov/24003317/",
    videoUrls: [],
    relatedSlugs: ["central-congo-lomami-lesula-species-description"],
    tags: ["cloud forests", "mammal taxonomy", "museum collections"],
  },
];
