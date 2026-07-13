"use client";

import { Component, type ReactNode } from "react";

/**
 * Catches any render/runtime error from the WebGL globe (e.g. a lost context or
 * a driver that reports WebGL but then fails) and shows a fallback instead of
 * crashing the whole /map route. `onError` lets the parent flip its toggle to
 * the flat map so the failure is not silent.
 */
export class GlobeErrorBoundary extends Component<
  { fallback: ReactNode; onError?: () => void; children: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {
    this.props.onError?.();
  }

  render() {
    return this.state.hasError ? this.props.fallback : this.props.children;
  }
}
