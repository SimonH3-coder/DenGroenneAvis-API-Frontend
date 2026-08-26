import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { NavLink } from "react-router";
import style from "../pages/Frontpage.module.scss";


import banner_image1 from "../assets/banner_image1.jpg";
import banner_image2 from "../assets/banner_image2.jpg";
import banner_image3 from "../assets/banner_image3.jpg";

function getChooseItems(items, amount) {
return [...items].sort(() => Math.random() - 0.5).slice(0, amount);
}

export function Frontpage() {
    const {
        data: products,
        isLoading,
        error,
    } = useFetch('http://localhost:4000/api/products');

    const { data: categories 
    } = useFetch('http://localhost:4000/api/categories');

    const [chooseProducts, setChooseProducts] = useState([]);
    const [chooseCategories, setChooseCategories] = useState([]);

useEffect(() => {
    if (products) {
        setChooseProducts(getChooseItems(products, 6));
    }
    if (categories) {
        setChooseCategories(getChooseItems(categories, 6));
    }
}, [products, categories]);

if (isLoading) {
    return <p>Der opstod en fejl i forbindelse med at hente produkter og kategorier.</p>
}

if (error) {
    return <p>Der kom en fejl i forbindelse med at hente produkter og kategorier.</p>
}

    return (
        <main className={style.frontpage}>
        <section>
               <h3>Udvalgte Produkter</h3>
               <div className={style.Gridprodukt}>
                {chooseProducts.map((product) => (
                    <NavLink className={style.NavLinkimage}
                    to ={`/products/${product.id}`} 
                    key={product.id}
                    >
                    <article className={style.Cardproduct}>
                    <img src={product.image} alt={product.name} />
                    <h4>{product.name}</h4>
                    <p>{product.description}</p>

                    </article>

                        </NavLink>
                ))}
                    </div>
               
               </section>
    <section className={style.Banner}>
        <img src={banner_image1} alt="Den Groenne Avis" />
        <div>
        <h3>Den Grønne Avis</h3>
        <p>Vi går forest i kampen om klimaet ved at  give 2 kr til
            klima-venlige formål, hver gang du handler brugt på Den 
            Grønne Avis
        </p>
        </div>
    </section>

    <section>
        <h3>Udvalgte kategorier</h3>
        <div className={style.Gridkategori}>
            {chooseCategories.map((category) => (
                <NavLink className={style.NavLinkimage}
                to ={`/products/?category=${category.id}`}
                key={category.id}
                >
                <article className={style.Cardcategory}>
                    {category.image && (
                        <img src={category.image} alt={category.name} />
                    )}
                    <h4>{category.name}</h4>
                </article>
                </NavLink>
            ))}
        </div>
    </section>
    <section className= {style.Bannertwo}>
        <img src={banner_image2} alt="Banner 2" />
        <div>
<h4>Donationer til Dato</h4>
        <p>Sammen med dig har vi siden staren samlet </p>
        <strong>452.231,50 kr</strong>
        <p> Tak fordi du handler brugt, med omtanke for klimaet </p>

        </div>
    </section>
    <section className={style.Bannerthree}>
        <img src={banner_image3} alt="Banner 3" />
        <div>
        <h4>Donationer i år</h4>
        <p> Sammen med dig har vi fået indsamlet:</p>
        <strong>112.452,17 kr</strong>
        <p> Tak fordi handler brugt med omtanke for jorden</p>
        </div>
    </section>

        </main>


    )
}
