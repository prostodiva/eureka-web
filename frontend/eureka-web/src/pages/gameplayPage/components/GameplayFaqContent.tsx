import Accordion from '../../../components/ui/Acordion.tsx';
import { faqItems } from '@/data/data.tsx';

function GameplayFaqContent() {
  return (
    <div className="relative min-h-dvh z-10 flex flex-col items-center justify-start px-4 pt-10 sm:pt-32 md:pt-36 xl:pt-42 text-center">
      <h2 className="relative flex flex-col pt-20 sm:pt-10 md:pt-10 xl:pt-10 text-center">
        <span className="font-kingfink text-[#FFD743] leading-none text-[clamp(3rem,8vw,9rem)]">
          CREATING MINDS
          <br />
          CONNECTING IMAGINATION
        </span>
      </h2>

      {/* Accordion container */}
        <div className="max-w-accordion md:m-20">
          <Accordion items={faqItems} />
        </div>
    </div>
  );
}
export default GameplayFaqContent;
