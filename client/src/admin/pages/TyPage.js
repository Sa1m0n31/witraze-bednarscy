import React, { useEffect } from 'react'
import TopBar from "../../components/TopBar";
import TopBarShop from "../../components/TopBarShop";
import BackHome from "../../components/BackHome";
import Footer from "../../components/Footer";

const TyPage = () => {
    useEffect(() => {
        if(!localStorage.getItem('sec-order-complete')) {
            window.location = "/";
        }
        else {
            localStorage.removeItem('sec-order-complete');
        }
    }, []);

    return <div className="container">
        <TopBar shop={true} />
        <TopBarShop />
        <BackHome />
        <main className="ty">
            <h2 className="ty__header">
                Dziękujemy za złożenie zamówienia w naszym sklepie
            </h2>
            <h3 className="ty__subheader">
                W razie jakichkolwiek pytań, zachęcamy do kontaktu
            </h3>

            <a className="button button--ty" href="/kontakt">
                Skontaktuj się z nami
            </a>
        </main>
        <Footer />
    </div>
}

export default TyPage;
