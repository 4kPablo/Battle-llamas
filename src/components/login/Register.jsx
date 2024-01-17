import { CustomLink } from '../CustomLink';

export const Register = () => {
  const notificarRegistro = () => {
    let email_filled = document.forms['registration_form']['email'].value;
    if (email_filled) {
      alert('¡Confirmación necesaria! Revise en su casilla de correo');
    }
  };
  return (
    <div className='flex justify-center bg-fake-black h-full p-7'>
      <div className='flex justify-center rounded-xl p-10 bg-black mt-12 w-full sm:w-[22em]'>
        <form
          className='flex flex-col items-center text-white'
          name='registration_form'
          action='#'
        >
          <div className='flex w-64'>
            <input
              className='rounded-tl-lg outline-none bg-fake-black placeholder:px-1 w-full p-2 sm:p-1'
              type='text'
              placeholder='Nombre'
            />
            <input
              className='rounded-tr-lg outline-none bg-fake-black placeholder:px-1 w-full p-2 sm:p-1'
              type='text'
              placeholder='Apellido'
            />
          </div>
          <input
            className='outline-none bg-fake-black placeholder:px-1 w-full p-2 sm:p-1'
            type='email'
            placeholder='Email'
            name='email'
          />
          <input
            className='outline-none bg-fake-black placeholder:px-1 w-full p-2 sm:p-1'
            type='password'
            placeholder='Contraseña'
          />
          <input
            className='rounded-b-lg outline-none bg-fake-black placeholder:px-1 w-full p-2 sm:p-1'
            type='password'
            placeholder='Confirmar contraseña'
          />
          <button
            className='text-center w-full mt-5 py-2 sm:py-1 rounded-xl border-2 border-tabasco-red bg-tabasco-red hover:bg-tabasco-red-dark hover:border-black active:bg-tabasco-red-light active:border-black text-white'
            type='submit'
            onClick={notificarRegistro}
          >
            Registrarse
          </button>
          <div className='flex text-gray-500 mt-4' href='#'>
            ¿Ya tenés cuenta?
            <span className='text-birch-wood hover:underline'>
              <CustomLink className='ml-1' to='/login'>
                Logueate
              </CustomLink>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};
