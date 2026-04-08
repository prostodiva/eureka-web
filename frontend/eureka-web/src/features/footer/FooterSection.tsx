import Footer from '../../root/Footer.tsx';
// import Button from '../../components/ui/Button.tsx';
import { makeResponsiveImage } from '../../utils/makeResponsiveImage.ts';
import footerBg400avif from '../../assets/optimized/footer_bg-400.avif';
import footerBg800avif from '../../assets/optimized/footer_bg-800.avif';
import footerBg1200avif from '../../assets/optimized/footer_bg-1200.avif';
import footerBg1600avif from '../../assets/optimized/footer_bg-1600.avif';
import footerBg2400avif from '../../assets/optimized/footer_bg-2400.avif';
import footerBg400webp from '../../assets/optimized/footer_bg-400.webp';
import footerBg800webp from '../../assets/optimized/footer_bg-800.webp';
import footerBg1200webp from '../../assets/optimized/footer_bg-1200.webp';
import footerBg1600webp from '../../assets/optimized/footer_bg-1600.webp';
import footerBg2400webp from '../../assets/optimized/footer_bg-2400.webp';
// import puzzle400avif from '../../assets/optimized/puzzle-400.avif';
// import puzzle800avif from '../../assets/optimized/puzzle-800.avif';
// import puzzle1200avif from '../../assets/optimized/puzzle-1200.avif';
// import puzzle1600avif from '../../assets/optimized/puzzle-1600.avif';
// import puzzle2400avif from '../../assets/optimized/puzzle-2400.avif';
// import puzzle400webp from '../../assets/optimized/puzzle-400.webp';
// import puzzle800webp from '../../assets/optimized/puzzle-800.webp';
// import puzzle1200webp from '../../assets/optimized/puzzle-1200.webp';
// import puzzle1600webp from '../../assets/optimized/puzzle-1600.webp';
// import puzzle2400webp from '../../assets/optimized/puzzle-2400.webp';
import FooterContent from './FooterContent.tsx';

const footer_bg = makeResponsiveImage({
  fallbackSrc: footerBg800webp,
  avif400: footerBg400avif,
  avif800: footerBg800avif,
  avif1200: footerBg1200avif,
  avif1600: footerBg1600avif,
  avif2400: footerBg2400avif,
  webp400: footerBg400webp,
  webp800: footerBg800webp,
  webp1200: footerBg1200webp,
  webp1600: footerBg1600webp,
  webp2400: footerBg2400webp,
});

// const puzzle = makeResponsiveImage({
//   fallbackSrc: puzzle800webp,
//   avif400: puzzle400avif,
//   avif800: puzzle800avif,
//   avif1200: puzzle1200avif,
//   avif1600: puzzle1600avif,
//   avif2400: puzzle2400avif,
//   webp400: puzzle400webp,
//   webp800: puzzle800webp,
//   webp1200: puzzle1200webp,
//   webp1600: puzzle1600webp,
//   webp2400: puzzle2400webp,
// });

function FooterSection() {
  return (
    <Footer
      backgroundImage={footer_bg}
      content={<FooterContent />}
      // actions={
      //   <div className="absolute inset-0 pointer-events-none">
      //     <Button
      //       backgroundImage={puzzle}
      //       className="pointer-events-auto absolute z-20 bottom-4 right-4 sm:bottom-[20%] lg:bottom-[10%] xl:bottom-[5%] w-[35%] h-auto aspect-square"
      //     >
      //       <span className="sr-only">Gameplay</span>
      //     </Button>
      //   </div>
      // }
    />
  );
}

export default FooterSection;
