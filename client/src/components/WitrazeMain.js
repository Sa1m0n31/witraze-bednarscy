import React from 'react'
import PageHeader from "./PageHeader";

import witrazeSakralne from '../static/img/witraz2.png'
import witrazeKameralne from '../static/img/witraz3.png'

const WitrazeMain = () => {
    return <main className="pageContent">
        <PageHeader title="Witraże" />

        <main className="pageContent__witraze">
            <section data-aos="fade-in" className="pageContent__witraze__section">
                <img className="pageContent__witraze__img" src={witrazeSakralne} alt="witraze-sakralne" />
                <main className="pageContent__witraze__section__content">
                    <h3 className="pageContent__witraze__section__header">
                        Witraże sakralne
                    </h3>
                    <p className="pageContent__witraze__section__desc">
                        KRÓTKI OPIS, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
                    </p>
                    <a className="button button--witraze" href="/witraze/witraze-sakralne">
                        Zobacz realizacje
                    </a>
                </main>
            </section>

            <section data-aos="fade-in" className="pageContent__witraze__section">
                <img className="pageContent__witraze__img" src={witrazeKameralne} alt="witraze-kameralne" />
                <main className="pageContent__witraze__section__content">
                    <h3 className="pageContent__witraze__section__header">
                        Witraże kameralne
                    </h3>
                    <p className="pageContent__witraze__section__desc">
                        KRÓTKI OPIS, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
                    </p>
                    <a className="button button--witraze" href="/witraze/witraze-kameralne">
                        Zobacz realizacje
                    </a>
                </main>
            </section>
        </main>
    </main>
}

export default WitrazeMain;
