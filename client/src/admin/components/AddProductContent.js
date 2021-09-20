import React, { useEffect, useState, useRef } from 'react'

import {
    addAllergens,
    getNewId,
    getProductCategories,
    getProductDetails,
    getProductGallery
} from "../helpers/productFunctions";
import { useLocation } from "react-router";
import {getAllCategories} from "../helpers/categoriesFunctions";

import JoditEditor from 'jodit-react';
import settings from "../helpers/settings";

const AddProductContent = () => {
    const editorR = useRef(null);
    const editorREn = useRef(null);

    const [update, setUpdate] = useState(false);
    const [name, setName] = useState("");
    const [nameEn, setNameEn] = useState("");
    const [id, setId] = useState(0);
    const [categoryId, setCategoryId] = useState(1); // 1 - Oferta indywidualna, 2 - Menu grupowe, 3 - Menu bankietowe
    const [product, setProduct] = useState([]);
    const [categories, setCategories] = useState([]);
    const [hidden, setHidden] = useState(false);
    const [recommendation, setRecommendation] = useState(false);
    const [choosenCategories, setChoosenCategories] = useState([]);
    const [gallery, setGallery] = useState([]);
    const [mainImageIndex, setMainImageIndex] = useState(0);
    const [mainImageId, setMainImageId] = useState(0);

    /* Attributes and values */
    const [key1, setKey1] = useState("");
    const [key2, setKey2] = useState("");
    const [key3, setKey3] = useState("");

    const [keyEn1, setKeyEn1] = useState("");
    const [keyEn2, setKeyEn2] = useState("");
    const [keyEn3, setKeyEn3] = useState("");

    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");
    const [value3, setValue3] = useState("");

    const [valueEn1, setValueEn1] = useState("");
    const [valueEn2, setValueEn2] = useState("");
    const [valueEn3, setValueEn3] = useState("");

    /* Prices */
    const [price, setPrice] = useState(0);

    /* Descriptions */
    const [shortDescription, setShortDescription] = useState("");
    const [shortDescriptionEn, setShortDescriptionEn] = useState("");

    const [addMsg, setAddMsg] = useState("");

    const location = useLocation();

    /* Initialize categories */
    const initializeCategories = (categoryList) => {
        setChoosenCategories(categoryList.map(item => {
           return {
               id: item.category_id,
               selected: true
           }
        }));
    }

    useEffect(() => {
        /* PRODUCT ADDED */
        const added = parseInt(new URLSearchParams(location.search).get("add"));
        if(added) {
            if(added === 1) {
                setAddMsg("Produkt został dodany");
                /* Add allergens */
                addAllergens(parseInt(localStorage.getItem('sec-product-id')), JSON.parse(localStorage.getItem('sec-allergens-to-add')))
                    .then(res => {
                        localStorage.removeItem('sec-product-id');
                        localStorage.removeItem('sec-allergens-to-add');
                    });
            }
            else if(added === 0) {
                setAddMsg("Nie udało się dodać produktu. Prosimy spróbować później lub skontaktować się z administratorem systemu");
            }
        }

        /* Get all categories */
        getAllCategories()
            .then(res => {
                setCategories(res.data.result);
                setChoosenCategories(res.data.result.map((item) => {
                    return {
                        id: item.id,
                        selected: false
                    }
                }));
            });

        /* UPDATE PRODUCT MODE */
        const param = parseInt(new URLSearchParams(location.search).get("id"));
        if(param) {
            setId(param);
            setUpdate(true);

            getProductDetails(param)
                .then(async res => {
                    console.log(res.data.result[0]);
                    await setProduct(res.data.result[0]);
                    await setInitialValues(res.data.result[0]);
                });

            getProductGallery(param)
                .then(res => {
                    setGallery(res.data?.result);
                });

            getProductCategories(param)
                .then(res => {
                    if(res.data.result) {
                        initializeCategories(res.data.result);
                    }
                });
        }
        else {
            getNewId()
                .then(res => {
                   setId(res.data.result+1);
                });
        }
    }, []);

    const setInitialValues = (productData) => {
        setName(productData.name);

        setPrice(productData.price);

        setCategoryId(productData.category_id);
        setHidden(productData.hidden);
        setRecommendation(productData.recommendation);

        setShortDescription(productData.description);
    }

    const isInArray = (categoryId) => {
        return choosenCategories.filter(item => {
            return item.id === categoryId;
        }).length > 0;
    }

    const handleCategories = (categoryToToggle) => {
        if(isInArray(categoryToToggle)) {
            setChoosenCategories(choosenCategories.map((item) => {
                return {
                    id: item.id,
                    selected: item.id === categoryToToggle ? !item.selected : item.selected
                }
            }));
        }
        else {
            setChoosenCategories([...choosenCategories, { id: categoryToToggle, selected: true }]);
        }
    }

    const isCategoryChoosen = (categoryId) => {
        return choosenCategories.filter((item) => {
            return item.id === categoryId && item.selected;
        }).length > 0;
    }

    const changeMainImage = (e) => {
        e.preventDefault();
        const newMainImageIndex = parseInt(e.target.getAttribute("id").split("-")[1]);
        const allGalleryImages = document.querySelectorAll(".galleryProductImage");
        setMainImageIndex(newMainImageIndex);
        Array.prototype.forEach.call(allGalleryImages, (item, index) => {
            console.log("hello: " + index + " and " + newMainImageIndex);
            if(index === newMainImageIndex) {
                console.log("change style");
                console.log(item);
                item.style.border = "4px solid #fff";
                item.style.filter = "greyscale(.7)";
            }
            else {
                item.style.border = "none";
                item.style.filter = "none";
            }
        });
    }

    const addNewGalleryImage = (e) => {
        const galleryWrapper = document.querySelector(".galleryWrapper");
        const input = document.querySelector(".galleryImageInput");

        const temporaryImages = document.querySelectorAll(".galleryProductImage");
        temporaryImages.forEach(item => {
            item.parentElement.removeChild(item);
        });

        let i = 0;

        Array.prototype.forEach.call(input.files, async (file) => {
            const reader = new FileReader();
            await reader.readAsDataURL(file);

            reader.onload = (e) => {
                const newImg = document.createElement("img");
                console.log(e.target);
                newImg.setAttribute("src", e.target.result);
                newImg.setAttribute("class", "galleryProductImage");
                newImg.setAttribute("alt", "zdjecie-galerii");
                newImg.setAttribute("id", `galleryImage-${i}`);
                newImg.addEventListener("click", (e) => {
                    e.preventDefault();
                    changeMainImage(e);
                });
                if(i === 0) {
                    newImg.style.border = "4px solid #fff";
                    newImg.style.filter = "greyscale(.7)";
                }
                galleryWrapper.appendChild(newImg);
                i++;
            }
        });
    }

    const changeMainImageId = (e) => {
        const id = parseInt(e.target.getAttribute("id").split("-")[2]);
        const allGalleryImages = document.querySelectorAll(".galleryProductImage");
        Array.prototype.forEach.call(allGalleryImages, (item, index) => {
            if(id === parseInt(item.id.split("-")[2])) {
                console.log("change style");
                console.log(item);
                item.style.border = "4px solid #fff";
                item.style.filter = "greyscale(.7)";
            }
            else {
                item.style.border = "none";
                item.style.filter = "none";
            }
        });
        setMainImageId(id);
    }

    return <main className="panelContent addProduct">
        <header className="addProduct__header">
            <h1 className="addProduct__header__h">
                Edycja produktu
            </h1>
        </header>
        {addMsg === "" ? <form className="addProduct__form addProduct__form--addProduct"
                               encType="multipart/form-data"
                               action={update ? "http://localhost:3000/product/update-product" : "http://localhost:3000/product/add-product"}
                               method="POST"
        >
            <section className="addProduct__form__section">
                <input className="invisibleInput"
                       name="id"
                       value={id} />

                <label className="addProduct__label">
                    <input className="addProduct__input"
                           name="name"
                           value={name}
                           onChange={(e) => { setName(e.target.value) }}
                           placeholder="Nazwa produktu" />
                </label>
                <label className="addProduct__label">
                    <input className="addProduct__input"
                           name="nameEn"
                           value={nameEn}
                           onChange={(e) => { setNameEn(e.target.value) }}
                           placeholder="Angielska nazwa produktu" />
                </label>

                {/* PRICES */}
                <label className="addProduct__label">
                    <input className="addProduct__input"
                           name="price"
                           type="number"
                           step={0.01}
                           value={price}
                           onChange={(e) => { setPrice(e.target.value) }}
                           placeholder="Cena" />
                </label>


                <section className="addProduct__categorySelect">
                    {categories?.map((item, index) => {
                        if(!item.parent_id) {
                            return <><label className="panelContent__filters__label__label" key={index}>
                                <button value={item.id} className="panelContent__filters__btn" onClick={(e) => { e.preventDefault(); handleCategories(item.id); }}>
                                    <span className={isCategoryChoosen(item.id) ? "panelContent__filters__btn--active" : "d-none"} />
                                </button>
                                {item.name}
                            </label>
                                <input className="invisibleInput"
                                       name={`category-${item.id}`}
                                       value={isCategoryChoosen(item.id)} />


                                {categories?.map((itemChild, indexChild) => {
                                    if(itemChild.parent_id === item.id) {
                                        return <><label className="panelContent__filters__label__label pl-5 d-block" key={index}>
                                            <button value={itemChild.id} className="panelContent__filters__btn" onClick={(e) => { e.preventDefault(); handleCategories(itemChild.id); }}>
                                                <span className={isCategoryChoosen(itemChild.id) ? "panelContent__filters__btn--active" : "d-none"} />
                                            </button>
                                            {itemChild.name}
                                        </label>
                                            <input className="invisibleInput"
                                                   name={`category-${itemChild.id}`}
                                                   value={isCategoryChoosen(itemChild.id)} />
                                        </>
                                    }
                                })}
                            </>
                        }
                    })}
                </section>

                <label className="jodit--label">
                    <span>Krótki opis</span>
                    <JoditEditor
                        name="shortDescription"
                        ref={editorR}
                        value={shortDescription}
                        tabIndex={1} // tabIndex of textarea
                        onBlur={newContent => {}} // preferred to use only this option to update the content for performance reasons
                        onChange={newContent => { setShortDescription(newContent) }}
                    />
                </label>
                <label className="jodit--label">
                    <span>Krótki opis angielski</span>
                    <JoditEditor
                        name="shortDescription"
                        ref={editorREn}
                        value={shortDescriptionEn}
                        tabIndex={1} // tabIndex of textarea
                        onBlur={newContent => {}} // preferred to use only this option to update the content for performance reasons
                        onChange={newContent => { setShortDescriptionEn(newContent) }}
                    />
                </label>
            </section>

            <section className="addProduct__form__section">
                <section className="addProduct__form__subsection addProduct__form__subsection--marginLeft marginTop30">

                    <label className="fileInputLabel fileInputLabel--gallery">
                        <span>Zdjęcie</span>
                        <input type="file"
                               onChange={(e) => { addNewGalleryImage(e); }}
                               className="product__fileInput galleryImageInput"
                               name="gallery" />
                        <section className="galleryWrapper" onClick={e => { e.preventDefault(); }}>
                            {gallery?.map((item, index) => {
                                //if(index === 0) setMainImageId(item.id);
                                return <img className="galleryProductImage" onClick={(e) => {update ? changeMainImageId(e) : changeMainImage(e)}} src={`${settings.API_URL}/image?url=/media/${item.file_path}`} id={`gallery-${index}-${item.id}`} alt="zdjecie-produktu" />
                            })}
                        </section>
                    </label>
                </section>

                <section>
                    <label className="addProduct__label">
                        <input className="addProduct__input"
                               name="key1"
                               value={key1}
                               onChange={(e) => { setKey1(e.target.value) }}
                               placeholder="Atrybut 1" />
                    </label>
                    <label className="addProduct__label">
                        <input className="addProduct__input"
                               name="value1"
                               value={value1}
                               onChange={(e) => { setValue1(e.target.value) }}
                               placeholder="Wartość atrybutu 1" />
                    </label>

                    <label className="addProduct__label">
                        <input className="addProduct__input"
                               name="key2"
                               value={key2}
                               onChange={(e) => { setKey2(e.target.value) }}
                               placeholder="Atrybut 2" />
                    </label>
                    <label className="addProduct__label">
                        <input className="addProduct__input"
                               name="value2"
                               value={value2}
                               onChange={(e) => { setValue2(e.target.value) }}
                               placeholder="Wartość atrybutu 2" />
                    </label>

                    <label className="addProduct__label">
                        <input className="addProduct__input"
                               name="key3"
                               value={key3}
                               onChange={(e) => { setKey3(e.target.value) }}
                               placeholder="Atrybut 3" />
                    </label>
                    <label className="addProduct__label">
                        <input className="addProduct__input"
                               name="value3"
                               value={value3}
                               onChange={(e) => { setValue3(e.target.value) }}
                               placeholder="Wartość atrybutu 3" />
                    </label>
                </section>

                <section>
                    <label className="addProduct__label">
                        <input className="addProduct__input"
                               name="keyEn1"
                               value={keyEn1}
                               onChange={(e) => { setKeyEn1(e.target.value) }}
                               placeholder="Angielski atrybut 1" />
                    </label>
                    <label className="addProduct__label">
                        <input className="addProduct__input"
                               name="valueEn1"
                               value={valueEn1}
                               onChange={(e) => { setValueEn1(e.target.value) }}
                               placeholder="Angielska wartość atrybutu 1" />
                    </label>

                    <label className="addProduct__label">
                        <input className="addProduct__input"
                               name="keyEn2"
                               value={keyEn2}
                               onChange={(e) => { setKeyEn2(e.target.value) }}
                               placeholder="Angielski atrybut 2" />
                    </label>
                    <label className="addProduct__label">
                        <input className="addProduct__input"
                               name="valueEn2"
                               value={valueEn2}
                               onChange={(e) => { setValueEn2(e.target.value) }}
                               placeholder="Angielska wartość atrybutu 2" />
                    </label>

                    <label className="addProduct__label">
                        <input className="addProduct__input"
                               name="keyEn3"
                               value={keyEn3}
                               onChange={(e) => { setKeyEn3(e.target.value) }}
                               placeholder="Angielski atrybut 3" />
                    </label>
                    <label className="addProduct__label">
                        <input className="addProduct__input"
                               name="valueEn3"
                               value={valueEn3}
                               onChange={(e) => { setValueEn3(e.target.value) }}
                               placeholder="Angielska wartość atrybutu 3" />
                    </label>
                </section>


                <label className="panelContent__filters__label__label panelContent__filters__label__label--category">
                    <button className="panelContent__filters__btn" onClick={(e) => { e.preventDefault(); setHidden(!hidden); }}>
                        <span className={hidden ? "panelContent__filters__btn--active" : "d-none"} />
                    </button>
                    Ukryj produkt
                </label>
                <label className="panelContent__filters__label__label panelContent__filters__label__label--category mt-4">
                    <button className="panelContent__filters__btn" onClick={(e) => { e.preventDefault(); setRecommendation(!recommendation); }}>
                        <span className={recommendation ? "panelContent__filters__btn--active" : "d-none"} />
                    </button>
                    Pokaż produkt w polecanych
                </label>

                <input className="invisibleInput"
                       value={hidden ? "hidden" : ""}
                       name="hidden" />
                <input className="invisibleInput"
                       value={recommendation ? "true" : ""}
                       name="recommendation" />
            </section>

            <section className="addProduct__btnWrapper">
                <button className="addProduct__btn" type="submit">
                    {update ? "Zaktualizuj produkt" : "Dodaj produkt"}
                </button>
            </section>
        </form> : <h2 className="addMsg">
            {addMsg}
        </h2> }
    </main>
}

export default AddProductContent;
