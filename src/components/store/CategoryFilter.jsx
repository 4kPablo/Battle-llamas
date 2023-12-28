import React from 'react';

export const CategoryFilter = ({ allCategories }) => {
  console.log(allCategories);
  return (
    <ul className='flex overflow-x-auto min-[850px]:place-content-center text-center items-center no-scrollbar my-3 gap-2 text-white'>
      {allCategories.map((category) => {
        return (
          <li
            class='rounded-full hover:bg-white hover:border-white hover:text-black hover:cursor-pointer pointer-events-none whitespace-nowrap border-2 h-fit w-fit px-3'
            key={allCategories.indexOf(category)}
          >
            {category}
          </li>
        );
      })}
    </ul>
  );
};
