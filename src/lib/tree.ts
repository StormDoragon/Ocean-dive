import { discoveries } from "@/content/discoveries";
import type { Discovery } from "@/content/types";

export interface TaxNode {
  /** e.g. "Animalia", "Mollusca", "Octopoda". */
  name: string;
  /** Human label for this level: Life / Kingdom / Phylum / Class / … */
  rank: string;
  children: TaxNode[];
  /** Discoveries whose classification path ends at this node. */
  discoveries: Discovery[];
  /** Total discoveries in this subtree (for branch counts). */
  count: number;
}

const RANKS = ["Kingdom", "Phylum", "Class", "Order", "Family", "Tribe"];

/** Split a classification string ("Animalia · Mollusca · …") into ranks. */
function splitPath(classification: string): string[] {
  return classification
    .split(/[·>/]/)
    .map((s) => s.trim())
    .filter(Boolean);
}

/** A discovery belongs in the tree of life if it has a biological taxonomy. */
function isBiological(d: Discovery): boolean {
  return Boolean(d.classification && /^animalia\b/i.test(d.classification));
}

function computeCounts(node: TaxNode): number {
  node.count =
    node.discoveries.length +
    node.children.reduce((sum, c) => sum + computeCounts(c), 0);
  return node.count;
}

/** Build the taxonomy tree from every biological discovery in the catalog. */
export function buildTaxonomyTree(): TaxNode {
  const root: TaxNode = {
    name: "Life",
    rank: "Life",
    children: [],
    discoveries: [],
    count: 0,
  };

  for (const d of discoveries) {
    if (!isBiological(d)) continue;
    const path = splitPath(d.classification as string);

    let node = root;
    path.forEach((segment, i) => {
      let child = node.children.find((c) => c.name === segment);
      if (!child) {
        child = {
          name: segment,
          rank: RANKS[i] ?? "Clade",
          children: [],
          discoveries: [],
          count: 0,
        };
        node.children.push(child);
      }
      node = child;
    });
    node.discoveries.push(d);
  }

  // Sort each level alphabetically for a stable, scannable layout.
  const sortRec = (n: TaxNode) => {
    n.children.sort((a, b) => a.name.localeCompare(b.name));
    n.children.forEach(sortRec);
  };
  sortRec(root);
  computeCounts(root);
  return root;
}

/** Resolve a node by its path of names (excluding the implicit root). */
export function findNode(root: TaxNode, path: string[]): TaxNode | undefined {
  let node = root;
  for (const name of path) {
    const next = node.children.find((c) => c.name === name);
    if (!next) return undefined;
    node = next;
  }
  return node;
}
