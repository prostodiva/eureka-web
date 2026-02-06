import Hero from '../sections/Hero.tsx';
import Value from '../sections/Value.tsx';

function SupportPage() {
    return (
      <>
        <h1 className="text-3xl md:text-5xl font-bold text-center mt-6">
          Support Page. This title should describe the entire page, not just a
          section
        </h1>

        <Hero
          title="Hero Section Support Page"
          description="hero section support page description blah-blah"
          minHeightScreen
        />
        <Value
          title="Value Section Support Page"
          description="Value section support page description blah-blah"
        />
      </>
    );
}

export default SupportPage;