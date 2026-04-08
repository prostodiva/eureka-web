import gameplayFeatures400avif from '../../../assets/optimized/gameplayFeatures-400.avif';
import gameplayFeatures800avif from '../../../assets/optimized/gameplayFeatures-800.avif';
import gameplayFeatures1200avif from '../../../assets/optimized/gameplayFeatures-1200.avif';
import gameplayFeatures1600avif from '../../../assets/optimized/gameplayFeatures-1600.avif';
import gameplayFeatures2400avif from '../../../assets/optimized/gameplayFeatures-2400.avif';
import gameplayFeatures400webp from '../../../assets/optimized/gameplayFeatures-400.webp';
import gameplayFeatures800webp from '../../../assets/optimized/gameplayFeatures-800.webp';
import gameplayFeatures1200webp from '../../../assets/optimized/gameplayFeatures-1200.webp';
import gameplayFeatures1600webp from '../../../assets/optimized/gameplayFeatures-1600.webp';
import gameplayFeatures2400webp from '../../../assets/optimized/gameplayFeatures-2400.webp';
import GameplayFeaturesContent from './GameplayFeaturesContent.tsx';
import Hero from '../../../components/sections/Hero.tsx';
import { makeResponsiveImage } from '../../../utils/makeResponsiveImage.ts';

const gameplayFeatures = makeResponsiveImage({
  fallbackSrc: gameplayFeatures800webp,
  avif400: gameplayFeatures400avif,
  avif800: gameplayFeatures800avif,
  avif1200: gameplayFeatures1200avif,
  avif1600: gameplayFeatures1600avif,
  avif2400: gameplayFeatures2400avif,
  webp400: gameplayFeatures400webp,
  webp800: gameplayFeatures800webp,
  webp1200: gameplayFeatures1200webp,
  webp1600: gameplayFeatures1600webp,
  webp2400: gameplayFeatures2400webp,
});

function FeaturesSection() {
  return (
    <Hero
      backgroundImage={gameplayFeatures}
      content={<GameplayFeaturesContent />}
    />
  );
}

export default FeaturesSection;
