import { box } from '@/assets/images';
import ResponsiveImageEl from '@/components/ui/ResponsiveImage.tsx';
import { Link } from 'react-router-dom';

export interface FeatureSectionContentProps {
  learnMoreHref?: string;
  textColor?: string;
}

function FeatureSectionContent({
}: FeatureSectionContentProps) {
  return (
    <div className="relative min-h-screen flex flex-col items-start px-4 pt-26 sm:pt-8 md:pt-20 xl:pt-20 z-10">
      <div className="relative xl:left-[300px] 2xl:left-[450px]">
        <h2 className="font-kingfink text-[#8658F1] text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-8xl leading-none mb-4 md:mb-6">
          Interactive Learning
        </h2>

        <p className="font-inter text-[#8658F1] text-sm sm:text-base md:text-lg xl:text-2xl 2xl:text-2xl max-w-xs sm:max-w-sm md:max-w-md leading-normal mb-4 md:mb-6">
          Kids engage with puzzles, drag-and-drop activities, quizzes
        </p>

        <Link
          to="/gameplay"
          className="font-inter text-[#8658F1] text-sm sm:text-base md:text-lg xl:text-2xl 2xl:text-3xl font-semibold underline uppercase tracking-wider"
        >
          Learn More
        </Link>
      </div>

      <div className="relative mb-20 md:mt-6 xl:-mt-20 top-[50px] xl:left-[250px] 2xl:top-[100px]">
        <ResponsiveImageEl
          image={box}
          alt="box"
          className="w-250 xl:w-150 2xl:w-250"
        />
      </div>
    </div>
  );
}

export default FeatureSectionContent;
