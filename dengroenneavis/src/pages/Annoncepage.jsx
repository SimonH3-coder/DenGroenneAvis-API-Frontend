
import { useFetch } from "../hooks/useFetch";
import { useNavigate } from "react-router";


export function Annoncepage() {
  
    // Fetch categories from the API
    const {}= useFetch('http://localhost:4000/api/categories');

        
        const navigate = useNavigate();

        function handleChange(event) {
            const value = event.target.value;

        if (value) {
            navigate(value);
        }  
    }
    async function annonce(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        // Fetch  products from the API
        const res = await fetch('http://localhost:4000/api/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
   
    body: JSON.stringify({ 
        title: formData.get('title'),
        category: formData.get('kategori'),
        annonceText: formData.get('annoncetekst'),
        image: formData.get('urltilbillede'),
        price: formData.get('pris'),
    }),
});
    }

    return (
        <>
        <h1>Opret en annonce </h1>
        <p>Her kan du oprette en ny annonce.</p>
        <p>Du har mulighed for at slette din annoncer igen under "min konto" siden </p>
        <form  onSubmit={annonce}>
        <p> Titel</p>
        <input
        name = "title"
        type = "text"
        placeholder = "Titel på din produkter..."
        required />

        <div>
        <p> Kategori</p>
        <select name="kategori" onChange={handleChange} defaultValue="">
            <option value="" disabled>Hvilken kategori tilhører dette produkt</option>
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

            <p>Annoncetekst</p>
            <input name = "annoncetekst" 
            type = "text" 
            placeholder = "Skriv en annonce tekst her der beskriver produktet."/>
            <p>Url til billede</p>
            <input name = "urltilbillede" 
            type = "text" 
            placeholder = "Har du et billede som ligger på nettet kan du indsætte en url her..."/>
            <p>Pris</p>
            <input name = "pris" 
            type = "number" 
            placeholder = "Pris..."/>
            <button type="submit">Opret</button>
        </form>
        </>
    )
}
