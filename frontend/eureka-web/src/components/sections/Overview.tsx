import Section from '../Section.tsx';

export interface FeaturesProps {
  backgroundImage?: string;
  content: React.ReactNode;
  actions?: React.ReactNode;
  minHeightScreen?: boolean;
}

function Overview({ backgroundImage, content, actions}: FeaturesProps) {
  return (
    <Section
      aria-labelledby="overview-heading"
      className="relative bg-no-repeat bg-cover bg-center"
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
