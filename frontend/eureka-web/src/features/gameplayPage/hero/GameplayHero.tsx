import Hero from '../../../components/sections/Hero.tsx';
import GameplayHeroContent from './GameplayHeroContent.tsx';
import gameplay from '../../../assets/bg/aboutUsHome.png';

function GameplayHero() {
  return (
    <Hero
      backgroundImage={gameplay}
      content={<GameplayHeroContent />}
    />
  );
}

export default GameplayHero;
