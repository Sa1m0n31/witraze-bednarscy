import React from 'react'

const CartSum = ({sum}) => {
    return <h3 className="cart__sum">
        Podsumowanie:
        <span className="cart__sum__price">
            {sum} PLN
        </span>
    </h3>
}

export default CartSum;
