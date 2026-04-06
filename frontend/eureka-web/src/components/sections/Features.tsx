import Section from '../layout/Section.tsx';
import type { BaseSectionProps } from '../../types/section';

function Features({ backgroundImage, actions, content, className }: BaseSectionProps) {
  return (
    <Section
      backgroundImage={backgroundImage}
      aria-labelledby="feature-heading"
      className={`w-full min-h-screen ${className || ''}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
        {/* LEFT SIDE (actions) */}
        <div className="flex items-start justify-start -translate-y-30 translate-x-20">
          {actions}
        </div>

        {/* RIGHT SIDE (content) */}
        <div className="flex items-start justify-center -translate-x-20 translate-y-10">
          {content}
        </div>
      </div>
    </Section>
  );
}

export default Features;
