import CallToAction from '../../../components/sections/CallToAction.tsx';
import CtaContent from './CtaContent.tsx';
import Button from '../../../components/ui/Button.tsx';

function CtaSection() {
  const handleDownloadClick = () => {
    alert('learn more clicked');
  };

  return (
    <CallToAction
      minHeightScreen
      content={
        <CtaContent
          title="Home Page: call to action"
          description="description. section call to action"
        />
      }
      actions={
        <Button variant="primary" onClick={handleDownloadClick}>
          Download Free Demo
        </Button>
      }
    />
  );
}

export default CtaSection;
