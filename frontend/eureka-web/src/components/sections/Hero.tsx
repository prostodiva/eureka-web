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
        className={`
        bg-cover bg-center bg-no-repeat
        ${!backgroundImage ? 'bg-gray-100' : ''}
      `}
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

export default Hero;
