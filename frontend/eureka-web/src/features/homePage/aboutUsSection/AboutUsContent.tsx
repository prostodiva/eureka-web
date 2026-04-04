export interface AboutUsContentProps {
  title: string;
  subtitle?: string;
  description?: string;
}

function AboutUsContent( ) {
  return (
    <div
      id="about"
      className="absolute text-center top-8 sm:top-12 md:top-15 flex flex-col h-full px-4"
    >
      <div className="flex flex-col mt-8 sm:mt-12 md:mt-16">
        <span className="font-kingfink text-transparent [-webkit-text-stroke:1.5px_#FFFFFF] text-xl sm:text-2xl">
          FOUNDERS
        </span>
      </div>

      <div className="mt-56 sm:mt-72 md:mt-96 lg:mt-110 xl:mt-150 2xl:mt-250 xl:ml-[-10%] 2xl:ml-[-15%] grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-25 font-inter text-[#8658F1] leading-tight">
        <p className="justify-self-start text-left">
          <span className="font-bold text-lg sm:text-xl md:text-2xl">
            Margarita Kattsyna
          </span>
          <br />
          <span className="font-semibold text-base sm:text-lg md:text-xl">
            Founder & Lead Engineer
          </span>
        </p>
        <p className="justify-self-start text-left rotate-3">
          <span className="font-bold text-lg sm:text-xl md:text-2xl">Aleksei Shchepin</span>
          <br />
          <span className="font-semibold text-base sm:text-lg md:text-xl">UX/UI Designer</span>
        </p>
      </div>
    </div>
  );
}
export default AboutUsContent;
