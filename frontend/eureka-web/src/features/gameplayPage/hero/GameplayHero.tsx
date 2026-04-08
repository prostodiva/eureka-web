import Hero from '../../../components/sections/Hero.tsx';
import GameplayHeroContent from './GameplayHeroContent.tsx';
import { makeResponsiveImage } from '../../../utils/makeResponsiveImage.ts';
import gameplay400avif from '../../../assets/optimized/aboutUsHome-400.avif';
import gameplay800avif from '../../../assets/optimized/aboutUsHome-800.avif';
import gameplay1200avif from '../../../assets/optimized/aboutUsHome-1200.avif';
import gameplay1600avif from '../../../assets/optimized/aboutUsHome-1600.avif';
import gameplay2400avif from '../../../assets/optimized/aboutUsHome-2400.avif';
import gameplay400webp from '../../../assets/optimized/aboutUsHome-400.webp';
import gameplay800webp from '../../../assets/optimized/aboutUsHome-800.webp';
import gameplay1200webp from '../../../assets/optimized/aboutUsHome-1200.webp';
import gameplay1600webp from '../../../assets/optimized/aboutUsHome-1600.webp';
import gameplay2400webp from '../../../assets/optimized/aboutUsHome-2400.webp';

const gameplay = makeResponsiveImage({
  fallbackSrc: gameplay800webp,
  avif400: gameplay400avif,
  avif800: gameplay800avif,
  avif1200: gameplay1200avif,
  avif1600: gameplay1600avif,
  avif2400: gameplay2400avif,
  webp400: gameplay400webp,
  webp800: gameplay800webp,
  webp1200: gameplay1200webp,
  webp1600: gameplay1600webp,
  webp2400: gameplay2400webp,
});

function GameplayHero() {
  return (
    <Hero
      backgroundImage={gameplay}
      style={{ backgroundColor: '#A37CFF' }}
      content={<GameplayHeroContent />}
    />
  );
}

export default GameplayHero;
