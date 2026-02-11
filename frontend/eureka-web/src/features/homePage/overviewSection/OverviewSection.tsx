import Overview from '../../../components/sections/Overview.tsx';
import OverviewSectionContent from './OverviewSectionContent.tsx';
import overview from '../../../assets/bg/overviewHome.png'

function OverviewSection() {

  return (
    <Overview
      backgroundImage={overview}
      content={
        <OverviewSectionContent />
      }

    />
  );
}

export default OverviewSection;
