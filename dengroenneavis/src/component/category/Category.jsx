import { useFetch } from "../../hooks/useFetch";
import { useState, useEffect } from "react";



export function Category() {
  const {
    data: categoryData,
    isLoading,
    error,
  } = useFetch('http://localhost:4000/api/categories');

  console.log(categoryData);

  const [displayData, setDisplayData] = useState([]);

  useEffect(() => {
    if (categoryData) {
      setDisplayData(categoryData);
    }
  }, [categoryData]);

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




  if (isLoading) return <p>Henter kategorier...</p>;
  if (error) return <p>Der opstod en fejl ved hentning af kategorier.</p>;

  return (
    <> 
    <h1>Kategorier</h1>
    {categoryData && categoryData.map((name) => (
      <p key={name.id} >{name.name}</p>
      
    ))}
    
    </>
  )
}

