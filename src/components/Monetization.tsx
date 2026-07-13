/**
 * Monetization placeholders. Inert by default — no ad networks or affiliate
 * programs are wired up. They render nothing unless
 * NEXT_PUBLIC_ENABLE_MONETIZATION="true", so the public site never shows
 * inactive "ad slot" / "sample affiliate" surfaces until they are real.
 */

const monetizationEnabled =
  process.env.NEXT_PUBLIC_ENABLE_MONETIZATION === "true";

export function AdSlot({ label = "Advertisement" }: { label?: string }) {
  if (!monetizationEnabled) return null;
  return (
    <div className="card grid min-h-[90px] place-items-center border-dashed p-4 text-center">
      <div className="text-xs uppercase tracking-widest text-slate-500">
        {label}
        <div className="mt-1 normal-case tracking-normal text-slate-600">
          Ad slot placeholder
        </div>
      </div>
    </div>
  );
}

export function AffiliateCallout({
  heading = "Go deeper",
  items,
}: {
  heading?: string;
  items: string[];
}) {
  if (!monetizationEnabled) return null;
  return (
    <aside className="card p-5">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-white">{heading}</h3>
        <span className="pill">Affiliate · sample</span>
      </div>
      <ul className="mt-3 space-y-2 text-sm">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2 text-slate-300">
            <span aria-hidden className="text-signal">→</span>
            {item}
          </li>
        ))}
      </ul>
      <p className="mt-3 text-xs text-slate-500">
        Placeholder affiliate links. Real recommendations would be clearly
        disclosed.
      </p>
    </aside>
  );
}
