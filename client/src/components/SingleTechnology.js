import React from 'react'
import Button from "./Button";

const SingleTechnology = ({number, name, desc, extraClass, link}) => {
    return <section className={`technology ${extraClass}`} data-aos="zoom-in-down" data-aos-delay="400">
        <span className="technology__number">
            {number}
        </span>
        <h4 className="technology__name">
            {name}
        </h4>
        <p className="technology__desc">
            {desc}
        </p>

        <Button
            text="Więcej informacji"
            link="#"
            extraClass="button--technology" />
    </section>
}

export default SingleTechnology;
