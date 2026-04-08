import arrowLeft400avif from '../../../assets/optimized/arrowLeft-400.avif';
import arrowLeft800avif from '../../../assets/optimized/arrowLeft-800.avif';
import arrowLeft1200avif from '../../../assets/optimized/arrowLeft-1200.avif';
import arrowLeft400webp from '../../../assets/optimized/arrowLeft-400.webp';
import arrowLeft800webp from '../../../assets/optimized/arrowLeft-800.webp';
import arrowLeft1200webp from '../../../assets/optimized/arrowLeft-1200.webp';
import arrowRight400avif from '../../../assets/optimized/arrowRight-400.avif';
import arrowRight800avif from '../../../assets/optimized/arrowRight-800.avif';
import arrowRight1200avif from '../../../assets/optimized/arrowRight-1200.avif';
import arrowRight400webp from '../../../assets/optimized/arrowRight-400.webp';
import arrowRight800webp from '../../../assets/optimized/arrowRight-800.webp';
import arrowRight1200webp from '../../../assets/optimized/arrowRight-1200.webp';
import Button from '../../../components/ui/Button.tsx';
import { makeResponsiveImage } from '../../../utils/makeResponsiveImage.ts';

const arrowLeft = makeResponsiveImage({
  fallbackSrc: arrowLeft400webp,
  avif400: arrowLeft400avif,
  avif800: arrowLeft800avif,
  avif1200: arrowLeft1200avif,
  webp400: arrowLeft400webp,
  webp800: arrowLeft800webp,
  webp1200: arrowLeft1200webp,
});

const arrowRight = makeResponsiveImage({
  fallbackSrc: arrowRight400webp,
  avif400: arrowRight400avif,
  avif800: arrowRight800avif,
  avif1200: arrowRight1200avif,
  webp400: arrowRight400webp,
  webp800: arrowRight800webp,
  webp1200: arrowRight1200webp,
});

function ValuesSectionContent() {

  const handlePrev = () => {
    console.log('prev clicked');
  };

  const handleNext = () => {
    console.log('next clicked');
  };

  return (
    <div className="absolute text-center top-15 flex flex-col h-full">
      <div className="flex flex-col mt-16">
        <span className="font-kingfink text-transparent [-webkit-text-stroke:1.5px_#8658F1] text-2xl">
          VISION
        </span>
        <span className="font-kingfink text-5xl text-[#8658F1] mt-5 outlined-text">
          WHY CHOOSE EUREKA
        </span>
      </div>

      <div className="flex gap-96 justify-center mt-8">
        <Button
          variant="arrowLeft"
          backgroundImage={arrowLeft}
          onClick={handlePrev}
        />
        <Button
          variant="arrowRight"
          backgroundImage={arrowRight}
          onClick={handleNext}
        />
      </div>

      <div className="flex flex-col absolute bottom-[10%]">
        <span className="font-kingfink text-5xl text-[#FFDC5C]">
          READY TO PLAY AND LEARN ?
        </span>
        <span className="font-inter text-3xl text-[#FFDC5C]">
          AVAILABLE ON PC / MAC
        </span>
      </div>
    </div>
  );
}
export default ValuesSectionContent;
