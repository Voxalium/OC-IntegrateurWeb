import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

import { logout } from "../../redux/actions/login.actions.js";

import Nav from "../Nav/Nav.jsx";

import logo from "../../assets/argentBankLogo.webp";
function Header() {
    const isConnected = useSelector((state) => state.loginReducer.isConnected);

    const userName = useSelector(
        (state) => state.userReducer.userData.userName
    );

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = () => {
        dispatch(logout());
        sessionStorage.clear();
        localStorage.clear();
        navigate("/");
    };

    return (
        <header>
            <nav className="main-nav">
                <NavLink to="/" className="main-nav-logo">
                    <img
                        src={logo}
                        alt="Argent Bank Logo"
                        className="main-nav-logo-image"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </NavLink>
                {isConnected ? (
                    <div>
                        <NavLink to="/profile" className="main-nav-item">
                            <i className="fa fa-user-circle firstName">
                                {" "}
                                {userName}
                            </i>
                        </NavLink>
                        <NavLink
                            to="/"
                            onClick={logoutHandler}
                            className="main-nav-item"
                        >
                            <i className=" fa fa-sign-out"></i> Sign Out
                        </NavLink>
                    </div>
                ) : (
                    <NavLink to="/login" className="main-nav-item">
                        <i className="fa fa-user-circle"></i> Sign In
                    </NavLink>
                )}
            </nav>
        </header>
    );
}

export default Header;
