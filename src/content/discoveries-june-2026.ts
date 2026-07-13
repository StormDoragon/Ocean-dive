import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during June 2026.
 * Keep these entries separate from the original seed catalog so monthly
 * updates remain easy to review, verify, and extend.
 */
export const june2026Discoveries: Discovery[] = [
  {
    slug: "dudgeons-walking-shark",
    title: "Dudgeon's Walking Shark",
    categorySlug: "ocean",
    subtopic: "New species",
    year: 2026,
    dateDiscovered: "2026-06-15",
    location: {
      name: "Southeastern Papua New Guinea reef flats",
      lat: -10.2,
      lng: 150.4,
      country: "Papua New Guinea",
      depthMeters: 1,
    },
    discoveringOrg: "University of the Sunshine Coast and collaborators",
    scientificName: "Hemiscyllium dudgeonae",
    classification: "Animalia · Chordata · Chondrichthyes · Orectolobiformes",
    conservationStatus: "Not evaluated",
    heroImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Hemiscyllium_ocellatum.jpg/960px-Hemiscyllium_ocellatum.jpg",
    imageAlt: "A close walking-shark relative, the epaulette shark Hemiscyllium ocellatum, photographed on Australia's Great Barrier Reef; used as a contextual image for Dudgeon's walking shark.",
    imageCredit: "Richard Ling",
    imageSourceUrl: "https://commons.wikimedia.org/wiki/File:Hemiscyllium_ocellatum.jpg",
    imageLicense: "CC BY-SA 2.0",
    imageType: "photograph",
    summary:
      "A newly described walking shark from shallow Papua New Guinea reefs, identified by its distinctive spotted pattern and confirmed as a separate species through DNA comparisons.",
    story: {
      whyThere:
        "Researchers were surveying reef flats for known walking sharks in a region whose shallow-water biodiversity remains poorly documented.",
      howFound:
        "Divers noticed an unfamiliar pattern, then located additional males, females, juveniles, and adults at three sites before genetic analysis confirmed a distinct species.",
      whatMakesUnique:
        "It is the tenth recognized walking-shark species and one of the rare new sharks discovered in water shallower than one metre, where it moves across reef flats using its paired fins.",
    },
    gallery: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Hemiscyllium_ocellatum.jpg/960px-Hemiscyllium_ocellatum.jpg", "/images/textures/waves.svg"],
    paperUrl:
      "https://www.livescience.com/animals/sharks/never-before-seen-shark-that-walks-on-land-discovered-off-papua-new-guinea",
    videoUrls: [],
    relatedSlugs: ["cape-york-detached-reef", "kiwa-yeti-crab"],
    tags: [
      "walking shark",
      "new species",
      "papua new guinea",
      "coral reef",
      "genetics",
    ],
  },
  {
    slug: "brazil-midwater-31-species",
    title: "31 New Species Found in Brazil's Ocean Midwater",
    categorySlug: "ocean",
    subtopic: "New species",
    year: 2026,
    dateDiscovered: "2026-06-26",
    location: {
      name: "International waters off Bahia, Brazil",
      lat: -13.0,
      lng: -34.5,
      country: "International",
      depthMeters: 1000,
    },
    discoveringOrg:
      "Schmidt Ocean Institute, Smithsonian, MBARI, University of Western Australia and partners",
    classification: "Marine biology · Midwater biodiversity survey",
    conservationStatus: "Not evaluated",
    heroImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Physonect_siphonophore_Puerto_Rico_April_2015.png/960px-Physonect_siphonophore_Puerto_Rico_April_2015.png",
    imageAlt: "A physonect siphonophore photographed in open midwater by NOAA, used as a contextual image for the Brazil midwater biodiversity expedition.",
    imageCredit: "NOAA Office of Ocean Exploration and Research",
    imageSourceUrl: "https://commons.wikimedia.org/wiki/File:Physonect_siphonophore_Puerto_Rico_April_2015.png",
    imageLicense: "Public domain (NOAA)",
    imageType: "photograph",
    summary:
      "A two-week expedition off Brazil rapidly identified 31 likely new species, including jellyfish, comb jellies, siphonophores, worms, amphipods, larvaceans, and giant single-celled organisms.",
    story: {
      whyThere:
        "The team targeted the ocean's midwater zone, the vast habitat between the sunlit surface and seafloor that remains among Earth's least sampled ecosystems.",
      howFound:
        "Scientists combined gentle collection systems, onboard genetic work, and a ship-based spinning confocal microscope nicknamed Squid to examine delicate living organisms in three dimensions.",
      whatMakesUnique:
        "The expedition paired taxonomic experts with real-time imaging so candidate species could be recognized at extraordinary speed while their fragile anatomy was still intact.",
    },
    gallery: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Physonect_siphonophore_Puerto_Rico_April_2015.png/960px-Physonect_siphonophore_Puerto_Rico_April_2015.png", "/images/textures/grid.svg"],
    paperUrl:
      "https://www.theguardian.com/environment/2026/jun/26/marine-expedition-uncovers-31-new-species-two-weeks-brazil",
    videoUrls: [],
    relatedSlugs: ["dudgeons-walking-shark", "casper-ghost-octopus"],
    tags: [
      "midwater",
      "new species",
      "brazil",
      "schmidt ocean institute",
      "marine imaging",
    ],
  },
  {
    slug: "praearcturus-giant-scorpion-reidentified",
    title: "The Metre-Long Scorpion Praearcturus",
    categorySlug: "dinosaurs-fossils",
    subtopic: "Fossil reinterpretation",
    year: 2026,
    dateDiscovered: "2026-06-02",
    location: {
      name: "Herefordshire and Welsh Borderlands, United Kingdom",
      lat: 51.9,
      lng: -2.8,
      country: "United Kingdom",
    },
    discoveringOrg: "Natural History Museum and University of Manchester researchers",
    scientificName: "Praearcturus gigas",
    classification: "Animalia · Arthropoda · Arachnida · Scorpiones",
    conservationStatus: "Extinct (~415 Ma)",
    heroImage: "https://upload.wikimedia.org/wikipedia/commons/d/d0/20210102_Erettopterus_bilobus.png",
    imageAlt: "A life reconstruction of a large sea scorpion (eurypterid), representative of the giant arthropod lineage Praearcturus belonged to.",
    imageCredit: "Junnn11",
    imageSourceUrl: "https://commons.wikimedia.org/wiki/File:20210102_Erettopterus_bilobus.png",
    imageLicense: "CC BY-SA 4.0",
    imageType: "reconstruction",
    summary:
      "Modern reanalysis supports identifying fragmentary British fossils as a roughly one-metre scorpion, potentially the largest scorpion yet recognized.",
    story: {
      whyThere:
        "Fossils described in the nineteenth century had moved between competing identities, including giant crustacean and scorpion, because the surviving remains were incomplete.",
      howFound:
        "Researchers re-examined museum specimens with modern imaging and broader anatomical comparisons, including newly described Paleozoic arthropods.",
      whatMakesUnique:
        "The revised anatomy points to an enormous Early Devonian predator with pincers around 16 centimetres long and possible adaptations for moving between water and land.",
    },
    gallery: [
      "/images/categories/dinosaurs-fossils.svg",
      "/images/textures/grid.svg"
    ],
    paperUrl:
      "https://www.livescience.com/animals/extinct-species/worlds-largest-scorpion-had-6-inch-pincers-and-prowled-uk-land-and-waters-415-million-years-ago",
    videoUrls: [],
    relatedSlugs: ["eumillipes-persephone", "spinosaurus-swimming-tail"],
    tags: [
      "scorpion",
      "fossil",
      "devonian",
      "united kingdom",
      "museum collections",
    ],
  },
  {
    slug: "giants-causeway-volcanic-timeline",
    title: "A New Timeline for the Giant's Causeway Eruptions",
    categorySlug: "earth-science",
    subtopic: "Volcanoes",
    year: 2026,
    dateDiscovered: "2026-06-15",
    location: {
      name: "Giant's Causeway, County Antrim, Northern Ireland",
      lat: 55.2408,
      lng: -6.5116,
      country: "United Kingdom",
    },
    discoveringOrg:
      "British Geological Survey and Geological Survey of Northern Ireland",
    classification: "Earth science · Paleogene flood-basalt volcanism",
    conservationStatus: "UNESCO World Heritage Site",
    heroImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Giant%27s_Causeway_%2814%29.JPG",
    imageAlt: "The interlocking hexagonal basalt columns of the Giant's Causeway on the Antrim coast of Northern Ireland.",
    imageCredit: "Chmee2 / Valtameri",
    imageSourceUrl: "https://commons.wikimedia.org/wiki/File:Giant%27s_Causeway_%2814%29.JPG",
    imageLicense: "CC BY 3.0",
    imageType: "photograph",
    summary:
      "High-precision dating compressed the region's volcanic history into about 5.5 million years and tied the Causeway to a North Atlantic event recorded from Scotland to Greenland.",
    story: {
      whyThere:
        "Geochronologists wanted a more exact sequence for the lava flows and intrusions formed as Greenland separated from northwestern Europe and the North Atlantic began opening.",
      howFound:
        "The team dated volcanic rocks across Northern Ireland and compared them with formations in Scotland, the Faroe region, and Greenland to align their eruption histories.",
      whatMakesUnique:
        "The analysis links the Causeway and Fingal's Cave to the same broad volcanic pulse while shortening the accepted regional timeline by roughly eight million years.",
    },
    gallery: [
      "/images/categories/earth-science.svg",
      "/images/textures/waves.svg"
    ],
    paperUrl:
      "https://www.theguardian.com/science/2026/jun/15/globally-significant-volcanic-event-giants-causeway-scientists",
    videoUrls: [],
    relatedSlugs: ["hunga-tonga-eruption", "lake-vostok-reached"],
    tags: [
      "giants causeway",
      "volcanism",
      "geochronology",
      "north atlantic",
      "basalt",
    ],
  },
];
