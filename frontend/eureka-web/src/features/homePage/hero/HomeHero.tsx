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
      content={<HeroContent />}
      className="h-screen flex items-center justify-center"
      actions={
        <Button
          backgroundImage={comp_19}
          className="absolute
                    z-20
                    bottom-[17%]
                    left-[52.5%]
                    w-[12%]
                    h-[12%]
                    aspect-2/1
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
