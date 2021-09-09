import React, { useRef } from 'react'

import arrowDown from '../static/img/arrow-down.svg'
import menuIcon from '../static/img/menu-icon.svg'
import cartIcon from '../static/img/shopping-cart.svg'
import closeIcon from '../static/img/close.svg'

const TopMenu = () => {
    const mobileMenu = useRef(null);
    const mobileMenuList = useRef(null);

    const menuItems = [
        {
            name: "Strona główna",
            permalink: "/"
        },
        {
            name: "Witraże",
            permalink: "/",
            submenu: [
                {
                    name: "Witraże sakralne",
                    permalink: "/"
                },
                {
                    name: "Witraże kameralne",
                    permalink: "/"
                }
            ]
        },
        {
            name: "Technologie",
            permalink: "/"
        },
        {
            name: "Referencje",
            permalink: "/"
        },
        {
            name: "Galeria sztuki",
            permalink: "/"
        },
        {
            name: "Konserwacja",
            permalink: "/"
        },
        {
            name: "O nas",
            permalink: "/"
        },
        {
            name: "Kontakt",
            permalink: "/"
        },
    ]

    const showMenu = () => {
        mobileMenu.current.style.transform = "none";
        setTimeout(() => {
            mobileMenuList.current.style.opacity = "1";
        }, 500);
    }

    const hideMenu = () => {
        mobileMenuList.current.style.opacity = "0";
        setTimeout(() => {
            mobileMenu.current.style.transform = "scaleX(0)";
        }, 350);
    }

    return <menu className="topMenu">
        {/* MENU MOBILE */}
        <section className="topMenu__mobile d-mobile">
            <a className="topMenu__mobile__item" href="/sklep">
                <img className="topMenu__mobile__icon" src={cartIcon} alt="koszyk" />
                Sklep online
            </a>

            <button className="topMenu__mobile__item" onClick={() => { showMenu(); }}>
                Menu
                <img className="topMenu__mobile__icon" src={menuIcon} alt="menu" />
            </button>
        </section>

        <menu className="mobileMenu d-mobile" ref={mobileMenu}>
            <button className="mobileMenu__close" onClick={() => { hideMenu(); }}>
                <img className="mobileMenu__close__img" src={closeIcon} alt="zamknij" />
            </button>

            <ul className="mobileMenu__list" ref={mobileMenuList}>
                <li className="mobileMenu__list__item">
                    <a className="mobileMenu__list__link" href='#'>
                        Strona główna
                    </a>
                </li>
                <li className="mobileMenu__list__item">
                    <a className="mobileMenu__list__link" href='#'>
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

        {/* MENU DESKTOP */}
        <ul className="topMenu__list d-desktop">
            {menuItems.map((item) => {
                return <li className="topMenu__item">
                    <a className="topMenu__link" href={item.permalink}>
                        {item.name}
                        {item.submenu ? <img className="dropdownMenuIcon" src={arrowDown} alt="rozwin" /> : "" }
                        {item.submenu ? <ul className="topMenu__submenu">{item?.submenu?.map((itemChild) => {
                            return <li className="topMenu__submenu__item">
                                    <a className="topMenu__submenu__link" href={itemChild.permalink}>
                                        {itemChild.name}
                                    </a>
                                </li>
                        })}</ul> : ""}
                    </a>
                </li>
            })}
        </ul>
    </menu>
}

export default TopMenu;
