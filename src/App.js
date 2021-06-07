import TopContactBar from "./components/TopContactBar/TopContactBar";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import AboutUsCardsSection from "./components/AboutUsCardsSection/AboutUsCardsSection";
import HelpingOthersSection from "./components/HelpingOthersSection/HelpingOthersSection";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import ContactUsSection from "./components/ContactUsSection/ContactUsSection";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <>
            <TopContactBar />
            <Navbar />
            <main>
                <HeroSection />
                <AboutUsCardsSection />
                <HelpingOthersSection />
                <ServicesSection />
                <ContactUsSection />
            </main>
            <Footer />
        </>
    );
}

export default App;
