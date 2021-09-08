import React from 'react'

import arrowDown from '../static/img/arrow-down.svg'

const TopMenu = () => {
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

    return <menu className="topMenu">
        <ul className="topMenu__list">
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
