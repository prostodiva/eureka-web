import Section from '../layout/Section.tsx';
import type { BaseSectionProps } from '../../types/section.ts';


function Value({ backgroundImage, content, className, actions, style }: BaseSectionProps) {
  return (
    <Section
      aria-labelledby="value-heading"
      className={`relative flex flex-col justify-center items-center ${className || 'min-h-screen'}`}
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : undefined,
        ...style,
      }}
    >
      <div className="relative min-h-screen">
        {content}
        {actions}
      </div>
    </Section>
  );
}

export default Value;