
import gameplayFeatures from '../../../assets/bg/gameplayFeatures.png';
import GameplayFeaturesContent from './GameplayFeaturesContent.tsx';
import Hero from '../../../components/sections/Hero.tsx';

function FeaturesSection() {
  return (
    <Hero
      backgroundImage={gameplayFeatures}
      content={<GameplayFeaturesContent />}
    />
  );
}

export default FeaturesSection;
