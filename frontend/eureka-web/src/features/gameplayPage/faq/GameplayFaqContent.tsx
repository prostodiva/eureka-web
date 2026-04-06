import Accordion from '../../../components/ui/Acordion.tsx';
import { faqItems } from '../../../data/data.tsx';

function GameplayFaqContent() {

  return (
    <>
      <h2 className="absolute text-center top-10 sm:top-15 md:top-20 px-4 w-full">
        <span className="font-kingfink text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#FFDC5C] mt-6 sm:mt-8 md:mt-10 leading-none block">
          CREATING MINDS
          <br />
          CONNECTING IMAGINATION
        </span>
      </h2>

      {/* Accordion container */}
      <div className="relative w-full flex justify-center px-4 z-10">
        <div className="w-full max-w-7xl">
          <Accordion items={faqItems} />
        </div>
      </div>
    </>
  );
}
export default GameplayFaqContent;
