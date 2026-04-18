import { featuresHome } from '@/assets/images';
import Section from '@/components/Section.tsx';
import Button from '@/components/ui/Button.tsx';
import { useMediaQuery } from '@/hooks/useMediaQuery.tsx';
import FeatureSectionContent from './FeaturesSectionContent.tsx';

function FeaturesSection() {
  const handleDemoClick = () => console.log('demo clicked');
  const isMobile = useMediaQuery('(max-width: 640px)');

  return (
    <Section
      backgroundImage={isMobile ? undefined : featuresHome}
      className='flex-col-reverse md:flex-row'
      style={isMobile ? { backgroundColor: '#FFD743' } : undefined}
    >
      <div className="z-20 flex w-full justify-center items-center"
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
