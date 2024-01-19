import Logo from './logo'
import NextLink from 'next/link'

const AppBar: React.FC = () => {
  return (
    <nav className="not-prose w-full p-2 shadow-md dark:bg-slate-900 bg-slate-100">
      <div className="container flex items-center justify-between m-auto">
        <NextLink href="/" className="flex items-center">
          <Logo height={64} width={64} />
          <span className=" ml-2 h-16 pl-2 flex-grow leading-[4rem] hover:underline font-bold text-2xl">
            @ Adam Szwaba
          </span>
        </NextLink>
      </div>
    </nav>
  )
}
export default AppBar
