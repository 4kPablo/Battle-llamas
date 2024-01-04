import ProductCard from './ProductCard';
import { products } from '../../products.js';
import { useState } from 'react';
import { ProductDetailsPopup } from './ProductDetailsPopup.jsx';
import { UnifiedFilter } from './UnifiedFIlters.jsx';
import { redirect } from 'react-router-dom';

const Store = ({ onAddLlama }) => {
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
        onAddLlama={onAddLlama}
      />
      <div className='bg-[#161616] text-white p-2 pb-7 pt-12'>
        {/* <div className='flex flex-col fixed text-center items-center -left-1 py-2 gap-1 w-full select-none bg-black text-white'> */}
        <UnifiedFilter
          allCategories={allCategories}
          setRenderedProducts={setRenderedProducts}
        />
        {/* </div> */}
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
