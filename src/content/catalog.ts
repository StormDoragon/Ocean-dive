import { discoveries as seedDiscoveries } from "./discoveries";
import { january2026Discoveries } from "./discoveries-january-2026";
import { february2026Discoveries } from "./discoveries-february-2026";
import { march2026Discoveries } from "./discoveries-march-2026";
import { april2026Discoveries } from "./discoveries-april-2026";
import { may2026Discoveries } from "./discoveries-may-2026";
import { june2026Discoveries } from "./discoveries-june-2026";
import type { Discovery } from "./types";

/**
 * Complete discovery catalog consumed by pages, search, stats, and the ask engine.
 * Monthly additions live in focused files so their sourcing is easy to audit.
 */
export const discoveries: Discovery[] = [
  ...seedDiscoveries,
  ...january2026Discoveries,
  ...february2026Discoveries,
  ...march2026Discoveries,
  ...april2026Discoveries,
  ...may2026Discoveries,
  ...june2026Discoveries,
];
