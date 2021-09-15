import React from 'react'
import TopBar from "../components/TopBar";
import TopMenu from "../components/TopMenu";
import Footer from "../components/Footer";
import WitrazeSubpageMain from "../components/WitrazeSubpageMain";

const WitrazeSubpage = ({type}) => {
    return <div className="container">
        <TopBar />
        <TopMenu />
        <WitrazeSubpageMain type={type} />
        <Footer />
    </div>
}

export default WitrazeSubpage;
