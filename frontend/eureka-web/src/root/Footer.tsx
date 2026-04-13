
import Hero from '@/components/sections/Hero.tsx';
import type { BaseSectionProps } from '../types/section.ts';

function Footer({ backgroundImage, children, className }: BaseSectionProps) {
  return (
    <footer className="relative w-full overflow-hidden">
      <Hero
        backgroundImage={backgroundImage}
        className={`relative w-full min-h-fit ${className || ''}`}
      >
        {children}
      </Hero>
    </footer>
  );
}

export default Footer;
