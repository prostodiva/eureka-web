import { featuresHome } from '@/assets/images';
import Section from '@/components/Section.tsx';
import Button from '@/components/ui/Button.tsx';
import { useMediaQuery } from '@/hooks/useMediaQuery.tsx';
import FeatureSectionContent from './FeaturesSectionContent.tsx';
import { useState } from 'react';

function FeaturesSection() {
  const [agreed, setAgreed] = useState(false);

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
          disabled={!agreed}
        >
          Download Demo for MacOS
        </Button>
        <p className="font-inter text-white max-w-md leading-relaxed p-5">MacOS: if MacOs blocks the app, go to System Settings → Privacy & Security → Open Anyway</p>

        <Button
          variant="primary"
          onClick={handleWindowsClick}
          disabled={!agreed}
        >
          Download Demo for Windows
        </Button>

        <p className="font-inter text-white max-w-md leading-relaxed p-5">
          Windows: If SmartScreen appears, click More info → Run anyway, and extract the ZIP before running Eureka.exe.</p>
        
        {/* Checkbox */}
      <label className="flex items-center gap-2 text-sm text-gray-300 mt-4 cursor-pointer">
        <input
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
        />

        I agree to the terms and disclaimer

      </label>
        {/* Legal Notice */}
          <p className="text-xs text-gray-300 max-w-md leading-relaxed mt-4">
            This game is provided "as is" without warranties. The developer is not liable <br></br>
          for any damages, data loss, or system issues resulting from its use.
          </p>
      </div>
      <FeatureSectionContent />
    </Section>
  );
}

export default FeaturesSection;
