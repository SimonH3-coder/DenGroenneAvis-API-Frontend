 import { NavLink } from "react-router";
import style from "./Footer.module.scss";

export function Footer() {
    return (
        <footer className={style.footerstyle}>
            <section>
                <h3>Nyhedsbrev</h3>
                <p>Vil du være med på den grønne front? Tilmeld dig vores nyhedsbrev
                    og få de seneste klima opdateringer direkte i din indbakke
                </p>
                <form>
                     <input type="email" text="email" placeholder='email' />
            <input type="submit" value="Tilmeld" />
                </form>

            </section>
            <section>
                <h3>Kontakt</h3>
                <p>Redningen 32</p>
                <p>2210 Vinterby Øster</p>
                <p>+45 88229422</p>
                <p>dga@info.dk</p>
                </section>
            <section>
                <h3>FN's Verdensmål</h3>
                <p>Vi støtter på organisatorisk plan om FM's verdensmål 
                    og har derfor besluttet at en del af overskuddet går
                    direkte til verdensmål nr. 13; Kilmahandling</p>
                    { <NavLink to="/verdensmaal" >Læs mere om verdensmålene her</NavLink>}
                </section>
            </footer>
    )
}

