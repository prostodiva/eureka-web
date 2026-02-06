import Section from '../components/Section.tsx';

export interface FeaturesProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
}

function SocialProof({ title, description }: FeaturesProps) {
  return (
    <Section aria-labelledby="proof-heading" className="bg-gray-50">
      <h2
        id="proof-heading"
        className="text-2xl md:text-3xl font-semibold mb-4"
      >
        {title}
      </h2>
      <p>{description}</p>
    </Section>
  );
}

export default SocialProof;
