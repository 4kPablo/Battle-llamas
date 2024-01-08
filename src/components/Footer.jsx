import { CustomLink } from './CustomLink';

export const Footer = () => {
  return (
    <div className='flex w-full mt-2 mb-20'>
      <div className='flex flex-1 text-xs sm:text-base text-gray-500 justify-center'>
        <CustomLink to='/about'>Nosotros</CustomLink>
      </div>
      <div className='flex flex-1 text-xs sm:text-base text-gray-500 justify-center'>
        <CustomLink to='/contact'>Contacto</CustomLink>
      </div>
      <div className='flex flex-1 text-xs sm:text-base text-gray-500 justify-center'>
        <CustomLink to='/404'>Privacidad</CustomLink>
      </div>
      <div className='flex flex-1 text-xs sm:text-base text-gray-500 justify-center'>
        <CustomLink to='/404'>Bienestar animal</CustomLink>
      </div>
    </div>
  );
};
