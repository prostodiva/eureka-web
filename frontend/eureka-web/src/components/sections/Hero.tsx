import Section from '../layout/Section.tsx';
import type { BaseSectionProps } from '../../types/section.ts';

function Hero({
  backgroundImage,
  content,
  actions,
  className,
}: BaseSectionProps) {
  return (
    <Section
      backgroundImage={backgroundImage}
      className={`relative w-full min-h-screen ${className || ''}`}
    >
      {content}
      {actions}
    </Section>
  );
}

export default Hero;
