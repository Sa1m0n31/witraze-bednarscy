import React from 'react'
import PageHeader from "./PageHeader";
import img3 from "../static/img/witraz5.png";

const ConservationMain = () => {
    return <main className="pageContent pageContent--technologies">
        <PageHeader title="Konserwacja" />

        <section className="technologies__section">
            <img data-aos="fade-right" className="technologies__section__img" src={img3} alt="technologie-tworzenia-witrazy" />

            <article data-aos="fade-left" className="aboutUs__section__content">
                <h3 className="aboutUs__section__header">
                    Nagłówek o konserwacji
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

export default ConservationMain;
