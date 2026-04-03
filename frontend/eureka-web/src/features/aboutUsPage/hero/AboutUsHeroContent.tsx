export interface AboutUsHeroContentProps {
  title: string;
  subtitle?: string;
  description?: string;
}

function AboutUsHeroContent() {
  return (
    <div className="absolute items-center top-15 flex flex-col w-full">
      <div className="flex flex-col mt-16">
        <span className="font-kingfink text-transparent [-webkit-text-stroke:1.5px_#FFFFFF] text-2xl">
          FOUNDERS
        </span>
      </div>

      <div className="mt-118 grid grid-cols-2 gap-5 font-inter text-[#8658F1] leading-tight">
        <p className="justify-self-start text-left">
          <span className="font-bold text-2xl mr-10">Margarita Kattsyna</span>
          <br />
          <span className="font-semibold text-l">
            Founder & Software Engineer
          </span>
        </p>
        <p className="justify-self-start text-left rotate-3">
          <span className="font-bold text-2xl mr-5">Aleksei Shchepin</span>
          <br />
          <span className="font-semibold text-l">UX/UI Designer</span>
        </p>
      </div>
    </div>
  );
}
export default AboutUsHeroContent;
