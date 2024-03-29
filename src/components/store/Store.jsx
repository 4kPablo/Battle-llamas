import { useState } from 'react';
import { ProductDetailsPopup } from './ProductDetailsPopup.jsx';
import { FilterBar } from './FilterBar.jsx';
import { ProductCard } from './ProductCard';
import { products } from '../../products.js';

export const Store = () => {
  const [renderedProducts, setRenderedProducts] = useState(products);
  const [clickedProduct, setClickedProduct] = useState(null);
  const [visibleDetails, setVisibleDetails] = useState(false);
  const [allCategories] = useState([
    'Todo',
    'Combate',
    'Apoyo',
    'Operaciones Especiales',
    'Guerra Técnica',
    'Liderazgo y Estrategia',
  ]);

  const toggleDetails = (product) => {
    setVisibleDetails(!visibleDetails);
    setClickedProduct(product);
  };

  return (
    <>
      <ProductDetailsPopup
        clickedProduct={clickedProduct}
        visibleDetails={visibleDetails}
        toggleDetails={toggleDetails}
      />
      <FilterBar
        allCategories={allCategories}
        setRenderedProducts={setRenderedProducts}
      />
      {/* <div className='flex relative bg-pink-800 text-white z-0 p-2 pb-7'> */}
      <ul className='flex-wrap flex relative bg-fake-black text-white z-0 p-2 pb-7 place-content-center'>
        {renderedProducts.map((product) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              toggleDetails={toggleDetails}
            />
          );
        })}
      </ul>
      {/* </div> */}
    </>
  );
};
