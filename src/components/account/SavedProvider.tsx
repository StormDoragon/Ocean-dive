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

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      const supabase = getSupabaseClient();

      if (usingSupabase && supabase && user) {
        // On first load for this user, migrate any guest (localStorage) saves.
        if (migratedFor.current !== user.id) {
          migratedFor.current = user.id;
          const guest = readLocal();
          if (guest.length > 0) {
            await supabase
              .from("saved_discoveries")
              .upsert(
                guest.map((slug) => ({ user_id: user.id, discovery_slug: slug })),
                { onConflict: "user_id,discovery_slug" },
              );
            writeLocal([]);
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
      setSaved((prev) => {
        const next = new Set(prev);
        const adding = !next.has(slug);
        if (adding) next.add(slug);
        else next.delete(slug);

        const supabase = getSupabaseClient();
        if (usingSupabase && supabase && user) {
          if (adding) {
            void supabase
              .from("saved_discoveries")
              .insert({ user_id: user.id, discovery_slug: slug });
          } else {
            void supabase
              .from("saved_discoveries")
              .delete()
              .eq("user_id", user.id)
              .eq("discovery_slug", slug);
          }
        } else {
          writeLocal([...next]);
        }
        return next;
      });
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
