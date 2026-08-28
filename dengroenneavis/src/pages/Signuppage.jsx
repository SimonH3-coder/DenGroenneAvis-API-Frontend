import { NavLink } from "react-router";

export function Signuppage() {
    async function signup(event) {
        event.preventDefault();

        const res = await fetch('http://localhost:4000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',

            },
            body: JSON.stringify({
                email: formData.get('email'),
                password: formData.get('password'),
                firstname: formData.get('fornavn'),
                lastname: formData.get('efternavn'),
                adress: formData.get('adresse'),
                city: formData.get('by'),
                zipcode: formData.get('postnummer'),
            }),
        });
}

return (
    <>
    <h1>Opret en konto</h1>
    <form onSubmit={signup}>
<p> Email</p>
       <input 
       name = "email"
       type = "email"
       placeholder = "Din email..."
       required />
       <p> Password</p>
       <input
       name = "password"
       type = "password"
       placeholder = "Dit password..."
       required />
       <p> Fornavn</p>
         <input
         name = "fornavn"
            type = "text"
            placeholder = "Dit fornavn..."
            required />
            <p> Efternavn</p>
         <input
         name = "efternavn"
            type = "text"
            placeholder = "Dit efternavn..."
            required />
            <p> Adresse</p>
         <input
            name = "adresse"
            type = "text"
            placeholder = "Din adresse..."
            required />
            <p> By</p>
         <input
            name = "by"
            type = "text"
            placeholder = "Din by..."
            required />
            <p> Postnummer</p>
         <input
            name = "postnummer"
            type = "text"
            placeholder = "Dit postnummer..."
            required />
    </form>
    <p>Har du allerede en konto?{" "} Klik 
        <NavLink to="/login">her</NavLink> 
        for at gå til login
    </p>
    <input type="checkbox"
    name="terms"
    required />
    <p>Jeg har læst og forstået de gældende betingelser for oprettelse af kundekonto og brug af denne side</p>
    <button type="submit">Opret</button>
    </>
)
}