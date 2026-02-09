import About from '../../../components/sections/About.tsx';
import AboutUsContent from './AboutUsContent.tsx';
import Button from '../../../components/Button.tsx';

function AboutUsSection() {
  const handleLearnMoreClick = () => {
    console.log('learn more clicked');
  };

  return (
    <About
      minHeightScreen
      content={
        <AboutUsContent
          title="Home Page: section about us"
          description="description. section about us"
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

export default AboutUsSection;
