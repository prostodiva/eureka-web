export interface HeroContentProps {
  title: string;
  subtitle?: string;
  description?: string;
}

function HeroContent(){
  return (
    <h1 className="absolute -mt-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center leading-none">
      <span className="block text-9xl font-inter font-bold text-white -mt-6">
        LEARNING
      </span>
      <span className="block text-9xl font-inter font-bold text-white whitespace-nowrap -mt-6">
        STARTS WITH
      </span>
      <span className="block text-9xl font-bold text-yellow-400 -mt-6">
        A PUZZLE
      </span>
      <div className="text-lg font-light font-inter text-white ">
        <p className="text-left pl-105 -mt-2">COMBINE CREATIVITY AND</p>
        <p className="text-lg font-light font-inter text-white text-left pl-60 -mt-2">
          ENGAGING EXPERIENCE FOR KIDS
        </p>
        <p className="text-lg font-light font-inter text-white text-left pl-78 -mt-2">
          LEARNING IN A FUN
        </p>
      </div>
    </h1>
  );
}
export default HeroContent;
