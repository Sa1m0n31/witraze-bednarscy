import React from 'react'
import PanelMenu from "../components/PanelMenu";
import PanelShippingContent from "../components/PanelShippingContent";

const PanelShipping = () => {
    return <main className="panel">
        <PanelMenu active={5} />
        <PanelShippingContent />
    </main>
}

export default PanelShipping;
