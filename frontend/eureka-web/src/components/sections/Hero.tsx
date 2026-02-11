import Section from '../layout/Section.tsx';
import type { BaseSectionProps } from '../../types/section.ts';


function Hero({ backgroundImage, content, actions, className, style }: BaseSectionProps){
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
