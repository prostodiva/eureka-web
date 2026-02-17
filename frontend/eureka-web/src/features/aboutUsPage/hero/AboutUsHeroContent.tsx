export interface AboutUsHeroContentProps {
  title: string;
  subtitle?: string;
  description?: string;
}

function AboutUsHeroContent() {
  return (
    <h1 className="absolute text-center top-30">
      <span className="font-kingfink text-transparent [-webkit-text-stroke:2px_white] text-4xl">
        FOUNDERS
      </span>
    </h1>
  );
}
export default AboutUsHeroContent;
