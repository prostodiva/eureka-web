import Features from '@/components/sections/Features';
import FeatureSectionContent from './FeaturesSectionContent';
import Button from '@/components/ui/Button';
import { featuresHome } from '@/assets/images';


function FeaturesSection() {
  const handleDemoCLick = () => console.log('demo clicked');

  return (
    <Features
      backgroundImage={featuresHome}
      content={
        <FeatureSectionContent
          title="Interactive Learning"
          description="Kids engage with puzzles, drag-and-drop activities, quizzes"
          learnMoreHref="/gameplay"
          textColor="text-[#8658F1]"
        />
      }
      actions={
        <div className="absolute left-[4vw] bottom-[30vh] flex flex-col items-start gap-[2vh]">
          <Button
            variant="secondary"
            onClick={handleDemoCLick}
            className="text-[clamp(0.75rem,1vw,1.25rem)] py-[1.5vh] px-[3vw]"
          >
            Download Free Demo
          </Button>
        </div>
      }
    />
  );
}

export default FeaturesSection;
