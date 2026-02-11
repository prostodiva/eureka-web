import Features from '../../../components/sections/Features.tsx';
import FeatureSectionContent from './FeaturesSectionContent.tsx';
import Button from '../../../components/ui/Button.tsx';

function FeaturesSection() {
  const handleLearnMoreClick = () => {
    console.log('learn more clicked');
  };

  return (
    <Features
      minHeightScreen
      content={
        <FeatureSectionContent
          title="Home Page: features"
          description="description"
        />
      }
      actions={
        <Button variant="primary" onClick={handleLearnMoreClick}>
          learnMore
        </Button>
      }
    />
  );
}

export default FeaturesSection;
