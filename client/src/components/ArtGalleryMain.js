import React from 'react'
import PageHeader from "./PageHeader";

import bigImage from '../static/img/witraz1.png'
import img1 from '../static/img/witraz2.png'
import img2 from '../static/img/witraz3.png'
import img3 from '../static/img/witraz4.png'

const ArtGalleryMain = () => {
    return <main className="pageContent">
        <PageHeader title="Galeria sztuki" />
        <main className="pageContent__artGallery">
            <img data-aos="fade-right" className="pageContent__artGallery__bigImage" src={bigImage} alt="galeria-sztuki-bednarscy" />

            <article className="pageContent__artGallery__desc">
                <h2 className="pageContent__artGallery__header" data-aos="fade-left">
                    Galeria sztuki Rypin
                </h2>
                <p data-aos="fade-left">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.
                </p>
                <p data-aos="fade-left">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                </p>

                <section className="pageContent__artGallery__images" data-aos="fade-up">
                    <img className="pageContent__artGallery__images__img" src={img1} alt="galeria-sztuki-bednarscy" />
                    <img className="pageContent__artGallery__images__img" src={img2} alt="galeria-sztuki-bednarscy" />
                    <img className="pageContent__artGallery__images__img" src={img3} alt="galeria-sztuki-bednarscy" />
                </section>
            </article>
        </main>
    </main>
}

export default ArtGalleryMain;
