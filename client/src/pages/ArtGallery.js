import React from 'react'
import TopBar from "../components/TopBar";
import TopMenu from "../components/TopMenu";
import ArtGalleryMain from "../components/ArtGalleryMain";
import Footer from "../components/Footer";

const ArtGallery = () => {
    return <div className="container">
        <TopBar />
        <TopMenu />
        <ArtGalleryMain />
        <Footer />
    </div>
}

export default ArtGallery;
