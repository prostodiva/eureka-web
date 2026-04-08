export interface HeroContentProps {
  title: string;
  subtitle?: string;
  description?: string;
}

function HeroContent() {
  return (
    <h1 className="absolute top-[40vh] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center leading-none">
      <span className="block text-[clamp(2.5rem,8vw,10rem)] font-kingfink text-white">
        LEARNING
      </span>
      <span className="whitespace-nowrap text-[clamp(2.5rem,8vw,10rem)] font-kingfink text-white">
        STARTS WITH
      </span>
      <span className="block text-[clamp(2.5rem,8vw,10rem)] font-drabina-outline text-yellow-400">
        A PUZZLE
      </span>
      <div className="text-[clamp(0.75rem,1.5vw,1.25rem)] font-light font-inter text-white leading-normal whitespace-nowrap">
        <p className="ml-[40vw] -mt-2">COMBINE CREATIVITY AND</p>
        <p className="ml-[25vw] -mt-2">ENGAGING EXPERIENCE FOR KIDS</p>
        <p className="ml-[32vw] -mt-2">LEARNING IN A FUN</p>
      </div>
    </h1>
  );
}
export default HeroContent;
