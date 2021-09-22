import React, {useEffect, useState} from 'react'
import TopBar from "../components/TopBar";
import TopMenu from "../components/TopMenu";
import Footer from "../components/Footer";
import ArticleMain from "../components/ArticleMain";
import {getPagesContent} from "../helpers/pagesFunctions";

const PrivacyPolicy = () => {
    const [content, setContent] = useState("");

    useEffect(() => {
        getPagesContent()
            .then(res => {
                setContent(res?.data?.result[0]?.privacy_policy);
            });
    }, []);

    return <div className="container">
        <TopBar />
        <TopMenu />
        <ArticleMain title="Polityka prywatności"
                    content={content}
        />
        <Footer />
    </div>
}

export default PrivacyPolicy;
