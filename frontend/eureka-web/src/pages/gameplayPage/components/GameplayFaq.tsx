import Section from '@/components/Section.tsx';
import GameplayFaqContent from './GameplayFaqContent.tsx';

function GameplayFaq() {
  return (
    <Section
      style={{ backgroundColor: '#A37CFF' }}
      className="min-h-screen flex items-start justify-center"
    >
      <GameplayFaqContent />
    </Section>
  );
}
export default GameplayFaq;
