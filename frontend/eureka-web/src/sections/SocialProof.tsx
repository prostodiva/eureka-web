import Section from '../components/Section.tsx';
import classNames from 'classnames';

export interface FeaturesProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
  className?: string;
}

function SocialProof({ title, description, className }: FeaturesProps) {
  return (
    <Section
      aria-labelledby="proof-heading"
      className={classNames('bg-gray-100', className)}
    >
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
