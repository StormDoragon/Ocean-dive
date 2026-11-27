import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during March 1986.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const march1986Discoveries: Discovery[] = [
  {
    slug: "stanford-quate-binnig-gerber-atomic-force-microscope",
    "datePublished": "2026-11-27",
    title: "A Tiny Cantilever Made It Possible to Map Insulating Surfaces",
    categorySlug: "technology",
    subtopic: "Imaging",
    year: 1986,
    dateDiscovered: "1986-03-03",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Stanford University, Ginzton Laboratory study location",
      lat: 37.427,
      lng: -122.173,
      country: "United States",
    },
    discoveringOrg: "Gerd Binnig, Calvin F. Quate and Christoph Gerber",
    heroImage: "/images/discoveries/1986/stanford-quate-binnig-gerber-atomic-force-microscope.webp",
    imageAlt: "Original editorial diagram for A microscope that senses force. Cantilever: Moves near the surface. Insulators: New samples accessible.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/1986/stanford-quate-binnig-gerber-atomic-force-microscope.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "The original atomic force microscope used the movement of a small cantilever to sense forces at a surface, extending scanning-probe measurements to electrically insulating materials.",
    story: {
      whyThere: "A tip on a spring-like support responded to minute forces as it moved over a sample. Measuring its movement provided a signal that could be translated into a surface image.",
      howFound: "The researchers combined elements of a surface profilometer with sensitive ideas from scanning tunneling microscopy. The prototype demonstrated a way to map surfaces without needing current to pass through the sample.",
      whatMakesUnique: "Later instruments improved how the cantilever’s deflection was read. The map points to the Stanford laboratory involved in the original report.",
    },
    gallery: ["/images/discoveries/1986/stanford-quate-binnig-gerber-atomic-force-microscope.webp"],
    primarySourceUrl: "https://doi.org/10.1103/PhysRevLett.56.930",
    videoUrls: [],
    relatedSlugs: ["ruschlikon-ibm-silicon-111-seven-by-seven-tunneling-microscope"],
    tags: ["Atomic force microscopy", "Cantilevers", "Scanning probes", "Surface imaging"],
  },
];
