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
        <section aria-labelledby="about-heading" className="px-4 py-8 bg-gray-50">
            <h2 id="about-heading" className="text-2xl md:text-3xl font-semibold mb-4">
                {title}
            </h2>
            <p>
              {description}
            </p>
        </section>
    );
}

export default About;
