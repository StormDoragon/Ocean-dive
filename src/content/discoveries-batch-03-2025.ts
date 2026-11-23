import type { Discovery } from "./types";

/** Beyond Signal Discovery Batch 03: 2025 selections. */
export const batch032025Discoveries: Discovery[] = [
  {
    slug: "olo-novel-color-retinal-stimulation",
    datePublished: "2026-07-17",
    title: "Olo, a Color Beyond the Natural Human Gamut",
    categorySlug: "technology",
    subtopic: "Imaging",
    year: 2025,
    dateDiscovered: "2025-04-18",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-07-14",
    location: {
      name: "University of California, Berkeley",
      lat: 37.8715,
      lng: -122.273,
      country: "United States",
    },
    discoveringOrg: "University of California, Berkeley and University of Washington-led team",
    scientificName: "Oz retinal display platform and olo color percept",
    classification: "Vision science · Adaptive-optics retinal stimulation",
    heroImage: "/images/discoveries/2025/olo-novel-color-retinal-stimulation.svg",
    imageAlt:
      "Editorial optics diagram showing a laser targeting selected middle-wavelength cone cells and producing an intensely saturated blue-green percept labeled olo.",
    imageCredit: "Beyond Signal Editorial Graphics",
    imageSourceUrl:
      "https://github.com/StormDoragon/Ocean-dive/tree/main/docs/discovery-image-rights",
    imageLicense: "CC BY 4.0 (original Beyond Signal editorial graphic)",
    imageType: "diagram",
    imageRelation: "illustration",
    summary:
      "An adaptive-optics system stimulated selected retinal cone cells one by one, letting five participants perceive an exceptionally saturated blue-green called olo that ordinary light mixtures cannot produce on the same patch of retina.",
    story: {
      whyThere:
        "Directly controlling cone populations creates a new experimental display for testing how retinal codes become color and may eventually probe vision loss. The evidence comes from five trained participants viewing a tiny stabilized field, so olo is not a screen color available to the public; larger, independent psychophysical studies and safer, wider-field devices are the next steps.",
      howFound:
        "Researchers first mapped each participant's long-, middle-, and short-wavelength cones, tracked eye motion, and scanned a laser so it activated hundreds of targeted cells while largely skipping their neighbors. Color matching and discrimination tests showed that near-exclusive M-cone stimulation produced a percept participants placed beyond the saturation of ordinary monochromatic green.",
      whatMakesUnique:
        "Natural spectra always stimulate overlapping cone sensitivities, whereas the Oz apparatus partially bypassed that constraint and drove a population pattern approaching LMS coordinates (0, 1, 0), which inspired the name olo. The finding is a novel controlled percept, not evidence for a new wavelength or a fourth human photoreceptor.",
    },
    gallery: ["/images/discoveries/2025/olo-novel-color-retinal-stimulation.svg"],
    paperUrl: "https://doi.org/10.1126/sciadv.adu1052",
    supportingSources: [
      {
        title: "Novel color via stimulation of individual photoreceptors at population scale",
        url: "https://www.science.org/doi/10.1126/sciadv.adu1052",
        publisher: "Science Advances",
        tier: "Tier 1",
        sourceType: "paper",
        accessedAt: "2026-07-14",
      },
      {
        title: "Scientists trick the eye into seeing new color 'olo'",
        url: "https://news.berkeley.edu/2025/04/22/scientists-trick-the-eye-into-seeing-new-color-olo/",
        publisher: "University of California, Berkeley",
        tier: "Tier 1",
        sourceType: "institutional",
        accessedAt: "2026-07-14",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["flu-virus-live-imaging", "alphafold-protein-structures"],
    tags: ["olo", "color vision", "adaptive optics", "photoreceptors", "retinal display"],
  },
  {
    slug: "snowy-plains-earliest-amniote-tracks",
    datePublished: "2026-07-17",
    title: "The Earliest Known Amniote Trackways",
    categorySlug: "dinosaurs-fossils",
    subtopic: "Evolution timeline",
    year: 2025,
    dateDiscovered: "2025-05-14",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-07-14",
    location: {
      name: "Snowy Plains Formation, Taungurung Country, Victoria",
      lat: -37.12,
      lng: 146.16,
      country: "Australia",
    },
    discoveringOrg: "Flinders University and Uppsala University-led team",
    scientificName: "Sauropsid-like tetrapod trackways",
    classification: "Trace fossils · Crown-group Amniota · Early Tournaisian",
    conservationStatus: "Trace maker extinct (~359–354 Ma)",
    heroImage: "/images/discoveries/2025/snowy-plains-earliest-amniote-tracks.svg",
    imageAlt:
      "Editorial reconstruction of clawed five-toed footprints crossing wet Early Carboniferous sand, beside a revised tetrapod evolutionary timeline.",
    imageCredit: "Beyond Signal Editorial Graphics",
    imageSourceUrl:
      "https://github.com/StormDoragon/Ocean-dive/tree/main/docs/discovery-image-rights",
    imageLicense: "CC BY 4.0 (original Beyond Signal editorial graphic)",
    imageType: "reconstruction",
    imageRelation: "illustration",
    summary:
      "Clawed five-toed trackways from Australia's Snowy Plains Formation were attributed to an early sauropsid amniote and dated to roughly 359–354 million years ago, extending the amniote record by about 35 million years.",
    story: {
      whyThere:
        "If the identification is correct, the ancestors of reptiles, birds, and mammals—and the tetrapod crown groups before them—must have diversified much earlier than the body-fossil record indicates. The slab was found loose but locally derived, and tracks cannot name their maker; additional in-place tracks and body fossils are needed to test the revised timeline.",
      howFound:
        "Researchers documented repeated pentadactyl prints with long, laterally deflected claw marks and compared their proportions with younger sauropsid trackways. Fish fossils and regional stratigraphy constrained the source rocks to the earliest Carboniferous, while anatomical character analysis rejected known amphibian-grade trackmakers as the best fit.",
      whatMakesUnique:
        "These are the oldest reported tracks carrying the suite of foot and claw features expected near or within crown Amniota. They record behavior rather than bones, so the paper's evolutionary implication depends on the sauropsid interpretation and should not be simplified into a formally named 'first reptile.'",
    },
    gallery: ["/images/discoveries/2025/snowy-plains-earliest-amniote-tracks.svg"],
    paperUrl: "https://doi.org/10.1038/s41586-025-08884-5",
    supportingSources: [
      {
        title: "Earliest amniote tracks recalibrate the timeline of tetrapod evolution",
        url: "https://www.nature.com/articles/s41586-025-08884-5",
        publisher: "Nature",
        tier: "Tier 1",
        sourceType: "paper",
        accessedAt: "2026-07-14",
      },
      {
        title: "355-million-year-old footprints rewrite the history of backboned land animals",
        url: "https://www.uu.se/en/news/2025/2025-05-14-355-million-year-old-footprints-rewrite-the-history-of-backboned-land-animals",
        publisher: "Uppsala University",
        tier: "Tier 1",
        sourceType: "institutional",
        accessedAt: "2026-07-14",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["oldest-amniote-skin-richards-spur", "qikiqtania-wakei"],
    tags: ["amniote tracks", "sauropsid", "trace fossil", "Carboniferous", "tetrapod evolution"],
  },
  {
    slug: "personalized-crispr-cps1-infant",
    datePublished: "2026-07-17",
    title: "The First Personalized In Vivo CRISPR Treatment",
    categorySlug: "technology",
    subtopic: "Biotechnology",
    year: 2025,
    dateDiscovered: "2025-05-15",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-07-14",
    location: {
      name: "Children's Hospital of Philadelphia",
      lat: 39.948,
      lng: -75.194,
      country: "United States",
    },
    discoveringOrg: "Children's Hospital of Philadelphia and Penn Medicine-led team",
    scientificName: "Patient-specific adenine base editor for CPS1 deficiency",
    classification: "Precision medicine · In vivo CRISPR base editing",
    heroImage: "/images/discoveries/2025/personalized-crispr-cps1-infant.svg",
    imageAlt:
      "Editorial medical diagram of a lipid nanoparticle carrying a personalized base editor to a liver cell and correcting one DNA letter in CPS1.",
    imageCredit: "Beyond Signal Editorial Graphics",
    imageSourceUrl:
      "https://github.com/StormDoragon/Ocean-dive/tree/main/docs/discovery-image-rights",
    imageLicense: "CC BY 4.0 (original Beyond Signal editorial graphic)",
    imageType: "diagram",
    imageRelation: "illustration",
    summary:
      "A bespoke adenine base editor was designed, manufactured, and infused into an infant with severe CPS1 deficiency, producing early clinical improvement in the first reported patient-specific CRISPR treatment delivered inside the body.",
    story: {
      whyThere:
        "Ultra-rare mutations often affect too few patients for conventional drug development, so a reusable editing platform could turn a genetic diagnosis into an individualized therapy. This is one infant with short follow-up, not proof of cure; long-term surveillance for durability, immune effects, and off-target edits plus treatment of additional patients are essential.",
      howFound:
        "After sequencing identified the baby's pathogenic CPS1 variant, researchers screened guide RNAs and editors in cells and animal models, completed safety assays, and packaged the selected editor as messenger RNA and guide RNA in liver-targeting lipid nanoparticles. The child received the first dose in February 2025 and later doses under an expanded-access protocol, with monitored protein tolerance and reduced need for ammonia-scavenging medication.",
      whatMakesUnique:
        "The team compressed design-to-treatment into about six months and changed a single DNA base without cutting both strands, using a product made for one named mutation in one patient. Early tolerance and metabolic improvement established feasibility, while efficacy and safety remain provisional until longer follow-up is published.",
    },
    gallery: ["/images/discoveries/2025/personalized-crispr-cps1-infant.svg"],
    paperUrl: "https://doi.org/10.1056/NEJMoa2504747",
    supportingSources: [
      {
        title: "Patient-Specific In Vivo Gene Editing to Treat a Rare Genetic Disease",
        url: "https://www.nejm.org/doi/10.1056/NEJMoa2504747",
        publisher: "New England Journal of Medicine",
        tier: "Tier 1",
        sourceType: "paper",
        accessedAt: "2026-07-14",
      },
      {
        title: "Infant with rare, incurable disease is first to successfully receive personalized gene therapy treatment",
        url: "https://www.nih.gov/news-events/news-releases/infant-rare-incurable-disease-first-successfully-receive-personalized-gene-therapy-treatment",
        publisher: "National Institutes of Health",
        tier: "Tier 1",
        sourceType: "institutional",
        accessedAt: "2026-07-14",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["human-pangenome-reference", "telomere-to-telomere-complete-human-genome"],
    tags: ["CRISPR", "base editing", "CPS1 deficiency", "personalized medicine", "gene therapy"],
  },
  {
    slug: "toi-6894-b-giant-planet-small-star",
    datePublished: "2026-07-17",
    title: "TOI-6894 b, a Giant Planet Around a Tiny Star",
    categorySlug: "space",
    subtopic: "Exoplanets",
    year: 2025,
    dateDiscovered: "2025-06-04",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-07-14",
    location: {
      name: "University of Warwick, Coventry",
      lat: 52.38,
      lng: -1.56,
      country: "United Kingdom",
    },
    discoveringOrg: "University College London and University of Warwick-led international team",
    scientificName: "TOI-6894 b",
    classification: "Exoplanet · Low-density giant planet around an M5 dwarf",
    heroImage: "/images/discoveries/2025/toi-6894-b-giant-planet-small-star.svg",
    imageAlt:
      "Editorial artist impression comparing a large cool gas planet with its very small red host star, crossed by a deep transit-light curve.",
    imageCredit: "Beyond Signal Editorial Graphics",
    imageSourceUrl:
      "https://github.com/StormDoragon/Ocean-dive/tree/main/docs/discovery-image-rights",
    imageLicense: "CC BY 4.0 (original Beyond Signal editorial graphic)",
    imageType: "artist impression",
    imageRelation: "illustration",
    summary:
      "Transit and radial-velocity measurements confirmed a low-density giant planet around a star only about one-fifth the Sun's mass, creating a demanding test for planet-formation models around very low-mass stars.",
    story: {
      whyThere:
        "Small stars are expected to have low-mass disks that struggle to build giant planets before the gas disperses. TOI-6894 b provides a benchmark for core accretion and disk instability, but one rare planet cannot determine its formation route; atmospheric metallicity and a larger occurrence census are the next discriminants.",
      howFound:
        "TESS recorded 3.37-day transits that dimmed the small host star by about 17 percent. Multi-color ground photometry localized the events, while ESPRESSO and SPIRou radial velocities measured the companion's mass and ruled out blended binaries; a joint model gave 0.168 Jupiter masses and 0.855 Jupiter radii around a 0.207-solar-mass star.",
      whatMakesUnique:
        "The host was the lowest-mass star known at publication to carry a transiting giant planet with a measured mass. Its cool temperature, deep transits, and puffy atmosphere also make it unusually accessible for methane and composition studies, although the inferred 12-Earth-mass metal inventory depends on interior models.",
    },
    gallery: ["/images/discoveries/2025/toi-6894-b-giant-planet-small-star.svg"],
    paperUrl: "https://doi.org/10.1038/s41550-025-02552-4",
    supportingSources: [
      {
        title: "A transiting giant planet in orbit around a 0.2-solar-mass host star",
        url: "https://www.nature.com/articles/s41550-025-02552-4",
        publisher: "Nature Astronomy",
        tier: "Tier 1",
        sourceType: "paper",
        accessedAt: "2026-07-14",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["trappist-1-system", "wasp-127b-3d-atmosphere"],
    tags: ["TOI-6894 b", "exoplanet", "M dwarf", "giant planet", "planet formation"],
  },
];
