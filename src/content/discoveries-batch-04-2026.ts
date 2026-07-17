import type { Discovery } from "./types";

/** Beyond Signal Discovery Batch 04: 2026 selections. */
export const batch042026Discoveries: Discovery[] = [
  {
    slug: "diamantina-zone-whale-necropolis",
    title: "A Deep-Sea Whale Necropolis in the Diamantina Zone",
    categorySlug: "dinosaurs-fossils",
    subtopic: "Fossil discoveries",
    year: 2026,
    dateDiscovered: "2026-06-10",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-07-17",
    location: {
      name: "Diamantina Zone, southeastern Indian Ocean",
      lat: -35,
      lng: 102,
      country: "International waters",
      depthMeters: 7001,
    },
    discoveringOrg: "Institute of Deep-sea Science and Engineering, Chinese Academy of Sciences-led team",
    classification: "Palaeontology · Whale-fall ecology and cetacean fossil record",
    heroImage: "/images/discoveries/2026/diamantina-zone-whale-necropolis.svg",
    imageAlt:
      "Editorial artist impression of a deep-sea whale fall on the Diamantina Zone seafloor, with fossil bones and a modern bone-community shown as distinct time layers rather than a single observed scene.",
    imageCredit: "Beyond Signal Editorial Graphics",
    imageSourceUrl:
      "https://github.com/StormDoragon/Ocean-dive/tree/batch-04/discovery-import/docs/discovery-image-rights",
    imageLicense: "CC BY 4.0 (original Beyond Signal editorial graphic)",
    imageType: "artist impression",
    imageRelation: "illustration",
    summary:
      "Dives in the Diamantina Zone recorded five modern whale-fall communities and 476 fossil cetacean sites over 1,200 kilometres of seafloor, documenting a whale-fall archive that extends back at least 5.3 million years.",
    story: {
      whyThere:
        "Whale falls create food-rich islands on otherwise resource-poor seafloor, but their fossil record has been sparse. This survey characterizes one exceptional zone; estimates of the total number of carcasses and the role of the zone as a regional biological corridor are extrapolations that need further mapping and sampling.",
      howFound:
        "An IDSSE-led expedition made 32 crewed Fendouzhe dives along the Diamantina Zone, documenting active carcasses and fossil sites at 4,616–7,001 metres. The team examined associated animals and bones, and used strontium-isotope dating to constrain the age of the longer fossil record.",
      whatMakesUnique:
        "The direct observations are the five active whale falls, 476 recorded fossil sites, their depths, and associated fauna. The isotopic evidence supports repeated whale falls since at least 5.3 million years ago; broader claims about carbon storage, carcass abundance, and ecosystem connectivity remain model-based extrapolations.",
    },
    gallery: ["/images/discoveries/2026/diamantina-zone-whale-necropolis.svg"],
    paperUrl: "https://doi.org/10.1038/s41586-026-10546-z",
    primarySourceUrl: "https://www.nature.com/articles/s41586-026-10546-z",
    supportingSources: [
      {
        title: "Newly discovered whale necropolis enhances understanding of deep-sea ecology",
        url: "https://www.eurekalert.org/news-releases/1131566",
        publisher: "Chinese Academy of Sciences Headquarters",
        tier: "Tier 1",
        sourceType: "institutional",
        accessedAt: "2026-07-17",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["hadal-trench-chemosynthetic-communities", "perucetus-colossus"],
    tags: ["whale fall", "Diamantina Zone", "cetacean fossils", "deep sea", "Fendouzhe"],
  },
  {
    slug: "casablanca-773000-year-hominins",
    title: "773,000-Year-Old Hominins from Casablanca",
    categorySlug: "archaeology",
    subtopic: "Human origins",
    year: 2026,
    dateDiscovered: "2026-01-07",
    reviewStatus: "preliminary",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-07-17",
    location: {
      name: "Thomas Quarry I, Casablanca",
      lat: 33.586,
      lng: -7.701,
      country: "Morocco",
    },
    discoveringOrg: "Moroccan-French Préhistoire de Casablanca programme and international team",
    scientificName: "Homo sp. (Thomas Quarry I)",
    classification: "Palaeoanthropology · Middle Pleistocene hominin fossils",
    heroImage: "/images/discoveries/2026/casablanca-773000-year-hominins.svg",
    imageAlt:
      "Editorial reconstruction of a Thomas Quarry I cave section with hominin mandibles positioned beside a magnetostratigraphic reversal marker, without depicting a resolved ancestral family tree.",
    imageCredit: "Beyond Signal Editorial Graphics",
    imageSourceUrl:
      "https://github.com/StormDoragon/Ocean-dive/tree/batch-04/discovery-import/docs/discovery-image-rights",
    imageLicense: "CC BY 4.0 (original Beyond Signal editorial graphic)",
    imageType: "reconstruction",
    imageRelation: "illustration",
    summary:
      "Fossils from Thomas Quarry I in Casablanca were tightly dated to about 773,000 years ago and show a mix of traits that the authors place near the root of the Homo sapiens lineage.",
    story: {
      whyThere:
        "The common ancestry of modern humans, Neanderthals, and Denisovans is poorly represented by fossils, especially in Africa. A precise age improves the comparison, but morphology alone cannot identify a direct ancestor or replace genetic evidence; the proposed lineage placement must be tested against additional fossils and analyses.",
      howFound:
        "Researchers excavated mandibles and other hominin remains from Grotte à Hominidés at Thomas Quarry I. They used a high-resolution magnetostratigraphic sequence, including the Matuyama–Brunhes magnetic reversal, alongside faunal context to date the fossil-bearing deposits to about 773,000 years ago.",
      whatMakesUnique:
        "The direct evidence is the hominin anatomy and unusually well-resolved age of the deposits. The description of the fossils as an African population basal to the Homo sapiens lineage follows comparative morphology and phylogenetic analysis; because that ancestry interpretation remains indirect, this entry is marked preliminary.",
    },
    gallery: ["/images/discoveries/2026/casablanca-773000-year-hominins.svg"],
    paperUrl: "https://doi.org/10.1038/s41586-025-09914-y",
    primarySourceUrl: "https://www.nature.com/articles/s41586-025-09914-y",
    supportingSources: [
      {
        title: "Early hominins from Morocco reveal an African lineage near the root of Homo sapiens",
        url: "https://www.mpg.de/25951868/early-hominins-from-thomas-quarry-i-morocco-reveal-an-african-lineage-near-the-root-of-homo-sapiens",
        publisher: "Max Planck Society",
        tier: "Tier 1",
        sourceType: "institutional",
        accessedAt: "2026-07-17",
      },
      {
        title: "Early hominins from Morocco basal to the Homo sapiens lineage",
        url: "https://pubmed.ncbi.nlm.nih.gov/41501464/",
        publisher: "PubMed",
        tier: "Tier 1",
        sourceType: "reference",
        accessedAt: "2026-07-17",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["ledi-geraru-early-homo-australopithecus", "yunxian-oldest-in-situ-homo-erectus-crania"],
    tags: ["Casablanca", "Thomas Quarry I", "Middle Pleistocene", "hominins", "magnetostratigraphy"],
  },
  {
    slug: "southeast-indian-ridge-rifting-event",
    title: "Seafloor Spreading Captured at the Southeast Indian Ridge",
    categorySlug: "earth-science",
    subtopic: "Earthquakes",
    year: 2026,
    dateDiscovered: "2026-07-08",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-07-17",
    location: {
      name: "Southeast Indian Ridge near Amsterdam Transform Fault",
      lat: -37.12,
      lng: 77.6,
      country: "International waters",
      depthMeters: 2000,
    },
    discoveringOrg: "OHA-GEODAMS Scientific Party",
    classification: "Geophysics · Mid-ocean-ridge seismogeodesy",
    heroImage: "/images/discoveries/2026/southeast-indian-ridge-rifting-event.svg",
    imageAlt:
      "Editorial cross-section diagram of the Southeast Indian Ridge showing measured valley subsidence, horizontal extension, and newly mapped lava flows, with the sill-and-dyke explanation clearly presented as an interpretation.",
    imageCredit: "Beyond Signal Editorial Graphics",
    imageSourceUrl:
      "https://github.com/StormDoragon/Ocean-dive/tree/batch-04/discovery-import/docs/discovery-image-rights",
    imageLicense: "CC BY 4.0 (original Beyond Signal editorial graphic)",
    imageType: "diagram",
    imageRelation: "illustration",
    summary:
      "An autonomous seismogeodetic observatory captured a 2024 rifting event at the Southeast Indian Ridge, directly measuring seismicity, metre-scale deformation, and fresh lava emplacement at a mid-ocean ridge.",
    story: {
      whyThere:
        "Most seafloor spreading happens far from continuous observation, leaving the short events that create ocean crust poorly understood. The measurements capture one ridge segment and one event; its detailed partitioning between dykes, faults, and magma reservoirs should not be assumed to describe all mid-ocean ridges.",
      howFound:
        "The OHA-GEODAMS observatory combined hydroacoustic monitoring, direct-path acoustic ranging, bottom-pressure measurements, and repeated shipboard bathymetry. It recorded a swarm beginning on 26 April 2024, more than a metre of horizontal extension, 4.2 metres of valley-floor subsidence, and new lava flows totaling about 148–160 million cubic metres.",
      whatMakesUnique:
        "The direct observations are the timing of seismicity, pressure-derived vertical motion, acoustic baseline changes, and before-and-after bathymetry. The authors interpret their combination as a deflating sill feeding propagating dykes and largely aseismic normal-fault slip; that mechanistic picture is a model constrained by, not identical to, the measurements.",
    },
    gallery: ["/images/discoveries/2026/southeast-indian-ridge-rifting-event.svg"],
    paperUrl: "https://doi.org/10.1038/s41586-026-10785-0",
    primarySourceUrl: "https://www.nature.com/articles/s41586-026-10785-0",
    supportingSources: [
      {
        title: "Anatomy of a seafloor spreading event captured by in situ seismogeodesy",
        url: "https://pubmed.ncbi.nlm.nih.gov/42420448/",
        publisher: "PubMed",
        tier: "Tier 1",
        sourceType: "reference",
        accessedAt: "2026-07-17",
      },
      {
        title: "OHA-GEODAMS: 2024 seismo-geodetic recordings of a seafloor spreading event",
        url: "https://data.univ-lr.fr/datasets/867",
        publisher: "University of La Rochelle data repository",
        tier: "Tier 1",
        sourceType: "reference",
        accessedAt: "2026-07-17",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["hunga-tonga-eruption", "dark-oxygen-abyssal-seafloor"],
    tags: ["seafloor spreading", "Southeast Indian Ridge", "rift", "seismogeodesy", "lava flows"],
  },
  {
    slug: "magnetic-field-boosted-graphene-superconductors",
    title: "Magnetic Fields Boost Superconductivity in Rhombohedral Graphene",
    categorySlug: "physics",
    subtopic: "Quantum research",
    year: 2026,
    dateDiscovered: "2026-06-29",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-07-17",
    location: {
      name: "Massachusetts Institute of Technology, Cambridge",
      lat: 42.36,
      lng: -71.094,
      country: "United States",
    },
    discoveringOrg: "MIT, University of Basel, and international collaborators",
    scientificName: "Rhombohedral multilayer graphene",
    classification: "Condensed-matter physics · Unconventional superconductivity",
    heroImage: "/images/discoveries/2026/magnetic-field-boosted-graphene-superconductors.svg",
    imageAlt:
      "Editorial data visualization of rhombohedral graphene layers with superconducting regions that persist or strengthen under an applied magnetic-field arrow, without asserting a resolved microscopic pairing mechanism.",
    imageCredit: "Beyond Signal Editorial Graphics",
    imageSourceUrl:
      "https://github.com/StormDoragon/Ocean-dive/tree/batch-04/discovery-import/docs/discovery-image-rights",
    imageLicense: "CC BY 4.0 (original Beyond Signal editorial graphic)",
    imageType: "data visualization",
    imageRelation: "illustration",
    summary:
      "Transport experiments in rhombohedral four- and five-layer graphene revealed superconducting states that persist, strengthen, or emerge in magnetic fields that would ordinarily suppress conventional superconductivity.",
    story: {
      whyThere:
        "Magnetic fields usually disrupt conventional electron pairs, so field-enhanced behavior is a strong clue to unconventional superconductivity. The experiment does not establish a usable room-temperature or power-grid material; the microscopic pairing mechanism, sensitivity to disorder, and engineering route remain open research questions.",
      howFound:
        "The team fabricated exceptionally clean rhombohedral multilayer-graphene devices, tuned their carrier density electrostatically, and measured electrical transport under in-plane and perpendicular magnetic fields. They observed several superconducting states in which the critical response survived fields near 9 tesla, with some states enhanced or induced by field.",
      whatMakesUnique:
        "The direct result is the field- and gate-dependent transport signature of superconductivity in specific graphene devices. The proposed links to spin-triplet pairing, topological states, and non-Abelian quasiparticles are interpretations or future directions; the paper explicitly leaves the microscopic mechanism unresolved.",
    },
    gallery: ["/images/discoveries/2026/magnetic-field-boosted-graphene-superconductors.svg"],
    paperUrl: "https://doi.org/10.1038/s41586-026-10815-x",
    primarySourceUrl: "https://www.nature.com/articles/s41586-026-10815-x",
    supportingSources: [
      {
        title: "Graphene can hold multiple states of superconductivity, a new MIT study finds",
        url: "https://news.mit.edu/2026/graphene-can-hold-multiple-states-of-superconductivity-0629",
        publisher: "MIT News",
        tier: "Tier 1",
        sourceType: "institutional",
        accessedAt: "2026-07-17",
      },
      {
        title: "Graphene reveals surprising types of superconducting states",
        url: "https://www.unibas.ch/en/News-Events/News/Uni-Research/Graphene-surprising-types-of-superconductivity-Magnetic-fields-rhombohedral-Graphene.html",
        publisher: "University of Basel",
        tier: "Tier 1",
        sourceType: "institutional",
        accessedAt: "2026-07-17",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["landau-phonon-polaritons-graphene", "willow-below-threshold-quantum-error-correction"],
    tags: ["graphene", "superconductivity", "magnetic fields", "rhombohedral graphene", "quantum materials"],
  },
];
