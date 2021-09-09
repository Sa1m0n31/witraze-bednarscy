import React from 'react'
import HeroCarousel from "../components/HeroCarousel";
import AboutUsSection from "../components/AboutUsSection";
import TechnologiesSection from "../components/TechnologiesSection";
import CreationProcessSection from "../components/CreationProcessSection";
import PortfolioSection from "../components/PortfolioSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Homepage = () => {
    return <div className="container">
        <HeroCarousel />
        <AboutUsSection />
        <TechnologiesSection />
        <CreationProcessSection />
        <PortfolioSection />
        <ContactSection />
        <Footer />
    </div>
}

export default Homepage;
