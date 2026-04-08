import Hero from '../../../components/sections/Hero.tsx';
import HeroContent from './HeroContent.tsx';
import Button from '../../../components/ui/Button.tsx';
import { makeResponsiveImage } from '../../../utils/makeResponsiveImage.ts';
import homeHero400avif from '../../../assets/optimized/homeHero-400.avif';
import homeHero800avif from '../../../assets/optimized/homeHero-800.avif';
import homeHero1200avif from '../../../assets/optimized/homeHero-1200.avif';
import homeHero1600avif from '../../../assets/optimized/homeHero-1600.avif';
import homeHero2400avif from '../../../assets/optimized/homeHero-2400.avif';
import homeHero400webp from '../../../assets/optimized/homeHero-400.webp';
import homeHero800webp from '../../../assets/optimized/homeHero-800.webp';
import homeHero1200webp from '../../../assets/optimized/homeHero-1200.webp';
import homeHero1600webp from '../../../assets/optimized/homeHero-1600.webp';
import homeHero2400webp from '../../../assets/optimized/homeHero-2400.webp';
import comp19400avif from '../../../assets/optimized/comp_19-400.avif';
import comp19800avif from '../../../assets/optimized/comp_19-800.avif';
import comp191200avif from '../../../assets/optimized/comp_19-1200.avif';
import comp191600avif from '../../../assets/optimized/comp_19-1600.avif';
import comp192400avif from '../../../assets/optimized/comp_19-2400.avif';
import comp19400webp from '../../../assets/optimized/comp_19-400.webp';
import comp19800webp from '../../../assets/optimized/comp_19-800.webp';
import comp191200webp from '../../../assets/optimized/comp_19-1200.webp';
import comp191600webp from '../../../assets/optimized/comp_19-1600.webp';
import comp192400webp from '../../../assets/optimized/comp_19-2400.webp';
import { useNavigate } from 'react-router-dom';

const homeHeroBg = makeResponsiveImage({
  fallbackSrc: homeHero800webp,
  avif400: homeHero400avif,
  avif800: homeHero800avif,
  avif1200: homeHero1200avif,
  avif1600: homeHero1600avif,
  avif2400: homeHero2400avif,
  webp400: homeHero400webp,
  webp800: homeHero800webp,
  webp1200: homeHero1200webp,
  webp1600: homeHero1600webp,
  webp2400: homeHero2400webp,
});

const comp_19 = makeResponsiveImage({
  fallbackSrc: comp19800webp,
  avif400: comp19400avif,
  avif800: comp19800avif,
  avif1200: comp191200avif,
  avif1600: comp191600avif,
  avif2400: comp192400avif,
  webp400: comp19400webp,
  webp800: comp19800webp,
  webp1200: comp191200webp,
  webp1600: comp191600webp,
  webp2400: comp192400webp,
});

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
            backgroundImage={comp_19}
            className="pointer-events-auto absolute z-20 bottom-[17vh] 2xl:bottom-[13vh] left-[52.5vw] w-[12vw] aspect-[3.1/1.7] hover:brightness-110"
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
