import React, { useState, useEffect, useRef } from 'react'

import hero1 from '../static/img/hero1.png'
import hero2 from '../static/img/hero2.jpg'
import hero3 from '../static/img/hero3.jpg'
import logo from '../static/img/logo.png'

import arrow from '../static/img/arrow-right.svg'
import TopBar from "./TopBar";
import TopMenu from "./TopMenu";
import Button from "./Button";
import background1 from "../static/img/background/warstwa2.svg";

const HeroCarousel = () => {
    const [images, setImages] = useState([]);
    const [currentImg, setCurrentImg] = useState(0);

    const hero1Ref = useRef(null);
    const hero2Ref = useRef(null);
    const hero3Ref = useRef(null);

    const heroCarousel = useRef(null);
    const heroLoader = useRef(null);
    const heroLoaderImg = useRef(null);

    let currentSlide = 0;

    const heroRefs = [hero1Ref, hero2Ref, hero3Ref];

    useEffect(() => {
        setImages([
            hero1, hero2, hero3
        ]);
    }, []);

    const prevHero = () => {
        if(currentImg === 0) {
            heroChange(2);
        }
        else {
            heroChange(currentImg-1);
        }
    }

    const nextHero = () => {
       if(currentImg === 2) {
            heroChange(0);
        }
        else {
            heroChange(currentImg+1);
        }
    }

    const heroChange = (n) => {
        if(n !== currentImg) {
            heroRefs[n].current.style.opacity = "1";
            heroRefs[currentImg].current.style.opacity = "0";
        }
        setCurrentImg(n);
    }

    const loaderLoad = () => {
        heroLoaderImg.current.style.transform = "scale(1)";
    }

    const firstImageLoad = () => {
        setTimeout(() => {
            heroCarousel.current.style.display = "block";
            heroLoader.current.style.opacity = "0";
            heroCarousel.current.style.opacity = "1";

            setTimeout(() => {
                document.querySelector(".aboutUs").style.marginTop = "60px";
                heroLoader.current.style.display = "none";
            }, 1000);
        }, 1000);
    }

    return <>
        {/* LOADER */}
        <aside className="heroLoader" ref={heroLoader}>
            <img ref={heroLoaderImg} onLoad={() => { loaderLoad(); }} className="heroLoader__img" src={logo} alt="bednarscy-witraze" />
        </aside>

        {/* CAROUSEL */}
        <main className="heroCarousel" ref={heroCarousel}>
            <img className="background background--1" src={background1} alt="tlo" />

            <figure className="heroCarousel__image">
                <img onLoad={() => { firstImageLoad(); }} ref={hero1Ref} id="hero1" className="heroCarousel__image__img" src={hero1} alt="witraze-sakralne-bednarscy" />
                <img ref={hero2Ref} id="hero2" className="heroCarousel__image__img" src={hero2} alt="witraze-sakralne-bednarscy" />
                <img ref={hero3Ref} id="hero3" className="heroCarousel__image__img" src={hero3} alt="witraze-sakralne-bednarscy" />
            </figure>

            <main className="heroCarousel__content">
                <TopBar />
                <TopMenu />

                <h1 className="heroCarousel__header">
                    Witraże sakralne - piękne projekty
                </h1>
                <h2 className="heroCarousel__subheader">
                    Tworzymy witraże różnego typu i sprzedajemy rzeczy
                </h2>
                <Button
                    text="Nasze realizacje"
                    extraClass="button--landing"
                    link="#realizacje" />

                <section className="heroCarousel__buttons">
                    <button id="heroCarousel1" className="heroCarousel__button" onClick={() => { heroChange(0); }}>
                        {currentImg === 0 ? <span className="heroCarousel__button--selected"></span> : ""}
                    </button>
                    <button id="heroCarousel2" className="heroCarousel__button" onClick={() => { heroChange(1); }}>
                        {currentImg === 1 ? <span className="heroCarousel__button--selected"></span> : ""}
                    </button>
                    <button id="heroCarousel3" className="heroCarousel__button" onClick={() => { heroChange(2); }}>
                        {currentImg === 2 ? <span className="heroCarousel__button--selected"></span> : ""}
                    </button>
                </section>

                <section className="heroCarousel__arrows">
                    <button className="heroCarousel__buttonArrow buttonArrow--prev" onClick={() => { prevHero(); }}>
                        <img className="heroCarousel__buttonArrow__arrow" src={arrow} alt="poprzedni" />
                    </button>

                    <button className="heroCarousel__buttonArrow buttonArrow--next" onClick={() => { nextHero(); }}>
                        <img className="heroCarousel__buttonArrow__arrow" src={arrow} alt="nastepny" />
                    </button>
                </section>
            </main>
        </main>
    </>
}

export default HeroCarousel;
