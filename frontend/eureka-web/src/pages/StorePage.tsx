import Hero from '../sections/Hero.tsx';
import Value from '../sections/Value.tsx';

function StorePage() {
    return (
      <>
        <h1 className="text-3xl md:text-5xl font-bold text-center mt-6">
          Store Page. This title should describe the entire page, not just a
          section
        </h1>

        <Hero
          title="Hero Section Store Page"
          description="hero section Store page description blah-blah"
          minHeightScreen
        />
        <Value
          title="Value Section Store Page"
          description="Value section store page description blah-blah"
        />
      </>
    );
}

export default StorePage;