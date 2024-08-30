import ThemeSwitcher from "./brn/ThemeSwitcher";
import CustomIconAbout from "./MainSidebar/CustomIconHome";
import CustomIconHome from "./MainSidebar/CustomIconAbout";

const Sidebar = () => {
  return (
    <>
      <div className="fixed top-0 right-0 h-screen p-4">
        <ThemeSwitcher />
      </div>
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 flex flex-col items-center p-4 space-y-4">
        <CustomIconHome />
        <CustomIconAbout />
      </div>
    </>
  );
};

export default Sidebar;
