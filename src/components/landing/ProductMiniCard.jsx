import { Context } from '../cart/CartContext.jsx';
import { React, useContext } from 'react';
import { TbShoppingCartPlus as AddToCartIcon } from 'react-icons/tb';

export const ProductMiniCard = ({ product, toggleDetails }) => {
  const { onAddLlama } = useContext(Context);

  return (
    // Cards verticales (💻)
    <li className='flex flex-col p-2 lg:p-4 gap-10 m-2 w-52 items-center justify-between place-s rounded-xl select-none'>
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
          className='flex text-center justify-center items-center w-16 h-8 p-1 rounded-xl bg-tabasco-red active:bg-[#a6121ea1] text-white text-lg xl:text-lg'
        >
          <AddToCartIcon className='text-center' />
        </button>
      </div>
    </li>
  );
};
