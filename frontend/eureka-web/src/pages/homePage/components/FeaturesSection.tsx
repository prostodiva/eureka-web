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
      className="min-h-screen flex items-center justify-center"
    >
      <Button 
      variant="primary" 
      onClick={handleDemoClick} 
      className="top-[600px] xl:left-[200px] xl:top-[500px]"
      >
        Demo</Button>
      <FeatureSectionContent />
    </Section>
  );
}

export default FeaturesSection;
