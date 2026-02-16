export interface AboutUsContentProps {
  title: string;
  description?: string;
}

function OverviewSectionContent() {
  return (
    <h1 className="absolute text-center top-50">
      <span className="font-kingfink text-transparent [-webkit-text-stroke:2px_white] text-4xl">
        CREATE
      </span>
    </h1>
  );
}
export default OverviewSectionContent;
