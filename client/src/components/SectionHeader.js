import React, { useRef, useState } from 'react'
import arrowDown from "../static/img/arrow-down-gold.svg";

const SectionHeader = ({title, left, portfolio}) => {
    const arrow = useRef(null);
    const secondLanguage = useRef(null);
    const [catHidden, setCatHidden] = useState(true);

    const toggleCategories = (e) => {
        e.preventDefault();
        if(catHidden) showCategories();
        else hideCategories();
    }

    const showCategories = () => {
        arrow.current.style.transform = "rotateX(180deg)";
        secondLanguage.current.style.display = "flex";
        secondLanguage.current.style.opacity = "1";
        setCatHidden(false);
    }

    const hideCategories = () => {
        arrow.current.style.transform = "none";
        secondLanguage.current.style.opacity = "0";
        setTimeout(() => {
            secondLanguage.current.style.display = "none";
        }, 500);
        setCatHidden(true);
    }

    const switchCategories = () => {

    }

    return <h2 id={portfolio ? "sectionPicker" : ""} className={left ? "sectionHeader sectionHeader--left" : "sectionHeader sectionHeader--right"}>
        {portfolio ?  <section className="topBar__language portfolioPicker">
            <span className="d-desktop">Rodzaj witraży</span>
            <h4 className="topBar__language__inner" onClick={(e) => { toggleCategories(e); }}>
                <span>sakralne</span>
                <button className="languageBtn">
                    <img ref={arrow} className="languageBtn__img" src={arrowDown} alt="wiecej" />
                </button>
            </h4>
            <button ref={secondLanguage} onClick={() => { switchCategories(1); }}
               className="topBar__language__inner topBar__language__inner--second topBar__language__inner--second--portfolio">
                <span>kameralne</span>
            </button>
        </section> : ""}
        {title}
    </h2>
}

export default SectionHeader;
