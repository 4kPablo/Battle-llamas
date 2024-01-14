import { React, useState, useMemo } from 'react';
import { products } from '../../products';
import { ProductMiniCard } from './ProductMiniCard';
import { ProductDetailsPopup } from '../store/ProductDetailsPopup';

export const FeaturedProducts = () => {
  const [clickedProduct, setClickedProduct] = useState(null);
  const [visibleDetails, setVisibleDetails] = useState(false);

  const toggleDetails = (product) => {
    setVisibleDetails(!visibleDetails);
    setClickedProduct(product);
  };

  const randomLlamaGenerator = () => {
    let randomLlamas = new Set();
    while (randomLlamas.size < 5) {
      randomLlamas.add(products[Math.floor(Math.random() * products.length)]);
    }
    return randomLlamas;
  };

  // Se usa useMemo para no re-renderizar los 5 productos constantemente
  const randomProducts = useMemo(() => Array.from(randomLlamaGenerator()), []);

  return (
    <>
      <ProductDetailsPopup
        clickedProduct={clickedProduct}
        visibleDetails={visibleDetails}
        toggleDetails={toggleDetails}
      />
      <ul className='flex text-white text-lg'>
        {randomProducts.map((product) => (
          <ProductMiniCard
            key={product.id}
            product={product}
            toggleDetails={toggleDetails}
          />
        ))}
      </ul>
    </>
  );
};
