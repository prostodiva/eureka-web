import Overview from '../../../components/sections/Overview.tsx';
import Button from '../../../components/Button.tsx';
import OverviewSectionContent from './OverviewSectionContent.tsx';

function OverviewSection() {
  const handleLearnMoreClick = () => {
    console.log('learn more clicked');
  };

  return (
    <Overview
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
