import React from 'react'
import SectionHeader from "./SectionHeader";

import img1 from '../static/img/witraz3.png';
import img2 from '../static/img/witraz4.png';
import img3 from '../static/img/witraz2.png';
import Button from "./Button";

const PortfolioSection = () => {
    return <section className="section section--portfolio">
        <SectionHeader
            title="Portfolio"
            left={false} />

        <main className="portfolioSection">
            <figure className="portfolioItem" data-aos="zoom-in" data-aos-delay="0">
                <img className="portfolioItem__img" src={img2} alt="portfolio" />
            </figure>
            <figure className="portfolioItem" data-aos="zoom-in" data-aos-delay="500">
                <img className="portfolioItem__img" src={img1} alt="portfolio" />
            </figure>
            <figure className="portfolioItem d-desktop" data-aos="zoom-in" data-aos-dalay="1000">
                <img className="portfolioItem__img" src={img3} alt="portfolio" />
            </figure>
        </main>

        <Button
            text="Zobacz wszystkie stworzone witraże"
            link="/portfolio"
            extraClass="button--process button--portfolio" />
    </section>
}

export default PortfolioSection;
