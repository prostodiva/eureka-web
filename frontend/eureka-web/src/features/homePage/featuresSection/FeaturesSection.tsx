import Features from '../../../components/sections/Features.tsx';
import FeatureSectionContent from './FeaturesSectionContent.tsx';
import featuresHome from '../../../assets/bg/featuresHome.png';

function FeaturesSection() {
  return (
    <Features
      backgroundImage={featuresHome}
      content={
        <FeatureSectionContent
          title="Home Page: features"
          description="description"
        />
      }
    />
  );
}

export default FeaturesSection;
