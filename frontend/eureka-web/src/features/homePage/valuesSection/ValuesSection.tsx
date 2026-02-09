import Button from '../../../components/Button.tsx';
import ValuesSectionContent from './ValuesSectionContent.tsx';
import Value from '../../../components/sections/Value.tsx';

function ValuesSection() {
  const handleLearnMoreClick = () => {
    console.log('learn more clicked');
  };

  return (
    <Value
      minHeightScreen
      content={
        <ValuesSectionContent
          title="Home Page: Values section"
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

export default ValuesSection;
