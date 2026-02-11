import Section from '../Section.tsx';

export interface FeaturesProps {
  backgroundImage?: string;
  content: React.ReactNode;
  actions?: React.ReactNode;
}

function Features({ backgroundImage, content, actions }: FeaturesProps) {
  return (
    <Section
      aria-labelledby="feature-heading"
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

export default Features;
