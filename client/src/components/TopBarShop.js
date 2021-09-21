import React, {useContext} from 'react'
import shopIcon from "../static/img/shopping-cart.svg";
import {CartContext} from "../App";

const TopBarShop = () => {
    const { cartContent } = useContext(CartContext);

    return <header className="topBarShop">
        <h1 className="topBarShop__header">
            Sklep internetowy
        </h1>

        <a className="topBar__shop d-desktop topBarShop__cart" href="/koszyk">
            Twój koszyk ({cartContent.length})
            <img className="topBar__shop__img" src={shopIcon} alt="sklep-z-witrazami" />
        </a>
    </header>
}

export default TopBarShop;
