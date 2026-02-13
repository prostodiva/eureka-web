import Features from '../../../components/sections/Features.tsx';
import gameplayFeatures from '../../../assets/bg/gameplayFeatures.png';
import GameplayFeaturesContent from './GameplayFeaturesContent.tsx';

function FeaturesSection() {
  return (
    <Features
      backgroundImage={gameplayFeatures}
      content={
        <GameplayFeaturesContent
          title="gameplay Page: features"
          description="description"
        />
      }
    />
  );
}

export default FeaturesSection;
