import React from 'react'
import PageHeader from "./PageHeader";

import img1 from '../static/img/witraz7.png';
import img2 from '../static/img/witraz6.png';
import img3 from '../static/img/witraz5.png';

const TechnologiesMain = () => {
    return <main className="pageContent pageContent--technologies">
        <PageHeader title="Technologie" />

        <section className="technologies__section">
            <img data-aos="fade-right" className="technologies__section__img" src={img1} alt="technologie-tworzenia-witrazy" />

                <article className="aboutUs__section__content" data-aos="fade-left">
                    <h3 className="aboutUs__section__header">
                        Technika Tiffany'ego
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                    </p>
                </article>
        </section>

        <section className="technologies__section technologies__section--revert">
                <article data-aos="fade-right" className="aboutUs__section__content aboutUs__section__content--marginRight">
                    <h3 className="aboutUs__section__header">
                        Metoda angielska
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                    </p>
                </article>

            <img data-aos="fade-left" className="technologies__section__img" src={img2} alt="technologie-tworzenia-witrazy" />

        </section>

        <section className="technologies__section">
            <img data-aos="fade-right" className="technologies__section__img" src={img3} alt="technologie-tworzenia-witrazy" />

                <article data-aos="fade-left" className="aboutUs__section__content">
                    <h3 className="aboutUs__section__header">
                        Techniki mieszane
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                    </p>
                </article>
        </section>
    </main>
}

export default TechnologiesMain;
