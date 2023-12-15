import { Link, useMatch, useResolvedPath } from "react-router-dom"

const Register = () => {
  return (
    <div className="flex justify-center bg-[#0d0d0d] h-full p-7">
      <div className="flex justify-center rounded-xl p-10 bg-black mt-12 w-full sm:w-[22em]">
        <form className="flex flex-col items-center text-white" name="registration_form" action="#">
          <div className="flex w-64">
            <input className="rounded-tl-lg outline-none bg-[#0d0d0d] placeholder:px-1 w-full p-2 sm:p-1" type="text" placeholder="Nombre"/> 
            <input className="rounded-tr-lg outline-none bg-[#0d0d0d] placeholder:px-1 w-full p-2 sm:p-1" type="text" placeholder="Apellido"/>
          </div>
            <input className="outline-none bg-[#0d0d0d] placeholder:px-1 w-full p-2 sm:p-1" type="email" placeholder="Email" name="email"/> 
            <input className="outline-none bg-[#0d0d0d] placeholder:px-1 w-full p-2 sm:p-1" type="password" placeholder="Contraseña"/>
            <input className="rounded-b-lg outline-none bg-[#0d0d0d] placeholder:px-1 w-full p-2 sm:p-1" type="password" placeholder="Confirmar contraseña"/>
            <button className="border-none  border-2 text-center w-full mt-5 py-2 sm:py-1 rounded-xl bg-[#a6121f] text-white" type="submit" onClick={notificarRegistro}>
              Registrarse
            </button> 
            <div className="flex text-gray-500 mt-4" href="#"> ¿Ya tenés cuenta?
              <span className="text-[#D9BD8B] hover:underline">
                <CustomLink className="ml-1" onClick={scrollToTop} to="/login"> Logueate</CustomLink>
              </span>
            </div>
        </form>
      </div>
    </div>
  );
};

  const notificarRegistro = () => {
    let email_filled = document.forms["registration_form"]["email"].value
    if (email_filled) {
      alert("¡Confirmación necesaria! Revise en su casilla de correo")
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  
  function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
      <div className={isActive ? "text-slate-500" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </div>
    )
  }
  
  export default Register;