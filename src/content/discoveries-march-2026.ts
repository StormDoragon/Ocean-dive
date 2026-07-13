import type { Discovery } from "./types";

export const march2026Discoveries: Discovery[] = [
  {
    slug: "gj-887-d-habitable-zone-super-earth",
    title: "GJ 887 d, a Nearby Habitable-Zone Super-Earth",
    categorySlug: "space",
    subtopic: "Exoplanets",
    year: 2026,
    dateDiscovered: "2026-03-06",
    location: {
      name: "La Silla Observatory, Chile",
      lat: -29.26,
      lng: -70.73,
      country: "Chile",
    },
    discoveringOrg: "RedDots collaboration / HARPS and ESPRESSO teams",
    scientificName: "GJ 887 d",
    classification: "Astronomy · Habitable-zone super-Earth",
    conservationStatus: undefined,
    heroImage: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Artist%27s_impression_of_the_planet_orbiting_Proxima_Centauri.jpg",
    imageAlt: "Artist's impression of a rocky planet in the habitable zone of a nearby red dwarf, representative of the super-Earth GJ 887 d.",
    imageCredit: "ESO/M. Kornmesser",
    imageSourceUrl: "https://commons.wikimedia.org/wiki/File:Artist%27s_impression_of_the_planet_orbiting_Proxima_Centauri.jpg",
    imageLicense: "CC BY 4.0",
    imageType: "artist impression",
    summary:
      "A 50.77-day super-Earth confirmed in the habitable zone of GJ 887, only about 10.7 light-years away and second only to Proxima b in proximity among known temperate planets.",
    story: {
      whyThere:
        "A possible 50-day planetary signal had lingered in earlier observations of the quiet nearby red dwarf GJ 887.",
      howFound:
        "The team added 101 HARPS and 12 ESPRESSO radial-velocity measurements, then separated stellar activity from the repeating gravitational signal.",
      whatMakesUnique:
        "Its nearness and temperate orbit make it one of the strongest future targets for direct imaging and atmospheric follow-up, although its actual surface conditions remain unknown.",
    },
    gallery: ["https://upload.wikimedia.org/wikipedia/commons/a/ae/Artist%27s_impression_of_the_planet_orbiting_Proxima_Centauri.jpg", "/images/textures/grid.svg"],
    paperUrl: "https://arxiv.org/abs/2602.08929",
    videoUrls: [],
    relatedSlugs: ["trappist-1-system", "lhs-1903-inside-out-system"],
    tags: ["exoplanet", "super-earth", "habitable zone", "red dwarf", "radial velocity"],
  },
  {
    slug: "xi-cc-plus-doubly-charmed-baryon",
    title: "The Doubly Charmed Baryon Ξcc+",
    categorySlug: "physics",
    subtopic: "Particle discoveries",
    year: 2026,
    dateDiscovered: "2026-03-17",
    location: {
      name: "CERN, Geneva, Switzerland",
      lat: 46.23,
      lng: 6.05,
      country: "Switzerland",
    },
    discoveringOrg: "CERN LHCb Collaboration",
    scientificName: "Ξcc+",
    classification: "Physics · Doubly charmed baryon",
    conservationStatus: undefined,
    heroImage: "https://home.cern/wp-content/uploads/2026/04/Xicc-v01-00002-labels.png.webp",
    imageAlt:
      "CERN artist impression of the newly discovered doubly charmed baryon, showing two charm quarks and one down quark.",
    imageCredit: "CERN",
    imageSourceUrl: "https://home.cern/lhcb-collaboration-discovers-new-proton-particle/",
    imageRelation: "illustration",
    imageLicense: "CERN media image; verify reuse terms",
    imageType: "artist impression",
    summary:
      "LHCb observed a proton-like particle containing two charm quarks and one down quark with discovery-level significance, resolving a long-running experimental puzzle.",
    story: {
      whyThere:
        "Physicists were testing how the strong force binds unusually heavy combinations of quarks and investigating an earlier, disputed signal for the same particle.",
      howFound:
        "LHCb sifted proton-collision data for a characteristic decay chain and found a statistically decisive concentration at the expected mass.",
      whatMakesUnique:
        "Together with its previously observed sibling Ξcc++, it gives researchers a rare controlled laboratory for studying how quarks assemble inside matter.",
    },
    gallery: [
      "https://home.cern/wp-content/uploads/2026/04/Xicc-v01-00002-labels.png.webp",
      "/images/textures/waves.svg",
    ],
    paperUrl: "https://home.cern/news/news/physics/lhcb-collaboration-discovers-new-proton-particle",
    videoUrls: [],
    relatedSlugs: ["higgs-boson", "gravitational-waves-gw150914"],
    tags: ["cern", "lhcb", "baryon", "charm quark", "strong force"],
  },
];
