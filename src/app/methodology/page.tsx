import type { Metadata } from "next";
import { methodology } from "@/content/editorial";
import { canonicalUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Methodology",
  description: "The research and editorial method used to build The Nucleon discovery entries.",
  alternates: { canonical: canonicalUrl("/methodology") },
};

export default function MethodologyPage() {
  return (
    <div className="container-page max-w-4xl py-12">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-signal">How the catalogue is built</p>
      <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl">{methodology.title}</h1>
      <div className="mt-5 space-y-4 text-lg leading-relaxed text-slate-300">
        {methodology.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
      <section className="mt-10">
        <h2 className="text-xl font-semibold text-white">Editorial workflow</h2>
        <ol className="mt-4 space-y-3">
          {methodology.steps.map((step, index) => <li key={step} className="flex gap-3 text-slate-300"><span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-signal/40 text-sm text-signal">{index + 1}</span><span className="pt-1 leading-relaxed">{step}</span></li>)}
        </ol>
      </section>
    </div>
  );
}
