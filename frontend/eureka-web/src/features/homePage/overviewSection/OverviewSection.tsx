import Overview from '../../../components/sections/Overview.tsx';
import OverviewSectionContent from './OverviewSectionContent.tsx';
import overview from '../../../assets/bg/overviewHome.png';

function OverviewSection() {
  return (
    <Overview
      backgroundImage={overview}
      content={<OverviewSectionContent />}
      className="h-screen flex items-center justify-center"
    />
  );
}

export default OverviewSection;
