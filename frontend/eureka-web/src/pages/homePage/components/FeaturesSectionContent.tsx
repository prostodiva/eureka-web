import { box } from '@/assets/images';
import ResponsiveImageEl from '@/components/ui/ResponsiveImage.tsx';
import { Link } from 'react-router-dom';


function FeatureSectionContent() {
  return (
    <div className="relative min-h-dvh grid grid-col md:grid-cols-2 gap-10 items-start pt-20 sm:pt-8 md:pt-20 xl:pt-20 z-10">
      <div className="col-start-2">
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


        <ResponsiveImageEl
          image={box}
          alt="box"
          className="w-200 xl:w-150 2xl:w-250"
        />
      </div>

  

    </div>
  );
}

export default FeatureSectionContent;
