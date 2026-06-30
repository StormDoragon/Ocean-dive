import type { Metadata } from "next";
import { TimelineExplorer } from "@/components/timeline/TimelineExplorer";
import { getAll, getYearBounds } from "@/lib/discoveries";

export const metadata: Metadata = {
  title: "Discovery timeline",
  description:
    "Scrub through time and watch scientific discoveries appear, from the earliest entry to today. An interactive timeline of human discovery.",
};

export default function TimelinePage() {
  const discoveries = getAll();
  const { minYear, maxYear } = getYearBounds();

  return (
    <div className="container-page py-10">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-white">📅 Discovery timeline</h1>
        <p className="mt-2 max-w-2xl text-slate-400">
          Drag the slider or press play to move through time and watch
          discoveries appear. Each dot is a discovery, colored by field — hover
          to see what it is, click to open it.
        </p>
      </header>

      <TimelineExplorer
        discoveries={discoveries}
        minYear={minYear}
        maxYear={maxYear}
      />
    </div>
  );
}
