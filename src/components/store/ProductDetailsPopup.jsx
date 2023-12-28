import React from 'react';

export const ProductDetailsPopup = ({
  clickedProduct,
  visibleDetails,
  toggleDetails,
  onAddLlama,
}) => {
  if (visibleDetails) {
    return (
      <div className='flex fixed bg-[#000c] sm:bg-transparent sm:backdrop-blur-sm justify-center items-center h-full w-full'>
        <div className='flex flex-col md:flex-row text-center items-center h-full md:h-1/2 w-[50em] lg:text-xl gap-5 px-9 py-9 mt-14 md:mt-0 rounded-lg text-white bg-black'>
          <img
            className='flex-1 h-[20em] object-cover rounded-lg'
            src={clickedProduct.img}
          />
          <section className='flex flex-col h-full justify-between'>
            <div className='top_div flex flex-1 flex-col'>
              <h2 className='text-2xl lg:text-3xl'>{clickedProduct.title}</h2>
              <h3 className='text-xl lg:text-2xl'>{clickedProduct.subtitle}</h3>
            </div>

            <div className='mid_div flex flex-1 flex-col items-center text-center gap-4 '>
              <p className='text-[#D9BD8B]'>{clickedProduct.description}</p>
              <p className='border-2 rounded-full w-fit px-3'>
                {clickedProduct.category}
              </p>
            </div>

            <div className='bot_div flex flex-1 flex-col min-[480px]:flex-row min-[480px]:justify-between justify-end min-[480px]:items-end items-center mb-5 md:mb-0 gap-2'>
              <div className='flex'>
                <p className='text-3xl md:text-2xl lg:text-3xl text-center font-bold h-10 mb-1 min-[480px]:mb-0 py-1'>
                  $ {clickedProduct.price}
                </p>
              </div>
              <div className='flex gap-4'>
                <button
                  onClick={() => onAddLlama(clickedProduct)}
                  className='bg-[#a6121f] text-center font-bold h-10 py-1 px-3 rounded-xl border-1 hover:text-[#D9BD8B] text-white text-lg'
                >
                  Agregar al carrito
                </button>
                <button
                  onClick={() => toggleDetails()}
                  className='bg-white  text-center font-bold h-10 py-1 px-3 rounded-xl border-1 hover:text-[#D9BD8B] text-black text-lg'
                >
                  Cerrar
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
};
