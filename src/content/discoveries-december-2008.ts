import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during December 2008.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const december2008Discoveries: Discovery[] = [
  {
    slug: "berkeley-nacre-inspired-ceramic-polymer-fracture-toughness",
    "datePublished": "2026-11-27",
    title: "A Nacre-Inspired Ceramic and Polymer Composite Resists Fracture",
    categorySlug: "technology",
    subtopic: "Materials science",
    year: 2008,
    dateDiscovered: "2008-12-05",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Lawrence Berkeley National Laboratory, Berkeley (research-team proxy)",
      lat: 37.876,
      lng: -122.251,
      country: "United States",
    },
    discoveringOrg: "Etienne Munch, Maximilien E. Launey, Robert O. Ritchie and colleagues",
    heroImage: "/images/discoveries/2008/berkeley-nacre-inspired-ceramic-polymer-fracture-toughness.webp",
    imageAlt: "Original editorial diagram for Layered structure resists a spreading crack. About 30 MPa√m: measured fracture toughness. Ceramic and polymer: arranged in a nacre-inspired composite.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2008/berkeley-nacre-inspired-ceramic-polymer-fracture-toughness.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "A ceramic–polymer composite arranged like layers in nacre reached a fracture toughness of about 30 megapascal square-root meters in the reported tests.",
    story: {
      whyThere: "The researchers used directional freezing to guide the formation of an organized ceramic framework. They then filled spaces in that framework with a polymer.",
      howFound: "The resulting internal architecture allowed layers to transfer stress and absorb energy as a crack grew. The measured performance depended on that arrangement as well as on the individual materials.",
      whatMakesUnique: "The reported fracture and strength values apply to the tested composite. The study showed how layered architecture can make a ceramic-based material tolerate damage.",
    },
    gallery: [
      "/images/discoveries/2008/berkeley-nacre-inspired-ceramic-polymer-fracture-toughness.webp",
    ],
    primarySourceUrl: "https://pubmed.ncbi.nlm.nih.gov/19056979/",
    videoUrls: [],
    relatedSlugs: ["bonn-lotus-leaf-self-cleaning-wax-microstructure"],
    tags: ["nacre", "fracture toughness", "ceramic composites"],
  },
];
