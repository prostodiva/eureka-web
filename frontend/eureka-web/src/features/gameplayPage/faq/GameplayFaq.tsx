import About from '../../../components/sections/About.tsx';
import faq from '../../../assets/bg/faq.png';

function GameplayFaq() {
  return (
    <>
      <About
        backgroundImage={faq}
        content={<h1>Gameplay FAQ</h1>}
      />
    </>
  );
}
export default GameplayFaq;