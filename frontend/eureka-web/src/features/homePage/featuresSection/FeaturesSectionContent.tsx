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
    <div className="flex flex-col items-start px-8 sm:px-12 md:px-16 pt-4 sm:pt-6 md:pt-8 z-10">
      <h2
        className={`font-kingfink ${textColor} text-4xl sm:text-6xl md:text-7xl leading-none mb-4`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`font-inter ${textColor} text-sm sm:text-base max-w-xs leading-relaxed mb-6`}
        >
          {description}
        </p>
      )}

      <a
        href={learnMoreHref}
        className={`font-inter ${textColor} text-sm sm:text-base font-semibold underline uppercase tracking-wider`}
      >
        Learn More
      </a>
    </div>
  );
}

export default FeatureSectionContent;
