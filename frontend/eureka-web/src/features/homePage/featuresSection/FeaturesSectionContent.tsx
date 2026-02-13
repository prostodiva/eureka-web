export interface FeatureSectionContentProps {
  title: string;
  subtitle?: string;
  description?: string;
}

function FeatureSectionContent({
  title,
  description,
}: FeatureSectionContentProps) {
  return (
    <>
      <h2
        id="feature-heading"
        className="text-2xl md:text-3xl font-semibold mb-4"
      >
        {title}
      </h2>
      <p>{description}</p>
    </>
  );
}
export default FeatureSectionContent;
