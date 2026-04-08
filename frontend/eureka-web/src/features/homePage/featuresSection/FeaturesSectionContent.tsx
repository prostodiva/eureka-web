export interface FeatureSectionContentProps {
  title: string;
  description?: string;
  learnMoreHref?: string;
  textColor?: string;
}

function FeatureSectionContent({
  title,
  description,
  learnMoreHref = '#',
  textColor = 'text-[#8658F1]',
}: FeatureSectionContentProps) {
  return (
    <div className="flex flex-col items-start px-[4vw] pt-[3vh] z-10">
      <h2
        className={`font-kingfink ${textColor} text-[clamp(2rem,4vw,7rem)] leading-none mb-[2vh]`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`font-inter ${textColor} text-[clamp(0.75rem,1vw,1.5rem)] max-w-[30vw] leading-relaxed mb-[2vh]`}
        >
          {description}
        </p>
      )}

      <a
        href={learnMoreHref}
        className={`font-inter ${textColor} text-[clamp(0.75rem,1vw,1.5rem)] font-semibold underline uppercase tracking-wider`}
      >
        Learn More
      </a>
    </div>
  );
}

export default FeatureSectionContent;
