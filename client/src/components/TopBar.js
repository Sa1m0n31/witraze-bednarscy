import React, { useRef, useState } from 'react'

import logo from '../static/img/logo.png';
import shopIcon from '../static/img/shopping-cart.svg';
import fbIcon from '../static/img/facebook.svg';
import poland from '../static/img/poland.svg'
import unitedKingdom from '../static/img/united-kingdom.svg'
import arrowDown from '../static/img/arrow-down-gold.svg'

const TopBar = ({shop}) => {
    const [langHidden, setLangHidden] = useState(true);

    const secondLanguage = useRef(null);
    const arrow = useRef(null);

    const toggleLanguages = (e) => {
        e.preventDefault();
        if(langHidden) {
            showLanguages();
        }
        else {
            hideLanguages();
        }
    }

    const showLanguages = () => {
        arrow.current.style.transform = "rotateX(180deg)";
        secondLanguage.current.style.display = "flex";
        secondLanguage.current.style.opacity = "1";
        setLangHidden(false);
    }

    const hideLanguages = () => {
        arrow.current.style.transform = "none";
        secondLanguage.current.style.opacity = "0";
        setTimeout(() => {
            secondLanguage.current.style.display = "none";
        }, 500);
        setLangHidden(true);
    }

    return <aside className="topBar">
        <section className="topBar__top">
            <a className="topBar__facebookLink" href="#">
                <img className="topBar__facebookLink__img" src={fbIcon} alt="facebook" />
                Znajdź nas na Facebooku
            </a>

            <section className="topBar__language">
                <span className="d-desktop">Język</span>
                <label className="topBar__language__inner" onClick={(e) => { toggleLanguages(e); }}>
                    <img className="flag" src={poland} alt="polski" />
                    <span className="d-desktop">Polski</span>
                    <button className="languageBtn" onClick={(e) => { e.preventDefault(); }}>
                        <img ref={arrow} className="languageBtn__img" src={arrowDown} alt="wiecej" />
                    </button>
                </label>
                <a ref={secondLanguage} href="http://en.bednarscy.skylo-test3.pl"
                    className="topBar__language__inner topBar__language__inner--second">
                    <img className="flag" src={unitedKingdom} alt="angielski" />
                    <span className="d-desktop">English</span>
                </a>
            </section>
        </section>

        <section className="topBar__bottom">
            <a className="topBar__logoLink" href="/">
                <img className="topBar__logoLink__img" src={logo} alt="witraze-sakralne-bednarscy" />
            </a>

            {shop ? "" : <a className="topBar__shop d-desktop" href="/sklep">
                Odwiedź nasz sklep online
                <img className="topBar__shop__img" src={shopIcon} alt="sklep-z-witrazami" />
            </a>}
        </section>
    </aside>
}

export default TopBar;
