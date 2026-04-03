export interface AboutUsContentProps {
  title: string;
  subtitle?: string;
  description?: string;
}

function AboutUsContent( ) {
  return (
    <div id="about" className="absolute text-center top-15 flex flex-col h-full">
      <div className="flex flex-col mt-16">
        <span className="font-kingfink text-transparent [-webkit-text-stroke:1.5px_#FFFFFF] text-2xl">
          FOUNDERS
        </span>
      </div>

      <div className="mt-150 grid grid-cols-2 gap-25 font-inter text-[#8658F1] leading-tight">
        <p className="justify-self-start text-left">
          <span className="font-bold text-2xl">Margarita Kattsyna</span>
          <br />
          <span className="font-semibold text-xl">
            Founder & Software Engineer
          </span>
        </p>
        <p className="justify-self-start text-left rotate-3">
          <span className="font-bold text-2xl">Aleksei Shchepin</span>
          <br />
          <span className="font-semibold text-xl">UX/UI Designer</span>
        </p>
      </div>
    </div>
  );
}
export default AboutUsContent;
