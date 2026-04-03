import About from '../../../components/sections/About.tsx';
import faq from '../../../assets/bg/faq.png';
import GameplayFaqContent from './GameplayFaqContent.tsx';

function GameplayFaq() {
  return (
    <>
      <About
        backgroundImage={faq}
        content={<GameplayFaqContent />}
      />
    </>
  );
}
export default GameplayFaq;
