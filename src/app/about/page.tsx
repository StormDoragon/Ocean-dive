import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { canonicalUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About",
  description:
    "What Beyond Signal is, how it is built, and how it plans to stay free and sustainable.",
  alternates: { canonical: canonicalUrl("/about") },
};

export default function AboutPage() {
  return (
    <div className="container-page max-w-3xl py-12">
      <h1 className="text-3xl font-bold text-white">About {site.name}</h1>
      <p className="mt-4 text-lg text-slate-300">
        {site.name} is a searchable encyclopedia of scientific discovery — think
        of it as IMDb for science. Instead of a stream of articles, it organizes
        knowledge into a database you can search, filter, and map.
      </p>

      <Section title="What this is">
        <p>
          This is a v1 foundation: a browsable catalog of real, well-documented
          discoveries across eight fields, each with its own detail page, quick
          facts, story, gallery, map, and related entries. It is built to grow.
        </p>
      </Section>

      <Section title="How it works">
        <p>
          Every discovery is structured data, so the same entry can power a card,
          a detail page, a search result, and a point on the map. Pages are
          pre-rendered for speed and search visibility.
        </p>
      </Section>

      <Section title="On the roadmap">
        <ul className="list-disc space-y-1.5 pl-5">
          <li>AI search — ask questions in plain English</li>
          <li>Accounts: save discoveries, build collections, earn badges</li>
          <li>Discovery timeline, ocean depth explorer, and tree of life</li>
          <li>An interactive 3D globe of every discovery</li>
        </ul>
      </Section>

      <Section title="How it stays free">
        <p>
          The long-term plan combines modest display ads on informational pages,
          clearly-labeled affiliate links for books and science gear, an optional
          premium tier (advanced filters, datasets, alerts), and transparent
          sponsored content from museums and universities. Any sponsored or
          affiliate content will always be disclosed.
        </p>
      </Section>

      <Section title="A note on accuracy">
        <p>
          Discovery facts are summarized from public reporting and linked to a
          source where possible. Images in this prototype are placeholders, not
          photographs of the actual discoveries.
        </p>
      </Section>

      <div className="mt-10">
        <Link
          href="/discoveries"
          className="rounded-full bg-signal px-5 py-2.5 text-sm font-semibold text-abyss-950 hover:bg-signal-400"
        >
          Start exploring →
        </Link>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <div className="mt-2 space-y-2 leading-relaxed text-slate-300">{children}</div>
    </section>
  );
}
