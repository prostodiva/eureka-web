import { IoCloseOutline } from 'react-icons/io5';

function ContactHeroContent() {
  return (
    <div className="relative z-10 flex flex-col items-center w-full px-4 pt-16 sm:pt-20 md:pt-24">
      {/* Title */}
      <h1 className="font-kingfink text-white text-center text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-tight">
        LET'S CONNECT &<br />
        CREATE TOGETHER
      </h1>

      {/* Subtitle */}
      <p className="text-white text-center text-xs sm:text-sm md:text-base max-w-lg tracking-widest uppercase -mt-4 sm:-mt-6">
        Your ideas, questions, and feedback help us grow and make learning even
        more fun
      </p>

      {/* 4-col grid mirrors the 4 puzzle pieces in the background */}
      <div className="grid grid-cols-4 w-full max-w-4xl mx-auto mt-8 sm:mt-12">
        {/* Columns 1-3: empty — puzzle pieces are decorative bg */}
        <div />
        <div />
        <div />

        {/* Column 4: tooltip floats over the 4th puzzle piece */}
        <div className="flex items-start justify-start">
          <div className="relative bg-white rounded-lg p-3 sm:p-4 w-full">
            <button className="absolute top-2 right-2 text-gray-400">
              <IoCloseOutline size={16} />
            </button>
            <p className="font-inter font-bold text-[#8658F1]  text-sm sm:text-base leading-snug pr-4">
              Explore opportunities to build creative learning tools with us.
            </p>
            {/* Arrow */}
            <div className="absolute -bottom-2 left-6 w-4 h-4 bg-white rotate-45" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactHeroContent;

