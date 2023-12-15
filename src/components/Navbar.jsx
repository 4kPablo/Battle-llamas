import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { PiShoppingCartSimpleBold as CartIcon } from 'react-icons/pi';
import { IoClose as CloseIcon } from "react-icons/io5";
import { IoMenu as MenuIcon } from "react-icons/io5";
import { useState } from 'react';

const Navbar = ({
  allLlamas,
  total,
  llamaCount,
  onAddLlama,
  onRemoveLlama,
  onDeleteCart,
  onBuyCart
}) => {
  const [isCartActive, setisCartActive] = useState(false);
  const [askingDeletion, setAskingDeletion] = useState(false);
  const [askingBuy, setAskingBuy] = useState(false);
  const [isNavActive, setIsNavActive] = useState(false)
  // const [productsInCart, setProductsInCart] = useState([])

  const toggleCart = () => {
    setisCartActive(!isCartActive);
  }

  const toggleMobileNav = () => {
    setIsNavActive(!isNavActive);
  }

  return (
    <>
      <nav className="flex fixed bg-black select-none	justify-center items-center font-['Space_Grotesk'] z-30 h-12 w-full my-0 mx-auto px-10">
        <div className="flex justify-between w-full max-w-7xl">
          {/* Logo */}
          <CustomLink onClick={scrollToTop} className='font-space-grotesk text-black w-auto outlined-text text-2xl' to="/">
            BATTLE LLAMAS
          </CustomLink>

          {/* Links (💻) */}
          <div className="hidden sm:flex items-center font-space-grotesk text-white text-xl gap-5">
            <CustomLink onClick={scrollToTop} to="/store">TIENDA</CustomLink>
            <CustomLink onClick={scrollToTop} to="/about">NOSOTROS</CustomLink>
            <CustomLink onClick={scrollToTop} to="/login">ACCEDER</CustomLink>

            {/* <IconContext.Provider value={{className: "bg-red-300" }}> */}
            <div className="flex items-center justify-center place-content-center text-center">
              <CartIcon className="cursor-pointer" onClick={toggleCart}></CartIcon>
              { llamaCount ? 
                <div className="flex text-[#D9BD8B] text-base ml-1">
                  <span>{llamaCount}</span>
                </div> : <></>}
            </div>
          </div>

          {/* Nav móvil (📱) */}
          <div className="flex gap-5 sm:hidden">
            <div className="flex items-center justify-center place-content-center text-center">
                <CartIcon className="text-white text-xl cursor-pointer" onClick={toggleCart}></CartIcon>
                { llamaCount ? 
                  <div className="flex text-[#D9BD8B] text-base ml-1">
                    <span>{llamaCount}</span>
                  </div> : <></>}
              </div>
            <div
              onClick={toggleMobileNav}
              className="flex items-center hover:cursor-pointer sm:hidden">
                <MenuIcon className={ isNavActive ? "hidden" : "text-white text-2xl" }/>
                <CloseIcon className={ isNavActive ? "relative z-50 text-white text-2xl" : "hidden" } />
            </div>

            <div className={ isNavActive
              ? "flex flex-col absolute bg-black select-none justify-center items-center font-space-grotesk text-white text-2xl transition-all ease-out top-0 left-0 gap-7 w-full py-10 z-10 my-0 mx-auto"
              : "flex flex-col absolute bg-black select-none justify-center items-center font-space-grotesk text-white text-2xl transition-all ease-out -translate-y-[120%] z-10 top-0 left-0 gap-7 w-full mt-12 py-10 my-0 mx-auto"}>
              <CustomLink onClick={scrollToTop} to="/store">STORE</CustomLink>
              <CustomLink onClick={scrollToTop} to="/login">LOGIN</CustomLink>
              <CustomLink onClick={scrollToTop} to="/about">ABOUT US</CustomLink>
            </div>
          </div>
        </div>
      </nav>

      {/* Confirmación de borrar carrito */}
      <section className={ askingDeletion
          ? "flex flex-col fixed place-content-center items-center h-screen w-full sm:w-96 right-0 z-50 top-12 bg-[#000c] sm:bg-transparent sm:backdrop-blur-sm text-white"
          : "hidden" }>
          <div className="flex flex-col m-3 w-72 h-28 gap-2 px-2 z-30 place-content-center rounded-lg text-white bg-black outline outline-1 outline-white">
            <p className="text-2xl text-center">¿Borrar carrito?</p>
            <div className="flex text-xl place-content-around">
              <button 
                className="hover:bg-[#a6121f]  rounded-xl py-2 px-8"
                onClick={() => {
                  setAskingDeletion(false)
                  onDeleteCart()
                  toggleCart()}}>
                  Borrar
                </button>
              <button
              className="hover:bg-white hover:text-black rounded-xl py-2 px-7"
              onClick={() => {
                setAskingDeletion(false)}}>
                Cancelar
              </button>
            </div>
          </div>
        </section>

        {/* Confirmación de comprar carrito */}
        <section className={ askingBuy
          ? "flex flex-col fixed place-content-center items-center h-screen w-full sm:w-96 right-0 z-50 top-12 bg-[#000c] sm:bg-transparent sm:backdrop-blur-sm text-white"
          : "hidden" }>
          <div className="flex flex-col m-3 w-80 h-28 gap-2 px-2 z-30 place-content-center rounded-lg text-white bg-black outline outline-1 outline-white">
            <p className="text-2xl text-center">¿Proceder con la compra?</p>
            <div className="flex text-xl place-content-around">
              <button 
                className="hover:bg-[#D9BD8B] hover:text-black rounded-xl py-2 px-8"
                onClick={() => {
                  setAskingBuy(false)
                  onBuyCart()
                  toggleCart()}}>
                  Comprar
                </button>
              <button
              className="hover:bg-white hover:text-black rounded-xl py-2 px-7"
              onClick={() => {
                setAskingBuy(false) }}>
                  Cancelar
              </button>
            </div>
          </div>
        </section>

      {/* Carrito */}
      <div className={ isCartActive
        ? "flex flex-col fixed h-screen w-full sm:w-96 right-0 gap-3 top-12 p-4 z-40 bg-black text-white transition-all ease-out"
        : "flex flex-col fixed h-screen w-full sm:w-96 right-0 gap-3 top-12 p-4 z-40 bg-black text-white translate-x-full transition-all ease-out" }>
        <h1 className=" text-xl text-center mt-4 text-[#D9BD8B]">Carrito</h1>
        { llamaCount ? 
          <>
          {  }
            {allLlamas.map((product) => (
              <CartProduct
                product={product}
                allLlamas={allLlamas}
                total={total}
                llamaCount={llamaCount}
                onAddLlama={onAddLlama}
                onRemoveLlama={onRemoveLlama}
                onDeleteCart={onDeleteCart}
              />
            ))}
              { total ?
                <div className="flex flex-col gap-2 text-xl py-2 w-full">
                  <div className="border-t-2 border-dotted"></div>
                  <div className="flex flex-row w-full place-content-between">
                    <h3>Total:</h3>
                    <span className="text-xl">$ {total}</span>
                  </div>
                  <div className="flex">
                    <button onClick={() => {setAskingBuy(true); console.log(askingBuy)}} className=' text-center py-2 w-full rounded-lg bg-white hover:bg-[#a6121f] text-black hover:text-white'>
                      Comprar
                    </button>
                  </div>
                    <p
                      className="flex my-1 text-sm text-center place-content-center select-none hover:cursor-pointer hover:text-[#D9BD8B]"
                      onClick={() => setAskingDeletion(true)}>
                      Vaciar carrito
                    </p>
                </div> : <></> }
          </>
        :
          <>
            <p className="text-center gap-1 p-2 mb-2 w-full items-center rounded-xl select-none">
              El carrito está vacío
            </p>
          </>
        }
      </div>
    </>
  )
}

const CartProduct = ({
  product,
  onAddLlama,
  onRemoveLlama,
  }) => {

  return (
  <li className="flex gap-2 w-full items-center rounded-xl select-none" key={product.id}>
    <img
      className="flex flex-1 w-20 object-cover rounded-xl"
      src={product.img}
    />

    <div
      className="flex flex-4 flex-col justify-center w-full p-1 hover:cursor-pointer">
      <p className=" text-base font-bold text-white ">
        {product.title}
      </p>
    </div>

    <div className="flex flex-col flex-4 min-w-[73px] gap-1 justify-center items-center text-center">
      <p className=" text-xl text-white">
        $ {product.price}
      </p>
      <div className='flex rounded-lg bg-[#a6121f]'>
      <button className=' text-center font-bold py-0.5 px-2.5 rounded-lg border-1 hover:text-[#D9BD8B] text-white text-lg' onClick={() => onRemoveLlama(product)}>-</button> 
      <button className=' text-center text-lg py-0.5 px-1 text-white'>{product.quantity}</button>
      <button className=' text-center font-bold py-0.5 px-2.5 rounded-lg border-1 hover:text-[#D9BD8B] text-white text-lg' onClick={() => onAddLlama(product)}>+</button>
      </div>
    </div>
  </li>
  )
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  // setIsNavActive(false)
  // setisCartActive(false)
  // Estas dos acciones hacen que se recargue la página al cambiar de sección
};

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

export default Navbar;