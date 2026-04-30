import { useState } from 'react';

export interface HeroContentProps {
  title: string;
  subtitle?: string;
  description?: string;
}

function GameplayHeroContent() {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  return (
    <div className="relative min-h-screen flex flex-col justify-between z-10 items-center w-full px-[1vw] py-[5vh]">
      {/* Title */}
      <h1 className="font-kingfink text-[#FFDC5C] text-center text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-tight mt-20">
        EURIKA GAMEPLAY
      </h1>

      {/*YouTube Window*/}
      <div className="flex-1 flex items-center justify-center w-full">
        <div className="relative w-full max-w-2xl aspect-video rounded-lg shadow-lg overflow-hidden">
          {!iframeLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
              <img
                src="https://img.youtube.com/vi/o3tTVv_BnH4/maxresdefault.jpg"
                alt="Video thumbnail"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          )}
          <iframe
            src="https://www.youtube.com/embed/o3tTVv_BnH4?si=vRvAWPp0KPV6Oo1g"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
            onLoad={() => setIframeLoaded(true)}
          />
        </div>
      </div>
    </div>
  );
}
export default GameplayHeroContent;
