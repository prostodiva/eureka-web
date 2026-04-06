import Section from '../layout/Section.tsx';
import type { BaseSectionProps } from '../../types/section';

function Overview({ backgroundImage, content, actions, className }: BaseSectionProps) {
  return (
    <Section
      backgroundImage={backgroundImage}
      aria-labelledby="overview-heading"
      className={`relative w-full min-h-screen lg:min-h-[140vh] flex flex-col justify-center items-center ${className || ''}`}
    >
      {content}
      {actions}
    </Section>
  );
}

export default Overview;
