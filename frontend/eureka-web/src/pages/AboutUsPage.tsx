import AboutUsHeroSection from '../features/aboutUsPage/hero/AboutUsHeroSection.tsx';

function AboutUsPage() {
    return (
      <>
        <h1 className="text-3xl md:text-5xl font-bold text-center mt-6">
          About Us. This title should describe the entire page, not just a
          section
        </h1>

        <AboutUsHeroSection />

      </>
    );
}

export default AboutUsPage;