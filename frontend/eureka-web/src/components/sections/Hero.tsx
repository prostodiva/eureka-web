import Section from '../layout/Section.tsx';
import type { BaseSectionProps } from '@/types/section.ts';

function Hero({
  backgroundImage,
  style,
  content,
  actions,
  className,
}: BaseSectionProps) {
  return (
    <Section
      backgroundImage={backgroundImage}
      style={style}
      className={`relative w-full min-h-screen aspect-[9/16] sm:aspect-auto ${className || ''}`}
    >
      {content}
      {actions}
    </Section>
  );
}

export default Hero;
