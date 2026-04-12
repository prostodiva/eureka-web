import Section from '../components/layout/Section.tsx';
import type { BaseSectionProps } from '../types/section.ts';

function Footer({
  backgroundImage,
  actions,
  className,
}: BaseSectionProps) {
  return (
    <footer
      className="relative overflow-hidden"
      aria-labelledby="footer-heading"
    >
      <Section
        backgroundImage={backgroundImage}
        className={`relative w-full h-[50vh] sm:h-[50vh] md:h-[60vh] lg:h-[60vh] xl:h-[80vh] ${className || ''}`}
      >
        {actions}
      </Section>
    </footer>
  );
}

export default Footer;
