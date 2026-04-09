import Overview from '@/components/sections/Overview';
import OverviewSectionContent from './OverviewSectionContent';
import { overviewHome } from '@/assets/images';

function OverviewSection() {
  return (
    <Overview
      backgroundImage={overviewHome}
      content={<OverviewSectionContent />}
      className="h-screen flex items-center justify-center"
    />
  );
}

export default OverviewSection;
