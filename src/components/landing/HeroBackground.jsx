import useWindowDimensions from '../../windowDimensions';
import backgroundHero_big from './assets/hero_big.png';
import backgroundHero_medium from './assets/hero_medium.jpeg';
import backgroundHero_small from './assets/hero_small.jpeg';

const HeroBackground = ({ img, title, description, imgPosition }) => {
  const { height, width } = useWindowDimensions();

  if (width > 880) {
    return <img className='backgroundHero' src={backgroundHero_big} />;
  } else if (width > 586) {
    return <img className='backgroundHero' src={backgroundHero_medium} />;
  } else {
    return <img className='backgroundHero' src={backgroundHero_small} />;
  }
};

export default HeroBackground;
