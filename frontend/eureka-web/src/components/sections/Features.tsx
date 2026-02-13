import Section from '../layout/Section.tsx';
import type { BaseSectionProps } from '../../types/section';


function Features({ backgroundImage, content, actions }: BaseSectionProps) {
  return (
    <Section
      aria-labelledby="feature-heading"
      className="relative min-h-[120vh] flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div>
        {content}
        {actions}
      </div>
    </Section>
  );
}

export default Features;
