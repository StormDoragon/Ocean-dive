import { seedDiscoveries } from "./discoveries";
import { january2026Discoveries } from "./discoveries-january-2026";
import { february2026Discoveries } from "./discoveries-february-2026";
import { march2026Discoveries } from "./discoveries-march-2026";
import { april2026Discoveries } from "./discoveries-april-2026";
import { may2026Discoveries } from "./discoveries-may-2026";
import { june2026Discoveries } from "./discoveries-june-2026";
import { april2024Discoveries } from "./discoveries-april-2024";
import { august2023Discoveries } from "./discoveries-august-2023";
import { december2022Discoveries } from "./discoveries-december-2022";
import { december2024Discoveries } from "./discoveries-december-2024";
import { february2023Discoveries } from "./discoveries-february-2023";
import { january2025Discoveries } from "./discoveries-january-2025";
import { july2022Discoveries } from "./discoveries-july-2022";
import { july2026Discoveries } from "./discoveries-july-2026";
import { june2023Discoveries } from "./discoveries-june-2023";
import { june2024Discoveries } from "./discoveries-june-2024";
import { june2025Discoveries } from "./discoveries-june-2025";
import { march2022Discoveries } from "./discoveries-march-2022";
import { may2025Discoveries } from "./discoveries-may-2025";
import { october2024Discoveries } from "./discoveries-october-2024";
// scaffold:import (npm run new-month inserts new monthly imports above this line)
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
  ...april2024Discoveries,
  ...august2023Discoveries,
  ...december2022Discoveries,
  ...december2024Discoveries,
  ...february2023Discoveries,
  ...january2025Discoveries,
  ...july2022Discoveries,
  ...july2026Discoveries,
  ...june2023Discoveries,
  ...june2024Discoveries,
  ...june2025Discoveries,
  ...march2022Discoveries,
  ...may2025Discoveries,
  ...october2024Discoveries,
  // scaffold:spread (npm run new-month inserts new monthly spreads above this line)
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
