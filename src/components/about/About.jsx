import { React, useState } from 'react'
import { RiFocus2Line } from "react-icons/ri";
import { IoIosPerson } from "react-icons/io";
import { IoSparkles } from "react-icons/io5";
import { IoChatbubbles } from "react-icons/io5";
import { RiMedalFill } from "react-icons/ri";
import { IoIosWarning } from "react-icons/io";

export const About = () => {
  const [mobileView, setMobileView] = useState();

  return (
    <div className="flex flex-col items-center bg-[#0d0d0d]">

    <div className='flex flex-col xl:h-screen justify-between bg-black w-full gap-4 p-4'>
      <img className="flex sm:hidden w-full min-w-[250px] min-h-[250px]" src="our_story.jpg" />
      <img className="hidden sm:flex w-full min-w-[250px] min-h-[250px]" src="our_story_wide.jpg" />
      
      <section className="flex flex-col justify-center bg-black w-full gap-4 p-4">
        {/* <h2 className='text-center font-space-grotesk text-4xl sm:text-6xl font-bold text-white mb-3'>
          NUESTRA HISTORIA
        </h2> */}
        <p className='text-left sm:text-center text-xl lg:text-2xl text-[#D9BD8B]'>
          En una tierra donde la imaginación se encuentra con la estrategia, nació la idea de Alpacas de Guerra.
        </p>
        <p className='text-left sm:text-center  text-xl lg:text-2xl text-[#D9BD8B]'>
          En una noche lluviosa de tormenta, un equipo visionario se reunió para dar vida a la fusión perfecta entre la elegancia de las alpacas y la ferocidad de la guerra.
        </p>
        <p className='text-left sm:text-center  text-xl lg:text-2xl text-[#D9BD8B]'>
          Y así, con una mezcla única de creatividad y determinación, nació nuestra empresa.
        </p>
      </section>
    </div>
    

      <section className="flex flex-col justify-center p-7">
        <RiFocus2Line className='flex w-full text-9xl my-3 text-white' />
        <h2 className='text-center font-space-grotesk text-4xl sm:text-6xl font-bold text-white mb-3'>
          MISION Y VALORES
        </h2>
        <p className='text-left text-xl lg:text-2xl text-[#D9BD8B] mb-3'>
          Impulsar la innovación en el campo de batalla proporcionando compañeros de guerra inusuales pero altamente eficientes: las alpacas. Nos esforzamos por ofrecer soluciones únicas que desafíen las convenciones y brinden una ventaja estratégica.
        </p>
        <p className='text-left text-xl lg:text-2xl text-[#D9BD8B]'>
          La integridad, la creatividad y el compromiso con la excelencia son los pilares que sustentan cada decisión que tomamos. Creemos en un enfoque ético hacia la guerra y estamos comprometidos con prácticas sostenibles.
        </p>
      </section>

      <div className='flex w-48 border-t-2 rounded-lg border-white shadow-lg shadow-black shado'/>

      <section className="flex flex-col justify-center p-7">
        <div className='flex'>
          <IoIosPerson className='flex w-full text-9xl my-3 text-white' />
          <IoIosPerson className='flex w-full text-9xl my-3 text-white' />
          <IoIosPerson className='flex w-full text-9xl my-3 text-white' />
        </div>

        <h2 className='text-center font-space-grotesk text-4xl sm:text-6xl font-bold text-white mb-3'>
          EL EQUIPO
        </h2>
        <p className='text-left text-xl lg:text-2xl text-[#D9BD8B] mb-3'>
          Detrás de cada alpaca de guerra hay un equipo apasionado de expertos en diversas disciplinas. Desde criadores de alpacas hasta estrategas militares, nuestro equipo diverso trabaja en armonía para llevar lo inesperado al campo de batalla.
        </p>
      </section>

      <div className='flex w-48 border-t-2 rounded-lg border-white'/>

      <section className="flex flex-col justify-center p-7">
        <IoSparkles className='flex w-full text-9xl my-3 text-white' />
        <h2 className='text-center font-space-grotesk text-4xl sm:text-6xl font-bold text-white mb-3'>
          COMPROMISO CON LA CALIDAD
        </h2>
        <p className='text-left text-xl lg:text-2xl text-[#D9BD8B] mb-3'>
          Seleccionamos cuidadosamente a nuestras alpacas de guerra, asegurando que cada una cumpla con estándares rigurosos de entrenamiento y resistencia. La calidad es nuestra prioridad, y nos enorgullece ofrecer solo lo mejor.
        </p>
      </section>

      <div className='flex w-48 border-t-2 rounded-lg border-white'/>

      <section className="flex flex-col justify-center px-5 py-7">
        <IoChatbubbles className='flex w-full text-9xl my-3 text-white' />
        <h2 className='text-center font-space-grotesk text-4xl sm:text-6xl font-bold text-white mb-3'>
          TESTIMONIOS
        </h2>
        <h3 className='text-left font-space-grotesk text-2xl sm:text-4xl font-bold text-white mb-3'>
          General A. Rodriguez:
        </h3>
        <blockquote className='bg-black p-5 rounded-lg mb-3'>
          <i className='text-left text-xl lg:text-2xl text-[#D9BD8B] '>
            "Las alpacas de guerra cambiaron por completo nuestra estrategia. Son increíblemente versátiles y sorprendentemente adorables. La forma en que se integran en nuestras operaciones es simplemente fenomenal."
          </i>
        </blockquote>
        <h3 className='text-left font-space-grotesk text-2xl sm:text-4xl font-bold text-white mb-3'>
          Comandante E. Parker:
        </h3>
        <blockquote className='bg-black p-5 mb-3 rounded-lg'>
          <i className='text-left text-xl lg:text-2xl text-[#D9BD8B]'>
          "Nuestra unidad ha experimentado un cambio monumental desde que incorporamos las alpacas de guerra. No solo han mejorado nuestra eficiencia táctica, sino que también han elevado el espíritu de la tropa. ¡Recomendaría estas asombrosas criaturas a cualquier fuerza militar!"
          </i>
        </blockquote>
      </section>

      <div className='flex w-48 border-t-2 rounded-lg border-white'/>

      <section className="flex flex-col justify-center px-5 py-7">
        <h2 className='text-center font-space-grotesk text-4xl sm:text-6xl font-bold text-white my-3'>
          RECONOCIMIENTOS Y PREMIOS
        </h2>

        <div className='bg-black p-5 rounded-lg mb-3'>
          <RiMedalFill className='flex w-full text-9xl my-3 text-white' />
          <h4 className='text-center font-space-grotesk text-2xl sm:text-4xl font-bold text-white'>
            Premio a la Innovación Militar
          </h4>
          <h3 className='text-center font-space-grotesk text-md sm:text-4xl font-bold text-white mb-3'>
            Simposio Internacional de Estrategias de Guerra
          </h3>
          <p className='text-left text-xl lg:text-2xl text-[#D9BD8B] '>
            En reconocimiento a nuestra contribución excepcional a la innovación militar, las Alpacas de Guerra fueron galardonadas con el prestigioso "Premio a la Innovación Militar" en el Simposio Internacional de Estrategias de Guerra. Este premio destaca nuestro compromiso con la excelencia y la creatividad en el campo de batalla.
          </p>
        </div>

        <div className='bg-black p-5 rounded-lg mb-3'>
          <RiMedalFill className='flex w-full text-9xl my-3 text-white' />
          <h4 className='text-center font-space-grotesk text-2xl sm:text-4xl font-bold text-white'>
            Mención Especial en Sostenibilidad 
          </h4>
          <h3 className='text-center font-space-grotesk text-md sm:text-4xl font-bold text-white mb-3'>
            Cumbre de Estrategias Militares Globales
          </h3>
          <p className='text-left text-xl lg:text-2xl text-[#D9BD8B] '>
            Hemos sido honrados con una Mención Especial en Sostenibilidad en la Cumbre de Estrategias Militares Globales. Este reconocimiento destaca nuestro compromiso con prácticas sostenibles en la producción y el impacto ambiental positivo.
          </p>
        </div>
      </section>

      <div className='flex w-48 border-t-2 rounded-lg border-white'/>

      <section className="flex flex-col justify-center p-7">
        <IoIosWarning className='flex w-full text-9xl my-3 text-white' />
        <h2 className='text-center font-space-grotesk text-4xl sm:text-6xl font-bold text-white mb-3'>
          DISCLAIMER FINAL
        </h2>
        <p className='text-left text-xl lg:text-2xl text-[#D9BD8B] mb-3'>
          Este sitio web y su contenido son parte de un proyecto de demostración y son completamente ficticios. BATTLE LLAMAS es una empresa imaginaria creada con fines creativos y de prueba. Ningún producto o servicio anunciado en este sitio web es real, y cualquier similitud con nombres, personas, empresas, vivas o muertas, es pura coincidencia.
        </p>
        <p className='text-left text-xl lg:text-2xl text-[#D9BD8B] mb-3'>
          Cualquier información proporcionada en este sitio web, ya sea textual o visual, está destinada únicamente con fines ilustrativos y no debe tomarse como información real o verídica.
        </p>
        <p className='text-left text-xl lg:text-2xl text-[#D9BD8B] mb-3'>
          Gracias por visitar BATTLE LLAMAS. Si tienes alguna pregunta o inquietud, no dudes en ponerte en contacto con nosotros.
        </p>
        <button className='text-center font-bold text-black hover:text-white bg-white hover:bg-[#a6121f] active:bg-[#a6121f] active:text-white rounded-lg border-1 text-lg py-0.5 px-2.5'>
          Contacto
        </button> 
      </section>

    </div>
  )
}
