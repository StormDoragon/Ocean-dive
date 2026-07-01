"use client";

import { AuthProvider } from "./AuthProvider";
import { SavedProvider } from "./SavedProvider";

/** Client provider tree wrapping the app: auth + saved-discoveries state. */
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <SavedProvider>{children}</SavedProvider>
    </AuthProvider>
  );
}
