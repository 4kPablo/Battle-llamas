import useWindowDimensions from "../../windowDimensions";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function HeroCard() {
  const { height, width } = useWindowDimensions();

  if (width > 880) {
    // Versión card grande a la derecha de la portada 💻
    return (
      <div className="flex absolute flex-col justify-between w-64 h-96 xl:w-[310px] xl:h-[424px] top-40 right-5 bg-black p-6 text-left ">
        <p className="text-white text-2xl xl:text-3xl">
          La guerra nunca fue tan suave. <br />
          Descubre nuestras alpacas de combate de alta performance.
        </p>
        <div className="flex flex-col gap-2.5">
          <CustomLink
            className="flex bg-[#a6121f] border-[#a6121f]  border-2 place-content-center rounded-xl text-white p-2"
            onClick={scrollToTop}
            to="/store"
          >
            <p className="text-sm xl:text-lg">TIENDA</p>
          </CustomLink>
          <CustomLink
            className="flex border-[#a6121f]  border-2 place-content-center rounded-xl text-white p-2"
            onClick={scrollToTop}
            to="/login"
          >
            <p className="text-sm xl:text-lg">LOGIN</p>
          </CustomLink>
        </div>
      </div>
    );
  } else {
    // Versión como mini banner debajo de la portada 📱
    return (
      <div className="flex justify-between items-center w-full top-40 right-5 bg-black p-6 gap-3 text-left ">
        <p className="text-white text-md min-[423px]:text-xl">
          La guerra nunca fue tan suave. <br />
          Descubre nuestras alpacas de combate de alta performance.
        </p>
        <div className="flex flex-col gap-2.5 w-1/2 sm:w-3/12">
          <CustomLink
            className="flex bg-[#a6121f] border-[#a6121f]  border-2 place-content-center rounded-xl text-white p-2"
            onClick={scrollToTop}
            to="/store"
          >
            <p className="text-sm xl:text-lg">TIENDA</p>
          </CustomLink>
          <CustomLink
            className="flex border-[#a6121f]  border-2 place-content-center rounded-xl text-white p-2"
            onClick={scrollToTop}
            to="/login"
          >
            <p className="text-sm xl:text-lg">LOGIN</p>
          </CustomLink>
        </div>
      </div>
    );
  }
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <div className={isActive ? "text-slate-500" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </div>
  );
}

export default HeroCard;
