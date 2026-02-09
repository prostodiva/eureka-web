export interface AboutUsContentProps {
  title: string;
  description?: string;
}

function ValuesSectionContent({ title, description }: AboutUsContentProps) {
  return (
    <>
      <h2
        id="value-heading"
        className="text-2xl md:text-3xl font-semibold mb-4"
      >
        {title}
      </h2>
      <p className="text-base md:text-lg">{description}</p>
    </>
  );
}
export default ValuesSectionContent;