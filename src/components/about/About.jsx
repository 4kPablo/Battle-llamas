import React from 'react'
import { RiFocus2Line } from "react-icons/ri";
import { IoIosPerson } from "react-icons/io";
import { IoSparkles } from "react-icons/io5";

export const About = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <img className="flex w-full min-w-[250px] min-h-[250px]" src="our_story.jpg" />
        <div className="flex flex-col justify-center gap-4 p-4">
          {/* <h2 className='text-center font-space-grotesk text-4xl sm:text-6xl font-bold text-white mb-3'>
            NUESTRA HISTORIA
          </h2> */}
          <p className='text-left text-xl lg:text-2xl text-[#D9BD8B]'>
            En una tierra donde la imaginación se encuentra con la estrategia, nació la idea de Alpacas de Guerra.
          </p>
          <p className='text-left text-xl lg:text-2xl text-[#D9BD8B]'>
            En una noche lluviosa de tormenta, un equipo visionario se reunió para dar vida a la fusión perfecta entre la elegancia de las alpacas y la ferocidad de la guerra.
          </p>
          <p className='text-left text-xl lg:text-2xl text-[#D9BD8B]'>
            Y así, con una mezcla única de creatividad y determinación, nació nuestra empresa.
          </p>
        </div>

        <div className="flex flex-col justify-center p-4 bg-[#0d0d0d]">
          <RiFocus2Line className='flex w-full text-9xl my-3 text-white' />
          <h2 className='text-center font-space-grotesk text-4xl sm:text-6xl font-bold text-white mb-3'>
            MISION Y VALORES
          </h2>
          <p className='text-left text-xl lg:text-2xl text-[#D9BD8B] mb-3'>
            <b className='text-white'>Misión:</b> Impulsar la innovación en el campo de batalla proporcionando compañeros de guerra inusuales pero altamente eficientes: las alpacas. Nos esforzamos por ofrecer soluciones únicas que desafíen las convenciones y brinden una ventaja estratégica.
          </p>
          <p className='text-left text-xl lg:text-2xl text-[#D9BD8B]'>
            <b className='text-white'>Valores:</b> La integridad, la creatividad y el compromiso con la excelencia son los pilares que sustentan cada decisión que tomamos. Creemos en un enfoque ético hacia la guerra y estamos comprometidos con prácticas sostenibles.
          </p>
        </div>

        <div className="flex flex-col justify-center p-4 bg-[#0d0d0d]">
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
        </div>

        <div className="flex flex-col justify-center p-4 bg-[#0d0d0d]">
          <IoSparkles className='flex w-full text-9xl my-3 text-white' />
          <h2 className='text-center font-space-grotesk text-4xl sm:text-6xl font-bold text-white mb-3'>
            COMPROMISO CON LA CALIDAD
          </h2>
          <p className='text-left text-xl lg:text-2xl text-[#D9BD8B] mb-3'>
            Seleccionamos cuidadosamente a nuestras alpacas de guerra, asegurando que cada una cumpla con estándares rigurosos de entrenamiento y resistencia. La calidad es nuestra prioridad, y nos enorgullece ofrecer solo lo mejor.
          </p>
        </div>

        <div className="flex flex-col justify-center p-4 bg-[#0d0d0d]">
          <IoSparkles className='flex w-full text-9xl my-3 text-white' />
          <h2 className='text-center font-space-grotesk text-4xl sm:text-6xl font-bold text-white mb-3'>
            TESTIMONIOS
          </h2>
          <i className='text-left text-xl lg:text-2xl text-[#D9BD8B] mb-3'>
            "Las alpacas de guerra cambiaron por completo nuestra estrategia. Son increíblemente versátiles y sorprendentemente adorables. La forma en que se integran en nuestras operaciones es simplemente fenomenal."
          </i>
        </div>

      </div>
    </>
  )
}
