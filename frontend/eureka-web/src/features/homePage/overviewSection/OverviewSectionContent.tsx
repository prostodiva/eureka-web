function OverviewSectionContent() {
  return (
    <h2
      id="overview-heading"
      className="absolute text-center top-[5vh] flex flex-col px-[2vw]"
    >
      <span className="font-kingfink text-transparent [-webkit-text-stroke:1px_white] text-[clamp(1rem,2vw,2rem)]">
        CREATE
      </span>
      <span className="font-kingfink text-[#FFDC5C] mt-[2vh] leading-tight text-[clamp(1.5rem,3.5vw,8rem)]">
        LEARN HISTORY THROUGH AN INTERACTIVE GAME. DISCOVER FAMOUS PLACES,
        SYMBOLS, AND LANDMARKS STEP BY STEP. PLAY, SOLVE PUZZLES, AND EXPLORE
        THE UNITED STATES IN A FUN WAY.
      </span>
      <span className="font-inter font-semibold text-white leading-tight text-[clamp(0.75rem,1.3vw,2rem)] mt-[1vh]">
        Learning history becomes a game. <br />
        Children explore symbols, landmarks, and famous places through
        interactive puzzles and levels.
      </span>
      <div className="mt-[2vh] grid grid-cols-2 gap-[4vw] font-inter font-semibold text-white leading-tight text-[clamp(0.75rem,1.3vw,2rem)]">
        <p className="justify-self-end text-right">
          Every level builds curiosity and knowledge, <br />
          turning exploration and problem-solving <br />
          into a fun learning experience.
        </p>
        <p className="justify-self-start text-left">
          Children learn by playing — <br />
          each puzzle introduces a new place, symbol, <br />
          or landmark in a simple and visual way.
        </p>
      </div>
    </h2>
  );
}
export default OverviewSectionContent;
