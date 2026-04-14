import { IoCloseOutline } from 'react-icons/io5';
import { puzzle1, puzzle2, puzzle3, puzzle4 } from '@/assets/images';
import ResponsiveImageEl from '@/components/ui/ResponsiveImage.tsx';

function ContactHeroContent() {
  return (
    <div className="relative min-h-screen z-10 flex flex-col items-center w-full px-4 pt-16 sm:pt-20 md:pt-24 top-10">
      {/* Title */}
      <h1 className="font-kingfink text-white text-center text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-none">
        LET'S CONNECT &<br />
        CREATE TOGETHER
      </h1>

      {/* Subtitle */}
      <p className="text-white text-center text-xs sm:text-sm md:text-base max-w-lg tracking-widest uppercase -mt-4 sm:-mt-6">
        Your ideas, questions, and feedback help us grow and make learning even
        more fun
      </p>

      {/* Puzzles */}
      <div className="grid grid-cols-4 w-full max-w-6xl mx-auto mt-8 sm:mt-12 gap-4">
        <div>
          <ResponsiveImageEl image={puzzle1} alt="Puzzle 1" />
        </div>
        <div>
          <ResponsiveImageEl image={puzzle2} alt="Puzzle 2" />
        </div>

        {/* Puzzle 3 — tooltip anchored here, overlaps into puzzle 4 */}
        <div className="relative">
          <ResponsiveImageEl image={puzzle3} alt="Puzzle 3" />
          <div className="absolute top-4 left-1/2 w-56 z-20">
            <div className="relative bg-white rounded-lg p-3 sm:p-4">
              <IoCloseOutline size={16} className="absolute top-2 right-2" />
              <p className="font-inter font-bold text-[#8658F1] text-sm sm:text-base leading-snug pr-4">
                Explore opportunities to build creative learning tools with us.
              </p>
              {/* Arrow pointing down-left */}
              <div className="absolute -bottom-2 left-6 w-4 h-4 bg-white rotate-45" />
            </div>
          </div>
        </div>

        <div>
          <ResponsiveImageEl image={puzzle4} alt="Puzzle 4" />
        </div>
      </div>
    </div>
  );
}

export default ContactHeroContent;
