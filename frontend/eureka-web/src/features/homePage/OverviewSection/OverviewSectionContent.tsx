export interface AboutUsContentProps {
  title: string;
  description?: string;
}

function OverviewSectionContent({ title, description }: AboutUsContentProps) {
  return (
    <>
      <h2
        id="overview-heading"
        className="text-2xl md:text-3xl font-semibold mb-4"
      >
        {title}
      </h2>
      <p>{description}</p>
    </>
  );
}
export default OverviewSectionContent;