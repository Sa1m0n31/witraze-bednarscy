import React, {useEffect, useState} from 'react'
import TopBar from "../components/TopBar";
import TopMenu from "../components/TopMenu";
import Footer from "../components/Footer";
import ArticleMain from "../components/ArticleMain";
import {getPagesContent} from "../helpers/pagesFunctions";

const TermsOfService = () => {
    const [content, setContent] = useState("");

    useEffect(() => {
        getPagesContent()
            .then(res => {
                setContent(res?.data?.result[0]?.terms_of_service);
            })
    }, []);

    return <div className="container">
        <TopBar />
        <TopMenu />
        <ArticleMain title="Regulamin"
                     content={content}
        />
        <Footer />
    </div>
}

export default TermsOfService;
