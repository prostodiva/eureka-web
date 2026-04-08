export interface CtaContentProps {
  number: string;
  title: string;
  description?: string;
  learnMoreHref?: string;
}

function CtaContent({
  number,
  title,
  description,
  learnMoreHref = '#',
}: CtaContentProps) {
  return (
    <div className="flex flex-col items-start px-8 sm:px-12 md:px-16 pt-8 sm:pt-10 md:pt-12">
      {/* Number */}
      <span className="font-inter text-purple-600 text-base sm:text-lg font-normal mb-2">
        {number}
      </span>

      {/* Title */}
      <h2 className="font-kingfink text-purple-600 text-4xl sm:text-6xl md:text-7xl leading-none mb-4">
        {title}
      </h2>

      {/* Description */}
      {description && (
        <p className="font-inter text-purple-600 text-sm sm:text-base max-w-xs leading-relaxed mb-6">
          {description}
        </p>
      )}

      {/* Learn More */}
      <a
        href={learnMoreHref}
        className="font-inter text-purple-600 text-sm sm:text-base font-semibold underline uppercase tracking-wider"
      >
        Learn More
      </a>
    </div>
  );
}

export default CtaContent;
