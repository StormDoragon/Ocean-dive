import type { Discovery } from "./types";

export const april2026Discoveries: Discovery[] = [
  {
    slug: "proba-3-speedy-slow-solar-wind",
    datePublished: "2026-07-17",
    title: "Proba-3 Reveals a Faster Slow Solar Wind",
    categorySlug: "space",
    subtopic: "Solar physics",
    year: 2026,
    dateDiscovered: "2026-04-15",
    location: {
      name: "Royal Observatory of Belgium, Brussels, Belgium",
      lat: 50.8,
      lng: 4.36,
      country: "Belgium",
    },
    discoveringOrg: "ESA Proba-3 / Royal Observatory of Belgium",
    scientificName: "ASPIICS slow-solar-wind outflows",
    classification: "Heliophysics · Inner-corona plasma dynamics",
    conservationStatus: undefined,
    heroImage: "https://www.asi.it/wp-content/uploads/2025/06/wb_wow_lasco_swap-300x300.png",
    imageAlt:
      "Composite scientific image of the solar corona assembled from Proba-3 ASPIICS, Proba-2, SOHO and NASA observations.",
    imageCredit: "ESA/NASA/Proba-2/Proba-3/SOHO/SWAP/ASPIICS/LASCO C2",
    imageSourceUrl: "https://www.asi.it/2025/06/proba-3-svela-le-prime-immagini-della-corona-solare/",
    imageLicense: "Agency media image; verify reuse terms",
    imageType: "data visualization",
    summary:
      "Artificial-eclipse observations showed small slow-solar-wind outflows racing through the inner corona three to four times faster than expected.",
    story: {
      whyThere:
        "The region where the slow solar wind begins is normally hidden by the Sun's glare and is visible from Earth only briefly during total eclipses.",
      howFound:
        "Proba-3 flew two spacecraft in precise formation so one blocked the Sun for the other's coronagraph, creating long artificial eclipses and tracking faint plasma blobs.",
      whatMakesUnique:
        "The unexpectedly fast, widespread gusts challenge simplified models of slow-wind formation and demonstrate a new way to watch space weather being born close to the Sun.",
    },
    gallery: [
      "https://www.asi.it/wp-content/uploads/2025/06/wb_wow_lasco_swap-300x300.png",
      "/images/textures/waves.svg",
    ],
    paperUrl: "https://arxiv.org/abs/2511.01679",
    videoUrls: [],
    relatedSlugs: ["comet-c-2026-a1-maps", "m87-black-hole-image"],
    tags: ["sun", "solar wind", "proba-3", "corona", "space weather"],
  },
];
