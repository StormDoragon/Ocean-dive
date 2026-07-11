import type { Metadata } from "next";
import { DepthExplorer } from "@/components/depth/DepthExplorer";
import { getDepthZones, getDeepestDiscovery } from "@/lib/ocean";
import { canonicalUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Ocean depth explorer",
  description:
    "Descend from the sunlit surface to the hadal trenches and see what has been discovered at every level of the ocean.",
  alternates: { canonical: canonicalUrl("/depth") },
};

export default function DepthPage() {
  const zones = getDepthZones();
  const deepest = getDeepestDiscovery();

  return (
    <div className="container-page py-10">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-white">🌊 Ocean depth explorer</h1>
        <p className="mt-2 max-w-2xl text-slate-400">
          Scroll down to descend through the ocean&apos;s zones — from the sunlit
          surface to the crushing dark of the trenches — and see what has been
          discovered at each level.
          {deepest?.location.depthMeters
            ? ` The deepest find here: “${deepest.title}” at ${deepest.location.depthMeters.toLocaleString()} m.`
            : ""}
        </p>
      </header>

      <DepthExplorer zones={zones} />
    </div>
  );
}
