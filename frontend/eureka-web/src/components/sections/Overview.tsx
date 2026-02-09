import Section from '../Section.tsx';

export interface FeaturesProps {
  backgroundImage?: string;
  content: React.ReactNode;
  actions?: React.ReactNode;
  minHeightScreen?: boolean;
}

function Overview({ backgroundImage, content, actions, minHeightScreen }: FeaturesProps) {
  return (
    <Section
      aria-labelledby="overview-heading"
      className={backgroundImage ? '' : 'bg-gray-100'}
      minHeightScreen={minHeightScreen}
      style={
        backgroundImage
          ? { backgroundImage: `url(${backgroundImage})` }
          : undefined
      }
    >
      <div>
        {content}
        {actions}
      </div>
    </Section>
  );
}

export default Overview;
