import ValuesSectionContent from './ValuesSectionContent.tsx';
import Value from '../../../components/sections/Value.tsx';
import values from '../../../assets/bg/valuesHome.png';
import Button from '../../../components/ui/Button.tsx';

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
