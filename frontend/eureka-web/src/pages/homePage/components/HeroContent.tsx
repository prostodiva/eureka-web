function HeroContent() {
  return (
    <div className="relative min-h-dvh z-10 flex flex-col items-center text-center pt-20 lg:pt-40 xl:pt-40 2xl:pt-40">
      <h1 className="2xl:leading-none">
        <span className="block text-7xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-9xl 2xl:text-[12rem] font-kingfink text-white">
          LEARNING
        </span>
        {/* Mobile: "WITH A" on one line | XL: "WITH" on one line */}
        <div className="block">
          <span className="font-kingfink text-7xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-9xl 2xl:text-[12rem]  text-white">
            STARTS WITH
          </span>
          <span className="font-drabina-outline text-7xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-9xl 2xl:text-[12rem] text-yellow-400 lg:hidden">
            {' '}
            A
          </span>
        </div>

        {/* Mobile: "PUZZLE" alone | XL: "A PUZZLE" together */}
        <div className="block xl:-mt-5">
          <span className="font-drabina-outline text-7xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-9xl 2xl:text-[12rem] text-yellow-400 hidden lg:inline">
            A{' '}
          </span>
          <span className="font-drabina-outline text-7xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-9xl 2xl:text-[12rem] text-yellow-400">
            PUZZLE
          </span>
        </div>
      </h1>

      {/* Subtext */}
      <div className="mt-2 ml-10 xl:ml-10 2xl:ml-100 xl:mt-1 text-lg sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-light font-inter text-white leading-none">
        <p className="text-end 2xl:ml-45">COMBINE CREATIVITY AND</p>
        <p className="text-start mr-5 xl:mr-20">ENGAGING EXPERIENCE FOR KIDS</p>
        <p className="text-center mr-10 xl:mr-10 2xl:mr-20">
          LEARNING IN A FUN
        </p>
      </div>
    </div>
  );
}
export default HeroContent;
