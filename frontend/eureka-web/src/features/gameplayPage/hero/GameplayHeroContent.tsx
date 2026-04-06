export interface HeroContentProps {
  title: string;
  subtitle?: string;
  description?: string;
}

function GameplayHeroContent() {
  return (
    <div className="relative z-10 flex flex-col items-center w-full px-4 pt-16 sm:pt-20 md:pt-24">
      {/* Title */}
      <h1 className="font-kingfink text-[#FFDC5C] text-center text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-tight mt-20">
        EURIKA GAMEPLAY
      </h1>

      {/*YouTube Window*/}
      <div>

      </div>
    </div>
  );
}
export default GameplayHeroContent;
