import type { Discovery } from "./types";

/**
 * v1 seed catalog of real, well-documented scientific discoveries.
 * Facts are drawn from public reporting; images are local placeholders.
 * For space discoveries, `location` is the primary Earth observatory/site
 * where the work was done, so every entry has a coherent point on the map.
 */
export const discoveries: Discovery[] = [
  // ───────────────────────────── Ocean ─────────────────────────────
  {
    slug: "casper-ghost-octopus",
    title: "\"Casper\" the Ghost Octopus",
    categorySlug: "ocean",
    subtopic: "New species",
    year: 2016,
    dateDiscovered: "2016-03-04",
    location: {
      name: "Near Necker Island, Hawaiian Ridge",
      lat: 23.6,
      lng: -164.7,
      depthMeters: 4290,
    },
    discoveringOrg: "NOAA Office of Ocean Exploration (Okeanos Explorer)",
    scientificName: "Undescribed incirrate octopod",
    classification: "Animalia · Mollusca · Cephalopoda · Octopoda",
    conservationStatus: "Not evaluated",
    heroImage: "/images/categories/ocean.svg",
    summary:
      "A ghostly, pigmentless octopus filmed at 4,290 m off Hawaii — likely a previously unknown genus living deeper than any known finned octopod.",
    story: {
      whyThere:
        "The Okeanos Explorer was mapping the seafloor of the Hawaiian Ridge during a deep-sea exploration cruise.",
      howFound:
        "Its remotely operated vehicle Deep Discoverer spotted the pale animal perched on a flat rock far below the depth octopods were thought to inhabit.",
      whatMakesUnique:
        "It lacks the pigment cells (chromatophores) of shallower octopods, giving it a translucent, ghost-like look that inspired the nickname \"Casper.\"",
    },
    gallery: ["/images/categories/ocean.svg", "/images/textures/waves.svg"],
    paperUrl: "https://oceanexplorer.noaa.gov/okeanos/explorations/ex1603/welcome.html",
    videoUrls: [],
    relatedSlugs: ["lost-city-hydrothermal-field", "scaly-foot-gastropod"],
    tags: ["octopus", "deep sea", "cephalopod", "pacific", "rov"],
  },
  {
    slug: "lost-city-hydrothermal-field",
    title: "The Lost City Hydrothermal Field",
    categorySlug: "ocean",
    subtopic: "Hydrothermal vents",
    year: 2000,
    dateDiscovered: "2000-12-04",
    location: {
      name: "Atlantis Massif, Mid-Atlantic Ridge",
      lat: 30.13,
      lng: -42.12,
      depthMeters: 750,
    },
    discoveringOrg: "Woods Hole / University of Washington (R/V Atlantis)",
    scientificName: undefined,
    classification: "Geology · Serpentinite-hosted vent system",
    conservationStatus: "Proposed marine protected area",
    heroImage: "/images/categories/ocean.svg",
    summary:
      "A field of towering white carbonate chimneys — one over 60 m tall — driven by seawater reacting with mantle rock rather than volcanic heat.",
    story: {
      whyThere:
        "Geologists were surveying the Atlantis Massif, a dome of mantle rock exposed on the seafloor.",
      howFound:
        "While exploring with the submersible Alvin and the camera sled Argo II, the team stumbled on ghostly white spires unlike any known black smoker.",
      whatMakesUnique:
        "Its alkaline, methane-rich chemistry is a leading model for how life could begin on Earth — and on icy ocean worlds like Enceladus.",
    },
    gallery: ["/images/categories/ocean.svg", "/images/textures/grid.svg"],
    paperUrl: "https://www.nsf.gov/news/news_summ.jsp?cntn_id=104292",
    videoUrls: [],
    relatedSlugs: ["scaly-foot-gastropod", "casper-ghost-octopus"],
    tags: ["hydrothermal vent", "atlantic", "origin of life", "geology"],
  },
  {
    slug: "scaly-foot-gastropod",
    title: "The Scaly-foot Snail",
    categorySlug: "ocean",
    subtopic: "New species",
    year: 2001,
    dateDiscovered: "2001-04-06",
    location: {
      name: "Kairei vent field, Central Indian Ridge",
      lat: -25.32,
      lng: 70.04,
      depthMeters: 2420,
    },
    discoveringOrg: "JAMSTEC / international vent expedition",
    scientificName: "Chrysomallon squamiferum",
    classification: "Animalia · Mollusca · Gastropoda · Neomphalina",
    conservationStatus: "Endangered (IUCN)",
    heroImage: "/images/categories/ocean.svg",
    summary:
      "A deep-sea snail that armors its foot with iron-sulfide scales — the only animal known to build part of its skeleton from iron.",
    story: {
      whyThere:
        "Researchers were sampling hydrothermal vents along the Central Indian Ridge for chemosynthetic life.",
      howFound:
        "Among the vent fauna they recovered a snail clad in overlapping mineralized plates unlike anything described before.",
      whatMakesUnique:
        "It incorporates iron sulfides into its shell and foot scales, and was the first species listed as endangered because of the threat of deep-sea mining.",
    },
    gallery: ["/images/categories/ocean.svg", "/images/textures/waves.svg"],
    paperUrl: "https://www.iucnredlist.org/species/103636217/103636261",
    videoUrls: [],
    relatedSlugs: ["lost-city-hydrothermal-field", "casper-ghost-octopus"],
    tags: ["snail", "iron", "indian ocean", "hydrothermal vent", "endangered"],
  },

  // ───────────────────────────── Space ─────────────────────────────
  {
    slug: "trappist-1-system",
    title: "The TRAPPIST-1 Planetary System",
    categorySlug: "space",
    subtopic: "Exoplanets",
    year: 2017,
    dateDiscovered: "2017-02-22",
    location: {
      name: "La Silla Observatory, Chile (TRAPPIST telescope)",
      lat: -29.26,
      lng: -70.73,
    },
    discoveringOrg: "ESO / NASA (TRAPPIST & Spitzer)",
    scientificName: "TRAPPIST-1 b–h",
    classification: "Astronomy · Ultracool dwarf planetary system",
    conservationStatus: undefined,
    heroImage: "/images/categories/space.svg",
    summary:
      "Seven Earth-sized planets circling a cool red dwarf 40 light-years away — three of them in the habitable zone.",
    story: {
      whyThere:
        "Astronomers monitored nearby ultracool dwarf stars for tell-tale dips in brightness from transiting planets.",
      howFound:
        "The TRAPPIST telescope flagged repeated dimmings, and NASA's Spitzer Space Telescope confirmed a full family of seven rocky worlds.",
      whatMakesUnique:
        "It is the largest batch of Earth-sized, temperate planets ever found around a single star, and a prime target for atmospheric studies.",
    },
    gallery: ["/images/categories/space.svg", "/images/textures/grid.svg"],
    paperUrl: "https://www.nature.com/articles/nature21360",
    videoUrls: [],
    relatedSlugs: ["m87-black-hole-image", "sagittarius-a-image"],
    tags: ["exoplanet", "habitable zone", "red dwarf", "transit"],
  },
  {
    slug: "m87-black-hole-image",
    title: "First Image of a Black Hole (M87*)",
    categorySlug: "space",
    subtopic: "Black holes",
    year: 2019,
    dateDiscovered: "2019-04-10",
    location: {
      name: "ALMA, Atacama Desert, Chile (EHT array node)",
      lat: -23.03,
      lng: -67.75,
    },
    discoveringOrg: "Event Horizon Telescope Collaboration",
    scientificName: "M87*",
    classification: "Astronomy · Supermassive black hole",
    conservationStatus: undefined,
    heroImage: "/images/categories/space.svg",
    summary:
      "Humanity's first direct image of a black hole — a glowing ring of light around the shadow of M87*, 6.5 billion solar masses.",
    story: {
      whyThere:
        "The EHT linked radio dishes across the planet into one Earth-sized virtual telescope aimed at the heart of galaxy M87.",
      howFound:
        "Petabytes of synchronized data were combined to reconstruct the silhouette of the event horizon against surrounding hot gas.",
      whatMakesUnique:
        "It confirmed a century-old prediction of general relativity by showing a black hole's shadow at the scale Einstein's math demanded.",
    },
    gallery: ["/images/categories/space.svg", "/images/textures/waves.svg"],
    paperUrl: "https://iopscience.iop.org/article/10.3847/2041-8213/ab0ec7",
    videoUrls: [],
    relatedSlugs: ["sagittarius-a-image", "trappist-1-system"],
    tags: ["black hole", "event horizon", "general relativity", "radio astronomy"],
  },
  {
    slug: "sagittarius-a-image",
    title: "Image of Our Galaxy's Black Hole (Sgr A*)",
    categorySlug: "space",
    subtopic: "Black holes",
    year: 2022,
    dateDiscovered: "2022-05-12",
    location: {
      name: "IRAM 30m, Pico Veleta, Spain (EHT array node)",
      lat: 37.066,
      lng: -3.392,
    },
    discoveringOrg: "Event Horizon Telescope Collaboration",
    scientificName: "Sagittarius A*",
    classification: "Astronomy · Supermassive black hole (Milky Way)",
    conservationStatus: undefined,
    heroImage: "/images/categories/space.svg",
    summary:
      "The first image of the supermassive black hole at the center of our own galaxy, 27,000 light-years away.",
    story: {
      whyThere:
        "After imaging M87*, the EHT turned its global array toward Sagittarius A* at the Milky Way's core.",
      howFound:
        "Because Sgr A* changes far faster than M87*, the team averaged thousands of reconstructed frames to reveal a stable ring of light.",
      whatMakesUnique:
        "It gave us a portrait of the giant black hole that anchors our own galaxy, confirming it weighs about four million Suns.",
    },
    gallery: ["/images/categories/space.svg", "/images/textures/grid.svg"],
    paperUrl: "https://iopscience.iop.org/journal/2041-8205/page/Focus_on_First_Sgr_A_Results",
    videoUrls: [],
    relatedSlugs: ["m87-black-hole-image", "trappist-1-system"],
    tags: ["black hole", "milky way", "event horizon", "radio astronomy"],
  },

  // ──────────────────────── Dinosaurs & Fossils ────────────────────
  {
    slug: "spinosaurus-swimming-tail",
    title: "Spinosaurus: the Swimming Dinosaur",
    categorySlug: "dinosaurs-fossils",
    subtopic: "New dinosaur species",
    year: 2020,
    dateDiscovered: "2020-04-29",
    location: {
      name: "Kem Kem beds, southeastern Morocco",
      lat: 30.9,
      lng: -4.0,
    },
    discoveringOrg: "University of Detroit Mercy / University of Portsmouth",
    scientificName: "Spinosaurus aegyptiacus",
    classification: "Animalia · Dinosauria · Theropoda · Spinosauridae",
    conservationStatus: "Extinct (~99 Ma)",
    heroImage: "/images/categories/dinosaurs-fossils.svg",
    summary:
      "A near-complete fossil tail showed Spinosaurus had a fin-like paddle — the strongest evidence yet of a swimming, water-propelled dinosaur.",
    story: {
      whyThere:
        "Paleontologists returned to Morocco's Kem Kem beds, where earlier Spinosaurus material had been found.",
      howFound:
        "Years of excavation recovered an articulated tail with tall, blade-like spines forming a broad swimming fin.",
      whatMakesUnique:
        "It overturned the view of Spinosaurus as a wading shoreline hunter, recasting it as the first known aquatic-propulsion dinosaur.",
    },
    gallery: ["/images/categories/dinosaurs-fossils.svg", "/images/textures/grid.svg"],
    paperUrl: "https://www.nature.com/articles/s41586-020-2190-3",
    videoUrls: [],
    relatedSlugs: ["dreadnoughtus-titanosaur"],
    tags: ["dinosaur", "theropod", "aquatic", "cretaceous", "morocco"],
  },
  {
    slug: "dreadnoughtus-titanosaur",
    title: "Dreadnoughtus, a Colossal Titanosaur",
    categorySlug: "dinosaurs-fossils",
    subtopic: "New dinosaur species",
    year: 2014,
    dateDiscovered: "2014-09-04",
    location: {
      name: "Santa Cruz Province, Patagonia, Argentina",
      lat: -50.0,
      lng: -71.0,
    },
    discoveringOrg: "Drexel University",
    scientificName: "Dreadnoughtus schrani",
    classification: "Animalia · Dinosauria · Sauropoda · Titanosauria",
    conservationStatus: "Extinct (~76 Ma)",
    heroImage: "/images/categories/dinosaurs-fossils.svg",
    summary:
      "One of the most complete giant dinosaurs ever found — a 26 m sauropod whose skeleton let scientists reliably estimate its ~59-tonne mass.",
    story: {
      whyThere:
        "A field team was prospecting Late Cretaceous rocks in southern Patagonia.",
      howFound:
        "They unearthed an exceptionally complete skeleton over four field seasons, recovering about 70% of the bone types behind the head.",
      whatMakesUnique:
        "Its completeness made it one of the best mass estimates for any supermassive dinosaur, giving a rare accurate look at a true giant.",
    },
    gallery: ["/images/categories/dinosaurs-fossils.svg", "/images/textures/waves.svg"],
    paperUrl: "https://www.nature.com/articles/srep06196",
    videoUrls: [],
    relatedSlugs: ["spinosaurus-swimming-tail"],
    tags: ["dinosaur", "sauropod", "titanosaur", "patagonia", "cretaceous"],
  },

  // ──────────────────────────── Biology ────────────────────────────
  {
    slug: "eumillipes-persephone",
    title: "The First True Millipede (1,306 Legs)",
    categorySlug: "biology",
    subtopic: "New species",
    year: 2021,
    dateDiscovered: "2021-12-16",
    location: {
      name: "Eastern Goldfields, Western Australia",
      lat: -29.0,
      lng: 122.0,
    },
    discoveringOrg: "Virginia Tech / Western Australian Museum",
    scientificName: "Eumillipes persephone",
    classification: "Animalia · Arthropoda · Diplopoda · Polyzoniida",
    conservationStatus: "Not evaluated",
    heroImage: "/images/categories/biology.svg",
    summary:
      "A pale, eyeless arthropod with up to 1,306 legs — the first millipede ever found that literally has more than a thousand.",
    story: {
      whyThere:
        "Surveys for environmental impact assessments sampled deep boreholes in a mineral-exploration zone.",
      howFound:
        "A drop trap 60 m underground caught a thread-like animal that, under the microscope, proved to have a record-breaking leg count.",
      whatMakesUnique:
        "Despite the name 'millipede' (thousand feet), no species had ever topped 750 legs until Eumillipes persephone.",
    },
    gallery: ["/images/categories/biology.svg", "/images/textures/grid.svg"],
    paperUrl: "https://www.nature.com/articles/s41598-021-02447-0",
    videoUrls: [],
    relatedSlugs: ["homo-naledi"],
    tags: ["millipede", "arthropod", "subterranean", "australia", "new species"],
  },
  {
    slug: "homo-naledi",
    title: "Homo naledi, a New Human Relative",
    categorySlug: "biology",
    subtopic: "Human evolution",
    year: 2015,
    dateDiscovered: "2015-09-10",
    location: {
      name: "Rising Star Cave, Cradle of Humankind, South Africa",
      lat: -26.02,
      lng: 27.79,
    },
    discoveringOrg: "University of the Witwatersrand",
    scientificName: "Homo naledi",
    classification: "Animalia · Chordata · Mammalia · Primates · Hominini",
    conservationStatus: "Extinct (~0.3 Ma)",
    heroImage: "/images/categories/biology.svg",
    summary:
      "More than 1,500 fossil pieces from a deep cave chamber revealed a small-brained human relative with a surprising mix of ancient and modern traits.",
    story: {
      whyThere:
        "Cavers exploring the Rising Star system squeezed into a remote chamber and found it littered with hominin bones.",
      howFound:
        "A team of slender 'underground astronaut' scientists recovered the fossils through a chute just 18 cm wide.",
      whatMakesUnique:
        "Its blend of primitive and modern features — and possible deliberate placement of bodies — reshaped debate about the human family tree.",
    },
    gallery: ["/images/categories/biology.svg", "/images/textures/waves.svg"],
    paperUrl: "https://elifesciences.org/articles/09560",
    videoUrls: [],
    relatedSlugs: ["eumillipes-persephone", "gobekli-tepe"],
    tags: ["human evolution", "hominin", "fossil", "south africa"],
  },

  // ────────────────────────── Archaeology ──────────────────────────
  {
    slug: "gobekli-tepe",
    title: "Göbekli Tepe, the First Temple",
    categorySlug: "archaeology",
    subtopic: "Ancient civilizations",
    year: 1995,
    dateDiscovered: "1995-10-01",
    location: {
      name: "Şanlıurfa Province, southeastern Turkey",
      lat: 37.223,
      lng: 38.922,
    },
    discoveringOrg: "German Archaeological Institute",
    scientificName: undefined,
    classification: "Archaeology · Pre-Pottery Neolithic monumental site",
    conservationStatus: "UNESCO World Heritage Site",
    heroImage: "/images/categories/archaeology.svg",
    summary:
      "Massive carved stone pillars built ~11,000 years ago — monumental architecture from hunter-gatherers, predating Stonehenge by six millennia.",
    story: {
      whyThere:
        "Archaeologist Klaus Schmidt revisited a hilltop earlier dismissed as a medieval cemetery.",
      howFound:
        "Excavations uncovered rings of T-shaped megaliths carved with animals, buried intact beneath the mound.",
      whatMakesUnique:
        "It showed complex ritual architecture before farming and pottery, upending the idea that cities had to come first.",
    },
    gallery: ["/images/categories/archaeology.svg", "/images/textures/grid.svg"],
    paperUrl: "https://whc.unesco.org/en/list/1572/",
    videoUrls: [],
    relatedSlugs: ["sanxingdui-sacrificial-pits", "homo-naledi"],
    tags: ["neolithic", "megalith", "temple", "turkey", "world heritage"],
  },
  {
    slug: "sanxingdui-sacrificial-pits",
    title: "New Sanxingdui Sacrificial Pits",
    categorySlug: "archaeology",
    subtopic: "Artifacts",
    year: 2021,
    dateDiscovered: "2021-03-20",
    location: {
      name: "Guanghan, Sichuan, China",
      lat: 31.0,
      lng: 104.2,
    },
    discoveringOrg: "Sichuan Provincial Cultural Relics & Archaeology Institute",
    scientificName: undefined,
    classification: "Archaeology · Bronze Age Shu civilization",
    conservationStatus: "Protected archaeological site",
    heroImage: "/images/categories/archaeology.svg",
    summary:
      "Six newly opened pits yielded thousands of artifacts — gold masks, bronze trees, and ivory — from the mysterious 3,000-year-old Shu kingdom.",
    story: {
      whyThere:
        "Decades after the first Sanxingdui pits, archaeologists returned to systematically explore the surrounding area.",
      howFound:
        "Careful excavation under climate-controlled shelters revealed six fresh pits packed with ceremonial treasures.",
      whatMakesUnique:
        "The finds deepen the puzzle of the Shu — a sophisticated Bronze Age culture that left dazzling art but no deciphered writing.",
    },
    gallery: ["/images/categories/archaeology.svg", "/images/textures/waves.svg"],
    paperUrl: "http://en.chnmuseum.cn/",
    videoUrls: [],
    relatedSlugs: ["gobekli-tepe"],
    tags: ["bronze age", "china", "artifacts", "shu", "gold mask"],
  },

  // ───────────────────────── Earth Science ─────────────────────────
  {
    slug: "lake-vostok-reached",
    title: "Reaching Subglacial Lake Vostok",
    categorySlug: "earth-science",
    subtopic: "Ice cores",
    year: 2012,
    dateDiscovered: "2012-02-05",
    location: {
      name: "Vostok Station, East Antarctica",
      lat: -78.46,
      lng: 106.84,
    },
    discoveringOrg: "Arctic and Antarctic Research Institute (Russia)",
    scientificName: undefined,
    classification: "Earth science · Subglacial lake",
    conservationStatus: undefined,
    heroImage: "/images/categories/earth-science.svg",
    summary:
      "Drillers reached the surface of a vast lake sealed beneath ~3.8 km of Antarctic ice and isolated from the surface for millions of years.",
    story: {
      whyThere:
        "Radar and seismic surveys had mapped an enormous body of liquid water under the ice near Vostok Station.",
      howFound:
        "After decades of drilling, the borehole finally broke through into the lake water below the ice sheet.",
      whatMakesUnique:
        "It offered a glimpse of a pristine, long-isolated ecosystem — and a testbed for how to explore oceans beneath icy moons.",
    },
    gallery: ["/images/categories/earth-science.svg", "/images/textures/grid.svg"],
    paperUrl: "https://www.nature.com/articles/nature11440",
    videoUrls: [],
    relatedSlugs: ["hunga-tonga-eruption"],
    tags: ["antarctica", "subglacial lake", "ice", "extremophiles"],
  },
  {
    slug: "hunga-tonga-eruption",
    title: "The Hunga Tonga Eruption",
    categorySlug: "earth-science",
    subtopic: "Volcanoes",
    year: 2022,
    dateDiscovered: "2022-01-15",
    location: {
      name: "Hunga Tonga–Hunga Haʻapai, Tonga",
      lat: -20.55,
      lng: -175.39,
    },
    discoveringOrg: "Global geophysical & satellite networks",
    scientificName: undefined,
    classification: "Earth science · Submarine volcanic eruption",
    conservationStatus: undefined,
    heroImage: "/images/categories/earth-science.svg",
    summary:
      "An undersea volcano produced the tallest eruption plume ever recorded — reaching the mesosphere — and a pressure wave that circled the globe.",
    story: {
      whyThere:
        "The submarine volcano had shown unrest, and a global sensor web was already watching the region.",
      howFound:
        "Satellites, barometers, and seismometers worldwide captured the blast, its plume, and an atmospheric wave that lapped the planet multiple times.",
      whatMakesUnique:
        "Its plume punched ~57 km high and injected enough water vapor into the stratosphere to subtly affect global climate.",
    },
    gallery: ["/images/categories/earth-science.svg", "/images/textures/waves.svg"],
    paperUrl: "https://www.science.org/doi/10.1126/science.abo7063",
    videoUrls: [],
    relatedSlugs: ["lake-vostok-reached"],
    tags: ["volcano", "tonga", "eruption", "atmosphere", "tsunami"],
  },

  // ──────────────────────────── Physics ────────────────────────────
  {
    slug: "higgs-boson",
    title: "Discovery of the Higgs Boson",
    categorySlug: "physics",
    subtopic: "Particle discoveries",
    year: 2012,
    dateDiscovered: "2012-07-04",
    location: {
      name: "CERN, Geneva, Switzerland",
      lat: 46.234,
      lng: 6.055,
    },
    discoveringOrg: "CERN (ATLAS & CMS experiments)",
    scientificName: "Higgs boson (H)",
    classification: "Physics · Elementary particle",
    conservationStatus: undefined,
    heroImage: "/images/categories/physics.svg",
    summary:
      "The Large Hadron Collider revealed the particle behind the field that gives other particles mass — the keystone of the Standard Model.",
    story: {
      whyThere:
        "Thousands of physicists smashed protons at the LHC to hunt for a particle predicted nearly 50 years earlier.",
      howFound:
        "Two independent detectors, ATLAS and CMS, each saw a new particle near 125 GeV with matching signatures.",
      whatMakesUnique:
        "It completed the Standard Model and earned the 2013 Nobel Prize for the theorists who predicted the Higgs field.",
    },
    gallery: ["/images/categories/physics.svg", "/images/textures/grid.svg"],
    paperUrl: "https://www.sciencedirect.com/science/article/pii/S037026931200857X",
    videoUrls: [],
    relatedSlugs: ["gravitational-waves-gw150914", "nif-fusion-ignition"],
    tags: ["particle physics", "standard model", "lhc", "cern", "nobel"],
  },
  {
    slug: "gravitational-waves-gw150914",
    title: "First Detection of Gravitational Waves",
    categorySlug: "physics",
    subtopic: "Particle discoveries",
    year: 2016,
    dateDiscovered: "2016-02-11",
    location: {
      name: "LIGO Hanford Observatory, Washington, USA",
      lat: 46.455,
      lng: -119.408,
    },
    discoveringOrg: "LIGO Scientific Collaboration & Virgo",
    scientificName: "GW150914",
    classification: "Physics · Spacetime ripples from merging black holes",
    conservationStatus: undefined,
    heroImage: "/images/categories/physics.svg",
    summary:
      "LIGO recorded the spacetime ripple from two black holes colliding 1.3 billion years ago — confirming a key prediction of general relativity.",
    story: {
      whyThere:
        "Twin laser interferometers were built to sense distortions in spacetime smaller than a proton.",
      howFound:
        "On 14 September 2015 both detectors caught the same rising 'chirp' as two black holes spiraled together and merged.",
      whatMakesUnique:
        "It opened gravitational-wave astronomy, a whole new way to observe the universe, and won the 2017 Nobel Prize.",
    },
    gallery: ["/images/categories/physics.svg", "/images/textures/waves.svg"],
    paperUrl: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.116.061102",
    videoUrls: [],
    relatedSlugs: ["higgs-boson", "m87-black-hole-image"],
    tags: ["gravitational waves", "ligo", "black holes", "relativity", "nobel"],
  },
  {
    slug: "nif-fusion-ignition",
    title: "Fusion Ignition at the NIF",
    categorySlug: "physics",
    subtopic: "Fusion energy",
    year: 2022,
    dateDiscovered: "2022-12-05",
    location: {
      name: "Lawrence Livermore National Laboratory, California, USA",
      lat: 37.687,
      lng: -121.706,
    },
    discoveringOrg: "Lawrence Livermore National Laboratory",
    scientificName: undefined,
    classification: "Physics · Inertial confinement fusion",
    conservationStatus: undefined,
    heroImage: "/images/categories/physics.svg",
    summary:
      "For the first time, a fusion reaction produced more energy than the laser energy delivered to the fuel — crossing the long-sought ignition threshold.",
    story: {
      whyThere:
        "The National Ignition Facility focuses 192 lasers onto a tiny capsule of hydrogen fuel to recreate fusion like the Sun's.",
      howFound:
        "A December 2022 shot delivered 2.05 MJ of laser energy and released about 3.15 MJ from the fusion fuel — a net energy gain.",
      whatMakesUnique:
        "It was the first laboratory demonstration of fusion ignition, a milestone pursued for more than half a century.",
    },
    gallery: ["/images/categories/physics.svg", "/images/textures/grid.svg"],
    paperUrl: "https://www.llnl.gov/news/national-ignition-facility-achieves-fusion-ignition",
    videoUrls: [],
    relatedSlugs: ["higgs-boson", "gravitational-waves-gw150914"],
    tags: ["fusion", "energy", "laser", "ignition", "plasma"],
  },

  // ────────────────────────── Technology ───────────────────────────
  {
    slug: "alphafold-protein-structures",
    title: "AlphaFold Solves Protein Folding",
    categorySlug: "technology",
    subtopic: "AI",
    year: 2021,
    dateDiscovered: "2021-07-15",
    location: {
      name: "DeepMind, London, United Kingdom",
      lat: 51.533,
      lng: -0.124,
    },
    discoveringOrg: "DeepMind",
    scientificName: undefined,
    classification: "Technology · AI for structural biology",
    conservationStatus: undefined,
    heroImage: "/images/categories/technology.svg",
    summary:
      "A neural network predicted protein 3D structures from sequence with near-experimental accuracy — cracking a 50-year grand challenge in biology.",
    story: {
      whyThere:
        "Knowing a protein's folded shape is key to understanding disease and designing drugs, but determining it in the lab is slow and costly.",
      howFound:
        "AlphaFold swept the CASP14 structure-prediction contest, then released predicted structures for nearly every known protein.",
      whatMakesUnique:
        "It turned a problem that took years per protein into minutes, and earned a share of the 2024 Nobel Prize in Chemistry.",
    },
    gallery: ["/images/categories/technology.svg", "/images/textures/grid.svg"],
    paperUrl: "https://www.nature.com/articles/s41586-021-03819-2",
    videoUrls: [],
    relatedSlugs: ["sycamore-quantum-supremacy"],
    tags: ["ai", "protein folding", "deep learning", "biology", "nobel"],
  },
  {
    slug: "sycamore-quantum-supremacy",
    title: "Quantum 'Supremacy' with Sycamore",
    categorySlug: "technology",
    subtopic: "Quantum computing",
    year: 2019,
    dateDiscovered: "2019-10-23",
    location: {
      name: "Google Quantum AI, Santa Barbara, California, USA",
      lat: 34.414,
      lng: -119.843,
    },
    discoveringOrg: "Google Quantum AI",
    scientificName: undefined,
    classification: "Technology · Superconducting quantum processor",
    conservationStatus: undefined,
    heroImage: "/images/categories/technology.svg",
    summary:
      "A 53-qubit processor performed in minutes a sampling task estimated to take a classical supercomputer thousands of years.",
    story: {
      whyThere:
        "Researchers sought a clear demonstration that a quantum computer could outpace the best classical machines on a defined task.",
      howFound:
        "Google's Sycamore chip sampled random quantum circuits far faster than any known classical simulation could match.",
      whatMakesUnique:
        "It was the first widely reported claim of 'quantum supremacy,' a landmark — and a much-debated one — for the field.",
    },
    gallery: ["/images/categories/technology.svg", "/images/textures/waves.svg"],
    paperUrl: "https://www.nature.com/articles/s41586-019-1666-5",
    videoUrls: [],
    relatedSlugs: ["alphafold-protein-structures"],
    tags: ["quantum computing", "qubits", "google", "supercomputing"],
  },
];
