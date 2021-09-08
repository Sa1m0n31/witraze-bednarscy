import React from 'react'

import logo from '../static/img/logo.png';
import shopIcon from '../static/img/shopping-cart.svg';
import fbIcon from '../static/img/facebook.svg';
import poland from '../static/img/poland.svg'
import arrowDown from '../static/img/arrow-down-gold.svg'

const TopBar = () => {
    const showLanguages = () => {

    }

    return <aside className="topBar">
        <section className="topBar__top">
            <a className="topBar__facebookLink" href="#">
                <img className="topBar__facebookLink__img" src={fbIcon} alt="facebook" />
                Znajdź nas na Facebooku
            </a>

            <section className="topBar__language">
                Język
                <h4 className="topBar__language__inner">
                    <img className="flag" src={poland} alt="polski" />
                    Polski
                    <button className="languageBtn" onClick={() => { showLanguages(); }}>
                        <img className="languageBtn__img" src={arrowDown} alt="wiecej" />
                    </button>
                </h4>

            </section>
        </section>

        <section className="topBar__bottom">
            <a className="topBar__logoLink" href="/">
                <img className="topBar__logoLink__img" src={logo} alt="witraze-sakralne-bednarscy" />
            </a>

            <a className="topBar__shop" href="/sklep">
                Odwiedź nasz sklep online
                <img className="topBar__shop__img" src={shopIcon} alt="sklep-z-witrazami" />
            </a>

        </section>
    </aside>
}

export default TopBar;
