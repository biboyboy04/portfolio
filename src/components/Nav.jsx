import { HiHome, HiUser, HiViewColumns, HiEnvelope } from "react-icons/hi2";

export const navData = [
  { name: "home", path: "#home", icon: <HiHome /> },
  { name: "about", path: "#about", icon: <HiUser /> },
  // { name: "services", path: "/services", icon: <HiRectangleGroup /> },
  { name: "works", path: "#works", icon: <HiViewColumns /> },
  // {
  //   name: "testimonials",
  //   path: "/testimonials",
  //   icon: <HiChatBubbleBottomCenterText />,
  // },
  {
    name: "contact",
    path: "#contact",
    icon: <HiEnvelope />,
  },
];

const Nav = () => {
  return (
    <nav className="fixed bottom-0 right-0 z-10 flex h-max w-full flex-col items-center gap-y-4 lg:right-[2%] lg:h-screen lg:w-16 lg:max-w-lg lg:justify-center">
      {/* inner */}
      <div className="flex h-[80px] w-full items-center justify-between gap-y-10 bg-white/10 px-4 py-8 text-3xl backdrop-blur-sm md:px-5 lg:h-max  lg:flex-col lg:justify-center  lg:rounded-full lg:text-xl xl:px-0">
        {navData.map((link, index) => {
          return (
            <a href={link.path} key={index}>
              <div
                className={` group relative flex items-center text-white transition-all duration-300 hover:text-black`}
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
            </a>
          );
        })}
      </div>
    </nav>
  );
};
export default Nav;
