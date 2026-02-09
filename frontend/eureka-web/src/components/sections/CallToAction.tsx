import Section from '../Section.tsx';

export interface CallToActionProps {
  backgroundImage?: string;
  content: React.ReactNode;
  actions?: React.ReactNode;
  minHeightScreen?: boolean;
}

function CallToAction({ backgroundImage, content, actions, minHeightScreen }: CallToActionProps) {
  return (
    <Section
      aria-labelledby="callToAction-heading"
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

export default CallToAction;
