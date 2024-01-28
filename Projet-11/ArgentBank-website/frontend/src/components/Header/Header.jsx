import Button from "../Button/Button";
function Header() {
    return (
        <div className="header">
            <h1>
                Welcome back <br />
                "Username here !"
            </h1>
            <Button title="Edit Name" className="edit-button" />
        </div>
    );
}

export default Header;
