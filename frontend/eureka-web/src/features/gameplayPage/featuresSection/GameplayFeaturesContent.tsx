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
        <div className="flex items-center justify-between px-10 pt-10">
          <span className="font-kingfink text-7xl text-[#8658F1] leading-tight">
            WATCH LEARNING TAKE SHAPE
          </span>
        </div>

        <div className="flex items-center justify-between px-10">

          <div className="w-1/2">{/* your puzzle image */}</div>

          <div className="w-1/2 flex flex-col gap-2">
            <span className="font-kingfink text-7xl text-[#8658F1] leading-tight">
              AN EXPERIENCE <br /> TO PLAY & LEARN
            </span>
            <p className="ml-20 font-inter text-gray-500 text-base">
              Explore how puzzles, symbols, and <br />
              landmarks turn learning into
              play.
            </p>
          </div>
        </div>

        {/* Section 3 - bottom text */}
        <div className="flex flex-col items-center px-10 pt-25">
          <span className="font-kingfink text-7xl text-[#8658F1] leading-tight text-center">
            AN EXPERIENCE TO PLAY & <br />
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
