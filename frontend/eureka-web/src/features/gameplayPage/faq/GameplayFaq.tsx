import About from '../../../components/sections/About.tsx';
import { makeResponsiveImage } from '../../../utils/makeResponsiveImage.ts';
import faq400avif from '../../../assets/optimized/faq-400.avif';
import faq800avif from '../../../assets/optimized/faq-800.avif';
import faq1200avif from '../../../assets/optimized/faq-1200.avif';
import faq1600avif from '../../../assets/optimized/faq-1600.avif';
import faq2400avif from '../../../assets/optimized/faq-2400.avif';
import faq400webp from '../../../assets/optimized/faq-400.webp';
import faq800webp from '../../../assets/optimized/faq-800.webp';
import faq1200webp from '../../../assets/optimized/faq-1200.webp';
import faq1600webp from '../../../assets/optimized/faq-1600.webp';
import faq2400webp from '../../../assets/optimized/faq-2400.webp';
import GameplayFaqContent from './GameplayFaqContent.tsx';

const faq = makeResponsiveImage({
  fallbackSrc: faq800webp,
  avif400: faq400avif,
  avif800: faq800avif,
  avif1200: faq1200avif,
  avif1600: faq1600avif,
  avif2400: faq2400avif,
  webp400: faq400webp,
  webp800: faq800webp,
  webp1200: faq1200webp,
  webp1600: faq1600webp,
  webp2400: faq2400webp,
});

function GameplayFaq() {
  return (
    <>
      <About backgroundImage={faq} content={<GameplayFaqContent />} />
    </>
  );
}
export default GameplayFaq;
