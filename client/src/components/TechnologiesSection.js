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
                name="Technika Tiffany'ego"
                desc="Większość naszych witraży tworzymy techniką Tiffany'ego"
                extraClass="technology--1"
                link="/technologie" />
            <SingleTechnology
                number="02"
                name="Metoda angielska"
                desc="W niektórych projektach stosujemy również metodę angielską"
                extraClass="technology--2"
                link="/technologie" />
            <SingleTechnology
                number="03"
                name="Techniki mieszane"
                desc="Wiele naszych witraży powstaje za pomocą technik mieszanych"
                extraClass="technology--3"
                link="/technologie" />
        </main>
    </section>
}

export default TechnologiesSection;
