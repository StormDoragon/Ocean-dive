/**
 * Mono "instrument" eyebrow that replaces emoji section markers on the
 * homepage: a glowing tick, an uppercase label, and an optional count —
 * the treatment the "On this day" card pioneered, promoted to a rule.
 */
export function SectionLabel({
  children,
  count,
}: {
  children: React.ReactNode;
  count?: number;
}) {
  return (
    <p className="label-mono flex items-center gap-3">
      <span
        aria-hidden
        className="h-px w-8 bg-signal shadow-[0_0_6px_rgba(56,225,255,0.8)]"
      />
      <span>
        {children}
        {count != null ? (
          <span className="text-slate-500"> · {String(count).padStart(2, "0")}</span>
        ) : null}
      </span>
    </p>
  );
}
