import type { Discovery, DiscoveryImageType } from "@/content/types";

/**
 * Local placeholder assets (generic category art and textures) shipped with the
 * repo. They stand in for entries that do not yet have a verified photograph.
 * They are honestly labeled as illustrations so a reader is never misled into
 * thinking a placeholder is a depiction of the actual discovery (WS2).
 */
const PLACEHOLDER_RE = /^\/images\/(categories|textures)\//;

export function isPlaceholderImage(src: string | undefined | null): boolean {
  return Boolean(src) && PLACEHOLDER_RE.test(src as string);
}

const IMAGE_TYPE_LABELS: Record<DiscoveryImageType, string> = {
  photograph: "Photograph",
  "telescope image": "Telescope image",
  "microscopy image": "Microscopy image",
  "data visualization": "Data visualization",
  "artist impression": "Artist's impression",
  reconstruction: "Reconstruction",
  diagram: "Diagram",
};

export function imageTypeLabel(type: DiscoveryImageType): string {
  return IMAGE_TYPE_LABELS[type];
}

export type ImageRelation = "exact" | "contextual" | "illustration";

export interface ImagePresentation {
  src: string;
  /** Always non-empty, accessible alt text. */
  alt: string;
  /** Human label for the kind of visual — always set, never misleading. */
  visualType: string;
  isPlaceholder: boolean;
  /** How the image relates to the discovery: exact photo, representative, or art. */
  relation: ImageRelation;
  /** Short visible badge text when the image is not an exact depiction (else undefined). */
  relationLabel?: string;
  credit?: string;
  sourceUrl?: string;
  license?: string;
}

const RELATION_LABELS: Record<Exclude<ImageRelation, "exact">, string> = {
  contextual: "Representative image — not the actual subject",
  illustration: "Illustration — not a photo of the discovery",
};

/**
 * Resolve the alt text, visual-type label, and rights fields for a discovery's
 * hero image. Explicit fields on the entry always win; placeholders fall back to
 * an honest description so no image is uncredited or misleadingly labeled.
 */
export function imagePresentation(discovery: Discovery): ImagePresentation {
  const placeholder = isPlaceholderImage(discovery.heroImage);
  const alt =
    discovery.imageAlt?.trim() ||
    (placeholder
      ? `Illustration representing ${discovery.title}. A verified photograph is not yet available.`
      : discovery.title);
  const visualType = discovery.imageType
    ? imageTypeLabel(discovery.imageType)
    : placeholder
      ? "Illustration (placeholder — not a photo of the discovery)"
      : "Image";

  // Explicit relation wins; a placeholder is always an illustration; otherwise
  // a real hero image is treated as an exact depiction unless told otherwise.
  const relation: ImageRelation =
    discovery.imageRelation ?? (placeholder ? "illustration" : "exact");
  const relationLabel = relation === "exact" ? undefined : RELATION_LABELS[relation];

  return {
    src: discovery.heroImage,
    alt,
    visualType,
    isPlaceholder: placeholder,
    relation,
    relationLabel,
    credit: discovery.imageCredit,
    sourceUrl: discovery.imageSourceUrl,
    license: discovery.imageLicense,
  };
}
