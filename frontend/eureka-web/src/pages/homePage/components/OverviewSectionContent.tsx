import { overviewImg } from '@/assets/images';
import ResponsiveImageEl from '@/components/ui/ResponsiveImage.tsx';

function OverviewSectionContent() {
  return (
    <div
      id="overview"
      className="relative min-h-dvh z-10 flex flex-col items-center w-full pt-20"
    >
      <div className="relative z-10 flex flex-col items-center justify-start pt-20 sm:pt-10 md:pt-10 xl:pt-20 2xl:pt-20 text-center">
        <h2 className="leading-none flex flex-col items-center">
          <span className="block text-md sm:text-xl md:text-xl lg:text-xl xl:text-2xl font-kingfink text-transparent [-webkit-text-stroke:1px_white]">
            CREATE
          </span>

          <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-7xl font-kingfink text-[#FFDC5C] pt-5 m-5 mt-2 xl:mt-4 leading-none">
            LEARN HISTORY THROUGH AN INTERACTIVE GAME. DISCOVER FAMOUS PLACES,
            SYMBOLS, AND LANDMARKS STEP BY STEP. PLAY, SOLVE PUZZLES, AND
            EXPLORE THE UNITED STATES IN A FUN WAY
          </span>

          <span className="block text-md sm:text-md md:text-base lg:text-lg xl:text-xl 2xl:text-3xl font-inter font-semibold text-white leading-tight xl:mt-4 pt-5 m-5">
            Learning history becomes a game. <br />
            Children explore symbols, landmarks, and famous places through
            interactive puzzles and levels
          </span>
        </h2>

        <div className="mt-4 xl:mt-6 grid grid-cols-2 gap-4 md:gap-8 xl:gap-12 font-inter font-semibold text-white text-md sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl leading-tight m-5">
          <p className="text-right">
            Every level builds curiosity and knowledge, <br />
            turning exploration and problem-solving <br />
            into a fun learning experience
          </p>
          <p className="text-left">
            Children learn by playing — <br />
            each puzzle introduces a new place, symbol, <br />
            or landmark in a simple and visual way
          </p>
        </div>

        <div className="relative -top-10 sm:-top-16 lg:-top-56">
          <ResponsiveImageEl image={overviewImg} alt="overviewImg" />
        </div>
      </div>
    </div>
  );
}

export default OverviewSectionContent;
