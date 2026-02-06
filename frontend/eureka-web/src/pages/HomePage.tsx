import Hero from "../sections/Hero"
import Value from "../sections/Value.tsx";
import About from "../sections/About.tsx";
import Features from '../sections/Features.tsx';
import SocialProof from '../sections/SocialProof.tsx';
import CallToAction from '../sections/CallToAction.tsx';
function HomePage() {
    return (
      <>
        <h1 className="text-3xl md:text-5xl font-bold text-center mt-6">
          This title should describe the entire page, not just a section
        </h1>

        <Hero
          title="Hero Section home page"
          description="hero section decription blah-blah"
        />

        <Value
          title="Value Section home page"
          description="Value section decription blah-blah"
        />
        <Features
          title="Features Section home page"
          description="Features section decription blah-blah"
        />

        <SocialProof
          title="SocialProof Section home page"
          description="SocialProof section decription blah-blah"
        />

        <About
          title="About Section home page"
          description="About section decription blah-blah"
        />

        <CallToAction
          title="CallToAction Section home page"
          description="callToAction section decription blah-blah"
          ctaLabel="CallToActionButton"
          onCtaClick={() => alert('CallToAction Clicked')}
        />
      </>
    );
}

export default HomePage;
