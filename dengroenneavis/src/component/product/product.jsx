import { useFetch } from "../../hooks/useFetch";
import { useState, useEffect } from "react";

export function Product() {
    const {
    data: productData,
    isLoading,
    error,
    } = useFetch('http://localhost:4000/api/products');

    console.log(productData);
    

    const [displayData, setDisplayData] = useState([]);

      useEffect(() => {
    if (productData) {
      setDisplayData(productData);
    }
  }, [productData]);

  const sortArray = (event) => {
    const key = event.target.value;
    if (!key || !displayData) return;

    const clone = [...displayData];
    const sorted = clone.sort((a, b) => {
      if (typeof a[key] === "number") {
        return a[key] - b[key];
      }
      return String(a[key]).localeCompare(String(b[key]));
    });

      setDisplayData(sorted);
  };




  if (isLoading) return <p>Henter produkter...</p>;
  if (error) return <p>Der opstod en fejl ved hentning af produkter.</p>;

    return (
        <>
           <h1>producter</h1>

           <div>
            {productData && productData.map((Product) => (
                <div key={Product.id}>
                    <h2>{Product.name}</h2>
                    {Product.image && <img src={Product.image} alt={Product.name} />}




        


            )}
            <p>Pris: {Product.price} DKK</p>
            <p>Beskrivelse: {Product.description}</p>


            </div>
    
    

        
        

      

    ))}
    </div>
        </>
 
        )
        }