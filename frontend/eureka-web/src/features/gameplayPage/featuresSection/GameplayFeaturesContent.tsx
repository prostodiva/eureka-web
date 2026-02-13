export interface GameplayFeaturesContentProps {
  title: string;
  subtitle?: string;
  description?: string;
}

function GameplayFeaturesContent({title, description}: GameplayFeaturesContentProps) {
  return (
    <>
      <h2
        id="gameplay-feature-heading"
        className="text-2xl md:text-3xl font-semibold mb-4"
      >
        {title}
      </h2>
      <p>{description}</p>
    </>
  );
}
export default GameplayFeaturesContent;