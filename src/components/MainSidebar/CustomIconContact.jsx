"use client";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useTheme } from "../../context/ThemeContext";
const CustomIconContact = () => {
  const { theme } = useTheme(); // Accessing the theme from the ThemeContext

  return (
    <div className="relative flex items-center group my-2 mr-2">
      {/* Icon Container with dynamic background color */}
      <Link
        href="/contact"
        className={`rounded-full flex items-center bg-transparent transition-all duration-300 transform ${
          theme === "light" ? "hover:bg-gray-300" : "hover:bg-gray-800"
        }`}
      >
        {/* Text that slides and extends on hover */}
        <h1
          className={`opacity-0 transform translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap uppercase tracking-widest px-6`}
        >
          Contact
        </h1>

        {/* Icon with dynamic background and text color */}
        <span
          className={`p-2 rounded-full transition-colors duration-300 ${
            theme === "light" ? "bg-gray-300" : "bg-gray-800"
          }`}
        >
          <EnvelopeIcon
            className={`w-8 h-8 transition-colors duration-300 ${
              theme === "light" ? "text-[#000000]" : "text-[#ffb400]"
            }`}
          />
        </span>
      </Link>
    </div>
  );
};

export default CustomIconContact;
