import FeatureSectionContent from './FeaturesSectionContent.tsx';
import { useMediaQuery } from '@/hooks/useMediaQuery.tsx';
import { featuresHome } from '@/assets/images';
import Section from '@/components/Section.tsx';
import Button from '@/components/ui/Button.tsx';

function FeaturesSection() {
  const handleDemoClick = () => console.log('demo clicked');
  const isMobile = useMediaQuery('(max-width: 640px)');

  return (
    <Section
      backgroundImage={isMobile ? undefined : featuresHome}
      style={isMobile ? { backgroundColor: '#FFD743' } : undefined}
    >
      <div className="absolute z-20 top-[700px] xl:left-[200px] xl:top-[350px] 2xl:left-[300px] 2xl:top-[500px] 2xl:left-[400px]">
        <Button
          variant="primary"
          onClick={handleDemoClick}
        >
          Demo
        </Button>
      </div>
      <FeatureSectionContent />
    </Section>
  );
}

export default FeaturesSection;
