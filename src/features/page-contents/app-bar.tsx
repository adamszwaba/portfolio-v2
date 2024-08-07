import Logo from "./logo";
import NextLink from "next/link";

const AppBar: React.FC = () => {
  return (
    <nav className="not-prose w-full bg-slate-100 p-2 shadow-md">
      <div className="container m-auto flex items-center justify-between px-2">
        <NextLink href="/" className="flex items-center">
          <Logo className="w-8 h-8 sm:h-16 sm:w-16" />
          <span className="ml-2 h-16 flex-grow pl-2 text-md sm:text-2xl font-bold leading-[4rem] sm:leading-[4rem] hover:text-teal-400 hover:underline">
            @ Adam Szwaba
          </span>
        </NextLink>
        <div className="flex gap-2">
          <NextLink
            href="/comics"
            className="text-sm sm:text-lg font-normal hover:text-teal-400 hover:underline"
          >
            Comics
          </NextLink>
          <NextLink
            href="/nwyt"
            className="text-sm sm:text-lg font-normal hover:text-teal-400 hover:underline"
          >
            NWYT
          </NextLink>
          <NextLink
            href="/about-me"
            className="text-sm sm:text-lg font-normal hover:text-teal-400 hover:underline"
          >
            About me
          </NextLink>
        </div>
      </div>
    </nav>
  );
};
export default AppBar;
