import Section from '../layout/Section.tsx';

import type { BaseSectionProps } from '../../types/section';

function About({ backgroundImage, content, actions }: BaseSectionProps) {
  return (
    <Section
      aria-labelledby="about-heading"
      className="relative min-h-screen flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="relative min-h-screen">
        {content}
        {actions}
      </div>
    </Section>
  );
}

export default About;
