import Section from '../Section.tsx';

export interface ValueProps {
  backgroundImage?: string;
  content: React.ReactNode;
  actions?: React.ReactNode;
  minHeightScreen?: boolean;
}


function Value({ backgroundImage, content, actions, minHeightScreen }: ValueProps) {
  return (
    <Section
      aria-labelledby="value-heading"
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

export default Value;