import ValuesSectionContent from './ValuesSectionContent.tsx';
import Value from '../../../components/sections/Value.tsx';
import { makeResponsiveImage } from '../../../utils/makeResponsiveImage.ts';
import values400avif from '../../../assets/optimized/valuesHome-400.avif';
import values800avif from '../../../assets/optimized/valuesHome-800.avif';
import values1200avif from '../../../assets/optimized/valuesHome-1200.avif';
import values1600avif from '../../../assets/optimized/valuesHome-1600.avif';
import values2400avif from '../../../assets/optimized/valuesHome-2400.avif';
import values400webp from '../../../assets/optimized/valuesHome-400.webp';
import values800webp from '../../../assets/optimized/valuesHome-800.webp';
import values1200webp from '../../../assets/optimized/valuesHome-1200.webp';
import values1600webp from '../../../assets/optimized/valuesHome-1600.webp';
import values2400webp from '../../../assets/optimized/valuesHome-2400.webp';
import Button from '../../../components/ui/Button.tsx';

const values = makeResponsiveImage({
  fallbackSrc: values800webp,
  avif400: values400avif,
  avif800: values800avif,
  avif1200: values1200avif,
  avif1600: values1600avif,
  avif2400: values2400avif,
  webp400: values400webp,
  webp800: values800webp,
  webp1200: values1200webp,
  webp1600: values1600webp,
  webp2400: values2400webp,
});

function ValuesSection() {
  const handleBuyClick = () => {
    console.log('buy clicked');
  };

  const handleDemoCLick = () => {
    console.log('demo clicked');
  };

  return (
    <Value
      backgroundImage={values}
      content={<ValuesSectionContent />}
      actions={
        <div className="absolute bottom-[25%] left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-6 w-full">
          <div className="flex gap-6 justify-center">
            <Button variant="primary" onClick={handleBuyClick}>
              Buy Full Version
            </Button>
            <Button variant="secondary" onClick={handleDemoCLick}>
              Download Free Demo
            </Button>
          </div>
        </div>
      }
    />
  );
}

export default ValuesSection;
