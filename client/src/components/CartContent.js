import React from 'react'
import CartItem from "./CartItem";
import CartSum from "./CartSum";

const CartContent = () => {
    return <main className="cart">
        <h2 className="shop__products__header">
            Podsumowanie koszyka
        </h2>

        <CartItem id={1} />
        <CartItem id={1} />
        <CartSum sum={500} />
        <a className="button button--addToCart" href="/podsumowanie-zamowienia">
            Przejdź dalej
        </a>
    </main>
}

export default CartContent;
