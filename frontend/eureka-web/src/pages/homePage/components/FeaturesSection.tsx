import { featuresHome } from '@/assets/images';
import Section from '@/components/Section.tsx';
import Button from '@/components/ui/Button.tsx';
import { useMediaQuery } from '@/hooks/useMediaQuery.tsx';
import FeatureSectionContent from './FeaturesSectionContent.tsx';

function FeaturesSection() {

  const handleMacOsClick = () => {
    window.location.href = "https://github.com/prostodiva/eurika-game/releases/latest/download/Eurika.dmg"
  }

  const handleWindowsClick = () => {
    window.location.href = "https://github.com/prostodiva/eurika-game/releases/latest/download/Eureka-Windows.zip"
  }


  const isMobile = useMediaQuery('(max-width: 640px)');

  return (
    <Section
      backgroundImage={isMobile ? undefined : featuresHome}
      className='flex-col-reverse md:flex-row'
      style={isMobile ? { backgroundColor: '#FFD743' } : undefined}
    >
      <div className="z-20 flex flex-col w-full justify-center items-center"
      >
        <Button
          variant="primary"
          onClick={handleMacOsClick}
        >
          Download Demo for MacOS
        </Button>
        <p className="font-inter text-gwhite">If macOS blocks the app, go to System Settings → Privacy & Security → Open Anyway</p>

        <Button
          variant="primary"
          onClick={handleWindowsClick}
        >
          Download Demo for Windows
        </Button>
      </div>
      <FeatureSectionContent />
    </Section>
  );
}

export default FeaturesSection;
