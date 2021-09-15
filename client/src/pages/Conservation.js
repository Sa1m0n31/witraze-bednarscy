import React from 'react'
import TopBar from "../components/TopBar";
import TopMenu from "../components/TopMenu";
import Footer from "../components/Footer";
import ConservationMain from "../components/ConservationMain";

const Conservation = () => {
    return <div className="container">
        <TopBar />
        <TopMenu />
        <ConservationMain />
        <Footer />
    </div>
}

export default Conservation;
