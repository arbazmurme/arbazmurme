"use client";

import { useTheme } from "../context/ThemeContext";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`group relative flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 shadow-md hover:scale-110 active:scale-95 ${
        isDark
          ? "border-white/20 bg-slate-900/80 text-yellow-400 hover:border-yellow-400/50 hover:bg-slate-800"
          : "border-gray-300 bg-white/90 text-amber-500 hover:border-amber-400 hover:bg-amber-50"
      }`}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <SunIcon className="h-6 w-6 transition-transform duration-300 group-hover:rotate-45" />
      ) : (
        <MoonIcon className="h-6 w-6 text-slate-700 transition-transform duration-300 group-hover:-rotate-12" />
      )}
    </button>
  );
};

export default ThemeSwitcher;
