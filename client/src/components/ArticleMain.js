import React from 'react'
import PageHeader from "./PageHeader";

const ArticleMain = ({title, content}) => {
    return <main className="pageContent">
        <PageHeader title={title} />

        <article className="pageContent__article" dangerouslySetInnerHTML={{__html: content}}>

        </article>
    </main>
}

export default ArticleMain;
