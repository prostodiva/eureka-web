import Section from '../layout/Section.tsx';
import type { BaseSectionProps } from '../../types/section';

function Features({ backgroundImage, content, actions, className }: BaseSectionProps) {
  return (
    <Section
      backgroundImage={backgroundImage}
      aria-labelledby="feature-heading"
      className={`relative w-full aspect-video sm:min-h-[80vh] lg:min-h-[120vh] flex flex-col justify-center items-center ${className || ''}`}
    >
      {content}
      {actions}
    </Section>
  );
}

export default Features;
