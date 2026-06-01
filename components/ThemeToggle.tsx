"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("theme") as Theme | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const nextTheme = saved ?? (prefersDark ? "dark" : "light");

    // Initial client hydration needs to mirror the user's saved system/theme setting.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    window.localStorage.setItem("theme", nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      title="Toggle color theme"
      className="grid h-9 w-9 place-items-center border border-foreground/10 bg-background/80 text-foreground/70 transition-all duration-300 hover:border-accent/40 hover:text-accent"
    >
      <span className="text-[15px]" aria-hidden="true">
        {!mounted ? "◐" : theme === "dark" ? "☀" : "☾"}
      </span>
    </button>
  );
}
