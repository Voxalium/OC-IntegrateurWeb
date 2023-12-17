import logo from "../assets/LOGO.svg";
import { NavLink } from "react-router-dom";
function Header() {
    return (
        <header>
            <img src={logo} alt="logo kasa" />
            <nav>
                <NavLink to="/">Accueil </NavLink>
                <NavLink to="/apropos">À propos</NavLink>
            </nav>
        </header>
    );
}

export default Header;
