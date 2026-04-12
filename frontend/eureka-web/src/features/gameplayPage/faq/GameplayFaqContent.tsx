import Accordion from '../../../components/ui/Acordion.tsx';
import { faqItems } from '../../../data/data.tsx';

function GameplayFaqContent() {
  return (
    <>
      <h2 className="relative z-10 flex flex-col items-center justify-start pt-20 sm:pt-10 md:pt-10 xl:pt-10 text-center">
        <span className="font-kingfink text-[#FFD743] leading-none text-[clamp(2rem,6vw,7rem)]">
          CREATING MINDS
          <br />
          CONNECTING IMAGINATION
        </span>
      </h2>

      {/* Accordion container */}
      <div className="flex items-center justify-between">
        <div className="w-full max-w-7xl mx-auto">
          <Accordion items={faqItems} />
        </div>
      </div>
    </>
  );
}
export default GameplayFaqContent;
