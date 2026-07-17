"use client";

import { useEffect, useRef, type CSSProperties } from "react";

/**
 * Fade-up scroll reveal. Server-renders its children visible (the hidden
 * state only applies under `html.js`, see globals.css), then reveals them
 * with a small stagger the first time they enter the viewport.
 */
export function Reveal({
  children,
  index = 0,
  className = "",
}: {
  children: React.ReactNode;
  /** Stagger position within a group; each step delays the reveal by 70ms. */
  index?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      el.classList.add("reveal-in");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          el.classList.add("reveal-in");
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{ "--reveal-i": index } as CSSProperties}
    >
      {children}
    </div>
  );
}
