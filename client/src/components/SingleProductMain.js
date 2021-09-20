import React, { useState, useEffect, useRef } from 'react'
import ShopCategories from "./ShopCategories";

import img from '../static/img/witraz2.png'
import img2 from "../static/img/witraz3.png";
import img1 from "../static/img/witraz7.png";
import img3 from "../static/img/witraz5.png";
import searchIcon from '../static/img/search_small_plus.svg'

import {
    Magnifier,
    GlassMagnifier,
    SideBySideMagnifier,
    PictureInPictureMagnifier,
    MOUSE_ACTIVATION,
    TOUCH_ACTIVATION
} from "react-image-magnifiers";
import AddToCartModal from "./AddToCartModal";

const SingleProductMain = () => {
    let modalWrapper = useRef(null);

    const product = {
        title: "Witraż piękny",
        price: 100,
        img: img,
        desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et",
        width: 123,
        height: 200
    }

    const crossSells = [
        {
            title: 'Witraż piękny',
            img: img2,
            price: 499,
            permalink: "/"
        },
        {
            title: 'Witraż piękny',
            img: img1,
            price: 499,
            permalink: "/"
        },
        {
            title: 'Witraż piękny',
            img: img3,
            price: 499,
            permalink: "/"
        },
        {
            title: 'Witraż piękny',
            img: img1,
            price: 499,
            permalink: "/"
        }
    ]

    const addToCart = (e) => {
        e.preventDefault();
        modalWrapper.current.style.zIndex = "10000";
        modalWrapper.current.style.opacity = "1";
    }

    const hideModal = () => {
        modalWrapper.current.style.opacity = "0";
        setTimeout(() => {
            modalWrapper.current.style.zIndex = "-1";
        }, 600);
    }

    return <main className="single">
        <div className="modalWrapper" ref={modalWrapper}>
            <AddToCartModal hideModal={hideModal} />
        </div>

        <ShopCategories />

        <main className="single__product">
            <h2 className="shop__products__header">
                {product.title}

                <span className="shop__products__header__price">
                    {product.price} PLN
                </span>
            </h2>

            <main className="single__product__main">
                <figure className="single__product__main__imgWrapper">
                    <GlassMagnifier
                        imageSrc={product.img}
                        largeImageSrc={product.img}
                        imageAlt="Example"
                    />
                </figure>

                <section className="single__product__main__content">
                    <article className="single__product__main__spec">
                        <h3 className="single__product__main__spec__header">
                            Specyfikacja produktu
                        </h3>

                        <h4 className="single__product__main__spec__item">
                            <span className="single__product__main__spec__key">
                                Nazwa produktu
                            </span>
                            <span className="single__product__main__spec__value">
                                {product.title}
                            </span>
                        </h4>
                        <h4 className="single__product__main__spec__item">
                            <span className="single__product__main__spec__key">
                                Szerokość
                            </span>
                            <span className="single__product__main__spec__value">
                                {product.width}
                            </span>
                        </h4>
                        <h4 className="single__product__main__spec__item">
                            <span className="single__product__main__spec__key">
                                Wysokość
                            </span>
                            <span className="single__product__main__spec__value">
                                {product.height}
                            </span>
                        </h4>

                        <h3 className="single__product__main__spec__header">
                            Opis
                        </h3>
                        <p className="single__product__main__spec__desc">
                            {product.desc}
                        </p>
                    </article>
                    <button className="button button--addToCart" onClick={(e) => { addToCart(e); }}>
                        Dodaj do koszyka
                    </button>
                </section>
            </main>

            <h2 className="shop__products__header">
                Zobacz inne produkty
            </h2>
            <section className="shop__products__products">
                {crossSells.map((item, index) => {
                    return <a className="shop__products__singleProduct" key={index} href={`/produkt/${item.permalink}`}>
                        <figure className="shop__products__singleProduct__imgWrapper">
                            <img className="shop__products__singleProduct__img" src={item.img} alt={item.title} />
                        </figure>
                        <h3 className="shop__products__singleProduct__title">
                            {item.title}
                        </h3>
                        <h4 className="shop__products__singleProduct__price">
                            {item.price} PLN
                        </h4>
                        <button className="button button--addToCart" onClick={(e) => { addToCart(e); }}>
                            Dodaj do koszyka
                        </button>
                    </a>
                })}
            </section>
        </main>
    </main>
}

export default SingleProductMain;
