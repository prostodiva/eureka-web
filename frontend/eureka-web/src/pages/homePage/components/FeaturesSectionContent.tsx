import { box } from '@/assets/images';
import ResponsiveImageEl from '@/components/ui/ResponsiveImage.tsx';

export interface FeatureSectionContentProps {
  learnMoreHref?: string;
  textColor?: string;
}

function FeatureSectionContent({
  learnMoreHref = '#',
  textColor = 'text-[#8658F1]',
}: FeatureSectionContentProps) {
  return (
    <div className="flex flex-col items-start px-4 sm:px-6 md:px-8 xl:px-12 pt-26 sm:pt-8 md:pt-20 xl:pt-20 z-10">
      <h2
        className={`font-kingfink ${textColor} text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-none mb-4 md:mb-6`}
      >
        Interactive Learning
      </h2>

      <p
        className={`font-inter ${textColor} text-sm sm:text-base md:text-lg xl:text-xl max-w-xs sm:max-w-sm md:max-w-md leading-relaxed mb-4 md:mb-6`}
      >
        Kids engage with puzzles, drag-and-drop activities, quizzes
      </p>

      <a
        href={learnMoreHref}
        className={`font-inter ${textColor} text-sm sm:text-base md:text-lg font-semibold underline uppercase tracking-wider`}
      >
        Learn More
      </a>

      <div className="relative left-[90px] mb-20 md:mt-6 xl:-mt-20 xl:left-[500px]">
        <ResponsiveImageEl image={box} alt="box" />
      </div>
    </div>
  );
}

export default FeatureSectionContent;
