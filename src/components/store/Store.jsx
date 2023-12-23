import ProductCard from "./ProductCard";
import products from "../../products.js";
import { useState } from "react";
import { ProductDetailsPopup } from "./ProductDetailsPopup.jsx";

const Store = ({ onAddLlama }) => {
  const [renderedProducts, setRenderedProducts] = useState(products);
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
      <div className="bg-[#0d0d0d] p-2 pb-7 pt-14 text-white">
        <ul className="flex flex-wrap place-content-center">
          {renderedProducts.map((product) => {
            return (
              <ProductCard
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
