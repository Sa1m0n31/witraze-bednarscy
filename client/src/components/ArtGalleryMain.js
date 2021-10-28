import React from 'react'
import PageHeader from "./PageHeader";

import bigImage from '../static/img/witraz1.png'
import img1 from '../static/img/witraz2.png'
import img2 from '../static/img/witraz3.png'
import img3 from '../static/img/witraz4.png'

const ArtGalleryMain = () => {
    return <main className="pageContent">
        <PageHeader title="Galeria sztuki" />
        <main className="pageContent__artGallery">
            <img data-aos="fade-right" className="pageContent__artGallery__bigImage" src={bigImage} alt="galeria-sztuki-bednarscy" />

            <article className="pageContent__artGallery__desc">
                <p data-aos="fade-left">
                    Miło nam będzie gościć Państwa w naszej Galerii Sztuki. Galerii, która powstając przy
                    rypińskiej Pracowni Witraży, była odpowiedzią na czuły gust naszych sympatyków: osób, które
                    poszukują nietuzinkowych przedmiotów lub ludzi pragnących by ponadczasowe piękno
                    zamknięte w naszych klasycznych witrażach było ozdobą ich domów.
                </p>
                <p data-aos="fade-left">
                    Zapraszamy do Galerii, bo wierzymy, że obcowanie z pięknem jest bardzo ważne. To
                    przekonanie chcemy podkreślić szczególnie w dzisiejszych czasach.  Sztuka uwrażliwia, uczy,
                    pomaga poznać prawdę o nas samych. Budzi ciekawość świata, zastanawia. Czasem oburza i
                    skłania do refleksji… Ale zawsze coś nam daje.
                </p>
                <p data-aos="fade-left">
                    W naszej Galerii znajdziecie Państwo przekrój rozmaitych prac. Oferujemy niezmiennie piękne
                    witraże kameralne i upominkowe, zegary oraz lampy wykonane tradycyjną techniką Tiffany’ego.
                    Wystawiamy także współczesne obrazy, rzeźby i rękodzieło artystyczne. Współpracujemy z
                    wieloma docenianymi twórcami sztuki użytkowej, których prace znajdują się w naszej ofercie.
                </p>
                <p data-aos="fade-left">
                    Współpracujemy również z naszymi Gośćmi: realizujemy witraże według ich pomysłów, na
                    szczególne okazje. Personalizujemy prezenty, pomagamy dobierać odpowiednie dedykacje i
                    bardzo taką pracę z Państwem sobie cenimy.
                </p>

                        <section className="pageContent__artGallery__images" data-aos="fade-up">
                    <img className="pageContent__artGallery__images__img" src={img1} alt="galeria-sztuki-bednarscy" />
                    <img className="pageContent__artGallery__images__img" src={img2} alt="galeria-sztuki-bednarscy" />
                    <img className="pageContent__artGallery__images__img" src={img3} alt="galeria-sztuki-bednarscy" />
                </section>
            </article>
        </main>
    </main>
}

export default ArtGalleryMain;
