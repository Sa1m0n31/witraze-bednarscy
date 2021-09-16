import React from 'react'
import TopBar from "../components/TopBar";
import TopMenu from "../components/TopMenu";
import Footer from "../components/Footer";
import ArticleMain from "../components/ArticleMain";

const TermsOfService = () => {
    return <div className="container">
        <TopBar />
        <TopMenu />
        <ArticleMain title="Regulamin" />
        <Footer />
    </div>
}

export default TermsOfService;
