import { ProductCard } from './ProductCard';
import { products } from '../../products.js';
import { useContext, useState } from 'react';
import { ProductDetailsPopup } from './ProductDetailsPopup.jsx';
import { UnifiedFilter } from './UnifiedFIlters.jsx';
import { Context } from '../CartContext.jsx';

export const Store = () => {
  const [renderedProducts, setRenderedProducts] = useState(products);
  const [clickedProduct, setClickedProduct] = useState(null);
  const [visibleDetails, setVisibleDetails] = useState(false);
  const { onAddLlama } = useContext(Context);
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
