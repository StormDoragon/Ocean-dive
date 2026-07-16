import type { Discovery } from "./types";

/** Beyond Signal Discovery Batch 03: 2023 selections. */
export const batch032023Discoveries: Discovery[] = [
  {
    slug: "drosophila-larval-brain-connectome",
    title: "The First Complete Connectome of an Insect Brain",
    categorySlug: "biology",
    subtopic: "Neuroscience",
    year: 2023,
    dateDiscovered: "2023-03-10",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-07-14",
    location: {
      name: "MRC Laboratory of Molecular Biology, Cambridge",
      lat: 52.18,
      lng: 0.18,
      country: "United Kingdom",
    },
    discoveringOrg: "MRC Laboratory of Molecular Biology, Cambridge, and Johns Hopkins-led team",
    scientificName: "Drosophila melanogaster larval brain",
    classification: "Neuroscience · Synaptic-resolution whole-brain connectomics",
    heroImage: "/images/discoveries/2023/drosophila-larval-brain-connectome.svg",
    imageAlt:
      "Editorial data diagram of a fruit-fly larval brain formed by thousands of colored neurons and a dense web of synaptic connections.",
    imageCredit: "Beyond Signal Editorial Graphics",
    imageSourceUrl:
      "https://github.com/StormDoragon/Ocean-dive/tree/main/docs/discovery-image-rights",
    imageLicense: "CC BY 4.0 (original Beyond Signal editorial graphic)",
    imageType: "data visualization",
    imageRelation: "illustration",
    summary:
      "Researchers reconstructed all 3,016 neurons and roughly 548,000 synapses in a fruit-fly larva's brain, producing the first complete synaptic-resolution wiring map of an insect brain capable of complex behavior.",
    story: {
      whyThere:
        "A full wiring diagram can reveal organizing principles that are hard to see in isolated circuits and can inform both neuroscience and artificial networks. One larval brain is not a universal atlas, and connectivity alone does not reveal signal strength or moment-to-moment activity; the next work links this structure to physiology, development, and behavior across individuals.",
      howFound:
        "The team imaged thousands of ultrathin brain sections with electron microscopy, traced neuronal branches through the volume, annotated synapses, and represented the result as a directed network. Network analysis identified hubs, recurrent loops, multisensory convergence, cross-hemisphere pathways, and 93 connectivity-defined neuron types.",
      whatMakesUnique:
        "Earlier complete connectomes covered much smaller nervous systems, while larger brains were mapped only in parts. This dataset joined every neuron and synapse of an entire insect brain in one graph, yet it deliberately excluded the ventral nerve cord and should not be confused with the later adult-fly connectome.",
    },
    gallery: ["/images/discoveries/2023/drosophila-larval-brain-connectome.svg"],
    paperUrl: "https://doi.org/10.1126/science.add9330",
    supportingSources: [
      {
        title: "The connectome of an insect brain",
        url: "https://www.science.org/doi/10.1126/science.add9330",
        publisher: "Science",
        tier: "Tier 1",
        sourceType: "paper",
        accessedAt: "2026-07-14",
      },
      {
        title: "First wiring map of insect brain complete",
        url: "https://www.cam.ac.uk/research/news/first-wiring-map-of-insect-brain-complete",
        publisher: "University of Cambridge",
        tier: "Tier 1",
        sourceType: "institutional",
        accessedAt: "2026-07-14",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["flu-virus-live-imaging", "alphafold-protein-structures"],
    tags: ["connectome", "Drosophila", "neuroscience", "electron microscopy", "synapses"],
  },
  {
    slug: "deepest-fish-izu-ogasawara",
    title: "The Deepest Fish Ever Filmed",
    categorySlug: "ocean",
    subtopic: "Deep-sea expeditions",
    year: 2023,
    dateDiscovered: "2023-04-03",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-07-14",
    location: {
      name: "Izu-Ogasawara Trench",
      lat: 29.1,
      lng: 142.8,
      country: "Japan",
      depthMeters: 8336,
    },
    discoveringOrg: "Minderoo-UWA Deep Sea Research Centre and Tokyo University of Marine Science and Technology",
    scientificName: "Pseudoliparis sp.",
    classification: "Actinopterygii · Liparidae · Hadal snailfish",
    heroImage: "/images/discoveries/2023/deepest-fish-izu-ogasawara.svg",
    imageAlt:
      "Editorial deep-ocean illustration of a pale juvenile snailfish approaching a baited camera at 8,336 meters in a trench.",
    imageCredit: "Beyond Signal Editorial Graphics",
    imageSourceUrl:
      "https://github.com/StormDoragon/Ocean-dive/tree/main/docs/discovery-image-rights",
    imageLicense: "CC BY 4.0 (original Beyond Signal editorial graphic)",
    imageType: "artist impression",
    imageRelation: "illustration",
    summary:
      "A baited lander recorded an unidentified Pseudoliparis snailfish 8,336 meters down in the Izu-Ogasawara Trench, setting the verified depth record for a fish filmed in the ocean.",
    story: {
      whyThere:
        "The record tests the physiological boundary between vertebrate life and the pressure, cold, and limited food of hadal trenches. The individual was not collected, so its species remains unidentified, and a single sighting cannot define the population's full range; repeated imaging and non-destructive sampling are needed to resolve its identity and ecology.",
      howFound:
        "During a 2022 expedition around Japan, researchers lowered baited autonomous cameras into three trenches. The Izu-Ogasawara system filmed a small juvenile of the genus Pseudoliparis at 8,336 meters; days later, traps in the Japan Trench recovered two Pseudoliparis belyaevi at 8,022 meters, the deepest fish specimens physically collected.",
      whatMakesUnique:
        "The camera record exceeded the previous verified fish sighting and closely matched a depth limit the team had predicted from trench temperature and snailfish physiology. The 8,336-meter animal and the 8,022-meter collected fish are separate records and should not be conflated as one specimen or one species.",
    },
    gallery: ["/images/discoveries/2023/deepest-fish-izu-ogasawara.svg"],
    primarySourceUrl:
      "https://www.uwa.edu.au/news/article/2023/april/scientists-break-new-record-after-finding-worlds-deepest-fish",
    supportingSources: [
      {
        title: "Hadal survey recognized for a new world record at 8,336 meters",
        url: "https://www.kaiyodai.ac.jp/faculty/r/news/detail/8336_1.html",
        publisher: "Tokyo University of Marine Science and Technology",
        tier: "Tier 1",
        sourceType: "institutional",
        accessedAt: "2026-07-14",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["mariana-snailfish", "dumbo-octopus-deep"],
    tags: ["deepest fish", "snailfish", "Pseudoliparis", "hadal zone", "Izu-Ogasawara Trench"],
  },
  {
    slug: "crocodile-facultative-parthenogenesis",
    title: "Crocodile Facultative Parthenogenesis Confirmed",
    categorySlug: "biology",
    subtopic: "Genetics",
    year: 2023,
    dateDiscovered: "2023-06-07",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-07-14",
    location: {
      name: "Parque Reptilandia, Dominical",
      lat: 9.28,
      lng: -83.84,
      country: "Costa Rica",
    },
    discoveringOrg: "Virginia Tech and Parque Reptilandia-led team",
    scientificName: "Crocodylus acutus",
    classification: "Reptilia · Crocodylia · Facultative parthenogenesis",
    conservationStatus: "Vulnerable (IUCN)",
    heroImage: "/images/discoveries/2023/crocodile-facultative-parthenogenesis.svg",
    imageAlt:
      "Editorial genetics diagram of an American crocodile curled around an egg, with maternal chromosomes recombining without a paternal line.",
    imageCredit: "Beyond Signal Editorial Graphics",
    imageSourceUrl:
      "https://github.com/StormDoragon/Ocean-dive/tree/main/docs/discovery-image-rights",
    imageLicense: "CC BY 4.0 (original Beyond Signal editorial graphic)",
    imageType: "diagram",
    imageRelation: "illustration",
    summary:
      "Genetic analysis of a fully formed fetus from an egg laid by an isolated American crocodile documented facultative parthenogenesis in crocodilians for the first time.",
    story: {
      whyThere:
        "Parthenogenesis had been documented in birds and several reptile lineages but not their crocodilian relatives, so the case helps trace the reproductive capacity across archosaurs. The fetus was stillborn and this is one captive event, leaving frequency and adaptive value uncertain; broader genomic screening of isolated females is the next test.",
      howFound:
        "A female kept apart from males for about 16 years laid a clutch containing one apparently complete fetus. Microsatellite genotyping showed that its alleles came only from the mother and matched terminal-fusion automixis, in which products of the same meiotic division restore diploidy.",
      whatMakesUnique:
        "The result added Crocodylia to the vertebrate groups capable of switching from sexual reproduction to development without fertilization. Because crocodilians and birds bracket extinct dinosaurs phylogenetically, it makes ancestral archosaur parthenogenesis plausible, but it cannot demonstrate the behavior in dinosaurs.",
    },
    gallery: ["/images/discoveries/2023/crocodile-facultative-parthenogenesis.svg"],
    paperUrl: "https://doi.org/10.1098/rsbl.2023.0129",
    supportingSources: [
      {
        title: "Discovery of facultative parthenogenesis in a new world crocodile",
        url: "https://royalsocietypublishing.org/doi/10.1098/rsbl.2023.0129",
        publisher: "Biology Letters",
        tier: "Tier 1",
        sourceType: "paper",
        accessedAt: "2026-07-14",
      },
      {
        title: "Open-access full text and data links",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10244963/",
        publisher: "National Library of Medicine",
        tier: "Tier 1",
        sourceType: "reference",
        accessedAt: "2026-07-14",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["oldest-amniote-skin-richards-spur", "meraxes-gigas"],
    tags: ["parthenogenesis", "American crocodile", "archosaurs", "genetics", "reproduction"],
  },
  {
    slug: "antihydrogen-gravity-alpha-g",
    title: "Antihydrogen Falls Downward Under Gravity",
    categorySlug: "physics",
    subtopic: "Particle discoveries",
    year: 2023,
    dateDiscovered: "2023-09-27",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-07-14",
    location: {
      name: "CERN Antimatter Factory, Meyrin",
      lat: 46.233,
      lng: 6.055,
      country: "Switzerland",
    },
    discoveringOrg: "ALPHA Collaboration at CERN",
    scientificName: "Antihydrogen (H̄)",
    classification: "Experimental particle physics · Antimatter gravitation",
    heroImage: "/images/discoveries/2023/antihydrogen-gravity-alpha-g.svg",
    imageAlt:
      "Editorial experiment diagram showing antihydrogen atoms released inside the vertical ALPHA-g trap and more annihilation events detected below than above.",
    imageCredit: "Beyond Signal Editorial Graphics",
    imageSourceUrl:
      "https://github.com/StormDoragon/Ocean-dive/tree/main/docs/discovery-image-rights",
    imageLicense: "CC BY 4.0 (original Beyond Signal editorial graphic)",
    imageType: "diagram",
    imageRelation: "illustration",
    summary:
      "The ALPHA-g experiment released trapped antihydrogen atoms in a vertical magnetic apparatus and observed motion consistent with gravitational attraction toward Earth, directly ruling out repulsive antigravity for antihydrogen at the experiment's precision.",
    story: {
      whyThere:
        "General relativity predicts antimatter should fall like matter, but neutral antimatter had never undergone a direct free-fall-style test. The first measurement established the direction and approximate scale, not a precision equivalence test; colder anti-atoms and better field control are needed to compare gravitational acceleration with ordinary matter more tightly.",
      howFound:
        "Antiprotons and positrons were combined into neutral antihydrogen, accumulated in a vertical magnetic trap, and then released by lowering the upper and lower barriers. Researchers counted where atoms annihilated under several deliberately reversed magnetic biases and compared the distributions with detailed trajectory simulations and control measurements.",
      whatMakesUnique:
        "The result was the first direct observation of neutral antimatter responding to Earth's gravity in the expected downward direction. It excluded a repulsive force of roughly one Earth gravity but left a broad uncertainty on the precise acceleration, so it supports rather than completes a test of the weak equivalence principle.",
    },
    gallery: ["/images/discoveries/2023/antihydrogen-gravity-alpha-g.svg"],
    paperUrl: "https://doi.org/10.1038/s41586-023-06527-1",
    supportingSources: [
      {
        title: "Observation of the effect of gravity on the motion of antimatter",
        url: "https://www.nature.com/articles/s41586-023-06527-1",
        publisher: "Nature",
        tier: "Tier 1",
        sourceType: "paper",
        accessedAt: "2026-07-14",
      },
      {
        title: "ALPHA experiment at CERN observes the influence of gravity on antimatter",
        url: "https://home.cern/news/press-release/physics/alpha-experiment-cern-observes-influence-gravity-antimatter",
        publisher: "CERN",
        tier: "Tier 1",
        sourceType: "institutional",
        accessedAt: "2026-07-14",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["higgs-boson", "lead-to-gold-alice"],
    tags: ["antihydrogen", "antimatter", "gravity", "ALPHA-g", "cern"],
  },
];
