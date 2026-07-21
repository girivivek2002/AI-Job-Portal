import Navbar from "../../components/public/Navbar";
import HeroSection from "../../components/public/HeroSection";
import StatsSection from "../../components/public/StatsSection";
import FeaturesSection from "../../components/public/FeaturesSection";

import CTASection from "../../components/public/CTASection";
import Footer from "../../components/public/Footer";
import HowItWorksSection from "../../components/public/HowItWorks";

const HomePage = () => {

    return (
        <>
            <Navbar />

            <HeroSection />

            <StatsSection />

            <FeaturesSection />

            <HowItWorksSection />

            <CTASection />

            <Footer />
        </>
    );

};

export default HomePage;