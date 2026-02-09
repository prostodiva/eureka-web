import Hero from '../../../components/sections/Hero.tsx';
import HeroContent from './HeroContent.tsx';
import Button from '../../../components/Button.tsx';
import homeHeroBg from '../../../assets/bg/homeHero.png';

function HomeHero() {

  const handleGameplayClick = () => {
    console.log('gameplay clicked');
  }

  return (
    <Hero
      backgroundImage={homeHeroBg}
      minHeightScreen
      content={
        <HeroContent
          title="Hero Section home page"
          description="hero section description blah-blah"
        />
      }
      actions={
        <Button variant="primary" onClick={handleGameplayClick}>
          Gameplay
        </Button>
      }
    />
  );
}

export default HomeHero;