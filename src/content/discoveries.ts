import type { Discovery, DiscoveryLocation } from "./types";

/** Discovery as authored below — country is attached programmatically. */
type RawDiscovery = Omit<Discovery, "location"> & {
  location: Omit<DiscoveryLocation, "country">;
};

/**
 * v1 seed catalog of real, well-documented scientific discoveries.
 * Facts are drawn from public reporting; images are local placeholders.
 * For space discoveries, `location` is the primary Earth observatory/site
 * where the work was done, so every entry has a coherent point on the map.
 */
const discoveriesData: RawDiscovery[] = [
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

  // ───────────────── Ocean (depth-explorer coverage) ────────────────
  {
    slug: "cape-york-detached-reef",
    title: "A 500-Metre Detached Coral Reef",
    categorySlug: "ocean",
    subtopic: "Coral reefs",
    year: 2020,
    dateDiscovered: "2020-10-20",
    location: {
      name: "Cape York, northern Great Barrier Reef, Australia",
      lat: -13.5,
      lng: 143.9,
      depthMeters: 40,
    },
    discoveringOrg: "Schmidt Ocean Institute",
    scientificName: undefined,
    classification: "Geology · Detached coral reef",
    conservationStatus: "Within Great Barrier Reef Marine Park",
    heroImage: "/images/categories/ocean.svg",
    summary:
      "The first detached reef found in over a century — taller than the Empire State Building at ~500 m, with its peak just 40 m below the surface.",
    story: {
      whyThere:
        "The research vessel Falkor was mapping the seafloor of the northern Great Barrier Reef in high resolution.",
      howFound:
        "The underwater robot SuBastian live-streamed its dive up the blade-like reef, confirming its towering size.",
      whatMakesUnique:
        "It is the first such detached reef discovered since the 1800s and stands taller than most of the world's skyscrapers.",
    },
    gallery: ["/images/categories/ocean.svg", "/images/textures/waves.svg"],
    paperUrl: "https://schmidtocean.org/cruise-log-post/exploring-the-depths-off-cape-york/",
    videoUrls: [],
    relatedSlugs: ["casper-ghost-octopus", "scaly-foot-gastropod"],
    tags: ["coral reef", "great barrier reef", "australia", "mapping", "epipelagic"],
  },
  {
    slug: "giant-squid-filmed",
    title: "Giant Squid Filmed in the Deep",
    categorySlug: "ocean",
    subtopic: "Ocean mysteries",
    year: 2012,
    dateDiscovered: "2012-07-10",
    location: {
      name: "Off Chichijima, Ogasawara Islands, Japan",
      lat: 27.0,
      lng: 142.2,
      depthMeters: 630,
    },
    discoveringOrg: "NHK / National Museum of Nature and Science, Japan",
    scientificName: "Architeuthis dux",
    classification: "Animalia · Mollusca · Cephalopoda · Oegopsida",
    conservationStatus: "Not evaluated",
    heroImage: "/images/categories/ocean.svg",
    summary:
      "The first footage of a live giant squid in its natural deep-sea habitat, ending centuries of the animal being known mostly from carcasses.",
    story: {
      whyThere:
        "A team led by Tsunemi Kubodera set out to film the legendary giant squid where it actually lives.",
      howFound:
        "Using a dim-light submersible and glowing bait, they recorded a three-metre squid rising from the twilight zone at about 630 m.",
      whatMakesUnique:
        "It was the first time the near-mythical animal had ever been filmed alive in the deep, not washed up or netted.",
    },
    gallery: ["/images/categories/ocean.svg", "/images/textures/grid.svg"],
    paperUrl: "https://www.kahaku.go.jp/english/",
    videoUrls: [],
    relatedSlugs: ["macropinna-barreleye", "casper-ghost-octopus"],
    tags: ["giant squid", "cephalopod", "japan", "mesopelagic", "twilight zone"],
  },
  {
    slug: "macropinna-barreleye",
    title: "The Barreleye Fish with a Transparent Head",
    categorySlug: "ocean",
    subtopic: "Ocean mysteries",
    year: 2009,
    dateDiscovered: "2009-02-23",
    location: {
      name: "Monterey Bay, California, USA",
      lat: 36.7,
      lng: -122.0,
      depthMeters: 750,
    },
    discoveringOrg: "Monterey Bay Aquarium Research Institute (MBARI)",
    scientificName: "Macropinna microstoma",
    classification: "Animalia · Chordata · Actinopterygii · Argentiniformes",
    conservationStatus: "Not evaluated",
    heroImage: "/images/categories/ocean.svg",
    summary:
      "The first images of a living barreleye — a fish whose transparent, fluid-filled head lets its tubular eyes rotate to peer up through its own skull.",
    story: {
      whyThere:
        "MBARI's remotely operated vehicles routinely survey the twilight zone of Monterey Bay.",
      howFound:
        "They filmed an intact barreleye at about 750 m — earlier specimens had always been destroyed by nets.",
      whatMakesUnique:
        "Its see-through dome and upward-swivelling green eyes let it spot prey silhouetted against the faint light above.",
    },
    gallery: ["/images/categories/ocean.svg", "/images/textures/waves.svg"],
    paperUrl: "https://www.mbari.org/news/researchers-solve-mystery-of-deep-sea-fish-with-tubular-eyes-and-transparent-head/",
    videoUrls: [],
    relatedSlugs: ["giant-squid-filmed", "lost-city-hydrothermal-field"],
    tags: ["fish", "barreleye", "transparent", "mesopelagic", "mbari"],
  },
  {
    slug: "kiwa-yeti-crab",
    title: "The Yeti Crab",
    categorySlug: "ocean",
    subtopic: "New species",
    year: 2005,
    dateDiscovered: "2005-03-07",
    location: {
      name: "Pacific-Antarctic Ridge, South Pacific",
      lat: -37.8,
      lng: -110.9,
      depthMeters: 2228,
    },
    discoveringOrg: "MBARI / Ifremer vent expedition",
    scientificName: "Kiwa hirsuta",
    classification: "Animalia · Arthropoda · Malacostraca · Decapoda",
    conservationStatus: "Not evaluated",
    heroImage: "/images/categories/ocean.svg",
    summary:
      "A blind, silky-clawed crab from hydrothermal vents so distinctive it required an entirely new family — nicknamed the 'yeti crab' for its hairy arms.",
    story: {
      whyThere:
        "A submersible dive explored hydrothermal vents along the Pacific-Antarctic Ridge.",
      howFound:
        "Near the vents the team found a pale crustacean whose claws were covered in dense, hair-like bristles.",
      whatMakesUnique:
        "The bristles host bacteria the crab may farm for food, and the animal was placed in a brand-new genus and family, Kiwaidae.",
    },
    gallery: ["/images/categories/ocean.svg", "/images/textures/grid.svg"],
    paperUrl: "https://www.mbari.org/",
    videoUrls: [],
    relatedSlugs: ["scaly-foot-gastropod", "lost-city-hydrothermal-field"],
    tags: ["yeti crab", "hydrothermal vent", "crustacean", "new species", "bathypelagic"],
  },
  {
    slug: "osedax-bone-worms",
    title: "Bone-Eating 'Zombie' Worms",
    categorySlug: "ocean",
    subtopic: "New species",
    year: 2004,
    dateDiscovered: "2004-07-30",
    location: {
      name: "Monterey Canyon, California, USA",
      lat: 36.6,
      lng: -122.4,
      depthMeters: 2893,
    },
    discoveringOrg: "Monterey Bay Aquarium Research Institute (MBARI)",
    scientificName: "Osedax",
    classification: "Animalia · Annelida · Polychaeta · Siboglinidae",
    conservationStatus: "Not evaluated",
    heroImage: "/images/categories/ocean.svg",
    summary:
      "Rootless worms that bore into whale bones on the seafloor, dissolving them with acid and feeding through symbiotic bacteria — a new genus found on a sunken whale.",
    story: {
      whyThere:
        "MBARI robots were investigating a whale carcass, or 'whale fall,' deep in Monterey Canyon.",
      howFound:
        "The bones were carpeted in red-plumed worms that, on inspection, had no mouth, gut, or eyes.",
      whatMakesUnique:
        "They digest bone using root-like tissues and bacteria, earning the name Osedax — Latin for 'bone-devourer.'",
    },
    gallery: ["/images/categories/ocean.svg", "/images/textures/waves.svg"],
    paperUrl: "https://www.science.org/doi/10.1126/science.1098650",
    videoUrls: [],
    relatedSlugs: ["kiwa-yeti-crab", "casper-ghost-octopus"],
    tags: ["osedax", "whale fall", "annelid", "new species", "mbari"],
  },
  {
    slug: "dumbo-octopus-deep",
    title: "The Deepest Octopus Ever Seen",
    categorySlug: "ocean",
    subtopic: "Ocean mysteries",
    year: 2020,
    dateDiscovered: "2020-05-26",
    location: {
      name: "Java Trench, Indian Ocean",
      lat: -11.1,
      lng: 114.6,
      depthMeters: 6957,
    },
    discoveringOrg: "University of Western Australia / Caladan Oceanic",
    scientificName: "Grimpoteuthis sp. (Dumbo octopus)",
    classification: "Animalia · Mollusca · Cephalopoda · Octopoda",
    conservationStatus: "Not evaluated",
    heroImage: "/images/categories/ocean.svg",
    summary:
      "A Dumbo octopus filmed at 6,957 m in the Java Trench — nearly 2 km deeper than any confirmed octopus before, pushing the group into the hadal zone.",
    story: {
      whyThere:
        "Baited landers were dropped into the Java Trench to survey life at extreme depth.",
      howFound:
        "The cameras recorded two ear-finned, gelatinous octopuses drifting near 7,000 m.",
      whatMakesUnique:
        "The sighting shattered the previous octopus depth record and showed octopuses can survive across roughly 99% of the seafloor.",
    },
    gallery: ["/images/categories/ocean.svg", "/images/textures/grid.svg"],
    paperUrl: "https://royalsocietypublishing.org/doi/10.1098/rsos.201161",
    videoUrls: [],
    relatedSlugs: ["mariana-snailfish", "casper-ghost-octopus"],
    tags: ["dumbo octopus", "java trench", "hadal", "cephalopod", "record"],
  },
  {
    slug: "mariana-snailfish",
    title: "The Mariana Snailfish, Deepest Fish",
    categorySlug: "ocean",
    subtopic: "New species",
    year: 2017,
    dateDiscovered: "2017-11-28",
    location: {
      name: "Mariana Trench, western Pacific Ocean",
      lat: 11.35,
      lng: 142.2,
      depthMeters: 8000,
    },
    discoveringOrg: "University of Washington / international team",
    scientificName: "Pseudoliparis swirei",
    classification: "Animalia · Chordata · Actinopterygii · Scorpaeniformes",
    conservationStatus: "Not evaluated",
    heroImage: "/images/categories/ocean.svg",
    summary:
      "A small, translucent snailfish that thrives near 8,000 m in the Mariana Trench — the deepest-living fish ever described.",
    story: {
      whyThere:
        "Baited landers were dropped into the Mariana Trench to study its hadal-zone food web.",
      howFound:
        "Cameras and traps captured the pale, tadpole-shaped fish at depths where pressure exceeds 800 atmospheres.",
      whatMakesUnique:
        "Specialised proteins keep its cells stable under crushing pressure, and it sits at the top of the trench food chain.",
    },
    gallery: ["/images/categories/ocean.svg", "/images/textures/waves.svg"],
    paperUrl: "https://www.mapress.com/zt/article/view/zootaxa.4358.1.7",
    videoUrls: [],
    relatedSlugs: ["dumbo-octopus-deep", "casper-ghost-octopus"],
    tags: ["snailfish", "mariana trench", "hadal", "deepest fish", "new species"],
  },
  // ──────────────────────── 2025 Discoveries ────────────────────────
  {
    slug: "wasp-127b-supersonic-winds",
    title: "Supersonic Winds on WASP-127b",
    categorySlug: "space",
    subtopic: "Exoplanets",
    year: 2025,
    dateDiscovered: "2025-01-21",
    reviewStatus: "source-verified",
    dateReviewed: "2026-07-11",
    reviewedBy: "Beyond Signal editorial desk",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-07-11",
    location: {
      name: "Paranal Observatory, Atacama Desert, Chile",
      lat: -24.627,
      lng: -70.404,
    },
    discoveringOrg: "European Southern Observatory (ESPRESSO/VLT)",
    scientificName: "WASP-127b",
    classification: "Astronomy · Hot-Jupiter exoplanet",
    conservationStatus: undefined,
    heroImage: "/images/categories/space.svg",
    summary:
      "Astronomers measured equatorial winds on the exoplanet WASP-127b moving at up to 33,000 km/h — the fastest planetary jet stream of its kind measured at the time.",
    story: {
      whyThere:
        "WASP-127b is a highly inflated gas giant whose atmosphere passes in front of its star, allowing its chemical fingerprints to be read from Earth.",
      howFound:
        "Using the ESPRESSO spectrograph on ESO's Very Large Telescope, researchers measured how spectral lines shifted as the planet crossed its star.",
      whatMakesUnique:
        "The result exposed a supersonic equatorial jet stream wrapped around the planet, giving scientists a rare direct measurement of weather on a world beyond the Solar System.",
    },
    gallery: ["/images/categories/space.svg", "/images/textures/waves.svg"],
    paperUrl: "https://www.eso.org/public/news/eso2502/",
    primarySourceUrl: "https://www.eso.org/public/news/eso2502/",
    supportingSources: [
      {
        title: "Extreme supersonic winds measured on planet outside our Solar System",
        url: "https://www.eso.org/public/news/eso2502/",
        publisher: "European Southern Observatory",
        tier: "Tier 1",
        sourceType: "institutional",
        accessedAt: "2026-07-11",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["wasp-127b-3d-atmosphere", "hops-315-planet-formation"],
    tags: ["exoplanet", "weather", "supersonic winds", "gas giant", "vlt"],
  },
  {
    slug: "wasp-127b-3d-atmosphere",
    title: "A 3D Weather Map of Exoplanet Tylos",
    categorySlug: "space",
    subtopic: "Exoplanets",
    year: 2025,
    dateDiscovered: "2025-02-18",
    reviewStatus: "source-verified",
    dateReviewed: "2026-07-11",
    reviewedBy: "Beyond Signal editorial desk",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-07-11",
    location: {
      name: "Paranal Observatory, Atacama Desert, Chile",
      lat: -24.627,
      lng: -70.404,
    },
    discoveringOrg: "European Southern Observatory (ESPRESSO/VLT)",
    scientificName: "WASP-121b (Tylos)",
    classification: "Astronomy · Ultra-hot-Jupiter exoplanet",
    conservationStatus: undefined,
    heroImage: "/images/categories/space.svg",
    summary:
      "For the first time, astronomers mapped several layers of an exoplanet's atmosphere in three dimensions, revealing separate winds carrying iron, sodium, hydrogen, and titanium.",
    story: {
      whyThere:
        "Tylos is an ultra-hot gas giant that circles its star in about 30 hours, creating an extreme laboratory for planetary weather.",
      howFound:
        "The team combined all four units of ESO's Very Large Telescope through the ESPRESSO instrument and read different chemical signatures during a full transit.",
      whatMakesUnique:
        "The observations separated deep, middle, and upper atmospheric flows, showing a high-altitude equatorial jet and a lower circulation pattern unlike weather seen on any Solar System planet.",
    },
    gallery: ["/images/categories/space.svg", "/images/textures/grid.svg"],
    paperUrl: "https://doi.org/10.1038/s41586-025-08664-1",
    primarySourceUrl: "https://www.eso.org/public/news/eso2504/",
    supportingSources: [
      {
        title: "First 3D observations of an exoplanet's atmosphere reveal a unique climate",
        url: "https://www.eso.org/public/news/eso2504/",
        publisher: "European Southern Observatory",
        tier: "Tier 1",
        sourceType: "institutional",
        accessedAt: "2026-07-11",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["wasp-127b-supersonic-winds", "hops-315-planet-formation"],
    tags: ["exoplanet", "atmosphere", "weather", "iron", "titanium", "vlt"],
  },
  {
    slug: "saturn-128-new-moons",
    title: "Saturn's 128 New Moons",
    categorySlug: "space",
    subtopic: "Space missions",
    year: 2025,
    dateDiscovered: "2025-03-11",
    reviewStatus: "source-verified",
    dateReviewed: "2026-07-11",
    reviewedBy: "Beyond Signal editorial desk",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-07-11",
    location: {
      name: "Canada-France-Hawaii Telescope, Maunakea, Hawaii",
      lat: 19.825,
      lng: -155.469,
    },
    discoveringOrg: "Academia Sinica / University of British Columbia / CFHT international team",
    scientificName: "Saturn's irregular satellite population",
    classification: "Astronomy · Planetary satellites",
    conservationStatus: undefined,
    heroImage: "/images/categories/space.svg",
    summary:
      "An international team found and confirmed 128 previously unrecognized small moons of Saturn, raising the planet's official total to 274 at the time of announcement.",
    story: {
      whyThere:
        "Saturn's distant, dim irregular moons are difficult to distinguish from background stars, but they preserve clues about collisions and capture in the early Solar System.",
      howFound:
        "Astronomers repeatedly imaged the region around Saturn and used a shift-and-stack technique to make faint moving objects emerge from the noise.",
      whatMakesUnique:
        "The discovery more than doubled the number of newly recognized Saturnian moons in one announcement and revealed clusters of objects that may be fragments of ancient collisions.",
    },
    gallery: ["/images/categories/space.svg", "/images/textures/waves.svg"],
    paperUrl: "https://news.ubc.ca/2025/03/saturn-128-new-moons/",
    primarySourceUrl: "https://news.ubc.ca/2025/03/saturn-128-new-moons/",
    supportingSources: [
      {
        title: "2025 Discovery of more Saturnian Moons",
        url: "https://phas.ubc.ca/2025-discovery-more-saturnian-moons",
        publisher: "University of British Columbia",
        tier: "Tier 1",
        sourceType: "institutional",
        accessedAt: "2026-07-11",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["uranus-new-moon-2025", "eos-molecular-cloud"],
    tags: ["saturn", "moons", "solar system", "cfht", "astronomy"],
  },
  {
    slug: "eos-molecular-cloud",
    title: "Eos: A Hidden Molecular Cloud Near the Sun",
    categorySlug: "space",
    subtopic: "Nebulae",
    year: 2025,
    dateDiscovered: "2025-04-28",
    reviewStatus: "source-verified",
    dateReviewed: "2026-07-11",
    reviewedBy: "Beyond Signal editorial desk",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-07-11",
    location: {
      name: "McDonald Observatory, Texas, USA",
      lat: 30.671,
      lng: -104.022,
    },
    discoveringOrg: "Rutgers University / Columbia University / international ultraviolet astronomy team",
    scientificName: "Eos molecular cloud",
    classification: "Astronomy · Molecular hydrogen cloud",
    conservationStatus: undefined,
    heroImage: "/images/categories/space.svg",
    summary:
      "Astronomers discovered Eos, a vast molecular cloud only about 300 light-years away, by detecting ultraviolet fluorescence from molecular hydrogen — a first for this class of cloud.",
    story: {
      whyThere:
        "Molecular clouds are the raw material of stars, but many are effectively invisible when scientists search only for the usual carbon-monoxide tracer.",
      howFound:
        "Researchers searched far-ultraviolet data for the glow produced when starlight excites molecular hydrogen and found a previously hidden cloud in the Local Bubble.",
      whatMakesUnique:
        "Eos shows that nearby star-forming material can remain hidden in plain sight and provides a new way to study how molecular clouds form and disperse.",
    },
    gallery: ["/images/categories/space.svg", "/images/textures/grid.svg"],
    paperUrl: "https://doi.org/10.1038/s41550-025-02541-7",
    primarySourceUrl: "https://mcdonaldobservatory.org/2025/04/vast-molecular-cloud-discovered-near-our-solar-system/",
    supportingSources: [
      {
        title: "Vast Molecular Cloud Discovered Near Our Solar System",
        url: "https://mcdonaldobservatory.org/2025/04/vast-molecular-cloud-discovered-near-our-solar-system/",
        publisher: "McDonald Observatory",
        tier: "Tier 1",
        sourceType: "institutional",
        accessedAt: "2026-07-11",
      },
      {
        title: "A nearby dark molecular cloud in the Local Bubble",
        url: "https://www.nature.com/articles/s41550-025-02541-7",
        publisher: "Nature Astronomy",
        tier: "Tier 1",
        sourceType: "paper",
        accessedAt: "2026-07-11",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["hops-315-planet-formation", "saturn-128-new-moons"],
    tags: ["molecular cloud", "hydrogen", "local bubble", "star formation", "ultraviolet"],
  },
  {
    slug: "lead-to-gold-alice",
    title: "Lead Turned into Gold at the LHC",
    categorySlug: "physics",
    subtopic: "Particle discoveries",
    year: 2025,
    dateDiscovered: "2025-05-08",
    reviewStatus: "source-verified",
    dateReviewed: "2026-07-11",
    reviewedBy: "Beyond Signal editorial desk",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-07-11",
    location: {
      name: "CERN Large Hadron Collider, Geneva, Switzerland",
      lat: 46.233,
      lng: 6.055,
    },
    discoveringOrg: "ALICE Collaboration at CERN",
    scientificName: "Gold nuclei produced from lead",
    classification: "Physics · Nuclear transmutation",
    conservationStatus: undefined,
    heroImage: "/images/categories/physics.svg",
    summary:
      "The ALICE experiment measured lead nuclei turning into gold during near-miss collisions at the Large Hadron Collider — in fleeting, subatomic quantities rather than usable metal.",
    story: {
      whyThere:
        "Lead nuclei moving near light speed generate extraordinarily strong electromagnetic fields when they pass close to one another without colliding head-on.",
      howFound:
        "The ALICE detector identified reactions in which electromagnetic interactions knocked three protons out of a lead nucleus, leaving a gold nucleus behind.",
      whatMakesUnique:
        "It is modern nuclear transmutation in a new regime: the medieval dream of alchemy appeared for an instant, while also giving physicists a precise test of electromagnetic processes around heavy ions.",
    },
    gallery: ["/images/categories/physics.svg", "/images/textures/grid.svg"],
    paperUrl: "https://alice-collaboration.web.cern.ch/2025-alice-lead-to-gold",
    primarySourceUrl: "https://alice-collaboration.web.cern.ch/2025-alice-lead-to-gold",
    supportingSources: [
      {
        title: "ALICE detects the transformation of lead into gold at the LHC",
        url: "https://alice-collaboration.web.cern.ch/2025-alice-lead-to-gold",
        publisher: "ALICE Collaboration / CERN",
        tier: "Tier 1",
        sourceType: "institutional",
        accessedAt: "2026-07-11",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["higgs-boson", "nif-fusion-ignition"],
    tags: ["particle physics", "cern", "alice", "nuclear physics", "gold"],
  },
  {
    slug: "solar-orbiter-sun-south-pole",
    title: "The First Views of the Sun's South Pole",
    categorySlug: "space",
    subtopic: "Space missions",
    year: 2025,
    dateDiscovered: "2025-06-11",
    reviewStatus: "source-verified",
    dateReviewed: "2026-07-11",
    reviewedBy: "Beyond Signal editorial desk",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-07-11",
    location: {
      name: "ESA Solar Orbiter mission operations, Darmstadt, Germany",
      lat: 49.872,
      lng: 8.651,
    },
    discoveringOrg: "ESA/NASA Solar Orbiter collaboration",
    scientificName: "Solar south pole",
    classification: "Space science · Solar physics",
    conservationStatus: undefined,
    heroImage: "/images/categories/space.svg",
    summary:
      "ESA's Solar Orbiter returned humanity's first clear views of the Sun's south pole, revealing a tangled mixture of magnetic polarities during solar maximum.",
    story: {
      whyThere:
        "Most spacecraft orbit close to the plane of the planets, so they see the Sun from near its equator and cannot directly image the poles.",
      howFound:
        "Solar Orbiter tilted its orbit about 17 degrees out of the ecliptic and combined visible-light, ultraviolet, and spectroscopic measurements from several instruments.",
      whatMakesUnique:
        "The new angle opens a missing perspective on the Sun's magnetic field and its roughly 11-year cycle, which controls space weather reaching Earth.",
    },
    gallery: ["/images/categories/space.svg", "/images/textures/waves.svg"],
    paperUrl: "https://www.esa.int/Science_Exploration/Space_Science/Solar_Orbiter/Solar_Orbiter_gets_world-first_views_of_the_Sun_s_poles",
    primarySourceUrl: "https://www.esa.int/Science_Exploration/Space_Science/Solar_Orbiter/Solar_Orbiter_gets_world-first_views_of_the_Sun_s_poles",
    supportingSources: [
      {
        title: "Solar Orbiter gets world-first views of the Sun's poles",
        url: "https://www.esa.int/Science_Exploration/Space_Science/Solar_Orbiter/Solar_Orbiter_gets_world-first_views_of_the_Sun_s_poles",
        publisher: "European Space Agency",
        tier: "Tier 1",
        sourceType: "institutional",
        accessedAt: "2026-07-11",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["hunga-tonga-eruption", "trappist-1-system"],
    tags: ["sun", "solar orbiter", "solar pole", "magnetic field", "space weather"],
  },
  {
    slug: "hops-315-planet-formation",
    title: "Planet Formation Caught at the Start around HOPS-315",
    categorySlug: "space",
    subtopic: "Exoplanets",
    year: 2025,
    dateDiscovered: "2025-07-16",
    reviewStatus: "source-verified",
    dateReviewed: "2026-07-11",
    reviewedBy: "Beyond Signal editorial desk",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-07-11",
    location: {
      name: "Atacama Large Millimeter/submillimeter Array, Chile",
      lat: -23.023,
      lng: -67.754,
    },
    discoveringOrg: "ESO/ALMA and NASA/ESA/CSA James Webb Space Telescope collaboration",
    scientificName: "HOPS-315",
    classification: "Astronomy · Protostar and protoplanetary disc",
    conservationStatus: undefined,
    heroImage: "/images/categories/space.svg",
    summary:
      "Astronomers observed the first specks of planet-forming minerals beginning to solidify around a young star, catching a process analogous to the birth of our Solar System.",
    story: {
      whyThere:
        "HOPS-315 is a very young star surrounded by the gas and dust disc from which planets are expected to grow.",
      howFound:
        "ALMA located a narrow region of silicon-monoxide gas, while Webb detected crystalline minerals at the same place — the ingredients of the earliest planet-building solids.",
      whatMakesUnique:
        "The observations connect a chemical transition in a distant disc to the first stage of terrestrial planet formation, before larger rocks and worlds have assembled.",
    },
    gallery: ["/images/categories/space.svg", "/images/textures/grid.svg"],
    paperUrl: "https://www.eso.org/public/news/eso2512/",
    primarySourceUrl: "https://www.eso.org/public/news/eso2512/",
    supportingSources: [
      {
        title: "For the first time, astronomers witness the dawn of a new planetary system",
        url: "https://www.eso.org/public/news/eso2512/",
        publisher: "European Southern Observatory",
        tier: "Tier 1",
        sourceType: "institutional",
        accessedAt: "2026-07-11",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["eos-molecular-cloud", "trappist-1-system"],
    tags: ["planet formation", "protostar", "protoplanetary disc", "alma", "webb"],
  },
  {
    slug: "uranus-new-moon-2025",
    title: "A New Moon around Uranus",
    categorySlug: "space",
    subtopic: "Space missions",
    year: 2025,
    dateDiscovered: "2025-08-19",
    reviewStatus: "source-verified",
    dateReviewed: "2026-07-11",
    reviewedBy: "Beyond Signal editorial desk",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-07-11",
    location: {
      name: "Space Telescope Science Institute, Baltimore, Maryland, USA",
      lat: 39.0,
      lng: -76.95,
    },
    discoveringOrg: "NASA/ESA/CSA James Webb Space Telescope team",
    scientificName: "S/2025 U1",
    classification: "Astronomy · Uranian inner satellite",
    conservationStatus: undefined,
    heroImage: "/images/categories/space.svg",
    summary:
      "The James Webb Space Telescope found a previously unknown inner moon of Uranus, provisionally designated S/2025 U1 and estimated at roughly 10 km across.",
    story: {
      whyThere:
        "Small moons close to Uranus are easily lost in glare from the planet and its rings, making the inner satellite system difficult to census.",
      howFound:
        "Webb's NIRCam captured a series of images over about six hours and tracked a faint object moving on a nearly circular orbit around Uranus.",
      whatMakesUnique:
        "The discovery raised Uranus's known moon count to 29 and showed that even a planet visited by Voyager 2 still hides small worlds from earlier surveys.",
    },
    gallery: ["/images/categories/space.svg", "/images/textures/grid.svg"],
    paperUrl: "https://science.nasa.gov/blogs/webb/2025/08/19/new-moon-discovered-orbiting-uranus-using-nasas-webb-telescope/",
    primarySourceUrl: "https://science.nasa.gov/blogs/webb/2025/08/19/new-moon-discovered-orbiting-uranus-using-nasas-webb-telescope/",
    supportingSources: [
      {
        title: "New Moon Discovered Orbiting Uranus Using NASA's Webb Telescope",
        url: "https://science.nasa.gov/blogs/webb/2025/08/19/new-moon-discovered-orbiting-uranus-using-nasas-webb-telescope/",
        publisher: "NASA Science",
        tier: "Tier 1",
        sourceType: "institutional",
        accessedAt: "2026-07-11",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["saturn-128-new-moons", "trappist-1-system"],
    tags: ["uranus", "moon", "webb", "solar system", "planetary science"],
  },
  {
    slug: "repeating-gamma-ray-burst-2025",
    title: "A Strange Repeating Gamma-Ray Explosion",
    categorySlug: "space",
    subtopic: "Galaxies",
    year: 2025,
    dateDiscovered: "2025-09-09",
    reviewStatus: "source-verified",
    dateReviewed: "2026-07-11",
    reviewedBy: "Beyond Signal editorial desk",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-07-11",
    location: {
      name: "Paranal Observatory, Atacama Desert, Chile",
      lat: -24.627,
      lng: -70.404,
    },
    discoveringOrg: "ESO Very Large Telescope and international gamma-ray team",
    scientificName: "GRB 250702B",
    classification: "Astronomy · Gamma-ray burst",
    conservationStatus: undefined,
    heroImage: "/images/categories/space.svg",
    summary:
      "GRB 250702B produced repeated gamma-ray flashes across a day, an unusually long and unlike-anything-seen-before explosion traced to a source outside the Milky Way.",
    story: {
      whyThere:
        "Gamma-ray bursts are among the most powerful events in the Universe, but most flash once and fade within seconds or minutes.",
      howFound:
        "Space-based gamma-ray detectors caught the repeated outburst, and ESO's Very Large Telescope pinpointed its distant host environment.",
      whatMakesUnique:
        "Its long, repeating behavior does not fit the usual pattern of a single short-lived burst, leaving the physical engine under active investigation.",
    },
    gallery: ["/images/categories/space.svg", "/images/textures/grid.svg"],
    paperUrl: "https://www.eso.org/public/news/eso2514/",
    primarySourceUrl: "https://www.eso.org/public/news/eso2514/",
    supportingSources: [
      {
        title: "Astronomers spot mysterious gamma-ray explosion, unlike any detected before",
        url: "https://www.eso.org/public/news/eso2514/",
        publisher: "European Southern Observatory",
        tier: "Tier 1",
        sourceType: "institutional",
        accessedAt: "2026-07-11",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["m87-black-hole-image", "sagittarius-a-image"],
    tags: ["gamma-ray burst", "grb", "galaxy", "vlt", "high-energy astrophysics"],
  },
  {
    slug: "rogue-planet-growth-spurt",
    title: "A Rogue Planet's Record Growth Spurt",
    categorySlug: "space",
    subtopic: "Exoplanets",
    year: 2025,
    dateDiscovered: "2025-10-02",
    reviewStatus: "source-verified",
    dateReviewed: "2026-07-11",
    reviewedBy: "Beyond Signal editorial desk",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-07-11",
    location: {
      name: "Paranal Observatory, Atacama Desert, Chile",
      lat: -24.627,
      lng: -70.404,
    },
    discoveringOrg: "European Southern Observatory VLT / James Webb Space Telescope team",
    scientificName: "Cha 1107-7626",
    classification: "Astronomy · Free-floating planetary-mass object",
    conservationStatus: undefined,
    heroImage: "/images/categories/space.svg",
    summary:
      "Astronomers observed the free-floating planetary-mass object Cha 1107-7626 accreting gas and dust at about six billion tonnes per second — the fastest growth rate recorded for a rogue planet.",
    story: {
      whyThere:
        "Rogue planets drift without a host star, so finding one young enough to still be surrounded by a feeding disc offers a rare view of planet-like objects in formation.",
      howFound:
        "Repeated VLT observations, combined with Webb and archival data, tracked a sharp increase in the light emitted by material falling onto the object.",
      whatMakesUnique:
        "The burst blurred the line between planetary and stellar formation: magnetic activity and water vapor appeared in a process previously associated mainly with young stars.",
    },
    gallery: ["/images/categories/space.svg", "/images/textures/waves.svg"],
    paperUrl: "https://www.eso.org/public/news/eso2516/",
    primarySourceUrl: "https://www.eso.org/public/news/eso2516/",
    supportingSources: [
      {
        title: "Six billion tonnes a second: Rogue planet found growing at record rate",
        url: "https://www.eso.org/public/news/eso2516/",
        publisher: "European Southern Observatory",
        tier: "Tier 1",
        sourceType: "institutional",
        accessedAt: "2026-07-11",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["trappist-1-system", "sagittarius-a-image"],
    tags: ["rogue planet", "planet formation", "accretion", "webb", "vlt"],
  },
  {
    slug: "jurassic-midge-gondwana",
    title: "A Jurassic Midge from Gondwana",
    categorySlug: "dinosaurs-fossils",
    subtopic: "Fossil discoveries",
    year: 2025,
    dateDiscovered: "2025-11-10",
    reviewStatus: "source-verified",
    dateReviewed: "2026-07-11",
    reviewedBy: "Beyond Signal editorial desk",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-07-11",
    location: {
      name: "Talbragar Fish Beds, New South Wales, Australia",
      lat: -32.92,
      lng: 148.51,
    },
    discoveringOrg: "Australian Museum Research Institute / international paleontology team",
    scientificName: "Telmatomyia talbragarica",
    classification: "Animalia · Arthropoda · Insecta · Chironomidae",
    conservationStatus: "Extinct (~151 Ma)",
    heroImage: "/images/categories/dinosaurs-fossils.svg",
    summary:
      "A 151-million-year-old fossil midge from Australia became the oldest known member of its group in the Southern Hemisphere, challenging assumptions about where these insects evolved.",
    story: {
      whyThere:
        "The fossil was preserved in the Talbragar Fish Beds, an ancient freshwater lake deposit in what was once Gondwana.",
      howFound:
        "Researchers revisited specimens held in the Australian Museum collection and used preserved anatomical details to identify a new non-biting midge species.",
      whatMakesUnique:
        "The fossil's age and southern location support a possible Gondwanan origin for the group, rather than an exclusively northern beginning.",
    },
    gallery: ["/images/categories/dinosaurs-fossils.svg", "/images/textures/grid.svg"],
    paperUrl: "https://australian.museum/blog/amri-news/tiny-fossil-ancient-supercontinents/",
    primarySourceUrl: "https://australian.museum/blog/amri-news/tiny-fossil-ancient-supercontinents/",
    supportingSources: [
      {
        title: "The tiny fossil that helps us reexamine the story of how life evolved across ancient supercontinents",
        url: "https://australian.museum/blog/amri-news/tiny-fossil-ancient-supercontinents/",
        publisher: "Australian Museum",
        tier: "Tier 1",
        sourceType: "institutional",
        accessedAt: "2026-07-11",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["dreadnoughtus-titanosaur", "spinosaurus-swimming-tail"],
    tags: ["fossil", "midge", "insect", "gondwana", "jurassic", "australia"],
  },
  {
    slug: "flu-virus-live-imaging",
    title: "Watching Influenza Enter a Living Cell",
    categorySlug: "biology",
    subtopic: "Microbiology",
    year: 2025,
    dateDiscovered: "2025-12-04",
    reviewStatus: "source-verified",
    dateReviewed: "2026-07-11",
    reviewedBy: "Beyond Signal editorial desk",
    sourceTier: "Tier 1",
    sourceAccessedAt: "2026-07-11",
    location: {
      name: "ETH Zurich, Zurich, Switzerland",
      lat: 47.376,
      lng: 8.541,
    },
    discoveringOrg: "ETH Zurich-led international virology team",
    scientificName: "Influenza A virus",
    classification: "Biology · Virology · Host–pathogen interaction",
    conservationStatus: undefined,
    heroImage: "/images/categories/biology.svg",
    summary:
      "A new combined microscopy method let scientists watch influenza viruses invade living cells in real time, revealing that cells actively help capture the virus.",
    story: {
      whyThere:
        "Most images of viral infection freeze one moment, leaving the sequence of attachment, movement, and entry difficult to observe directly.",
      howFound:
        "Researchers combined atomic-force microscopy with fluorescence microscopy in a system called ViViD-AFM and followed virus–cell interactions as they happened.",
      whatMakesUnique:
        "The live view showed cells reaching out and reshaping their surface to grab incoming viruses, a detail that could guide more targeted antiviral research.",
    },
    gallery: ["/images/categories/biology.svg", "/images/textures/waves.svg"],
    paperUrl: "https://ethz.ch/en/news-and-events/eth-news/news/2025/12/how-influenza-viruses-enter-our-cells.html",
    primarySourceUrl: "https://ethz.ch/en/news-and-events/eth-news/news/2025/12/how-influenza-viruses-enter-our-cells.html",
    supportingSources: [
      {
        title: "How influenza viruses enter our cells",
        url: "https://ethz.ch/en/news-and-events/eth-news/news/2025/12/how-influenza-viruses-enter-our-cells.html",
        publisher: "ETH Zurich",
        tier: "Tier 1",
        sourceType: "institutional",
        accessedAt: "2026-07-11",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["alphafold-protein-structures", "eumillipes-persephone"],
    tags: ["influenza", "virus", "microscopy", "cells", "virology"],
  },

];

/**
 * Country credited with each discovery (the find's location, or the lead
 * institution's country for international/space work). "International" is used
 * where no single nation clearly leads.
 */
const countryBySlug: Record<string, string> = {
  "casper-ghost-octopus": "USA",
  "lost-city-hydrothermal-field": "USA",
  "scaly-foot-gastropod": "Japan",
  "trappist-1-system": "Belgium",
  "m87-black-hole-image": "International",
  "sagittarius-a-image": "International",
  "spinosaurus-swimming-tail": "Morocco",
  "dreadnoughtus-titanosaur": "Argentina",
  "eumillipes-persephone": "Australia",
  "homo-naledi": "South Africa",
  "gobekli-tepe": "Turkey",
  "sanxingdui-sacrificial-pits": "China",
  "lake-vostok-reached": "Russia",
  "hunga-tonga-eruption": "Tonga",
  "higgs-boson": "Switzerland",
  "gravitational-waves-gw150914": "USA",
  "nif-fusion-ignition": "USA",
  "alphafold-protein-structures": "United Kingdom",
  "sycamore-quantum-supremacy": "USA",
  "cape-york-detached-reef": "Australia",
  "giant-squid-filmed": "Japan",
  "macropinna-barreleye": "USA",
  "kiwa-yeti-crab": "France",
  "osedax-bone-worms": "USA",
  "dumbo-octopus-deep": "Australia",
  "mariana-snailfish": "USA",
  "wasp-127b-supersonic-winds": "Chile",
  "wasp-127b-3d-atmosphere": "Chile",
  "saturn-128-new-moons": "International",
  "eos-molecular-cloud": "USA",
  "lead-to-gold-alice": "Switzerland",
  "solar-orbiter-sun-south-pole": "International",
  "hops-315-planet-formation": "Chile",
  "uranus-new-moon-2025": "USA",
  "repeating-gamma-ray-burst-2025": "Chile",
  "rogue-planet-growth-spurt": "Chile",
  "jurassic-midge-gondwana": "Australia",
  "flu-virus-live-imaging": "Switzerland",
};

/**
 * The hand-authored seed catalog, with each discovery's crediting country
 * attached. Monthly additions and the optional Notion-synced override are
 * composed in `catalog.ts` — the app's single source of truth — so import
 * from there, not from this file.
 */
export const seedDiscoveries: Discovery[] = discoveriesData.map((d) => ({
  ...d,
  location: {
    ...d.location,
    country: countryBySlug[d.slug] ?? "International",
  },
}));

