import logo from "../../assets/argentBankLogo.png";
import { NavLink } from "react-router-dom";
function Nav() {
    return (
        <nav className="main-nav">
            <NavLink to="/" className="main-nav-logo">
                <img
                    src={logo}
                    alt="Argent Bank Logo"
                    className="main-nav-logo-image"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>
            <NavLink to="/signin" className="main-nav-item">
                <i className="fa fa-user-circle"></i> Sign In
            </NavLink>
        </nav>
    );
}

export default Nav;

