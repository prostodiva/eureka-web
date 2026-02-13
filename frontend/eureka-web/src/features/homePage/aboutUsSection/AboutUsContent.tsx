export interface AboutUsContentProps {
  title: string;
  subtitle?: string;
  description?: string;
}

function AboutUsContent({ title, subtitle, description }: AboutUsContentProps) {
  return (
    <>
      <h2
        id="about-heading"
        className="text-2xl md:text-3xl font-semibold mb-4"
      >
        {title}
      </h2>

      {subtitle && <p className="text-base md:text-lg">{subtitle}</p>}

      <p className="text-base md:text-lg">{description}</p>
    </>
  );
}
export default AboutUsContent;
