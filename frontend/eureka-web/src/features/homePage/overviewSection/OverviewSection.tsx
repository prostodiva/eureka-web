import OverviewSectionContent from './OverviewSectionContent';

import Hero from '@/components/sections/Hero';

function OverviewSection() {
  return (
    <Hero
      style={{ backgroundColor: '#A37CFF' }}
      className="min-h-screen flex items-start justify-center"
    >
      <OverviewSectionContent />
    </Hero>
  );
}

export default OverviewSection;
