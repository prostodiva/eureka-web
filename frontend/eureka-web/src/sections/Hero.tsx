export interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
}

function Hero({ title, description }: HeroProps){
    return (
        <section aria-labelledby="hero-heading" className="px-4 py-8 bg-gray-100">
            <h2 id="hero-heading" className="text-2xl md:text-3xl font-semibold mb-4">{title}</h2>
            <p className="text-base md:text-lg">{description}</p>
        </section>
    );
}

export default Hero;
