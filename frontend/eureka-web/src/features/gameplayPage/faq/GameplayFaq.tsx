import Hero from '@/components/sections/Hero';
import GameplayFaqContent from './GameplayFaqContent';

function GameplayFaq() {
  return (
    <Hero
      style={{ backgroundColor: '#A37CFF' }}
      className="min-h-screen flex items-start justify-center"
    >
      <GameplayFaqContent />
    </Hero>
  );
}
export default GameplayFaq;
