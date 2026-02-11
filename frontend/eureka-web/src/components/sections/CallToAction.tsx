import Section from '../Section.tsx';

export interface CallToActionProps {
  backgroundImage?: string;
  content: React.ReactNode;
  actions?: React.ReactNode;

}

function CallToAction({ backgroundImage, content, actions }: CallToActionProps) {
  return (
    <Section
      aria-labelledby="callToAction-heading"
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

export default CallToAction;
