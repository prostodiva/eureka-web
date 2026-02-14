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
      className={`relative w-full aspect-video ${className || ''}`}
    >
      {content}
      {actions}
    </Section>
  );
}

export default Hero;
