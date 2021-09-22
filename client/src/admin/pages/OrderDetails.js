import React from 'react'

import PanelMenu from "../components/PanelMenu";
import OrderDetailsContent from "../components/OrderDetailsContent";

const OrderDetails = () => {
    return <div className="orderDetails">
        <PanelMenu active={3} />
        <OrderDetailsContent />
    </div>
}

export default OrderDetails;
