import Hero from "../sections/Hero"
import Description from "../sections/Description.tsx";
import About from "../sections/About.tsx";
function HomePage() {
    return (
        <>
            <h1>This title should describe the entire page, not just a section</h1>

            <Hero />
            <Description />
            <About />
        </>
    );
}

export default HomePage;
