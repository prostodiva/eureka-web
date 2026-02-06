import Section from '../components/Section.tsx';

export interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
  minHeightScreen?: boolean;
}

function Hero({ title, description, minHeightScreen }: HeroProps){
    return (
        <Section aria-labelledby="hero-heading" className="bg-gray-100" minHeightScreen={minHeightScreen}>
            <h2 id="hero-heading" className="text-2xl md:text-3xl font-semibold mb-4">{title}</h2>
            <p className="text-base md:text-lg">{description}</p>
        </Section>
    );
}

export default Hero;
