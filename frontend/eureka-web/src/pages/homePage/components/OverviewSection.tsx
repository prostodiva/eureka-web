import OverviewSectionContent from './OverviewSectionContent.tsx';

import Section from '@/components/Section.tsx';

function OverviewSection() {
  return (
    <Section
      style={{ backgroundColor: '#A37CFF' }}
      className="min-h-screen flex items-start justify-center"
    >
      <OverviewSectionContent />
    </Section>
  );
}

export default OverviewSection;
