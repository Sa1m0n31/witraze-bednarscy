import React, { useState, useEffect } from 'react'
import PageHeader from "./PageHeader";

import witraz1 from '../static/img/witraz7.png'
import witraz2 from '../static/img/witraz6.png'
import witraz3 from '../static/img/witraz4.png'

const WitrazeSubpageMain = ({type}) => {
    const tmp = [
        {
            img: witraz1,
            title: "Tytuł witrażu",
            desc: "KRÓTKI OPIS, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam."
        },
        {
            img: witraz3,
            title: "Tytuł witrażu",
            desc: "KRÓTKI OPIS, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam."
        },
        {
            img: witraz2,
            title: "Tytuł witrażu",
            desc: "KRÓTKI OPIS, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam."
        },
        {
            img: witraz3,
            title: "Tytuł witrażu",
            desc: "KRÓTKI OPIS, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam."
        },
        {
            img: witraz2,
            title: "Tytuł witrażu",
            desc: "KRÓTKI OPIS, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam."
        },
        {
            img: witraz1,
            title: "Tytuł witrażu",
            desc: "KRÓTKI OPIS, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam."
        }
    ]

    const [witraze, setWitraze] = useState(tmp);

    useEffect(() => {
        if(type === "sakralne") {

        }
        else {

        }
    }, []);

    return <main className="pageContent">
        <PageHeader title={type === "sakralne" ? "Witraże sakralne" : "Witraże kameralne"} />
        <main className="pageContent__witrazeGrid">
            {witraze.map((item, index) => {
                return <section data-aos="fade-in" className="pageContent__witrazeGrid__item" key={index}>
                    <img className="pageContent__witraze__img" src={item.img} alt={item.title} />
                    <main className="pageContent__witraze__section__content">
                        <h3 className="pageContent__witraze__section__header">
                            {item.title}
                        </h3>
                        <p className="pageContent__witraze__section__desc">
                            {item.desc}
                        </p>
                    </main>
                </section>
            })}
        </main>
    </main>
}

export default WitrazeSubpageMain;
