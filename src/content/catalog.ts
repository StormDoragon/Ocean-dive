import { seedDiscoveries } from "./discoveries";
import { january2026Discoveries } from "./discoveries-january-2026";
import { february2026Discoveries } from "./discoveries-february-2026";
import { march2026Discoveries } from "./discoveries-march-2026";
import { april2026Discoveries } from "./discoveries-april-2026";
import { may2026Discoveries } from "./discoveries-may-2026";
import { june2026Discoveries } from "./discoveries-june-2026";
import generated from "./discoveries.generated.json";
import type { Discovery } from "./types";

/**
 * The complete hand-authored catalog: the seed entries plus every monthly
 * addition. Monthly files stay focused so their sourcing is easy to audit.
 */
const builtInCatalog: Discovery[] = [
  ...seedDiscoveries,
  ...january2026Discoveries,
  ...february2026Discoveries,
  ...march2026Discoveries,
  ...april2026Discoveries,
  ...may2026Discoveries,
  ...june2026Discoveries,
];

/**
 * When the catalog has been synced from Notion (`npm run sync:notion` writes
 * discoveries.generated.json), that pull is the complete source of truth and
 * replaces the entire built-in catalog; otherwise the hand-authored catalog is
 * used. Either way the app stays fully static.
 */
const syncedDiscoveries = generated as unknown as Discovery[];

/**
 * Single source of truth consumed by every page, search, the stats, the ask
 * engine, and the depth/tree explorers. Import from here — never from the
 * individual seed or monthly files — so all surfaces see the same data.
 */
export const discoveries: Discovery[] =
  syncedDiscoveries.length > 0 ? syncedDiscoveries : builtInCatalog;
