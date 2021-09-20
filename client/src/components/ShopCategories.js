import React, {useState, useEffect} from 'react'
import {getAllCategories} from "../helpers/categoryFunctions";

const ShopCategories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getAllCategories()
            .then(res => {
                setCategories(res?.data?.result);
            })
    }, []);

    return <menu className="shop__categories">
        <h3 className="shop__categories__header">
            Witraże
        </h3>
        <ul className="shop__categories__list">
            {categories?.map((item) => {
                return <li className="shop__categories__list__item">
                    <a className="shop__categories__list__item__link" href={`/sklep/${item.permalink}`}>
                        {item.name}
                    </a>
                </li>
            })}
        </ul>
    </menu>
}

export default ShopCategories;
