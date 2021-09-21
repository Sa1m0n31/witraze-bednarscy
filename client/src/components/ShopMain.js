import React, {useState, useEffect, useRef, useContext} from 'react'
import {CartContext} from "../App";
import BackHome from "./BackHome";
import ShopCategories from "./ShopCategories";
import AddToCartModal from "./AddToCartModal";
import {getAllProducts, getProductsByCategory} from "../helpers/productFunctions";
import settings from "../helpers/settings";
import convertToURL from "../helpers/convertToURL";
import axios from "axios";

const ShopMain = () => {
    let modalWrapper = useRef(null);

    const { addToCart } = useContext(CartContext);

    const [products, setProducts] = useState([]);
    const [currentCategory, setCurrentCategory] = useState("Witraże");

    useEffect(() => {
        /* Get current category */
        const urlPathArray = window.location.pathname.split("/");
        const categorySlug = urlPathArray[urlPathArray.length-1];
        let categoryParent;
        if(urlPathArray.length >= 4) categoryParent = urlPathArray[urlPathArray.length-2];
        axios.post(`${settings.API_URL}/category/get-category-by-slug`, { slug: categorySlug, parent: categoryParent })
            .then(res => {
                if(res.data.result[0]) {
                    /* Category page => Get products of current category */
                    setCurrentCategory(res.data.result[0]?.name);
                    getProductsByCategory(res.data.result[0]?.id)
                        .then(res => {
                            if(res?.data?.result) {
                                setProducts(res.data.result);
                            }
                        });
                }
                else {
                    /* Shop page => Get all products */
                    getAllProducts()
                        .then(res => {
                            if(res?.data?.result) {
                                setProducts(res.data.result);
                            }
                        });
                }
            });
    }, []);

    const addProductToCart = (e, id, title, amount, img, price) => {
        e.preventDefault();
        addToCart(id, title, amount, img, price);
        modalWrapper.current.style.zIndex = "10000";
        modalWrapper.current.style.opacity = "1";
    }

    const hideModal = () => {
        modalWrapper.current.style.opacity = "0";
        setTimeout(() => {
            modalWrapper.current.style.zIndex = "-1";
        }, 600);
    }

    return <section className="shop">
        <div className="modalWrapper" ref={modalWrapper}>
            <AddToCartModal hideModal={hideModal} />
        </div>

        <BackHome />
        <main className="shop__main">
            <ShopCategories />

            <main className="shop__products">
                <h2 className="shop__products__header">
                    {currentCategory}
                </h2>
                <section className="shop__products__products">
                    {products.map((item, index) => {
                        return <a className="shop__products__singleProduct" key={index} href={`/produkt/${convertToURL(item.name)}`}>
                            <figure className="shop__products__singleProduct__imgWrapper">
                                <img className="shop__products__singleProduct__img" src={settings.API_URL + "/image?url=/media/" + item.image} alt={item.name} />
                            </figure>
                            <h3 className="shop__products__singleProduct__title">
                                {item.name}
                            </h3>
                            <h4 className="shop__products__singleProduct__price">
                                {item.price} PLN
                            </h4>
                            <button className="button button--addToCart" onClick={(e) => { addProductToCart(e, item.id, item.name, 1, item.image, item.price) }}>
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
