import Hero from '@/components/sections/Hero';
import GameplayHeroContent from './GameplayHeroContent';
import { aboutUsHome } from '@/assets/images';

function GameplayHero() {
  return (
    <Hero backgroundImage={aboutUsHome} style={{ backgroundColor: '#A37CFF' }}>
      <GameplayHeroContent />
    </Hero>
  );
}

export default GameplayHero;
