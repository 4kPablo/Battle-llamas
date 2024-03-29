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
import { CustomLink } from '../CustomLink';
import { MdDoubleArrow } from 'react-icons/md';
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
        <h1 className='font-space-grotesk w-full px-5 outlined-text text-5xl sm:text-7xl min-[865px]:text-8xl text-center'>
          HAZ QUE TU ENEMIGO TIEMBLE
        </h1>

        <FeaturedProducts />

        <div className='flex items-center justify-center gap-3 sm:gap-5'>
          <MdDoubleArrow className='text-4xl sm:text-6xl text-birch-wood sm:block' />
          <CustomLink
            className='flex border-2 border-tabasco-red bg-tabasco-red hover:bg-tabasco-red-dark hover:border-black active:bg-tabasco-red-light active:border-black text-white text-center py-2 px-7 rounded-xl'
            to='/store'
          >
            <p className='text-2xl'>CATÁLOGO COMPLETO</p>
          </CustomLink>
          <MdDoubleArrow className='text-4xl sm:text-6xl text-birch-wood sm:block rotate-180' />
        </div>
      </section>
    </div>
  );
};
