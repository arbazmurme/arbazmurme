"use client";

import { PuzzlePieceIcon } from "@heroicons/react/24/outline";
import { useTheme } from "../../context/ThemeContext";
import TransitionLink from "../TransitionLink";

const CustomIconGame = ({ isActive, sendDataToParent }) => {
  const { theme } = useTheme();

  return (
    <div className="relative group my-2 ml-6 flex items-center">
      <TransitionLink
        href="/game"
        label="game"
        className={`rounded-full flex items-center bg-transparent transition-all duration-300 transform ${
          theme === "light" ? "hover:bg-gray-300" : "hover:bg-gray-800"
        }`}
        onClick={() => sendDataToParent(5)}
      >
        <h1 className="mx-6 translate-x-8 whitespace-nowrap uppercase tracking-widest opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
          Game
        </h1>

        <span
          className={`rounded-full p-2 transition-colors duration-300 ${
            theme === "light" ? "bg-gray-300" : "bg-gray-800"
          }`}
        >
          <PuzzlePieceIcon
            className={`h-8 w-8 transition-colors duration-300 ${
              theme === "light"
                ? isActive
                  ? "text-[#ffb400]"
                  : "text-[#000000]"
                : isActive
                  ? "text-gray-300"
                  : "text-[#ffb400]"
            }`}
          />
        </span>
      </TransitionLink>
    </div>
  );
};

export default CustomIconGame;
