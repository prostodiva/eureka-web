import { featuresHome } from '@/assets/images';
import Section from '@/components/Section.tsx';
import Button from '@/components/ui/Button.tsx';
import { useMediaQuery } from '@/hooks/useMediaQuery.tsx';
import FeatureSectionContent from './FeaturesSectionContent.tsx';
import { useState } from 'react';
import LegalNotice from '@/components/ui/LegalNotice.tsx';

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
      className="flex-col-reverse md:flex-row"
      style={isMobile ? { backgroundColor: '#FFD743' } : undefined}
    >
      <div className="z-20 flex flex-col w-full justify-center items-center">
        <Button variant="primary" onClick={handleMacOsClick} disabled={!agreed}>
          Download Demo for MacOS
        </Button>
        <p className="font-inter max-w-sm leading-relaxed p-5 text-sm text-black m-2">
          MacOS: if MacOs blocks the app, go to System Settings → Privacy &
          Security → Open Anyway
        </p>

        <Button
          variant="primary"
          onClick={handleWindowsClick}
          disabled={!agreed}
        >
          Download Demo for Windows
        </Button>

        <p className="font-inter max-w-sm leading-relaxed p-5 text-sm text-black m-2">
          Windows: If SmartScreen appears, click More info → Run anyway, and
          extract the ZIP before running Eureka.exe.
        </p>

        {/* Checkbox */}
        <label className="flex items-center gap-2 text-sm text-black mt-4 cursor-pointer">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
          />
          I have read and agree to the Terms and Legal Notice.
        </label>
        <div className="flex justify-center">
          <LegalNotice />
        </div>
      </div>
      <FeatureSectionContent />
    </Section>
  );
}

export default FeaturesSection;
