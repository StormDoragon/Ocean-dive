import { discoveries as seedDiscoveries } from "./discoveries";
import { may2026Discoveries } from "./discoveries-may-2026";
import { june2026Discoveries } from "./discoveries-june-2026";
import type { Discovery } from "./types";

/**
 * Complete discovery catalog consumed by pages, search, stats, and the ask engine.
 * Monthly additions live in focused files so their sourcing is easy to audit.
 */
export const discoveries: Discovery[] = [
  ...seedDiscoveries,
  ...may2026Discoveries,
  ...june2026Discoveries,
];
