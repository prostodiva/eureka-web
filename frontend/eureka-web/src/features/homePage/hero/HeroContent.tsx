function HeroContent() {
  return (
    <div className="relative z-10 flex flex-col items-center justify-start min-h-screen px-4 pt-40 sm:pt-32 md:pt-36 xl:pt-42 text-center">
      <h1 className="leading-none">
        <span className="block text-7xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-kingfink text-white xl:-mb-6">
          LEARNING
        </span>

        <span className="block text-7xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-kingfink text-white xl:-mb-4">
          STARTS WITH
        </span>

        <div className="relative inline-block">
          <span className="block text-7xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-drabina-outline text-yellow-400">
            A PUZZLE
          </span>
        </div>
      </h1>

      {/* Subtext */}
      <div className="mt-2 xl:mt-1 text-xl sm:text-sm md:text-base lg:text-lg xl:text-xl font-light font-inter text-white leading-none max-w-md md:max-w-md">
        <p className="text-end">COMBINE CREATIVITY AND</p>
        <p className="text-start">ENGAGING EXPERIENCE FOR KIDS</p>
        <p className="text-center">LEARNING IN A FUN</p>
      </div>
    </div>
  );
}
export default HeroContent;
