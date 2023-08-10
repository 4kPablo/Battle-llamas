import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { SlMenu } from "react-icons/sl";
import { IconContext } from 'react-icons'

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center h-12 w-full max-w-7xl my-0 mx-auto px-10">

      <CustomLink className='font-space-grotesk text-black w-auto outlined-text text-2xl' to="/">
        BATTLE LLAMAS
      </CustomLink>

      <div className="hidden sm:flex font-space-grotesk text-white text-xl gap-5">
        <CustomLink to="/store">STORE</CustomLink>
        <CustomLink to="/login">LOGIN</CustomLink>
      </div>

      <div className="flex sm:hidden">
        <IconContext.Provider value={{ color: "white", size: "20px" }}>
          <SlMenu />
        </IconContext.Provider >
      </div>

    </nav>

  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <div className={isActive ? "text-slate-500" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </div>
  )
}