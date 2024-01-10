import { React, useContext, useState } from 'react';
import { PiShoppingCartSimpleBold as CartIcon } from 'react-icons/pi';
import { IoClose as CloseIcon } from 'react-icons/io5';
import { IoMenu as MenuIcon } from 'react-icons/io5';
import { CustomLink } from './CustomLink';
import { Context } from './cart/CartContext';
import { Cart } from './cart/Cart';

export const Navbar = () => {
  const [isNavActive, setIsNavActive] = useState(false);
  const { isCartActive } = useContext(Context);
  const { setIsCartActive } = useContext(Context);
  const { llamaCount } = useContext(Context);

  return (
    <>
      <nav className='flex fixed bg-black select-none	justify-center items-center z-30 h-12 w-full my-0 mx-auto px-10'>
        <div className='flex justify-between w-full max-w-7xl'>
          {/* Logo */}
          <CustomLink
            className='font-space-grotesk text-black w-auto outlined-text text-2xl'
            to='/'
          >
            BATTLE LLAMAS
          </CustomLink>

          {/* Links (💻) */}
          <div className='hidden min-[620px]:flex items-center text-white text-xl gap-5'>
            <CustomLink to='/store'>TIENDA</CustomLink>
            <CustomLink to='/about'>NOSOTROS</CustomLink>
            <CustomLink to='/login'>ACCEDER</CustomLink>

            {/* <IconContext.Provider value={{className: "bg-red-300" }}> */}
            <div className='flex items-center justify-center place-content-center text-center'>
              <CartIcon
                className='cursor-pointer'
                onClick={() => {
                  setIsCartActive(!isCartActive);
                }}
              ></CartIcon>
              {llamaCount ? (
                <div className='flex text-[#D9BD8B] text-base ml-1'>
                  <span>{llamaCount}</span>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>

          {/* Nav móvil (📱) */}
          <nav className='flex gap-5 min-[620px]:hidden'>
            <div className='flex items-center justify-center place-content-center text-center'>
              <CartIcon
                className='text-white text-xl cursor-pointer'
                onClick={() => {
                  setIsCartActive(!isCartActive);
                }}
              ></CartIcon>
              {llamaCount ? (
                <div className='flex text-[#D9BD8B] text-base ml-1'>
                  <span>{llamaCount}</span>
                </div>
              ) : (
                <></>
              )}
            </div>
            <div
              onClick={() => {
                setIsNavActive(!isNavActive);
              }}
              className='flex items-center hover:cursor-pointer min-[620px]:hidden'
            >
              <MenuIcon
                className={isNavActive ? 'hidden' : 'text-white text-2xl'}
              />
              <CloseIcon
                className={
                  isNavActive ? 'relative z-50 text-white text-2xl' : 'hidden'
                }
              />
            </div>

            <div
              className={
                isNavActive
                  ? 'flex flex-col absolute bg-black select-none justify-center items-center font-space-grotesk text-white text-2xl transition-all ease-out top-0 left-0 gap-7 w-full py-10 z-10 my-0 mx-auto'
                  : 'flex flex-col absolute bg-black select-none justify-center items-center font-space-grotesk text-white text-2xl transition-all ease-out -translate-y-[120%] z-10 top-0 left-0 gap-7 w-full mt-12 py-10 my-0 mx-auto'
              }
            >
              <CustomLink
                onClick={() => setIsNavActive(!isNavActive)}
                to='/store'
              >
                STORE
              </CustomLink>
              <CustomLink
                onClick={() => setIsNavActive(!isNavActive)}
                to='/login'
              >
                LOGIN
              </CustomLink>
              <CustomLink
                onClick={() => setIsNavActive(!isNavActive)}
                to='/about'
              >
                ABOUT US
              </CustomLink>
            </div>
          </nav>
        </div>
      </nav>
      <Cart />
    </>
  );
};
