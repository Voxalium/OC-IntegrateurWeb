import Header from "../../components/Header/Header";
import Account from "../../components/Account/Account";
function Logged() {
    document.title = "Argent Bank - User"
    return (
        <main className="main bg-dark">
            <Header />
            <h2 className="sr-only">Accounts</h2>
            <Account />
        </main>
    );
}
export default Logged;
