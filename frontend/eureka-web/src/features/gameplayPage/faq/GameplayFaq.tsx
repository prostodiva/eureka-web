import About from '@/components/sections/About';
import GameplayFaqContent from './GameplayFaqContent';
import { faq } from '@/assets/images';

function GameplayFaq() {
  return (
    <>
      <About backgroundImage={faq} content={<GameplayFaqContent />} />
    </>
  );
}
export default GameplayFaq;
