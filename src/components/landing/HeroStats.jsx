function HeroStats() {
  return (
    <div className='flex text-center w-full  my-10 lg:my-20'>
      <div className="flex-1">
        <p className='text-white text-xl min-[400px]:text-2xl md:text-3xl px-1'>40 Km</p>
        <p className='text-gray-500 text-sm min-[400px]:text-base md:text-xl px-1'>Sin descanso</p>
      </div>
      <div className="flex-1">
        <p className='text-white text-xl min-[400px]:text-2xl md:text-3xl px-1'>150 Kg</p>
        <p className='text-gray-500 text-sm min-[400px]:text-base md:text-xl px-1'>Carga máxima</p>
      </div>
      <div className="flex-1">
        <p className='text-white text-xl min-[400px]:text-2xl md:text-3xl px-1'>100</p>
        <p className='text-gray-500 text-sm min-[400px]:text-base md:text-xl px-1'>Comandos aprendidos</p>
      </div>
      <div className="flex-1">
        <p className='text-white text-xl min-[400px]:text-2xl md:text-3xl px-1'>80%</p>
        <p className='text-gray-500 text-sm min-[400px]:text-base md:text-xl px-1'>Sigilo acústico</p>
      </div>
    </div>
  )
}

export default HeroStats