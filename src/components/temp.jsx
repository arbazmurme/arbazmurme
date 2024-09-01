"use client";
import Link from "next/link";
import { useTheme } from "../context/ThemeContext"; // Make sure this path is correct
import {
  HomeIcon,
  BriefcaseIcon,
  CodeBracketSquareIcon,
  UserIcon,
  EnvelopeIcon,
} from "@heroicons/react/20/solid";

const BottomNavigation = () => {
  const { theme } = useTheme(); // Accessing the theme from the ThemeContext

  const iconStyles = {
    light: {
      container: "",
      icon: "text-[#0f0f0f] hover:text-[#ffb400]",
      background: "bg-gray-300",
    },
    dark: {
      container: "",
      icon: "text-[#ffb400] hover:text-blue-500",
      background: "bg-gray-800",
    },
  };

  const styles = iconStyles[theme] || iconStyles.light;

  return (
    <div
      className={`fixed bottom-0 left-0 z-50 w-full h-16 ${styles.background}`}
    >
      <div className="grid h-full max-w-lg grid-cols-5 mx-auto items-center font-medium">
        <Link href="/" passHref>
          <span
            className={`inline-flex flex-col items-center justify-center px-4 py-2 ${styles.container} group cursor-pointer`}
          >
            <HomeIcon className={`w-6 h-6 ${styles.icon}`} />
          </span>
        </Link>
        <Link href="/about" passHref>
          <span
            className={`inline-flex flex-col items-center justify-center px-4 py-2 ${styles.container} group cursor-pointer`}
          >
            <UserIcon className={`w-6 h-6 ${styles.icon}`} />
          </span>
        </Link>
        <Link href="/work" passHref>
          <span
            className={`inline-flex flex-col items-center justify-center px-4 py-2 ${styles.container} group cursor-pointer`}
          >
            <CodeBracketSquareIcon className={`w-6 h-6 ${styles.icon}`} />
          </span>
        </Link>
        <Link href="/Portfolio" passHref>
          <span
            className={`inline-flex flex-col items-center justify-center px-4 py-2 ${styles.container} group cursor-pointer`}
          >
            <BriefcaseIcon className={`w-6 h-6 ${styles.icon}`} />
          </span>
        </Link>

        <Link href="/contact" passHref>
          <span
            className={`inline-flex flex-col items-center justify-center px-4 py-2 ${styles.container} group cursor-pointer`}
          >
            <EnvelopeIcon className={`w-6 h-6 ${styles.icon}`} />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default BottomNavigation;
