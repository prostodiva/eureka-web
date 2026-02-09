import Hero from '../../../components/sections/Hero.tsx';
import Button from '../../../components/Button.tsx';
import homeHeroBg from '../../../assets/bg/homeHero.png';
import SupportHeroContent from './SupportHeroContent.tsx';

function SupportHero() {
  const handleGameplayClick = () => {
    console.log('gameplay clicked');
  };

  return (
    <Hero
      backgroundImage={homeHeroBg}
      minHeightScreen
      content={
        <SupportHeroContent
          title="hero section on support page"
          description="hero description blah-blah"
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

export default SupportHero;
