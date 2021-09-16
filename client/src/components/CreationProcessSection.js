import React from 'react'
import SectionHeader from "./SectionHeader";
import Button from "./Button";

const CreationProcessSection = () => {
    return <section className="section section--creationProcess">
        <SectionHeader
            title="Proces tworzenia"
            left={true} />

        <main className="creationProcess" data-aos="zoom-in-down">
            <p className="creationProcess__desc">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
            <p className="creationProcess__desc">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet
            </p>

            <Button
                text="Zapoznaj się z pełnym procesem tworzenia witraży"
                link="/technologie"
                extraClass="button--process" />
        </main>
    </section>
}

export default CreationProcessSection;
