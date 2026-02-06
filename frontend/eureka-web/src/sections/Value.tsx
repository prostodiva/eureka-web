import Section from '../components/Section.tsx';

export interface ValueProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
}


function Value({ title, description }: ValueProps) {
    return (
        <Section aria-labelledby="description-heading" className="bg-gray-100">
            <h2 id="description-heading" className="text-2xl md:text-3xl font-semibold mb-4">
                {title}
            </h2>
            <p className="text-base md:text-lg">
               {description}
            </p>
        </Section>
    );
}

export default Value;