import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import Hero from '@/components/sections/Hero';
import HeroContent from './HeroContent';
import { homeHeroBg, heroMobile, comp19 } from '@/assets/images';

function HomeHero() {
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width: 640px)');

  const handleGameplayClick = () => {
    navigate('/gameplay');
  };

  return (
    <Hero
      backgroundImage={isMobile ? heroMobile : homeHeroBg}
      style={{ backgroundColor: '#8658F1' }}
      content={
        <HeroContent
          onGameplayClick={handleGameplayClick}
          buttonImage={comp19}
        />
      }
      className="min-h-screen flex items-center justify-center"
    />
  );
}

export default HomeHero;
