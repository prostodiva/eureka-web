import ValuesSectionContent from './ValuesSectionContent.tsx';
import Value from '../../../components/sections/Value.tsx';
import values from '../../../assets/bg/valuesHome.png'
import Button from '../../../components/ui/Button.tsx';
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
      content={<ValuesSectionContent />}
      actions={
        <div className="absolute bottom-40 flex flex-col justify-center gap-6 -translate-x-14 items-center w-full">
          <div className="flex mb-15 gap-20">
            <Button
              variant="arrowLeft"
              backgroundImage={arrowLeft}
              onClick={handlePrev}
            />

            <Button
              variant="arrowRight"
              className="translate-x-12"
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
