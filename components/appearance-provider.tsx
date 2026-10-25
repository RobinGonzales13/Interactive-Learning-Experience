"use client";

import {
  createContext,
  useContext,
  useLayoutEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";

type Appearance = "dark" | "light";

type AppearanceContextValue = {
  appearance: Appearance;
  toggleAppearance: () => void;
};

const AppearanceContext = createContext<AppearanceContextValue | null>(null);
const APPEARANCE_KEY = "learning-experience-appearance";
const APPEARANCE_CHANGE_EVENT = "learning-experience-appearance-change";

function getAppearance(): Appearance {
  const storedAppearance = window.localStorage.getItem(APPEARANCE_KEY);

  return storedAppearance === "light" || storedAppearance === "dark"
    ? storedAppearance
    : "dark";
}

function subscribeToAppearance(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener(APPEARANCE_CHANGE_EVENT, onChange);

  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(APPEARANCE_CHANGE_EVENT, onChange);
  };
}

function getServerAppearance(): Appearance {
  return "dark";
}

export function AppearanceProvider({ children }: { children: ReactNode }) {
  const appearance = useSyncExternalStore(
    subscribeToAppearance,
    getAppearance,
    getServerAppearance,
  );

  useLayoutEffect(() => {
    document.documentElement.classList.toggle("dark", appearance === "dark");
    document.documentElement.dataset.appearance = appearance;
  }, [appearance]);

  const value = useMemo(
    () => ({
      appearance,
      toggleAppearance: () => {
        const nextAppearance = appearance === "dark" ? "light" : "dark";
        window.localStorage.setItem(APPEARANCE_KEY, nextAppearance);
        window.dispatchEvent(new Event(APPEARANCE_CHANGE_EVENT));
      },
    }),
    [appearance],
  );

  return (
    <AppearanceContext.Provider value={value}>
      {children}
    </AppearanceContext.Provider>
  );
}

export function useAppearance() {
  const context = useContext(AppearanceContext);

  if (!context) {
    throw new Error("useAppearance must be used within an AppearanceProvider");
  }

  return context;
}
