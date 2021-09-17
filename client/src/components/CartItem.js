import React, { useEffect, useState } from 'react'
import img from '../static/img/witraz5.png'
import trashIcon from '../static/img/trash.svg'
import smallArrow from '../static/img/small-arrow.svg'

const CartItem = ({id}) => {
    useEffect(() => {
        /* Get product by id */
    }, []);

    const removeCartItem = (n) => {

    }

    return <section className="cart__item">
        <figure className="cart__item__imgWrapper">
            <img className="cart__item__img" src={img} alt="das" />
        </figure>

        <section className="cart__item__mobileRow">
            <section className="cart__item__prop">
                <span className='cart__item__key'>Nazwa produktu</span>
                <span className='cart__item__value'>Super witraż</span>
            </section>

            <section className="cart__item__prop">
                <span className='cart__item__key'>Dedykacja</span>
                <span className='cart__item__value'>Dla Szymona</span>
            </section>
        </section>

        <section className="cart__item__mobileRow">
            <section className="cart__item__prop">
                <span className='cart__item__key'>Ilość</span>
                <span className='cart__item__value cart__item__value--input'>
                <input value={1}
                       onChange={(e) => {  }}
                       type="number" />
                <section className="cart__item__input__buttons">
                    <button className="cart__item__input__btn">
                        <img className="cart__item__input__btn__img" src={smallArrow} alt="wiecej" />
                    </button>
                    <button className="cart__item__input__btn">
                        <img className="cart__item__input__btn__img" src={smallArrow} alt="mniej" />
                    </button>
                </section>
            </span>
            </section>

            <section className="cart__item__prop">
                <span className='cart__item__key'>Wartość</span>
                <span className='cart__item__value cart__item__value--price'>500 PLN</span>
            </section>
        </section>

        <section className="cart__item__prop">
            <span className='cart__item__key'>Usuń z koszyka</span>
            <button className='cart__item__value cart__item__value--trash' onClick={() => { removeCartItem(1); }}>
                <img className="cart__item__value__trash" src={trashIcon} alt="usun" />
            </button>
        </section>
    </section>
}

export default CartItem;
