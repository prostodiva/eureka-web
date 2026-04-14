import Button from '../../../components/ui/Button.tsx';
import { val } from '@/assets/images';
import ResponsiveImageEl from '@/components/ui/ResponsiveImage.tsx';

function GameplayFeaturesContent() {
  const handleDemoCLick = () => {
    console.log('demo clicked');
  };

  return (
    <>
      <div className="relative min-h-screen z-10 flex flex-col items-center justify-start pt-20 sm:pt-10 md:pt-10 xl:pt-10 text-center">
        <div className="flex items-center justify-between">
          <span className="font-kingfink text-[clamp(4rem,6vw,8rem)] text-[#8658F1] leading-tight">
            WATCH LEARNING TAKE SHAPE
          </span>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="w-full md:w-1/2">
            <div className="relative w-full">
              <ResponsiveImageEl image={val} alt="val" />
            </div>
          </div>

          <div className="flex flex-col items-center">
            <span className="font-kingfink text-[clamp(4rem,5vw,8rem)] text-[#8658F1] leading-none mt-[5vh]">
              AN EXPERIENCE <br /> TO PLAY & LEARN
            </span>
            <p className="font-inter text-gray-500 text-sm sm:text-base">
              Explore how puzzles, symbols, and landmarks turn learning into
              play.
            </p>
          </div>
        </div>

        {/* Section 3 - bottom text */}
        <div className="flex flex-col items-center mt-auto">
          <span className="font-kingfink text-[clamp(4rem,6vw,8rem)] text-[#8658F1] leading-tight text-center">
            AN EXPERIENCE TO PLAY & REPLAY
          </span>
        </div>

        {/* Button */}
        <div className="relative flex justify-center mt-10">
          <Button variant="primary" onClick={handleDemoCLick}>
            Download Free Demo
          </Button>
        </div>
      </div>
    </>
  );
}
export default GameplayFeaturesContent;
