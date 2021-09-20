import React from 'react'
import cartIcon from '../static/img/modal-cart.svg'
import closeIcon from '../static/img/close.svg'

const AddToCartModal = ({hideModal}) => {
    return <aside className="addToCartModal">
        <button className="addToCartModal__close" onClick={() => {hideModal(); }}>
            <img className="addToCartModal__close__img" src={closeIcon} alt="zamknij" />
        </button>

        <img className="addToCartModal__cartIcon" src={cartIcon} alt="koszyk" />

        <h3 className="addToCartModal__header">
            Produkt został dodany do koszyka
        </h3>

        <section className="addToCartModal__buttons">
            <button className="button button--addToCartModal" onClick={() => { hideModal(); }}>
                Kontynuuj zakupy
            </button>
            <a className="button button--addToCartModal" href="/koszyk">
                Przejdź do kasy
            </a>
        </section>
    </aside>
}

export default AddToCartModal;
