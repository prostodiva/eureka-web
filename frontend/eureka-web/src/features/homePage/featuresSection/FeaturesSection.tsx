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
          title="Home Page: features"
          description="description"
        />
      }
      actions={
        <div className="absolute bottom-[40%] left-[20%] transform -translate-x-1/2 flex flex-col items-center gap-6 w-full">
          <div className="flex gap-6 justify-center">
            <Button variant="secondary" onClick={handleDemoCLick}>
              Download Free Demo
            </Button>
          </div>
        </div>
      }
    />
  );
}

export default FeaturesSection;
