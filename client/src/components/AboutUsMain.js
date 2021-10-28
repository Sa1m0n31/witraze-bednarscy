import React from 'react'
import PageHeader from "./PageHeader";

import img1 from '../static/img/witraz6.png';
import img2 from '../static/img/hero3.jpg';
import img3 from '../static/img/witraz5.png';
import Button from "./Button";

const AboutUsMain = () => {
    return <main className="pageContent">
        <PageHeader title="O nas" />
        <section className="aboutUs__section">
            <img data-aos="fade-right" className="aboutUs__section__img aboutUs__section__img--1" src={img1} alt="witraze-bednarscy" />

            <article data-aos="fade-left" className="aboutUs__section__content">
                <h3 className="aboutUs__section__header">
                    Witraże Bednarscy
                </h3>
                <p>
                    Pracownia Witraży została założona w 1972 roku i prowadzona jest obecnie przez artystów
                    plastyków: Elżbietę Bednarską i Bartosza Bednarskiego – syna.
                </p>
                <p>
                    W ciągu prawie 50 lat wykonaliśmy setki witraży monumentalnych w ponad 200 obiektach
                    sakralnych i świeckich. Wśród nich możemy się pochwalić zaprojektowaniem i realizacją
                    największego okna witrażowego w Europie, o powierzchni ponad 200 m2, znajdującego się w
                    kościele pod wezwaniem świętego Stanisława Kostki w Rypinie. W swoim dorobku
                    artystycznym mamy kilkadziesiąt wystaw indywidualnych oraz stałą ekspozycją w Galerii
                    Sztuki, funkcjonującej przy Pracowni Witraży. Witraże  wykonujemy według tradycyjnej,
                    klasycznej sztuki witrażowej, natomiast drobne prace kameralne w tym m. innymi lampy pod
                    zamówienie klienta, tworzone są w technice Tiffany’ego. Zajmujemy się również konserwacją i
                    restauracją zabytkowych witraży, przywracając im pierwotne blask i piękno.
                </p>
                    <p>
                        W ramach długoletniej działalności i doświadczenia oferujemy Państwu kompleksową obsługę,
                        polegającą na zaprojektowaniu niepowtarzalnych, indywidualnych wzorów, ich realizację oraz
                        montaż. Zapraszamy.
                    </p>
                        <section className="aboutUs__section__buttons">
                    <Button text="Realizacje witraży"
                            link="/witraze"
                            extraClass="button--aboutUs" />
                    <Button text="Galeria sztuki"
                            link="/galeria-sztuki"
                            extraClass="button--aboutUs" />
                </section>
            </article>
        </section>

        {/*<section className="aboutUs__section aboutUs__section--end">*/}
        {/*    <article data-aos="fade-right" className="aboutUs__section__content aboutUs__section__content--2">*/}
        {/*        <h3 className="aboutUs__section__header">*/}
        {/*            Nasza historia - jak to się wszystko zaczęło?*/}
        {/*        </h3>*/}
        {/*        <p>*/}
        {/*            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est*/}
        {/*        </p>*/}
        {/*        <p>*/}
        {/*            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est*/}
        {/*        </p>*/}
        {/*        <p>*/}
        {/*            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est*/}
        {/*        </p>*/}
        {/*    </article>*/}

        {/*    <img data-aos="fade-left" className="aboutUs__section__img aboutUs__section__img--2" src={img2} alt="witraze-bednarscy" />*/}
        {/*</section>*/}

        {/*<section className="aboutUs__section aboutUs__section--center">*/}
        {/*    <img data-aos="fade-right" className="aboutUs__section__img aboutUs__section__img--3" src={img3} alt="witraze-bednarscy" />*/}

        {/*    <article data-aos="fade-left" className="aboutUs__section__content aboutUs__section__content--3">*/}
        {/*        <h3 className="aboutUs__section__header">*/}
        {/*            Kolejny nagłówek*/}
        {/*        </h3>*/}
        {/*        <p>*/}
        {/*            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est*/}
        {/*        </p>*/}
        {/*        <p>*/}
        {/*            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est*/}
        {/*        </p>*/}
        {/*        <p>*/}
        {/*            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est*/}
        {/*        </p>*/}
        {/*    </article>*/}
        {/*</section>*/}
    </main>
}

export default AboutUsMain;
