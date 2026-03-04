function OverviewSectionContent() {
  return (
    <h1 className="absolute text-center top-30 flex flex-col">
      <span className="font-kingfink text-transparent [-webkit-text-stroke:1px_white] text-2xl">
        CREATE
      </span>
      <span className="font-kingfink text-5xl font-inter font-regular text-[#FFDC5C] mt-10 whitespace-nowrap leading-tight">
        LEARN HISTORY THROUGH AN INTERACTIVE GAME. <br />
        DISCOVER FAMOUS PLACES, SYMBOLS, AND <br />
        LANDMARKS STEP BY STEP. PLAY, SOLVE PUZZLES, <br />
        AND EXPLORE THE UNITED STATES IN A FUN WAY.
      </span>

      <span className="font-inter font-semibold text-white leading-tight text-lg">
        Learning history becomes a game. <br />
        Children explore symbols, landmarks, and famous places through
        interactive puzzles and levels.
      </span>
      <div className="mt-10 grid grid-cols-2 gap-4 font-inter font-semibold text-white leading-tight text-lg">
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
    </h1>
  );
}
export default OverviewSectionContent;
