import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during June 2014.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const june2014Discoveries: Discovery[] = [
  {
    slug: "stanford-foldscope-origami-paper-microscope-testing",
    "datePublished": "2026-11-27",
    title: "A folded paper body aligned the optics of a microscope",
    categorySlug: "technology",
    subtopic: "Imaging",
    year: 2014,
    dateDiscovered: "2014-06-18",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-11-27",
    location: {
      name: "Stanford University, California (research institution map proxy)",
      lat: 37.427,
      lng: -122.17,
      country: "United States",
    },
    discoveringOrg: "James S. Cybulski, James Clements and Manu Prakash",
    heroImage: "/images/discoveries/2014/stanford-foldscope-origami-paper-microscope-testing.webp",
    imageAlt: "Original editorial diagram for An optical instrument made with folds. Paper body: holds components in alignment. Small lens: provides the magnification.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2014/stanford-foldscope-origami-paper-microscope-testing.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "The Foldscope paper demonstrated a lightweight microscope assembled by folding printed stock around a small lens.",
    story: {
      whyThere: "A microscope needs its lens, sample and light path aligned to produce a sharp image. The Foldscope team used the geometry of folds to hold those parts in place.",
      howFound: "Different versions of the device used different lenses and illumination arrangements. The authors measured optical performance and tested them on several kinds of sample.",
      whatMakesUnique: "The study showed that the main optical elements could be carried in a small folded structure. Its performance depends on the particular lens, lighting and sample preparation.",
    },
    gallery: ["/images/discoveries/2014/stanford-foldscope-origami-paper-microscope-testing.webp"],
    primarySourceUrl: "https://pubmed.ncbi.nlm.nih.gov/24940755/",
    videoUrls: [],
    relatedSlugs: ["cambridge-achromatic-metalens-visible-spectrum-common-focus"],
    tags: ["microscopy", "origami", "optical instruments"],
  },
];
