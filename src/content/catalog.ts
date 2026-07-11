import { discoveries as seedDiscoveries } from "./discoveries";
import { june2026Discoveries } from "./discoveries-june-2026";
import type { Discovery } from "./types";

/**
 * Complete discovery catalog consumed by pages, search, stats, and the ask engine.
 * Monthly additions live in focused files so their sourcing is easy to audit.
 */
export const discoveries: Discovery[] = [
  ...seedDiscoveries,
  ...june2026Discoveries,
];
