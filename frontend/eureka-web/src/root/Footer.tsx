import Section from '../components/layout/Section.tsx';
import type { BaseSectionProps } from '../types/section.ts';

function Footer({ backgroundImage, children, className }: BaseSectionProps) {
  return (
    <footer className="relative w-full overflow-hidden">
      <Section
        backgroundImage={backgroundImage}
        className={`relative w-full min-h-fit ${className || ''}`}
      >
        {children}
      </Section>
    </footer>
  );
}

export default Footer;
