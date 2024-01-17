import { CustomLink } from './CustomLink';

export const Footer = () => {
  return (
    <div className='flex flex-col 2xl:flex-row items-center m-auto justify-between w-fit gap-10 2xl:gap-32 mt-2 lg:px-10 py-10'>
      <section className='flex justify-between bg-fake-black min-[542px]:border-2 border-gray-500 px-3 py-7 sm:p-7 min-h-20 gap-6 min-[542px]:rounded-md'>
        <div className='flex flex-col justify-between gap-3'>
          <h2 className=' text-left text-2xl lg:text-4xl font-bold whitespace-nowrap text-white'>
            Animal warfare S.A.
          </h2>
          <p className=' text-left text-lg md:text-2xl lg:whitespace-nowrap text-gray-500'>
            Innovación militar para países en desarrollo
          </p>
        </div>
        <CustomLink
          className='flex h-full sm:w-32 items-center text-center sm:text-lg p-2 hover:text-white rounded-full text-gray-500'
          to='/about'
        >
          ¿Quiénes somos?
        </CustomLink>
      </section>

      <section className='flex flex-col md:flex-row gap-6 md:gap-16 whitespace-nowrap'>
        <div className='flex flex-col flex-1 sm:text-base gap-3 text-gray-500'>
          <CustomLink to='/404' className='hover:text-white'>
            No proliferación nuclear
          </CustomLink>
          <CustomLink to='/404' className='hover:text-white'>
            Bienestar animal
          </CustomLink>
          <CustomLink to='/404' className='hover:text-white'>
            Carbono neutral
          </CustomLink>
          <CustomLink to='/404' className='hover:text-white'>
            Privacidad
          </CustomLink>
        </div>
        <div className='flex flex-col flex-1 sm:text-base gap-3 text-gray-500'>
          <CustomLink to='/404' className='hover:text-white'>
            Programas para empleados
          </CustomLink>
          <CustomLink to='/404' className='hover:text-white'>
            Programas para gobiernos
          </CustomLink>
          <CustomLink to='/404' className='hover:text-white'>
            Programas para profesores
          </CustomLink>
          <CustomLink to='/404' className='hover:text-white'>
            Programas para mercenarios
          </CustomLink>
        </div>
        <div className='flex flex-col flex-1 sm:text-base gap-3 text-gray-500'>
          <CustomLink to='/404' className='hover:text-white'>
            Oficinas en Argentina
          </CustomLink>
          <CustomLink to='/404' className='hover:text-white'>
            Oficinas en Paraguay
          </CustomLink>
          <CustomLink to='/404' className='hover:text-white'>
            Oficinas en Bolivia
          </CustomLink>
          <CustomLink to='/404' className='hover:text-white'>
            Oficinas en Chile
          </CustomLink>
        </div>
      </section>
    </div>
  );
};
