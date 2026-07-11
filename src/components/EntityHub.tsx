import Link from "next/link";
import { DiscoveryCard } from "@/components/DiscoveryCard";
import type { Discovery } from "@/content/types";

export function EntityHub({
  eyebrow,
  title,
  intro,
  facts,
  discoveries,
  backHref,
  backLabel,
}: {
  eyebrow: string;
  title: string;
  intro: string[];
  facts?: Array<{ label: string; value: string }>;
  discoveries: Discovery[];
  backHref: string;
  backLabel: string;
}) {
  return (
    <div className="container-page py-10">
      <nav className="text-sm text-slate-400">
        <Link href={backHref} className="hover:text-white">{backLabel}</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-300">{title}</span>
      </nav>
      <header className="mt-5 max-w-4xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-signal">{eyebrow}</p>
        <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl">{title}</h1>
        <div className="mt-4 space-y-4 text-lg leading-relaxed text-slate-300">
          {intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </header>

      {facts?.length ? (
        <dl className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((fact) => (
            <div key={fact.label} className="card p-4">
              <dt className="text-xs uppercase tracking-wide text-slate-500">{fact.label}</dt>
              <dd className="mt-1 text-sm font-medium text-white">{fact.value}</dd>
            </div>
          ))}
        </dl>
      ) : null}

      <section className="mt-12" aria-labelledby="entity-discoveries">
        <h2 id="entity-discoveries" className="text-xl font-semibold text-white">
          Discoveries connected to {title}
        </h2>
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {discoveries.map((discovery) => <DiscoveryCard key={discovery.slug} discovery={discovery} />)}
        </div>
      </section>
    </div>
  );
}
