import React, {useContext, useEffect, useState} from 'react'
import img from '../static/img/witraz5.png'
import trashIcon from '../static/img/trash.svg'
import smallArrow from '../static/img/small-arrow.svg'
import {getProductDetails} from "../admin/helpers/productFunctions";
import {CartContext} from "../App";
import settings from "../helpers/settings";

const CartItem = ({id, uuid, amount, remove, setRemove, dedication}) => {
    const [product, setProduct] = useState({});

    const { editCart, removeFromCart } = useContext(CartContext);

    useEffect(() => {
        /* Get product by id */
        getProductDetails(id)
            .then(res => {
                const result = res?.data?.result[0];
                if(result) {
                    setProduct({
                        id,
                        amount,
                        name: result.name,
                        price: result.price,
                        img: result.file_path
                    });
                }
            })
    }, []);

    const removeCartItem = (n) => {
        setRemove(!remove);
        removeFromCart(n);
    }

    const changeAmountInCart = (value, uuid) => {
        if(value < 1) {
            return 0;
        }

        editCart(uuid, product.id, product.name, parseInt(value), product.img, product.price, dedication);
        setRemove(!remove);
    }

    return <section className="cart__item">
        <figure className="cart__item__imgWrapper">
            <img className="cart__item__img" src={`${settings.API_URL}/image?url=/media/${product?.img}`} alt={product?.name} />
        </figure>

        <section className="cart__item__mobileRow">
            <section className="cart__item__prop">
                <span className='cart__item__key'>Nazwa produktu</span>
                <span className='cart__item__value'>{product?.name}</span>
            </section>

            <section className="cart__item__prop">
                <span className='cart__item__key'>Dedykacja</span>
                <span className='cart__item__value'>{dedication ? dedication : "BRAK"}</span>
            </section>
        </section>

        <section className="cart__item__mobileRow">
            <section className="cart__item__prop">
                <span className='cart__item__key'>Ilość</span>
                <span className='cart__item__value cart__item__value--input'>
                <input value={amount}
                       min={1}
                       onChange={(e) => {  }}
                       type="number" />
                <section className="cart__item__input__buttons">
                    <button className="cart__item__input__btn" onClick={(e) => { changeAmountInCart(amount+1, uuid); }}>
                        <img className="cart__item__input__btn__img" src={smallArrow} alt="wiecej" />
                    </button>
                    <button className="cart__item__input__btn" onClick={(e) => { changeAmountInCart(amount-1, uuid); }}>
                        <img className="cart__item__input__btn__img" src={smallArrow} alt="mniej" />
                    </button>
                </section>
            </span>
            </section>

            <section className="cart__item__prop">
                <span className='cart__item__key'>Wartość</span>
                <span className='cart__item__value cart__item__value--price'>{product.price * amount} PLN</span>
            </section>
        </section>

        <section className="cart__item__prop">
            <span className='cart__item__key'>Usuń z koszyka</span>
            <button className='cart__item__value cart__item__value--trash' onClick={() => { removeCartItem(uuid); }}>
                <img className="cart__item__value__trash" src={trashIcon} alt="usun" />
            </button>
        </section>
    </section>
}

export default CartItem;
