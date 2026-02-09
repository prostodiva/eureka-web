import Hero from '../../../components/sections/Hero.tsx';
import AboutUsHeroContent from './AboutUsHeroContent.tsx';
import Button from '../../../components/Button.tsx';
import homeHeroBg from '../../../assets/bg/homeHero.png';

function AboutUsHeroSection() {
  const handleGameplayClick = () => {
    console.log('gameplay clicked');
  };

  return (
    <Hero
      backgroundImage={homeHeroBg}
      minHeightScreen
      content={
        <AboutUsHeroContent
          title="About us hero section about us page"
          description="About us description blah-blah"
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

export default AboutUsHeroSection;
