import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import Hero from '@/components/sections/Hero';
import HeroContent from './HeroContent';
import { homeHeroBg, heroMobile, comp19 } from '@/assets/images';
import Button from '@/components/ui/Button';

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
      button={
        <Button
          backgroundImage={comp19}
          onClick={handleGameplayClick}
          className="w-45 aspect-[3.1/1.7] hover:brightness-110 pointer-events-auto"
        />
      }
      buttonClassName="top-[580px] right-[32%] xl:top-[610px] xl:right-[35%]"
      className="min-h-screen flex items-center justify-center"
    >
      <HeroContent />
    </Hero>
  );
}

export default HomeHero;
