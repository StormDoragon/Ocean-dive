"use client";

import { useEffect, useRef } from "react";
import { detectWebGL } from "@/lib/webgl";

/**
 * Host for the Dive 04 WebGL deep layer. Strictly a progressive
 * enhancement: desktop viewports with WebGL and motion allowed, fetched on
 * idle after the page is interactive. Everyone else keeps the CSS descent
 * gradient. The host is fixed behind the content, aria-hidden, and
 * pointer-events: none — it can never intercept scrolling or clicks.
 */
export function DeepLayer() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(min-width: 1024px)").matches) return;
    if (!detectWebGL()) return;

    let cancelled = false;
    let dispose: (() => void) | undefined;

    const start = () => {
      import("@/lib/deep-layer").then((m) => {
        if (!cancelled && ref.current) dispose = m.createDeepLayer(ref.current);
      });
    };

    let idleId: number | undefined;
    let timeoutId: number | undefined;
    if (typeof window.requestIdleCallback === "function") {
      idleId = window.requestIdleCallback(start, { timeout: 3000 });
    } else {
      timeoutId = window.setTimeout(start, 2000);
    }

    return () => {
      cancelled = true;
      if (idleId !== undefined) window.cancelIdleCallback(idleId);
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
      dispose?.();
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 hidden lg:block"
    />
  );
}
