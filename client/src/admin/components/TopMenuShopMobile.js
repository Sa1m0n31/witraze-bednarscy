import React, {useContext, useRef} from 'react'
import shopIcon from "../../static/img/shopping-cart.svg";
import {CartContext} from "../../App";
import cartIcon from "../../static/img/shopping-cart.svg";
import menuIcon from "../../static/img/menu-icon.svg";
import closeIcon from "../../static/img/close.svg";

const TopMenuShopMobile = () => {
    const { cartContent } = useContext(CartContext);

    const mobileMenu = useRef(null);
    const mobileMenuList = useRef(null);
    const mobileMenuClose = useRef(null);

    const showMenu = () => {
        mobileMenu.current.style.transform = "none";
        setTimeout(() => {
            mobileMenuList.current.style.opacity = "1";
            mobileMenuClose.current.style.opacity = "1";
        }, 500);
    }

    const hideMenu = () => {
        mobileMenuList.current.style.opacity = "0";
        mobileMenuClose.current.style.opacity = "0";
        setTimeout(() => {
            mobileMenu.current.style.transform = "scaleX(0)";
        }, 350);
    }

    return <section className="topMenuShopMobile d-900 d-900-flex">
        {/* MENU MOBILE */}
        <section className="topMenu__mobile d-900 d-900-flex">
            <a className="topMenu__mobile__item" href="/koszyk">
                <img className="topMenu__mobile__icon" src={cartIcon} alt="koszyk" />
                Twój koszyk ({cartContent.length})
            </a>

            <button className="topMenu__mobile__item" onClick={() => { showMenu(); }}>
                Menu
                <img className="topMenu__mobile__icon" src={menuIcon} alt="menu" />
            </button>
        </section>

        <menu className="mobileMenu d-mobile" ref={mobileMenu}>
            <button className="mobileMenu__close" onClick={() => { hideMenu(); }} ref={mobileMenuClose}>
                <img className="mobileMenu__close__img" src={closeIcon} alt="zamknij" />
            </button>

            <ul className="mobileMenu__list" ref={mobileMenuList}>
                <li className="mobileMenu__list__item">
                    <a className="mobileMenu__list__link" href='/'>
                        Strona główna
                    </a>
                </li>
                <li className="mobileMenu__list__item">
                    <a className="mobileMenu__list__link" href='/'>
                        Witraże sakralne
                    </a>
                </li>
                <li className="mobileMenu__list__item">
                    <a className="mobileMenu__list__link" href='#'>
                        Witraże kameralne
                    </a>
                </li>
                <li className="mobileMenu__list__item">
                    <a className="mobileMenu__list__link" href='#'>
                        Technologie
                    </a>
                </li>
                <li className="mobileMenu__list__item">
                    <a className="mobileMenu__list__link" href='#'>
                        Referencje
                    </a>
                </li>
                <li className="mobileMenu__list__item">
                    <a className="mobileMenu__list__link" href='#'>
                        O nas
                    </a>
                </li>
                <li className="mobileMenu__list__item">
                    <a className="mobileMenu__list__link" href='#'>
                        Kontakt
                    </a>
                </li>
            </ul>
        </menu>
    </section>
}

export default TopMenuShopMobile;
