import { useMediaQuery } from '@/hooks/useMediaQuery.tsx';
import Section from '@/components/Section.tsx';
import { useNavigate } from 'react-router-dom';

import HeroContent from './HeroContent.tsx';
import { homeHeroBg, heroMobile } from '@/assets/images';
import { comp19 } from '@/assets/images';
import Button from '@/components/ui/Button.tsx';

function HomeHero() {
  const isMobile = useMediaQuery('(max-width: 640px)');

  const navigate = useNavigate();
  const handleGameplayClick = () => {
    navigate('/gameplay');
  };

  return (
    <Section
      backgroundImage={isMobile ? heroMobile : homeHeroBg}
      style={{ backgroundColor: '#8658F1' }}
      className="min-h-screen flex items-center justify-center"
    >
      <div
        className={`absolute z-20 top-[590px] right-[26%] xl:top-[580px] xl:right-[32%] xl:top-[610px] xl:right-[35%] 2xl:top-[1000px] 2xl:right-[36%]`}
      >
        <Button
          backgroundImage={comp19}
          onClick={handleGameplayClick}
          className="w-50 xl:w-45 2xl:w-65 aspect-[3.1/1.7] hover:brightness-110 pointer-events-auto"
        />
      </div>
      <HeroContent />
    </Section>
  );
}

export default HomeHero;
