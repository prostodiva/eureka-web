export interface AboutUsContentProps {
  title: string;
  description?: string;
}

function CtaContent({ title, description }: AboutUsContentProps) {
  return (
    <>
      <h2
        id="callToAction-heading"
        className="text-2xl md:text-3xl font-semibold mb-4"
      >
        {title}
      </h2>
      <p>{description}</p>
    </>
  );
}
export default CtaContent;
