import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { editorialTeam } from "@/content/editorial";
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
      <div className="overflow-hidden rounded-2xl border border-white/10">
        <Image
          src="/images/about/hero.svg"
          alt="Illustration representing Beyond Signal, a searchable encyclopedia of scientific discovery."
          width={1200}
          height={630}
          priority
          className="h-auto w-full"
        />
      </div>

      <h1 className="mt-8 text-3xl font-bold text-white">About {site.name}</h1>
      <p className="mt-4 text-lg text-slate-300">
        {site.name} is a searchable encyclopedia of scientific discovery — think
        of it as IMDb for science. Instead of a stream of articles that scrolls
        past and disappears, it turns discoveries into a living database you can
        search, filter, map, and explore from any angle.
      </p>

      <Section
        title="What this is"
        image="/images/about/what-this-is.svg"
        imageAlt="Illustration of an open catalog of scientific discoveries."
      >
        <p>
          Beyond Signal is a v1 foundation: a browsable catalog of real,
          well-documented discoveries across eight fields — ocean, space,
          physics, biology, technology, earth science, archaeology, and
          dinosaurs &amp; fossils. Every entry has its own detail page with quick
          facts, the full story, a gallery, a map, and links to related
          discoveries. It is small on purpose and built to grow.
        </p>
      </Section>

      <Section
        title="How it works"
        image="/images/about/how-it-works.svg"
        imageAlt="Illustration of interlocking data pieces powering many views."
      >
        <p>
          Every discovery is stored as structured data rather than a one-off
          article. That single record can power a card, a full detail page, a
          search result, a timeline entry, and a point on the map — all at once
          and always in sync. Pages are pre-rendered ahead of time, so they load
          fast and stay easy for search engines to read.
        </p>
      </Section>

      <Section
        title="On the roadmap"
        image="/images/about/roadmap.svg"
        imageAlt="Illustration of a compass charting an exploration roadmap."
      >
        <p className="mb-3">
          The catalog is the starting point. Next comes everything that turns it
          into a place to explore rather than just read:
        </p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>AI search — ask questions about science in plain English</li>
          <li>Accounts: save discoveries, build collections, and earn badges</li>
          <li>
            A discovery timeline, an ocean depth explorer, and an interactive
            tree of life
          </li>
          <li>A 3D globe plotting every discovery on Earth</li>
        </ul>
      </Section>

      <Section
        title="How it stays free"
        image="/images/about/stays-free.svg"
        imageAlt="Illustration of a growing sprout representing sustainable funding."
      >
        <p>
          Beyond Signal is free to read, and the plan is to keep it that way. The
          long-term model combines modest display ads on informational pages,
          clearly-labeled affiliate links for books and science gear, an optional
          premium tier (advanced filters, datasets, and alerts), and transparent
          sponsored content from museums and universities. Anything sponsored or
          affiliate-supported will always be disclosed, up front.
        </p>
      </Section>

      <Section
        title="A note on accuracy"
        image="/images/about/accuracy.svg"
        imageAlt="Illustration of a microscope representing careful fact-checking."
      >
        <p>
          Discovery facts are summarized from public reporting and linked back to
          a source wherever possible. Every page shows its source tier, review
          status, publication date, review date when one is recorded, image
          credit, and correction history — so you can always see how solid a given
          entry is and where it came from.
        </p>
      </Section>

      <Section
        title="Editorial authority"
        image="/images/about/editorial.svg"
        imageAlt="Illustration of a fountain pen representing editorial oversight."
      >
        <p>
          The public byline is {editorialTeam.name}. A page is never described as
          editor reviewed unless a dated review is actually on record. Read the
          full
          <Link href="/editorial-standards" className="text-signal underline underline-offset-2"> editorial standards</Link>,
          <Link href="/methodology" className="text-signal underline underline-offset-2"> methodology</Link>,
          <Link href="/sources" className="text-signal underline underline-offset-2"> source index</Link>, and
          <Link href="/corrections" className="text-signal underline underline-offset-2"> corrections policy</Link>.
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

function Section({
  title,
  image,
  imageAlt,
  children,
}: {
  title: string;
  image: string;
  imageAlt: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10">
      <div className="overflow-hidden rounded-xl border border-white/10">
        <Image
          src={image}
          alt={imageAlt}
          width={1200}
          height={630}
          className="h-auto w-full"
        />
      </div>
      <h2 className="mt-5 text-xl font-semibold text-white">{title}</h2>
      <div className="mt-2 space-y-2 leading-relaxed text-slate-300">{children}</div>
    </section>
  );
}
