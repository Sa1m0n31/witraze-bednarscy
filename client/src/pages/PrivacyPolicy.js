import React from 'react'
import TopBar from "../components/TopBar";
import TopMenu from "../components/TopMenu";
import Footer from "../components/Footer";
import ArticleMain from "../components/ArticleMain";

const PrivacyPolicy = () => {
    return <div className="container">
        <TopBar />
        <TopMenu />
        <ArticleMain title="Polityka prywatności" />
        <Footer />
    </div>
}

export default PrivacyPolicy;
