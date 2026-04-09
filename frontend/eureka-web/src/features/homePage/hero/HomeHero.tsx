import { useNavigate } from 'react-router-dom';
import Hero from '@/components/sections/Hero';
import HeroContent from './HeroContent';
import Button from '@/components/ui/Button';
import { homeHeroBg, comp19 } from '@/assets/images';

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
            <div className="absolute inset-0 pointer-events-none">
              <Button
                  backgroundImage={comp19}
                  className="pointer-events-auto absolute z-20 bottom-[17vh] 2xl:bottom-[13vh] left-[52.5vw] w-[12vw] aspect-[3.1/1.7] hover:brightness-110"
                  onClick={handleGameplayClick}
              >
              </Button>
            </div>
          }
      />
  );
}

export default HomeHero;
