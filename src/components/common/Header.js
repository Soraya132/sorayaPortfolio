import Link from "next/link";
import Socials from "./Socials";
const Header = () => {
  return (
    <header className="w-full xl:h-[90px] relative z-30">
      <div className="w-full max-w-[1700px] mx-auto md:px-28 lg:px-36 px-5 ">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-y-6 py-8 w-full ">
          <Link href={"/"}>
            <h1 className="text-2xl 2xl:text-3xl text-white">Soraya.Dev</h1>
          </Link>
          <Socials />
        </div>
      </div>
    </header>
  );
};
export default Header;
