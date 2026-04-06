import Features from '../../../components/sections/Features.tsx';
import FeatureSectionContent from './FeaturesSectionContent.tsx';
import featuresHome from '../../../assets/bg/featuresHome.png';
import Button from '../../../components/ui/Button.tsx';

function FeaturesSection() {

  const handleDemoCLick = () => {
    console.log('demo clicked');
  };

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
        <div className="absolute left-10 bottom-1/3 flex flex-col items-start gap-6">
            <Button variant="secondary" onClick={handleDemoCLick}>
              Download Free Demo
            </Button>
        </div>
      }
    />
  );
}

export default FeaturesSection;
