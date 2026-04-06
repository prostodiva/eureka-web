import Section from '../layout/Section.tsx';

import type { BaseSectionProps } from '../../types/section';

function About({ backgroundImage, content, actions, className }: BaseSectionProps) {
  return (
    <Section
      backgroundImage={backgroundImage}
      className={`relative w-full min-h-screen sm:min-h-[80vh] lg:min-h-[120vh] flex flex-col justify-center items-center ${className || ''}`}
      aria-labelledby="about-heading"
    >
      {content}
      {actions}
    </Section>
  );
}

export default About;
