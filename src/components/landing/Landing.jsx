import useWindowDimensions from '../../windowDimensions';
import versatilidad from './assets/versatilidad.jpg';
import noagresivas from './assets/noagresivas.jpg';
import bajocosto from './assets/bajocosto.jpg';
import proteccion from './assets/proteccion.jpg';
import conservacion from './assets/conservacion.jpg';
import { LandingHorizontalCard } from './LandingHorizontalCard';
import { LandingVerticalCard } from './LandingVerticalCard';
import { HeroBackground } from './HeroBackground';
import { HeroCard } from './HeroCard';
import { HeroStats } from './HeroStats';
import { MdDoubleArrow } from 'react-icons/md';
import { IconContext } from 'react-icons';
import { CustomLink } from '../CustomLink';
import { FeaturedProducts } from './FeaturedProducts';

export const Landing = () => {
  const { height, width } = useWindowDimensions();
  let landingTitle = '';

  if (width > 685) {
    landingTitle = '- BATTLE LLAMAS -';
  } else {
    landingTitle = 'BATTLE LLAMAS';
  }

  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='text-7xl min-[901px]:text-8xl flex text-black bg-black font-space-grotesk justify-center text-center outlined-text w-full z-40 p-5'>
        {landingTitle}
      </h1>
      <HeroBackground />
      <HeroCard />

      <section className='flex flex-col w-full bg-fake-black px-5 2xl:px-0'>
        <div className='max-w-7xl my-0 mx-auto'>
          <HeroStats />
          <div className='flex flex-col justify-center items-center gap-20 mb-20'>
            <LandingHorizontalCard
              img={versatilidad}
              imgPosition='left'
              title='Versatilidad en el campo de batalla'
              description='Las alpacas de guerra son criaturas sorprendentes y altamente adaptables. Su resistencia y agilidad las convierten en excelentes compañeras para situaciones de combate. Son capaces de atravesar terrenos difíciles, como montañas y selvas, lo que las convierte en una opción inigualable para operaciones militares y tareas de reconocimiento.'
            />
            <LandingHorizontalCard
              img={noagresivas}
              title='No agresivas'
              imgPosition='right'
              description='A diferencia de otros animales de carga o transporte en el campo de batalla, las alpacas de guerra no son naturalmente agresivas, lo que las hace fiables y seguras en entornos sensibles. También son capaces de distinguir entre amigos y enemigos, brindando seguridad en el combate.'
            />
          </div>
          <div className='flex flex-col min-[640px]:flex-row justify-between gap-20 gap-x-5 w-full mb-20 sm:my-20'>
            <LandingVerticalCard
              img={bajocosto}
              title='Bajo costo de mantenimiento'
              description='Se adaptan a diferentes climas y su alimentación se basa en pasto, lo que reduce los costos. Además, son limpias y no emiten olores desagradables, lo que las hace adecuadas para campamentos militares.'
            />
            <LandingVerticalCard
              img={proteccion}
              title='Protección de vidas humanas'
              description='Las alpacas de guerra protegen vidas humanas al transportar cargas pesadas y atravesar terrenos difíciles. Son útiles en rescates y ayuda humanitaria, reduciendo el riesgo para el personal militar y mejorando la respuesta en desastres naturales.'
            />
            <LandingVerticalCard
              img={conservacion}
              title='Conservación de especies'
              description='La cría responsable de alpacas de guerra contribuye a la conservación de la especie. Al adquirir una alpaca de guerra, estás apoyando los esfuerzos para mantener y proteger esta valiosa especie, evitando su extinción y promoviendo la biodiversidad.'
            />
          </div>
        </div>
      </section>

      <section className='bg-black flex flex-col justify-center items-center py-20 gap-20'>
        <h1 className='font-space-grotesk w-full px-5 outlined-text text-6xl sm:text-7xl min-[865px]:text-8xl text-center'>
          HAZ QUE TU ENEMIGO TIEMBLE
        </h1>

        <FeaturedProducts />

        <div className='flex items-center justify-center gap-5'>
          <IconContext.Provider
            value={{ color: '#D9BD8B', size: '76px', className: 'IconContext' }}
          >
            <MdDoubleArrow />
            <CustomLink
              className='flex bg-tabasco-red border-tabasco-red  border-2 text-center py-2 px-7 rounded-xl text-white'
              to='/store'
            >
              <p className='text-2xl'>CATÁLOGO COMPLETO</p>
            </CustomLink>
            <MdDoubleArrow />
          </IconContext.Provider>
        </div>
      </section>

      <section className='flex justify-between border-2 border-gray-500 mb-20 p-7 min-h-20 gap-6 rounded-md'>
        <div className='flex flex-col justify-between gap-3'>
          <h2 className=' text-left text-2xl lg:text-4xl font-bold text-white'>
            Animal warfare S.A.
          </h2>
          <p className=' text-left text-lg lg:text-2xl text-gray-500'>
            Innovación militar para países en desarrollo
          </p>
        </div>
        <CustomLink
          className='flex h-full w-32 items-center text-center text-lg py-2 px-7 bg-fake-black hover:text-white rounded-full  text-gray-500'
          to='/about'
        >
          ¿Quiénes somos?
        </CustomLink>
      </section>
    </div>
  );
};
