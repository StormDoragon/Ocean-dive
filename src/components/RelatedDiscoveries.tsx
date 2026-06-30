import type { Discovery } from "@/content/types";
import { DiscoveryCard } from "./DiscoveryCard";

export function RelatedDiscoveries({ items }: { items: Discovery[] }) {
  if (items.length === 0) return null;
  return (
    <section>
      <h2 className="text-lg font-semibold text-white">Related discoveries</h2>
      <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((d) => (
          <DiscoveryCard key={d.slug} discovery={d} />
        ))}
      </div>
    </section>
  );
}
