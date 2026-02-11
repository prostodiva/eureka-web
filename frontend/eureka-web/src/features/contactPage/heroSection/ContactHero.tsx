import Hero from '../../../components/sections/Hero.tsx';
import Button from '../../../components/ui/Button.tsx';
import homeHeroBg from '../../../assets/bg/homeHero.png';
import ContactHeroContent from './ContactHeroContent.tsx';

function ContactHero() {
  const handleGameplayClick = () => {
    console.log('gameplay clicked');
  };

  return (
    <Hero
      backgroundImage={homeHeroBg}
      minHeightScreen
      content={
        <ContactHeroContent
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

export default ContactHero;
