import HomeHero from '../features/homePage/hero/HomeHero.tsx';
import AboutUsSection from '../features/homePage/aboutUsSection/AboutUsSection.tsx';
import CtaSection from '../features/homePage/CTAsection/CtaSection.tsx';
import FeaturesSection from '../features/homePage/featuresSection/FeaturesSection.tsx';
import OverviewSection from '../features/homePage/OverviewSection/OverviewSection.tsx';
import ValuesSection from '../features/homePage/valuesSection/ValuesSection.tsx';

function HomePage() {
    return (
      <>
        <HomeHero />
        <ValuesSection />
        <FeaturesSection />
        <AboutUsSection />
        <OverviewSection />
        <CtaSection />
      </>
    );
}

export default HomePage;
