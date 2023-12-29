import React from 'react';
import { products } from '../../products';

export const CategoryFilter = ({ allCategories, setRenderedProducts }) => {
  const filterProducts = (category) => {
    if (category === 'Todo') {
      setRenderedProducts(products);
    } else {
      let filteredProducts = products.filter((product) => {
        return product.category === category;
      });
      setRenderedProducts(filteredProducts);
    }
  };

  return (
    <ul className='flex overflow-x-auto min-[1047px]:place-content-center text-center items-center no-scrollbar my-3 gap-2 select-none text-white'>
      {allCategories.map((category) => {
        return (
          <li
            className='rounded-full hover:bg-white hover:border-white hover:text-black hover:cursor-pointer whitespace-nowrap border-2 h-fit w-fit px-3'
            key={allCategories.indexOf(category)}
            onClick={() => {
              filterProducts(category);
            }}
          >
            {category}
          </li>
        );
      })}
    </ul>
  );
};
