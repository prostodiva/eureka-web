import Section from '../components/Section.tsx';

export interface FeaturesProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
}


function Features({ title, description }: FeaturesProps) {
  return (
    <Section aria-labelledby="feature-heading" className="bg-gray-50">
      <h2
        id="feature-heading"
        className="text-2xl md:text-3xl font-semibold mb-4"
      >
        {title}
      </h2>
      <p>{description}</p>
    </Section>
  );
}

export default Features;
