import HomeHero from '../features/homePage/hero/HomeHero.tsx';
import AboutUsSection from '../features/homePage/aboutUsSection/AboutUsSection.tsx';
import FeaturesSection from '../features/homePage/featuresSection/FeaturesSection.tsx';
import OverviewSection from '../features/homePage/overviewSection/OverviewSection.tsx';
import ValuesSection from '../features/homePage/valuesSection/ValuesSection.tsx';

function HomePage() {
  return (
    <>
      <HomeHero />
      <OverviewSection />
      <ValuesSection />
      <FeaturesSection />
      <AboutUsSection />
    </>
  );
}

export default HomePage;
