import Section from '../layout/Section.tsx';
import type { BaseSectionProps } from '../../types/section';

function Overview({ backgroundImage, content, actions}: BaseSectionProps) {
  return (
    <Section
      aria-labelledby="overview-heading"
      className="relative min-h-[120vh] flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {content}
      {actions}
    </Section>
  );
}

export default Overview;
