import FeatureSectionContent from './FeaturesSectionContent';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { featuresHome } from '@/assets/images';
import Hero from '@/components/sections/Hero';
import Button from '@/components/ui/Button';

function FeaturesSection() {
  const handleDemoClick = () => console.log('demo clicked');
  const isMobile = useMediaQuery('(max-width: 640px)');

  return (
    <Hero
      backgroundImage={isMobile ? undefined : featuresHome}
      style={isMobile ? { backgroundColor: '#FFD743' } : undefined}
      onClick={handleDemoClick}
      button={<Button variant="primary">Demo</Button>}
      buttonClassName="top-[600px] xl:left-[200px] xl:top-[500px]"
      className="min-h-screen flex items-center justify-center"
    >
      <FeatureSectionContent />
    </Hero>
  );
}

export default FeaturesSection;
