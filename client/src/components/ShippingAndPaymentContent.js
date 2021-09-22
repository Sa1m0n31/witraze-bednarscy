import React, {useState, useEffect, useRef, useContext} from 'react'
import * as Yup from "yup";
import {useFormik} from "formik";
import {getAllShippingMethods} from "../admin/helpers/shippingFunctions";
import {CartContext} from "../App";
import axios from "axios";
import settings from "../admin/helpers/settings";
import { v4 as uuidv4 } from 'uuid';

const ShippingAndPaymentContent = () => {
    const { cartContent, editCart, removeFromCart } = useContext(CartContext);

    const [vat, setVat] = useState(false);
    const [shipping, setShipping] = useState(-1);
    const [payment, setPayment] = useState(-1);
    const [shippingMethods, setShippingMethods] = useState([]);
    const [sum, setSum] = useState(0);
    const [deliveryPrice, setDeliveryPrice] = useState(0);
    const [checkbox, setCheckbox] = useState(false);
    const [error, setError] = useState("");

    let vatSection = useRef(null);

    const calculateCartSum = () => {
        let sum = 0;
        cartContent.forEach((item, index, array) => {
            sum += item.price * item.amount;

            /* Add price for dedication */
            if(item.dedication) {
                sum += 50;
            }

            if(index === array.length-1) setSum(sum);
        });
    }

    useEffect(() => {
        calculateCartSum();

        getAllShippingMethods()
            .then(res => {
                setShippingMethods(res?.data?.shippingMethods);
            });
    }, []);

    useEffect(() => {
        if(shippingMethods.length >= shipping) {
            if(shippingMethods[shipping-1]?.price) {
                setDeliveryPrice(shippingMethods[shipping - 1]?.price);
            }
            else {
                setDeliveryPrice(0);
            }
        }
    }, [shipping]);

    useEffect(() => {
        if(vat) {
            vatSection.current.style.display = "block";
        }
        else {
            vatSection.current.style.display = "none";
        }
    }, [vat]);

    const validationSchema = Yup.object({
        email: Yup.string()
            .email("Podaj poprawny adres email")
            .required("Wpisz swój adres email"),
        firstName: Yup.string()
            .required("Wpisz swoje imię"),
        lastName: Yup.string()
            .required("Wpisz swoje nazwisko"),
        phoneNumber: Yup.string()
            .matches(/\d{3,}/, 'Numer telefonu może zawierać wyłącznie cyfry')
            .required("Wpisz swój numer telefonu"),
        postalCode: Yup.string()
            .matches(/\d{2}-\d{3}/, "Podaj poprawny kod pocztowy")
            .required("Wpisz swój kod pocztowy"),
        city: Yup.string()
            .required("Wpisz swoją miejscowość"),
        street: Yup.string()
            .required("Wpisz swoją ulicę"),
        building: Yup.string()
            .required("Wpisz numer budynku")
    });

    const formik = useFormik({
        initialValues: {
            email: "",
            firstName: "",
            lastName: "",
            phoneNumber: "",
            postalCode: "",
            city: "",
            street: "",
            building: "",
            flat: "",
            comment: "",
            companyName: "",
            nip: ""
        },
        validationSchema,
        enableReinitialize: true,
        onSubmit: (values) => {
            if((shipping !== -1)&&(payment !== -1)) {
                const sessionId = uuidv4();

                /* Add user */
                axios.post(`${settings.API_URL}/auth/add-user`, {
                    firstName: formik.values.firstName,
                    lastName: formik.values.lastName,
                    email: formik.values.email,
                    phoneNumber: formik.values.phoneNumber
                })
                    .then(res => {
                       addOrder(res, sessionId);
                    });
            }
            else if(shipping === -1) {
                setError("Wybierz metodę wysyłki");
            }
            else {
                setError("Wybierz metodę płatności");
            }
        }});

    const addOrder = (res, sessionId) => {
        let insertedUserId = null;

        if(res) insertedUserId = res.data.userId;

        if(checkbox) {
            /* Add order */
            axios.post(`${settings.API_URL}/order/add`, {
                paymentMethod: payment,
                shippingMethod: shipping,
                city: formik.values.city,
                street: formik.values.street,
                building: formik.values.building,
                flat: formik.values.flat,
                postalCode: formik.values.postalCode,
                user: insertedUserId,
                comment: formik.values.comment,
                sessionId,
                companyName: formik.values.companyName,
                nip: formik.values.nip,
                amount: sum + deliveryPrice
            })
                .then(res => {
                    const orderId = res.data.result;

                    if(orderId) {
                        /* Add sells */
                        const cart = JSON.parse(localStorage.getItem('sec-cart'));
                        cart?.forEach((item, cartIndex) => {
                            /* Add sells */
                            axios.post(`${settings.API_URL}/order/add-sell`, {
                                orderId,
                                productId: item.id,
                                size: item.size,
                                quantity: item.amount,
                                paymentMethod: payment,
                                dedication: item.dedication
                            })
                                .then(res => { console.log(res.data) })
                        });

                        if(payment === 3) {
                            /* Platnosc za pobraniem */
                            localStorage.setItem('sec-order-complete', 'true');
                            window.location = "/dziekujemy";

                            /* Remove cart from local storage */
                            localStorage.removeItem('sec-cart');
                        }
                        else {
                            /* PAYMENT PROCESS */
                            localStorage.setItem('sec-order-complete', 'true');
                            let paymentUri = "https://sandbox.przelewy24.pl/trnRequest/";

                            axios.post(`${settings.API_URL}/payment/payment`, {
                                sessionId,
                                email: formik.values.email,
                                amount: sum + deliveryPrice
                            })
                                .then(res => {
                                    /* Remove cart from local storage */
                                    localStorage.removeItem('sec-cart');

                                    const token = res.data.result;
                                    window.location.href = `${paymentUri}${token}`;
                                });
                        }
                    }
                    else {
                        window.location = "/";
                    }
                });
        }
        else {
            setError("Zaakceptuj regulamin oraz politykę prywatności");
        }
    }

    return <main className="shippingAndPayment">
        <h2 className="shop__products__header">
            Formularz zamówienia
        </h2>

        <section className="shippingAndPayment__form">
            <section className="shippingAndPayment__form__section">
                <h3 className="shippingAndPayment__smallHeader">
                    Dane osobowe
                </h3>

                <form className="shippingAndPayment__dataForm" onSubmit={formik.handleSubmit}>
                    <span className="row">
                        <label className="label--name">
                            <input className={formik.touched.firstName && formik.errors.firstName ? "input input--error" : "input"}
                               name="firstName"
                               value={formik.values.firstName}
                               onChange={formik.handleChange}
                               placeholder="Imię *" />
                         </label>
                         <label className="label--surname">
                            <input className={formik.touched.firstName && formik.errors.firstName ? "input input--surname input--error" : "input input--surname"}
                                   name="lastName"
                                   value={formik.values.lastName}
                                   onChange={formik.handleChange}
                                   placeholder="Nazwisko *" />
                         </label>
                    </span>

                    <label>
                        <input className={formik.touched.email && formik.errors.email ? "input input--error" : "input"}
                               name="email"
                               value={formik.values.email}
                               onChange={formik.handleChange}
                               placeholder="E-mail *" />
                    </label>

                    <label>
                        <input className={formik.touched.phoneNumber && formik.errors.phoneNumber ? "input input--error" : "input"}
                               name="phoneNumber"
                               value={formik.values.phoneNumber}
                               onChange={formik.handleChange}
                               placeholder="Numer telefonu *" />
                    </label>

                    <span className="row">
                        <label className="label--postalCode">
                            <input className={formik.touched.postalCode && formik.errors.postalCode ? "input input--error" : "input"}
                                   name="postalCode"
                                   value={formik.values.postalCode}
                                   onChange={formik.handleChange}
                                   placeholder="Kod pocztowy *" />
                         </label>
                         <label className="label--city">
                            <input className={formik.touched.city && formik.errors.city ? "input input--surname input--error" : "input input--surname"}
                                   name="city"
                                   value={formik.values.city}
                                   onChange={formik.handleChange}
                                   placeholder="Miejscowość *" />
                         </label>
                    </span>

                    <span className="row">
                        <label className="label--street">
                            <input className={formik.touched.street && formik.errors.street ? "input input--error" : "input"}
                                   name="street"
                                   value={formik.values.street}
                                   onChange={formik.handleChange}
                                   placeholder="Ulica *" />
                         </label>
                         <label className="label--building">
                            <input className={formik.touched.building && formik.errors.building ? "input input--surname input--error" : "input input--surname"}
                                   name="building"
                                   value={formik.values.building}
                                   onChange={formik.handleChange}
                                   placeholder="Nr budynku *" />
                         </label>
                         <label className="label--flat">
                            <input className="input"
                                   name="flat"
                                   value={formik.values.flat}
                                   onChange={formik.handleChange}
                                   placeholder="Nr mieszkania" />
                         </label>
                    </span>

                    <label className="label--textarea">
                        <textarea name="comment"
                                  className="input input--textarea"
                                  value={formik.values.comment}
                                  onChange={formik.handleChange}
                                  placeholder="Komentarz do zamówienia" />
                    </label>

                    <label className="label--button">
                        <button type="button" className="button--check" onClick={() => { setVat(!vat); }}>
                            {vat ? <span className="button--checked"></span> : "" }
                        </button>
                        Chcę fakturę VAT
                    </label>

                    <section className="vatSection" ref={vatSection}>
                        <label>
                            <input className="input"
                                   name="companyName"
                                   value={formik.values.companyName}
                                   onChange={formik.handleChange}
                                   placeholder="Nazwa firmy" />
                        </label>
                        <label>
                            <input className="input"
                                   name="nip"
                                   value={formik.values.nip}
                                   onChange={formik.handleChange}
                                   placeholder="NIP" />
                        </label>
                    </section>
                </form>
            </section>

            <section className="shippingAndPayment__form__section">
                <h3 className="shippingAndPayment__smallHeader">
                    Wybrany sposób dostawy
                </h3>

                {shippingMethods.length ? shippingMethods.map((item, index) => {
                    return <label className="label--button" key={index}>
                        <button className="button--check" onClick={() => { setShipping(item.id); }}>
                            {shipping === item.id ? <span className="button--checked"></span> : "" }
                        </button>
                        {item.name} ({item.price} PLN)
                    </label>
                }) : ""}

                <h3 className="shippingAndPayment__smallHeader shippingAndPayment__smallHeader--marginTop">
                    Wybrany sposób płatności
                </h3>
                <label className="label--button">
                    <button className="button--check" onClick={() => { setPayment(1); }}>
                        {payment === 1 ? <span className="button--checked"></span> : "" }
                    </button>
                    Przelewy internetowe
                </label>
                <label className="label--button">
                    <button className="button--check" onClick={() => { setPayment(2); }}>
                        {payment === 2 ? <span className="button--checked"></span> : "" }
                    </button>
                    Płatności BLIK
                </label>
                <label className="label--button">
                    <button className="button--check" onClick={() => { setPayment(3); }}>
                        {payment === 3 ? <span className="button--checked"></span> : "" }
                    </button>
                    Płatność przy odbiorze
                </label>
                <h3 className="shippingAndPayment__smallHeader shippingAndPayment__smallHeader--marginTop">
                    Podsumowanie
                </h3>
                <h4 className="shippingAndPayment__sum">
                    Do zapłaty:
                    <span className="shippingAndPayment__sum__price">
                        {sum + deliveryPrice} PLN
                    </span>
                </h4>

                <label className="label--checkbox">
                    <input type="checkbox"
                           name="checkbox"
                           value={checkbox}
                           onChange={(e) => { setCheckbox(!checkbox); }} />
                    Akceptuję <a href="/regulamin">Regulamin</a> oraz <a href="/polityka-prywatnosci">Politykę prywatności</a>
                </label>

                <span className="error">
                    {/*{error || (formik.touched.firstName && formik.errors.firstName) || (formik.touched.lastName && formik.errors.lastName) || (formik.touched.email && formik.errors.email) || (formik.touched.phoneNumber && formik.errors.phoneNumber) || (formik.touched.postalCode && formik.errors.postalCode) || (formik.touched.city && formik.errors.city) || (formik.touched.street && formik.errors.street) || (formik.touched.building && formik.errors.building) ? "Uzupełnij wszystkie wymagane pola formularza" : ""}*/}
                    {error === "" ? "" : error}
                </span>
                <button type="submit" onClick={formik.handleSubmit} className="button button--addToCart button--shippingAndPayment">
                    Finalizacja zamówienia
                </button>
            </section>
        </section>
    </main>
}

export default ShippingAndPaymentContent;
