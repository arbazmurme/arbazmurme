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
} from "@heroicons/react/20/solid";
import { useState } from "react";
import TransitionLink from "../components/TransitionLink"; // Import TransitionLink

const BottomNavigation = () => {
  const { theme } = useTheme();
  const pathname = usePathname();
  const [activeIndex, setActiveIndex] = useState(0);

  const iconStyles = {
    light: {
      container: "",
      icon: "text-[#0f0f0f] hover:text-[#ffb400]",
      background: "bg-gray-300",
      active: "text-[#ffb400]", // Style for active icon in light theme
    },
    dark: {
      container: "",
      icon: "text-[#ffb400] hover:text-blue-500",
      background: "bg-gray-800",
      active: "text-white", // Style for active icon in dark theme
    },
  };

  const styles = iconStyles[theme] || iconStyles.light;

  const navigationItems = [
    { href: "/", icon: HomeIcon },
    { href: "/about", icon: UserIcon },
    { href: "/work", icon: CodeBracketSquareIcon },
    { href: "/portfolio", icon: BriefcaseIcon },
    { href: "/contact", icon: EnvelopeIcon },
    { href: "/game", icon: PuzzlePieceIcon },
  ];

  return (
    <div
      className={`fixed bottom-0 left-0 z-[160] h-16 w-full ${styles.background}`}
    >
      <div className="mx-auto grid h-full w-full grid-cols-6 items-center font-medium">
        {navigationItems.map((item, index) => (
          <TransitionLink
            href={item.href}
            label="" // Empty label, as the label is not displayed here
            key={index}
            className={`group inline-flex h-full w-full min-w-0 flex-col items-center justify-center px-2 py-2 ${styles.container} cursor-pointer`}
            onClick={() => setActiveIndex(index)}
          >
            <item.icon
              className={`w-6 h-6 ${
                pathname === item.href || activeIndex === index
                  ? styles.active
                  : styles.icon
              }`}
            />
          </TransitionLink>
        ))}
      </div>
    </div>
  );
};

export default BottomNavigation;
