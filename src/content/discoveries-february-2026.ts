import type { Discovery } from "./types";

export const february2026Discoveries: Discovery[] = [
  {
    slug: "lhs-1903-inside-out-system",
    title: "The Inside-Out LHS 1903 Planetary System",
    categorySlug: "space",
    subtopic: "Exoplanets",
    year: 2026,
    dateDiscovered: "2026-02-12",
    location: {
      name: "University of Warwick, Coventry, United Kingdom",
      lat: 52.38,
      lng: -1.56,
      country: "United Kingdom",
    },
    discoveringOrg: "CHEOPS consortium / University of Warwick-led team",
    scientificName: "LHS 1903 b–e",
    classification: "Astronomy · Four-planet red-dwarf system",
    conservationStatus: undefined,
    heroImage: "/images/categories/space.svg",
    summary:
      "Four close-orbiting planets arranged rocky–gaseous–gaseous–rocky, an unexpected architecture that supports sequential, gas-depleted planet formation.",
    story: {
      whyThere:
        "Astronomers combined transit photometry and radial-velocity measurements to characterize small planets crossing the radius valley around an old red dwarf.",
      howFound:
        "CHEOPS and supporting observatories measured the planets' sizes and masses closely enough to distinguish rocky worlds from atmosphere-rich sub-Neptunes.",
      whatMakesUnique:
        "The outermost planet is rocky despite lying beyond two gaseous planets, suggesting it formed after the system's gas reservoir had largely vanished.",
    },
    gallery: ["/images/categories/space.svg", "/images/textures/waves.svg"],
    paperUrl: "https://arxiv.org/abs/2602.11271",
    videoUrls: [],
    relatedSlugs: ["trappist-1-system", "comet-c-2026-a1-maps"],
    tags: ["exoplanet", "red dwarf", "cheops", "planet formation", "super-earth"],
  },
  {
    slug: "self-copying-polymerase-ribozyme",
    title: "A Tiny RNA Enzyme That Can Copy Itself",
    categorySlug: "biology",
    subtopic: "Origins of life",
    year: 2026,
    dateDiscovered: "2026-02-12",
    location: {
      name: "MRC Laboratory of Molecular Biology, Cambridge, United Kingdom",
      lat: 52.18,
      lng: 0.14,
      country: "United Kingdom",
    },
    discoveringOrg: "MRC Laboratory of Molecular Biology-led research team",
    scientificName: "QT45 polymerase ribozyme",
    classification: "Biochemistry · Catalytic RNA replicase",
    conservationStatus: undefined,
    heroImage: "/images/categories/biology.svg",
    summary:
      "A compact 45-nucleotide catalytic RNA synthesized both its complementary strand and a copy of itself, strengthening a central prediction of the RNA-world hypothesis.",
    story: {
      whyThere:
        "Researchers were searching random RNA sequence space for simpler catalysts capable of RNA-templated RNA synthesis.",
      howFound:
        "Laboratory selection isolated the QT45 ribozyme and tests showed it could build a complementary strand and reproduce its own sequence with useful accuracy.",
      whatMakesUnique:
        "Its small size suggests primitive RNA replicases may be easier to evolve than previously assumed, narrowing a major gap in models for life's chemical beginnings.",
    },
    gallery: ["/images/categories/biology.svg", "/images/textures/grid.svg"],
    paperUrl: "https://pubmed.ncbi.nlm.nih.gov/41678588/",
    videoUrls: [],
    relatedSlugs: ["alphafold-protein-structures", "eumillipes-persephone"],
    tags: ["rna", "ribozyme", "origin of life", "self replication", "biochemistry"],
  },
];
