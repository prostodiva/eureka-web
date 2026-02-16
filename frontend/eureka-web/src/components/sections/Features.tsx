import Section from '../layout/Section.tsx';
import type { BaseSectionProps } from '../../types/section';

function Features({ backgroundImage, content, actions, className }: BaseSectionProps) {
  return (
    <Section
      backgroundImage={backgroundImage}
      aria-labelledby="feature-heading"
      className={`relative w-full aspect-video ${className || ''}`}
    >
      {content}
      {actions}
    </Section>
  );
}

export default Features;
