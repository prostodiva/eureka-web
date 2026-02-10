import Overview from '../../../components/sections/Overview.tsx';
import Button from '../../../components/Button.tsx';
import OverviewSectionContent from './OverviewSectionContent.tsx';
import overview from '../../../assets/bg/overviewHome.png'

function OverviewSection() {
  const handleLearnMoreClick = () => {
    console.log('learn more clicked');
  };

  return (
    <Overview
      backgroundImage={overview}
      minHeightScreen
      content={
        <OverviewSectionContent
          title="Home Page: overview section"
          description="description"
        />
      }
      actions={
        <Button variant="primary" onClick={handleLearnMoreClick}>
          learnMore
        </Button>
      }
    />
  );
}

export default OverviewSection;
