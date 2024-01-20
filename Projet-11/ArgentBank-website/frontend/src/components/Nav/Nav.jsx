import logo from "../../assets/argentBankLogo.png";
function Nav() {
    return (
        <nav className="main-nav">
            <a className="main-nav-logo" href="#">
                <img
                    src={logo}
                    alt="Argent Bank Logo"
                    className="main-nav-logo-image"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </a>
            <div>
                <a href="#" className="main-nav-item">
                    <i className="fa fa-user-circle"></i> Sign In
                </a>
            </div>
        </nav>
    );
}

export default Nav;

//ROUTING à faire;
