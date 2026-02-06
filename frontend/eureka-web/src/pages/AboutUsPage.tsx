import Hero from '../sections/Hero.tsx';
import Value from '../sections/Value.tsx';

function AboutUsPage() {
    return (
      <>
        <h1 className="text-3xl md:text-5xl font-bold text-center mt-6">
          About Us. This title should describe the entire page, not just a
          section
        </h1>

        <Hero title="Hero Section About Page" description="hero section about page description blah-blah" />
        <Value title="Value Section About Page" description="Value section about page description blah-blah" />
      </>
    );
}

export default AboutUsPage;