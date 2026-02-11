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
  }

  return (
    <Hero
      backgroundImage={homeHeroBg}
      content={<HeroContent />}
      actions={
        <Button
          backgroundImage={comp_19}
          className="absolute
                    bottom-16
                    right-16
                    w-[clamp(140px,18vw,320px)]
                    aspect-2/1"
          onClick={handleGameplayClick}
        >
          <span className="sr-only">Gameplay</span>
        </Button>
      }
    />
  );
}

export default HomeHero;