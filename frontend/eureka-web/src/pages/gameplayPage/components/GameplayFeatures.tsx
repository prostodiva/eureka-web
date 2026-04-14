import Section from '@/components/Section.tsx';
import GameplayFeaturesContent from './GameplayFeaturesContent.tsx';

function FeaturesSection() {
  return (
    <Section
      style={{ backgroundColor: '#FFD743' }}
      className="min-h-screen flex items-start justify-center"
    >
      <GameplayFeaturesContent />
    </Section>
  );
}

export default FeaturesSection;
