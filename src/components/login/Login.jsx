import { CustomLink } from '../CustomLink';

export const Login = () => {
  return (
    <div className='flex justify-center bg-fake-black h-full p-12'>
      <div className='flex justify-center rounded-xl p-10 bg-black mt-12 w-full sm:w-[22em]'>
        <form className='flex flex-col items-center text-white' action='#'>
          <input
            className='rounded-t-lg outline-none bg-fake-black placeholder:px-1 w-full p-2 sm:p-1'
            type='email'
            placeholder='Email'
          />
          <input
            className='rounded-b-lg outline-none bg-fake-black placeholder:px-1 w-full p-2 sm:p-1'
            type='password'
            placeholder='Contraseña'
          />
          <button
            className='text-center w-full mt-5 py-2 sm:py-1 rounded-xl border-2 border-tabasco-red bg-tabasco-red hover:bg-tabasco-red-dark hover:border-black active:bg-tabasco-red-light active:border-black text-white'
            type='submit'
          >
            Ingresar
          </button>
          <div className='flex text-gray-500 mt-4' href='#'>
            ¿No tenés cuenta?
            <span className='text-birch-wood hover:underline'>
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
