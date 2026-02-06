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
    <section aria-labelledby="feature-heading" className="px-4 py-8 bg-gray-50">
      <h2
        id="feature-heading"
        className="text-2xl md:text-3xl font-semibold mb-4"
      >
        {title}
      </h2>
      <p>{description}</p>
    </section>
  );
}

export default Features;
