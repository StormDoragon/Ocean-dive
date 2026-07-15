import type { Discovery } from "./types";

/** Beyond Signal Discovery Batch 03: 2026 selections through the July 15 research cutoff. */
export const batch032026Discoveries: Discovery[] = [
  {
    slug: "orgueil-meteorite-abiotic-sugars",
    title: "Abiotic Sugars in the Orgueil Meteorite",
    categorySlug: "space",
    subtopic: "Asteroids",
    year: 2026,
    dateDiscovered: "2026-01-27",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-07-14",
    location: {
      name: "Orgueil meteorite fall site, Tarn-et-Garonne",
      lat: 43.906,
      lng: 1.435,
      country: "France",
    },
    discoveringOrg: "Université Côte d'Azur and CNRS-led team",
    scientificName: "Orgueil CI1 carbonaceous chondrite",
    classification: "Astrobiology · Meteoritic prebiotic organic chemistry",
    heroImage: "/images/discoveries/2026/orgueil-meteorite-abiotic-sugars.svg",
    imageAlt:
      "Editorial chemistry diagram of a dark Orgueil meteorite fragment surrounded by mirrored ribose and other pentose molecular structures.",
    imageCredit: "Beyond Signal Editorial Graphics",
    imageSourceUrl:
      "https://github.com/StormDoragon/Ocean-dive/tree/main/docs/discovery-image-rights",
    imageLicense: "CC BY 4.0 (original Beyond Signal editorial graphic)",
    imageType: "diagram",
    imageRelation: "illustration",
    summary:
      "Chiral analysis of an Orgueil meteorite sample detected ribose, arabinose, xylose, lyxose, and ribulose, with several near-racemic mixtures supporting abiotic extraterrestrial formation rather than ordinary biological contamination.",
    story: {
      whyThere:
        "Sugars are central to nucleic acids and metabolism yet have been much harder to verify in meteorites than amino acids or nucleobases. The old fall and low concentrations keep contamination a concern, and isotopic tests were not feasible for every compound; analyses of pristine returned samples and independent laboratories are needed to generalize the inventory.",
      howFound:
        "Researchers extracted soluble organics, chemically derivatized them, and used enantioselective gas chromatography and mass spectrometry to separate mirror-image forms. Procedural blanks, recovery experiments, amino-acid measurements, and the presence of non-biological or near-racemic enantiomer ratios supported an indigenous abiotic component.",
      whatMakesUnique:
        "The simultaneous sugar-and-amino-acid analysis found that corrected pentose abundances can rival some C4–C5 amino-acid enantiomers, challenging the view that meteoritic sugars are intrinsically scarce. It shows that prebiotic ingredients could be delivered, not that life or complete RNA existed inside the meteorite.",
    },
    gallery: ["/images/discoveries/2026/orgueil-meteorite-abiotic-sugars.svg"],
    paperUrl: "https://doi.org/10.1038/s41467-026-68709-5",
    supportingSources: [
      {
        title: "Abiotic sugar enantiomers in the CI carbonaceous chondrite Orgueil",
        url: "https://www.nature.com/articles/s41467-026-68709-5",
        publisher: "Nature Communications",
        tier: "Tier 1",
        sourceType: "paper",
        accessedAt: "2026-07-14",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["bennu-life-building-blocks", "interstellar-organosulfur-molecule"],
    tags: ["Orgueil meteorite", "ribose", "prebiotic chemistry", "carbonaceous chondrite", "astrobiology"],
  },
  {
    slug: "yunxian-oldest-in-situ-homo-erectus-crania",
    title: "Yunxian's 1.77-Million-Year-Old Homo Erectus Crania",
    categorySlug: "archaeology",
    subtopic: "Human origins",
    year: 2026,
    dateDiscovered: "2026-02-18",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-07-14",
    location: {
      name: "Xuetangliangzi site, Yunyang District, Hubei",
      lat: 32.83,
      lng: 110.82,
      country: "China",
    },
    discoveringOrg: "Shantou University, Nanjing Normal University, and Purdue University-led team",
    scientificName: "Homo erectus",
    classification: "Paleoanthropology · Early Pleistocene hominin geochronology",
    conservationStatus: "Extinct (~1.77 Ma)",
    heroImage: "/images/discoveries/2026/yunxian-oldest-in-situ-homo-erectus-crania.svg",
    imageAlt:
      "Editorial archaeological diagram of three Yunxian crania embedded in a river terrace, bracketed by aluminum-26 and beryllium-10 burial clocks.",
    imageCredit: "Beyond Signal Editorial Graphics",
    imageSourceUrl:
      "https://github.com/StormDoragon/Ocean-dive/tree/main/docs/discovery-image-rights",
    imageLicense: "CC BY 4.0 (original Beyond Signal editorial graphic)",
    imageType: "reconstruction",
    imageRelation: "illustration",
    summary:
      "Cosmogenic-nuclide burial dating placed the fossil-bearing Yunxian sediments at 1.77 ± 0.08 million years old, making the three crania the oldest Homo erectus fossils securely recovered in place in eastern Asia.",
    story: {
      whyThere:
        "The new date brings well-contextualized human fossils in China close to the earliest Homo erectus evidence in western Eurasia and supports rapid dispersal across Asia. The taxonomic assignment and regional fossil chronology remain debated; further dating, reconstruction of the least distorted skull, and comparison with other early Asian hominins are needed.",
      howFound:
        "Researchers measured cosmogenic aluminum-26 and beryllium-10 in quartz gravels from two sediment layers. Isochron burial models account for inherited exposure and post-burial production, giving concordant ages near 1.77 million years for the layer containing the skulls and a deeper unit.",
      whatMakesUnique:
        "Other very early eastern Asian hominin finds have uncertain stratigraphic context or disputed ages, whereas the Yunxian crania were excavated in situ. The dating constrains burial of the surrounding sediment rather than directly dating bone, but the preserved context ties the fossils to that clock.",
    },
    gallery: ["/images/discoveries/2026/yunxian-oldest-in-situ-homo-erectus-crania.svg"],
    paperUrl: "https://doi.org/10.1126/sciadv.ady2270",
    supportingSources: [
      {
        title: "The oldest in situ Homo erectus crania in eastern Asia: The Yunxian site dates to ~1.77 Ma",
        url: "https://www.science.org/doi/10.1126/sciadv.ady2270",
        publisher: "Science Advances",
        tier: "Tier 1",
        sourceType: "paper",
        accessedAt: "2026-07-14",
      },
      {
        title: "Rewriting our understanding of early hominin dispersal from Africa to Eurasia",
        url: "https://www.hawaii.edu/news/2026/02/18/early-human-ancestor-journey/",
        publisher: "University of Hawaiʻi at Mānoa",
        tier: "Tier 1",
        sourceType: "institutional",
        accessedAt: "2026-07-14",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["homo-habilis-knm-er-64061", "homo-naledi"],
    tags: ["Yunxian", "Homo erectus", "human dispersal", "burial dating", "paleoanthropology"],
  },
  {
    slug: "tic-120362137-compact-quadruple-star",
    title: "The Most Compact Known 3+1 Quadruple Star System",
    categorySlug: "space",
    subtopic: "Space missions",
    year: 2026,
    dateDiscovered: "2026-03-03",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-07-14",
    location: {
      name: "University of Szeged, Szeged",
      lat: 46.25,
      lng: 20.14,
      country: "Hungary",
    },
    discoveringOrg: "University of Szeged, MIT, and NASA TESS-led international team",
    scientificName: "TIC 120362137",
    classification: "Hierarchical 3+1 quadruple stellar system",
    heroImage: "/images/discoveries/2026/tic-120362137-compact-quadruple-star.svg",
    imageAlt:
      "Editorial orbital diagram of a 3.28-day eclipsing binary, a third star on a 51.3-day orbit, and a fourth star circling every 1,046 days.",
    imageCredit: "Beyond Signal Editorial Graphics",
    imageSourceUrl:
      "https://github.com/StormDoragon/Ocean-dive/tree/main/docs/discovery-image-rights",
    imageLicense: "CC BY 4.0 (original Beyond Signal editorial graphic)",
    imageType: "diagram",
    imageRelation: "illustration",
    summary:
      "TESS eclipse timing, ground photometry, and spectra revealed TIC 120362137 as the tightest known hierarchical 3+1 quadruple: three stars fit inside a region comparable to Mercury's orbit while a fourth circles outside them.",
    story: {
      whyThere:
        "Extremely compact stellar multiples test how collapsing clouds build stable hierarchies and how strong interactions reshape stars. The 'most compact' label is a record among known 3+1 systems at publication, not a physical upper bound; continued TESS searches and long-term timing can find rivals and refine the outer orbit.",
      howFound:
        "Nine TESS sectors showed a 3.28-day eclipsing binary plus extra eclipse sequences from a third star on a 51.3-day orbit. Eclipse-timing variations, ground-based photometry, and radial velocities for all four spectral components were fitted simultaneously with a spectro-photodynamical model, revealing a fourth star on a 1,046-day orbit.",
      whatMakesUnique:
        "It was both the most compact known 3+1 stellar hierarchy and the first such system with all four stars directly detected in composite spectra. Evolution models suggest mergers may eventually leave a white-dwarf pair, but that future is model-dependent and unfolds far beyond human timescales.",
    },
    gallery: ["/images/discoveries/2026/tic-120362137-compact-quadruple-star.svg"],
    paperUrl: "https://doi.org/10.1038/s41467-026-69223-4",
    supportingSources: [
      {
        title: "Discovery of the most compact 3+1-type quadruple star system TIC 120362137",
        url: "https://www.nature.com/articles/s41467-026-69223-4",
        publisher: "Nature Communications",
        tier: "Tier 1",
        sourceType: "paper",
        accessedAt: "2026-07-14",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["lhs-1903-inside-out-system", "trappist-1-system"],
    tags: ["TIC 120362137", "quadruple star", "TESS", "eclipsing binary", "stellar dynamics"],
  },
  {
    slug: "eurasian-ice-sheet-2-4-million-years",
    title: "A Continental-Scale Eurasian Ice Sheet 2.4 Million Years Ago",
    categorySlug: "earth-science",
    subtopic: "Climate records",
    year: 2026,
    dateDiscovered: "2026-06-19",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-07-14",
    location: {
      name: "Hattem Bed Complex, eastern Netherlands",
      lat: 52.47,
      lng: 6.07,
      country: "Netherlands",
    },
    discoveringOrg: "Aarhus University and Charles University-led international team",
    scientificName: "Hattem Bed Complex glaciogenic deposits",
    classification: "Quaternary geochronology · Eurasian Ice Sheet history",
    heroImage: "/images/discoveries/2026/eurasian-ice-sheet-2-4-million-years.svg",
    imageAlt:
      "Editorial paleoclimate map showing an ice sheet crossing the Baltic basin toward the Netherlands 2.4 million years ago, with paired isotope clocks in gravel.",
    imageCredit: "Beyond Signal Editorial Graphics",
    imageSourceUrl:
      "https://github.com/StormDoragon/Ocean-dive/tree/main/docs/discovery-image-rights",
    imageLicense: "CC BY 4.0 (original Beyond Signal editorial graphic)",
    imageType: "data visualization",
    imageRelation: "illustration",
    summary:
      "Burial dating and zircon provenance showed that Fennoscandian glacial gravels reached the Netherlands about 2.41 million years ago, documenting continental-scale Eurasian ice more than a million years earlier than the classic mid-Pleistocene expansion.",
    story: {
      whyThere:
        "Terrestrial evidence had not matched marine records that implied large Northern Hemisphere ice volumes early in the Pleistocene. The deposit narrows that mismatch, but its age has asymmetric uncertainty and one site cannot map the entire ice margin; additional dated glacial units are needed to reconstruct extent, duration, and climate forcing.",
      howFound:
        "Researchers applied paired aluminum-26 and beryllium-10 burial dating to glacially transported gravels in the Hattem Bed Complex and used detrital-zircon age fingerprints to trace their source to Fennoscandia. The combined evidence gave a first trans-Baltic advance at 2.41 million years ago and a second advance near 1.72 million years ago.",
      whatMakesUnique:
        "The Dutch gravels provide the earliest directly dated evidence that a Eurasian ice sheet crossed the Baltic basin on a continental scale. The paper was published as an accepted, unedited early-access version, so wording and presentation may change even though peer review and the reported measurements are complete.",
    },
    gallery: ["/images/discoveries/2026/eurasian-ice-sheet-2-4-million-years.svg"],
    paperUrl: "https://doi.org/10.1038/s41467-026-74454-6",
    supportingSources: [
      {
        title: "A continental-scale Eurasian ice sheet 2.4 million years ago",
        url: "https://www.nature.com/articles/s41467-026-74454-6",
        publisher: "Nature Communications",
        tier: "Tier 1",
        sourceType: "paper",
        accessedAt: "2026-07-14",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["beyond-epica-oldest-ice-core", "lake-vostok-reached"],
    tags: ["Eurasian Ice Sheet", "Pleistocene", "burial dating", "Fennoscandia", "paleoclimate"],
  },
];
