import Section from '../Section.tsx';

export interface HeroProps {
  backgroundImage?: string;
  content: React.ReactNode;
  actions?: React.ReactNode;
  minHeightScreen?: boolean;
}

function Hero({ backgroundImage, content, actions }: HeroProps){
    return (
      <Section
        aria-labelledby="hero-heading"
        className="relative min-h-screen flex flex-col justify-center items-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        {content}
        {actions}
      </Section>
    );
}

export default Hero;
