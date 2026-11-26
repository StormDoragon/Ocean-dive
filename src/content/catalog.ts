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
import { batch022022Discoveries } from "./discoveries-batch-02-2022";
import { batch022023Discoveries } from "./discoveries-batch-02-2023";
import { batch022024Discoveries } from "./discoveries-batch-02-2024";
import { batch022025Discoveries } from "./discoveries-batch-02-2025";
import { batch022026Discoveries } from "./discoveries-batch-02-2026";
import { batch032022Discoveries } from "./discoveries-batch-03-2022";
import { batch032023Discoveries } from "./discoveries-batch-03-2023";
import { batch032024Discoveries } from "./discoveries-batch-03-2024";
import { batch032025Discoveries } from "./discoveries-batch-03-2025";
import { batch032026Discoveries } from "./discoveries-batch-03-2026";
import { batch042022Discoveries } from "./discoveries-batch-04-2022";
import { batch042023Discoveries } from "./discoveries-batch-04-2023";
import { batch042024Discoveries } from "./discoveries-batch-04-2024";
import { batch042025Discoveries } from "./discoveries-batch-04-2025";
import { batch042026Discoveries } from "./discoveries-batch-04-2026";
import { eurasianDiscoveries } from "./discoveries-eurasia";
import { atlasAdditions } from "./discoveries-atlas-2026-11";
import { august2026Discoveries } from "./discoveries-august-2026";
import { november2026Discoveries } from "./discoveries-november-2026";
import { october2026Discoveries } from "./discoveries-october-2026";
import { july2025Discoveries } from "./discoveries-july-2025";
import { june2017Discoveries } from "./discoveries-june-2017";
import { march1979Discoveries } from "./discoveries-march-1979";
import { march2025Discoveries } from "./discoveries-march-2025";
import { september2025Discoveries } from "./discoveries-september-2025";
import { april2012Discoveries } from "./discoveries-april-2012";
import { april2019Discoveries } from "./discoveries-april-2019";
import { january2000Discoveries } from "./discoveries-january-2000";
import { october2008Discoveries } from "./discoveries-october-2008";
import { september2019Discoveries } from "./discoveries-september-2019";
import { april2025Discoveries } from "./discoveries-april-2025";
import { february2025Discoveries } from "./discoveries-february-2025";
import { may2024Discoveries } from "./discoveries-may-2024";
import { november2013Discoveries } from "./discoveries-november-2013";
import { november2025Discoveries } from "./discoveries-november-2025";
import { october2025Discoveries } from "./discoveries-october-2025";
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
  ...batch022022Discoveries,
  ...batch022023Discoveries,
  ...batch022024Discoveries,
  ...batch022025Discoveries,
  ...batch022026Discoveries,
  ...batch032022Discoveries,
  ...batch032023Discoveries,
  ...batch032024Discoveries,
  ...batch032025Discoveries,
  ...batch032026Discoveries,
  ...batch042022Discoveries,
  ...batch042023Discoveries,
  ...batch042024Discoveries,
  ...batch042025Discoveries,
  ...batch042026Discoveries,
  ...atlasAdditions,
  ...eurasianDiscoveries,
  ...august2026Discoveries,
  ...november2026Discoveries,
  ...october2026Discoveries,
  ...july2025Discoveries,
  ...june2017Discoveries,
  ...march1979Discoveries,
  ...march2025Discoveries,
  ...september2025Discoveries,
  ...april2012Discoveries,
  ...april2019Discoveries,
  ...january2000Discoveries,
  ...october2008Discoveries,
  ...september2019Discoveries,
  ...april2025Discoveries,
  ...february2025Discoveries,
  ...may2024Discoveries,
  ...november2013Discoveries,
  ...november2025Discoveries,
  ...october2025Discoveries,
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
