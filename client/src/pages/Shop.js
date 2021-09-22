import React from 'react'
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";
import TopBarShop from "../components/TopBarShop";
import ShopMain from "../components/ShopMain";
import TopMenuShopMobile from "../admin/components/TopMenuShopMobile";

const Shop = () => {
    return <div className="container">
        <TopBar shop={true} />
        <TopBarShop />
        <TopMenuShopMobile />
        <ShopMain />
        <Footer />
    </div>
}

export default Shop;
