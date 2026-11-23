import type { Discovery } from "./types";

/** Beyond Signal Discovery Batch 04: 2025 selections. */
export const batch042025Discoveries: Discovery[] = [
  {
    slug: "hadal-trench-chemosynthetic-communities",
    datePublished: "2026-07-18",
    title: "Chemosynthetic Communities Found Across Hadal Trenches",
    categorySlug: "ocean",
    subtopic: "Deep-sea expeditions",
    year: 2025,
    dateDiscovered: "2025-07-30",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-07-17",
    location: {
      name: "Kuril–Kamchatka Trench, Northwest Pacific",
      lat: 48.5,
      lng: 154.8,
      country: "International waters",
      depthMeters: 9533,
    },
    discoveringOrg: "Institute of Deep-sea Science and Engineering, Chinese Academy of Sciences-led team",
    classification: "Deep-sea ecology · Hadal chemosynthetic community",
    heroImage: "/images/discoveries/2025/hadal-trench-chemosynthetic-communities.svg",
    imageAlt:
      "Editorial artist impression of a dark hadal trench seafloor with tube worms and clams clustered around fault-fed chemical fluids, explicitly shown as an illustration rather than an expedition photograph.",
    imageCredit: "Beyond Signal Editorial Graphics",
    imageSourceUrl:
      "https://github.com/StormDoragon/Ocean-dive/tree/batch-04/discovery-import/docs/discovery-image-rights",
    imageLicense: "CC BY 4.0 (original Beyond Signal editorial graphic)",
    imageType: "artist impression",
    imageRelation: "illustration",
    summary:
      "Crewed dives documented extensive communities of tube worms and bivalves sustained by methane- and hydrogen-sulfide-rich fluids from 5,800 to 9,533 metres in the Kuril–Kamchatka and western Aleutian trenches.",
    story: {
      whyThere:
        "Hadal trenches are among Earth’s least directly observed habitats, and chemosynthesis there had been proposed more often than documented. The expeditions demonstrate communities at sampled sites, not a complete map of trench life; surveys in other trenches and genetic work on the organisms will test how widespread and connected these systems are.",
      howFound:
        "Scientists used the crewed submersible Fendouzhe to survey trench floors over a 2,500-kilometre distance. They photographed and sampled the communities, measured fluids, and used isotopic analysis to connect the local methane and hydrogen sulfide to microbial production from organic matter transported through deep sediments and faults.",
      whatMakesUnique:
        "The direct evidence is the in situ observation and sampling of organisms, fluids, and isotope signatures at hadal depths. The conclusion that similar communities may occur in other geologically comparable trenches is an extrapolation from those conditions, rather than a detection beyond the surveyed areas.",
    },
    gallery: ["/images/discoveries/2025/hadal-trench-chemosynthetic-communities.svg"],
    paperUrl: "https://doi.org/10.1038/s41586-025-09317-z",
    primarySourceUrl: "https://www.nature.com/articles/s41586-025-09317-z",
    supportingSources: [
      {
        title: "A vibrant oasis of chemical-eating creatures found in the deep Pacific",
        url: "https://www.reuters.com/business/environment/vibrant-oasis-chemical-eating-creatures-found-deep-pacific-2025-07-30/",
        publisher: "Reuters",
        tier: "Tier 3",
        sourceType: "reporting",
        accessedAt: "2026-07-17",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["dark-oxygen-abyssal-seafloor", "deepest-fish-izu-ogasawara"],
    tags: ["hadal zone", "chemosynthesis", "Fendouzhe", "tube worms", "deep sea"],
  },
  {
    slug: "ledi-geraru-early-homo-australopithecus",
    datePublished: "2026-07-18",
    title: "Early Homo and an Unnamed Australopithecus at Ledi-Geraru",
    categorySlug: "archaeology",
    subtopic: "Human origins",
    year: 2025,
    dateDiscovered: "2025-08-13",
    reviewStatus: "preliminary",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-07-17",
    location: {
      name: "Ledi-Geraru Research Area, Afar",
      lat: 11.6,
      lng: 40.6,
      country: "Ethiopia",
    },
    discoveringOrg: "Ledi-Geraru Research Project, Arizona State University, and international collaborators",
    classification: "Palaeoanthropology · Early Homo and Australopithecus dental remains",
    heroImage: "/images/discoveries/2025/ledi-geraru-early-homo-australopithecus.svg",
    imageAlt:
      "Editorial reconstruction of two distinct but unnamed hominin tooth groups in a dated Ledi-Geraru landscape, emphasizing coexistence rather than a direct ancestor-descendant line.",
    imageCredit: "Beyond Signal Editorial Graphics",
    imageSourceUrl:
      "https://github.com/StormDoragon/Ocean-dive/tree/batch-04/discovery-import/docs/discovery-image-rights",
    imageLicense: "CC BY 4.0 (original Beyond Signal editorial graphic)",
    imageType: "reconstruction",
    imageRelation: "illustration",
    summary:
      "Thirteen teeth from Ledi-Geraru date to 2.6–2.8 million years ago and support the coexistence there of early Homo and a previously unrecognized Australopithecus form.",
    story: {
      whyThere:
        "The interval between roughly three and two million years ago records major changes in the hominin fossil record but remains patchy. Teeth preserve useful anatomy and dates, yet cannot by themselves establish a complete species description, population size, or ancestral relationship; more cranial and postcranial material is needed.",
      howFound:
        "Field teams recovered 13 teeth from several Ledi-Geraru localities and combined their geological context with radiometric and stratigraphic chronology. Comparative dental morphology assigned some specimens to Homo and others to Australopithecus that the authors judged distinct from Australopithecus afarensis.",
      whatMakesUnique:
        "The direct evidence is the dated set of dental fossils and their measured anatomy. The conclusion that the Australopithecus teeth represent a new species is a taxonomic interpretation based on limited material and has not yet resulted in a formal species name; that is why this entry is marked preliminary.",
    },
    gallery: ["/images/discoveries/2025/ledi-geraru-early-homo-australopithecus.svg"],
    paperUrl: "https://doi.org/10.1038/s41586-025-09390-4",
    primarySourceUrl: "https://www.nature.com/articles/s41586-025-09390-4",
    supportingSources: [
      {
        title: "ASU scientists uncover new fossils — and a new species of ancient human ancestor",
        url: "https://news.asu.edu/20250813-science-and-technology-asu-scientists-uncover-new-fossils-and-new-species-ancient-human",
        publisher: "Arizona State University",
        tier: "Tier 1",
        sourceType: "institutional",
        accessedAt: "2026-07-17",
      },
      {
        title: "New discoveries of Australopithecus and Homo from Ledi-Geraru, Ethiopia",
        url: "https://pubmed.ncbi.nlm.nih.gov/40804525/",
        publisher: "PubMed",
        tier: "Tier 1",
        sourceType: "reference",
        accessedAt: "2026-07-17",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["yunxian-oldest-in-situ-homo-erectus-crania", "casablanca-773000-year-hominins"],
    tags: ["Ledi-Geraru", "Homo", "Australopithecus", "teeth", "human evolution"],
  },
  {
    slug: "titan-tidal-dissipation-no-ocean",
    datePublished: "2026-07-18",
    title: "Cassini Gravity Data Reveal Strong Tidal Dissipation in Titan",
    categorySlug: "space",
    subtopic: "Space missions",
    year: 2025,
    dateDiscovered: "2025-12-17",
    reviewStatus: "preliminary",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-07-17",
    location: {
      name: "Jet Propulsion Laboratory, Pasadena",
      lat: 34.201,
      lng: -118.172,
      country: "United States",
    },
    discoveringOrg: "NASA Jet Propulsion Laboratory, Cassini radio-science team, and collaborators",
    scientificName: "Titan (Saturn VI)",
    classification: "Planetary science · Tidal gravity and interior modelling",
    heroImage: "/images/discoveries/2025/titan-tidal-dissipation-no-ocean.svg",
    imageAlt:
      "Editorial diagram of Titan flexing under Saturn’s tidal pull, with a gravitational-data trace and layered ice-and-slush interior shown as a model rather than a direct interior photograph.",
    imageCredit: "Beyond Signal Editorial Graphics",
    imageSourceUrl:
      "https://github.com/StormDoragon/Ocean-dive/tree/batch-04/discovery-import/docs/discovery-image-rights",
    imageLicense: "CC BY 4.0 (original Beyond Signal editorial graphic)",
    imageType: "diagram",
    imageRelation: "illustration",
    summary:
      "A reanalysis of Cassini radio tracking measured unexpectedly strong tidal energy loss in Titan and found that the gravity signal is inconsistent with the global subsurface ocean model previously favored for the moon.",
    story: {
      whyThere:
        "Titan’s interior controls its geology, chemistry, and potential habitability. The measurements strongly constrain models but do not image the interior directly; a global ocean is disfavored by this analysis, while slush layers and isolated meltwater pockets are model-based explanations that future measurements, including Dragonfly observations, can test.",
      howFound:
        "Researchers reprocessed Doppler tracking data from Cassini flybys to reconstruct Titan’s varying gravity field. The improved analysis measured the imaginary component of the tidal Love number, Im(k₂) = 0.135 ± 0.035, corresponding to a low tidal quality factor and substantial internal energy dissipation.",
      whatMakesUnique:
        "The direct result is the phase-lag and gravity measurement derived from spacecraft radio data. The conclusion that a global ocean is incompatible with that dissipation and the proposed ice-and-slush structure are physical-model inferences, so this entry remains preliminary despite the peer-reviewed measurement.",
    },
    gallery: ["/images/discoveries/2025/titan-tidal-dissipation-no-ocean.svg"],
    paperUrl: "https://doi.org/10.1038/s41586-025-09818-x",
    primarySourceUrl: "https://www.nature.com/articles/s41586-025-09818-x",
    supportingSources: [
      {
        title: "NASA Study Suggests Saturn’s Moon Titan May Not Have Global Ocean",
        url: "https://www.jpl.nasa.gov/news/nasa-study-suggests-saturns-moon-titan-may-not-have-global-ocean/",
        publisher: "NASA Jet Propulsion Laboratory",
        tier: "Tier 1",
        sourceType: "institutional",
        accessedAt: "2026-07-17",
      },
      {
        title: "Titan’s strong tidal dissipation precludes a subsurface ocean",
        url: "https://pubmed.ncbi.nlm.nih.gov/41407902/",
        publisher: "PubMed",
        tier: "Tier 1",
        sourceType: "reference",
        accessedAt: "2026-07-17",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["enceladus-ocean-phosphates", "dart-dimorphos-orbit-change"],
    tags: ["Titan", "cassini", "tidal dissipation", "gravity field", "icy moons"],
  },
  {
    slug: "arctic-new-coastlines-glacier-retreat",
    datePublished: "2026-07-18",
    title: "Glacier Retreat Exposed Thousands of Kilometres of New Arctic Coastline",
    categorySlug: "earth-science",
    subtopic: "Climate records",
    year: 2025,
    dateDiscovered: "2025-03-21",
    reviewStatus: "source-verified",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-07-17",
    location: {
      name: "Northern Hemisphere marine-terminating glaciers",
      lat: 72,
      lng: -40,
      country: "Multiple Arctic regions",
    },
    discoveringOrg: "International glacier and coastal-geomorphology research team",
    classification: "Cryosphere science · Remote-sensing coastal geomorphology",
    heroImage: "/images/discoveries/2025/arctic-new-coastlines-glacier-retreat.svg",
    imageAlt:
      "Editorial satellite-map-style visualization of a retreating marine-terminating glacier revealing a newly exposed coastline, with no claim that the simplified outline represents one named glacier.",
    imageCredit: "Beyond Signal Editorial Graphics",
    imageSourceUrl:
      "https://github.com/StormDoragon/Ocean-dive/tree/batch-04/discovery-import/docs/discovery-image-rights",
    imageLicense: "CC BY 4.0 (original Beyond Signal editorial graphic)",
    imageType: "data visualization",
    imageRelation: "illustration",
    summary:
      "A Northern Hemisphere survey mapped 2,466 ± 0.8 kilometres of coastline exposed by retreating marine-terminating glaciers between 2000 and 2020, with 66% of the total in Greenland.",
    story: {
      whyThere:
        "New paraglacial shorelines can change sediment movement, habitat, hazards, access, and local planning. The study measures coastline exposed over a defined two-decade interval; it does not predict a fixed future total or attribute every local geomorphic change to one cause, because individual glacier and coastal systems vary.",
      howFound:
        "The research team combined satellite imagery, glacier records, and geographic-information-system analysis across Northern Hemisphere proglacial zones. They traced where marine-terminating glacier fronts retreated enough to uncover coast and summed those mapped segments, while separating coastline newly exposed from coastline covered by advancing ice.",
      whatMakesUnique:
        "The direct evidence is the mapped before-and-after geography of glacier termini and coastlines. The study’s climate-change framing follows the broader documented acceleration of glacier retreat, while local consequences such as hazards and habitat change are contextual implications that need site-specific investigation.",
    },
    gallery: ["/images/discoveries/2025/arctic-new-coastlines-glacier-retreat.svg"],
    paperUrl: "https://doi.org/10.1038/s41558-025-02282-5",
    primarySourceUrl: "https://www.nature.com/articles/s41558-025-02282-5",
    supportingSources: [
      {
        title: "International study finds climate-driven glacial melt drives development of new coastline",
        url: "https://www.une.edu/news/2025/international-study-finds-climate-driven-glacial-melt-drives-development-new-coastline",
        publisher: "University of New England",
        tier: "Tier 1",
        sourceType: "institutional",
        accessedAt: "2026-07-17",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["beyond-epica-oldest-ice-core", "eurasian-ice-sheet-2-4-million-years"],
    tags: ["glacier retreat", "Arctic", "coastline", "remote sensing", "greenland"],
  },
];
