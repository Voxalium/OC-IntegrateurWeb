import logo from "../assets/LOGO.svg";
import { Link } from "react-router-dom";
function Header() {
    return (
        <header>
            <img src={logo} alt="" />
            <nav>
                <Link to="/">Accueil </Link>
                <Link to="/apropos">À propos</Link>
            </nav>
        </header>
    );
}

export default Header;
