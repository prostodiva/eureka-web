import Accordion from '../../../components/ui/Acordion.tsx';
import { faqItems } from '../../../data/data.tsx';

function GameplayFaqContent() {

  return (
    <>
        <h2 className="absolute top-48 w-full text-center z-20">
          <span className="font-kingfink text-[#FFD743] leading-none text-[clamp(2rem,6vw,7rem)]">
            CREATING MINDS
            <br />
            CONNECTING IMAGINATION
          </span>
        </h2>

      {/* Accordion container */}
        <div className="absolute top-[55vh] left-1/2 -translate-x-1/2 w-full px-4 z-10">
            <div className="w-full max-w-7xl mx-auto">
              <Accordion items={faqItems} />
          </div>
      </div>
    </>
  );
}
export default GameplayFaqContent;
