import { NavLink } from "react-router";

export function Navigation() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/products/?category=1">Camping</NavLink>
                </li>
                <li>
                    <NavLink to="/products/?category=2">Elektronik</NavLink>
                </li>
                <li>
                    <NavLink to="/products/?category=3">Have og byg</NavLink>
                </li>
                <li>
                    <NavLink to="/products/?category=4">Tøj og mode</NavLink>
                </li>
                <li>
                    <NavLink to="/products/?category=5">Cykler</NavLink>
                </li>
                <li>
                    <NavLink to="/products/?category=6">Biler</NavLink>
                </li>
                <li>
                    <NavLink to="/products/?category=7">Hobby</NavLink>
                </li>
                <li>
                    <NavLink to="/products/?category=8">Mobil og telefoni</NavLink>
                </li>
                <li>
                    <NavLink to="/products/?category=9">Musik instrumenter</NavLink>
                </li>
                <li>
                    <NavLink to="/products/?category=10">Billede og lyd</NavLink>
                </li>
                <li>
                    <NavLink to="/products/?category=11">Scooter og knallerter</NavLink>
                </li>
                <li>
                    <NavLink to="/products/?category=12">Bøger og blade</NavLink>
                </li>
                <li>
                    <NavLink to="/?category=13">Diverse</NavLink>
                </li>
            </ul>
        </nav>
    )
}