import { React, useContext } from 'react';
import { Context } from './CartContext';

export const CartProduct = ({ product }) => {
  const { onRemoveLlama } = useContext(Context);
  const { onAddLlama } = useContext(Context);

  return (
    <li
      className='flex gap-2 w-full items-center rounded-xl select-none'
      key={product.id}
    >
      <img
        className='flex flex-1 w-20 object-cover rounded-xl'
        src={product.img}
      />

      <div className='flex flex-4 flex-col justify-center w-full p-1 hover:cursor-pointer'>
        <p className=' text-base font-bold text-white '>{product.title}</p>
      </div>

      <div className='flex flex-col flex-4 min-w-[73px] gap-1 justify-center items-center text-center'>
        <p className=' text-xl text-white'>$ {product.price}</p>
        <div className='flex rounded-lg bg-[#a6121f]'>
          <button
            className='text-center font-bold py-0.5 px-2.5 rounded-lg border-1 hover:text-[#D9BD8B] text-white text-lg'
            onClick={() => onRemoveLlama(product)}
          >
            -
          </button>
          <button className='text-center text-lg py-0.5 px-1 text-white'>
            {product.quantity}
          </button>
          <button
            className='text-center font-bold py-0.5 px-2.5 rounded-lg border-1 hover:text-[#D9BD8B] text-white text-lg'
            onClick={() => onAddLlama(product)}
          >
            +
          </button>
        </div>
      </div>
    </li>
  );
};
