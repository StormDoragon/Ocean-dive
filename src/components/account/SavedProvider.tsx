"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { getSupabaseClient } from "@/lib/supabase/client";
import { useAuth } from "./AuthProvider";

const LOCAL_KEY = "bs.saved";

interface SavedContextValue {
  saved: Set<string>;
  isSaved: (slug: string) => boolean;
  toggle: (slug: string) => void;
  loading: boolean;
  /** Where saves currently persist. */
  source: "supabase" | "local";
}

const SavedContext = createContext<SavedContextValue | null>(null);

function readLocal(): string[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(LOCAL_KEY) ?? "[]");
  } catch {
    return [];
  }
}

function writeLocal(slugs: string[]) {
  try {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(slugs));
  } catch {
    /* ignore quota / private-mode errors */
  }
}

export function SavedProvider({ children }: { children: React.ReactNode }) {
  const { user, configured } = useAuth();
  const [saved, setSaved] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);
  const usingSupabase = configured && Boolean(user);
  const source: "supabase" | "local" = usingSupabase ? "supabase" : "local";
  const migratedFor = useRef<string | null>(null);
  // Mirror of `saved` so toggle() can compute the next set synchronously
  // (and stay correct across rapid toggles) without side effects inside a
  // React state updater.
  const savedRef = useRef(saved);
  useEffect(() => {
    savedRef.current = saved;
  }, [saved]);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      const supabase = getSupabaseClient();

      if (usingSupabase && supabase && user) {
        // On first load for this user, migrate any guest (localStorage) saves.
        if (migratedFor.current !== user.id) {
          const guest = readLocal();
          if (guest.length > 0) {
            const { error } = await supabase
              .from("saved_discoveries")
              .upsert(
                guest.map((slug) => ({ user_id: user.id, discovery_slug: slug })),
                { onConflict: "user_id,discovery_slug" },
              );
            // Only clear the guest saves once the write actually succeeded, and
            // only mark this user migrated then — otherwise a failed/again-retryable
            // migration would silently drop the guest collection.
            if (error) {
              console.error("Guest-save migration failed; keeping local saves.", error);
            } else {
              writeLocal([]);
              migratedFor.current = user.id;
            }
          } else {
            migratedFor.current = user.id;
          }
        }
        const { data } = await supabase
          .from("saved_discoveries")
          .select("discovery_slug");
        if (!cancelled) {
          setSaved(new Set((data ?? []).map((r) => r.discovery_slug as string)));
          setLoading(false);
        }
        return;
      }

      if (!cancelled) {
        setSaved(new Set(readLocal()));
        setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [usingSupabase, user]);

  const toggle = useCallback(
    (slug: string) => {
      const next = new Set(savedRef.current);
      const adding = !next.has(slug);
      if (adding) next.add(slug);
      else next.delete(slug);
      savedRef.current = next;
      setSaved(next);

      const supabase = getSupabaseClient();
      if (usingSupabase && supabase && user) {
        const op = adding
          ? supabase
              .from("saved_discoveries")
              .insert({ user_id: user.id, discovery_slug: slug })
          : supabase
              .from("saved_discoveries")
              .delete()
              .eq("user_id", user.id)
              .eq("discovery_slug", slug);
        // If the remote write fails, fall back to persisting locally so the
        // change is not silently lost, and surface the error.
        void op.then(({ error }) => {
          if (error) {
            console.error("Save sync failed; persisting locally as a fallback.", error);
            writeLocal([...savedRef.current]);
          }
        });
      } else {
        writeLocal([...next]);
      }
    },
    [usingSupabase, user],
  );

  const value = useMemo<SavedContextValue>(
    () => ({
      saved,
      isSaved: (slug: string) => saved.has(slug),
      toggle,
      loading,
      source,
    }),
    [saved, toggle, loading, source],
  );

  return <SavedContext.Provider value={value}>{children}</SavedContext.Provider>;
}

export function useSaved(): SavedContextValue {
  const ctx = useContext(SavedContext);
  if (!ctx) throw new Error("useSaved must be used within SavedProvider");
  return ctx;
}
