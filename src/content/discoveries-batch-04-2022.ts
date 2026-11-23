import type { Discovery } from "./types";

/** Beyond Signal Discovery Batch 04: 2022 selections. */
export const batch042022Discoveries: Discovery[] = [
  {
    slug: "wasp-39b-carbon-dioxide",
    datePublished: "2026-07-18",
    title: "Webb Detects Carbon Dioxide in WASP-39 b’s Atmosphere",
    categorySlug: "space",
    subtopic: "Exoplanets",
    year: 2022,
    dateDiscovered: "2022-08-25",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-07-17",
    location: {
      name: "Space Telescope Science Institute, Baltimore",
      lat: 39.329,
      lng: -76.62,
      country: "United States",
    },
    discoveringOrg: "JWST Transiting Exoplanet Community Early Release Science Team",
    scientificName: "WASP-39 b",
    classification: "Gas giant exoplanet · Transmission spectroscopy",
    heroImage: "/images/discoveries/2022/wasp-39b-carbon-dioxide.svg",
    imageAlt:
      "Editorial diagram of starlight passing through the atmosphere of the transiting gas giant WASP-39 b, with a spectral absorption band representing carbon dioxide.",
    imageCredit: "Beyond Signal Editorial Graphics",
    imageSourceUrl:
      "https://github.com/StormDoragon/Ocean-dive/tree/batch-04/discovery-import/docs/discovery-image-rights",
    imageLicense: "CC BY 4.0 (original Beyond Signal editorial graphic)",
    imageType: "diagram",
    imageRelation: "illustration",
    summary:
      "JWST transmission spectroscopy delivered the first unambiguous carbon-dioxide detection in an exoplanet atmosphere, measuring a strong 4.3-micrometre absorption feature in the hot gas giant WASP-39 b.",
    story: {
      whyThere:
        "Carbon dioxide is useful for reading an atmosphere’s chemical inventory and, in giant planets, for constraining formation models. The result does not make WASP-39 b habitable: it is a highly irradiated gas giant. Future spectra of smaller planets will need much subtler signals and careful treatment of clouds, stellar activity, and instrument systematics.",
      howFound:
        "During a transit, the team used Webb’s Near-Infrared Spectrograph to compare the host star’s light filtered through the planet’s atmosphere with unobscured starlight. The 3.0–5.5-micrometre transmission spectrum contained a prominent absorption feature at 4.3 micrometres, measured at 26-sigma significance and identified as carbon dioxide.",
      whatMakesUnique:
        "The direct observation was the resolved carbon-dioxide absorption band, rather than an inferred color change. Atmospheric models that fit the wider spectrum are interpretations: they point to a metal-enriched, moderately cloudy atmosphere and predict other gases, while a smaller unexplained feature near 4.0 micrometres remains tentative.",
    },
    gallery: ["/images/discoveries/2022/wasp-39b-carbon-dioxide.svg"],
    paperUrl: "https://doi.org/10.1038/s41586-022-05269-w",
    primarySourceUrl: "https://www.nature.com/articles/s41586-022-05269-w",
    supportingSources: [
      {
        title: "NASA’s Webb Detects Carbon Dioxide in Exoplanet Atmosphere",
        url: "https://science.nasa.gov/missions/webb/nasas-webb-detects-carbon-dioxide-in-exoplanet-atmosphere/",
        publisher: "NASA Science",
        tier: "Tier 1",
        sourceType: "institutional",
        accessedAt: "2026-07-17",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["wasp-127b-3d-atmosphere", "toi-6894-b-giant-planet-small-star"],
    tags: ["jwst", "WASP-39 b", "carbon dioxide", "exoplanet atmosphere", "transmission spectroscopy"],
  },
  {
    slug: "global-ocean-rna-viruses",
    datePublished: "2026-07-18",
    title: "A Global Ocean Census of RNA Viruses",
    categorySlug: "ocean",
    subtopic: "Ocean mysteries",
    year: 2022,
    dateDiscovered: "2022-04-08",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-07-17",
    location: {
      name: "Tara Oceans global sampling programme",
      lat: 0,
      lng: 0,
      country: "International waters",
    },
    discoveringOrg: "The Ohio State University, Tara Oceans Consortium, and collaborators",
    classification: "Marine microbiology · Environmental RNA sequencing",
    heroImage: "/images/discoveries/2022/global-ocean-rna-viruses.svg",
    imageAlt:
      "Editorial data visualization of a global ocean transect with colored RNA sequence threads rising from seawater samples into a branching viral family tree.",
    imageCredit: "Beyond Signal Editorial Graphics",
    imageSourceUrl:
      "https://github.com/StormDoragon/Ocean-dive/tree/batch-04/discovery-import/docs/discovery-image-rights",
    imageLicense: "CC BY 4.0 (original Beyond Signal editorial graphic)",
    imageType: "data visualization",
    imageRelation: "illustration",
    summary:
      "A metatranscriptomic survey of ocean samples substantially expanded the known RNA virome, reorganizing major evolutionary groups and revealing that marine RNA viruses are both abundant and deeply diverse.",
    story: {
      whyThere:
        "RNA viruses affect marine microbes that regulate food webs and carbon cycling, yet they are difficult to catalogue because many have no cultured host or close reference genome. Sequence surveys reveal genetic diversity, not a complete census of active infections or a direct measure of each virus’s ecological effect; linking viruses to hosts remains a central next step.",
      howFound:
        "Researchers screened global ocean RNA-sequencing data for genes encoding RNA-dependent RNA polymerase, a hallmark shared by RNA viruses. They built sequence-based evolutionary trees and compared the resulting lineages with existing virus taxonomy, adding many previously unclassified marine viral sequences to the analysis.",
      whatMakesUnique:
        "The direct evidence was a global set of viral polymerase sequences and their placements in phylogenetic trees. The study doubled the recognized RNA-virus phyla and proposed more than half of the newly described classes, while conclusions about early viral evolution and ocean-scale ecological roles remain evolutionary and ecological inferences.",
    },
    gallery: ["/images/discoveries/2022/global-ocean-rna-viruses.svg"],
    paperUrl: "https://doi.org/10.1126/science.abm5847",
    primarySourceUrl: "https://www.science.org/doi/10.1126/science.abm5847",
    supportingSources: [
      {
        title: "Supporting trees and alignments for the marine RNA virome study",
        url: "https://datadryad.org/dataset/doi%3A10.5061/dryad.gb5mkkwqx",
        publisher: "Dryad",
        tier: "Tier 1",
        sourceType: "reference",
        accessedAt: "2026-07-17",
      },
      {
        title: "Global survey of marine RNA viruses sheds light on origins and abundance of Earth’s RNA virome",
        url: "https://www.eurekalert.org/news-releases/948570",
        publisher: "American Association for the Advancement of Science",
        tier: "Tier 1",
        sourceType: "institutional",
        accessedAt: "2026-07-17",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["airborne-edna-vertebrate-biodiversity", "thiomargarita-magnifica-giant-bacterium"],
    tags: ["RNA viruses", "marine virome", "metatranscriptomics", "Tara Oceans", "phylogeny"],
  },
  {
    slug: "mandrin-modern-human-incursion",
    datePublished: "2026-07-18",
    title: "Modern Humans at Grotte Mandrin 54,000 Years Ago",
    categorySlug: "archaeology",
    subtopic: "Human origins",
    year: 2022,
    dateDiscovered: "2022-02-09",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-07-17",
    location: {
      name: "Grotte Mandrin, Drôme",
      lat: 44.255,
      lng: 4.765,
      country: "France",
    },
    discoveringOrg: "CNRS, University of Bordeaux, and international Grotte Mandrin research team",
    scientificName: "Homo sapiens (Mandrin E layer)",
    classification: "Palaeoanthropology · Upper Palaeolithic hominin remains and lithics",
    heroImage: "/images/discoveries/2022/mandrin-modern-human-incursion.svg",
    imageAlt:
      "Editorial reconstruction of a stratified cave-section at Grotte Mandrin, with a human tooth and finely made stone points shown in the dated sediment layer.",
    imageCredit: "Beyond Signal Editorial Graphics",
    imageSourceUrl:
      "https://github.com/StormDoragon/Ocean-dive/tree/batch-04/discovery-import/docs/discovery-image-rights",
    imageLicense: "CC BY 4.0 (original Beyond Signal editorial graphic)",
    imageType: "reconstruction",
    imageRelation: "illustration",
    summary:
      "Teeth, stratigraphy, and stone-tool layers at Grotte Mandrin indicate a short Homo sapiens presence in southeastern France about 54,000 years ago, followed by renewed Neanderthal occupation.",
    story: {
      whyThere:
        "The chronology bears on when and how modern humans entered regions occupied by Neanderthals. A single cave sequence cannot map all of Europe or establish the duration of contact between populations; nearby sites, additional fossil finds, and improved chronological comparisons are needed to test how widespread this early movement was.",
      howFound:
        "Excavators integrated the cave’s layered sediment sequence with nine hominin teeth, lithic technology, and multiple dating methods. The paper identifies a tooth in the E layer as Homo sapiens and places that layer near 54,000 years ago; overlying and underlying occupations were associated with Neanderthal remains or technologies.",
      whatMakesUnique:
        "The key direct evidence is the dated stratigraphic sequence, the dental material, and the associated stone assemblages. The interpretation of a brief early modern-human incursion and subsequent replacement by Neanderthals follows from their ordering; it should not be read as a complete account of population size, ancestry, or social interaction.",
    },
    gallery: ["/images/discoveries/2022/mandrin-modern-human-incursion.svg"],
    paperUrl: "https://doi.org/10.1126/sciadv.abj9496",
    primarySourceUrl: "https://www.science.org/doi/10.1126/sciadv.abj9496",
    supportingSources: [
      {
        title: "Modern human incursion into Neanderthal territories 54,000 years ago at Mandrin, France",
        url: "https://pubmed.ncbi.nlm.nih.gov/35138885/",
        publisher: "PubMed",
        tier: "Tier 1",
        sourceType: "reference",
        accessedAt: "2026-07-17",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["kalambo-falls-wooden-structure", "penghu-denisovan-jaw"],
    tags: ["Grotte Mandrin", "Homo sapiens", "Neanderthals", "Palaeolithic", "human migration"],
  },
  {
    slug: "strange-pentaquark-candidate",
    datePublished: "2026-07-18",
    title: "LHCb’s Strange Pentaquark Candidate",
    categorySlug: "physics",
    subtopic: "Particle discoveries",
    year: 2022,
    dateDiscovered: "2022-07-05",
    reviewStatus: "preliminary",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-07-17",
    location: {
      name: "CERN, Meyrin",
      lat: 46.233,
      lng: 6.055,
      country: "Switzerland",
    },
    discoveringOrg: "LHCb Collaboration at CERN",
    classification: "Hadron spectroscopy · Exotic-hadron resonance",
    heroImage: "/images/discoveries/2022/strange-pentaquark-candidate.svg",
    imageAlt:
      "Editorial diagram of a particle-collision decay chain culminating in a highlighted resonance peak for the strange pentaquark candidate reported by LHCb.",
    imageCredit: "Beyond Signal Editorial Graphics",
    imageSourceUrl:
      "https://github.com/StormDoragon/Ocean-dive/tree/batch-04/discovery-import/docs/discovery-image-rights",
    imageLicense: "CC BY 4.0 (original Beyond Signal editorial graphic)",
    imageType: "diagram",
    imageRelation: "illustration",
    summary:
      "LHCb reported a high-significance resonance consistent with the first pentaquark candidate containing a strange quark, adding a new case to the study of exotic combinations of quarks.",
    story: {
      whyThere:
        "Ordinary hadrons contain two or three quarks, while exotic candidates can expose how the strong force organizes matter in more complex arrangements. A resonance peak does not settle whether the state is a compact five-quark object, a loosely bound hadronic molecule, or a mixture; amplitude studies and independent experimental tests remain important.",
      howFound:
        "The LHCb collaboration analyzed decays of negatively charged B mesons produced in proton-proton collisions. In the relevant decay products, it observed a structure with 15-standard-deviation statistical significance that is consistent with a five-quark state containing charm, anticharm, up, down, and strange quarks.",
      whatMakesUnique:
        "The observation itself is the statistically significant resonance in the decay analysis and the strange-quark content inferred from the measured final state. The internal binding picture is not directly imaged by the detector, so this entry is preliminary: competing theoretical descriptions of the exotic hadron remain open.",
    },
    gallery: ["/images/discoveries/2022/strange-pentaquark-candidate.svg"],
    paperUrl: "https://doi.org/10.1103/PhysRevLett.131.031901",
    primarySourceUrl: "https://home.cern/lhcb-discovers-three-new-exotic-particles/",
    supportingSources: [
      {
        title: "Observation of a J/ψΛ Resonance Consistent with a Strange Pentaquark Candidate",
        url: "https://link.aps.org/doi/10.1103/PhysRevLett.131.031901",
        publisher: "Physical Review Letters",
        tier: "Tier 1",
        sourceType: "paper",
        accessedAt: "2026-07-17",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["lead-to-gold-alice", "antihydrogen-gravity-alpha-g"],
    tags: ["lhcb", "pentaquark", "exotic hadron", "quarks", "cern"],
  },
];
