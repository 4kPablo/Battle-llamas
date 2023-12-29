import ProductCard from './ProductCard';
import { products } from '../../products.js';
import { useState } from 'react';
import { ProductDetailsPopup } from './ProductDetailsPopup.jsx';
import { CategoryFilter } from './CategoryFilter.jsx';
import { redirect } from 'react-router-dom';

const Store = ({ onAddLlama }) => {
  const [renderedProducts, setRenderedProducts] = useState(products);
  const [clickedProduct, setClickedProduct] = useState(null);
  const [visibleDetails, setVisibleDetails] = useState(false);
  const [allCategories, setAllCategories] = useState([
    'Todo',
    'Combate',
    'Apoyo',
    'Operaciones Especiales',
    'Exploración y Comunicación',
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
        onAddLlama={onAddLlama}
      />
      <div className='bg-[#0d0d0d] p-2 pb-7 pt-12 text-white'>
        <CategoryFilter
          allCategories={allCategories}
          setRenderedProducts={setRenderedProducts}
        />
        <ul className='flex flex-wrap place-content-center'>
          {renderedProducts.map((product) => {
            return (
              <ProductCard
                key={product.id}
                product={product}
                onAddLlama={onAddLlama}
                toggleDetails={toggleDetails}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Store;
