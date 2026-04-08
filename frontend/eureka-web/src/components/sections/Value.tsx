import Section from '../layout/Section.tsx';
import type { BaseSectionProps } from '../../types/section.ts';

function Value({
  backgroundImage,
  content,
  actions,
  className,
}: BaseSectionProps) {
  return (
    <Section
      backgroundImage={backgroundImage}
      aria-labelledby="value-heading"
      className={`relative w-full min-h-screen sm:min-h-[80vh] lg:min-h-[110vh] xl:h-[125vh] flex flex-col justify-center items-center ${className || ''}`}
    >
      {content}
      {actions}
    </Section>
  );
}

export default Value;
