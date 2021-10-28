import React from 'react'
import SectionHeader from "./SectionHeader";

import img1 from '../static/img/witraz6.png'
import img2 from '../static/img/witraz5.png'
import Button from "./Button";

const AboutUsSection = () => {
    return <section className="section section--aboutUs">
        <SectionHeader
            title="O nas"
            left={true} />

        <main className="aboutUs">
            <img data-aos="fade-right" className="absolute aboutUs__img--1" src={img1} alt="witraze-sakralne-bednarscy" />
            <img data-aos="fade-left" className="absolute aboutUs__img--2" src={img2} alt="witraze-sakralne-bednarscy" />

            <article className="aboutUs__content" data-aos="zoom-in-down">
                <h3 className="aboutUs__header">
                    Szanowni Państwo,
                </h3>

                <p className="aboutUs__text">
                    Potrzeba obcowania ze sztuką jest w każdym z nas. Często tłamszona przez natłok pracy,
                    piętrzące się obowiązki wydawać się może wartością zbyteczną… Nie da oszukać się tej
                    wrażliwości:  oczu nie sposób zasłonić gdy coś je zachwyci, a łzy zatrzymać, gdy wzruszy
                    piękno.
                </p>

                <Button
                    text="Dowiedz się więcej"
                    extraClass="button--aboutUs"
                    link="/o-nas" />
            </article>
        </main>
    </section>
}

export default AboutUsSection;
