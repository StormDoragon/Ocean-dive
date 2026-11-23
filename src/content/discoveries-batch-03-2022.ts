import type { Discovery } from "./types";

/** Beyond Signal Discovery Batch 03: 2022 selections. */
export const batch032022Discoveries: Discovery[] = [
  {
    slug: "airborne-edna-vertebrate-biodiversity",
    datePublished: "2026-07-17",
    title: "Airborne eDNA Reveals Terrestrial Vertebrates",
    categorySlug: "biology",
    subtopic: "Genetics",
    year: 2022,
    dateDiscovered: "2022-01-06",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-07-14",
    location: {
      name: "Copenhagen Zoo, Frederiksberg",
      lat: 55.672,
      lng: 12.521,
      country: "Denmark",
    },
    discoveringOrg: "University of Copenhagen and Copenhagen Zoo-led team",
    scientificName: "Airborne environmental DNA (eDNA)",
    classification: "Molecular ecology · Vertebrate biodiversity monitoring",
    heroImage: "/images/discoveries/2022/airborne-edna-vertebrate-biodiversity.svg",
    imageAlt:
      "Editorial diagram of air flowing through a DNA sampler above silhouettes of zoo vertebrates, with colored sequence fragments emerging from the filter.",
    imageCredit: "Beyond Signal Editorial Graphics",
    imageSourceUrl:
      "https://github.com/StormDoragon/Ocean-dive/tree/main/docs/discovery-image-rights",
    imageLicense: "CC BY 4.0 (original Beyond Signal editorial graphic)",
    imageType: "diagram",
    imageRelation: "illustration",
    summary:
      "Two independent zoo studies showed that vertebrate DNA can be collected directly from air and matched to nearby species, establishing airborne eDNA as a practical new route for surveying terrestrial biodiversity.",
    story: {
      whyThere:
        "Wildlife surveys routinely miss quiet, nocturnal, rare, or inaccessible animals. Air sampling could complement cameras, tracks, and acoustic surveys, but zoo demonstrations do not yet establish detection distance or reliability across open, windy ecosystems; the next step is standardized field validation with contamination controls.",
      howFound:
        "The Copenhagen team pulled outdoor air through filters at three zoo locations, extracted trace DNA, amplified vertebrate barcode regions, and compared the sequences with reference databases. They detected 49 vertebrate species, including zoo animals, local wildlife, and fish used as feed; a separate UK team published a parallel proof of concept in the same journal issue.",
      whatMakesUnique:
        "The evidence showed that land-animal DNA does not have to be collected from soil, water, hair, or droppings: biological material suspended in ordinary air can carry a community signal. The result introduced a genuinely new sampling medium while leaving abundance estimates and species-level error rates as active research questions.",
    },
    gallery: ["/images/discoveries/2022/airborne-edna-vertebrate-biodiversity.svg"],
    paperUrl: "https://doi.org/10.1016/j.cub.2021.12.014",
    supportingSources: [
      {
        title: "Measuring biodiversity from DNA in the air",
        url: "https://doi.org/10.1016/j.cub.2021.11.064",
        publisher: "Current Biology",
        tier: "Tier 1",
        sourceType: "paper",
        accessedAt: "2026-07-14",
      },
      {
        title: "Airborne environmental DNA for terrestrial vertebrate community monitoring",
        url: "https://www.cell.com/current-biology/fulltext/S0960-9822%2821%2901690-0",
        publisher: "Current Biology",
        tier: "Tier 1",
        sourceType: "paper",
        accessedAt: "2026-07-14",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["greenland-two-million-year-dna", "human-pangenome-reference"],
    tags: ["environmental dna", "air sampling", "biodiversity", "metabarcoding", "wildlife monitoring"],
  },
  {
    slug: "first-pig-heart-human-xenotransplant",
    datePublished: "2026-07-17",
    title: "The First Gene-Edited Pig Heart Transplant in a Living Human",
    categorySlug: "technology",
    subtopic: "Biotechnology",
    year: 2022,
    dateDiscovered: "2022-06-22",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-07-14",
    location: {
      name: "University of Maryland Medical Center, Baltimore",
      lat: 39.289,
      lng: -76.624,
      country: "United States",
    },
    discoveringOrg: "University of Maryland School of Medicine xenotransplantation team",
    scientificName: "Sus scrofa domesticus to Homo sapiens xenotransplant",
    classification: "Transplant medicine · Gene-edited porcine cardiac xenograft",
    heroImage: "/images/discoveries/2022/first-pig-heart-human-xenotransplant.svg",
    imageAlt:
      "Editorial medical diagram linking a gene-edited pig heart to a human circulatory silhouette, with ten edit markers and an ECG trace.",
    imageCredit: "Beyond Signal Editorial Graphics",
    imageSourceUrl:
      "https://github.com/StormDoragon/Ocean-dive/tree/main/docs/discovery-image-rights",
    imageLicense: "CC BY 4.0 (original Beyond Signal editorial graphic)",
    imageType: "diagram",
    imageRelation: "illustration",
    summary:
      "Surgeons transplanted a heart from a pig carrying ten targeted genetic modifications into a living adult under compassionate-use authorization, and the organ supported circulation without immediate rejection for several weeks.",
    story: {
      whyThere:
        "Donor hearts are scarce, so a safe animal-organ supply could transform transplantation. This single compassionate-use case did not demonstrate durable efficacy: the patient died 60 days after surgery, and later evidence implicated several interacting causes, including graft dysfunction and porcine cytomegalovirus; controlled trials and stronger pathogen screening were the necessary next steps.",
      howFound:
        "The donor pig had four genes inactivated and six human genes added to reduce immune rejection, abnormal growth, and clotting problems. Clinicians monitored cardiac output, biopsies, immune markers, infection, and imaging after the January 7 operation; the peer-reviewed report documented the procedure and the graft's early function.",
      whatMakesUnique:
        "It was the first transplant of a gene-edited pig heart into a living human, moving modern cardiac xenotransplantation from non-human-primate studies into clinical experience. It was a milestone in feasibility, not a successful long-term treatment, and its limits directly shaped later protocols.",
    },
    gallery: ["/images/discoveries/2022/first-pig-heart-human-xenotransplant.svg"],
    paperUrl: "https://doi.org/10.1056/NEJMoa2201422",
    supportingSources: [
      {
        title: "Genetically Modified Porcine-to-Human Cardiac Xenotransplantation",
        url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2201422",
        publisher: "New England Journal of Medicine",
        tier: "Tier 1",
        sourceType: "paper",
        accessedAt: "2026-07-14",
      },
      {
        title: "First successful transplant of a genetically modified pig heart into a human",
        url: "https://www.medschool.umaryland.edu/news/2022/first-successful-transplant-of-a-genetically-modified-pig-heart-into-a-human.html",
        publisher: "University of Maryland School of Medicine",
        tier: "Tier 1",
        sourceType: "institutional",
        accessedAt: "2026-07-14",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["human-pangenome-reference", "alphafold-protein-structures"],
    tags: ["xenotransplantation", "gene editing", "pig heart", "transplant medicine", "compassionate use"],
  },
  {
    slug: "vfts-243-dormant-black-hole",
    datePublished: "2026-07-17",
    title: "VFTS 243, an Extragalactic Dormant Black Hole",
    categorySlug: "space",
    subtopic: "Black holes",
    year: 2022,
    dateDiscovered: "2022-07-18",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-07-14",
    location: {
      name: "KU Leuven, Leuven",
      lat: 50.88,
      lng: 4.7,
      country: "Belgium",
    },
    discoveringOrg: "KU Leuven and European Southern Observatory-led team",
    scientificName: "VFTS 243",
    classification: "O-type star · X-ray-quiet stellar-mass black-hole binary",
    heroImage: "/images/discoveries/2022/vfts-243-dormant-black-hole.svg",
    imageAlt:
      "Editorial artist impression of a blue O-type star orbiting an unseen black hole, traced by a nearly circular orbit against the Tarantula Nebula.",
    imageCredit: "Beyond Signal Editorial Graphics",
    imageSourceUrl:
      "https://github.com/StormDoragon/Ocean-dive/tree/main/docs/discovery-image-rights",
    imageLicense: "CC BY 4.0 (original Beyond Signal editorial graphic)",
    imageType: "artist impression",
    imageRelation: "illustration",
    summary:
      "Six years of stellar spectra revealed that the massive star VFTS 243 orbits an unseen companion of at least nine solar masses, making the companion the first unambiguous X-ray-quiet stellar black hole identified outside the Milky Way at the time.",
    story: {
      whyThere:
        "Most known stellar black holes announce themselves by accreting gas and producing X-rays, biasing the census toward active systems. VFTS 243 provides a quieter evolutionary laboratory, although its exact mass and formation history depend on orbital inclination; longer monitoring can tighten the orbit and test how often massive stars collapse with little kick.",
      howFound:
        "Researchers analyzed 37 epochs of Very Large Telescope spectroscopy from the Tarantula Nebula and measured the O star's 10.4-day radial-velocity cycle. They found no spectrum from a normal companion, excluded non-degenerate alternatives at high confidence, and inferred an unseen object with a minimum mass in the black-hole range; archival X-ray data showed no bright accretion source.",
      whatMakesUnique:
        "The binary's nearly circular orbit and modest motion indicate that the black hole probably formed with little ejected material and little natal kick. That directly constrains quiet stellar collapse and the precursors of black-hole mergers, while the word dormant describes low accretion rather than an absence of gravity or orbital effects.",
    },
    gallery: ["/images/discoveries/2022/vfts-243-dormant-black-hole.svg"],
    paperUrl: "https://doi.org/10.1038/s41550-022-01730-y",
    supportingSources: [
      {
        title: "An X-ray-quiet black hole born with a negligible kick in a massive binary within the Large Magellanic Cloud",
        url: "https://www.nature.com/articles/s41550-022-01730-y",
        publisher: "Nature Astronomy",
        tier: "Tier 1",
        sourceType: "paper",
        accessedAt: "2026-07-14",
      },
      {
        title: "Black hole police discover a dormant black hole outside our galaxy",
        url: "https://www.eso.org/public/news/eso2210/",
        publisher: "European Southern Observatory",
        tier: "Tier 1",
        sourceType: "institutional",
        accessedAt: "2026-07-14",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["gravitational-waves-gw150914", "m87-black-hole-image"],
    tags: ["VFTS 243", "dormant black hole", "Large Magellanic Cloud", "massive binary", "stellar collapse"],
  },
  {
    slug: "natovenator-polydontus-streamlined-dinosaur",
    datePublished: "2026-07-17",
    title: "Natovenator, a Streamlined Swimming Dinosaur",
    categorySlug: "dinosaurs-fossils",
    subtopic: "New dinosaur species",
    year: 2022,
    dateDiscovered: "2022-12-01",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-07-14",
    location: {
      name: "Hermiin Tsav, Gobi Desert",
      lat: 43.48,
      lng: 99.62,
      country: "Mongolia",
    },
    discoveringOrg: "Seoul National University and Mongolian Academy of Sciences-led team",
    scientificName: "Natovenator polydontus",
    classification: "Animalia · Dinosauria · Dromaeosauridae · Halszkaraptorinae",
    conservationStatus: "Extinct (Late Cretaceous)",
    heroImage: "/images/discoveries/2022/natovenator-polydontus-streamlined-dinosaur.svg",
    imageAlt:
      "Editorial reconstruction of the small feathered dinosaur Natovenator swimming above a Cretaceous lake bed, with its flattened rib cage outlined.",
    imageCredit: "Beyond Signal Editorial Graphics",
    imageSourceUrl:
      "https://github.com/StormDoragon/Ocean-dive/tree/main/docs/discovery-image-rights",
    imageLicense: "CC BY 4.0 (original Beyond Signal editorial graphic)",
    imageType: "reconstruction",
    imageRelation: "illustration",
    summary:
      "A well-articulated dromaeosaurid skeleton from Mongolia preserved backward-swept ribs and a flattened torso, providing the first compelling evidence of a streamlined body in a non-avian theropod dinosaur.",
    story: {
      whyThere:
        "Non-avian dinosaurs occupied many habitats, but strong evidence for swimming adaptations is rare and debated. Natovenator expands the known range of theropod body plans; because behavior cannot fossilize directly, future specimens and biomechanical tests must determine how efficiently it swam and whether water was central to its ecology.",
      howFound:
        "Researchers described a mostly articulated skeleton with a nearly complete skull from the Baruungoyot Formation and used micro-CT imaging plus anatomical and phylogenetic comparisons. The posteriorly directed ribs imply a long, low trunk like those of diving birds, while retracted nostrils, numerous teeth, and other features align it with the unusual halszkaraptorine dromaeosaurids.",
      whatMakesUnique:
        "Natovenator combined a recognizable small theropod skeleton with a dorsoventrally compressed, hydrodynamic torso not previously documented in a non-avian dinosaur. The anatomy supports a semiaquatic interpretation, but it does not by itself reveal propulsion style, dive depth, or diet.",
    },
    gallery: ["/images/discoveries/2022/natovenator-polydontus-streamlined-dinosaur.svg"],
    paperUrl: "https://doi.org/10.1038/s42003-022-04119-9",
    supportingSources: [
      {
        title: "A non-avian dinosaur with a streamlined body exhibits potential adaptations for swimming",
        url: "https://www.nature.com/articles/s42003-022-04119-9",
        publisher: "Communications Biology",
        tier: "Tier 1",
        sourceType: "paper",
        accessedAt: "2026-07-14",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["spinosaurus-swimming-tail", "qikiqtania-wakei"],
    tags: ["Natovenator", "dromaeosaur", "swimming dinosaur", "Mongolia", "streamlining"],
  },
];
