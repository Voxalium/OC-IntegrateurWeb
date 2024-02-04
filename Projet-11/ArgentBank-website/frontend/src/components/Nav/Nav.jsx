import logo from "../../assets/argentBankLogo.png";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/actions/login.actions";
function Nav() {
    const dispatch = useDispatch();
    const isConnected = useSelector((state) => state.loginReducer.isConnected);
    //GETUSERNAME !
    // const firstName = useSelector...

    const handleLogout = () => {
        dispatch(logout());
        sessionStorage.clear();
        localStorage.clear();
    };
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
            {isConnected ? (
                <NavLink
                    to="/"
                    onClick={handleLogout}
                    className="main-nav-item"
                >
                    <i className="fa fa-sign-out"></i> Sign Out
                </NavLink>
            ) : (
                <NavLink to="/signin" className="main-nav-item">
                    <i className="fa fa-user-circle"></i> Sign In
                </NavLink>
            )}
        </nav>
    );
}

export default Nav;
