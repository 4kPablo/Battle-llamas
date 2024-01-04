import { React, useState, useEffect } from 'react';
import { products } from '../../products';

export const CategoryFilter = ({ allCategories, setRenderedProducts }) => {
  const [selectedCategory, setSelectedCategory] = useState('Todo');

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

  // Utilizar useEffect para realizar el filtrado cuando cambie la categoría
  useEffect(() => {
    // Filtrar productos cada vez que la categoría cambie
    filterProducts(selectedCategory);
  }, [selectedCategory]);

  return (
    <ul className='flex  text-center items-center -left-1 p-2 w-full select-none overflow-x-auto min-[1047px]:place-content-center no-scrollbar gap-2'>
      {allCategories.map((category) => {
        return (
          <li
            className={`rounded-full hover:bg-white hover:border-white hover:text-black hover:cursor-pointer whitespace-nowrap border-2 h-fit w-fit px-3 ${
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
  );
};
