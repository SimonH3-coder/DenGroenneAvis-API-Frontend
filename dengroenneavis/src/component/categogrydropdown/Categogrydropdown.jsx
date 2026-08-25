import { useState, useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useNavigate } from "react-router";


export function Categogrydropdown() {
    // Fetch categories from the API
    const {}= useFetch('http://localhost:4000/api/categories');
  
        const navigate = useNavigate();

        function handleChange(event) {
            const value = event.target.value;

        if (value) {
            navigate(value);
        }
    }

    return (
        <>
        
        <div>
            
            <select onChange={handleChange} defaultValue="">
            <option value="" disabled>Vælg kategori</option>
            <option value={'/products/?category=1'}>Camping</option>
            <option value={'/products/?category=2'}>Elektronik</option>
            <option value={'/products/?category=3'}>Have og byg</option>
            <option value={'/products/?category=4'}>Tøj og mode</option>
            <option value={'/products/?category=5'}>Cykler</option>
            <option value={'/products/?category=6'}>Biler</option>
            <option value={'/products/?category=7'}>Hobby</option>
            <option value={'/products/?category=8'}>Mobil og telefoni</option>
            <option value={'/products/?category=9'}>Billede og lyd</option>
            <option value={'/products/?category=10'}>Scooter og knallerter</option>
            <option value={'/products/?category=11'}>Bøger og blade</option>
            <option value={'/products/?category=12'}>Hobby</option>
            <option value={'/products/?category=13'}>Diverse</option>


            </select>


</div>
        
        </>


    )
}