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

export type DiscoveryImageType =
  | "photograph"
  | "telescope image"
  | "microscopy image"
  | "data visualization"
  | "artist impression"
  | "reconstruction"
  | "diagram";

/**
 * How the hero visual relates to the discovery itself:
 *  - "exact"        — depicts the actual specimen, object, site, or event.
 *  - "contextual"   — a representative relative, instrument, or environment.
 *  - "illustration" — an artist impression, reconstruction, or diagram.
 */
export type DiscoveryImageRelation = "exact" | "contextual" | "illustration";

export type SourceTier = "Tier 1" | "Tier 2" | "Tier 3" | "Tier 4" | "Tier 5";

export interface DiscoveryCorrection {
  date: string;
  summary: string;
  correctedBy?: string;
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
  /** ISO date of the latest substantive editorial update, when available. */
  dateUpdated?: string;
  /** Editorial/source confidence label shown to readers. */
  reviewStatus?: "editor-reviewed" | "source-verified" | "preliminary";
  /** ISO date when the entry was last checked by the editorial team. */
  dateReviewed?: string;
  /** Person or team responsible for the recorded review. */
  reviewedBy?: string;
  /** Internal source classification shown in the public editorial record. */
  sourceTier?: SourceTier;
  /** Source access date for auditability, when recorded. */
  sourceAccessedAt?: string;
  /** Public record of substantive corrections to this entry. */
  correctionHistory?: DiscoveryCorrection[];
  location: DiscoveryLocation;
  discoveringOrg: string;
  scientificName?: string;
  classification?: string;
  conservationStatus?: string;
  /** Local path or approved HTTPS URL for the hero visual. */
  heroImage: string;
  /** Accessible description of what the hero visual shows. */
  imageAlt?: string;
  /** Person or institution that must be credited for the hero visual. */
  imageCredit?: string;
  /** Page where the image and its reuse terms can be verified. */
  imageSourceUrl?: string;
  /** Reuse status or licence label supplied by the source. */
  imageLicense?: string;
  /** Clarifies whether the visual is a photo, scientific image, or illustration. */
  imageType?: DiscoveryImageType;
  /**
   * How the hero image relates to the discovery itself:
   *  - "exact": a verified image of the actual subject/event
   *  - "contextual": a representative image (e.g. a close relative or the site)
   *  - "illustration": generic art / placeholder, not a depiction of the subject
   * Placeholders resolve to "illustration" automatically; set this explicitly
   * for any real photo that is representative rather than exact.
   */
  imageRelation?: DiscoveryImageRelation;
  summary: string;
  story: DiscoveryStory;
  gallery: string[];
  paperUrl?: string;
  /** Primary scientific or institutional source for the entry. */
  primarySourceUrl?: string;
  /** Additional sources that support or contextualize the entry. */
  supportingSources?: Array<{
    title: string;
    url: string;
    publisher: string;
    tier?: SourceTier;
    sourceType?: "paper" | "institutional" | "reporting" | "reference";
    accessedAt?: string;
  }>;
  videoUrls: string[];
  relatedSlugs: string[];
  tags: string[];
}
