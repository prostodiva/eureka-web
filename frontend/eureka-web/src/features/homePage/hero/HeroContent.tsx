import Button from '@/components/ui/Button.tsx';
import type { ResponsiveImage } from '@/types/responsiveImage.ts';

interface HeroContentProps {
  onGameplayClick: () => void;
  buttonImage: ResponsiveImage;
}

function HeroContent({ onGameplayClick, buttonImage }: HeroContentProps) {
  return (
    <div className="relative z-10 flex flex-col items-center justify-start min-h-screen px-4 pt-24 sm:pt-28 md:pt-36 text-center">
      <h1 className="leading-none">
        <span className="block text-[clamp(2.5rem,8vw,10rem)] font-kingfink text-white">
          LEARNING
        </span>

        <span className="text-[clamp(2.5rem,8vw,10rem)] font-kingfink text-white">
          STARTS WITH
        </span>

        <div className="relative inline-block">
          <span className="block text-[clamp(2.5rem,8vw,10rem)] font-drabina-outline text-yellow-400">
            A PUZZLE
          </span>

          <div className="absolute top-full right-0 mt-25 -translate-x-2/2 sm:-translate-x-2/4">
            <Button
              backgroundImage={buttonImage}
              onClick={onGameplayClick}
              className="w-28 sm:w-36 md:w-44 aspect-[3.1/1.7] hover:brightness-110"
            />
          </div>
        </div>
      </h1>

      {/* Subtext */}
      <div className="mt-6 text-[clamp(0.75rem,1.5vw,1.25rem)] font-light font-inter text-white leading-normal max-w-md">
        <p>COMBINE CREATIVITY AND</p>
        <p>ENGAGING EXPERIENCE FOR KIDS</p>
        <p>LEARNING IN A FUN</p>
      </div>
    </div>
  );
}
export default HeroContent;
