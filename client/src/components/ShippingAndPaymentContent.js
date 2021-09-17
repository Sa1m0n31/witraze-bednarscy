import React, { useState, useEffect, useRef } from 'react'
import * as Yup from "yup";
import {useFormik} from "formik";

const ShippingAndPaymentContent = () => {
    const [vat, setVat] = useState(false);

    let vatSection = useRef(null);

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

        }});

    return <main className="shippingAndPayment">
        <h2 className="shop__products__header">
            Formularz zamówienia
        </h2>

        <section className="shippingAndPayment__form">
            <section className="shippingAndPayment__form__section">
                <h3 className="shippingAndPayment__smallHeader">
                    Dane osobowe
                </h3>

                <form className="shippingAndPayment__dataForm">
                    <span className="row">
                        <label className="label--name">
                            <input className="input"
                               name="firstName"
                               value={formik.values.firstName}
                               onChange={formik.handleChange}
                               placeholder="Imię" />
                         </label>
                         <label className="label--surname">
                            <input className="input input--surname"
                                   name="lastName"
                                   value={formik.values.lastName}
                                   onChange={formik.handleChange}
                                   placeholder="Nazwisko" />
                         </label>
                    </span>

                    <label>
                        <input className="input"
                               name="email"
                               value={formik.values.email}
                               onChange={formik.handleChange}
                               placeholder="E-mail" />
                    </label>

                    <label>
                        <input className="input"
                               name="phoneNumber"
                               value={formik.values.phoneNumber}
                               onChange={formik.handleChange}
                               placeholder="Numer telefonu" />
                    </label>

                    <span className="row">
                        <label className="label--postalCode">
                            <input className="input"
                                   name="postalCode"
                                   value={formik.values.postalCode}
                                   onChange={formik.handleChange}
                                   placeholder="Kod pocztowy" />
                         </label>
                         <label className="label--city">
                            <input className="input input--surname"
                                   name="city"
                                   value={formik.values.city}
                                   onChange={formik.handleChange}
                                   placeholder="Miejscowość" />
                         </label>
                    </span>

                    <span className="row">
                        <label className="label--street">
                            <input className="input"
                                   name="street"
                                   value={formik.values.street}
                                   onChange={formik.handleChange}
                                   placeholder="Ulica" />
                         </label>
                         <label className="label--building">
                            <input className="input input--surname"
                                   name="building"
                                   value={formik.values.building}
                                   onChange={formik.handleChange}
                                   placeholder="Nr domu" />
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

                <label className="label--button">
                    <button className="button--check">

                    </button>
                    Kurier DPD (10 PLN)
                </label>
                <label className="label--button">
                    <button className="button--check">

                    </button>
                    Kurier InPost (10 PLN)
                </label>
                <label className="label--button">
                    <button className="button--check">

                    </button>
                    Odbiór osobisty (0 PLN)
                </label>

                <h3 className="shippingAndPayment__smallHeader shippingAndPayment__smallHeader--marginTop">
                    Wybrany sposób płatności
                </h3>
                <label className="label--button">
                    <button className="button--check">

                    </button>
                    Przelewy internetowe
                </label>
                <label className="label--button">
                    <button className="button--check">

                    </button>
                    Płatności BLIK
                </label>
                <label className="label--button">
                    <button className="button--check">

                    </button>
                    Płatność przy odbiorze
                </label>

                <button className="button button--addToCart button--shippingAndPayment">
                    Finalizacja zamówienia
                </button>
            </section>
        </section>
    </main>
}

export default ShippingAndPaymentContent;
