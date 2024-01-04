import React from 'react';
import { products } from '../../products';
import { useState, useEffect } from 'react';

export const PriceFilter = ({ setRenderedProducts }) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1800000);

  // Ejecutará el filtrado cada vez que minPrice o maxPrice cambien
  useEffect(() => {
    filterProducts();
  }, [minPrice, maxPrice]);

  const filterProducts = () => {
    let filteredProducts = products.filter((product) => {
      return product.price >= minPrice && product.price <= maxPrice;
    });
    setRenderedProducts(filteredProducts);
    // console.log('minPrice: ', minPrice, 'maxPrice', maxPrice);
  };

  return (
    <div className='flex overflow-x-auto min-[1047px]:place-content-center text-center items-center justify-center w-full -left-1 p-2 select-none text-white'>
      <div className='flex'>
        <p className='text-xl mr-2'>$</p>
        <input
          type='text'
          inputMode='numeric'
          placeholder='Min'
          onChange={(e) => {
            // Si no hay nada escrito, seteará el minPrice al valor por defecto
            e.target.value
              ? setMinPrice(parseInt(e.target.value))
              : setMinPrice(0);
          }}
          className='bg-black focus:border-red-500 focus:border-2 focus:outline-none w-24 text-center border-2 border-r-[1px] rounded-tl-full rounded-bl-full px-2'
        ></input>
        <input
          type='text'
          inputMode='numeric'
          placeholder='Max'
          onChange={(e) => {
            // Si no hay nada escrito, seteará el maxPrice al valor por defecto
            e.target.value
              ? setMaxPrice(parseInt(e.target.value))
              : setMaxPrice(1800000);
          }}
          className='bg-black focus:border-red-500 focus:border-2 focus:outline-none w-24 text-center border-2 border-l-[1px] rounded-tr-full rounded-br-full px-2'
        ></input>
      </div>
    </div>
  );
};
