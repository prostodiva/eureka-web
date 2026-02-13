import GameplayHero from '../features/gameplayPage/hero/GameplayHero.tsx';
import GameplayFeatures from '../features/gameplayPage/featuresSection/GameplayFeatures.tsx';
import GameplayFaq from '../features/gameplayPage/faq/GameplayFaq.tsx';

function GameplayPage() {
  return (
    <>
      <GameplayHero />
      <GameplayFeatures />
      <GameplayFaq />
    </>
  );
}

export default GameplayPage;
