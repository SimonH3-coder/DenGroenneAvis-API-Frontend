import banner_image2 from "../assets/banner_image2.jpg";
import banner_image3 from "../assets/banner_image3.jpg";
import icons8atsign1 from "../assets/icons8atsign1.png";
import icons8atsing2 from "../assets/icons8atsign2.png";
import { NavLink } from "react-router";

export function Loginpage() {
    const login = async (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const body = await Json.stringify({
            email: email,
            password: password,
        })

        const res = await fetch('http://localhost:4000/api/login', {
        method: 'POST',
        body: body,
        })

        console.log(res);
        console.log("email og password", email, password);
    }


    return (
        <>
         <h1>Velkommen tilbage</h1>
         <p>Email</p>
         <form onSubmit={(e) => login(e)}> 
            <input 
            type="text" 
            name="email" 
            placeholder="Din email..." />
            <img src={icons8atsign1} alt="email" />

            <p>Password</p>
            <input 
            type="password" 
            name="password" 
            placeholder="Dit password..." />
            <img src={icons8atsing2} alt="password" />
            </form>
            <p>Har du ikke allerede en konto? Klik 
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
