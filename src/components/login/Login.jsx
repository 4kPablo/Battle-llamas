import { CustomLink } from '../CustomLink';

export const Login = () => {
  return (
    <div className='flex justify-center bg-[#0d0d0d] h-full p-7'>
      <div className='flex justify-center rounded-xl p-10 bg-black mt-12 w-full sm:w-[22em]'>
        <form className='flex flex-col items-center text-white' action='#'>
          <input
            className='rounded-t-lg outline-none bg-[#0d0d0d] placeholder:px-1 w-full p-2 sm:p-1'
            type='email'
            placeholder='Email'
          />
          <input
            className='rounded-b-lg outline-none bg-[#0d0d0d] placeholder:px-1 w-full p-2 sm:p-1'
            type='password'
            placeholder='Contraseña'
          />
          <button
            className='border-none  border-2 text-center w-full mt-5 py-2 sm:py-1 rounded-xl bg-[#a6121f] text-white'
            type='submit'
          >
            Ingresar
          </button>
          <div className='flex text-gray-500 mt-4' href='#'>
            ¿No tenés cuenta?
            <span className='text-[#D9BD8B] hover:underline'>
              <CustomLink className='ml-1' to='/register'>
                Registrate
              </CustomLink>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};
