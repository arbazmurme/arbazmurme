"use client";
import { usePathname } from "next/navigation";
import ThemeToggleButton from "./ThemeToggleButton";
import CustomIconHome from "./MainSidebar/CustomIconHome";
import CustomIconAbout from "./MainSidebar/CustomIconAbout";
import CustomIconWork from "./MainSidebar/CustomIconWork";
import CustomIconportfolio from "./MainSidebar/CustomIconPortfolio";
import CustomIconContact from "./MainSidebar/CustomIconContact";
import CustomIconGame from "./MainSidebar/CustomIconGame";
import BottomNavigation from "./BottomNavigation";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <>
      <div className="fixed top-0 right-0 z-[140] p-6">
        <ThemeToggleButton />
      </div>
      {/* Desktop Sidebar Navigation */}
      <div className="hidden md:flex">
        <div className="fixed right-0 top-1/2 z-[140] flex -translate-y-1/2 flex-col items-center space-y-4">
          <CustomIconHome
            isActive={pathname === "/"}
          />
          <CustomIconAbout
            isActive={pathname === "/about"}
          />
          <CustomIconWork
            isActive={pathname === "/work"}
          />
          <CustomIconportfolio
            isActive={pathname === "/portfolio"}
          />
          <CustomIconContact
            isActive={pathname === "/contact"}
          />
          <CustomIconGame
            isActive={pathname === "/game"}
          />
        </div>
      </div>
      {/* Bottom Navigation for mobile screens */}
      <div className="fixed bottom-0 left-0 z-50 w-full md:hidden">
        <BottomNavigation />
      </div>
    </>
  );
};

export default Sidebar;
