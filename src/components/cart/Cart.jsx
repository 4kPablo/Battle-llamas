import { React, useContext, useState } from 'react';
import { CartProduct } from './CartProduct';
import { Context } from './CartContext';

export const Cart = () => {
  const [askingDeletion, setAskingDeletion] = useState(false);
  const [askingBuy, setAskingBuy] = useState(false);
  const { onDeleteCart } = useContext(Context);
  const { onBuyCart } = useContext(Context);
  const { isCartActive } = useContext(Context);
  const { setIsCartActive } = useContext(Context);
  const { llamaCount } = useContext(Context);
  const { allLlamas } = useContext(Context);
  const { total } = useContext(Context);

  return (
    <>
      {/* Confirmación de borrar carrito */}
      <section
        className={
          askingDeletion
            ? 'flex flex-col fixed place-content-center items-center h-screen w-full sm:w-96 right-0 z-50 top-12 bg-[#000c] sm:bg-transparent sm:backdrop-blur-sm text-white'
            : 'hidden'
        }
      >
        <div className='flex flex-col m-3 w-72 h-28 gap-2 px-2 z-30 place-content-center rounded-lg text-white bg-black outline outline-1 outline-white'>
          <p className='text-2xl text-center'>¿Borrar carrito?</p>
          <div className='flex text-xl place-content-around'>
            <button
              className='hover:bg-[#a6121f] rounded-xl py-2 px-8'
              onClick={() => {
                setAskingDeletion(false);
                onDeleteCart();
                setIsCartActive(!isCartActive);
              }}
            >
              Borrar
            </button>
            <button
              className='hover:bg-white hover:text-black rounded-xl py-2 px-7'
              onClick={() => {
                setAskingDeletion(false);
              }}
            >
              Cancelar
            </button>
          </div>
        </div>
      </section>

      {/* Confirmación de comprar carrito */}
      <section
        className={
          askingBuy
            ? 'flex flex-col fixed place-content-center items-center h-screen w-full sm:w-96 right-0 z-50 top-12 bg-[#000c] sm:bg-transparent sm:backdrop-blur-sm text-white'
            : 'hidden'
        }
      >
        <div className='flex flex-col m-3 w-80 h-28 gap-2 px-2 z-30 place-content-center rounded-lg text-white bg-black outline outline-1 outline-white'>
          <p className='text-2xl text-center'>¿Proceder con la compra?</p>
          <div className='flex text-xl place-content-around'>
            <button
              className='hover:bg-[#D9BD8B] hover:text-black rounded-xl py-2 px-8'
              onClick={() => {
                setAskingBuy(false);
                onBuyCart();
                setIsCartActive(!isCartActive);
              }}
            >
              Comprar
            </button>
            <button
              className='hover:bg-white hover:text-black rounded-xl py-2 px-7'
              onClick={() => {
                setAskingBuy(false);
              }}
            >
              Cancelar
            </button>
          </div>
        </div>
      </section>

      {/* Carrito */}
      <div
        className={
          isCartActive
            ? 'flex flex-col fixed h-screen w-full sm:w-96 right-0 gap-3 top-12 p-4 z-40 bg-black text-white transition-all ease-out'
            : 'flex flex-col fixed h-screen w-full sm:w-96 right-0 gap-3 top-12 p-4 z-40 bg-black text-white translate-x-full transition-all ease-out'
        }
      >
        <h1 className=' text-xl text-center mt-4 text-[#D9BD8B]'>Carrito</h1>
        {llamaCount ? (
          <>
            {allLlamas.map((product) => (
              <CartProduct key={product.id} product={product} />
            ))}
            {total ? (
              <div className='flex flex-col gap-2 text-xl py-2 w-full'>
                <div className='border-t-2 border-dotted'></div>
                <div className='flex flex-row w-full place-content-between'>
                  <h3>Total:</h3>
                  <span className='text-xl'>$ {total}</span>
                </div>
                <div className='flex'>
                  <button
                    onClick={() => {
                      setAskingBuy(true);
                      console.log(askingBuy);
                    }}
                    className=' text-center py-2 w-full rounded-lg bg-white hover:bg-[#a6121f] text-black hover:text-white'
                  >
                    Comprar
                  </button>
                </div>
                <p
                  className='flex my-1 text-sm text-center place-content-center select-none hover:cursor-pointer hover:text-[#D9BD8B]'
                  onClick={() => setAskingDeletion(true)}
                >
                  Vaciar carrito
                </p>
              </div>
            ) : (
              <></>
            )}
          </>
        ) : (
          <>
            <p className='text-center gap-1 p-2 mb-2 w-full items-center rounded-xl select-none'>
              El carrito está vacío
            </p>
          </>
        )}
      </div>
    </>
  );
};
