import TopContactBar from "./components/TopContactBar/TopContactBar";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import AboutUsCardsSection from "./components/AboutUsCardsSection/AboutUsCardsSection";

function App() {
    return (
        <main itemScope itemType="https://schema.org/Organization">
            <TopContactBar />
            <Navbar />
            <HeroSection />
            <AboutUsCardsSection />
        </main>
    );
}

export default App;
