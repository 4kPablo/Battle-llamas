import useWindowDimensions from '../../windowDimensions'
import { Link, useMatch, useResolvedPath } from "react-router-dom"

const ProductCard = ({ onAddLlama, product, img, desc, title, subtitle, price, viewDetails }) => {
  const { height, width } = useWindowDimensions();
  
  if (width > 880) {
    return (
      // Cards verticales (💻)

      <li className='flex flex-col p-4 gap-10 m-2 w-80 items-center place-s rounded-xl bg-black select-none'>
        <img className="flex flex-1 w-72 object-cover rounded-xl p-1" src={img} />
    
        <div className='flex flex-4 flex-col text-center w-full hover:cursor-pointer' onClick={() => viewDetails(img, desc)}>
          <h2 className=' text-xl text-white'>{title}</h2>
          <h2 className=' text-xl text-white'>{subtitle}</h2>
          <p className=' text-sm text-[#D9BD8B]'>ⓘ Click para ver más</p>
        </div>
    
        <div className="flex flex-4 w-full justify-between items-center text-center">
            <p className=" text-xl text-white">$ {product.price}</p>
            <button
              onClick={() => onAddLlama(product)}
              className="flex bg-[#a6121f]  text-center font-bold py-1 px-3 rounded-xl border-1 hover:text-[#D9BD8B] text-white text-lg" >
              Agregar al carrito
            </button>
          </div>
      </li>
    )
  } else {
    return (
      // Cards horizontales (📱)

      <li className='flex gap-4 p-2 mb-2 w-full items-center rounded-xl bg-black select-none'>
        <img className="flex flex-1 w-20 h-20 object-cover rounded-xl p-1" src={img} />
    
        <div className='flex flex-4 flex-col justify-center w-full hover:cursor-pointer' onClick={() => viewDetails(img, desc)}>
          <h2 className=' text-base font-bold text-white'>{title}</h2>
          <p className=' text-base text-[#D9BD8B]'>ⓘ Toca para ver más</p>
        </div>
    
        <div className='flex flex-col flex-4 min-w-[73px] gap-1 justify-center items-center text-center'>
          <p className=' text-xl text-white'>$ {price}</p>
          <button
            onClick={() => onAddLlama(product)}
            className=' text-center w-full p-1 rounded-xl bg-[#a6121f] active:bg-[#a6121ea1] text-white text-xs xl:text-lg'>
            Añadir al carrito
          </button>
        </div>
      </li>
    )
  }
}

export default ProductCard;