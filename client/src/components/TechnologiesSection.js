import React from 'react'
import SectionHeader from "./SectionHeader";

import img1 from '../static/img/witraz1.png';
import img2 from '../static/img/witraz8.png';
import img3 from '../static/img/witraz7.png';
import SingleTechnology from "./SingleTechnology";

const TechnologiesSection = () => {
    return <section className="section section--technologies" id="technologie">
        <SectionHeader
            title="Technologie"
            left={false} />

        <main className="technologies">
            <img data-aos="fade-right" className="absolute img--technologies1" src={img1} alt="technologie-tworzenia-witrazy" />
            <img data-aos="fade-left" className="absolute img--technologies2" src={img2} alt="technologie-tworzenia-witrazy" />
            <img data-aos="fade-right" className="absolute img--technologies3" src={img3} alt="technologie-tworzenia-witrazy" />

            <h3 data-aos="fade-down" className="aboutUs__header aboutUs__header--technologies">
                Jakich technologii używamy do tworzenia witraży?
            </h3>

            <SingleTechnology
                number="01"
                name="Nazwa technologii"
                desc="KRÓTKI OPIS, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam."
                extraClass="technology--1"
                link="#" />
            <SingleTechnology
                number="02"
                name="Kolejna technologia"
                desc="KRÓTKI OPIS, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam."
                extraClass="technology--2"
                link="#" />
            <SingleTechnology
                number="03"
                name="Następna technologia"
                desc="KRÓTKI OPIS, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam."
                extraClass="technology--3"
                link="#" />
        </main>
    </section>
}

export default TechnologiesSection;
