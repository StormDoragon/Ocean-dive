import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Supabase seam. When NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY
 * are set, accounts + saved discoveries persist to Supabase. Otherwise the app
 * runs in "guest mode" and saves to localStorage, so the feature works with no
 * backend at all.
 *
 * ── To enable real accounts later ──────────────────────────────────────────
 *   1. Create a project at https://supabase.com and run the SQL in
 *      supabase/migrations/0001_init.sql (SQL editor or the Supabase CLI).
 *   2. Add to .env.local (see .env.example):
 *        NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
 *        NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
 *   3. Restart. Sign-in appears and saves sync to the signed-in account.
 */

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export function isSupabaseConfigured(): boolean {
  return Boolean(url && anonKey);
}

let cached: SupabaseClient | null = null;

/** Returns a singleton browser client, or null when Supabase isn't configured. */
export function getSupabaseClient(): SupabaseClient | null {
  if (!isSupabaseConfigured()) return null;
  if (!cached) {
    cached = createClient(url as string, anonKey as string, {
      auth: { persistSession: true, autoRefreshToken: true },
    });
  }
  return cached;
}
