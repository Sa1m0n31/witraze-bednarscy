import React from 'react'

const ShopCategories = () => {
    return <menu className="shop__categories">
        <h3 className="shop__categories__header">
            Witraże
        </h3>
        <ul className="shop__categories__list">
            <li className="shop__categories__list__item">
                <a className="shop__categories__list__item__link" href="/">
                    Witraże kameralne
                </a>
            </li>
            <li className="shop__categories__list__item">
                <a className="shop__categories__list__item__link" href="/">
                    Anioły
                </a>
            </li>
            <li className="shop__categories__list__item">
                <a className="shop__categories__list__item__link" href="/">
                    Zegary
                </a>
            </li>
            <li className="shop__categories__list__item">
                <a className="shop__categories__list__item__link" href="/">
                    Lampy
                </a>
            </li>
        </ul>
    </menu>
}

export default ShopCategories;
