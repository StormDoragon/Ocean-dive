import type { Discovery } from "@/content/types";

const REVIEW_LABELS: Record<
  NonNullable<Discovery["reviewStatus"]>,
  { label: string; className: string }
> = {
  "editor-reviewed": { label: "Reviewed", className: "text-signal" },
  "source-verified": { label: "Source-verified", className: "text-emerald-300" },
  preliminary: { label: "Preliminary", className: "text-amber-300/90" },
};

/**
 * Trust signal shown wherever a discovery is featured: surfaces the entry's
 * editorial review status (already stored in the content model) as a small
 * mono badge. Renders nothing when the entry has no recorded status.
 */
export function ReviewBadge({
  status,
}: {
  status: Discovery["reviewStatus"];
}) {
  if (!status) return null;
  const { label, className } = REVIEW_LABELS[status];
  return (
    <span className={`inline-flex items-center gap-1 ${className}`}>
      <span
        aria-hidden
        className="inline-block h-1.5 w-1.5 rounded-full bg-current"
      />
      {label}
    </span>
  );
}
