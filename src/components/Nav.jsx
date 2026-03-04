import { HiBriefcase, HiEnvelope, HiHome, HiUser, HiViewColumns } from "react-icons/hi2";

const navData = [
  { name: "home", path: "#home", icon: <HiHome /> },
  { name: "about", path: "#about", icon: <HiUser /> },
  { name: "experience", path: "#experience", icon: <HiBriefcase /> },
  { name: "works", path: "#works", icon: <HiViewColumns /> },
  { name: "contact", path: "#contact", icon: <HiEnvelope /> },
];

const Nav = () => {
  return (
    <nav className="fixed bottom-0 right-0 z-10 flex h-max w-full flex-col items-center gap-y-4 lg:right-[2%] lg:h-screen lg:w-16 lg:max-w-lg lg:justify-center">
      <div className="nav-inner flex h-[80px] w-full items-center justify-between gap-y-10 px-4 py-8 text-3xl md:px-5 lg:h-max lg:flex-col lg:justify-center lg:text-xl xl:px-0">
        {navData.map((link) => {
          return (
            <a href={link.path} key={link.name} className="custom-link">
              <div className="group relative flex items-center transition-all duration-300">
                <div className="absolute right-0 hidden pr-14 xl:group-hover:flex">
                  <div className="aug-chip relative flex items-center p-[6px]">
                    <div className="text-[12px] font-semibold capitalize leading-none">{link.name}</div>
                    <div className="absolute -right-2 border-y-[6px] border-l-8 border-r-0 border-solid border-y-transparent border-l-[rgba(5,8,16,0.9)]"></div>
                  </div>
                </div>
                <div className="aug-tab nav-link grid place-items-center">{link.icon}</div>
              </div>
            </a>
          );
        })}
      </div>
    </nav>
  );
};
export default Nav;
