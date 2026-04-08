import Button from '../../../components/ui/Button.tsx';

function GameplayFeaturesContent() {
  const handleDemoCLick = () => {
    console.log('demo clicked');
  };

  return (
    <>
      <div className="relative min-h-screen flex flex-col justify-between px-[1vw] py-[5vh]">
        <div className="flex items-center justify-between">
          <span className="font-kingfink text-[clamp(4rem,6vw,8rem)] text-[#8658F1] leading-tight">
            WATCH LEARNING TAKE SHAPE
          </span>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="w-full md:w-1/2"></div>

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
        <div className="flex justify-center mt-10">
          <Button variant="primary" onClick={handleDemoCLick}>
            Download Free Demo
          </Button>
        </div>
      </div>
    </>
  );
}
export default GameplayFeaturesContent;
