import Button from '../../../components/ui/Button.tsx';

export interface GameplayFeaturesContentProps {
  title: string;
  subtitle?: string;
  description?: string;
}

function GameplayFeaturesContent({
  title
}: GameplayFeaturesContentProps) {

  const handleDemoCLick = () => {
    console.log('demo clicked');
  };

  return (
    <>
      <h2
        id="gameplay-feature-heading"
        className="text-2xl md:text-3xl font-semibold mb-4"
      >
        {title}
      </h2>
      <div className="absolute flex-col w-full">
        {/* Section 1 - top text + image side by side */}
        <div className="flex items-center justify-between px-4 sm:px-6 md:px-10 pt-6 sm:pt-8 md:pt-10">
          <span className="font-kingfink text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-[#8658F1] leading-tight">
            WATCH LEARNING TAKE SHAPE
          </span>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-10 gap-4">

          <div className="w-full md:w-1/2">{/* your puzzle image */}</div>

          <div className="w-full md:w-1/2 flex flex-col gap-2">
            <span className="font-kingfink text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-[#8658F1] leading-tight">
              AN EXPERIENCE TO PLAY & LEARN
            </span>
            <p className="ml-0 sm:ml-4 md:ml-10 lg:ml-20 font-inter text-gray-500 text-sm sm:text-base">
              Explore how puzzles, symbols, and
              landmarks turn learning into
              play.
            </p>
          </div>
        </div>

        {/* Section 3 - bottom text */}
        <div className="flex flex-col items-center px-4 sm:px-6 md:px-10 pt-10 sm:pt-15 md:pt-25">
          <span className="font-kingfink text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-[#8658F1] leading-tight text-center">
            AN EXPERIENCE TO PLAY &
            REPLAY
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
