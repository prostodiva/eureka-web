import Section from '../Section.tsx';

export interface HeroProps {
  backgroundImage?: string;
  content: React.ReactNode;
  actions?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

function Hero({ backgroundImage, content, actions, className, style }: HeroProps){
    return (
      <Section
        aria-labelledby="hero-heading"
        className={`relative flex flex-col justify-center items-center ${className || 'min-h-screen'}`}
        style={{
          backgroundImage: backgroundImage
            ? `url(${backgroundImage})`
            : undefined,
          ...style,
        }}
      >
        {content}
        {actions}
      </Section>
    );
}

export default Hero;
