import Section from '../Section.tsx';

export interface HeroProps {
  backgroundImage?: string;
  content: React.ReactNode;
  actions?: React.ReactNode;
  minHeightScreen?: boolean;
}

function Hero({ backgroundImage, content, actions, minHeightScreen }: HeroProps){
    return (
      <Section
        aria-labelledby="hero-heading"
        className="relative bg-no-repeat bg-cover bg-center "
        minHeightScreen={minHeightScreen}
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
