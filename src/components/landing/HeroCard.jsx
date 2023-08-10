import useWindowDimensions from '../../windowDimensions'

function HeroCard() {
  const { height, width } = useWindowDimensions();

  if (width > 880) {

    // Versión card grande a la derecha de la portada 
    return (
      <div className='flex absolute flex-col justify-between w-64 h-96 xl:w-[310px] xl:h-[424px] top-40 right-5 bg-black p-6 text-left font-roboto'>
        <p className='text-white text-2xl xl:text-3xl'>
          La guerra nunca fue tan suave. <br />
          Descubre nuestras alpacas de combate de alta performance.
        </p>
        <div className='flex flex-col gap-2.5'>
          <a className='bg-[#a6121f] border-[#a6121f] font-roboto border-2 text-center p-2 rounded-xl text-white' href="#">
            <p className='text-sm xl:text-lg'>TIENDA</p>
          </a>
          <a className='border-[#a6121f] font-roboto border-2 rounded-xl text-center p-2 text-white' href="#">
            <p className='text-sm xl:text-lg'>LOGIN</p>
          </a>
        </div>
      </div>
    )
  } else {

    // Versión como mini banner debajo de la portada
    return (
      <div className='flex justify-between items-center w-full top-40 right-5 bg-black p-6 gap-3 text-left font-roboto'>
        <p className='text-white text-md min-[423px]:text-xl'>
          La guerra nunca fue tan suave. <br />
          Descubre nuestras alpacas de combate de alta performance.
        </p>
        <div className='flex flex-col gap-2.5 w-1/2 sm:w-3/12'>
          <a className='bg-[#a6121f] border-[#a6121f] border-2 font-roboto text-center p-1.5 sm:p-2 rounded-xl text-white' href="#">
            <p className='text-sm'>TIENDA</p>
          </a>
          <a className='bg-[#000000] border-[#a6121f] border-2 font-roboto text-center p-1.5 sm:p-2 rounded-xl text-white' href="#">
            <p className='text-sm'>LOGIN</p>
          </a>
        </div>
      </div>
    )
  }
}

export default HeroCard