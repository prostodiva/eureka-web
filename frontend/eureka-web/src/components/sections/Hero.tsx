import Section from '../layout/Section.tsx';
import type { BaseSectionProps } from '../../types/section.ts';


function Hero({ backgroundImage, content, actions, style, className }: BaseSectionProps){
    return (
      <Section
        aria-labelledby="hero-heading"
        className={`relative min-h-[110vh] flex-col justify-center items-center ${className || ''}`}
        style={{
          backgroundImage: backgroundImage
            ? `url(${backgroundImage})`
            : undefined,
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat',
          ...style,
        }}
      >
        {content}
        {actions}
      </Section>
    );
}

export default Hero;
