import React from 'react'
import SectionHeader from "./SectionHeader";

import img1 from '../static/img/witraz3.png';
import img2 from '../static/img/witraz4.png';
import img3 from '../static/img/witraz2.png';

const PortfolioSection = () => {
    return <section className="section">
        <SectionHeader
            title="Portfolio"
            left={false} />

        <main className="portfolioSection">
            <figure className="portfolioItem">
                <img className="portfolioItem__img" src={img2} alt="portfolio" />
            </figure>
            <figure className="portfolioItem">
                <img className="portfolioItem__img" src={img1} alt="portfolio" />
            </figure>
            <figure className="portfolioItem">
                <img className="portfolioItem__img" src={img3} alt="portfolio" />
            </figure>
        </main>
    </section>
}

export default PortfolioSection;
