import type { Discovery } from "./types";

/**
 * Selected, source-verified research breakthroughs featured in Harvard University's
 * "Breakthroughs of 2025" roundup. The entries are paraphrased and linked to
 * Harvard's underlying institutional research pages; the roundup itself is kept
 * as a supporting source for provenance.
 */
export const harvard2025Discoveries: Discovery[] = [
  {
    slug: "harvard-base-editing-gene-correction",
    title: "Base Editing Moves Gene Correction Toward the Clinic",
    categorySlug: "biology",
    subtopic: "Genetics",
    year: 2025,
    dateDiscovered: "2025-04-23",
    reviewStatus: "source-verified",
    dateReviewed: "2026-07-11",
    reviewedBy: "Beyond Signal editorial desk",
    sourceTier: "Tier 2",
    sourceAccessedAt: "2026-07-11",
    location:     {
      "name": "Broad Institute, Cambridge, Massachusetts, USA",
      "lat": 42.362,
      "lng": -71.088,
      "country": "USA"
    },
    discoveringOrg: "Broad Institute of MIT and Harvard",
    scientificName: "Base editing and prime editing",
    classification: "Biology · Genetic engineering · Therapeutic gene editing",
    heroImage: "/images/categories/biology.svg",
    summary: "Harvard’s David Liu was recognized for gene-editing platforms that can precisely rewrite individual DNA letters, with base- and prime-editing approaches already entering clinical trials.",
    story:     {
      "whyThere": "Many inherited diseases are caused by small DNA changes, but cutting both strands of the DNA double helix is not always a precise way to correct them.",
      "howFound": "Researchers developed base editors that chemically convert selected DNA letters and prime editors that can search for and write a specified sequence.",
      "whatMakesUnique": "The work moves beyond simply disrupting genes toward correcting disease-causing mutations, while clinical researchers continue to evaluate safety and long-term effectiveness."
    },
    gallery: ["/images/categories/biology.svg", "/images/textures/waves.svg"],
    paperUrl: "https://news.harvard.edu/gazette/story/2025/04/rewriting-genetic-destiny-gene-base-editing/",
    primarySourceUrl: "https://news.harvard.edu/gazette/story/2025/04/rewriting-genetic-destiny-gene-base-editing/",
    supportingSources:     [
      {
        "title": "Rewriting genetic destiny",
        "url": "https://news.harvard.edu/gazette/story/2025/04/rewriting-genetic-destiny-gene-base-editing/",
        "publisher": "Harvard Gazette",
        "tier": "Tier 2",
        "sourceType": "institutional",
        "accessedAt": "2026-07-11"
      },
      {
        "title": "Breakthroughs of 2025",
        "url": "https://www.harvard.edu/in-focus/breakthroughs-of-2025/",
        "publisher": "Harvard University",
        "tier": "Tier 2",
        "sourceType": "institutional",
        "accessedAt": "2026-07-11"
      }
    ],
    videoUrls: [],
    relatedSlugs: ["harvard-immune-memory-cells","sevabertinib-lung-cancer"],
    tags: ["gene editing","base editing","prime editing","genetics","medicine"],
  },
  {
    slug: "uralic-ancient-dna-origins",
    title: "Ancient DNA Traces Uralic Languages to Siberia",
    categorySlug: "archaeology",
    subtopic: "Ancient civilizations",
    year: 2025,
    dateDiscovered: "2025-07-16",
    reviewStatus: "source-verified",
    dateReviewed: "2026-07-11",
    reviewedBy: "Beyond Signal editorial desk",
    sourceTier: "Tier 2",
    sourceAccessedAt: "2026-07-11",
    location:     {
      "name": "Yakutia, northeastern Siberia",
      "lat": 62,
      "lng": 129.7,
      "country": "Russia"
    },
    discoveringOrg: "Harvard University / Reich Laboratory international team",
    scientificName: "Uralic and Yeniseian language ancestries",
    classification: "Archaeology · Population genetics · Human history",
    heroImage: "/images/categories/archaeology.svg",
    summary: "Ancient DNA from 180 newly sequenced Siberians, combined with more than 1,000 earlier samples, placed the ancestors of Uralic-speaking peoples in northeastern Siberia about 4,500 years ago.",
    story:     {
      "whyThere": "The origins of Uralic languages, spoken today by communities including Finnish, Estonian, and Hungarian speakers, have long been debated by linguists and archaeologists.",
      "howFound": "Researchers compared genome-wide data across thousands of years and traced a distinctive ancestry from Yakutia westward through ancient populations and burial sites.",
      "whatMakesUnique": "The genetic evidence supports a much more easterly origin than the traditional Ural Mountains hypothesis and links population movement with the spread of Bronze Age technologies."
    },
    gallery: ["/images/categories/archaeology.svg", "/images/textures/waves.svg"],
    paperUrl: "https://news.harvard.edu/gazette/story/2025/07/ancient-dna-solves-mystery-of-hungarian-finnish-language-familys-origins/",
    primarySourceUrl: "https://news.harvard.edu/gazette/story/2025/07/ancient-dna-solves-mystery-of-hungarian-finnish-language-familys-origins/",
    supportingSources:     [
      {
        "title": "Ancient DNA solves mystery of Hungarian, Finnish language family’s origins",
        "url": "https://news.harvard.edu/gazette/story/2025/07/ancient-dna-solves-mystery-of-hungarian-finnish-language-familys-origins/",
        "publisher": "Harvard Gazette",
        "tier": "Tier 2",
        "sourceType": "institutional",
        "accessedAt": "2026-07-11"
      },
      {
        "title": "Breakthroughs of 2025",
        "url": "https://www.harvard.edu/in-focus/breakthroughs-of-2025/",
        "publisher": "Harvard University",
        "tier": "Tier 2",
        "sourceType": "institutional",
        "accessedAt": "2026-07-11"
      }
    ],
    videoUrls: [],
    relatedSlugs: ["jurassic-midge-gondwana","harvard-origins-of-life"],
    tags: ["ancient DNA","human history","Uralic languages","Siberia","archaeology"],
  },
  {
    slug: "harvard-quantum-error-correction",
    title: "A Fault-Tolerant Quantum Architecture",
    categorySlug: "physics",
    subtopic: "Quantum research",
    year: 2025,
    dateDiscovered: "2025-11-12",
    reviewStatus: "source-verified",
    dateReviewed: "2026-07-11",
    reviewedBy: "Beyond Signal editorial desk",
    sourceTier: "Tier 2",
    sourceAccessedAt: "2026-07-11",
    location:     {
      "name": "Harvard University, Cambridge, Massachusetts, USA",
      "lat": 42.377,
      "lng": -71.116,
      "country": "USA"
    },
    discoveringOrg: "Harvard–MIT–QuEra quantum research collaboration",
    scientificName: "Neutral-atom fault-tolerant quantum system",
    classification: "Physics · Quantum information · Error correction",
    heroImage: "/images/categories/physics.svg",
    summary: "Harvard physicists demonstrated an integrated architecture that detected and removed quantum errors below a key threshold using 448 atomic qubits.",
    story:     {
      "whyThere": "Quantum states are fragile: noise can destroy the information stored in qubits before a calculation finishes.",
      "howFound": "The team combined physical and logical entanglement, error detection, error correction, and entropy removal into a neutral-atom system.",
      "whatMakesUnique": "The experiment brought several essential ingredients for scalable error-corrected quantum computation into one tested architecture, although much larger systems are still required for practical machines."
    },
    gallery: ["/images/categories/physics.svg", "/images/textures/waves.svg"],
    paperUrl: "https://news.harvard.edu/gazette/story/2025/11/a-potential-quantum-leap/",
    primarySourceUrl: "https://news.harvard.edu/gazette/story/2025/11/a-potential-quantum-leap/",
    supportingSources:     [
      {
        "title": "A potential quantum leap",
        "url": "https://news.harvard.edu/gazette/story/2025/11/a-potential-quantum-leap/",
        "publisher": "Harvard Gazette",
        "tier": "Tier 2",
        "sourceType": "institutional",
        "accessedAt": "2026-07-11"
      },
      {
        "title": "Breakthroughs of 2025",
        "url": "https://www.harvard.edu/in-focus/breakthroughs-of-2025/",
        "publisher": "Harvard University",
        "tier": "Tier 2",
        "sourceType": "institutional",
        "accessedAt": "2026-07-11"
      }
    ],
    videoUrls: [],
    relatedSlugs: ["lead-to-gold-alice","harvard-ultracold-quantum-materials"],
    tags: ["quantum computing","qubits","error correction","neutral atoms","physics"],
  },
  {
    slug: "harvard-forest-carbon-flux-tower",
    title: "Harvard Forest’s Carbon ‘Breathing’ Tower",
    categorySlug: "earth-science",
    subtopic: "Climate records",
    year: 2025,
    dateDiscovered: "2025-10-30",
    reviewStatus: "source-verified",
    dateReviewed: "2026-07-11",
    reviewedBy: "Beyond Signal editorial desk",
    sourceTier: "Tier 2",
    sourceAccessedAt: "2026-07-11",
    location:     {
      "name": "Harvard Forest, Petersham, Massachusetts, USA",
      "lat": 42.54,
      "lng": -72.18,
      "country": "USA"
    },
    discoveringOrg: "Harvard Forest Environmental Measurement Station",
    scientificName: "Eddy covariance carbon-flux monitoring",
    classification: "Earth science · Atmospheric chemistry · Climate monitoring",
    heroImage: "/images/categories/earth-science.svg",
    summary: "A new environmental monitoring tower extended Harvard Forest’s continuous carbon-exchange record, begun in 1989, to track how forests absorb and release greenhouse gases as the climate changes.",
    story:     {
      "whyThere": "Scientists need to know whether forests are removing more carbon from the atmosphere through photosynthesis than they return through respiration and decay.",
      "howFound": "Sensors measure carbon dioxide, water vapor, and wind many times per second above the forest canopy, allowing researchers to calculate net carbon exchange.",
      "whatMakesUnique": "The record is among the world’s longest continuous forest carbon datasets and shows how drought, warming, snow loss, pests, and species change can alter a forest’s carbon balance."
    },
    gallery: ["/images/categories/earth-science.svg", "/images/textures/waves.svg"],
    paperUrl: "https://news.harvard.edu/gazette/story/2025/10/tracking-climate-change-through-natures-breaths/",
    primarySourceUrl: "https://news.harvard.edu/gazette/story/2025/10/tracking-climate-change-through-natures-breaths/",
    supportingSources:     [
      {
        "title": "Tracking climate change through nature’s ‘breaths’",
        "url": "https://news.harvard.edu/gazette/story/2025/10/tracking-climate-change-through-natures-breaths/",
        "publisher": "Harvard Gazette",
        "tier": "Tier 2",
        "sourceType": "institutional",
        "accessedAt": "2026-07-11"
      },
      {
        "title": "Breakthroughs of 2025",
        "url": "https://www.harvard.edu/in-focus/breakthroughs-of-2025/",
        "publisher": "Harvard University",
        "tier": "Tier 2",
        "sourceType": "institutional",
        "accessedAt": "2026-07-11"
      }
    ],
    videoUrls: [],
    relatedSlugs: ["harvard-carbon-capture-photobases","harvard-clean-jet-fuel"],
    tags: ["climate change","carbon cycle","forest","CO2","environmental monitoring"],
  },
  {
    slug: "sevabertinib-lung-cancer",
    title: "Sevabertinib: A New Option for HER2-Mutated Lung Cancer",
    categorySlug: "biology",
    subtopic: "Genetics",
    year: 2025,
    dateDiscovered: "2025-11-20",
    reviewStatus: "source-verified",
    dateReviewed: "2026-07-11",
    reviewedBy: "Beyond Signal editorial desk",
    sourceTier: "Tier 2",
    sourceAccessedAt: "2026-07-11",
    location:     {
      "name": "Broad Institute, Cambridge, Massachusetts, USA",
      "lat": 42.362,
      "lng": -71.088,
      "country": "USA"
    },
    discoveringOrg: "Broad Institute / Bayer oncology research alliance",
    scientificName: "Sevabertinib",
    classification: "Medicine · Oncology · Targeted therapy",
    heroImage: "/images/categories/biology.svg",
    summary: "The FDA approved sevabertinib, an oral targeted treatment for adults with certain HER2-mutated non-small-cell lung cancers after prior chemotherapy or immunotherapy.",
    story:     {
      "whyThere": "Some patients with HER2-mutated lung cancer have few treatment options after earlier therapies stop working.",
      "howFound": "Genetic discoveries at the Broad Institute identified disease-driving mutations and helped guide a long academic–industry program that produced a targeted drug.",
      "whatMakesUnique": "The approval illustrates how fundamental cancer genetics can eventually become a treatment, while ongoing trials continue to test where the medicine works best."
    },
    gallery: ["/images/categories/biology.svg", "/images/textures/waves.svg"],
    paperUrl: "https://www.broadinstitute.org/news/fda-approves-first-cancer-drug-based-broad-institute-science",
    primarySourceUrl: "https://www.broadinstitute.org/news/fda-approves-first-cancer-drug-based-broad-institute-science",
    supportingSources:     [
      {
        "title": "FDA approves first cancer drug based on Broad Institute science",
        "url": "https://www.broadinstitute.org/news/fda-approves-first-cancer-drug-based-broad-institute-science",
        "publisher": "Broad Institute",
        "tier": "Tier 2",
        "sourceType": "institutional",
        "accessedAt": "2026-07-11"
      },
      {
        "title": "Breakthroughs of 2025",
        "url": "https://www.harvard.edu/in-focus/breakthroughs-of-2025/",
        "publisher": "Harvard University",
        "tier": "Tier 2",
        "sourceType": "institutional",
        "accessedAt": "2026-07-11"
      }
    ],
    videoUrls: [],
    relatedSlugs: ["harvard-base-editing-gene-correction","harvard-immune-memory-cells"],
    tags: ["lung cancer","HER2","oncology","drug discovery","genetics"],
  },
  {
    slug: "harvard-immune-memory-cells",
    title: "Brain-Resident Immune Cells Help Safeguard Memory",
    categorySlug: "biology",
    subtopic: "Microbiology",
    year: 2025,
    dateDiscovered: "2025-01-28",
    reviewStatus: "source-verified",
    dateReviewed: "2026-07-11",
    reviewedBy: "Beyond Signal editorial desk",
    sourceTier: "Tier 2",
    sourceAccessedAt: "2026-07-11",
    location:     {
      "name": "Harvard Medical School, Boston, Massachusetts, USA",
      "lat": 42.336,
      "lng": -71.103,
      "country": "USA"
    },
    discoveringOrg: "Harvard Medical School / Brigham and Women’s Hospital",
    scientificName: "Regulatory T cells (Tregs)",
    classification: "Biology · Immunology · Neuroscience",
    heroImage: "/images/categories/biology.svg",
    summary: "Harvard researchers identified a distinct population of regulatory T cells in the protective layers around healthy mouse brains that supports immune balance and normal memory-related brain activity.",
    story:     {
      "whyThere": "Regulatory T cells are known for preventing excessive inflammation, but their roles in the healthy brain were less clear.",
      "howFound": "Researchers examined immune cells in the brain’s protective membranes and tested how removing the cells affected neuronal activity and memory-related behavior in mice.",
      "whatMakesUnique": "The work connects immune regulation to brain health and points toward future research on neurodegenerative disease, while the findings remain preclinical."
    },
    gallery: ["/images/categories/biology.svg", "/images/textures/waves.svg"],
    paperUrl: "https://news.harvard.edu/gazette/story/2025/01/immune-cells-found-that-safeguard-memory-formation-brain-health/",
    primarySourceUrl: "https://news.harvard.edu/gazette/story/2025/01/immune-cells-found-that-safeguard-memory-formation-brain-health/",
    supportingSources:     [
      {
        "title": "Immune cells found that safeguard memory formation, brain health",
        "url": "https://news.harvard.edu/gazette/story/2025/01/immune-cells-found-that-safeguard-memory-formation-brain-health/",
        "publisher": "Harvard Gazette",
        "tier": "Tier 2",
        "sourceType": "institutional",
        "accessedAt": "2026-07-11"
      },
      {
        "title": "Breakthroughs of 2025",
        "url": "https://www.harvard.edu/in-focus/breakthroughs-of-2025/",
        "publisher": "Harvard University",
        "tier": "Tier 2",
        "sourceType": "institutional",
        "accessedAt": "2026-07-11"
      }
    ],
    videoUrls: [],
    relatedSlugs: ["sevabertinib-lung-cancer","harvard-amino-acid-cell-signal"],
    tags: ["immune cells","T cells","brain health","memory","neuroscience"],
  },
  {
    slug: "harvard-glp1-heart-failure",
    title: "GLP-1 Drugs and Heart-Failure Outcomes",
    categorySlug: "biology",
    subtopic: "Genetics",
    year: 2025,
    dateDiscovered: "2025-09-02",
    reviewStatus: "source-verified",
    dateReviewed: "2026-07-11",
    reviewedBy: "Beyond Signal editorial desk",
    sourceTier: "Tier 2",
    sourceAccessedAt: "2026-07-11",
    location:     {
      "name": "Mass General Brigham, Boston, Massachusetts, USA",
      "lat": 42.336,
      "lng": -71.103,
      "country": "USA"
    },
    discoveringOrg: "Harvard Medical School / Mass General Brigham research team",
    scientificName: "Semaglutide and tirzepatide",
    classification: "Medicine · Cardiology · Pharmacology",
    heroImage: "/images/categories/biology.svg",
    summary: "A Harvard-affiliated study reported that high-risk patients with obesity-related heart failure with preserved ejection fraction had more than 40% lower risk of hospitalization or death after initiating semaglutide or tirzepatide compared with a placebo-by-proxy group.",
    story:     {
      "whyThere": "Heart failure with preserved ejection fraction has limited treatment options and is especially common among people with obesity and type 2 diabetes.",
      "howFound": "Researchers analyzed outcomes associated with two GLP-1 medications and compared them with a matched control approach.",
      "whatMakesUnique": "The results add evidence about cardiovascular effects beyond weight loss, but they describe an observational study and do not replace individualized medical advice or randomized-trial evidence."
    },
    gallery: ["/images/categories/biology.svg", "/images/textures/waves.svg"],
    paperUrl: "https://news.harvard.edu/gazette/story/2025/09/weight-loss-drugs-protect-heart-patients-study-suggests/",
    primarySourceUrl: "https://news.harvard.edu/gazette/story/2025/09/weight-loss-drugs-protect-heart-patients-study-suggests/",
    supportingSources:     [
      {
        "title": "Weight loss drugs protect heart patients, study suggests",
        "url": "https://news.harvard.edu/gazette/story/2025/09/weight-loss-drugs-protect-heart-patients-study-suggests/",
        "publisher": "Harvard Gazette",
        "tier": "Tier 2",
        "sourceType": "institutional",
        "accessedAt": "2026-07-11"
      },
      {
        "title": "Breakthroughs of 2025",
        "url": "https://www.harvard.edu/in-focus/breakthroughs-of-2025/",
        "publisher": "Harvard University",
        "tier": "Tier 2",
        "sourceType": "institutional",
        "accessedAt": "2026-07-11"
      }
    ],
    videoUrls: [],
    relatedSlugs: ["harvard-immune-memory-cells","harvard-smart-patch-recovery"],
    tags: ["GLP-1","heart failure","cardiology","semaglutide","tirzepatide"],
  },
  {
    slug: "harvard-smart-patch-recovery",
    title: "A Smart Patch That Tracks Stress and Cravings",
    categorySlug: "technology",
    subtopic: "Wearable technology",
    year: 2025,
    dateDiscovered: "2025-10-01",
    reviewStatus: "source-verified",
    dateReviewed: "2026-07-11",
    reviewedBy: "Beyond Signal editorial desk",
    sourceTier: "Tier 2",
    sourceAccessedAt: "2026-07-11",
    location:     {
      "name": "Mass General Brigham, Boston, Massachusetts, USA",
      "lat": 42.336,
      "lng": -71.103,
      "country": "USA"
    },
    discoveringOrg: "Mass General Brigham / Harvard Recovery Research Institute",
    scientificName: "Wearable stress-and-craving monitoring patch",
    classification: "Technology · Psychiatry · Digital health",
    heroImage: "/images/categories/technology.svg",
    summary: "A non-drug wearable patch study found that real-time monitoring and feedback could help people in early recovery manage stress and cravings associated with alcohol and drug use.",
    story:     {
      "whyThere": "Stress can trigger cravings during early recovery, while people may not recognize the physiological warning signs early enough to respond.",
      "howFound": "The wearable tracked signals including stress-related changes and helped researchers study how those changes relate to cravings in daily life.",
      "whatMakesUnique": "It offers a non-pharmaceutical, real-time support approach, but the study is an early clinical result rather than proof that a patch prevents relapse for everyone."
    },
    gallery: ["/images/categories/technology.svg", "/images/textures/waves.svg"],
    paperUrl: "https://news.harvard.edu/gazette/story/2025/10/wearable-patch-reduces-cravings-for-alcohol-and-drugs/",
    primarySourceUrl: "https://news.harvard.edu/gazette/story/2025/10/wearable-patch-reduces-cravings-for-alcohol-and-drugs/",
    supportingSources:     [
      {
        "title": "Wearable patch reduces cravings for alcohol and drugs",
        "url": "https://news.harvard.edu/gazette/story/2025/10/wearable-patch-reduces-cravings-for-alcohol-and-drugs/",
        "publisher": "Harvard Gazette",
        "tier": "Tier 2",
        "sourceType": "institutional",
        "accessedAt": "2026-07-11"
      },
      {
        "title": "Breakthroughs of 2025",
        "url": "https://www.harvard.edu/in-focus/breakthroughs-of-2025/",
        "publisher": "Harvard University",
        "tier": "Tier 2",
        "sourceType": "institutional",
        "accessedAt": "2026-07-11"
      }
    ],
    videoUrls: [],
    relatedSlugs: ["harvard-glp1-heart-failure","reachable-stroke-robot"],
    tags: ["wearable","addiction recovery","digital health","stress","psychiatry"],
  },
  {
    slug: "harvard-amino-acid-cell-signal",
    title: "A Cell Signal for Amino-Acid Shortage",
    categorySlug: "biology",
    subtopic: "Microbiology",
    year: 2025,
    dateDiscovered: "2025-10-06",
    reviewStatus: "source-verified",
    dateReviewed: "2026-07-11",
    reviewedBy: "Beyond Signal editorial desk",
    sourceTier: "Tier 2",
    sourceAccessedAt: "2026-07-11",
    location:     {
      "name": "Harvard School of Dental Medicine, Boston, Massachusetts, USA",
      "lat": 42.336,
      "lng": -71.103,
      "country": "USA"
    },
    discoveringOrg: "Harvard School of Dental Medicine Whitman Laboratory",
    scientificName: "Amino-acid insufficiency signaling pathway",
    classification: "Biology · Cell signaling · Developmental biology",
    heroImage: "/images/categories/biology.svg",
    summary: "Harvard researchers identified a key signal that tells tissues when essential amino acids are insufficient, overturning a longstanding explanation for how the response begins.",
    story:     {
      "whyThere": "Cells must detect protein-building shortages quickly because amino-acid availability affects survival, inflammation, wound healing, and aging-related processes.",
      "howFound": "Experiments traced the early warning pathway activated when cells lack essential amino acids and tested the molecular steps that trigger the tissue response.",
      "whatMakesUnique": "The finding changes the mechanistic picture of nutrient sensing and may eventually help researchers regulate disease-related inflammation, although therapeutic applications remain future work."
    },
    gallery: ["/images/categories/biology.svg", "/images/textures/waves.svg"],
    paperUrl: "https://www.hsdm.harvard.edu/news/2025/10/researchers-uncover-key-cell-signal-triggers-tissue-response-amino-acid-insufficiency",
    primarySourceUrl: "https://www.hsdm.harvard.edu/news/2025/10/researchers-uncover-key-cell-signal-triggers-tissue-response-amino-acid-insufficiency",
    supportingSources:     [
      {
        "title": "Researchers uncover key cell signal that triggers tissue response to amino acid insufficiency",
        "url": "https://www.hsdm.harvard.edu/news/2025/10/researchers-uncover-key-cell-signal-triggers-tissue-response-amino-acid-insufficiency",
        "publisher": "Harvard School of Dental Medicine",
        "tier": "Tier 2",
        "sourceType": "institutional",
        "accessedAt": "2026-07-11"
      },
      {
        "title": "Breakthroughs of 2025",
        "url": "https://www.harvard.edu/in-focus/breakthroughs-of-2025/",
        "publisher": "Harvard University",
        "tier": "Tier 2",
        "sourceType": "institutional",
        "accessedAt": "2026-07-11"
      }
    ],
    videoUrls: [],
    relatedSlugs: ["harvard-immune-memory-cells","harvard-origins-of-life"],
    tags: ["cell signaling","amino acids","nutrition","inflammation","biology"],
  },
  {
    slug: "harvard-aerodynamic-dimpled-textile",
    title: "A Textile That Changes Its Aerodynamics",
    categorySlug: "technology",
    subtopic: "Materials science",
    year: 2025,
    dateDiscovered: "2025-10-27",
    reviewStatus: "source-verified",
    dateReviewed: "2026-07-11",
    reviewedBy: "Beyond Signal editorial desk",
    sourceTier: "Tier 2",
    sourceAccessedAt: "2026-07-11",
    location:     {
      "name": "Harvard John A. Paulson School of Engineering, Cambridge, Massachusetts, USA",
      "lat": 42.377,
      "lng": -71.116,
      "country": "USA"
    },
    discoveringOrg: "Harvard John A. Paulson School of Engineering and Applied Sciences",
    scientificName: "Dimpled aerodynamic metamaterial textile",
    classification: "Technology · Materials science · Fluid dynamics",
    heroImage: "/images/categories/technology.svg",
    summary: "Harvard engineers developed a textile that can dimple like a golf ball and alter its aerodynamic behavior when stretched or adjusted.",
    story:     {
      "whyThere": "Fixed surfaces cannot easily optimize their airflow across changing speeds, positions, or operating conditions.",
      "howFound": "Researchers designed a structured fabric whose surface topography changes under tension, allowing the material to switch between smoother and dimpled states.",
      "whatMakesUnique": "The concept could lead to adaptive clothing, sports equipment, and engineering surfaces that tune their drag or lift on demand."
    },
    gallery: ["/images/categories/technology.svg", "/images/textures/waves.svg"],
    paperUrl: "https://seas.harvard.edu/news/need-speed-0",
    primarySourceUrl: "https://seas.harvard.edu/news/need-speed-0",
    supportingSources:     [
      {
        "title": "The Need for Speed",
        "url": "https://seas.harvard.edu/news/need-speed-0",
        "publisher": "Harvard John A. Paulson School of Engineering and Applied Sciences",
        "tier": "Tier 2",
        "sourceType": "institutional",
        "accessedAt": "2026-07-11"
      },
      {
        "title": "Breakthroughs of 2025",
        "url": "https://www.harvard.edu/in-focus/breakthroughs-of-2025/",
        "publisher": "Harvard University",
        "tier": "Tier 2",
        "sourceType": "institutional",
        "accessedAt": "2026-07-11"
      }
    ],
    videoUrls: [],
    relatedSlugs: ["harvard-water-vapor-membrane","reachable-stroke-robot"],
    tags: ["metamaterial","textile","aerodynamics","materials science","engineering"],
  },
  {
    slug: "harvard-water-vapor-membrane",
    title: "A Membrane That Separates Water Vapor from Air",
    categorySlug: "technology",
    subtopic: "Materials science",
    year: 2025,
    dateDiscovered: "2025-04-02",
    reviewStatus: "source-verified",
    dateReviewed: "2026-07-11",
    reviewedBy: "Beyond Signal editorial desk",
    sourceTier: "Tier 2",
    sourceAccessedAt: "2026-07-11",
    location:     {
      "name": "Harvard University, Cambridge, Massachusetts, USA",
      "lat": 42.377,
      "lng": -71.116,
      "country": "USA"
    },
    discoveringOrg: "Trellis Air / Harvard University",
    scientificName: "Trellis Air membrane system",
    classification: "Technology · Climate engineering · Membrane materials",
    heroImage: "/images/categories/technology.svg",
    summary: "A Harvard startup developed a thin membrane system that removes water vapor from air more efficiently, offering a possible way to reduce the energy burden of air conditioning.",
    story:     {
      "whyThere": "Conventional cooling systems spend substantial energy both lowering air temperature and removing humidity.",
      "howFound": "Researchers designed a membrane that acts like a molecular-scale filter for water vapor and integrated it into an air-drying system.",
      "whatMakesUnique": "Separating dehumidification from cooling could reduce energy use as hotter climates increase demand for air conditioning, though real-world deployment still depends on scale and cost."
    },
    gallery: ["/images/categories/technology.svg", "/images/textures/waves.svg"],
    paperUrl: "https://news.harvard.edu/gazette/story/2025/04/ac-use-to-surge-as-world-gets-hotter-harvard-startup-has-a-solution-climate-change/",
    primarySourceUrl: "https://news.harvard.edu/gazette/story/2025/04/ac-use-to-surge-as-world-gets-hotter-harvard-startup-has-a-solution-climate-change/",
    supportingSources:     [
      {
        "title": "AC use to surge as world gets hotter. Harvard startup has a solution.",
        "url": "https://news.harvard.edu/gazette/story/2025/04/ac-use-to-surge-as-world-gets-hotter-harvard-startup-has-a-solution-climate-change/",
        "publisher": "Harvard Gazette",
        "tier": "Tier 2",
        "sourceType": "institutional",
        "accessedAt": "2026-07-11"
      },
      {
        "title": "Breakthroughs of 2025",
        "url": "https://www.harvard.edu/in-focus/breakthroughs-of-2025/",
        "publisher": "Harvard University",
        "tier": "Tier 2",
        "sourceType": "institutional",
        "accessedAt": "2026-07-11"
      }
    ],
    videoUrls: [],
    relatedSlugs: ["harvard-carbon-capture-photobases","harvard-aerodynamic-dimpled-textile"],
    tags: ["air conditioning","membrane","climate technology","water vapor","energy"],
  },
  {
    slug: "harvard-ultracold-quantum-materials",
    title: "Imaging Quantum Materials at Ultra-Cold Temperatures",
    categorySlug: "physics",
    subtopic: "Quantum research",
    year: 2025,
    dateDiscovered: "2025-10-08",
    reviewStatus: "source-verified",
    dateReviewed: "2026-07-11",
    reviewedBy: "Beyond Signal editorial desk",
    sourceTier: "Tier 2",
    sourceAccessedAt: "2026-07-11",
    location:     {
      "name": "Rowland Institute at Harvard, Cambridge, Massachusetts, USA",
      "lat": 42.377,
      "lng": -71.116,
      "country": "USA"
    },
    discoveringOrg: "Rowland Institute at Harvard / University of Michigan",
    scientificName: "Cryogenic transmission electron microscopy",
    classification: "Physics · Quantum materials · Microscopy",
    heroImage: "/images/categories/physics.svg",
    summary: "Researchers at Harvard’s Rowland Institute pioneered a cooling and microscopy approach that can image materials at temperatures cold enough to reveal otherwise hidden quantum behavior.",
    story:     {
      "whyThere": "Many quantum effects disappear or become difficult to resolve at the temperatures used by conventional electron microscopy.",
      "howFound": "The team adapted cryogenic transmission electron microscopy with improved sample handling and cooling to reach lower temperatures while retaining atomic-scale imaging.",
      "whatMakesUnique": "The method opens a window onto quantum materials and complex biomolecules at a scale where their structures and low-temperature behavior can be studied together."
    },
    gallery: ["/images/categories/physics.svg", "/images/textures/waves.svg"],
    paperUrl: "https://news.harvard.edu/gazette/story/2025/10/chilling-discovery/",
    primarySourceUrl: "https://news.harvard.edu/gazette/story/2025/10/chilling-discovery/",
    supportingSources:     [
      {
        "title": "Physicists go to extremes to capture quantum materials",
        "url": "https://news.harvard.edu/gazette/story/2025/10/chilling-discovery/",
        "publisher": "Harvard Gazette",
        "tier": "Tier 2",
        "sourceType": "institutional",
        "accessedAt": "2026-07-11"
      },
      {
        "title": "Breakthroughs of 2025",
        "url": "https://www.harvard.edu/in-focus/breakthroughs-of-2025/",
        "publisher": "Harvard University",
        "tier": "Tier 2",
        "sourceType": "institutional",
        "accessedAt": "2026-07-11"
      }
    ],
    videoUrls: [],
    relatedSlugs: ["harvard-quantum-error-correction","lead-to-gold-alice"],
    tags: ["quantum materials","microscopy","cryogenics","electron microscopy","physics"],
  },
  {
    slug: "reachable-stroke-robot",
    title: "Reachable: A Soft Robot for Stroke Rehabilitation",
    categorySlug: "technology",
    subtopic: "Robotics",
    year: 2025,
    dateDiscovered: "2025-01-22",
    reviewStatus: "source-verified",
    dateReviewed: "2026-07-11",
    reviewedBy: "Beyond Signal editorial desk",
    sourceTier: "Tier 2",
    sourceAccessedAt: "2026-07-11",
    location:     {
      "name": "Harvard Move Lab, Cambridge, Massachusetts, USA",
      "lat": 42.377,
      "lng": -71.116,
      "country": "USA"
    },
    discoveringOrg: "Harvard Move Lab",
    scientificName: "Reachable wearable robotic device",
    classification: "Technology · Robotics · Rehabilitation engineering",
    heroImage: "/images/categories/technology.svg",
    summary: "Harvard’s Move Lab developed Reachable, a lightweight wearable robotic vest that assists arm and shoulder movement for stroke survivors during therapy and daily activities.",
    story:     {
      "whyThere": "Stroke survivors can lose arm and shoulder mobility, and repeated therapy is difficult to access continuously outside clinical settings.",
      "howFound": "The team combined an inflatable underarm support, sensors, and adaptive assistance in a soft vest tested with more than 30 patients.",
      "whatMakesUnique": "The device is designed for at-home therapy and adapts support as a person’s movement improves, bridging laboratory robotics and practical rehabilitation."
    },
    gallery: ["/images/categories/technology.svg", "/images/textures/waves.svg"],
    paperUrl: "https://seas.harvard.edu/news/out-lab-and-patients-hands",
    primarySourceUrl: "https://seas.harvard.edu/news/out-lab-and-patients-hands",
    supportingSources:     [
      {
        "title": "Out of the lab and into patients’ hands",
        "url": "https://seas.harvard.edu/news/out-lab-and-patients-hands",
        "publisher": "Harvard John A. Paulson School of Engineering and Applied Sciences",
        "tier": "Tier 2",
        "sourceType": "institutional",
        "accessedAt": "2026-07-11"
      },
      {
        "title": "Breakthroughs of 2025",
        "url": "https://www.harvard.edu/in-focus/breakthroughs-of-2025/",
        "publisher": "Harvard University",
        "tier": "Tier 2",
        "sourceType": "institutional",
        "accessedAt": "2026-07-11"
      }
    ],
    videoUrls: [],
    relatedSlugs: ["harvard-smart-patch-recovery","harvard-aerodynamic-dimpled-textile"],
    tags: ["robotics","stroke rehabilitation","wearable","medical technology","assistive technology"],
  },
  {
    slug: "harvard-origins-of-life",
    title: "Synthetic Chemistry Mimics Core Features of Life",
    categorySlug: "earth-science",
    subtopic: "Ocean mysteries",
    year: 2025,
    dateDiscovered: "2025-07-22",
    reviewStatus: "source-verified",
    dateReviewed: "2026-07-11",
    reviewedBy: "Beyond Signal editorial desk",
    sourceTier: "Tier 2",
    sourceAccessedAt: "2026-07-11",
    location:     {
      "name": "Harvard University Origins of Life Initiative, Cambridge, Massachusetts, USA",
      "lat": 42.377,
      "lng": -71.116,
      "country": "USA"
    },
    discoveringOrg: "Harvard Origins of Life Initiative",
    scientificName: "Synthetic self-assembling chemical systems",
    classification: "Earth science · Origins of life · Astrobiology",
    heroImage: "/images/categories/earth-science.svg",
    summary: "Harvard researchers created artificial cell-like chemical systems that displayed essential life-like properties including metabolism, reproduction, and evolution.",
    story:     {
      "whyThere": "The origin of life requires an explanation for how chemistry first became organized enough to maintain itself and change over time.",
      "howFound": "Researchers assembled a chemically homogeneous system and observed self-organization, resource use, replication-like behavior, and selection-like change.",
      "whatMakesUnique": "The experiment does not recreate natural life, but it offers a laboratory model for studying how life-like behavior might emerge from nonliving chemistry."
    },
    gallery: ["/images/categories/earth-science.svg", "/images/textures/waves.svg"],
    paperUrl: "https://news.harvard.edu/gazette/story/2025/07/a-step-toward-solving-central-mystery-of-life-on-earth/",
    primarySourceUrl: "https://news.harvard.edu/gazette/story/2025/07/a-step-toward-solving-central-mystery-of-life-on-earth/",
    supportingSources:     [
      {
        "title": "A step toward solving central mystery of life on Earth",
        "url": "https://news.harvard.edu/gazette/story/2025/07/a-step-toward-solving-central-mystery-of-life-on-earth/",
        "publisher": "Harvard Gazette",
        "tier": "Tier 2",
        "sourceType": "institutional",
        "accessedAt": "2026-07-11"
      },
      {
        "title": "Breakthroughs of 2025",
        "url": "https://www.harvard.edu/in-focus/breakthroughs-of-2025/",
        "publisher": "Harvard University",
        "tier": "Tier 2",
        "sourceType": "institutional",
        "accessedAt": "2026-07-11"
      }
    ],
    videoUrls: [],
    relatedSlugs: ["harvard-amino-acid-cell-signal","uralic-ancient-dna-origins"],
    tags: ["origin of life","astrobiology","self-assembly","evolution","chemistry"],
  },
  {
    slug: "precambrian-ecdysozoan-fossil",
    title: "A 555-Million-Year-Old Relative of Insects and Crustaceans",
    categorySlug: "dinosaurs-fossils",
    subtopic: "Fossil discoveries",
    year: 2025,
    dateDiscovered: "2025-01-22",
    reviewStatus: "source-verified",
    dateReviewed: "2026-07-11",
    reviewedBy: "Beyond Signal editorial desk",
    sourceTier: "Tier 2",
    sourceAccessedAt: "2026-07-11",
    location:     {
      "name": "Nilpena Ediacara National Park, South Australia",
      "lat": -31.15,
      "lng": 138.52,
      "country": "Australia"
    },
    discoveringOrg: "Harvard University / international paleontology team",
    scientificName: "Precambrian ecdysozoan fossil",
    classification: "Paleontology · Ediacaran life · Evolution",
    conservationStatus: "Extinct (~555 Ma)",
    heroImage: "/images/categories/dinosaurs-fossils.svg",
    summary: "A tiny worm-like fossil from South Australia became the oldest confirmed member of Ecdysozoa, the animal group that includes insects, crustaceans, and many other species.",
    story:     {
      "whyThere": "The early history of Ecdysozoa is difficult to reconstruct because soft-bodied organisms rarely fossilize with enough detail to identify their relationships.",
      "howFound": "Researchers studied an exceptionally preserved fossil from Nilpena Ediacara National Park and compared its form with living and ancient members of the group.",
      "whatMakesUnique": "The fossil predates the Cambrian diversification and provides evidence that this major animal lineage existed in the Precambrian."
    },
    gallery: ["/images/categories/dinosaurs-fossils.svg", "/images/textures/waves.svg"],
    paperUrl: "https://news.harvard.edu/gazette/story/newsplus/fossil-discovery-uncovers-early-history-of-earths-largest-animal-group/",
    primarySourceUrl: "https://news.harvard.edu/gazette/story/newsplus/fossil-discovery-uncovers-early-history-of-earths-largest-animal-group/",
    supportingSources:     [
      {
        "title": "Fossil discovery uncovers early history of Earth’s largest animal group",
        "url": "https://news.harvard.edu/gazette/story/newsplus/fossil-discovery-uncovers-early-history-of-earths-largest-animal-group/",
        "publisher": "Harvard Gazette",
        "tier": "Tier 2",
        "sourceType": "institutional",
        "accessedAt": "2026-07-11"
      },
      {
        "title": "Breakthroughs of 2025",
        "url": "https://www.harvard.edu/in-focus/breakthroughs-of-2025/",
        "publisher": "Harvard University",
        "tier": "Tier 2",
        "sourceType": "institutional",
        "accessedAt": "2026-07-11"
      }
    ],
    videoUrls: [],
    relatedSlugs: ["jurassic-midge-gondwana","spinosaurus-swimming-tail"],
    tags: ["fossil","Ediacaran","evolution","arthropods","Australia"],
  },
  {
    slug: "closest-supermassive-black-hole",
    title: "A Hidden Supermassive Black Hole in the Nearest Galaxy",
    categorySlug: "space",
    subtopic: "Black holes",
    year: 2025,
    dateDiscovered: "2025-03-06",
    reviewStatus: "source-verified",
    dateReviewed: "2026-07-11",
    reviewedBy: "Beyond Signal editorial desk",
    sourceTier: "Tier 2",
    sourceAccessedAt: "2026-07-11",
    location:     {
      "name": "Harvard Center for Astrophysics, Cambridge, Massachusetts, USA",
      "lat": 42.381,
      "lng": -71.128,
      "country": "USA"
    },
    discoveringOrg: "Harvard Center for Astrophysics",
    scientificName: "Supermassive black hole in the Large Magellanic Cloud",
    classification: "Astronomy · Supermassive black hole · Galactic evolution",
    heroImage: "/images/categories/space.svg",
    summary: "Harvard astronomers found evidence for a supermassive black hole in the Large Magellanic Cloud, the nearest major galaxy to the Milky Way.",
    story:     {
      "whyThere": "The motions of stars can reveal the gravitational influence of a black hole even when the black hole itself cannot be seen directly.",
      "howFound": "Researchers traced a population of fast-moving stars whose trajectories pointed toward a massive, compact object rather than the center of the Milky Way.",
      "whatMakesUnique": "The candidate black hole would be unusually close in astronomical terms and could help explain how satellite galaxies and their central black holes evolve."
    },
    gallery: ["/images/categories/space.svg", "/images/textures/waves.svg"],
    paperUrl: "https://gsas.harvard.edu/news/massive-discovery",
    primarySourceUrl: "https://gsas.harvard.edu/news/massive-discovery",
    supportingSources:     [
      {
        "title": "Massive Discovery",
        "url": "https://gsas.harvard.edu/news/massive-discovery",
        "publisher": "Harvard Kenneth C. Griffin Graduate School of Arts and Sciences",
        "tier": "Tier 2",
        "sourceType": "institutional",
        "accessedAt": "2026-07-11"
      },
      {
        "title": "Breakthroughs of 2025",
        "url": "https://www.harvard.edu/in-focus/breakthroughs-of-2025/",
        "publisher": "Harvard University",
        "tier": "Tier 2",
        "sourceType": "institutional",
        "accessedAt": "2026-07-11"
      }
    ],
    videoUrls: [],
    relatedSlugs: ["m87-black-hole-image","repeating-gamma-ray-burst-2025"],
    tags: ["black hole","Large Magellanic Cloud","galaxy","stars","astronomy"],
  },
  {
    slug: "magnetar-cosmic-explosion",
    title: "A Cosmic Explosion That May Have Been a Magnetar Flare",
    categorySlug: "space",
    subtopic: "Galaxies",
    year: 2025,
    dateDiscovered: "2025-02-25",
    reviewStatus: "source-verified",
    dateReviewed: "2026-07-11",
    reviewedBy: "Beyond Signal editorial desk",
    sourceTier: "Tier 2",
    sourceAccessedAt: "2026-07-11",
    location:     {
      "name": "Chandra X-ray Observatory / Harvard Center for Astrophysics, Cambridge, Massachusetts, USA",
      "lat": 42.381,
      "lng": -71.128,
      "country": "USA"
    },
    discoveringOrg: "NASA Chandra X-ray Observatory / Harvard Center for Astrophysics",
    scientificName: "Extragalactic magnetar flare candidate",
    classification: "Astronomy · Neutron stars · High-energy astrophysics",
    heroImage: "/images/categories/space.svg",
    summary: "A mysterious cosmic explosion hidden in archival data may have been a rare giant flare from a magnetar, an ultra-magnetic neutron star.",
    story:     {
      "whyThere": "Magnetars can release enormous bursts of energy, but giant flares are rare and can resemble other high-energy explosions.",
      "howFound": "Astronomers revisited archival observations and matched the event’s timing and spectral behavior against models of magnetar activity.",
      "whatMakesUnique": "If confirmed, the event would expand the small sample of magnetar flares seen beyond the Milky Way and help explain some unusual cosmic transients."
    },
    gallery: ["/images/categories/space.svg", "/images/textures/waves.svg"],
    paperUrl: "https://chandra.harvard.edu/press/25_releases/press_022525.html",
    primarySourceUrl: "https://chandra.harvard.edu/press/25_releases/press_022525.html",
    supportingSources:     [
      {
        "title": "Mystery of 'Remarkable' Cosmic Explosion That Lay Hidden for Years",
        "url": "https://chandra.harvard.edu/press/25_releases/press_022525.html",
        "publisher": "NASA Chandra X-ray Observatory",
        "tier": "Tier 2",
        "sourceType": "institutional",
        "accessedAt": "2026-07-11"
      },
      {
        "title": "Breakthroughs of 2025",
        "url": "https://www.harvard.edu/in-focus/breakthroughs-of-2025/",
        "publisher": "Harvard University",
        "tier": "Tier 2",
        "sourceType": "institutional",
        "accessedAt": "2026-07-11"
      }
    ],
    videoUrls: [],
    relatedSlugs: ["closest-supermassive-black-hole","repeating-gamma-ray-burst-2025"],
    tags: ["magnetar","neutron star","cosmic explosion","x-ray astronomy","transient"],
  },
  {
    slug: "harvard-carbon-capture-photobases",
    title: "Sunlight-Driven Molecules Capture Carbon Dioxide",
    categorySlug: "earth-science",
    subtopic: "Climate records",
    year: 2025,
    dateDiscovered: "2025-09-02",
    reviewStatus: "source-verified",
    dateReviewed: "2026-07-11",
    reviewedBy: "Beyond Signal editorial desk",
    sourceTier: "Tier 2",
    sourceAccessedAt: "2026-07-11",
    location:     {
      "name": "Harvard University, Cambridge, Massachusetts, USA",
      "lat": 42.377,
      "lng": -71.116,
      "country": "USA"
    },
    discoveringOrg: "Harvard University Department of Chemistry",
    scientificName: "Photobase carbon-capture molecules",
    classification: "Earth science · Carbon capture · Organic chemistry",
    heroImage: "/images/categories/earth-science.svg",
    summary: "Harvard chemists designed light-activated organic molecules that rapidly and reversibly trap carbon dioxide, pointing toward a lower-energy direct-air-capture approach.",
    story:     {
      "whyThere": "Removing carbon dioxide from air is energy-intensive when capture and release both depend on heat or pressure changes.",
      "howFound": "The researchers used sunlight to activate photobases that generate hydroxide ions and bind CO₂, then release it reversibly when the molecular state changes.",
      "whatMakesUnique": "The system uses light directly as the energy source for a capture-and-release cycle, though scaling, durability, and cost remain open engineering questions."
    },
    gallery: ["/images/categories/earth-science.svg", "/images/textures/waves.svg"],
    paperUrl: "https://news.harvard.edu/gazette/story/2025/09/seeking-a-carbon-capture-breakthrough/",
    primarySourceUrl: "https://news.harvard.edu/gazette/story/2025/09/seeking-a-carbon-capture-breakthrough/",
    supportingSources:     [
      {
        "title": "Seeking a carbon-capture breakthrough",
        "url": "https://news.harvard.edu/gazette/story/2025/09/seeking-a-carbon-capture-breakthrough/",
        "publisher": "Harvard Gazette",
        "tier": "Tier 2",
        "sourceType": "institutional",
        "accessedAt": "2026-07-11"
      },
      {
        "title": "Breakthroughs of 2025",
        "url": "https://www.harvard.edu/in-focus/breakthroughs-of-2025/",
        "publisher": "Harvard University",
        "tier": "Tier 2",
        "sourceType": "institutional",
        "accessedAt": "2026-07-11"
      }
    ],
    videoUrls: [],
    relatedSlugs: ["harvard-forest-carbon-flux-tower","harvard-water-vapor-membrane"],
    tags: ["carbon capture","CO2","sunlight","organic chemistry","climate technology"],
  },
  {
    slug: "harvard-clean-jet-fuel",
    title: "Jet Fuel from Municipal Waste",
    categorySlug: "technology",
    subtopic: "Materials science",
    year: 2025,
    dateDiscovered: "2025-11-12",
    reviewStatus: "source-verified",
    dateReviewed: "2026-07-11",
    reviewedBy: "Beyond Signal editorial desk",
    sourceTier: "Tier 2",
    sourceAccessedAt: "2026-07-11",
    location:     {
      "name": "Harvard John A. Paulson School of Engineering, Cambridge, Massachusetts, USA",
      "lat": 42.377,
      "lng": -71.116,
      "country": "USA"
    },
    discoveringOrg: "Harvard John A. Paulson School of Engineering and Applied Sciences",
    scientificName: "Municipal-solid-waste sustainable aviation fuel",
    classification: "Technology · Sustainable fuels · Climate engineering",
    heroImage: "/images/categories/technology.svg",
    summary: "A Harvard study found that sustainable aviation fuel made from municipal solid waste could reduce greenhouse-gas emissions by roughly 80–90% compared with conventional jet fuel.",
    story:     {
      "whyThere": "Aviation is difficult to electrify at long range, while sustainable aviation fuel remains a small share of the global fuel supply.",
      "howFound": "Researchers evaluated municipal waste as a reliable feedstock and compared its emissions and costs with other sustainable-fuel pathways.",
      "whatMakesUnique": "The analysis identifies an abundant waste stream as a potential fuel source, while emphasizing that policy support, infrastructure, and production scale are still required."
    },
    gallery: ["/images/categories/technology.svg", "/images/textures/waves.svg"],
    paperUrl: "https://seas.harvard.edu/news/next-frontier-clean-jet-fuel-city-waste",
    primarySourceUrl: "https://seas.harvard.edu/news/next-frontier-clean-jet-fuel-city-waste",
    supportingSources:     [
      {
        "title": "The Next Frontier In Clean Flight? Jet Fuel From City Waste",
        "url": "https://seas.harvard.edu/news/next-frontier-clean-jet-fuel-city-waste",
        "publisher": "Harvard John A. Paulson School of Engineering and Applied Sciences",
        "tier": "Tier 2",
        "sourceType": "institutional",
        "accessedAt": "2026-07-11"
      },
      {
        "title": "Breakthroughs of 2025",
        "url": "https://www.harvard.edu/in-focus/breakthroughs-of-2025/",
        "publisher": "Harvard University",
        "tier": "Tier 2",
        "sourceType": "institutional",
        "accessedAt": "2026-07-11"
      }
    ],
    videoUrls: [],
    relatedSlugs: ["harvard-carbon-capture-photobases","harvard-water-vapor-membrane"],
    tags: ["sustainable aviation fuel","municipal waste","climate","aviation","energy"],
  },
];
