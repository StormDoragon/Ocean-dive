import type { Discovery } from "./types";

/**
 * Scientific discoveries announced or published during March 2025.
 * Imported via `npm run import:discoveries`. Run `npm run validate` before release.
 */
export const march2025Discoveries: Discovery[] = [
  {
    slug: "a84-iceberg-shelf-seafloor-life",
    "datePublished": "2026-11-26",
    title: "A Calving Iceberg Reveals Established Antarctic Seafloor Communities",
    categorySlug: "ocean",
    subtopic: "Deep-sea expeditions",
    year: 2025,
    dateDiscovered: "2025-03-20",
    reviewStatus: "source-verified",
    sourceTier: "Tier 2",
    sourceAccessedAt: "2026-11-26",
    location: {
      name: "Bellingshausen Sea, George VI Ice Shelf (regional survey marker)",
      lat: -72.7,
      lng: -73.5,
      country: "Antarctica",
    },
    discoveringOrg: "Patricia Esquete and the Falkor (too) expedition team",
    heroImage: "/images/discoveries/2025/a84-iceberg-shelf-seafloor-life.webp",
    imageAlt: "Original editorial diagram for George VI Ice Shelf. A-84: iceberg opened a path for the survey. 1,300 metres: deepest communities reported.",
    imageCredit: "The Nucleon Editorial Graphics",
    imageSourceUrl: "https://github.com/StormDoragon/Ocean-dive/blob/main/public/images/discoveries/2025/a84-iceberg-shelf-seafloor-life.webp",
    imageLicense: "Original editorial artwork, The Nucleon",
    imageType: "diagram",
    imageRelation: "illustration",
    summary: "After iceberg A-84 detached from the George VI Ice Shelf, researchers found extensive communities of sponges, corals and other animals on the newly accessible seafloor.",
    story: {
      whyThere: "The underside of a floating ice shelf is difficult to reach by ship. When the iceberg calved, a nearby expedition redirected its instrument surveys into the opened water.",
      howFound: "The team used the remotely operated vehicle SuBastian to record habitats over eight days. It documented sponges, corals and mobile animals down to about 1,300 metres.",
      whatMakesUnique: "Some animals were large and slow-growing, suggesting that established communities were already there before the iceberg broke away. Food delivery beneath the ice remains a research question.",
    },
    gallery: ["/images/discoveries/2025/a84-iceberg-shelf-seafloor-life.webp"],
    primarySourceUrl: "https://schmidtocean.org/thriving-antarctic-ecosystems-found-in-wake-of-recently-detached-iceberg/",
    supportingSources: [
      {
        title: "Calving report",
        url: "https://usicecenter.gov/PressRelease/IcebergA84",
        publisher: "U.S. National Ice Center",
        tier: "Tier 2",
        sourceType: "institutional",
        accessedAt: "2026-11-26",
      },
    ],
    videoUrls: [],
    relatedSlugs: ["beyond-epica-oldest-ice-core"],
    tags: ["antarctica", "ice shelves", "deep sea", "sponges"],
  },
];
