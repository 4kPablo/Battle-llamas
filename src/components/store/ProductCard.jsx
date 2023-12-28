import useWindowDimensions from '../../windowDimensions';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const ProductCard = ({ product, onAddLlama, toggleDetails }) => {
  const { height, width } = useWindowDimensions();

  if (width > 600) {
    return (
      // Cards verticales (💻)
      <li className='flex flex-col p-4 gap-10 m-2 w-64 lg:w-80 items-center justify-between place-s rounded-xl bg-black select-none'>
        <img className='flex w-64 lg:w-72 rounded-xl p-1' src={product.img} />

        <div
          className='flex flex-col text-center w-full hover:cursor-pointer'
          onClick={() => toggleDetails(product)}
        >
          <h2 className='text-lg lg:text-xl text-white'>{product.title}</h2>
          <h2 className='text-lg hidden lg:inline text-white'>
            {product.subtitle}
          </h2>
          <p className='text-sm text-[#D9BD8B] hover:text-white'>
            ⓘ Click para ver más
          </p>
        </div>

        <div className='flex w-full justify-between items-center text-center'>
          <p className='lg:text-xl text-white'>$ {product.price}</p>
          <button
            onClick={() => onAddLlama(product)}
            className='flex bg-[#a6121f] text-center font-bold py-1 px-3 rounded-xl border-1 hover:text-[#D9BD8B] text-white lg:text-lg'
          >
            Agregar al carrito
          </button>
        </div>
      </li>
    );
  } else {
    return (
      // Cards horizontales (📱)
      <li className='flex gap-4 p-2 mb-2 w-full items-center rounded-xl bg-black select-none'>
        <img
          className='flex flex-1 w-20 h-20 object-cover rounded-xl p-1'
          src={product.img}
        />

        <div
          className='flex flex-4 flex-col justify-center w-full hover:cursor-pointer'
          onClick={() => toggleDetails(product)}
        >
          <h2 className=' text-base font-bold text-white'>{product.title}</h2>
          <p className=' text-base text-[#D9BD8B]'>ⓘ Toca para ver más</p>
        </div>

        <div className='flex flex-col flex-4 min-w-[73px] gap-1 justify-center items-center text-center'>
          <p className=' text-xl text-white'>$ {product.price}</p>
          <button
            onClick={() => onAddLlama(product)}
            className='text-center w-full p-1 rounded-xl bg-[#a6121f] active:bg-[#a6121ea1] text-white text-xs xl:text-lg'
          >
            Añadir al carrito
          </button>
        </div>
      </li>
    );
  }
};

export default ProductCard;
