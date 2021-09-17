import React from 'react'
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";
import SingleProductMain from "../components/SingleProductMain";
import BackHome from "../components/BackHome";
import TopBarShop from "../components/TopBarShop";

const SingleProduct = () => {
    return <div className="container">
        <TopBar shop={true} />
        <TopBarShop />
        <BackHome />
        <SingleProductMain />
        <Footer />
    </div>
}

export default SingleProduct;
