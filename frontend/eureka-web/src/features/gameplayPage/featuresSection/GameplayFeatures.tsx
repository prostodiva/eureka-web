import Hero from '@/components/sections/Hero';
import GameplayFeaturesContent from './GameplayFeaturesContent';

function FeaturesSection() {
  return (
    <Hero
      style={{ backgroundColor: '#FFD743' }}
      className="min-h-screen flex items-start justify-center"
    >
      <GameplayFeaturesContent />
    </Hero>
  );
}

export default FeaturesSection;
