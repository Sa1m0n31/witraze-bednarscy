import React, {useState, useEffect, useRef, useContext} from 'react'
import ShopCategories from "./ShopCategories";

import img from '../static/img/witraz2.png'

import {
    Magnifier,
    GlassMagnifier,
    SideBySideMagnifier,
    PictureInPictureMagnifier,
    MOUSE_ACTIVATION,
    TOUCH_ACTIVATION
} from "react-image-magnifiers";
import AddToCartModal from "./AddToCartModal";
import {getRecommendations} from "../admin/helpers/productFunctions";
import convertToURL, {convertToString} from "../helpers/convertToURL";
import settings from "../helpers/settings";
import {getProductByName} from "../helpers/productFunctions";
import {CartContext} from "../App";

const SingleProductMain = () => {
    let modalWrapper = useRef(null);

    const { addToCart } = useContext(CartContext);

    const [product, setProduct] = useState({});
    const [crossSells, setCrossSells] = useState([]);
    const [dedication, setDedication] = useState("");

    useEffect(() => {
        /* Get product info */
        getProductByName(convertToString(window.location.pathname.split("/")[2]))
            .then(res => {
                const result = res.data?.result;
                if(result) {
                    const productInfo = result[0];
                    console.log(productInfo);
                    setProduct(productInfo);
                    console.log(productInfo.file_path);
                }
            });

        getRecommendations()
            .then(res => {
                console.log(res.data);
                setCrossSells(res?.data?.result);
            });
    }, []);

    const addProductToCart = (e, id, title, amount, img, price) => {
        e.preventDefault();
        addToCart(id, title, amount, img, price, dedication);
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
                {product.name}

                <span className="shop__products__header__price">
                    {product.price} PLN
                </span>
            </h2>

            <main className="single__product__main">
                <figure className="single__product__main__imgWrapper">
                    <GlassMagnifier
                        imageSrc={`${settings.API_URL}/image?url=/media/${product.file_path}`}
                        largeImageSrc={`${settings.API_URL}/image?url=/media/${product.file_path}`}
                        imageAlt={product.name}
                    />
                </figure>

                <section className="single__product__main__content">
                    <article className="single__product__main__spec">
                        <h3 className="single__product__main__spec__header">
                            Specyfikacja produktu
                        </h3>

                        {product.key1 ? <h4 className="single__product__main__spec__item">
                            <span className="single__product__main__spec__key">
                                {product.key1}
                            </span>
                            <span className="single__product__main__spec__value">
                                {product.value1}
                            </span>
                        </h4> : ""}
                        {product.key2 ? <h4 className="single__product__main__spec__item">
                            <span className="single__product__main__spec__key">
                                {product.key2}
                            </span>
                            <span className="single__product__main__spec__value">
                                {product.value2}
                            </span>
                        </h4> : ""}
                        {product.key3 ? <h4 className="single__product__main__spec__item">
                            <span className="single__product__main__spec__key">
                                {product.key3}
                            </span>
                            <span className="single__product__main__spec__value">
                                {product.value3}
                            </span>
                        </h4> : ""}

                        <h3 className="single__product__main__spec__header">
                            Opis
                        </h3>
                        <div className="single__product__main__spec__desc" dangerouslySetInnerHTML={{__html: product.description}}>

                        </div>

                        <h3 className="single__product__main__spec__header">
                            Dedykacja (+50 PLN)
                        </h3>
                        <label>
                            <textarea
                                className="dedicationInput"
                                name="dedication"
                                placeholder="Tu wpisz swoją dedykację"
                                onChange={(e) => { setDedication(e.target.value); }}
                                value={dedication} />
                        </label>
                    </article>
                    <button className="button button--addToCart" onClick={(e) => { addProductToCart(e, product.id, product.name, 1, product.file_path, product.price); }}>
                        Dodaj do koszyka
                    </button>
                </section>
            </main>

            <h2 className="shop__products__header">
                Zobacz inne produkty
            </h2>
            <section className="shop__products__products">
                {crossSells.map((item, index) => {
                    return <a className="shop__products__singleProduct" key={index} href={`/produkt/${convertToURL(item.name)}`}>
                        <figure className="shop__products__singleProduct__imgWrapper">
                            <img className="shop__products__singleProduct__img" src={settings.API_URL + "/image?url=/media/" + item.file_path} alt={item.name} />
                        </figure>
                        <h3 className="shop__products__singleProduct__title">
                            {item.name}
                        </h3>
                        <h4 className="shop__products__singleProduct__price">
                            {item.price} PLN
                        </h4>
                        <button className="button button--addToCart" onClick={(e) => { addProductToCart(e, item.id, item.name, 1, item.file_path, item.price); }}>
                            Dodaj do koszyka
                        </button>
                    </a>
                })}
            </section>
        </main>
    </main>
}

export default SingleProductMain;
