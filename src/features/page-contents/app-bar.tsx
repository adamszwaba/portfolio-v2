import Logo from "./logo";
import NextLink from "next/link";

const AppBar: React.FC = () => {
  return (
    <nav className="not-prose w-full bg-slate-100 p-2 shadow-md dark:bg-slate-900">
      <div className="container m-auto flex items-center justify-between px-6">
        <NextLink href="/" className="flex items-center">
          <Logo height={64} width={64} />
          <span className="ml-2 h-16 flex-grow pl-2 text-2xl font-bold leading-[4rem] hover:text-teal-400 hover:underline">
            @ Adam Szwaba
          </span>
        </NextLink>
        <NextLink
          href="/about-me"
          className="text-xl font-normal hover:text-teal-400 hover:underline"
        >
          About me
        </NextLink>
      </div>
    </nav>
  );
};
export default AppBar;
