import React from 'react'
import TopBar from "../components/TopBar";
import TopMenu from "../components/TopMenu";
import Footer from "../components/Footer";
import TopBarShop from "../components/TopBarShop";
import ShopMain from "../components/ShopMain";

const Shop = () => {
    return <div className="container">
        <TopBar shop={true} />
        <TopBarShop />
        <ShopMain />
        <Footer />
    </div>
}

export default Shop;
