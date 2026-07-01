"use client";

import { useState } from "react";
import { useAuth } from "./AuthProvider";

export function AuthPanel() {
  const { user, loading, configured, signIn, signUp, signOut } = useAuth();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  if (loading) {
    return <div className="card p-5 text-sm text-slate-400">Loading account…</div>;
  }

  // Guest mode — Supabase not configured. Saves still work via localStorage.
  if (!configured) {
    return (
      <div className="card p-5">
        <div className="flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-signal" />
          <span className="text-sm font-medium text-white">Guest mode</span>
        </div>
        <p className="mt-2 text-sm text-slate-400">
          Your saves are stored in this browser. Connect Supabase (see{" "}
          <code className="text-slate-300">.env.example</code>) to enable
          accounts that sync across devices — your current saves will carry over
          when you first sign in.
        </p>
      </div>
    );
  }

  if (user) {
    return (
      <div className="card flex items-center justify-between gap-4 p-5">
        <div>
          <div className="text-sm text-slate-400">Signed in as</div>
          <div className="font-medium text-white">{user.email}</div>
        </div>
        <button
          type="button"
          onClick={() => signOut()}
          className="rounded-full border border-white/15 px-4 py-2 text-sm text-slate-200 hover:text-white"
        >
          Sign out
        </button>
      </div>
    );
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setMessage(null);
    const res =
      mode === "signin"
        ? await signIn(email, password)
        : await signUp(email, password);
    setBusy(false);
    if (res.error) setMessage(res.error);
    else if ("needsConfirmation" in res && res.needsConfirmation)
      setMessage("Check your email to confirm your account, then sign in.");
  }

  return (
    <div className="card p-5">
      <div className="mb-4 flex gap-2 text-sm">
        <button
          type="button"
          onClick={() => setMode("signin")}
          className={mode === "signin" ? "font-semibold text-white" : "text-slate-400"}
        >
          Sign in
        </button>
        <span className="text-slate-600">·</span>
        <button
          type="button"
          onClick={() => setMode("signup")}
          className={mode === "signup" ? "font-semibold text-white" : "text-slate-400"}
        >
          Create account
        </button>
      </div>
      <form onSubmit={onSubmit} className="space-y-3">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full rounded-lg border border-white/10 bg-abyss-900 px-3 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-signal/50 focus:outline-none"
        />
        <input
          type="password"
          required
          minLength={6}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password (min 6 characters)"
          className="w-full rounded-lg border border-white/10 bg-abyss-900 px-3 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-signal/50 focus:outline-none"
        />
        <button
          type="submit"
          disabled={busy}
          className="w-full rounded-lg bg-signal py-2.5 text-sm font-semibold text-abyss-950 hover:bg-signal-400 disabled:opacity-60"
        >
          {busy ? "…" : mode === "signin" ? "Sign in" : "Create account"}
        </button>
      </form>
      {message ? <p className="mt-3 text-sm text-slate-300">{message}</p> : null}
    </div>
  );
}
