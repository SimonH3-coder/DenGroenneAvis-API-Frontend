import { useFetch } from "../../hooks/useFetch";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router";

export function Product() {
    const {
    data: productData,
    isLoading,
    error,
    } = useFetch('http://localhost:4000/api/products');
    const [searchParams] = useSearchParams();

    const selectedCategory = searchParams.get('category');

    const filteredProducts = selectedCategory
    ? (productData || []).filter((product) => String(product.categoryId) === String(selectedCategory))
    : (productData || []);

 if (isLoading) return <p>Henter produkter...</p>;
  if (error) return <p>Der opstod en fejl ved hentning af produkter.</p>;

    return (
        <>
           <h1>producter</h1>

           <div>
            {filteredProducts.map((Product) => (
                <div key={Product.id}>
                    <h2>{Product.name}</h2>
                    {Product.image && <img src={Product.image} alt={Product.name} />}
            
            <p>Beskrivelse: {Product.description}</p>


            </div>
    
    

        
        

      

    ))}
    </div>
        </>
 
        )
        }