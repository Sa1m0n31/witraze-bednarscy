import React from 'react'
import TopBar from "../components/TopBar";
import TopBarShop from "../components/TopBarShop";
import Footer from "../components/Footer";
import ShippingAndPaymentContent from "../components/ShippingAndPaymentContent";
import BackHome from "../components/BackHome";

const ShippingAndPayment = () => {
    return <div className="container">
        <TopBar shop={true} />
        <TopBarShop />
        <BackHome />
        <ShippingAndPaymentContent />
        <Footer />
    </div>
}

export default ShippingAndPayment;
