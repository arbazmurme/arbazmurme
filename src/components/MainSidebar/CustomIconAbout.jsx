"use client";
import { UserIcon } from "@heroicons/react/24/outline";
import { useTheme } from "../../context/ThemeContext";
import TransitionLink from "../TransitionLink"; // Import TransitionLink

const CustomIconAbout = ({ isActive, sendDataToParent }) => {
  const { theme } = useTheme();
  const handleClick = () => {
    sendDataToParent(1);
  };

  return (
    <div className="relative flex items-center group my-2 ml-4">
      {/* TransitionLink wrapping the icon and text */}
      <TransitionLink
        href="/about"
        label="about"
        className={`rounded-full flex items-center bg-transparent transition-all duration-300 transform ${
          theme === "light" ? "hover:bg-gray-300" : "hover:bg-gray-800"
        }`}
        onClick={handleClick}
      >
        {/* Text that slides and extends on hover */}
        <h1
          className={`opacity-0 transform translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap uppercase tracking-widest mx-6`}
        >
          about
        </h1>

        {/* Icon with dynamic background and text color */}
        <span
          className={`p-2 rounded-full transition-colors duration-300 ${
            theme === "light" ? "bg-gray-300" : "bg-gray-800"
          }`}
        >
          <UserIcon
            className={`w-8 h-8 transition-colors duration-400 ${
              theme === "light"
                ? isActive
                  ? "text-[#ffb400]" // Active color for light theme
                  : "text-[#000000]" // Default color for light theme
                : isActive
                ? "text-gray-300" // Active color for dark theme
                : "text-[#ffb400]" // Default color for dark theme
            }`}
          />
        </span>
      </TransitionLink>
    </div>
  );
};

export default CustomIconAbout;
