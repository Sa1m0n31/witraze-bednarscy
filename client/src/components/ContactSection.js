import React from 'react'
import SectionHeader from "./SectionHeader";

import home from '../static/img/home.svg';
import call from '../static/img/phone.svg';
import mail from '../static/img/mail.svg';
import clock from '../static/img/clock.svg';
import GoogleMap from "./GoogleMap";

const ContactSection = () => {
    return <section className="section">
        <SectionHeader
            title="Kontakt"
            left={true} />

        <main className="contact">
            <section className="contact__map" data-aos="fade-right" data-aos-delay="300">
                <GoogleMap />
            </section>

            <section className="contact__content" data-aos="fade-left" data-aos-delay="300">
                <h4 className="contact__header">
                    Witraże Bednarscy
                </h4>

                <section className="contact__item">
                    <img className="contact__item__icon" src={home} alt="siedziba" />
                    <h5 className="contact__item__text">Józefa Piłsudskiego 31, Rypin</h5>
                </section>
                <section className="contact__item">
                    <img className="contact__item__icon" src={clock} alt="godziny-otwarcia" />
                    <h5 className="contact__item__text">poniedziałek - piątek, 9:30 - 17:30</h5>
                </section>
                <section className="contact__item">
                    <img className="contact__item__icon" src={call} alt="nr-telefonu" />
                    <h5 className="contact__item__text">54 280 20 40</h5>
                </section>
                <section className="contact__item">
                    <img className="contact__item__icon" src={mail} alt="e-mail" />
                    <h5 className="contact__item__text">bednarscy.rypin@vp.pl</h5>
                </section>

            </section>
        </main>
    </section>
}

export default ContactSection;
