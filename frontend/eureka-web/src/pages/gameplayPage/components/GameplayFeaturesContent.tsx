import Button from '../../../components/ui/Button.tsx';
import { val } from '@/assets/images';
import ResponsiveImageEl from '@/components/ui/ResponsiveImage.tsx';

function GameplayFeaturesContent() {
  const handleDemoCLick = () => {
    console.log('demo clicked');
  };

  return (
    <>
      <div className="relative min-h-dvh z-10 text-center py-20 md:py-20">
        <div className="font-kingfink text-5xl md:text-6xl lg:text-8xl 2xl:text-9xl text-[#8658F1] leading-tight">
          WATCH LEARNING TAKE SHAPE
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="w-full md:w-1/2">
            <div className="relative w-full">
              <ResponsiveImageEl image={val} alt="val" />
            </div>
          </div>

          <div>
            <div className="font-kingfink text-4xl md:text-6xl lg:text-8xl 2xl:text-9xl text-[#8658F1] leading-none ">
              AN EXPERIENCE <br /> TO PLAY & LEARN
            </div>
            <p className="font-inter text-gray-500 text-sm sm:text-base">
              Explore how puzzles, symbols, and landmarks turn learning into
              play.
            </p>
          </div>
        </div>

        {/* Section 3 - bottom text */}
        <div className="mt-auto font-kingfink text-4xl md:text-6xl lg:text-8xl 2xl:text-9xl text-[#8658F1] leading-tight text-center">
          AN EXPERIENCE TO PLAY & REPLAY
        </div>

        {/* Button */}

        <Button
          variant="primary"
          onClick={handleDemoCLick}
          className="mx-auto "
        >
          Download Free Demo
        </Button>
      </div>
    </>
  );
}
export default GameplayFeaturesContent;
