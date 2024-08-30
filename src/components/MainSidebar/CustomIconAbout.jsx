import { UserIcon } from "@heroicons/react/24/outline";
import { useTheme } from "../brn/ThemeContext"; // Adjust path as needed
import Link from "next/link";

const CustomIconAbout = () => {
  const { theme } = useTheme(); // Access the theme from context

  return (
    <div className="relative flex items-center group my-2 ">
      {/* Icon Container with dynamic background color */}
      <Link href={'/'}
        className={`rounded-full flex items-center bg-transparent transition-all duration-300 transform ${
          theme === "light"
            ? "bg-gray-200 hover:bg-gray-300"
            : "bg-gray-800 hover:bg-gray-700"
        }`}
      >
        {/* Text that slides and extends on hover */}
        <span
          className={`opacity-0 transform translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap lg:mx-5`}
        >
          Home
        </span>

        {/* Icon with dynamic background and text color */}
        <span
          className={`p-2 rounded-full transition-colors duration-300 ${
            theme === "light" ? "bg-gray-200" : "bg-gray-800"
          }`}
        >
          <UserIcon
            className={`w-8 h-8 transition-colors duration-300 ${
              theme === "light" ? "text-gray-500" : "text-gray-400"
            }`}
          />
        </span>
      </Link>
    </div>
  );
};

export default CustomIconAbout;
