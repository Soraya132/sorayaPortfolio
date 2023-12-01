"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiEnvelope,
} from "react-icons/hi2";

// nav data
export const navData = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "about", path: "/about", icon: <HiUser /> },
  { name: "services", path: "/services", icon: <HiRectangleGroup /> },
  { name: "work", path: "/work", icon: <HiViewColumns /> },
  { name: "contact", path: "/contact", icon: <HiEnvelope /> },
];

const Nav = () => {
  const pathName = usePathname();
  return (
    <nav
      className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 w-full xl:w-16
   xl:top-0 xl:max-w-md xl:h-screen"
    >
      <div
        className="flex flex-row w-full xl:flex-col items-center
     justify-between xl:justify-center gap-y-10
     px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-md text-3xl xl:text-xl xl:rounded-full
     "
      >
        {navData.map((link, index) => {
          return (
            <Link
              href={link.path}
              key={index}
              className={`${link.path === pathName && "text-accent"}
        relative flex items-center group  hover:text-accent transition-all duration-300
        `}
            >
              {/* tooltips */}
              <div className="absolute pr-14 pb-14 xl:pb-0 xl:right-2 hidden group-hover:flex">
                <div className="bg-white relative text-primary items-center p-[6px]  rounded-sm">
                  <div className="text-[12px] leading-none font-semibold capitalize">
                    {link.name}
                  </div>
                </div>
              </div>
              <div>{link.icon}</div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
export default Nav;
