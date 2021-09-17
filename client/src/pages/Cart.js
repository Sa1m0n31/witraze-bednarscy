import React from 'react'
import TopBar from "../components/TopBar";
import TopBarShop from "../components/TopBarShop";
import Footer from "../components/Footer";
import CartContent from "../components/CartContent";
import BackHome from "../components/BackHome";

const Cart = () => {
    return <div className="container">
        <TopBar shop={true} />
        <TopBarShop />
        <BackHome />
        <CartContent />
        <Footer />
    </div>
}

export default Cart;
