
import Section from '../components/layout/Section.tsx';
import type { BaseSectionProps } from '../types/section.ts';

function Footer({
  backgroundImage,
  content,
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
        className={`relative w-full sm-[50vh] md:h-[60vh] lg:h-[60vh] xl:h-[80vh] ${className || ''}`}
      >
        {content}
        {actions}
      </Section>
    </footer>
  );
}

export default Footer;
