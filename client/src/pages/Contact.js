import React from 'react'
import TopMenu from "../components/TopMenu";
import TopBar from "../components/TopBar";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";

const Contact = () => {
    return <div className="container">
        <TopBar />
        <TopMenu />
        <PageHeader title="Skontaktuj się z nami" />
        <ContactSection page={true} />
        <Footer />
    </div>
}

export default Contact;
