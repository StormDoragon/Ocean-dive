export type CategorySlug =
  | "ocean"
  | "space"
  | "dinosaurs-fossils"
  | "biology"
  | "archaeology"
  | "earth-science"
  | "physics"
  | "technology";

export interface Category {
  slug: CategorySlug;
  name: string;
  emoji: string;
  /** Short tagline shown on cards. */
  tagline: string;
  description: string;
  subtopics: string[];
  /** Marker + accent color (hex) used on the map and category theming. */
  color: string;
}

export interface DiscoveryLocation {
  name: string;
  lat: number;
  lng: number;
  /** Country (or "International") credited with the discovery. */
  country: string;
  /** Depth below sea level in meters, when relevant (ocean finds). */
  depthMeters?: number;
}

export interface DiscoveryStory {
  whyThere: string;
  howFound: string;
  whatMakesUnique: string;
}

export interface Discovery {
  slug: string;
  title: string;
  categorySlug: CategorySlug;
  subtopic: string;
  /** Year of the discovery/announcement. */
  year: number;
  /** ISO date (YYYY-MM-DD) used for "on this day" + recency. */
  dateDiscovered: string;
  location: DiscoveryLocation;
  discoveringOrg: string;
  scientificName?: string;
  classification?: string;
  conservationStatus?: string;
  /** Path to hero image (local SVG placeholder in v1). */
  heroImage: string;
  summary: string;
  story: DiscoveryStory;
  gallery: string[];
  paperUrl?: string;
  videoUrls: string[];
  relatedSlugs: string[];
  tags: string[];
}
