import { useEffect, useRef, useState } from "react";

type Theme = "light" | "dark";
const STORAGE_KEY = "portfolio-theme";
const SYSTEM_THEME = "(prefers-color-scheme: dark)";

function readPreference(): Theme | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === "light" || value === "dark" ? value : null;
  } catch {
    return null;
  }
}

export function useTheme() {
  const preference = useRef<Theme | null>(readPreference());
  const [theme, setTheme] = useState<Theme>(() =>
    preference.current ?? (window.matchMedia(SYSTEM_THEME).matches ? "dark" : "light")
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      "content", theme === "dark" ? "#191d19" : "#f8f7f3"
    );
  }, [theme]);

  useEffect(() => {
    const media = window.matchMedia(SYSTEM_THEME);
    const syncSystem = () => {
      if (!preference.current) setTheme(media.matches ? "dark" : "light");
    };
    const syncStorage = (event: StorageEvent) => {
      if (event.key !== STORAGE_KEY && event.key !== null) return;
      preference.current = readPreference();
      setTheme(preference.current ?? (media.matches ? "dark" : "light"));
    };
    syncSystem();
    media.addEventListener("change", syncSystem);
    window.addEventListener("storage", syncStorage);
    return () => {
      media.removeEventListener("change", syncSystem);
      window.removeEventListener("storage", syncStorage);
    };
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    preference.current = next;
    setTheme(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // The toggle still works when browser storage is unavailable.
    }
  };

  return { theme, toggleTheme };
}
