import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

export const navData = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "about", path: "/about", icon: <HiUser /> },
  { name: "services", path: "/services", icon: <HiRectangleGroup /> },
  { name: "work", path: "/work", icon: <HiViewColumns /> },
  {
    name: "testimonials",
    path: "/testimonials",
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: "contact",
    path: "/contact",
    icon: <HiEnvelope />,
  },
];

const Nav = () => {
  return (
<<<<<<< Updated upstream
    <nav className="fixed bottom-0 z-50 flex h-max w-full flex-col items-center gap-y-4 xl:right-[2%] xl:h-screen xl:w-16 xl:max-w-md xl:justify-center">
      {/* inner */}
      <div className="flex h-[80px] w-full items-center justify-between gap-y-10 bg-white/10 px-4 py-8 text-3xl backdrop-blur-sm md:px-40 xl:h-max xl:flex-col xl:justify-center xl:rounded-full xl:px-0 xl:text-xl">
=======
    <nav className="fixed bottom-0 right-0 z-50 flex h-max w-full flex-col items-center gap-y-4 xl:right-[2%] xl:h-screen xl:w-16 xl:max-w-xl xl:justify-center">
      {/* inner */}
      <div className="flex h-[80px] w-full items-center justify-between gap-y-10 bg-white/10 px-4 py-8 text-3xl backdrop-blur-sm md:px-10 xl:h-max xl:flex-col xl:justify-center  xl:rounded-full xl:px-0 xl:text-xl">
>>>>>>> Stashed changes
        {navData.map((link, index) => {
          return (
            <div
              className={`group relative flex items-center text-white transition-all duration-300 hover:text-black`}
              to={link.path}
              key={index}
            >
              {/* tooltip */}
              <div className="absolute right-0 hidden pr-14 xl:group-hover:flex">
                <div className="text-primary relative flex items-center rounded-[3px] bg-white p-[6px] ">
                  <div className="text-[12px] font-semibold capitalize leading-none">
                    {link.name}
                  </div>
                  {/* triangle */}
                  <div className="absolute -right-2 border-y-[6px] border-l-8 border-r-0 border-solid border-y-transparent border-l-white"></div>
                </div>
              </div>
              {/* icon */}
              <div>{link.icon}</div>
            </div>
          );
        })}
      </div>
    </nav>
  );
};
export default Nav;
