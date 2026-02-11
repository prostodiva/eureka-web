import ValuesSectionContent from './ValuesSectionContent.tsx';
import Value from '../../../components/sections/Value.tsx';
import values from '../../../assets/bg/valuesHome.png'
import Button from '../../../components/Button.tsx';
import arrowLeft from '../../../assets/bg/arrowLeft.png'
import arrowRight from '../../../assets/bg/arrowRight.png';

function ValuesSection() {

const handleBuyClick = () => {
  console.log('buy clicked');
}

const handleDemoCLick = () => {
  console.log('demo clicked');
}

const handlePrev = () => {
  console.log('prev clicked');
}

const handleNext = () => {
  console.log('next clicked');
}

  return (
    <Value
      backgroundImage={values}
      className="relative min-h-[120vh] md:min-h-[150vh]"
      style={{ backgroundPosition: 'top center' }}
      content={<ValuesSectionContent />}
      actions={
        <div className="absolute bottom-36 left-1/2 -translate-x-14 flex flex-col items-center w-full">
          <div className="flex mb-120 gap-210">
            <Button
              variant="arrowLeft"
              backgroundImage={arrowLeft}
              onClick={handlePrev}
            />

            <Button
              variant="arrowRight"
              className="translate-x-26"
              backgroundImage={arrowRight}
              onClick={handleNext}
            />
          </div>

          <div className="flex gap-6">
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
