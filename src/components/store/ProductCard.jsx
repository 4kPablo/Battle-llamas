import useWindowDimensions from '../../windowDimensions';
import { TbShoppingCartPlus as AddToCartIcon } from 'react-icons/tb';
import { React, useContext } from 'react';
import { Context } from '../cart/CartContext.jsx';

export const ProductCard = ({ product, toggleDetails }) => {
  const { height, width } = useWindowDimensions();
  const { onAddLlama } = useContext(Context);

  if (width > 600) {
    return (
      // Cards verticales (💻)
      <li className='flex flex-col p-2 lg:p-4 gap-10 m-2 w-64 lg:w-80 items-center justify-between place-s rounded-xl bg-black select-none'>
        <img className='flex w-64 lg:w-72 rounded-xl p-1' src={product.img} />

        <div
          className='flex flex-col text-center w-full hover:cursor-pointer'
          onClick={() => toggleDetails(product)}
        >
          <h2 className='text-lg lg:text-xl text-white'>{product.title}</h2>
          <h2 className='text-lg hidden lg:inline text-white'>
            {product.subtitle}
          </h2>
          <p className='text-sm text-birch-wood hover:text-white'>
            ⓘ Click para ver más
          </p>
        </div>

        <div className='flex w-full justify-between items-center text-center'>
          <p className='lg:text-xl text-white'>$ {product.price}</p>
          <button
            onClick={() => onAddLlama(product)}
            className='flex border-2 border-tabasco-red bg-tabasco-red hover:bg-tabasco-red-dark hover:border-black active:bg-tabasco-red-light active:border-black text-white text-center font-bold py-1 px-2 rounded-xl border-1 lg:text-lg'
          >
            Agregar al carrito
          </button>
        </div>
      </li>
    );
  } else {
    return (
      // Cards horizontales (📱)
      <li className='flex gap-4 p-2 mb-2 w-full items-center rounded-xl bg-black select-none'>
        <img
          className='flex flex-1 w-20 h-20 object-cover rounded-xl p-1'
          src={product.img}
        />

        <div
          className='flex flex-4 flex-col justify-center w-full hover:cursor-pointer'
          onClick={() => toggleDetails(product)}
        >
          <h2 className=' text-base font-bold text-white'>{product.title}</h2>
          <p className=' text-base text-birch-wood'>ⓘ Toca para ver más</p>
        </div>

        <div className='flex flex-col flex-4 min-w-[80px] gap-1 justify-center items-center text-center'>
          <p className=' text-base text-white'>$ {product.price}</p>
          <button
            onClick={() => onAddLlama(product)}
            className='flex text-center justify-center items-center w-full h-8 p-1 rounded-xl border-2 border-tabasco-red bg-tabasco-red hover:bg-tabasco-red-dark hover:border-black active:bg-tabasco-red-light active:border-black text-white text-lg xl:text-lg'
          >
            <AddToCartIcon className='text-center' />
          </button>
        </div>
      </li>
    );
  }
};
