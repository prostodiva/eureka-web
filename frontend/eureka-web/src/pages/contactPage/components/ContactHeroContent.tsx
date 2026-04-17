import { IoCloseOutline } from 'react-icons/io5';
import { puzzle1, puzzle2, puzzle3, puzzle4 } from '@/assets/images';
import ResponsiveImageEl from '@/components/ui/ResponsiveImage.tsx';

function ContactHeroContent() {
  return (
    <div className="relative min-h-dvh z-10 flex flex-col items-center w-full pt-20 sm:pt-22 md:pt-26 xl:pt-28 2xl:pt-44">
      {/* Title */}
      <h1 className="font-kingfink text-white text-center text-6xl sm:text-7xl md:text-8xl lg:text-9xl 2xl:text-[200px] leading-none">
        LET'S CONNECT &<br />
        CREATE TOGETHER
      </h1>

      {/* Subtitle */}
      <p className="text-white mt-5 text-center font-inter tracking-wide sm:tracking-wider md:tracking-normal max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg text-xs sm:text-sm md:text-base xl:text-2xl 2xl:text-3xl uppercase -mt-4 sm:-mt-6">
        Your ideas, questions, and feedback help us grow and make learning even
        more fun
      </p>

      {/* Puzzles */}
      <div className="relative max-w-8xl m-15">
        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8 sm:mt-12">
          <ResponsiveImageEl image={puzzle1} alt="Puzzle 1" />
          <ResponsiveImageEl image={puzzle2} alt="Puzzle 2" />
          <ResponsiveImageEl image={puzzle3} alt="Puzzle 3" />
          <ResponsiveImageEl image={puzzle4} alt="Puzzle 4" />
        </div>

        {/* FLOATING BOX (overlay) */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-56 z-20">
          <div className="relative bg-white rounded-lg p-3 sm:p-4">
            <IoCloseOutline size={16} className="absolute top-2 right-2" />
            <p className="font-inter font-bold text-[#8658F1] text-sm sm:text-base leading-snug pr-4">
              Explore opportunities to build creative learning tools with us.
            </p>
            <div className="absolute -bottom-2 left-6 w-4 h-4 bg-white rotate-45" />
          </div>
        </div>
      </div>

    </div>
  );
}

export default ContactHeroContent;
