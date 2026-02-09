import Hero from '../../../components/sections/Hero.tsx';
import StoreHeroContent from './StoreHeroContent.tsx';
import Button from '../../../components/Button.tsx';
import homeHeroBg from '../../../assets/bg/homeHero.png';

function StoreHero() {
  const handleBuyClick = () => {
    console.log('buy clicked');
  };

  return (
    <Hero
      backgroundImage={homeHeroBg}
      minHeightScreen
      content={
        <StoreHeroContent
          title="Hero Section Store Page"
          description="hero section Store page description blah-blah"
        />
      }
      actions={
        <Button variant="secondary" onClick={handleBuyClick}>
          Buy
        </Button>
      }
    />
  );
}

export default StoreHero;
