import React from 'react'
import SectionHeader from "./SectionHeader";

import img1 from '../static/img/witraz6.png'
import img2 from '../static/img/witraz5.png'
import Button from "./Button";

const AboutUsSection = () => {
    return <section className="section">
        <SectionHeader
            title="O nas"
            left={true} />

        <main className="aboutUs">
            <img className="absolute aboutUs__img--1" src={img1} alt="witraze-sakralne-bednarscy" />
            <img className="absolute aboutUs__img--2" src={img2} alt="witraze-sakralne-bednarscy" />

            <article className="aboutUs__content">
                <h3 className="aboutUs__header">
                    Witraże Bednarscy
                </h3>

                <p className="aboutUs__text">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                </p>
                <p className="aboutUs__text">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
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
