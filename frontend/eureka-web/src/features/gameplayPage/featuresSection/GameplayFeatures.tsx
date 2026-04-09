import Hero from '@/components/sections/Hero';
import GameplayFeaturesContent from './GameplayFeaturesContent';
import { gameplayFeatures } from '@/assets/images';

function FeaturesSection() {
  return (
    <Hero
      backgroundImage={gameplayFeatures}
      content={<GameplayFeaturesContent />}
    />
  );
}

export default FeaturesSection;
