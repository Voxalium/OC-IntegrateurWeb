import logo from "../../assets/LOGO.svg";
import { Link } from "react-router-dom";
function Header() {
    return (
        <nav>
            <img src={logo} alt="" />
            <Link to="/">Accueil </Link>
            <Link to="/apropos">À propos</Link>
        </nav>
    );
}

export default Header;
