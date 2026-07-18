import type { Discovery } from "./types";

/** Beyond Signal Discovery Batch 04: 2024 selections. */
export const batch042024Discoveries: Discovery[] = [
  {
    slug: "pebanista-yacuruna-giant-river-dolphin",
    title: "Pebanista yacuruna, the Largest Known River Dolphin",
    categorySlug: "dinosaurs-fossils",
    subtopic: "Ancient mammals",
    year: 2024,
    dateDiscovered: "2024-03-20",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-07-17",
    location: {
      name: "Peruvian proto-Amazonia, Napo River region",
      lat: -2.567,
      lng: -74.717,
      country: "Peru",
    },
    discoveringOrg: "University of Zurich, Museo de Historia Natural, and international team",
    scientificName: "Pebanista yacuruna",
    classification: "Mammalia · Cetacea · Platanistoidea",
    conservationStatus: "Extinct (Middle Miocene)",
    heroImage: "/images/discoveries/2024/pebanista-yacuruna-giant-river-dolphin.svg",
    imageAlt:
      "Editorial reconstruction of the extinct river dolphin Pebanista yacuruna in the murky proto-Amazonian waterway, with a separate outline of the diagnostic skull fossil.",
    imageCredit: "Beyond Signal Editorial Graphics",
    imageSourceUrl:
      "https://github.com/StormDoragon/Ocean-dive/tree/batch-04/discovery-import/docs/discovery-image-rights",
    imageLicense: "CC BY 4.0 (original Beyond Signal editorial graphic)",
    imageType: "reconstruction",
    imageRelation: "illustration",
    summary:
      "A 16-million-year-old skull from Peru established Pebanista yacuruna as a new, 3–3.5-metre river dolphin and the closest known fossil relative of living South Asian river dolphins.",
    story: {
      whyThere:
        "Freshwater dolphins evolved repeatedly, but their fossil histories are sparse. Pebanista offers a rare calibration point for that history, although a single skull cannot reconstruct its full body, behavior, or exact extinction pathway; more material and environmental records are needed to test those broader questions.",
      howFound:
        "A field team recovered the holotype skull, MUSM 4017, from Miocene deposits in Peruvian Amazonia. Researchers described its anatomy, compared it with living and extinct toothed whales, and placed it in phylogenetic analyses alongside platanistoid dolphins.",
      whatMakesUnique:
        "The direct evidence is the skull’s morphology and its dated geological context. Its estimated body length and close relationship to South Asian river dolphins are comparative inferences from the fossil and phylogeny, which together revise the geographic history of this dolphin lineage without making the animal a direct ancestor of any living species.",
    },
    gallery: ["/images/discoveries/2024/pebanista-yacuruna-giant-river-dolphin.svg"],
    paperUrl: "https://doi.org/10.1126/sciadv.adk6320",
    primarySourceUrl: "https://www.science.org/doi/10.1126/sciadv.adk6320",
    supportingSources: [
      {
        title: "Ancient Giant Dolphin Discovered in the Amazon",
        url: "https://www.news.uzh.ch/en/articles/media/2024/Giant-Dolphin.html",
        publisher: "University of Zurich",
        tier: "Tier 1",
        sourceType: "institutional",
        accessedAt: "2026-07-17",
      },
      {
        title: "The largest freshwater odontocete: A South Asian river dolphin relative from the proto-Amazonia",
        url: "https://pubmed.ncbi.nlm.nih.gov/38507490/",
        publisher: "PubMed",
        tier: "Tier 1",
        sourceType: "reference",
        accessedAt: "2026-07-17",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["perucetus-colossus", "qikiqtania-wakei"],
    tags: ["Pebanista yacuruna", "river dolphin", "Miocene", "peru", "cetacean evolution"],
  },
  {
    slug: "bicyclus-anynana-sex-determination",
    title: "A New Sex-Determination Mechanism in an African Butterfly",
    categorySlug: "biology",
    subtopic: "Genetics",
    year: 2024,
    dateDiscovered: "2024-05-03",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-07-17",
    location: {
      name: "Biology Centre CAS, České Budějovice",
      lat: 48.972,
      lng: 14.448,
      country: "Czech Republic",
    },
    discoveringOrg: "Biology Centre CAS, University of Liverpool, and international collaborators",
    scientificName: "Bicyclus anynana",
    classification: "Animalia · Arthropoda · Lepidoptera · Nymphalidae",
    heroImage: "/images/discoveries/2024/bicyclus-anynana-sex-determination.svg",
    imageAlt:
      "Editorial genetics diagram of a Bicyclus anynana butterfly with two contrasting Masculinizer gene variants shown as paired sequence ribbons, without portraying the mechanism as a universal butterfly rule.",
    imageCredit: "Beyond Signal Editorial Graphics",
    imageSourceUrl:
      "https://github.com/StormDoragon/Ocean-dive/tree/batch-04/discovery-import/docs/discovery-image-rights",
    imageLicense: "CC BY 4.0 (original Beyond Signal editorial graphic)",
    imageType: "diagram",
    imageRelation: "illustration",
    summary:
      "Work in Bicyclus anynana showed that combinations of variants of the Z-linked Masculinizer gene determine sex, revealing a sex-determination mechanism not previously described in butterflies.",
    story: {
      whyThere:
        "Sex determination has evolved repeatedly, and its diversity matters for understanding development, population genetics, and conservation. This mechanism is demonstrated in Bicyclus anynana, not all butterflies; whether it occurs in other lineages and how it affects vulnerable wild populations are separate questions.",
      howFound:
        "The team combined genome and expression analyses with experimental tests of the Masculinizer locus in the squinting bush brown butterfly. Their results linked one gene variant to female development and two different variants to male development, while embryos carrying two identical variants did not survive.",
      whatMakesUnique:
        "The direct observation is the relationship between specific Masculinizer variant combinations and developmental outcomes in this species. The authors’ interpretation that the mechanism independently converged on a honeybee-like solution is supported by comparative genetics, but it does not make the two systems identical or establish the same mechanism across Lepidoptera.",
    },
    gallery: ["/images/discoveries/2024/bicyclus-anynana-sex-determination.svg"],
    paperUrl: "https://doi.org/10.1126/sciadv.adj6979",
    primarySourceUrl: "https://www.science.org/doi/10.1126/sciadv.adj6979",
    supportingSources: [
      {
        title: "Male or female? We’ve discovered the genetic mechanism that determines sex development in butterflies",
        url: "https://www.bc.cas.cz/en/news/news-detail/7256-male-or-female-weve-discovered-the-genetic-mechanism-that-determines-sex-development-in-butterflies/",
        publisher: "Biology Centre CAS",
        tier: "Tier 1",
        sourceType: "institutional",
        accessedAt: "2026-07-17",
      },
      {
        title: "Zygosity-based sex determination in a butterfly drives hypervariability of Masculinizer",
        url: "https://pubmed.ncbi.nlm.nih.gov/38701204/",
        publisher: "PubMed",
        tier: "Tier 1",
        sourceType: "reference",
        accessedAt: "2026-07-17",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["crocodile-facultative-parthenogenesis", "human-pangenome-reference"],
    tags: ["Bicyclus anynana", "sex determination", "Masculinizer", "butterfly genetics", "Z chromosome"],
  },
  {
    slug: "bridge-rna-programmable-recombination",
    title: "Bridge RNAs Link DNA Targets and Donors for Programmable Recombination",
    categorySlug: "technology",
    subtopic: "Biotechnology",
    year: 2024,
    dateDiscovered: "2024-06-26",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-07-17",
    location: {
      name: "Arc Institute, Palo Alto",
      lat: 37.441,
      lng: -122.143,
      country: "United States",
    },
    discoveringOrg: "Arc Institute, University of California Berkeley, University of Tokyo, and collaborators",
    scientificName: "IS110 bridge RNA/recombinase system",
    classification: "Molecular biotechnology · RNA-guided DNA recombination",
    heroImage: "/images/discoveries/2024/bridge-rna-programmable-recombination.svg",
    imageAlt:
      "Editorial molecular diagram of an IS110 bridge RNA using two separate loops to match a donor DNA segment and a target DNA segment for recombination.",
    imageCredit: "Beyond Signal Editorial Graphics",
    imageSourceUrl:
      "https://github.com/StormDoragon/Ocean-dive/tree/batch-04/discovery-import/docs/discovery-image-rights",
    imageLicense: "CC BY 4.0 (original Beyond Signal editorial graphic)",
    imageType: "diagram",
    imageRelation: "illustration",
    summary:
      "Researchers found that IS110 elements use a bridge RNA with independently programmable donor- and target-recognition loops, enabling sequence-specific DNA insertion, excision, and inversion in laboratory experiments.",
    story: {
      whyThere:
        "Many genome-engineering tasks require controlled DNA rearrangements rather than a single cut or base change. The system is a research platform, not an approved human therapy: delivery, activity in different cells, off-target effects, immune responses, and long-term safety all require substantial validation.",
      howFound:
        "The team studied how an IS110 transposon excises and found that its joined non-coding ends form an RNA molecule. Structural, biochemical, and engineering experiments showed that the RNA folds into two loops that base-pair separately with donor and target DNA, and that those recognition sequences can be reprogrammed.",
      whatMakesUnique:
        "The direct finding is a bispecific RNA guide that specifies both sides of a recombination event, unlike systems that only target one genomic address. Demonstrations of insertion, excision, and inversion establish laboratory capability; claims about broad clinical genome design are prospective, not results of this paper.",
    },
    gallery: ["/images/discoveries/2024/bridge-rna-programmable-recombination.svg"],
    paperUrl: "https://doi.org/10.1038/s41586-024-07552-4",
    primarySourceUrl: "https://www.nature.com/articles/s41586-024-07552-4",
    supportingSources: [
      {
        title: "Arc Institute Scientists Discover Next-Generation System for Programmable Genome Design",
        url: "https://arcinstitute.org/news/bridge",
        publisher: "Arc Institute",
        tier: "Tier 1",
        sourceType: "institutional",
        accessedAt: "2026-07-17",
      },
      {
        title: "Bridge RNAs direct programmable recombination of target and donor DNA",
        url: "https://pubmed.ncbi.nlm.nih.gov/38926615/",
        publisher: "PubMed",
        tier: "Tier 1",
        sourceType: "reference",
        accessedAt: "2026-07-17",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["personalized-crispr-cps1-infant", "telomere-to-telomere-complete-human-genome"],
    tags: ["bridge RNA", "IS110", "recombinase", "genome engineering", "DNA recombination"],
  },
  {
    slug: "landau-phonon-polaritons-graphene",
    title: "Landau–Phonon Polaritons Imaged in Graphene Heterostructures",
    categorySlug: "physics",
    subtopic: "Quantum research",
    year: 2024,
    dateDiscovered: "2024-09-13",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-07-17",
    location: {
      name: "Brookhaven National Laboratory, Upton",
      lat: 40.868,
      lng: -72.879,
      country: "United States",
    },
    discoveringOrg: "Brookhaven National Laboratory, Columbia University, and collaborators",
    scientificName: "Landau–phonon polaritons",
    classification: "Condensed-matter physics · Infrared nano-optics",
    heroImage: "/images/discoveries/2024/landau-phonon-polaritons-graphene.svg",
    imageAlt:
      "Editorial data visualization of infrared wavefronts in a graphene and boron-nitride heterostructure, with magnetic-field-tunable hybrid modes represented by avoided crossings.",
    imageCredit: "Beyond Signal Editorial Graphics",
    imageSourceUrl:
      "https://github.com/StormDoragon/Ocean-dive/tree/batch-04/discovery-import/docs/discovery-image-rights",
    imageLicense: "CC BY 4.0 (original Beyond Signal editorial graphic)",
    imageType: "data visualization",
    imageRelation: "illustration",
    summary:
      "Infrared magneto-nanoscopy visualized hybrid Landau–phonon polaritons in graphene heterostructures and showed that their propagation can be tuned with a magnetic field.",
    story: {
      whyThere:
        "Hybrid light–matter modes can concentrate and steer infrared energy far below ordinary optical length scales. The experiment demonstrates nanoscale control in specialized cryogenic materials, not an immediately deployable sensor or communications device; researchers must still establish fabrication tolerance, losses, and useful operating conditions.",
      howFound:
        "Researchers combined graphene with hexagonal boron nitride, applied a magnetic field to quantize graphene’s electronic states into Landau levels, and scanned the structure with infrared near-field microscopy. Spatial interference patterns and spectra revealed hybridization between electronic and phonon-polariton excitations.",
      whatMakesUnique:
        "The direct observations are field-dependent real-space wave patterns and spectral avoided crossings. Calling the modes Landau–phonon polaritons is the physical interpretation that accounts for both measurements; their potential for tunable nanophotonics is a plausible application rather than a finished technology.",
    },
    gallery: ["/images/discoveries/2024/landau-phonon-polaritons-graphene.svg"],
    paperUrl: "https://doi.org/10.1126/sciadv.adp3487",
    primarySourceUrl: "https://www.science.org/doi/10.1126/sciadv.adp3487",
    supportingSources: [
      {
        title: "Landau-phonon polaritons in Dirac heterostructures",
        url: "https://pubmed.ncbi.nlm.nih.gov/39270026/",
        publisher: "PubMed",
        tier: "Tier 1",
        sourceType: "reference",
        accessedAt: "2026-07-17",
      },
      {
        title: "Lukas Wehmeier, National Synchrotron Light Source II",
        url: "https://www.bnl.gov/staff/lwehmeier",
        publisher: "Brookhaven National Laboratory",
        tier: "Tier 1",
        sourceType: "institutional",
        accessedAt: "2026-07-17",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["magnetic-field-boosted-graphene-superconductors", "willow-below-threshold-quantum-error-correction"],
    tags: ["graphene", "polaritons", "Landau levels", "infrared nano-optics", "heterostructures"],
  },
];
