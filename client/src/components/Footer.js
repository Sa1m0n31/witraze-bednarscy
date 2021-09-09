import React from 'react'

const Footer = () => {
    return <footer className="section footer">
        <section className="footer__section">
            <h4 className="footerHeader">
                Nawigacja
            </h4>
            <ul className="footer__list footer__list--flex">
                <li className="footer__list__item">
                    <a className="footer__list__item__link" href="/">
                        Strona główna
                    </a>
                </li>
                <li className="footer__list__item">
                    <a className="footer__list__item__link" href="/#technologie">
                        Technologie
                    </a>
                </li>
                <li className="footer__list__item">
                    <a className="footer__list__item__link" href="/referencje">
                        Referencje
                    </a>
                </li>
                <li className="footer__list__item">
                    <a className="footer__list__item__link" href="/galeria-sztuki">
                        Galeria sztuki
                    </a>
                </li>
                <li className="footer__list__item">
                    <a className="footer__list__item__link" href="/galeria-sztuki">
                        Konserwacja
                    </a>
                </li>
                <li className="footer__list__item">
                    <a className="footer__list__item__link" href="/galeria-sztuki">
                        O nas
                    </a>
                </li>
                <li className="footer__list__item">
                    <a className="footer__list__item__link" href="/galeria-sztuki">
                        Kontakt
                    </a>
                </li>
            </ul>
        </section>
        <section className="footer__section">
            <h4 className="footerHeader">
                Linki
            </h4>
            <ul className="footer__list">
                <li className="footer__list__item">
                    <a className="footer__list__item__link" href="/polityka-prywatnosci">
                        Polityka prywatności
                    </a>
                </li>
                <li className="footer__list__item">
                    <a className="footer__list__item__link" href="/regulamin">
                        Regulamin
                    </a>
                </li>
                <li className="footer__list__item">
                    <a className="footer__list__item__link" href="/zwroty">
                        Zwroty
                    </a>
                </li>
                <li className="footer__list__item">
                    <a className="footer__list__item__link" href="/platnosci-i-dostawa">
                        Płatność i dostawa
                    </a>
                </li>
            </ul>
        </section>
        <section className="footer__section">
            <h4 className="footerHeader">
                Sklep online
            </h4>
            <ul className="footer__list">
                <li className="footer__list__item">
                    <a className="footer__list__item__link" href="/sklep">
                        Sklep internetowy
                    </a>
                </li>
                <li className="footer__list__item">
                    <a className="footer__list__item__link" href="/sklep">
                        Witraże sakralne
                    </a>
                </li>
                <li className="footer__list__item">
                    <a className="footer__list__item__link" href="/sklep">
                        Witraże kameralne
                    </a>
                </li>
            </ul>
        </section>

        <aside className="footer__bottom">
            <h5 className="footer__bottom__header">
                &copy; { new Date().getFullYear() } Pracownia Witraży Bednarscy.
            </h5>
            <h5 className="footer__bottom__header">
                Projekt i wykonanie: <a className="footer__bottom__header__link" href="https://skylo.pl" target="_blank" rel="noreferrer">skylo.pl</a>
            </h5>
        </aside>
    </footer>
}

export default Footer;