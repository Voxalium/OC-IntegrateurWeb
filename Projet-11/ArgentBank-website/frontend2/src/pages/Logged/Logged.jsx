import Header from "../../components/Header/Header";
import Account from "../../components/Account/Account";
import data from "../../data/mockData.json";
function Logged() {
    document.title = "Argent Bank - User";
    return (
        <main className="main bg-dark">
            <Header />
            <h2 className="sr-only">Accounts</h2>
            {data?.map((content, index) => (
                <Account
                    key={index}
                    title={content.title}
                    amount={content.amount}
                    description={content.description}
                />
            ))}
        </main>
    );
}
export default Logged;
