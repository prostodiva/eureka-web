import Section from '../layout/Section.tsx';
import type { BaseSectionProps } from '@/types/section.ts';

function Hero({
  backgroundImage,
  style,
  actions,
  className,
  children,
  button,
  buttonClassName,
}: BaseSectionProps) {
  return (
    <Section
      backgroundImage={backgroundImage}
      button={button}
      buttonClassName={buttonClassName}
      style={style}
      className={`relative w-full min-h-screen ${className || ''}`}
    >
      {children}
      {actions}
    </Section>
  );
}

export default Hero;
