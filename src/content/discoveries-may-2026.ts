import type { Discovery } from "./types";

/** Scientific discoveries announced or published in May 2026. */
export const may2026Discoveries: Discovery[] = [
  {
    slug: "microeledone-galapagensis",
    title: "A Tiny Blue Octopus from the Galápagos Deep",
    categorySlug: "ocean",
    subtopic: "New species",
    year: 2026,
    dateDiscovered: "2026-05-27",
    location: {
      name: "Near Darwin Island, Galápagos Marine Reserve, Ecuador",
      lat: 1.67,
      lng: -92.0,
      country: "Ecuador",
      depthMeters: 1773,
    },
    discoveringOrg: "Field Museum / Charles Darwin Foundation / E/V Nautilus expedition",
    scientificName: "Microeledone galapagensis",
    classification: "Animalia · Mollusca · Cephalopoda · Octopoda · Megaleledonidae",
    conservationStatus: "Not evaluated",
    heroImage: "/images/categories/ocean.svg",
    summary:
      "A golf-ball-sized, deep-blue octopus from nearly 1,800 m below the Galápagos was formally described as a new species after non-destructive CT scans revealed its unusual anatomy.",
    story: {
      whyThere:
        "Researchers were using a remotely operated vehicle to survey the little-explored deep slopes near Darwin Island in the Galápagos Marine Reserve.",
      howFound:
        "The expedition filmed several tiny blue octopuses and collected one specimen. Because it was the only preserved individual, scientists used high-resolution CT imaging instead of dissection to study its internal structures.",
      whatMakesUnique:
        "Its small body, blue-purple coloration, short arms, single rows of suckers, and tropical deep-sea habitat distinguish it from relatives that are usually larger and associated with colder Southern Ocean waters.",
    },
    gallery: ["/images/categories/ocean.svg", "/images/textures/waves.svg"],
    paperUrl:
      "https://www.wired.com/story/a-new-species-of-tiny-octopus-was-discovered-in-the-galapagos-islands/",
    videoUrls: [],
    relatedSlugs: ["casper-ghost-octopus", "giant-squid-filmed"],
    tags: ["octopus", "new species", "galapagos", "deep sea", "ct scanning"],
  },
  {
    slug: "golden-orb-relicanthus-anemone",
    title: "The Deep-Sea ‘Golden Orb’ Identified",
    categorySlug: "ocean",
    subtopic: "Ocean mysteries",
    year: 2026,
    dateDiscovered: "2026-05-08",
    location: {
      name: "Gulf of Alaska, northeastern Pacific Ocean",
      lat: 55.0,
      lng: -147.0,
      country: "United States",
      depthMeters: 3300,
    },
    discoveringOrg: "NOAA Ocean Exploration",
    scientificName: "Relicanthus daphneae",
    classification: "Animalia · Cnidaria · Hexacorallia · Relicanthidae",
    conservationStatus: "Not evaluated",
    heroImage: "/images/categories/ocean.svg",
    summary:
      "A mysterious golden mass collected from the Gulf of Alaska seafloor was identified as tissue shed from the attachment base of the giant deep-sea anemone Relicanthus daphneae.",
    story: {
      whyThere:
        "NOAA explorers were documenting deep habitats in the Gulf of Alaska when an ROV camera found a smooth golden object attached to rock more than three kilometres down.",
      howFound:
        "Microscopy and genetic evidence linked the object to Relicanthus daphneae, showing that the orb was not an egg case or sponge but material associated with the anemone’s anchoring base.",
      whatMakesUnique:
        "The identification solved a widely followed deep-sea puzzle and revealed that this unusual anemone can leave behind a layered golden structure as it detaches or moves across the seafloor.",
    },
    gallery: ["/images/categories/ocean.svg", "/images/textures/grid.svg"],
    paperUrl:
      "https://www.wired.com/story/a-golden-orb-on-the-ocean-floor-came-from-a-mysterious-animal/",
    videoUrls: [],
    relatedSlugs: ["lost-city-hydrothermal-field", "casper-ghost-octopus"],
    tags: ["golden orb", "sea anemone", "noaa", "gulf of alaska", "deep sea"],
  },
  {
    slug: "jwst-rules-out-2024-yr4-lunar-impact",
    title: "JWST Rules Out a 2032 Lunar Impact",
    categorySlug: "space",
    subtopic: "Planetary defense",
    year: 2026,
    dateDiscovered: "2026-05-19",
    location: {
      name: "Space Telescope Science Institute, Baltimore, Maryland, USA",
      lat: 39.332,
      lng: -76.623,
      country: "United States",
    },
    discoveringOrg: "JWST planetary-defense observing team",
    scientificName: "Asteroid 2024 YR4",
    classification: "Astronomy · Apollo-class near-Earth asteroid",
    conservationStatus: undefined,
    heroImage: "/images/categories/space.svg",
    summary:
      "Faint James Webb Space Telescope observations extended asteroid 2024 YR4’s measured orbit and ruled out its previously possible collision with the Moon in December 2032.",
    story: {
      whyThere:
        "After Earth impact was excluded, asteroid 2024 YR4 still carried a small but meaningful probability of hitting the Moon, making precise follow-up important for lunar and satellite safety.",
      howFound:
        "JWST’s NIRCam detected the roughly 60 m asteroid when it was too faint for ground telescopes, extending its observational arc and shrinking the uncertainty around its predicted lunar encounter by more than a factor of 30.",
      whatMakesUnique:
        "The work produced one of the faintest detections of a near-Earth object and demonstrated how space telescopes can settle impact risks years before an asteroid becomes observable again from Earth.",
    },
    gallery: ["/images/categories/space.svg", "/images/textures/grid.svg"],
    paperUrl: "https://arxiv.org/abs/2605.20498",
    videoUrls: [],
    relatedSlugs: ["trappist-1-system", "m87-black-hole-image"],
    tags: ["asteroid", "jwst", "planetary defense", "moon", "near-earth object"],
  },
];
