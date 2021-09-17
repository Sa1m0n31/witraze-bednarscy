import React from 'react'

import img1 from '../static/img/witraz7.png'
import img2 from '../static/img/witraz3.png'
import img3 from '../static/img/witraz5.png'
import BackHome from "./BackHome";
import ShopCategories from "./ShopCategories";

const ShopMain = () => {
    const products = [
        {
            title: 'Witraż piękny',
            img: img1,
            price: 499,
            permalink: "/"
        },
        {
            title: 'Witraż piękny',
            img: img2,
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
        },
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
        },
    ]

    return <section className="shop">
        <BackHome />
        <main className="shop__main">
            <ShopCategories />

            <main className="shop__products">
                <h2 className="shop__products__header">
                    Witraże
                </h2>
                <section className="shop__products__products">
                    {products.map((item, index) => {
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
                            <button className="button button--addToCart" onClick={() => {  }}>
                                Dodaj do koszyka
                            </button>
                        </a>
                    })}
                </section>
            </main>
        </main>
    </section>
}

export default ShopMain;
