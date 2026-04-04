export interface HeroContentProps {
  title: string;
  subtitle?: string;
  description?: string;
}

function HeroContent(){
  return (
    <h1 className="absolute -mt-15 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center leading-none">
      <span className="block text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-inter font-bold text-white -mt-6">
        LEARNING
      </span>
      <span className="block text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-inter font-bold text-white -mt-6">
        STARTS WITH
      </span>
      <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-drabina-outline text-yellow-400">
        A PUZZLE
      </span>
      <div className="text-sm sm:text-base md:text-lg font-light font-inter text-white">
        <p className="text-left pl-4 sm:pl-8 md:pl-20 lg:pl-105 -mt-2">
          COMBINE CREATIVITY AND
        </p>
        <p className="text-sm sm:text-base md:text-lg font-light font-inter text-white text-left pl-2 sm:pl-4 md:pl-12 lg:pl-70 -mt-2">
          ENGAGING EXPERIENCE FOR KIDS
        </p>
        <p className="text-sm sm:text-base md:text-lg font-light font-inter text-white text-left pl-2 sm:pl-6 md:pl-16 lg:pl-90 -mt-2">
          LEARNING IN A FUN
        </p>
      </div>
    </h1>
  );
}
export default HeroContent;
