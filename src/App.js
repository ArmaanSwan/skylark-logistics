import TopContactBar from "./components/TopContactBar/TopContactBar";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import AboutUsCardsSection from "./components/AboutUsCardsSection/AboutUsCardsSection";
import HelpingOthersSection from "./components/HelpingOthersSection/HelpingOthersSection";
import ServicesSection from "./components/ServicesSection/ServicesSection";

function App() {
    return (
        <main itemScope itemType="https://schema.org/Organization">
            <TopContactBar />
            <Navbar />
            <HeroSection />
            <AboutUsCardsSection />
            <HelpingOthersSection />
            <ServicesSection />
        </main>
    );
}

export default App;
