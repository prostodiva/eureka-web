export interface HeroContentProps {
  title: string;
  subtitle?: string;
  description?: string;
}

function GameplayHeroContent() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between z-10 items-center w-full px-[1vw] py-[5vh]">
      {/* Title */}
      <h1 className="font-kingfink text-[#FFDC5C] text-center text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-tight mt-20">
        EURIKA GAMEPLAY
      </h1>

      {/*YouTube Window*/}
      <div></div>
    </div>
  );
}
export default GameplayHeroContent;
