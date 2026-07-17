import type { Discovery } from "./types";

/** Beyond Signal Discovery Batch 04: 2023 selections. */
export const batch042023Discoveries: Discovery[] = [
  {
    slug: "methyl-cation-protoplanetary-disk",
    title: "JWST Detects the Methyl Cation in a Protoplanetary Disk",
    categorySlug: "space",
    subtopic: "Space missions",
    year: 2023,
    dateDiscovered: "2023-06-26",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-07-17",
    location: {
      name: "Space Telescope Science Institute, Baltimore",
      lat: 39.329,
      lng: -76.62,
      country: "United States",
    },
    discoveringOrg: "PDRs4All JWST Early Release Science team",
    scientificName: "CH₃⁺ (methyl cation)",
    classification: "Interstellar chemistry · Protoplanetary disk spectroscopy",
    heroImage: "/images/discoveries/2023/methyl-cation-protoplanetary-disk.svg",
    imageAlt:
      "Editorial artist impression of a young star and its protoplanetary disk, with a highlighted methyl-cation symbol shown as a schematic spectral detection rather than a photographed molecule.",
    imageCredit: "Beyond Signal Editorial Graphics",
    imageSourceUrl:
      "https://github.com/StormDoragon/Ocean-dive/tree/batch-04/discovery-import/docs/discovery-image-rights",
    imageLicense: "CC BY 4.0 (original Beyond Signal editorial graphic)",
    imageType: "artist impression",
    imageRelation: "illustration",
    summary:
      "JWST spectra provided the first detection in space of CH₃⁺, the methyl cation, in a planet-forming disk in the Orion Nebula—direct evidence for a reactive carbon ion long expected to help initiate interstellar chemistry.",
    story: {
      whyThere:
        "CH₃⁺ readily reacts with other molecules and is a key theoretical stepping stone toward larger carbon-bearing compounds. Its presence does not show that life-related molecules or planets have formed in the disk; researchers still need to trace how this ion behaves across different radiation fields, disk layers, and chemical environments.",
      howFound:
        "The PDRs4All team used Webb’s infrared spectroscopy to study the irradiated disk d203-506 in Orion. They matched a set of observed emission features to calculations for vibrational transitions of CH₃⁺ and evaluated whether other plausible molecules could reproduce the pattern.",
      whatMakesUnique:
        "The direct result is the molecular spectral signature assigned to the methyl cation in a protoplanetary disk. The importance for complex organic chemistry is an interpretation of CH₃⁺’s known reactivity and the disk’s radiation environment, not a detection of complex organics made by the ion in that system.",
    },
    gallery: ["/images/discoveries/2023/methyl-cation-protoplanetary-disk.svg"],
    paperUrl: "https://doi.org/10.1038/s41586-023-06307-x",
    primarySourceUrl: "https://www.nature.com/articles/s41586-023-06307-x",
    supportingSources: [
      {
        title: "Webb Makes First Detection of Crucial Carbon Molecule",
        url: "https://science.nasa.gov/missions/webb/webb-makes-first-detection-of-crucial-carbon-molecule/",
        publisher: "NASA Science",
        tier: "Tier 1",
        sourceType: "institutional",
        accessedAt: "2026-07-17",
      },
      {
        title: "Webb detects the methyl cation in a protoplanetary disk",
        url: "https://esawebb.org/news/weic2315/",
        publisher: "ESA/Webb",
        tier: "Tier 1",
        sourceType: "institutional",
        accessedAt: "2026-07-17",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["hops-315-planet-formation", "wasp-39b-carbon-dioxide"],
    tags: ["jwst", "methyl cation", "CH3+", "protoplanetary disk", "Orion Nebula"],
  },
  {
    slug: "nyayanga-oldowan-hippo-butchery",
    title: "Oldowan Tools at Nyayanga Butchered Hippos",
    categorySlug: "archaeology",
    subtopic: "Artifacts",
    year: 2023,
    dateDiscovered: "2023-02-09",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-07-17",
    location: {
      name: "Nyayanga, Homa Peninsula",
      lat: -0.389,
      lng: 34.344,
      country: "Kenya",
    },
    discoveringOrg: "Homa Peninsula Paleoanthropology Project and Smithsonian-led team",
    classification: "Archaeology · Oldowan stone tools and faunal processing",
    heroImage: "/images/discoveries/2023/nyayanga-oldowan-hippo-butchery.svg",
    imageAlt:
      "Editorial reconstruction of Oldowan stone tools alongside a hippo bone with cut-mark and percussion-mark callouts at the Nyayanga excavation site.",
    imageCredit: "Beyond Signal Editorial Graphics",
    imageSourceUrl:
      "https://github.com/StormDoragon/Ocean-dive/tree/batch-04/discovery-import/docs/discovery-image-rights",
    imageLicense: "CC BY 4.0 (original Beyond Signal editorial graphic)",
    imageType: "reconstruction",
    imageRelation: "illustration",
    summary:
      "At Nyayanga in Kenya, researchers documented roughly 2.9-million-year-old Oldowan tools together with animal bones bearing evidence of butchery, including hippopotamid remains.",
    story: {
      whyThere:
        "Very early stone-tool evidence is essential for testing where hominins acquired meat and how broadly Oldowan technology spread. Tools and bones from one site do not identify their maker or prove a single diet; the associated Paranthropus teeth are nearby evidence, not a demonstration that Paranthropus made the tools.",
      howFound:
        "Excavators recovered more than 300 stone artifacts from dated deposits at Nyayanga and examined animal bones for cut marks, percussion damage, and other traces of processing. Geological dating and stratigraphic work place the assemblage at about 2.9 million years old, while the assemblage’s shapes and use-wear align with Oldowan technology.",
      whatMakesUnique:
        "The direct evidence joins a large, dated Oldowan assemblage with marked large-animal bones at a site far west of the classic Olduvai Gorge record. The study expands the geographic and behavioral evidence for early tool users, but the identity of the hominin toolmakers remains unresolved.",
    },
    gallery: ["/images/discoveries/2023/nyayanga-oldowan-hippo-butchery.svg"],
    paperUrl: "https://doi.org/10.1126/science.abo7452",
    primarySourceUrl: "https://www.science.org/doi/10.1126/science.abo7452",
    supportingSources: [
      {
        title: "We found 2.9-million-year-old stone tools used to butcher hippos",
        url: "https://leakeyfoundation.org/we-found-2-9-million-year-old-stone-tools/",
        publisher: "The Leakey Foundation",
        tier: "Tier 2",
        sourceType: "institutional",
        accessedAt: "2026-07-17",
      },
      {
        title: "Expanded geographic distribution and dietary strategies of the earliest Oldowan hominins and Paranthropus",
        url: "https://pubmed.ncbi.nlm.nih.gov/36758076/",
        publisher: "PubMed",
        tier: "Tier 1",
        sourceType: "reference",
        accessedAt: "2026-07-17",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["kalambo-falls-wooden-structure", "mandrin-modern-human-incursion"],
    tags: ["Oldowan", "Nyayanga", "stone tools", "butchery", "early hominins"],
  },
  {
    slug: "anteromedial-thalamus-memory-consolidation",
    title: "The Anteromedial Thalamus Gates Long-Term Memory in Mice",
    categorySlug: "biology",
    subtopic: "Neuroscience",
    year: 2023,
    dateDiscovered: "2023-03-30",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-07-17",
    location: {
      name: "Rockefeller University, New York City",
      lat: 40.762,
      lng: -73.956,
      country: "United States",
    },
    discoveringOrg: "Rockefeller University Laboratory of Neural Dynamics and Cognition",
    scientificName: "Anteromedial thalamus (AM)",
    classification: "Neuroscience · Thalamo-cortical memory circuit",
    heroImage: "/images/discoveries/2023/anteromedial-thalamus-memory-consolidation.svg",
    imageAlt:
      "Editorial diagram of mouse hippocampus, anteromedial thalamus, and anterior cingulate cortex linked by highlighted pathways during a virtual-reality memory task.",
    imageCredit: "Beyond Signal Editorial Graphics",
    imageSourceUrl:
      "https://github.com/StormDoragon/Ocean-dive/tree/batch-04/discovery-import/docs/discovery-image-rights",
    imageLicense: "CC BY 4.0 (original Beyond Signal editorial graphic)",
    imageType: "diagram",
    imageRelation: "illustration",
    summary:
      "Longitudinal recordings and targeted perturbations in mice identified the anteromedial thalamus as a circuit node that helps select and stabilize salient memories for long-term cortical storage.",
    story: {
      whyThere:
        "Memories initially depend strongly on the hippocampus but can become distributed across cortex over weeks. This mouse study identifies a circuit-level mechanism, not a treatment for memory loss in people; translation will require testing homologous pathways, disease models, safety, and the difference between controlled tasks and human experience.",
      howFound:
        "Mice learned routes in a virtual-reality task while the team recorded neural activity in hippocampus, anteromedial thalamus, and anterior cingulate cortex over weeks. Temporarily inhibiting the anteromedial thalamus during learning left short-term performance intact but impaired later recall, while stimulation enhanced retention of a weakly rewarded route.",
      whatMakesUnique:
        "The direct evidence is the time-resolved activity pattern and the causal change in later mouse behavior after circuit inhibition or stimulation. The proposed role as a gate between hippocampal and cortical memory systems integrates those measurements; it does not mean that the same intervention can safely strengthen human memory.",
    },
    gallery: ["/images/discoveries/2023/anteromedial-thalamus-memory-consolidation.svg"],
    paperUrl: "https://doi.org/10.1016/j.cell.2023.02.024",
    primarySourceUrl: "https://www.cell.com/cell/fulltext/S0092-8674(23)00167-8",
    supportingSources: [
      {
        title: "Scientists discover brain region linking short-term to long-term memory",
        url: "https://www.rockefeller.edu/news/33790-scientists-discover-brain-region-linking-short-term-to-long-term-memory/",
        publisher: "Rockefeller University",
        tier: "Tier 1",
        sourceType: "institutional",
        accessedAt: "2026-07-17",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["drosophila-larval-brain-connectome", "olo-novel-color-retinal-stimulation"],
    tags: ["memory", "thalamus", "neuroscience", "mice", "virtual reality"],
  },
  {
    slug: "human-lung-bud-microarrays",
    title: "Human Lung-Bud Microarrays Expose a BMP-Linked Infection Signal",
    categorySlug: "technology",
    subtopic: "Biotechnology",
    year: 2023,
    dateDiscovered: "2023-05-09",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-07-17",
    location: {
      name: "Rockefeller University, New York City",
      lat: 40.762,
      lng: -73.956,
      country: "United States",
    },
    discoveringOrg: "Rockefeller University Laboratory of Synthetic Embryology and collaborators",
    scientificName: "Human lung-bud microarrays",
    classification: "Organoid technology · Respiratory disease model",
    heroImage: "/images/discoveries/2023/human-lung-bud-microarrays.svg",
    imageAlt:
      "Editorial microscopy-style diagram of repeated human lung buds arranged on a microarray, with a highlighted BMP signalling pathway and a virus symbol used only as a model-system cue.",
    imageCredit: "Beyond Signal Editorial Graphics",
    imageSourceUrl:
      "https://github.com/StormDoragon/Ocean-dive/tree/batch-04/discovery-import/docs/discovery-image-rights",
    imageLicense: "CC BY 4.0 (original Beyond Signal editorial graphic)",
    imageType: "diagram",
    imageRelation: "illustration",
    summary:
      "Researchers grew reproducible human lung buds in microarrays and used them to identify BMP signalling as a host pathway associated with SARS-CoV-2 infection in the model.",
    story: {
      whyThere:
        "Respiratory disease research needs human tissue models that are standardized enough to compare many conditions at once. Lung buds are a controlled model, not a complete human lung or clinical trial; a change in infection in cultured cells cannot establish that a BMP-targeting drug will treat COVID-19 safely or effectively in patients.",
      howFound:
        "The team patterned human embryonic stem cells on microchips so that they developed into arrays of similar lung-bud structures. They infected the buds with SARS-CoV-2, profiled host responses, compared the signal with post-mortem material, and tested whether blocking BMP signalling changed infection in the experimental system.",
      whatMakesUnique:
        "The direct technical advance is the scalable array of organotypic human lung buds and its measured response to viral infection. BMP dependence is supported within that model and the reported human-tissue comparison, while the medical significance and any intervention remain hypotheses for further preclinical and clinical work.",
    },
    gallery: ["/images/discoveries/2023/human-lung-bud-microarrays.svg"],
    paperUrl: "https://doi.org/10.1016/j.stemcr.2023.03.015",
    primarySourceUrl: "https://www.cell.com/stem-cell-reports/fulltext/S2213-6711(23)00103-0",
    supportingSources: [
      {
        title: "Lab-grown mini lungs could accelerate the study of respiratory diseases",
        url: "https://www.rockefeller.edu/news/34104-lab-grown-mini-lungs-could-accelerate-the-study-of-respiratory-diseases/",
        publisher: "Rockefeller University",
        tier: "Tier 1",
        sourceType: "institutional",
        accessedAt: "2026-07-17",
      },
      {
        title: "Organotypic human lung bud microarrays identify BMP-dependent SARS-CoV-2 infection in lung cells",
        url: "https://pubmed.ncbi.nlm.nih.gov/37084725/",
        publisher: "PubMed",
        tier: "Tier 1",
        sourceType: "reference",
        accessedAt: "2026-07-17",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["first-pig-heart-human-xenotransplant", "personalized-crispr-cps1-infant"],
    tags: ["organoids", "lung buds", "SARS-CoV-2", "BMP signalling", "microarrays"],
  },
];
