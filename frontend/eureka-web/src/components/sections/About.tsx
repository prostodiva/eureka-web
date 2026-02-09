import Section from '../Section.tsx';

export interface AboutProps {
  backgroundImage?: string;
  content: React.ReactNode;
  actions?: React.ReactNode;
  minHeightScreen?: boolean;
}

function About({ backgroundImage, content, actions, minHeightScreen }: AboutProps) {
  return (
    <Section
      aria-labelledby="about-heading"
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

export default About;
