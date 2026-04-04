function OverviewSectionContent() {
  return (
    <h2 id="overview-heading" className="absolute text-center top-10 sm:top-20 md:top-30 flex flex-col px-4">
      <span className="font-kingfink text-transparent [-webkit-text-stroke:1px_white] text-xl sm:text-2xl">
        CREATE
      </span>
      <span className="font-kingfink text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-inter font-regular text-[#FFDC5C] mt-6 sm:mt-8 md:mt-10 leading-tight">
        LEARN HISTORY THROUGH AN INTERACTIVE GAME.
        DISCOVER FAMOUS PLACES, SYMBOLS, AND
        LANDMARKS STEP BY STEP. PLAY, SOLVE PUZZLES,
        AND EXPLORE THE UNITED STATES IN A FUN WAY.
      </span>

      <span className="font-inter font-semibold text-white leading-tight text-sm sm:text-base md:text-lg mt-4">
        Learning history becomes a game.
        Children explore symbols, landmarks, and famous places through
        interactive puzzles and levels.
      </span>
      <div className="mt-6 sm:mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 font-inter font-semibold text-white leading-tight text-sm sm:text-base md:text-lg">
        <p className="justify-self-end text-right">
          Every level builds curiosity and knowledge, <br />
          turning exploration and problem-solving <br />
          into a fun learning experience.
        </p>
        <p className="justify-self-start text-left">
          Children learn by playing - <br />
          each puzzle introduces a new place, symbol, <br />
          or landmark in a simple and visual way.
        </p>
      </div>
    </h2>
  );
}
export default OverviewSectionContent;
