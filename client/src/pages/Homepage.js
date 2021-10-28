import React from 'react'
import HeroCarousel from "../components/HeroCarousel";
import AboutUsSection from "../components/AboutUsSection";
import TechnologiesSection from "../components/TechnologiesSection";
import CreationProcessSection from "../components/CreationProcessSection";
import PortfolioSection from "../components/PortfolioSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import background1 from "../static/img/background/warstwa2.svg";
import background2 from "../static/img/background/warstwa3.svg";
import background3 from "../static/img/background/warstwa1.svg";
import background4 from "../static/img/background/warstwa4.svg";

const Homepage = () => {
    return <div className="container">
        <img className="background background--2" src={background2} alt="tlo" />
        <img className="background background--3" src={background4} alt="tlo" />
        <img className="background background--4" src={background3} alt="tlo" />
        <HeroCarousel />
        <AboutUsSection />
        <TechnologiesSection />
        {/*<CreationProcessSection />*/}
        <PortfolioSection />
        <ContactSection />
        <Footer />
    </div>
}

export default Homepage;
