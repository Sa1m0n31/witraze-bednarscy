import React from 'react'
import shopIcon from "../static/img/shopping-cart.svg";

const TopBarShop = () => {
    return <header className="topBarShop">
        <h1 className="topBarShop__header">
            Sklep internetowy
        </h1>

        <a className="topBar__shop d-desktop topBarShop__cart" href="/koszyk">
            Twój koszyk (0)
            <img className="topBar__shop__img" src={shopIcon} alt="sklep-z-witrazami" />
        </a>
    </header>
}

export default TopBarShop;
