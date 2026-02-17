export interface AboutUsContentProps {
  title: string;
  subtitle?: string;
  description?: string;
}

function AboutUsContent( ) {
  return (
    <h1 className="absolute text-center top-50">
      <span className="font-kingfink text-transparent [-webkit-text-stroke:2px_white] text-4xl">
        FOUNDERS
      </span>
    </h1>
  );
}
export default AboutUsContent;
