export interface AboutUsHeroContentProps {
  title: string;
  subtitle?: string;
  description?: string;
}

function AboutUsHeroContent() {
  return (
    <div className="absolute items-center top-8 sm:top-12 md:top-15 flex flex-col w-full px-4">
      <div className="flex flex-col mt-8 sm:mt-12 md:mt-16">
        <span className="font-kingfink text-transparent [-webkit-text-stroke:1.5px_#FFFFFF] text-xl sm:text-2xl">
          FOUNDERS
        </span>
      </div>

      <div className="mt-56 sm:mt-72 md:mt-96 lg:mt-110 xl:mt-150 2xl:mt-250 xl:ml-[-10%] 2xl:ml-[-15%] grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-25 font-inter text-[#8658F1] leading-tight">
        <p className="justify-self-start text-left">
          <span className="font-bold text-lg sm:text-xl md:text-2xl mr-2 sm:mr-4 md:mr-10">
            Margarita Kattsyna
          </span>
          <br />
          <span className="font-semibold text-sm sm:text-base md:text-lg">
            Founder & Lead Engineer
          </span>
        </p>
        <p className="justify-self-start text-left rotate-3">
          <span className="font-bold text-lg sm:text-xl md:text-2xl mr-2 sm:mr-3 md:mr-5">
            Aleksei Shchepin
          </span>
          <br />
          <span className="font-semibold text-sm sm:text-base md:text-lg">
            UX/UI Designer
          </span>
        </p>
      </div>
    </div>
  );
}
export default AboutUsHeroContent;
