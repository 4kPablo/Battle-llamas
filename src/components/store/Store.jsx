import ProductCard from './ProductCard';
import Footer from '../Footer';
import products from '../../products.js'
import { AiFillCloseCircle  as CloseButton } from 'react-icons/ai';
import { useState } from "react";
import { IconContext } from 'react-icons'

const Store = ({ onAddLlama }) => {
  const [renderedProducts, setRenderedProducts] = useState(products);
  const [clickedDescription, setClickedDescription] = useState(null);
  const [clickedImg, setClickedImg] = useState(null);
  const [visibleDetails, setVisibleDetails] = useState(false);

  const viewDetails = (img, description) => {
    setVisibleDetails(!visibleDetails);
    setClickedDescription(description);
    setClickedImg(img);
  };

  return (

    // Descripción que se muestra al cliquear un producto
    <div className="text-white p-2 bg-[#0d0d0d]">
      <div className='mt-12 mb-7'>
      <div className={visibleDetails ? 'flex' : 'hidden'}>
        <div className='flex fixed flex-col place-self-center items-center inset-0 gap-3 h-full bg-black px-10 py-10 text-center'>
          <img className="flex h-2/5 object-cover rounded-lg" src={clickedImg} />
          <p className='px-6 lg:text-3xl lg:px-80'>
            {clickedDescription}
          </p>
          <IconContext.Provider value={{ className: "text-4xl select-none place-self-center hover:cursor-pointer hover:text-[#a6121f] active:text-[#a6121f]" }}>
            <CloseButton onClick={() => viewDetails()} />
          </IconContext.Provider>
        </div>
      </div>
      <ul className='flex flex-wrap place-content-center'>
        {renderedProducts.map((product) => {
          return (

            <ProductCard
              product={product}
              key={product.id}
              img={product.img}
              desc={product.description}
              title={product.title}
              subtitle={product.subtitle}
              price={product.price}
              viewDetails={viewDetails}
              onAddLlama={onAddLlama}
            />
          )
        })}
      </ul>
      </div>
      <Footer />
    </div>
  )
}

export default Store;