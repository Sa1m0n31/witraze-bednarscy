import React, { useEffect, useState } from 'react'
import PageHeader from "./PageHeader";

import cert from '../static/img/certyfikat.png'

const ReferencesMain = () => {
    const [references, setReferences] = useState([cert, cert, cert]);

    return <main className="pageContent">
        <PageHeader title="Referencje" />
        <main className="pageContent__witrazeGrid pageContent__witrazeGrid--references">
            {references.map((item, index) => {
                return <figure data-aos="zoom-in" className="pageContent__witrazeGrid__item" key={index}>
                    <img className="pageContent__witraze__img" src={item} alt="referencje" />
                </figure>
            })}
        </main>
    </main>
}

export default ReferencesMain;
