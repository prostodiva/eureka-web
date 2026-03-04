import arrowLeft from "../../../assets/bg/arrowLeft.png";
import arrowRight from '../../../assets/bg/arrowRight.png';
import Button from '../../../components/ui/Button.tsx';

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
