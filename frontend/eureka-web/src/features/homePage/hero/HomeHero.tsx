import Hero from '../../../components/sections/Hero.tsx';
import HeroContent from './HeroContent.tsx';
import Button from '../../../components/ui/Button.tsx';
import homeHeroBg from '../../../assets/bg/homeHero.png';
import comp_19 from '../../../assets/comp_19.png';
import { useNavigate } from 'react-router-dom';

function HomeHero() {
  const navigate = useNavigate();

  const handleGameplayClick = () => {
    navigate('/gameplay');
  };

  return (
    <Hero
      backgroundImage={homeHeroBg}
      style={{ backgroundColor: '#8658F1' }}
      content={<HeroContent />}
      className="min-h-screen flex items-center justify-center"
      actions={
        <Button
          backgroundImage={comp_19}
          className="absolute
            z-20
            bottom-[17vh]
            2xl:bottom-[13vh]
            left-[52.5vw]
            w-[12vw]
            aspect-[3.1/1.7]
            hover:brightness-110"
          onClick={handleGameplayClick}
        >
          <span className="sr-only">Gameplay</span>
        </Button>
      }
    />
  );
}

export default HomeHero;
