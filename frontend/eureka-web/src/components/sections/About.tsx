import Section from '../Section.tsx';

export interface AboutProps {
  backgroundImage?: string;
  content: React.ReactNode;
  actions?: React.ReactNode;
}

function About({ backgroundImage, content, actions }: AboutProps) {
  return (
    <Section
      aria-labelledby="about-heading"
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

export default About;
