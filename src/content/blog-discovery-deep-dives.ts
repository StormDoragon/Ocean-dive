import type { BlogPost } from "./blog";

const imageRightsUrl =
  "https://github.com/StormDoragon/Ocean-dive/tree/main/docs/discovery-image-rights";

/**
 * Five long-form explainers tied to catalog discoveries.
 *
 * These use the same local, rights-documented editorial illustrations as their
 * discovery records. The captions state clearly that they are illustrations.
 */
export const discoveryDeepDivePosts: BlogPost[] = [
  {
    order: 3,
    slug: "how-scientists-completed-the-human-genome",
    discoverySlug: "telomere-to-telomere-complete-human-genome",
    title: "How Scientists Finally Completed the Human Genome",
    description:
      "Why the human genome still had gaps after 2003, how long-read sequencing closed them, and what the T2T-CHM13 reference changed.",
    datePublished: "2026-07-15",
    emoji: "🧬",
    category: "biology",
    tags: ["human genome", "T2T", "long-read sequencing", "genetics"],
    heroImage: {
      src: "/images/discoveries/2022/telomere-to-telomere-complete-human-genome.svg",
      alt: "Editorial scientific illustration of a complete DNA sequence running continuously from one chromosome end to the other.",
      credit: "Beyond Signal Editorial Graphics",
      license: "CC BY 4.0",
      sourceUrl: imageRightsUrl,
      caption:
        "Editorial illustration of telomere-to-telomere genome assembly; not a microscopic photograph.",
    },
    keyFacts: [
      { label: "Reference", value: "T2T-CHM13" },
      { label: "Published", value: "March 31, 2022" },
      { label: "Added sequence", value: "Nearly 200 million DNA letters" },
      { label: "Major advance", value: "Gapless autosomes and X chromosome" },
      { label: "Key technologies", value: "PacBio HiFi and Oxford Nanopore long reads" },
      { label: "Initial limitation", value: "No Y chromosome in the first release" },
    ],
    intro:
      "The Human Genome Project was celebrated as complete in 2003, yet important stretches of human DNA remained unread. They were not empty spaces. They were some of the genome's most repetitive and structurally complex regions, including chromosome centres and ends. In 2022, the Telomere-to-Telomere Consortium published T2T-CHM13, the first essentially gapless sequence of a human genome from one chromosome end to the other.",
    sections: [
      {
        heading: "Why the original human genome still had holes",
        paragraphs: [
          "Early genome sequencing worked by breaking DNA into many short fragments, reading those fragments and assembling them by matching their overlapping letters. The method was transformative, but it struggled when enormous regions contained long, nearly identical repetitions. A short fragment from one repeat could look almost indistinguishable from a fragment taken millions of letters away.",
          "The unresolved regions clustered around centromeres, which help chromosomes separate during cell division, telomeres at chromosome ends, large segmental duplications and repeated ribosomal DNA. Because these regions were difficult rather than unimportant, the gaps limited research into chromosome behaviour, evolution and genetic variation.",
        ],
      },
      {
        heading: "The technologies that made a complete assembly possible",
        paragraphs: [
          "The T2T team combined two complementary kinds of long-read sequencing. PacBio HiFi reads were highly accurate and long enough to span many difficult repeats. Oxford Nanopore ultra-long reads could stretch across exceptionally large repeated regions, providing the long-range structure needed to place sequences correctly.",
          "The researchers also used DNA from the CHM13 cell line, derived from a complete hydatidiform mole. Its chromosome copies are nearly identical, which removed much of the ambiguity created when an ordinary diploid genome contains different maternal and paternal versions. The team then checked the assembly with multiple independent maps and sequencing datasets rather than trusting a single algorithm.",
        ],
      },
      {
        heading: "What the missing 200 million letters revealed",
        paragraphs: [
          "T2T-CHM13 added nearly 200 million DNA letters to the previous reference and corrected errors in regions that had already been assembled. It supplied continuous sequences for all autosomes and the X chromosome, including complete centromeres and telomeres, and revealed additional genes and repeated gene families.",
          "A complete reference also made it easier to detect structural variants, where large pieces of DNA are inserted, deleted, duplicated or rearranged. Those changes can be missed when researchers compare a person's genome against a reference that contains gaps or incorrectly collapsed repeats.",
        ],
      },
      {
        heading: "Complete does not mean universal",
        paragraphs: [
          "T2T-CHM13 is a landmark reference, not a single blueprint that represents every person. Human genomes differ, and the cell line used for the first assembly did not include a Y chromosome. The Y was completed in later work, while the Human Pangenome Reference Consortium began building a graph-based reference from many people and populations.",
          "The achievement changed the question from whether the difficult parts of a human genome could be assembled to how complete, diverse genomes can be produced routinely. In that sense, closing the last gaps was not the end of human genomics. It opened a much wider map.",
        ],
      },
    ],
    faqs: [
      {
        question: "Was the Human Genome Project actually incomplete?",
        answer:
          "It successfully produced the first broadly usable human reference genome, but repetitive regions remained unresolved. T2T-CHM13 closed most of those remaining gaps in 2022.",
      },
      {
        question: "What does telomere-to-telomere mean?",
        answer:
          "It means a chromosome sequence is assembled continuously from the telomere at one end to the telomere at the other, without unknown gaps between them.",
      },
      {
        question: "Why was the CHM13 cell line useful?",
        answer:
          "Its chromosome copies are nearly identical, reducing the challenge of separating two different parental versions while assembling highly repetitive DNA.",
      },
      {
        question: "Does T2T-CHM13 represent every human population?",
        answer:
          "No. It is one exceptionally complete genome reference. Pangenome projects add many diverse genomes so researchers are not forced to compare everyone with one linear sequence.",
      },
    ],
    sources: [
      {
        label: "Science — The complete sequence of a human genome",
        url: "https://www.science.org/doi/10.1126/science.abj6987",
      },
      {
        label: "National Human Genome Research Institute — Telomere-to-Telomere",
        url: "https://www.genome.gov/about-genomics/telomere-to-telomere",
      },
      {
        label: "Beyond Signal discovery record",
        url: "/discoveries/telomere-to-telomere-complete-human-genome",
      },
    ],
  },
  {
    order: 4,
    slug: "dart-dimorphos-how-humanity-moved-an-asteroid",
    discoverySlug: "dart-dimorphos-orbit-change",
    title: "DART and Dimorphos: How Humanity Moved an Asteroid",
    description:
      "How NASA's DART spacecraft struck Dimorphos, shortened its orbit and turned asteroid deflection from theory into a demonstrated technique.",
    datePublished: "2026-07-15",
    emoji: "🛰️",
    category: "space",
    tags: ["DART", "Dimorphos", "planetary defense", "asteroid"],
    heroImage: {
      src: "/images/discoveries/2022/dart-dimorphos-orbit-change.svg",
      alt: "Editorial illustration of the DART spacecraft approaching the small asteroid Dimorphos in a binary asteroid system.",
      credit: "Beyond Signal Editorial Graphics",
      license: "CC BY 4.0",
      sourceUrl: imageRightsUrl,
      caption:
        "Editorial illustration of the DART kinetic-impact test; not a photograph of the collision.",
    },
    keyFacts: [
      { label: "Impact date", value: "September 26, 2022" },
      { label: "Target", value: "Dimorphos, moon of asteroid Didymos" },
      { label: "Impact speed", value: "About 22,530 km/h" },
      { label: "Orbit before", value: "11 hours 55 minutes" },
      { label: "Initial measured change", value: "About 32 minutes shorter" },
      { label: "Purpose", value: "Full-scale planetary-defense test" },
    ],
    intro:
      "On September 26, 2022, NASA deliberately crashed a spacecraft into an asteroid. The target, Dimorphos, was not threatening Earth. It was chosen as a controlled laboratory in space, where scientists could test whether a high-speed impact could measurably change an asteroid's motion. The answer arrived two weeks later: Dimorphos was orbiting its larger companion faster than before.",
    sections: [
      {
        heading: "Why NASA chose a binary asteroid",
        paragraphs: [
          "Dimorphos is a small moon orbiting the larger near-Earth asteroid Didymos. From Earth, telescopes can measure the pair's repeating brightness changes as Dimorphos passes in front of and behind Didymos. That made the system an unusually precise natural clock.",
          "A mission did not need to measure the asteroid's entire path around the Sun. It only needed to determine whether the moon's orbital period around Didymos changed after impact. Neither object posed a danger to Earth before or after the test.",
        ],
      },
      {
        heading: "A spacecraft that aimed itself during the final approach",
        paragraphs: [
          "DART travelled to the Didymos system and used autonomous optical navigation during its final hours. The spacecraft first distinguished the larger Didymos, then locked onto Dimorphos as the smaller body resolved from a point of light into a rough, boulder-covered world.",
          "The spacecraft returned images until moments before impact, then struck at roughly 22,530 kilometres per hour. DART was a kinetic impactor: it relied on momentum from speed and mass, not an explosive charge.",
        ],
      },
      {
        heading: "How scientists proved the orbit had changed",
        paragraphs: [
          "Before impact, Dimorphos took 11 hours and 55 minutes to circle Didymos. Telescopes around the world monitored the binary system after the collision and measured an initial orbital period of about 11 hours and 23 minutes, a shortening of roughly 32 minutes with an uncertainty of about two minutes.",
          "NASA had defined a change of 73 seconds as the minimum successful result. The first measurement exceeded that benchmark by more than 25 times. Later analyses refined the orbit and examined how the impact reshaped Dimorphos, but the central result was already clear: a spacecraft had intentionally altered the motion of a celestial body.",
        ],
      },
      {
        heading: "The debris plume did part of the pushing",
        paragraphs: [
          "DART transferred its own momentum to Dimorphos, but the impact also blasted rock and dust away from the asteroid. The recoil from that ejecta amplified the push, much as gas rushing from a balloon sends the balloon in the opposite direction. The amount of amplification depends on the asteroid's structure, strength and surface material.",
          "That is why one successful impact is not a universal recipe. A future planetary-defense mission would need years of warning and detailed knowledge of its target. DART demonstrated a tool, not a last-minute shield. Its importance is that the tool now has real-world data behind it.",
        ],
      },
    ],
    faqs: [
      {
        question: "Did DART destroy Dimorphos?",
        answer:
          "No. The impact changed Dimorphos's orbit and altered its surface and shape, but the moon remained in orbit around Didymos.",
      },
      {
        question: "Was Dimorphos going to hit Earth?",
        answer:
          "No. The Didymos-Dimorphos system was selected as a safe test target and posed no hazard to Earth before or after the mission.",
      },
      {
        question: "Why did the orbit become shorter?",
        answer:
          "DART struck opposite Dimorphos's direction of travel around Didymos, reducing its orbital energy and pulling it into a faster, shorter-period orbit.",
      },
      {
        question: "Could the same method stop a dangerous asteroid?",
        answer:
          "Potentially, when the asteroid is discovered early enough. Even a small velocity change can grow into a large miss distance after years of travel.",
      },
    ],
    sources: [
      {
        label: "NASA — DART impact changed Dimorphos's orbit",
        url: "https://www.nasa.gov/news-release/nasa-confirms-dart-mission-impact-changed-asteroids-motion-in-space/",
      },
      {
        label: "NASA Science — DART mission",
        url: "https://science.nasa.gov/planetary-defense-dart/",
      },
      {
        label: "Beyond Signal discovery record",
        url: "/discoveries/dart-dimorphos-orbit-change",
      },
    ],
  },
  {
    order: 5,
    slug: "kalambo-falls-oldest-wooden-structure",
    discoverySlug: "kalambo-falls-wooden-structure",
    title: "The 476,000-Year-Old Wooden Structure That Rewrote Prehistory",
    description:
      "Two interlocking logs at Kalambo Falls reveal sophisticated woodworking nearly half a million years ago, long before Homo sapiens appeared.",
    datePublished: "2026-07-15",
    emoji: "🪵",
    category: "archaeology",
    tags: ["Kalambo Falls", "woodworking", "early humans", "Zambia"],
    heroImage: {
      src: "/images/discoveries/2023/kalambo-falls-wooden-structure.svg",
      alt: "Editorial reconstruction of two ancient worked logs joined by a deliberately cut notch at Kalambo Falls.",
      credit: "Beyond Signal Editorial Graphics",
      license: "CC BY 4.0",
      sourceUrl: imageRightsUrl,
      caption:
        "Editorial reconstruction of the interlocking Kalambo Falls logs; not a photograph of the excavated wood.",
    },
    keyFacts: [
      { label: "Site", value: "Kalambo Falls, Zambia" },
      { label: "Excavated", value: "2019" },
      { label: "Age", value: "At least 476,000 years" },
      { label: "Material", value: "Worked waterlogged wood" },
      { label: "Construction", value: "Two logs joined by a cut notch" },
      { label: "Species", value: "Unknown hominin, before Homo sapiens" },
    ],
    intro:
      "Stone survives. Wood usually disappears. That imbalance has made early technology look far more stone-centred than it probably was. At Kalambo Falls in Zambia, permanently wet sediments preserved something almost never seen from deep prehistory: two large logs deliberately shaped to fit together, dated to at least 476,000 years ago.",
    sections: [
      {
        heading: "Why ancient wood is almost invisible to archaeology",
        paragraphs: [
          "Wood was abundant, workable and useful for digging, hunting, carrying, building and controlling fire. Yet microorganisms, oxygen and changing moisture destroy it rapidly. Most Palaeolithic sites therefore preserve stone tools while the objects those tools helped make have vanished.",
          "Kalambo Falls is different. A high water table and fine river sediments created oxygen-poor conditions that protected wood and plant remains. Earlier excavations had already suggested the site might preserve a rare wooden record, and renewed work in 2019 recovered multiple modified objects.",
        ],
      },
      {
        heading: "The notch that showed deliberate construction",
        paragraphs: [
          "The oldest find consists of an upper log laid across a larger trunk. The upper piece is about 1.4 metres long and contains a broad U-shaped notch. The lower trunk passes through that notch, connecting the two pieces at an angle rather than leaving them as a chance pile of driftwood.",
          "Researchers documented chopping, scraping and adzing marks on the notch and shaped surfaces. Experiments and microscopic examination supported the interpretation that hominins intentionally modified both pieces to make a joined structure.",
        ],
      },
      {
        heading: "How sand grains dated wood too old for radiocarbon",
        paragraphs: [
          "Radiocarbon dating cannot reach nearly half a million years, and the team did not date the wood directly. Instead, researchers used luminescence techniques on mineral grains in the surrounding sediments. These methods estimate when quartz or feldspar was last exposed to sunlight before burial.",
          "The sediment cluster containing the interlocking logs produced an age of about 476,000 years with an uncertainty of roughly 23,000 years. Younger layers at the site preserved additional wooden tools, including a possible wedge, a digging stick and a cut log.",
        ],
      },
      {
        heading: "What the structure says, and what remains uncertain",
        paragraphs: [
          "The joined logs demonstrate planning, control of large pieces of timber and the idea of combining separate parts into a construction. The researchers suggested possibilities such as a raised platform, walkway or foundation in a wet floodplain, but the surviving fragment is not enough to identify one function with certainty.",
          "No human remains were found with the structure, so its makers cannot be assigned securely to a species. What can be said is more important than a speculative name: hominins living before Homo sapiens were transforming their environment with large-scale woodworking hundreds of thousands of years earlier than the surviving record had shown.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is this the oldest wooden object ever found?",
        answer:
          "Not necessarily. Older isolated pieces of modified wood have been reported, but the Kalambo find is the earliest known evidence of logs intentionally joined into a structure.",
      },
      {
        question: "How could wood survive for 476,000 years?",
        answer:
          "Waterlogged, oxygen-poor sediments slowed biological decay and kept the wood buried in unusually stable conditions.",
      },
      {
        question: "Who built the Kalambo structure?",
        answer:
          "The builders are unknown. The structure predates Homo sapiens, and no diagnostic hominin remains were recovered with it.",
      },
      {
        question: "Was it definitely a house?",
        answer:
          "No. A platform, walkway or foundation are plausible interpretations, but the preserved logs do not establish the structure's exact purpose.",
      },
    ],
    sources: [
      {
        label: "Nature — Earliest structural use of wood",
        url: "https://www.nature.com/articles/s41586-023-06557-9",
      },
      {
        label: "University of Liverpool — Kalambo Falls discovery",
        url: "https://news.liverpool.ac.uk/2023/09/20/archaeologists-discover-worlds-oldest-wooden-structure/",
      },
      {
        label: "Beyond Signal discovery record",
        url: "/discoveries/kalambo-falls-wooden-structure",
      },
    ],
  },
  {
    order: 6,
    slug: "jades-gs-z14-0-galaxy-cosmic-dawn",
    discoverySlug: "jades-gs-z14-0",
    title: "JADES-GS-z14-0: A Galaxy From the Universe's First 300 Million Years",
    description:
      "How JWST confirmed JADES-GS-z14-0 at redshift 14 and why its brightness challenged expectations for the infant universe.",
    datePublished: "2026-07-15",
    emoji: "🌌",
    category: "space",
    tags: ["JWST", "JADES", "cosmic dawn", "early galaxies"],
    heroImage: {
      src: "/images/discoveries/2024/jades-gs-z14-0.svg",
      alt: "Editorial data illustration of a distant early galaxy whose infrared spectrum places it at cosmic dawn.",
      credit: "Beyond Signal Editorial Graphics",
      license: "CC BY 4.0",
      sourceUrl: imageRightsUrl,
      caption:
        "Editorial visualization of an extreme-redshift galaxy and spectrum; not a direct-color photograph.",
    },
    keyFacts: [
      { label: "Object", value: "JADES-GS-z14-0" },
      { label: "Survey", value: "JWST Advanced Deep Extragalactic Survey" },
      { label: "Instrument", value: "JWST NIRSpec spectroscopy" },
      { label: "Redshift", value: "Approximately 14.2" },
      { label: "Cosmic age", value: "About 300 million years after the Big Bang" },
      { label: "Published", value: "Nature, 2024" },
    ],
    intro:
      "JADES-GS-z14-0 appears to us not as it is now, but as it was when the universe was only about 300 million years old. Its light travelled for more than 13 billion years and stretched into infrared wavelengths as space expanded. JWST first identified it as a candidate in deep imaging, then used spectroscopy to confirm that the galaxy truly belonged to cosmic dawn.",
    sections: [
      {
        heading: "A red candidate in an infrared deep field",
        paragraphs: [
          "The JADES programme uses JWST to study extremely faint galaxies in well-observed regions of the sky. Astronomers search for objects that disappear from shorter-wavelength filters but remain visible in longer infrared bands. This break can occur when neutral hydrogen absorbs light emitted blueward of the Lyman limit and cosmic expansion shifts the feature into JWST's infrared range.",
          "Imaging can estimate a galaxy's redshift, but unusual dust, emission lines or nearer objects can imitate some colours. The strongest confirmation comes from spectroscopy, which separates the light by wavelength and locates identifiable breaks and spectral features.",
        ],
      },
      {
        heading: "How NIRSpec confirmed an extreme distance",
        paragraphs: [
          "JWST's Near-Infrared Spectrograph observed JADES-GS-z14-0 and found the sharp spectral break expected at a redshift around 14. Additional measurements with NIRCam and the Mid-Infrared Instrument helped constrain the galaxy's light and rule out more ordinary explanations.",
          "At that redshift, the detected light left the galaxy when the universe was roughly two percent of its present age. The result made JADES-GS-z14-0 the most distant spectroscopically confirmed galaxy reported at the time of the announcement.",
        ],
      },
      {
        heading: "Why its brightness surprised astronomers",
        paragraphs: [
          "The galaxy was not merely detectable. It was unexpectedly luminous and spatially extended for such an early time. That suggests star formation and the assembly of substantial galaxies progressed rapidly after the first stars switched on.",
          "One bright galaxy does not overturn cosmology. Surveys must measure how common such objects are, how their stars formed and whether strong nebular emission or short bursts of star formation make them appear unusually bright. Still, JADES-GS-z14-0 joined a growing JWST population that pushed models to produce developed galaxies sooner.",
        ],
      },
      {
        heading: "A record holder is a scientific waypoint, not a finish line",
        paragraphs: [
          "The phrase 'most distant galaxy' is temporary by nature. New surveys, deeper observations and improved spectroscopy continue to find candidates at comparable or greater distances. A record matters because it marks where evidence was strong enough at a particular moment, not because the frontier stops there.",
          "JADES-GS-z14-0 is valuable beyond its rank. Its spectrum and brightness give researchers a direct test of how quickly gas cooled, stars formed, heavy elements accumulated and galaxies helped transform the early universe during the era of reionization.",
        ],
      },
    ],
    faqs: [
      {
        question: "What does a redshift of 14 mean?",
        answer:
          "It means cosmic expansion stretched the galaxy's emitted wavelengths by roughly a factor of fifteen, placing much of its originally ultraviolet light in the infrared today.",
      },
      {
        question: "Are we seeing the galaxy as it exists now?",
        answer:
          "No. We see it as it was about 300 million years after the Big Bang because its light took more than 13 billion years to reach us.",
      },
      {
        question: "Why was spectroscopy necessary?",
        answer:
          "Colours from images can suggest an extreme distance, but a spectrum gives a much stronger measurement by locating the wavelength break and other features directly.",
      },
      {
        question: "Is JADES-GS-z14-0 still the most distant known galaxy?",
        answer:
          "Record claims evolve as new candidates are confirmed. Its lasting importance is its secure extreme redshift and the evidence it provides about unexpectedly rapid early galaxy growth.",
      },
    ],
    sources: [
      {
        label: "Nature — Spectroscopic confirmation at redshift 14",
        url: "https://www.nature.com/articles/s41586-024-07860-9",
      },
      {
        label: "NASA Webb — Most distant known galaxy announcement",
        url: "https://science.nasa.gov/missions/webb/nasas-james-webb-space-telescope-finds-most-distant-known-galaxy/",
      },
      {
        label: "Beyond Signal discovery record",
        url: "/discoveries/jades-gs-z14-0",
      },
    ],
  },
  {
    order: 7,
    slug: "first-live-footage-colossal-squid-deep-sea",
    discoverySlug: "juvenile-colossal-squid-filmed",
    title: "The First Live Footage of a Colossal Squid in the Deep Sea",
    description:
      "A transparent juvenile colossal squid filmed at 600 metres gave scientists their first confirmed view of the species alive in its natural habitat.",
    datePublished: "2026-07-15",
    emoji: "🦑",
    category: "ocean",
    tags: ["colossal squid", "deep sea", "ROV", "South Atlantic"],
    heroImage: {
      src: "/images/discoveries/2025/juvenile-colossal-squid-filmed.svg",
      alt: "Editorial underwater illustration of a transparent juvenile colossal squid observed by a deep-sea vehicle.",
      credit: "Beyond Signal Editorial Graphics",
      license: "CC BY 4.0",
      sourceUrl: imageRightsUrl,
      caption:
        "Editorial illustration inspired by the confirmed juvenile sighting; not a frame from the expedition video.",
    },
    keyFacts: [
      { label: "Species", value: "Mesonychoteuthis hamiltoni" },
      { label: "Recorded", value: "March 9, 2025" },
      { label: "Announced", value: "April 15, 2025" },
      { label: "Length", value: "About 30 centimetres" },
      { label: "Depth", value: "About 600 metres" },
      { label: "Vehicle", value: "ROV SuBastian" },
    ],
    intro:
      "For a century, the colossal squid was known from fragments, animals caught in fishing gear and remains inside predators. Adults can become the heaviest known invertebrates, yet scientists had never confirmed one swimming alive in its deep-sea habitat. That changed when the remotely operated vehicle SuBastian recorded a small, almost transparent juvenile near the South Sandwich Islands.",
    sections: [
      {
        heading: "A giant animal known mostly after death",
        paragraphs: [
          "The colossal squid lives in cold Southern Ocean waters and is notoriously difficult to observe. Much of what scientists know comes from beaks found in sperm-whale stomachs, damaged specimens hauled up by fisheries and a small number of adults seen dying near the surface or in nets.",
          "Its deep habitat, enormous range and probably sparse population make targeted searches difficult. Cameras and submersibles also introduce light, sound and movement that a large-eyed deep-sea animal may detect before researchers see it.",
        ],
      },
      {
        heading: "The encounter near the South Sandwich Islands",
        paragraphs: [
          "On March 9, 2025, researchers aboard Schmidt Ocean Institute's research vessel Falkor (too) were surveying deep-sea biodiversity during the Ocean Census and GoSouth expedition. At about 600 metres depth, SuBastian's cameras encountered a delicate glass-like squid roughly 30 centimetres long.",
          "The team did not announce the identification immediately. Independent cephalopod specialists examined the footage, including the arrangement of arms and the hooks associated with the species, before confirming it as a juvenile colossal squid.",
        ],
      },
      {
        heading: "Why the juvenile looks nothing like the famous adult",
        paragraphs: [
          "Preserved adult colossal squid are thick-bodied, muscular and dark reddish or purple. The juvenile in the video was slender and nearly transparent, with visible internal structures and scattered pigment cells. Transparency helps many young open-ocean animals avoid casting a recognizable silhouette.",
          "The contrast reveals how much of the species' life history remains unknown. Scientists do not yet have a complete picture of where different age classes live, how quickly they grow, when they become opaque or how their behaviour changes as they develop into massive predators.",
        ],
      },
      {
        heading: "Colossal squid and giant squid are different animals",
        paragraphs: [
          "The colossal squid is Mesonychoteuthis hamiltoni, a member of the glass-squid family. The giant squid is Architeuthis dux. Giant squid are generally longer because of their extended feeding tentacles, while colossal squid have heavier bodies and rotating hooks on their arms and tentacles.",
          "The 2025 video did not reveal the behaviour of a full-sized adult, but it closed a basic observational gap: scientists could finally study a confirmed living colossal squid in the environment where it naturally swims. The next great challenge is to observe an adult without driving it away.",
        ],
      },
    ],
    faqs: [
      {
        question: "Was this the first colossal squid ever seen alive?",
        answer:
          "It was the first confirmed footage of the species alive in its natural deep-sea habitat. Other specimens had been seen alive after capture or near the surface.",
      },
      {
        question: "Why was the squid transparent?",
        answer:
          "It was a juvenile. Young colossal squid are nearly transparent, while adults become much larger, thicker and dark red or purple.",
      },
      {
        question: "How was the species identified from video?",
        answer:
          "Independent squid specialists examined diagnostic anatomy visible in the footage, including the characteristic hooks and body form.",
      },
      {
        question: "Is a colossal squid the same as a giant squid?",
        answer:
          "No. They are different species. Giant squid can be longer, but colossal squid are more heavily built and are considered the heaviest known invertebrates.",
      },
    ],
    sources: [
      {
        label: "Schmidt Ocean Institute — First confirmed live observation",
        url: "https://schmidtocean.org/cruise-log-post/colossal-squid-first-confirmed-live-observation/",
      },
      {
        label: "Ocean Census — GoSouth expedition",
        url: "https://oceancensus.org/expeditions/gosouth/",
      },
      {
        label: "Beyond Signal discovery record",
        url: "/discoveries/juvenile-colossal-squid-filmed",
      },
    ],
  },
];
