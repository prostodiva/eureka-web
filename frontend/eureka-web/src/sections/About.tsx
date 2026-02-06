import Section from '../components/Section.tsx';

export interface AboutProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
}

function About({ title, description }: AboutProps) {
    return (
        <Section aria-labelledby="about-heading" className="bg-gray-50">
            <h2 id="about-heading" className="text-2xl md:text-3xl font-semibold mb-4">
                {title}
            </h2>
            <p>
              {description}
            </p>
        </Section>
    );
}

export default About;
