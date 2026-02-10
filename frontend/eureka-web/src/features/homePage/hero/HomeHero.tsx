import Hero from '../../../components/sections/Hero.tsx';
import HeroContent from './HeroContent.tsx';
import Button from '../../../components/Button.tsx';
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
      minHeightScreen
      content={
        <HeroContent
          title="Hero Section home page"
          description="hero section description blah-blah"
        />
      }
      actions={
        <div
          className="absolute z-50 -translate-y-1/2"
        >
          <Button
            backgroundImage={comp_19}
            className="w-40 h-22
                      sm:w-48 sm:h-28
                      md:w-60 md:h-34
                      lg:w-72 lg:h-40"
            onClick={handleGameplayClick}
          >
            <span className="sr-only">Gameplay</span>
          </Button>
        </div>
      }
    />
  );
}

export default HomeHero;