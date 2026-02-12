import Section from '../layout/Section.tsx';
import type { BaseSectionProps } from '../../types/section.ts';


function Value({ backgroundImage, content, actions, style }: BaseSectionProps) {
  return (
    <Section
      aria-labelledby="value-heading"
      className="relative min-h-[140vh] flex flex-col justify-center items-center"
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : undefined,
        ...style,
      }}
    >
      <div>
        {content}
        {actions}
      </div>
    </Section>
  );
}

export default Value;