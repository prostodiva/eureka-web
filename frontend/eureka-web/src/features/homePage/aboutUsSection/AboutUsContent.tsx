import FounderCard from '../../../components/ui/FounderCard.tsx';
import ritaImg from '../../../assets/rita.png';
import alekseiImg from '../../../assets/aleksei.png';

function AboutUsContent( ) {
    return (
      <div
        id="about"
        className="relative z-10 flex flex-col items-center w-full px-4 pt-20 sm:pt-24 md:pt-28"
      >
      <span className="font-kingfink text-transparent [-webkit-text-stroke:1.5px_#FFFFFF] text-xl sm:text-2xl mb-8 sm:mb-12 md:mb-16">
        FOUNDERS
      </span>

        <div className="grid grid-cols-1 sm:grid-cols-2 w-full max-w-3xl mx-auto">
          <FounderCard
            image={ritaImg}
            name="Margarita Kattsyna"
            role="Founder & Lead Engineer"
            className="justify-self-end -mr-8"
          />
          <FounderCard
            image={alekseiImg}
            name="Aleksei Shchepin"
            role="UX/UI Designer"
            className="justify-self-start -ml-8 rotate-3"
          />
        </div>
      </div>
    );
  }

export default AboutUsContent;
