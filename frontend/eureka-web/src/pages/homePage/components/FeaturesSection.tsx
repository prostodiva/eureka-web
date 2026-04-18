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
      <div className="absolute z-20 
                    bottom-6 left-1/2 -translate-x-1/2
                    md:bottom-150 xl:left-[200px] xl:translate-x-0
                    2xl:left-[300px]"
      >
        <Button
          variant="primary"
          onClick={handleDemoClick}
        >
          Download Demo
        </Button>
      </div>
      <FeatureSectionContent />
    </Section>
  );
}

export default FeaturesSection;
