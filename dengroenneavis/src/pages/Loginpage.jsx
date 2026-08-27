import banner_image2 from "../assets/banner_image2.jpg";
import banner_image3 from "../assets/banner_image3.jpg";
import icons8atsign1 from "../assets/icons8atsign1.png";
import icons8atsing2 from "../assets/icons8atsign2.png";
import { Navigate, NavLink } from "react-router";
import { useState } from "react";

export function Loginpage() {
const [Login, setLogin] = useState(false);
const [error, setError] = useState("");



    async function login(event) {
       event.preventDefault();
       setError("");

       const formData = new FormData(event.currentTarget);

        const res = await fetch('http://localhost:4000/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: formData.get('email'),
            password: formData.get('password'),
        }),
    });

    if (!res.ok) {
        setError("Hvis Email eller password er skrevet forkert.")
        return;
    }

    setLogin(true);
}

if (Login) {
    return <Navigate to="/accountprofile" />
}

      


    return (
        <>
         <h1>Velkommen tilbage</h1>
         <p>Email</p>
         <form onSubmit={login}> 
            <input 
            id="email"
            type="email" 
            name="email" 
            placeholder="Din email..." 
            required/>
            <img src={icons8atsign1} alt="email" />

            <p>Password</p>
            <input 
            id="password"
            type="password" 
            name="password" 
            placeholder="Dit password..." 
            required/>
            <img src={icons8atsing2} alt="password" />
            </form>

            {error && <p>{error}</p>}
            <p>Har du ikke allerede en konto?{" "} Klik 
                <NavLink to="/signup">her</NavLink> 
                for at gå til sign up </p>
                <button type="submit">Login</button>

     <section>
            <img src={banner_image2} alt="Banner 2" />
            <div>
    <h4>Donationer til Dato</h4>
            <p>Sammen med dig har vi siden staren samlet </p>
            <strong>452.231,50 kr</strong>
            <p> Tak fordi du handler brugt, med omtanke for klimaet </p>
    
            </div>
        </section>
        <section >
                <img src={banner_image3} alt="Banner 3" />
                <div>
                <h4>Donationer i år</h4>
                <p> Sammen med dig har vi fået indsamlet:</p>
                <strong>112.452,17 kr</strong>
                <p> Tak fordi handler brugt med omtanke for jorden</p>
                </div>
            </section>
        
        
        
        
        </>
    



    )
}
