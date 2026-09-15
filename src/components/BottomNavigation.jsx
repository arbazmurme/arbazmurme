"use client";
import { usePathname } from "next/navigation";
import { useTheme } from "../context/ThemeContext";
import {
  HomeIcon,
  BriefcaseIcon,
  CodeBracketSquareIcon,
  UserIcon,
  EnvelopeIcon,
  PuzzlePieceIcon,
} from "@heroicons/react/24/solid";
import TransitionLink from "../components/TransitionLink";

const BottomNavigation = () => {
  const { theme } = useTheme();
  const pathname = usePathname();

  const navigationItems = [
    { href: "/", label: "Home", icon: HomeIcon },
    { href: "/about", label: "About", icon: UserIcon },
    { href: "/work", label: "Work", icon: CodeBracketSquareIcon },
    { href: "/portfolio", label: "Experience", icon: BriefcaseIcon },
    { href: "/contact", label: "Contact", icon: EnvelopeIcon },
    { href: "/game", label: "Game", icon: PuzzlePieceIcon },
  ];

  const isDark = theme === "dark";

  return (
    <nav
      aria-label="Mobile navigation"
      className={`fixed bottom-0 left-0 z-[160] h-16 w-full border-t backdrop-blur-lg transition-colors duration-300 ${
        isDark
          ? "border-white/10 bg-[#0f172a]/90 text-gray-300"
          : "border-gray-200 bg-white/90 text-gray-700 shadow-lg"
      }`}
    >
      <div className="mx-auto grid h-full w-full max-w-lg grid-cols-6 items-center px-1">
        {navigationItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <TransitionLink
              href={item.href}
              label={item.label}
              key={item.href}
              className={`group flex h-full w-full flex-col items-center justify-center gap-1 py-1 transition-all duration-200 ${
                isActive
                  ? "text-[#ffb400] font-semibold"
                  : isDark
                  ? "text-gray-400 hover:text-white"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              <div
                className={`relative flex items-center justify-center rounded-xl p-1.5 transition-all duration-300 ${
                  isActive
                    ? isDark
                      ? "bg-[#ffb400]/20 text-[#ffb400] scale-110 shadow-sm shadow-[#ffb400]/20"
                      : "bg-[#ffb400]/25 text-[#d97706] scale-110"
                    : "hover:bg-black/5 dark:hover:bg-white/5"
                }`}
              >
                <Icon className="h-5 w-5" />
              </div>
              <span className="text-[10px] tracking-tight leading-none truncate max-w-[50px]">
                {item.label}
              </span>
            </TransitionLink>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavigation;
