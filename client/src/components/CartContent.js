import React, {useContext, useEffect, useState} from 'react'
import CartItem from "./CartItem";
import CartSum from "./CartSum";
import {CartContext} from "../App";

const CartContent = () => {
    const { cartContent, editCart, removeFromCart } = useContext(CartContext);

    const [sum, setSum] = useState(0);
    const [remove, setRemove] = useState(false);
    const [currentCart, setCurrentCart] = useState(cartContent);

    useEffect(() => {
        calculateCartSum();
    }, []);

    useEffect(() => {
        calculateCartSum();
        setCurrentCart(cartContent);
    }, [remove]);

    const calculateCartSum = () => {
        let sum = 0;
        currentCart.forEach((item, index, array) => {
            sum += item.price * item.amount;
            if(index === array.length-1) setSum(sum);
        });
    }

    useEffect(() => {
        calculateCartSum();
    }, [currentCart]);

    return <main className="cart">
        <h2 className="shop__products__header">
            Podsumowanie koszyka
        </h2>

        {currentCart.length ? currentCart.map((item, index) => {
            return <CartItem
                key={index}
                amount={item.amount}
                uuid={item.uuid}
                calculateCartSum={calculateCartSum}
                dedication={item.dedication}
                remove={remove}
                setRemove={setRemove}
                id={1} />
        }) : <main className="emptyCart">
            <h2 className="emptyCart__header">
                Twój koszyk jest pusty
            </h2>
            <a className="button button--emptyCart" href="/sklep">
                Wróć do sklepu
            </a>
        </main> }

        {currentCart.length ? <><CartSum sum={sum} />
        <a className="button button--addToCart" href="/podsumowanie-zamowienia">
            Przejdź dalej
        </a></> : ""}
    </main>
}

export default CartContent;
