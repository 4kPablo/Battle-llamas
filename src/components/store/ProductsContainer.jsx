import products from '../../products.js'
import { useState } from "react";
import { AiFillCloseCircle } from 'react-icons/ai';
import { IconContext } from 'react-icons'

const ProductsContainer = () => {
  const [renderedProducts, setRenderedProducts] = useState(products);
  const [clickedDescription, setClickedDescription] = useState(null);
  const [clickedImg, setClickedImg] = useState(null);
  const [visibleDetails, setVisibleDetails] = useState(false);

  const viewDetails = (img, description) => {
    let visible = null;
    visible = (visible = !visibleDetails);
    setVisibleDetails(visible);
    setClickedDescription(description);
    setClickedImg(img);
  };

  return (
    <>
      <div className={visibleDetails ? 'flex' : 'hidden'}>
        <div className='flex fixed flex-col place-self-center items-center inset-0 gap-3 h-3/6 bg-black px-10 py-10 text-center font-roboto'>
          <img className="flex h-4/5 object-cover rounded-lg" src={clickedImg} />
          <p>
            {clickedDescription}
          </p>
          <IconContext.Provider value={{ className: "text-3xl place-self-center hover:cursor-pointer hover:text-[#a6121f]" }}>
            <AiFillCloseCircle />
          </IconContext.Provider>
        </div>
      </div>

      <ul>
        {renderedProducts.map((product) => {
          return (
            // <ProductCard
            //   key={product.id}
            //   img={product.img}
            //   title={product.title}
            //   price={product.price}
            //   description='ⓘ Toca para ver más'
            // />
            <li className='flex gap-1 p-2 md:gap-10 mb-2 w-full items-center rounded-xl bg-black' key={product.id}>
              <img className="flex flex-1 w-20 h-20 object-cover rounded-xl p-1" src={product.img} />

              <div className='flex flex-4 flex-col justify-center w-full hover:cursor-pointer' onClick={() => viewDetails(product.img, product.description)}>
                <h2 className='font-roboto text-base font-bold text-white'>{product.title}</h2>
                <p className='font-roboto text-base text-[#D9BD8B]'>ⓘ Toca para ver más</p>
              </div>

              <div className='flex flex-col flex-4 min-w-[73px] gap-1 justify-center items-center text-center'>
                <p className='font-roboto text-xl text-white'>$ {product.price}</p>
                <p className='font-roboto text-center w-full p-1 rounded-xl bg-[#a6121f] text-white text-xs xl:text-lg'>Añadir al carrito</p>
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default ProductsContainer;