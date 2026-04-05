import FounderCard from '../../../components/ui/FounderCard.tsx';
import ritaImg from '../../../assets/rita.png';
import alekseiImg from '../../../assets/aleksei.png';

function AboutUsHeroContent() {
  return (
    <div className="relative z-10 flex flex-col items-center w-full px-4 pt-24 sm:pt-28 md:pt-32">
      {/* Our Story label */}
      <span className="font-kingfink text-transparent [-webkit-text-stroke:1.5px_#FFFFFF] text-xl sm:text-2xl">
        OUR STORY
      </span>

      {/* Main title */}
      <h1 className="font-kingfink text-[#FFDC5C] text-center text-6xl sm:text-8xl md:text-9xl leading-none mb-6 pt-5">
        SMART PLAY <br /> FOR KIDS
      </h1>

      {/* Description */}
      <p className="text-white font-inter text-center text-sm sm:text-base md:text-lg leading-relaxed mt-2 sm:mt-3 max-w-4xl">
        We are a startup that creates creative digital tools for children and
        their parents. With the help of AI, children can turn their own drawings
        into unique puzzles that challenge their imagination, logic, and
        problem-solving skills. Through this experience, we introduce kids to
        modern technology in a safe and playful way, helping them grow, adapt,
        and explore their creativity with confidence.
      </p>

      {/* Founders label */}
      <span className="font-kingfink text-transparent [-webkit-text-stroke:1.5px_#FFFFFF] text-xl sm:text-2xl mt-12 sm:mt-16 md:mt-20">
        FOUNDERS
      </span>

      {/* About Our Team title */}
      <h2 className="font-kingfink text-[#FFDC5C] text-center text-2xl sm:text-4xl md:text-5xl leading-none mb-8 sm:mb-12">
        ABOUT OUR TEAM
      </h2>

      {/* Founder cards */}
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

export default AboutUsHeroContent;

