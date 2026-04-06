import CallToAction from '../../../components/sections/CallToAction.tsx';
import CtaContent from './CtaContent.tsx';
import Button from '../../../components/ui/Button.tsx';

function CtaSection() {
  const handleDownloadClick = () => {
    alert('learn more clicked');
  };

  return (
    <CallToAction
      content={
        <CtaContent
          number="01"
          title="Interactive Learning"
          description="Kids engage with puzzles, drag-and-drop activities, quizzes"
          learnMoreHref="/gameplay"
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
