import ThemeToggleButton from "./ThemeToggleButton";
import CustomIconHome from "./MainSidebar/CustomIconHome";
import CustomIconAbout from "./MainSidebar/CustomIconAbout";
import CustomIconPortfolio from "./MainSidebar/CustomIconPortfolio";
import CustomIconContact from "./MainSidebar/CustomIconContact";
import CustomIconWork from "./MainSidebar/CustomIconWork";
import BottomNavigation from "./temp";

const Sidebar = () => {
  return (
    <>
      <div className="fixed top-0 right-0 h-screen p-6">
        <ThemeToggleButton />
      </div>
      {/* SidebarNavigation */}
      <div className="hidden md:flex">
        <div className="fixed right-0 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-4">
          <CustomIconHome />
          <CustomIconAbout />
          <CustomIconWork />
          <CustomIconPortfolio />
          <CustomIconContact />
        </div>
      </div>
      {/* BottomNavigation for mobile screens */}
      <div className="fixed bottom-0 left-0 z-50 w-full md:hidden">
        <BottomNavigation />
      </div>
    </>
  );
};

export default Sidebar;
