import Section from '@/components/Section.tsx';
import GameplayHeroContent from './GameplayHeroContent.tsx';
import { aboutUsHome } from '@/assets/images';

function GameplayHero() {
  return (
    <Section backgroundImage={aboutUsHome} style={{ backgroundColor: '#A37CFF' }}>
      <GameplayHeroContent />
    </Section>
  );
}

export default GameplayHero;
