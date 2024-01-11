import { React, useState } from 'react';
import { products } from '../../products';
import { ProductCard } from '../store/ProductCard';
import { ProductDetailsPopup } from '../store/ProductDetailsPopup';

export const FeaturedProducts = () => {
  const [clickedProduct, setClickedProduct] = useState(null);
  const [visibleDetails, setVisibleDetails] = useState(false);

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
      <ul className='flex text-white text-lg'>
        {products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              toggleDetails={toggleDetails}
            />
          );
        })}
      </ul>
    </>
  );
};
