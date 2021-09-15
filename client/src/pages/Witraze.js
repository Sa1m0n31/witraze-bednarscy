import React from 'react'
import Footer from "../components/Footer";
import TopBar from "../components/TopBar";
import TopMenu from "../components/TopMenu";
import WitrazeMain from "../components/WitrazeMain";

const Witraze = () => {
    return <div className="container">
        <TopBar />
        <TopMenu />
        <WitrazeMain />
        <Footer />
    </div>
}

export default Witraze;
