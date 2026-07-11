import type { Metadata } from "next";
import { TreeExplorer } from "@/components/tree/TreeExplorer";
import { buildTaxonomyTree } from "@/lib/tree";
import { canonicalUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Tree of life",
  description:
    "Zoom through the tree of life — from Life to Kingdom, Phylum, Class, and down to individual species — following the discoveries in the catalog.",
  alternates: { canonical: canonicalUrl("/tree") },
};

export default function TreePage() {
  const root = buildTaxonomyTree();

  return (
    <div className="container-page py-10">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-white">🧬 Tree of life</h1>
        <p className="mt-2 max-w-2xl text-slate-400">
          Zoom from <span className="text-slate-200">Life</span> down through
          Kingdom, Phylum, Class, and Order to the individual species in the
          catalog. Click a branch to descend; use the breadcrumb to climb back.
          Currently mapping {root.count} species across the tree.
        </p>
      </header>

      <TreeExplorer root={root} />
    </div>
  );
}
