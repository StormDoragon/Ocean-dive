import type { Discovery } from "@/content/types";
import Link from "next/link";
import { slugify } from "@/lib/hubs";

function Row({ label, value }: { label: string; value?: string | number }) {
  if (value === undefined || value === null || value === "") return null;
  return (
    <div className="flex flex-col gap-0.5 border-b border-white/5 py-2.5 last:border-0">
      <dt className="text-xs uppercase tracking-wide text-slate-500">{label}</dt>
      <dd className="text-sm text-slate-200">{value}</dd>
    </div>
  );
}

function LinkRow({ label, value, href }: { label: string; value: string; href: string }) {
  return (
    <div className="flex flex-col gap-0.5 border-b border-white/5 py-2.5 last:border-0">
      <dt className="text-xs uppercase tracking-wide text-slate-500">{label}</dt>
      <dd className="text-sm text-slate-200">
        <Link href={href} className="hover:text-signal">{value}</Link>
      </dd>
    </div>
  );
}

export function QuickFacts({ discovery }: { discovery: Discovery }) {
  const { location } = discovery;
  return (
    <div className="card p-5">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-signal">
        Quick Facts
      </h2>
      <dl className="mt-3">
        <Row label="Date discovered" value={formatDate(discovery.dateDiscovered)} />
        <LinkRow label="Location" value={location.name} href={`/locations/${slugify(location.name)}`} />
        <Row
          label="Depth"
          value={location.depthMeters != null ? `${location.depthMeters.toLocaleString()} m` : undefined}
        />
        <LinkRow label="Discovering organization" value={discovery.discoveringOrg} href={`/organizations/${slugify(discovery.discoveringOrg)}`} />
        <Row label="Scientific name" value={discovery.scientificName} />
        <Row label="Classification" value={discovery.classification} />
        <Row label="Conservation status" value={discovery.conservationStatus} />
      </dl>
    </div>
  );
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
