import { React, useEffect, useState } from 'react';
import { products } from '../../products';

export const FilterBar = ({ allCategories, setRenderedProducts }) => {
  const [selectedCategory, setSelectedCategory] = useState('Todo');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1800000);

  const filterProducts = () => {
    let filteredProducts = products;

    // Filtrar por categoría
    if (selectedCategory !== 'Todo') {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === selectedCategory,
      );
    }

    // Filtrar por precio
    filteredProducts = filteredProducts.filter(
      (product) => product.price >= minPrice && product.price <= maxPrice,
    );

    // Actualizar los productos renderizados
    setRenderedProducts(filteredProducts);
  };

  // Utilizar useEffect para realizar el filtrado cuando cambie la categoría, minPrice o maxPrice
  useEffect(() => {
    filterProducts();
  }, [selectedCategory, minPrice, maxPrice]);

  return (
    <div className='flex relative z-20 pt-14 w-full my-0 mx-auto justify-center items-start min-[1110px]:items-center -left-1 bg-fake-black lg:px-10 '>
      <div className='flex flex-col min-[1110px]:flex-row  text-center items-center justify-between -left-1  max-w-7xl gap-1 w-full select-none bg-fake-black  text-white'>
        {/* Filtro por precio */}
        <div className='flex text-center items-center justify-center -left-1 p-2 select-none text-white'>
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
            className='bg-fake-black focus:border-tabasco-red focus:border-2 focus:outline-none w-24 text-center border-2 border-r-[1px] rounded-tl-full rounded-bl-full px-2'
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
            className='bg-fake-black focus:border-tabasco-red focus:border-2 focus:outline-none w-24 text-center border-2 border-l-[1px] rounded-tr-full rounded-br-full px-2'
          ></input>
        </div>

        {/* Filtro por categoria */}
        <ul className='flex sticky text-center items-center -left-1 p-2 w-full min-[1040px]:w-auto select-none overflow-x-auto justify-start min-[800px]:place-content-center no-scrollbar gap-2'>
          {allCategories.map((category) => {
            return (
              <li
                className={`flex rounded-full hover:cursor-pointer hover:bg-white hover:border-white hover:text-black active:bg-gray-300 active:border-gray-300 whitespace-nowrap border-2 h-fit w-fit px-3 ${
                  selectedCategory === category
                    ? 'bg-white border-white text-black'
                    : ''
                }`}
                key={allCategories.indexOf(category)}
                onClick={() => {
                  setSelectedCategory(category);
                }}
              >
                {category}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
